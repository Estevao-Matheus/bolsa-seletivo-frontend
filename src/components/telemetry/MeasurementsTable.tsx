import {
  Card,
  CardContent,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export type Measurement = {
  hora: string;
  valor: number | string;
  status: "VÁLIDA" | "INVÁLIDA";
  variacao: number | null;
  diagnostico: string;
};

type MeasurementsTableProps = {
  measurements: Measurement[];
};

export default function MeasurementsTable({
  measurements,
}: MeasurementsTableProps) {
  return (
    <Card>
      <CardContent sx={{ p: 0 }}>
        <div style={{ padding: 16 }}>
          <Typography
            variant="subtitle1"
            color="primary.main"
          >
            ▦ Tabela de Medições Processadas
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            {measurements.length} registros
          </Typography>
        </div>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Horário</TableCell>
                <TableCell>Entrada Bruta</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Variação (Δ)</TableCell>
                <TableCell>Diagnóstico</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {measurements.map((measurement, index) => {
                const valid =
                  measurement.status === "VÁLIDA";

                return (
                  <TableRow
                    hover
                    key={`${measurement.hora}-${index}`}
                  >
                    <TableCell>
                      {measurement.hora}
                    </TableCell>

                    <TableCell
                      sx={{
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                      }}
                    >
                      {typeof measurement.valor ===
                      "number"
                        ? measurement.valor.toFixed(1)
                        : measurement.valor}
                    </TableCell>

                    <TableCell>
                      <Chip
                        label={measurement.status}
                        size="small"
                        color={
                          valid
                            ? "secondary"
                            : "tertiary"
                        }
                        variant={
                          valid
                            ? "filled"
                            : "outlined"
                        }
                      />
                    </TableCell>

                    <TableCell
                      sx={{
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                      }}
                    >
                      {measurement.variacao === null
                        ? "—"
                        : measurement.variacao > 0
                          ? `+${measurement.variacao.toFixed(1)}`
                          : measurement.variacao.toFixed(1)}
                    </TableCell>

                    <TableCell>
                      {measurement.diagnostico}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}