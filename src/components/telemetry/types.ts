export interface TelemetryPayload {
  estatisticas: {
    max: number;
    media: number;
    min: number;
  };

  invalidas: number;

  lista_invalidas: {
    hora: string;
  }[];

  mudancas_bruscas: {
    de: {
      hora: string;
      valor: number;
    };

    diferenca: number;

    para: {
      hora: string;
      valor: number;
    };
  }[];

  total: number;
  validas: number;
}