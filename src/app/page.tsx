"use client";

import { useState } from "react";
import axios from "axios";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import MetricCard from "@/components/telemetry/MetricCard";
import MeasurementsTable from "@/components/telemetry/MeasurementsTable";
import SuddenChangeAlert from "@/components/telemetry/SuddenChangeAlert";


import { buildMeasurements } from "@/components/telemetry/buildMeasurements";
import { Measurement } from "@/components/telemetry/MeasurementsTable";
import { buildTelemetryRequest } from "@/components/telemetry/parser";
import { TelemetryPayload } from "@/components/telemetry/types";
import { api } from "@/lib/api";                    // 👈 novo

export default function Home() {
  const [sequence, setSequence] = useState("");
  const [threshold, setThreshold] = useState("5.0");
  const [payload, setPayload] = useState<TelemetryPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [measurements, setMeasurements] = useState<Measurement[]>([]);

  const handleAnalyze = async () => {
    setError("");
    setLoading(true);

    try {
      const request = buildTelemetryRequest(sequence, threshold);

      const { data } = await api.post<TelemetryPayload>(
        "/api/processar",
        request,
      );

      setPayload(data);
      setMeasurements(buildMeasurements(request, data)); 
    } catch (err) {
      if (err instanceof Error && !axios.isAxiosError(err)) {
        setError(err.message);
      }
      else if (axios.isAxiosError(err)) {
        const msg =
          err.response?.data?.erro ??
          err.message ??
          "Erro ao chamar a API.";
        setError(msg);
      }
      else {
        setError("Erro inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleExample = () => {
    setSequence(
      `10:00 -> 10.0
10:05 -> 11.5
10:10 -> sem valor
10:15 -> 18.0
10:20 -> 17.5`,
    );
    setThreshold("5.0");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        px: { xs: 2, md: 4 },
        py: { xs: 2, md: 3 },
      }}
    >
      <Card sx={{ mb: 3 }}>
        <CardContent
          sx={{
            px: 2,
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "primary.main", lineHeight: 1 }}
              >
                SENSORIAQ
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Analisador de Telemetria
              </Typography>
            </Box>
          </Box>

          <Chip
            label="POC / DESAFIO TÉCNICO"
            color="primary"
            variant="outlined"
            size="small"
          />
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ p: 2.5 }}>
          <Typography variant="overline" color="secondary.main">
            MVP / VALIDADOR DE MEDIÇÕES
          </Typography>

          <Typography variant="h4" sx={{ mt: 0.5 }}>
            Processamento e Análise de Telemetria
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, maxWidth: 900 }}>
            Insira uma sequência temporal de leituras para computar medições
            válidas, desconsiderar falhas de sensor no cálculo dos deltas
            consecutivos e alertar variações bruscas acima do limiar
            configurado.
          </Typography>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "minmax(280px, 0.95fr) minmax(500px, 1.8fr)",
          },
          gap: 2,
          alignItems: "start",
        }}
      >
        <Stack spacing={2}>
          <Card>
            <CardContent sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <Box>
                  <Typography variant="subtitle1" color="primary.main">
                    ≡ Sequência de Medições
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Insira os dados no formato:
                  </Typography>
                </Box>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  HH:MM → valor
                </Typography>
              </Box>

              <TextField
                fullWidth
                multiline
                minRows={7}
                value={sequence}
                onChange={(e) => setSequence(e.target.value)}
                placeholder={`10:00 -> 10.0
10:05 -> 11.5
10:10 -> 14.10
10:15 -> 18.0`}
                sx={{
                  mt: 1.5,
                  "& textarea": {
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "0.7rem",
                    lineHeight: 1.6,
                  },
                }}
              />

              <Box
                sx={{
                  mt: 2,
                  p: 1.5,
                  bgcolor: "surface.main",
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", mb: 1 }}
                >
                  Limiar de Mudança Brusca (Δ)
                </Typography>

                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  value={threshold}
                  onChange={(e) => setThreshold(e.target.value)}
                  slotProps={{
                    htmlInput: { step: "0.1", min: "0" },
                    input:{
                      endAdornment: (
                      <Typography variant="caption" color="text.secondary">
                        unid
                      </Typography>
                    ),
                  }
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1.5fr 0.7fr" },
                  gap: 1,
                  mt: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAnalyze}
                  disabled={loading}
                  startIcon={
                    loading ? <CircularProgress size={16} color="inherit" /> : null
                  }
                >
                  {loading ? "Analisando..." : "▷ Analisar Medições"}
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleExample}
                  disabled={loading}
                >
                  Exemplo
                </Button>
              </Box>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 2, lineHeight: 1.6 }}
              >
                <strong>Dica:</strong> amostras com texto{" "}
                <Box
                  component="span"
                  sx={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "text.primary",
                  }}
                >
                  sem valor
                </Box>
                ,{" "}
                <Box
                  component="span"
                  sx={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "text.primary",
                  }}
                >
                  null
                </Box>
                ,{" "}
                <Box
                  component="span"
                  sx={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "text.primary",
                  }}
                >
                  n/d ou nd
                </Box>{" "}
                são ignoradas no processamento.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent sx={{ p: 2 }}>
              <Typography variant="subtitle1" color="primary.main">
                Formato de Entrada
              </Typography>

              <Typography variant="body2" sx={{ mt: 1 }}>
                Cada linha representa uma medição independente.
              </Typography>

              <Box
                component="pre"
                sx={{
                  mt: 1.5,
                  mb: 0,
                  p: 1.5,
                  bgcolor: "surface.main",
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "0.65rem",
                  lineHeight: 1.6,
                  overflowX: "auto",
                }}
              >
{`HH:MM -> valor

10:00 -> 10.0
10:05 -> 11.5
10:10 -> 14.10`}
              </Box>
            </CardContent>
          </Card>
        </Stack>

        {/* ======================= COLUNA DIREITA (resultados) ======================= */}
        <Stack spacing={2}>
          {!payload && !loading && (
            <Alert severity="info">
              Insira as medições e clique em <strong>Analisar Medições</strong>{" "}
              para ver o relatório.
            </Alert>
          )}

          {error && <Alert severity="error">{error}</Alert>}

          {payload && (
            <>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    md: "repeat(5, 1fr)",
                  },
                  gap: 1,
                }}
              >
                <MetricCard
                  label="VÁLIDAS"
                  value={payload.validas}
                  detail="registros"
                  color="secondary.main"
                />

                <MetricCard
                  label="INVÁLIDAS"
                  value={payload.invalidas}
                  detail="descartadas"
                  color="tertiary.main"
                />

                <MetricCard
                  label="MÍNIMO"
                  value={payload.estatisticas.min.toFixed(1)}
                />

                <MetricCard
                  label="MÁXIMO"
                  value={payload.estatisticas.max.toFixed(1)}
                />

                <MetricCard
                  label="MÉDIA"
                  value={payload.estatisticas.media.toFixed(2)}
                  detail={`N = ${payload.validas} válidos`}
                  color="primary.main"
                />
              </Box>

              <SuddenChangeAlert changes={payload.mudancas_bruscas} />

              <MeasurementsTable measurements={measurements} />

              {payload.lista_invalidas.length > 0 && (
                <Card>
                  <CardContent sx={{ p: 2 }}>
                    <Typography variant="subtitle1" color="tertiary.main">
                      Medições Inválidas
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      As seguintes medições foram desconsideradas no
                      processamento:
                    </Typography>

                    <Stack
                      direction="row"
                      sx={{ mt: 1.5, flexWrap: "wrap", gap: 1 }}
                    >
                      {payload.lista_invalidas.map((item) => (
                        <Chip
                          key={item.hora}
                          label={`${item.hora} — inválida`}
                          color="error"
                          variant="outlined"
                          size="small"
                          sx = {{mr:1}}
                        />
                      ))}
                  
                    </Stack>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </Stack>
      </Box>

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
          gap: 2,
        }}
      >
        <Typography variant="caption">
          SensoraIQ • POC de Telemetria e Detecção de Deltas
        </Typography>
        <Typography variant="caption">
          Construído para validação rápida de requisitos
        </Typography>
      </Box>
    </Box>
  );
}