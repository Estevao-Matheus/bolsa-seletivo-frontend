import { Alert, Stack, Typography } from "@mui/material";
import { TelemetryPayload } from "./types";

type SuddenChangeAlertProps = {
  changes: TelemetryPayload["mudancas_bruscas"];
};

export default function SuddenChangeAlert({
  changes,
}: SuddenChangeAlertProps) {
  if (changes.length === 0) {
    return (
      <Alert severity="success" >
        <Typography component="span" fontWeight={700}>
          NENHUMA MUDANÇA BRUSCA
        </Typography>{" "}
        — Não foram detectadas variações acima do limiar
        configurado.
      </Alert>
    );
  }

  return (
    <Alert severity="error" >
      <Stack spacing={0.5}>
        <Typography
          component="div"
          sx={{ fontWeight: 700 }}
        >
          MUDANÇA BRUSCA DETECTADA
          {changes.length > 1
            ? ` — ${changes.length} eventos`
            : " — 1 evento"}
        </Typography>

        {changes.map((change, index) => (
          <Typography
            key={`${change.de.hora}-${change.para.hora}-${index}`}
            variant="body2"
          >
            Salto de{" "}
            <strong>{change.de.valor.toFixed(1)}</strong>{" "}
            em {change.de.hora} para{" "}
            <strong>{change.para.valor.toFixed(1)}</strong>{" "}
            em {change.para.hora}.
            {" "}
            Diferença:{" "}
            <strong>{change.diferenca.toFixed(1)}</strong>
          </Typography>
        ))}
      </Stack>
    </Alert>
  );
}