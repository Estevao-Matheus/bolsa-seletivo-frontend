import { Measurement } from "./MeasurementsTable";

export const mockMeasurements: Measurement[] = [
  {
    hora: "10:00",
    valor: 10.0,
    status: "VÁLIDA",
    variacao: null,
    diagnostico: "Inicial",
  },

  {
    hora: "10:05",
    valor: 11.5,
    status: "VÁLIDA",
    variacao: 1.5,
    diagnostico: "Normal",
  },

  {
    hora: "10:10",
    valor: "sen",
    status: "INVÁLIDA",
    variacao: null,
    diagnostico: "Sensor",
  },

  {
    hora: "10:15",
    valor: 18.0,
    status: "VÁLIDA",
    variacao: 6.5,
    diagnostico: "Brusca",
  },

  {
    hora: "10:20",
    valor: 17.3,
    status: "VÁLIDA",
    variacao: -0.7,
    diagnostico: "Normal",
  },
];