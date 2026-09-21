"use client";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        p: {
          xs: 2,
          md: 4,
        },
      }}
    >
     
      <Paper
        sx={{
          mb: 3,
          px: 2,
          py: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            SENSORIAQ
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            Analisador de Telemetria
          </Typography>
        </Box>

        <Chip
          label="POC / DESAFIO TÉCNICO"
          color="primary"
          variant="outlined"
        />
      </Paper>

      {/* =====================================================
          TITLE
          ===================================================== */}

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography
          variant="overline"
          color="secondary.main"
        >
          MVP / VALIDADOR DE MEDIÇÕES
        </Typography>

        <Typography variant="h4" sx={{ mt: 0.5 }}>
          Processamento e Análise de Telemetria
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 1,
            maxWidth: 800,
          }}
        >
          Insira uma sequência temporal de leituras para computar
          medições válidas, desconsiderar falhas de sensor no cálculo
          dos deltas consecutivos e alertar variações bruscas acima
          do limiar configurado.
        </Typography>
      </Paper>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "minmax(300px, 1fr) minmax(500px, 2fr)",
          },
          gap: 2,
        }}
      >

        <Stack spacing={2}>
          {/* Sequence */}

          <Card>
            <CardContent>
              <Typography
                variant="subtitle1"
                color="primary.main"
              >
                ≡ Sequência de Medições
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 1 }}
              >
                Intervalo: HH:MM → valor
              </Typography>

              <Box
                component="pre"
                sx={{
                  mt: 2,
                  mb: 0,
                  p: 2,
                  bgcolor: "surface.main",
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                  fontFamily:
                    "var(--font-jetbrains-mono), monospace",
                  fontSize: "0.7rem",
                  whiteSpace: "pre-wrap",
                  overflowX: "auto",
                }}
              >
{`10:00 → 10.0
10:10 → 11.5
10:20 → sen
10:30 → 15.0
10:40 → 17.3`}
              </Box>

              <TextField
                fullWidth
                label="Limiar de Mudança Brusca"
                type="number"
                defaultValue={5}
                sx={{ mt: 2 }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        unid
                      </Typography>
                    ),
                  },
                }}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Analisar Medições
              </Button>

              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                sx={{ mt: 1 }}
              >
                Exemplo
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: "block",
                  mt: 2,
                }}
              >
                Dica: amostras com texto{" "}
                <strong>sen</strong>,{" "}
                <strong>null</strong> ou{" "}
                <strong>N/D</strong> são ignoradas no
                processamento.
              </Typography>
            </CardContent>
          </Card>

          {/* Color palette */}

          <Card>
            <CardContent>
              <Typography variant="subtitle1">
                Theme Preview
              </Typography>

              <Stack spacing={1.5} sx={{ mt: 2 }}>
                <ColorPreview
                  name="Primary"
                  color="primary.main"
                  text="#0284C7"
                />

                <ColorPreview
                  name="Secondary"
                  color="secondary.main"
                  text="#059669"
                />

                <ColorPreview
                  name="Tertiary"
                  color="tertiary.main"
                  text="#E11048"
                />

                <ColorPreview
                  name="Neutral"
                  color="neutral.main"
                  text="#64748B"
                />
              </Stack>
            </CardContent>
          </Card>
        </Stack>


        <Stack spacing={2}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 1,
            }}
          >
            <Metric
              label="VÁLIDAS"
              value="4"
              color="secondary.main"
            />

            <Metric
              label="INVÁLIDAS"
              value="1"
              color="tertiary.main"
            />

            <Metric
              label="MÍNIMO"
              value="10.0"
              detail="10:00"
            />

            <Metric
              label="MÁXIMO"
              value="18.0"
              detail="10:15"
            />
          </Box>

          {/* Average */}

          <Card>
            <CardContent>
              <Typography
                variant="overline"
                color="text.secondary"
              >
                MÉDIA
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontFamily:
                    "var(--font-jetbrains-mono), monospace",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "primary.main",
                }}
              >
                14.25
              </Typography>

              <Typography variant="caption">
                N = 4 válidos
              </Typography>
            </CardContent>
          </Card>

          {/* Alert */}

          <Alert
            severity="error"
            variant = "filled"
            
          >
            <Typography
              component="span"
              sx={{ fontWeight: 700 }}
            >
              MUDANÇA BRUSCA DETECTADA
            </Typography>{" "}
            — Salto de 4.0 para 10.5, superando o
            limiar configurado de 5.0.
          </Alert>

          {/* Table */}

          <Card>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ p: 2 }}>
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
                  5 registros
                </Typography>
              </Box>

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
                    <MeasurementRow
                      time="10:00"
                      value="10.0"
                      status="VÁLIDA"
                      variation="—"
                      diagnostic="Inicial"
                    />

                    <MeasurementRow
                      time="10:05"
                      value="11.5"
                      status="VÁLIDA"
                      variation="+1.5"
                      diagnostic="Normal"
                    />

                    <MeasurementRow
                      time="10:10"
                      value="sen"
                      status="INVÁLIDA"
                      variation="—"
                      diagnostic="Sensor"
                    />

                    <MeasurementRow
                      time="10:15"
                      value="18.0"
                      status="VÁLIDA"
                      variation="+6.5"
                      diagnostic="Brusca"
                    />
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>

          {/* Buttons */}

          <Card>
            <CardContent>
              <Typography variant="subtitle1">
                Componentes do Theme
              </Typography>

              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
                sx={{ mt: 2 }}
              >
                <Button variant="contained">
                  Primary
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                >
                  Secondary
                </Button>

                <Button
                  variant="contained"
                  color="tertiary"
                >
                  Tertiary
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                >
                  Outlined
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                >
                  Outlined
                </Button>

                <Button
                  variant="text"
                  color="primary"
                >
                  Text
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Box
        component="footer"
        sx={{
          mt: 4,
          pt: 2,
          borderTop: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="caption">
          SensoraIQ • POC de Telemetria e Detecção de Deltas
        </Typography>

        <Typography variant="caption">
          THEME / MUI 9
        </Typography>
      </Box>
    </Box>
  );
}

/* ===========================================================
   COMPONENTES AUXILIARES
   =========================================================== */

type MetricProps = {
  label: string;
  value: string;
  detail?: string;
  color?: string;
};

function Metric({
  label,
  value,
  detail,
  color = "text.primary",
}: MetricProps) {
  return (
    <Card>
      <CardContent sx={{ p: 1.5 }}>
        <Typography
          variant="overline"
          color="text.secondary"
        >
          {label}
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontFamily:
              "var(--font-jetbrains-mono), monospace",
            fontSize: "1.5rem",
            fontWeight: 700,
            color,
          }}
        >
          {value}
        </Typography>

        {detail && (
          <Typography
            variant="caption"
            color="text.secondary"
          >
            {detail}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

type ColorPreviewProps = {
  name: string;
  color: string;
  text: string;
};

function ColorPreview({
  name,
  color,
  text,
}: ColorPreviewProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: 1,
          bgcolor: color,
          border: 1,
          borderColor: "divider",
        }}
      />

      <Box>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            fontWeight: 700,
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

type MeasurementRowProps = {
  time: string;
  value: string;
  status: "VÁLIDA" | "INVÁLIDA";
  variation: string;
  diagnostic: string;
};

function MeasurementRow({
  time,
  value,
  status,
  variation,
  diagnostic,
}: MeasurementRowProps) {
  const valid = status === "VÁLIDA";

  return (
    <TableRow hover>
      <TableCell>{time}</TableCell>

      <TableCell
        sx={{
          fontFamily:
            "var(--font-jetbrains-mono), monospace",
        }}
      >
        {value}
      </TableCell>

      <TableCell>
        <Chip
          label={status}
          size="small"
          color={valid ? "secondary" : "tertiary"}
          variant={valid ? "filled" : "outlined"}
        />
      </TableCell>

      <TableCell
        sx={{
          fontFamily:
            "var(--font-jetbrains-mono), monospace",
        }}
      >
        {variation}
      </TableCell>

      <TableCell>{diagnostic}</TableCell>
    </TableRow>
  );
}