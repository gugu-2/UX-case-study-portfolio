import React from "react"
import {
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  Target,
  ArrowRight,
  ShieldAlert,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const LinearProblemOpportunityView: React.FC = () => {
  const problemLayers = [
    {
      level: "Layer 1: Observable Symptom",
      severity: "High Visible Friction",
      summary: "Engineers resist logging bugs and delay updating ticket statuses until standup.",
      detail:
        "Engineers view issue trackers as administrative punishment rather than tools that accelerate their craft. Bugs get reported in Slack DMs or lost in uncommitted notes.",
      color: "border-red-500/30 bg-red-500/5 text-red-600 dark:text-red-400",
    },
    {
      level: "Layer 2: UI & Interaction Friction",
      severity: "Sub-optimal Ergonomics",
      summary: "18.2s creation forms with 14 mandatory fields, non-keyboard dropdowns, and jarring spinners.",
      detail:
        "Every simple action requires grabbing a mouse, waiting 3-5 seconds for modal rendering, and scrolling past 20 enterprise custom fields that provide zero value to the developer.",
      color: "border-amber-500/30 bg-amber-500/5 text-amber-600 dark:text-amber-400",
    },
    {
      level: "Layer 3: Architecture & Latency Debt",
      severity: "Technical Bottleneck",
      summary: "Server-side round-trips (>1,200ms) with zero client-side caching or optimistic UI.",
      detail:
        "Every single status transition blocks the entire client viewport until the database transaction completes. Network blips cause failed state updates and lost comment drafts.",
      color: "border-yellow-500/30 bg-yellow-500/5 text-yellow-600 dark:text-yellow-400",
    },
    {
      level: "Layer 4: Ceremonial Process Overhead",
      severity: "Cultural Drain",
      summary: "2-hour sprint planning ceremonies, backlog grooming theater, and 3,000-ticket stale backlogs.",
      detail:
        "Teams spend more time debating Fibonacci story points and categorizing ticket components than designing and shipping software. Backlogs become digital graveyards of unread debt.",
      color: "border-blue-500/30 bg-blue-500/5 text-blue-600 dark:text-blue-400",
    },
    {
      level: "Layer 5: Strategic Business Impact",
      severity: "Organizational Velocity Loss",
      summary: "Loss of developer flow state, degraded shipping momentum, and delayed product iterations.",
      detail:
        "High-velocity engineers suffer cognitive fatigue and frustration. Leadership loses real-time visibility into what is actually shipping to production.",
      color: "border-purple-500/30 bg-purple-500/5 text-purple-600 dark:text-purple-400",
    },
  ]

  const opportunities = [
    {
      id: "O01",
      title: "Sub-50ms Local-First Sync Engine",
      quadrant: "High Value / High Engineering",
      type: "Strategic Architecture",
      impact: "Eliminates all spinner latency; enables offline flight work with automatic conflict-free resolution.",
      effort: "High (SQLite Wasm + WebSocket Delta Protocol)",
    },
    {
      id: "O02",
      title: "Keyboard-First Command Switcher ('C', 'S', '⌘K')",
      quadrant: "High Value / Moderate Effort",
      type: "Core Ergonomics",
      impact: "Cuts issue creation time from 18.2s to 2.4s (-86.8%) and status switching to 0.6s.",
      effort: "Moderate (Global keydown event dispatcher & focus trap)",
    },
    {
      id: "O03",
      title: "Bi-directional Git Branch & PR Auto-Close",
      quadrant: "High Value / Quick Win",
      type: "Automation",
      impact: "Removes 100% of manual post-merge ticket updates; keeps project state 100% truthful.",
      effort: "Low/Moderate (GitHub & GitLab Webhook parser)",
    },
    {
      id: "O04",
      title: "Automated Cycles with Zero-Guilt Rollover",
      quadrant: "High Value / Strategic",
      type: "Process Evolution",
      impact: "Replaces stressful 2-week sprint deadlines with continuous cadence and automatic backlog pruning.",
      effort: "Moderate (Scheduled cycle engine & burndown aggregator)",
    },
    {
      id: "O05",
      title: "Obsidian Dark Elevation Design System",
      quadrant: "Moderate Value / Quick Win",
      type: "Design Craft",
      impact: "Eliminates night-time glare, delivers 100% WCAG 2.2 AA contrast, and creates high visual prestige.",
      effort: "Low (Semantic OKLCH color token hierarchy)",
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 px-4 py-2 min-h-[32px] text-xs font-bold text-[#5E6AD2] dark:text-[#7C88E8]">
            <AlertTriangle className="size-3.5" />
            <span>03 — Problem & Opportunity Matrix</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            The Problem Space: Legacy Sluggishness vs High-Velocity Flow
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Modern software engineers work in rapid, keyboard-centric terminal and IDE environments.
            Legacy project management tools broke that flow with heavy web forms, server latency, and ceremonial bureaucracy.
          </p>
        </div>
      </div>

      {/* 3.1 Problem Statement */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <Target className="size-4 text-primary" />
          <h2 className="text-lg font-bold text-foreground">3.1 Root Problem Statement</h2>
        </div>
        <blockquote className="text-sm sm:text-base font-semibold text-foreground/90 border-l-4 border-[#5E6AD2] pl-4 py-2 bg-[#5E6AD2]/5 rounded-r-xl">
          "Software creators lose up to 45 minutes of productive engineering time every day wrestling with sluggish issue tracking interfaces, waiting on slow page reloads, and manually updating ticket statuses that should be automatically derived from Git commits."
        </blockquote>
      </div>

      {/* 3.2 5-Layer Problem Hierarchy */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <ShieldAlert className="size-4 text-red-500" />
          <div>
            <h2 className="text-lg font-bold text-foreground">
              3.2 The 5-Layer Problem Hierarchy
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Tracing visible developer dissatisfaction to fundamental architectural and interaction flaws.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {problemLayers.map((layer, idx) => (
            <div
              key={layer.level}
              className={`p-5 rounded-xl border ${layer.color} space-y-2 transition-all`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  {layer.level}
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-background/80 border border-current w-fit">
                  {layer.severity}
                </span>
              </div>
              <h3 className="text-sm font-bold text-foreground">{layer.summary}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{layer.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3.3 Opportunity Matrix */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Lightbulb className="size-4 text-amber-500" />
          <div>
            <h2 className="text-lg font-bold text-foreground">
              3.3 Strategic Opportunity Matrix
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              High-leverage architectural innovations engineered to reclaim developer momentum.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {opportunities.map((opp) => (
            <div
              key={opp.id}
              className="p-5 rounded-xl border border-border bg-muted/20 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#5E6AD2] bg-[#5E6AD2]/10 px-2 py-0.5 rounded">
                    {opp.id}
                  </span>
                  <Badge variant="outline" className="text-[10px] font-bold">
                    {opp.type}
                  </Badge>
                </div>
                <h3 className="text-sm font-bold text-foreground">{opp.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{opp.impact}</p>
              </div>

              <div className="pt-2 border-t border-border/50 text-[11px] text-muted-foreground flex items-center justify-between">
                <span><strong>Quadrant:</strong> {opp.quadrant}</span>
                <span className="font-mono text-[#5E6AD2]">{opp.effort}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
