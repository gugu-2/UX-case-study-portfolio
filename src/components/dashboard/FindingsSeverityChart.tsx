import React from "react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FindingItem, getSeverityCounts } from "@/lib/data"

interface FindingsSeverityChartProps {
  findings: FindingItem[]
}

export function FindingsSeverityChart({ findings }: FindingsSeverityChartProps) {
  const counts = getSeverityCounts(findings)
  const chartData = [
    { severity: "Critical", Fixed: counts.Critical.fixed, Open: counts.Critical.open },
    { severity: "High", Fixed: counts.High.fixed, Open: counts.High.open },
    { severity: "Medium", Fixed: counts.Medium.fixed, Open: counts.Medium.open },
    { severity: "Low", Fixed: counts.Low.fixed, Open: counts.Low.open },
  ]

  return (
    <Card className="border-border bg-card shadow-xs flex flex-col justify-between">
      <CardHeader className="p-4 pb-2 space-y-1">
        <CardTitle className="text-sm font-bold text-foreground">
          Usability Findings by Severity & Status
        </CardTitle>
        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
          100% of Critical blockers and 75% of High-severity issues are resolved in the 2021 foundation.
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-2 space-y-3">
        <div className="h-56 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
              <XAxis dataKey="severity" stroke="var(--muted-foreground)" fontSize={14} tickLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={14} tickLine={false} allowDecimals={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--popover)",
                  borderColor: "var(--border)",
                  borderRadius: "0.5rem",
                  fontSize: "15px",
                  color: "var(--foreground)",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "14px", paddingTop: "8px" }} />
              <Bar dataKey="Fixed" stackId="a" fill="var(--chart-1, #00AB55)" radius={[0, 0, 0, 0]} />
              <Bar dataKey="Open" stackId="a" fill="var(--chart-3, #FF5630)" radius={[4, 4, 0, 0]} />
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
                  <th className="p-1.5">Severity Level</th>
                  <th className="p-1.5">Fixed</th>
                  <th className="p-1.5">Open</th>
                  <th className="p-1.5">Total Identified</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {chartData.map((row) => (
                  <tr key={row.severity} className="hover:bg-muted/30">
                    <td className="p-1.5 font-bold">{row.severity}</td>
                    <td className="p-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">{row.Fixed}</td>
                    <td className="p-1.5 text-red-500 font-semibold">{row.Open}</td>
                    <td className="p-1.5 font-mono">{row.Fixed + row.Open}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        {/* Footer */}
        <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
          Source: Design & QA Findings Repository · n=24 total logged entries · 2021 Sprint Release
        </div>
      </CardContent>
    </Card>
  )
}
