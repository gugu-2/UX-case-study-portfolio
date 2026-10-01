import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { BeforeAfterSchema } from "@/lib/data"
import { z } from "zod"

type BeforeAfterItem = z.infer<typeof BeforeAfterSchema>

interface BeforeAfterCardsProps {
  items: BeforeAfterItem[]
  onNavigateToScreen?: (screenId: string) => void
}

export function BeforeAfterCards({ items, onNavigateToScreen }: BeforeAfterCardsProps) {
  return (
    <Card className="border-border bg-card shadow-xs">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-sm font-bold text-foreground">
          Usability Benchmarks: Before vs. After Refactor
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          Empirical validation showing task acceleration and error reduction across key dashboard archetypes.
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => {
            const isReduction = item.after < item.before
            const diffPercent = Math.round(
              (Math.abs(item.before - item.after) / item.before) * 100
            )

            return (
              <div
                key={item.screen}
                className="p-4 rounded-xl border border-border bg-muted/20 hover:border-primary/50 transition-colors space-y-3 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-foreground">
                    {item.screen}
                  </span>
                  <Badge
                    variant="outline"
                    className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[13px] font-bold"
                  >
                    <CheckCircle2 className="size-2.5 mr-1" />
                    {isReduction ? `-${diffPercent}%` : `+${diffPercent}%`}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground uppercase font-semibold">
                    {item.metric}:
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="text-sm line-through text-muted-foreground font-mono">
                      {item.before}
                      {item.unit}
                    </div>
                    <ArrowRight className="size-3.5 text-muted-foreground" />
                    <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                      {item.after}
                      {item.unit}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.notes}
                </p>

                {onNavigateToScreen && (
                  <button
                    onClick={() => {
                      const match = item.screen.match(/D0[1-6]/)
                      if (match) onNavigateToScreen(match[0])
                    }}
                    className="text-xs font-semibold text-primary hover:underline text-left"
                  >
                    Inspect screen annotations →
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
