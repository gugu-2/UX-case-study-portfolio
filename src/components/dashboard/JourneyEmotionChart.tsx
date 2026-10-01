import React from "react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceDot,
} from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { JourneyPointSchema } from "@/lib/data"
import { z } from "zod"

type JourneyPoint = z.infer<typeof JourneyPointSchema>

interface JourneyEmotionChartProps {
  journey: JourneyPoint[]
}

export function JourneyEmotionChart({ journey }: JourneyEmotionChartProps) {
  // Find lowest point for annotation
  const lowestPoint = journey.reduce((min, p) => (p.emotion < min.emotion ? p : min), journey[0])

  return (
    <Card className="border-border bg-card shadow-xs flex flex-col justify-between">
      <CardHeader className="p-4 pb-2 space-y-1">
        <CardTitle className="text-sm font-bold text-foreground">
          User Journey Emotional Resonance Curve
        </CardTitle>
        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
          Onboarding creates a sentiment trough (2.2) before rebounding to peak confidence during task execution (4.6).
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-2 space-y-3">
        <div className="h-56 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <AreaChart data={journey} margin={{ top: 10, right: 15, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="emotionGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-1, #00AB55)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="var(--chart-1, #00AB55)" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
              <XAxis dataKey="stage" stroke="var(--muted-foreground)" fontSize={14} tickLine={false} />
              <YAxis domain={[1, 5]} stroke="var(--muted-foreground)" fontSize={14} tickLine={false} />
              <Tooltip
                formatter={(val: any, name: any, item: any) => [
                  `${val} / 5.0 (${item.payload.notes})`,
                  "Emotional Score",
                ]}
                contentStyle={{
                  backgroundColor: "var(--popover)",
                  borderColor: "var(--border)",
                  borderRadius: "0.5rem",
                  fontSize: "15px",
                  color: "var(--foreground)",
                }}
              />
              <Area
                type="monotone"
                dataKey="emotion"
                stroke="var(--chart-1, #00AB55)"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#emotionGrad)"
              />
              <ReferenceDot
                x={lowestPoint.stage}
                y={lowestPoint.emotion}
                r={6}
                fill="#FF5630"
                stroke="var(--background)"
                strokeWidth={2}
              />
            </AreaChart>
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
                  <th className="p-1.5">Journey Stage</th>
                  <th className="p-1.5">Score (1–5)</th>
                  <th className="p-1.5">User Qualitative Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {journey.map((pt) => (
                  <tr key={pt.stage} className="hover:bg-muted/30">
                    <td className="p-1.5 font-bold">{pt.stage}</td>
                    <td className="p-1.5 font-mono">{pt.emotion}</td>
                    <td className="p-1.5 text-muted-foreground">{pt.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        {/* Footer */}
        <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
          Source: User Journey Mapping Contextual Inquiries · n=18 in-depth sessions · 2021
        </div>
      </CardContent>
    </Card>
  )
}
