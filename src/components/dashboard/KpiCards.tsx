import React from "react"
import { KpiItem } from "@/lib/data"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ArrowUpRight, ArrowDownRight, Info } from "lucide-react"

interface KpiCardsProps {
  kpis: KpiItem[]
}

interface CardConfig {
  title: string
  color: string
  bars: number[]
  defaultTrend: { percent: string; isPositive: boolean }
}

const KPI_CONFIGS: Record<string, CardConfig> = {
  taskSuccess: {
    title: "Task Success Rate",
    color: "#00AB55", // Signature Minimal emerald green
    bars: [35, 75, 50, 60, 95, 55, 70],
    defaultTrend: { percent: "+41.4%", isPositive: true },
  },
  sus: {
    title: "System Usability Scale (SUS)",
    color: "#00B8D9", // Vivid cyan blue
    bars: [90, 50, 65, 35, 55, 80, 55],
    defaultTrend: { percent: "+22.6%", isPositive: true },
  },
  timeOnTask: {
    title: "Avg. Time on Task",
    color: "#FFAB00", // Amber gold
    bars: [85, 30, 50, 95, 65, 40, 75],
    defaultTrend: { percent: "-44.6%", isPositive: false },
  },
  errorRate: {
    title: "User Error Rate",
    color: "#8B5CF6", // Purple / Violet
    bars: [75, 40, 85, 55, 35, 68, 90],
    defaultTrend: { percent: "-68.4%", isPositive: false },
  },
  participants: {
    title: "Total Research Cohort",
    color: "#00A76F", // Teal mint
    bars: [45, 80, 60, 90, 70, 50, 75],
    defaultTrend: { percent: "+14.2%", isPositive: true },
  },
  issuesFixed: {
    title: "Resolved Usability Issues",
    color: "#2563EB", // Sapphire blue
    bars: [50, 65, 40, 75, 95, 60, 85],
    defaultTrend: { percent: "+31.1%", isPositive: true },
  },
}

export function KpiCards({ kpis }: KpiCardsProps) {
  // Take up to 6 KPIs
  const displayedKpis = kpis.slice(0, 6)

  return (
    <TooltipProvider>
      {/* Exactly 6 boxes in two rows: top 3 boxes and under it 3 other boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedKpis.map((kpi) => {
          const config = KPI_CONFIGS[kpi.key] || {
            title: kpi.label,
            color: "#00AB55",
            bars: [40, 65, 50, 70, 90, 60, 75],
            defaultTrend: { percent: "+8.5%", isPositive: true },
          }

          // Calculate trend and direction matching the screenshot format (+X.X% / -X.X%)
          let percentText = config.defaultTrend.percent
          let isPositive = config.defaultTrend.isPositive

          if (kpi.baseline !== undefined && kpi.baseline > 0) {
            const diff = kpi.value - kpi.baseline
            const pct = Math.abs((diff / kpi.baseline) * 100).toFixed(1)
            if (kpi.higherIsBetter === false) {
              isPositive = diff < 0 ? false : true
              percentText = diff <= 0 ? `-${pct}%` : `+${pct}%`
            } else {
              isPositive = diff >= 0
              percentText = diff >= 0 ? `+${pct}%` : `-${pct}%`
            }
          }

          // Value formatting
          let formattedValue = `${kpi.value}`
          if (kpi.unit) {
            formattedValue = `${kpi.value}${kpi.unit}`
          }

          return (
            <div
              key={kpi.key}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-[0_12px_24px_-4px_rgba(145,158,171,0.12),0_0_2px_0_rgba(145,158,171,0.20)] hover:border-primary/40 transition-all duration-200 flex flex-row items-center justify-between gap-4"
            >
              {/* Left Column: Title, Trend, Big Number */}
              <div className="flex flex-col items-start min-w-0 flex-1">
                <span className="font-semibold text-sm leading-[22px] text-foreground truncate w-full" style={{ fontFamily: 'Public Sans, sans-serif' }}>
                  {config.title}
                </span>

                <div className="flex items-center gap-2 pt-4 pb-2">
                  <div
                    className={`p-1 rounded-full flex items-center justify-center shrink-0 ${
                      isPositive
                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                        : "bg-rose-500/15 text-rose-500 dark:text-rose-400"
                    }`}
                  >
                    {isPositive ? (
                      <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                    ) : (
                      <ArrowDownRight className="size-3.5 stroke-[2.5]" />
                    )}
                  </div>
                  <span className="font-semibold text-sm leading-[22px] text-foreground" style={{ fontFamily: 'Public Sans, sans-serif' }}>
                    {percentText}
                  </span>
                </div>

                <div className="flex items-baseline">
                  <span className="text-[32px] leading-[48px] font-normal text-foreground truncate">
                    {formattedValue}
                  </span>
                  {kpi.total && (
                    <span className="text-xl font-normal text-muted-foreground ml-1.5 truncate">
                      / {kpi.total}
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: Mini 7-Bar Sparkline */}
              <div
                className="flex items-end gap-1 shrink-0 h-[48px]"
                aria-hidden="true"
              >
                {config.bars.map((heightPercent, idx) => (
                  <div
                    key={idx}
                    className="w-1.5 rounded-full transition-all duration-300"
                    style={{
                      height: `${heightPercent}%`,
                      backgroundColor: config.color,
                    }}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </TooltipProvider>
  )
}

