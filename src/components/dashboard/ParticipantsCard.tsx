import React from "react"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ParticipantGroupSchema } from "@/lib/data"
import { z } from "zod"

type ParticipantGroup = z.infer<typeof ParticipantGroupSchema>

interface ParticipantsCardProps {
  participants: ParticipantGroup
}

export function ParticipantsCard({ participants }: ParticipantsCardProps) {
  const COLORS = [
    "var(--chart-1, #00AB55)",
    "var(--chart-2, #3366FF)",
    "var(--chart-4, #FFAB00)",
  ]

  const totalN = participants.byMethod.reduce((acc, m) => acc + m.n, 0)

  return (
    <Card className="border-border bg-card shadow-xs flex flex-col justify-between">
      <CardHeader className="p-4 pb-2 space-y-1">
        <CardTitle className="text-sm font-bold text-foreground">
          Research Methodology & Cohort Breakdown
        </CardTitle>
        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
          Cohort of n=42 participants spanning in-depth interviews, quantitative surveys, and live usability tests.
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-2 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
          {/* Donut Chart */}
          <div className="h-44 w-full min-w-0 relative">
            <ResponsiveContainer width="100%" height="100%" minWidth={0}>
              <PieChart>
                <Pie
                  data={participants.byMethod}
                  dataKey="n"
                  nameKey="method"
                  innerRadius={45}
                  outerRadius={65}
                  paddingAngle={4}
                >
                  {participants.byMethod.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(val: any) => [`${val} participants`, "Sample"]}
                  contentStyle={{
                    backgroundColor: "var(--popover)",
                    borderColor: "var(--border)",
                    borderRadius: "0.5rem",
                    fontSize: "15px",
                    color: "var(--foreground)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-black text-foreground">{totalN}</span>
              <span className="text-xs text-muted-foreground uppercase font-bold">Total n</span>
            </div>
          </div>

          {/* Segment Table */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
              User Segment Split:
            </span>
            <div className="space-y-1.5">
              {participants.bySegment.map((seg) => (
                <div
                  key={seg.segment}
                  className="flex items-center justify-between p-1.5 rounded-md bg-muted/40 text-xs border border-border/50"
                >
                  <span className="text-foreground font-medium text-xs">{seg.segment}</span>
                  <span className="font-bold font-mono text-primary text-xs">n={seg.n}</span>
                </div>
              ))}
            </div>
          </div>
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
                  <th className="p-1.5">Methodology</th>
                  <th className="p-1.5">Sample (n)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {participants.byMethod.map((m) => (
                  <tr key={m.method} className="hover:bg-muted/30">
                    <td className="p-1.5 font-medium">{m.method}</td>
                    <td className="p-1.5 font-bold font-mono">n={m.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        {/* Footer */}
        <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
          Source: User Research Recruitment Log · n=42 verified enterprise operators · 2021
        </div>
      </CardContent>
    </Card>
  )
}
