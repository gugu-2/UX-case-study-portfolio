import React from "react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FunnelStepSchema } from "@/lib/data"
import { z } from "zod"

type FunnelStep = z.infer<typeof FunnelStepSchema>

interface DropOffFunnelChartProps {
  funnel: FunnelStep[]
}

export function DropOffFunnelChart({ funnel }: DropOffFunnelChartProps) {
  // Compute conversion & drop-off % from step to step
  const computedFunnel = funnel.map((step, idx) => {
    const prev = idx > 0 ? funnel[idx - 1].users : step.users
    const dropOffPercent = idx > 0 ? Math.round(((prev - step.users) / prev) * 100) : 0
    const totalRetentionPercent = Math.round((step.users / funnel[0].users) * 100)
    return {
      ...step,
      dropOffPercent,
      totalRetentionPercent,
    }
  })

  return (
    <Card className="border-border bg-card shadow-xs flex flex-col justify-between">
      <CardHeader className="p-4 pb-2 space-y-1">
        <CardTitle className="text-sm font-bold text-foreground">
          User Journey Drop-Off Funnel
        </CardTitle>
        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
          Largest friction point occurs between Table Interaction and Primary Action (-24% drop-off).
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-2 space-y-3">
        <div className="h-56 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <BarChart
              data={computedFunnel}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
              <XAxis
                dataKey="step"
                stroke="var(--muted-foreground)"
                fontSize={13}
                tickLine={false}
                tickFormatter={(val: string) =>
                  val.length > 12 ? `${val.substring(0, 10)}…` : val
                }
              />
              <YAxis stroke="var(--muted-foreground)" fontSize={14} tickLine={false} />
              <Tooltip
                formatter={(val: any, name: any, item: any) => [
                  `${val} users (${item.payload.totalRetentionPercent}% retained, -${item.payload.dropOffPercent}% drop-off)`,
                  "Volume",
                ]}
                contentStyle={{
                  backgroundColor: "var(--popover)",
                  borderColor: "var(--border)",
                  borderRadius: "0.5rem",
                  fontSize: "15px",
                  color: "var(--foreground)",
                }}
              />
              <Bar dataKey="users" radius={[4, 4, 0, 0]}>
                {computedFunnel.map((_, index) => (
                  <Cell
                    key={`funnel-cell-${index}`}
                    fill={`oklch(0.65 0.18 ${145 + index * 20})`}
                  />
                ))}
              </Bar>
            </BarChart>
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
                  <th className="p-1.5">Funnel Step</th>
                  <th className="p-1.5">Users</th>
                  <th className="p-1.5">Drop-off</th>
                  <th className="p-1.5">Total Retained</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {computedFunnel.map((row) => (
                  <tr key={row.step} className="hover:bg-muted/30">
                    <td className="p-1.5 font-medium">{row.step}</td>
                    <td className="p-1.5 font-bold">{row.users}</td>
                    <td className="p-1.5 text-red-500 font-semibold">
                      {row.dropOffPercent > 0 ? `-${row.dropOffPercent}%` : "Baseline"}
                    </td>
                    <td className="p-1.5 font-mono">{row.totalRetentionPercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        {/* Footer */}
        <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
          Source: Clickstream & Task Telemetry Funnel · n=1,000 session cohort · 2021
        </div>
      </CardContent>
    </Card>
  )
}
