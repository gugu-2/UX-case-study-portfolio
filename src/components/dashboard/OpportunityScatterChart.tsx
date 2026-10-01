import React from "react"
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { OpportunitySchema } from "@/lib/data"
import { z } from "zod"

type Opportunity = z.infer<typeof OpportunitySchema>

interface OpportunityScatterChartProps {
  opportunities: Opportunity[]
}

export function OpportunityScatterChart({ opportunities }: OpportunityScatterChartProps) {
  return (
    <Card className="border-border bg-card shadow-xs flex flex-col justify-between">
      <CardHeader className="p-4 pb-2 space-y-1">
        <CardTitle className="text-sm font-bold text-foreground">
          Opportunity Prioritization Matrix (Value vs. Effort)
        </CardTitle>
        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
          Guided Quick Transfer in Banking (Value 5.0, Effort 2.0) delivered highest ROI as a Quick Win.
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-2 space-y-3">
        <div className="h-56 w-full min-w-0 relative">
          {/* Quadrant Watermarks */}
          <div className="absolute top-2 left-10 text-[12px] font-bold uppercase tracking-wider text-emerald-500/40 pointer-events-none">
            Quick Wins (High Val / Low Effort)
          </div>
          <div className="absolute top-2 right-4 text-[12px] font-bold uppercase tracking-wider text-blue-500/40 pointer-events-none">
            Strategic Bets (High Val / High Effort)
          </div>
          <div className="absolute bottom-6 left-10 text-[12px] font-bold uppercase tracking-wider text-amber-500/40 pointer-events-none">
            Fill-Ins (Low Val / Low Effort)
          </div>
          <div className="absolute bottom-6 right-4 text-[12px] font-bold uppercase tracking-wider text-red-500/40 pointer-events-none">
            Avoid (Low Val / High Effort)
          </div>

          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <ScatterChart margin={{ top: 15, right: 15, bottom: 5, left: -10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
              <XAxis
                type="number"
                dataKey="effort"
                name="Effort"
                domain={[0, 6]}
                stroke="var(--muted-foreground)"
                fontSize={13}
                tickLine={false}
                label={{ value: "Implementation Effort (1-5)", position: "insideBottom", offset: -2, fontSize: 13, fill: "var(--muted-foreground)" }}
              />
              <YAxis
                type="number"
                dataKey="value"
                name="User Value"
                domain={[0, 6]}
                stroke="var(--muted-foreground)"
                fontSize={13}
                tickLine={false}
                label={{ value: "User Value (1-5)", angle: -90, position: "insideLeft", offset: 12, fontSize: 13, fill: "var(--muted-foreground)" }}
              />
              <ZAxis range={[120, 200]} />
              <ReferenceLine x={3} stroke="var(--border)" strokeDasharray="2 2" />
              <ReferenceLine y={3} stroke="var(--border)" strokeDasharray="2 2" />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                formatter={(val: any, name: any, item: any) => [
                  `${item.payload.name} (Value: ${item.payload.value}, Effort: ${item.payload.effort}, Tier: ${item.payload.category})`,
                  "Opportunity",
                ]}
                contentStyle={{
                  backgroundColor: "var(--popover)",
                  borderColor: "var(--border)",
                  borderRadius: "0.5rem",
                  fontSize: "15px",
                  color: "var(--foreground)",
                }}
              />
              <Scatter
                name="Opportunities"
                data={opportunities}
                fill="var(--chart-1, #00AB55)"
              />
            </ScatterChart>
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
                  <th className="p-1.5">Opportunity</th>
                  <th className="p-1.5">Value (1–5)</th>
                  <th className="p-1.5">Effort (1–5)</th>
                  <th className="p-1.5">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {opportunities.map((op) => (
                  <tr key={op.id} className="hover:bg-muted/30">
                    <td className="p-1.5 font-medium">{op.name}</td>
                    <td className="p-1.5 font-mono">{op.value}</td>
                    <td className="p-1.5 font-mono">{op.effort}</td>
                    <td className="p-1.5">
                      <span className="px-1.5 py-0.5 rounded text-xs font-semibold bg-muted">
                        {op.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        {/* Footer */}
        <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
          Source: Product Strategy & Opportunity Mapping Matrix · 2021 Foundation
        </div>
      </CardContent>
    </Card>
  )
}
