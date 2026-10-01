import React from "react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  Cell,
} from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TaskSchema } from "@/lib/data"
import { z } from "zod"

type TaskItem = z.infer<typeof TaskSchema>

interface TaskSuccessChartProps {
  tasks: TaskItem[]
}

export function TaskSuccessChart({ tasks }: TaskSuccessChartProps) {
  return (
    <Card className="border-border bg-card shadow-xs flex flex-col justify-between">
      <CardHeader className="p-4 pb-2 space-y-1">
        <CardTitle className="text-sm font-bold text-foreground">
          Task Success Rate by Key Workflow
        </CardTitle>
        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
          Analytics & Banking tasks exceed 85% target; multi-tier E-commerce export (58%) is targeted for Next Sprint.
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-2 space-y-3">
        <div className="h-56 w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <BarChart
              data={tasks}
              layout="vertical"
              margin={{ top: 5, right: 25, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" opacity={0.5} />
              <XAxis type="number" domain={[0, 100]} stroke="var(--muted-foreground)" fontSize={14} tickLine={false} />
              <YAxis
                type="category"
                dataKey="task"
                width={140}
                stroke="var(--foreground)"
                fontSize={13}
                tickLine={false}
                tickFormatter={(val: string) =>
                  val.length > 22 ? `${val.substring(0, 20)}…` : val
                }
              />
              <Tooltip
                formatter={(value: any) => [`${value}% Success`, "Completion"]}
                contentStyle={{
                  backgroundColor: "var(--popover)",
                  borderColor: "var(--border)",
                  borderRadius: "0.5rem",
                  fontSize: "15px",
                  color: "var(--foreground)",
                }}
              />
              <ReferenceLine x={85} stroke="#FFAB00" strokeDasharray="3 3" label={{ value: "Target 85%", fill: "#FFAB00", fontSize: 13, position: "top" }} />
              <Bar dataKey="success" radius={[0, 4, 4, 0]}>
                {tasks.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.success >= entry.target ? "var(--chart-1, #00AB55)" : entry.success >= 75 ? "var(--chart-2, #FFAB00)" : "var(--chart-3, #FF5630)"}
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
                  <th className="p-1.5">Task Workflow</th>
                  <th className="p-1.5">Success Rate</th>
                  <th className="p-1.5">Target</th>
                  <th className="p-1.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {tasks.map((t) => (
                  <tr key={t.task} className="hover:bg-muted/30">
                    <td className="p-1.5 font-medium">{t.task}</td>
                    <td className="p-1.5 font-bold">{t.success}%</td>
                    <td className="p-1.5">{t.target}%</td>
                    <td className="p-1.5">
                      <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${t.success >= t.target ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"}`}>
                        {t.success >= t.target ? "Met" : "Below"}
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
          Source: Moderated Usability Testing · n=12 task runs · 2021 Benchmark
        </div>
      </CardContent>
    </Card>
  )
}
