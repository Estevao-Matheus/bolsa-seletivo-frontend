import { Card, CardContent, Typography } from "@mui/material";

type MetricCardProps = {
  label: string;
  value: string | number;
  detail?: string;
  color?: string;
};

export default function MetricCard({
  label,
  value,
  detail,
  color = "text.primary",
}: MetricCardProps) {
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