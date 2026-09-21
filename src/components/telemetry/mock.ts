import { TelemetryPayload } from "./types";

export const mockTelemetryPayload: TelemetryPayload = {
  estatisticas: {
    max: 18.0,
    media: 14.25,
    min: 10.0,
  },

  invalidas: 1,

  lista_invalidas: [
    {
      hora: "10:10",
    },
  ],

  mudancas_bruscas: [
    {
      de: {
        hora: "10:05",
        valor: 11.5,
      },

      diferenca: 6.5,

      para: {
        hora: "10:15",
        valor: 18.0,
      },
    },
  ],

  total: 5,

  validas: 4,
};