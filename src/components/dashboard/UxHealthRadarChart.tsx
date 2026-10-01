import React from "react"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { HealthAreaSchema } from "@/lib/data"
import { z } from "zod"

type HealthArea = z.infer<typeof HealthAreaSchema>

interface UxHealthRadarChartProps {
  health: HealthArea[]
}

export function UxHealthRadarChart({ health }: UxHealthRadarChartProps) {
  return (
    <Card className="border-border bg-card shadow-xs flex flex-col justify-between">
      <CardHeader className="p-4 pb-2 space-y-1">
        <CardTitle className="text-sm font-bold text-foreground">
          Holistic UX Health & Heuristic Radar
        </CardTitle>
        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
          Design system Consistency (9.4) and Performance (8.9) lead across all evaluated heuristic dimensions.
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-2 space-y-3">
        <div className="h-56 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <RadarChart data={health} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
              <PolarGrid stroke="var(--border)" opacity={0.5} />
              <PolarAngleAxis
                dataKey="area"
                stroke="var(--foreground)"
                fontSize={13}
                tickLine={false}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 10]}
                stroke="var(--muted-foreground)"
                fontSize={12}
              />
              <Tooltip
                formatter={(val: any) => [`${val} / 10.0`, "Score"]}
                contentStyle={{
                  backgroundColor: "var(--popover)",
                  borderColor: "var(--border)",
                  borderRadius: "0.5rem",
                  fontSize: "15px",
                  color: "var(--foreground)",
                }}
              />
              <Radar
                name="UX Health"
                dataKey="score"
                stroke="var(--chart-1, #00AB55)"
                fill="var(--chart-1, #00AB55)"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Accessible Data Alternative */}
        <details className="text-xs text-muted-foreground group">
          <summary className="cursor-pointer font-medium hover:text-foreground">
            View data table
          </summary>
          <div className="mt-2 border border-border rounded overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-muted text-muted-foreground font-semibold">
                <tr>
                  <th className="p-1.5">UX Dimension</th>
                  <th className="p-1.5">Score (0–10)</th>
                  <th className="p-1.5">Benchmark Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {health.map((h) => (
                  <tr key={h.area} className="hover:bg-muted/30">
                    <td className="p-1.5 font-medium">{h.area}</td>
                    <td className="p-1.5 font-bold font-mono">{h.score}</td>
                    <td className="p-1.5 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                      {h.score >= 9.0 ? "World Class" : h.score >= 8.0 ? "Strong" : "Passing"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        {/* Footer */}
        <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
          Source: Nielsen-Norman & ISO 9241 UX Health Audit · 6 Dimension Index · 2021
        </div>
      </CardContent>
    </Card>
  )
}
