import React, { useState } from "react"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { IterationSchema } from "@/lib/data"
import { z } from "zod"

type Iteration = z.infer<typeof IterationSchema>

interface IterationsChartProps {
  iterations: Iteration[]
}

export function IterationsChart({ iterations }: IterationsChartProps) {
  const [metric, setMetric] = useState<"sus" | "taskSuccess" | "errorRate">("sus")

  const metricConfig = {
    sus: {
      label: "SUS Usability Score (0-100)",
      color: "var(--chart-1, #00AB55)",
      takeaway:
        "SUS usability score improved +14 points from 62 to 76 through V1→V3 iterative refactors.",
    },
    taskSuccess: {
      label: "Task Success Rate (%)",
      color: "var(--chart-2, #3366FF)",
      takeaway:
        "Task success jumped from 58% to 82% following visual hierarchy and filter overhauls.",
    },
    errorRate: {
      label: "User Error Rate (%)",
      color: "var(--chart-3, #FF5630)",
      takeaway:
        "Error rates dropped from 19% down to 6%, meeting executive release tolerance thresholds.",
    },
  }[metric]

  return (
    <Card className="border-border bg-card shadow-xs flex flex-col justify-between">
      <CardHeader className="p-4 pb-2 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <CardTitle className="text-sm font-bold text-foreground">
            Improvement Over Iterations (V1 → V3)
          </CardTitle>
          <div className="flex items-center gap-1 bg-muted/60 p-0.5 rounded-lg border border-border">
            {(["sus", "taskSuccess", "errorRate"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMetric(m)}
                className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                  metric === m
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {m === "sus" ? "SUS Score" : m === "taskSuccess" ? "Success %" : "Errors %"}
              </button>
            ))}
          </div>
        </div>

        {/* Takeaway sentence mandated by guide */}
        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
          {metricConfig.takeaway}
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-2 space-y-3">
        <div className="h-56 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <LineChart data={iterations} margin={{ top: 10, right: 15, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
              <XAxis dataKey="version" stroke="var(--muted-foreground)" fontSize={14} tickLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={14} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--popover)",
                  borderColor: "var(--border)",
                  borderRadius: "0.5rem",
                  fontSize: "15px",
                  color: "var(--foreground)",
                }}
              />
              <Line
                type="monotone"
                dataKey={metric}
                stroke={metricConfig.color}
                strokeWidth={3}
                dot={{ r: 4, fill: metricConfig.color, strokeWidth: 2, stroke: "var(--background)" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
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
                  <th className="p-1.5">Version</th>
                  <th className="p-1.5">SUS</th>
                  <th className="p-1.5">Success %</th>
                  <th className="p-1.5">Error %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {iterations.map((row) => (
                  <tr key={row.version} className="hover:bg-muted/30">
                    <td className="p-1.5 font-bold">{row.version}</td>
                    <td className="p-1.5">{row.sus}</td>
                    <td className="p-1.5">{row.taskSuccess}%</td>
                    <td className="p-1.5">{row.errorRate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        {/* Footer: Source · n · date */}
        <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
          Source: Usability Iteration Logs · n=42 participants · 2021 Foundation Release
        </div>
      </CardContent>
    </Card>
  )
}
