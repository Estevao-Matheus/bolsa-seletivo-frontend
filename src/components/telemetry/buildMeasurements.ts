import { TelemetryPayload, TelemetryRequest } from "./types";
import { Measurement } from "./MeasurementsTable";

export function buildMeasurements(
  request: TelemetryRequest,
  payload: TelemetryPayload,
): Measurement[] {
  
  const horasBruscas = new Set(
    payload.mudancas_bruscas.map((m) => m.para.hora),
  );

  const result: Measurement[] = [];
  let ultimaValida: number | null = null;

  for (const med of request.medicoes) {
    if (med.valor === null) {
      result.push({
        hora: med.hora,
        valor: null,
        status: "INVÁLIDA",
        variacao: null,
        diagnostico: "Sensor",
      });
      continue;
    }

    let variacao: number | null = null;
    let diagnostico: Measurement["diagnostico"];

    if (ultimaValida === null) {
      diagnostico = "Inicial";
    } else {
      variacao = med.valor - ultimaValida;
      diagnostico = horasBruscas.has(med.hora) ? "Brusca" : "Normal";
    }

    result.push({
      hora: med.hora,
      valor: med.valor,
      status: "VÁLIDA",
      variacao,
      diagnostico,
    });

    ultimaValida = med.valor; 
  }

  return result;
}