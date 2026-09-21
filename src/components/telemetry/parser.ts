import { TelemetryRequest } from "./types";

const NULL_VALUES = ["sen", "null", "n/d", "nd", ""];

export function parseMeasurements(
  sequence: string,
): TelemetryRequest["medicoes"] {
  const lines = sequence
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return lines.map((line, index) => {
   

    const parts = line.split("->");

    if (parts.length !== 2) {
      throw new Error(
        `Linha ${index + 1} inválida: "${line}". Use o formato HH:MM -> valor.`,
      );
    }

    const hora = parts[0].trim();
    const rawValue = parts[1].trim();


    if (!/^\d{2}:\d{2}$/.test(hora)) {
      throw new Error(
        `Linha ${index + 1}: horário inválido "${hora}". Use HH:MM.`,
      );
    }

    const [hours, minutes] = hora
      .split(":")
      .map(Number);

    if (
      hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59
    ) {
      throw new Error(
        `Linha ${index + 1}: horário inválido "${hora}".`,
      );
    }


    if (
      NULL_VALUES.includes(
        rawValue.toLowerCase(),
      )
    ) {
      return {
        hora,
        valor: null,
      };
    }


    const normalizedValue = rawValue.replace(",", ".");

    const valor = Number(normalizedValue);

    if (!Number.isFinite(valor)) {
      throw new Error(
        `Linha ${index + 1}: valor inválido "${rawValue}".`,
      );
    }

    return {
      hora,
      valor,
    };
  });
}

export function buildTelemetryRequest(
  sequence: string,
  threshold: string,
): TelemetryRequest {
  const limite = Number(
    threshold.replace(",", "."),
  );

  if (!Number.isFinite(limite)) {
    throw new Error(
      "O limiar de mudança brusca precisa ser um número válido.",
    );
  }

  if (limite < 0) {
    throw new Error(
      "O limiar de mudança brusca não pode ser negativo.",
    );
  }

  const medicoes = parseMeasurements(sequence);

  if (medicoes.length === 0) {
    throw new Error(
      "Insira pelo menos uma medição.",
    );
  }

  return {
    limite,
    medicoes,
  };
}

