import React, { useState } from "react"
import { getResearchData, generateSummarySentence, ResearchData } from "@/lib/data"
import { ProductId, productsConfig } from "@/config/products"
import { KpiCards } from "@/components/dashboard/KpiCards"
import { IterationsChart } from "@/components/dashboard/IterationsChart"
import { TaskSuccessChart } from "@/components/dashboard/TaskSuccessChart"
import { FindingsSeverityChart } from "@/components/dashboard/FindingsSeverityChart"
import { DropOffFunnelChart } from "@/components/dashboard/DropOffFunnelChart"
import { JourneyEmotionChart } from "@/components/dashboard/JourneyEmotionChart"
import { OpportunityScatterChart } from "@/components/dashboard/OpportunityScatterChart"
import { UxHealthRadarChart } from "@/components/dashboard/UxHealthRadarChart"
import { ParticipantsCard } from "@/components/dashboard/ParticipantsCard"
import { BeforeAfterCards } from "@/components/dashboard/BeforeAfterCards"
import { TopIssuesTable } from "@/components/dashboard/TopIssuesTable"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Calendar,
  Layers,
  ExternalLink,
} from "lucide-react"

interface ResearchDashboardViewProps {
  onOpenDocs?: () => void
  onSelectScreen?: (screenId: string) => void
  currentProduct?: ProductId
}

export function ResearchDashboardView({
  onOpenDocs,
  onSelectScreen,
  currentProduct = "minimal",
}: ResearchDashboardViewProps) {
  const [selectedVersion, setSelectedVersion] = useState<string>("V3")

  const productConfig = productsConfig[currentProduct] || productsConfig.minimal
  const data = getResearchData(currentProduct)

  // Generate the required summary sentence
  const summarySentence = generateSummarySentence(data)

  // If a previous version is selected, update KPI cards accordingly
  const currentKpis = data.kpis.map((kpi) => {
    if (selectedVersion === "V3" || !data.snapshots) return kpi
    const snap = data.snapshots[selectedVersion]
    if (snap && snap[kpi.key] !== undefined) {
      return {
        ...kpi,
        value: snap[kpi.key],
      }
    }
    return kpi
  })

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* 1. Dashboard Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-border bg-card shadow-[0px_0px_2px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)]">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h1 className="figma-h2 text-[32px] leading-[42px] lg:text-[48px] lg:leading-[64px] font-extrabold tracking-tight text-foreground">
              {productConfig.name} UX Research & Telemetry Dashboard
            </h1>
            <Badge
              variant="outline"
              className="font-bold min-h-[30px] px-3 py-1 rounded-[6px]"
              style={{
                borderColor: `${productConfig.brandColor}40`,
                backgroundColor: `${productConfig.brandColor}15`,
                color: productConfig.brandColor,
              }}
            >
              <CheckCircle2 className="size-3 mr-1" /> Production Benchmark
            </Badge>
          </div>
          <p className="figma-body2 text-xs sm:text-sm text-muted-foreground">
            Empirical usability benchmarks, heuristic evaluations, and iteration metrics for {productConfig.name}.
          </p>
        </div>

        {/* Action Controls: Figma CTA, Version Selector & Print Export */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Main CTA: Real Master Figma Design File (Figma Large Button: 48px, 15px font, r: 8px) */}
          <a
            href={productConfig.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 min-h-[48px] px-[22px] py-[11px] rounded-[8px] text-white font-bold text-[15px] leading-[26px] transition-all group active:scale-[0.98] hover:brightness-105"
            style={{
              backgroundColor: productConfig.brandColor,
              boxShadow: `0 8px 16px ${productConfig.brandColor}3d`,
            }}
            title={`Open real master Figma design file for ${productConfig.name}`}
          >
            <svg className="size-4 shrink-0" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
            </svg>
            <span>Open Master Figma File</span>
            <ExternalLink className="size-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Version Selector (Figma Medium Buttons: 36px, 14px font, r: 8px) */}
          <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-[10px] border border-border">
            <span className="text-xs font-semibold text-muted-foreground ml-2 mr-1">
              Snapshot:
            </span>
            {(["V1", "V2", "V3"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setSelectedVersion(v)}
                className={`h-9 min-h-[36px] px-3.5 py-[6px] text-sm font-bold rounded-[8px] transition-all cursor-pointer ${
                  selectedVersion === v
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {v} {v === "V3" && "(Current)"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Top Summary Sentence (Mandated by Section 6 of AI Build Guide) */}
      <div
        className="flex items-center gap-3 p-4 rounded-xl border text-foreground shadow-xs"
        style={{
          borderColor: `${productConfig.brandColor}30`,
          backgroundColor: `${productConfig.brandColor}08`,
        }}
      >
        <div
          className="flex size-9 shrink-0 items-center justify-center rounded-lg text-white shadow-xs"
          style={{ backgroundColor: productConfig.brandColor }}
        >
          <Sparkles className="size-4" />
        </div>
        <div className="flex-1">
          <span
            className="text-xs font-bold uppercase tracking-wider block"
            style={{ color: productConfig.brandColor }}
          >
            Executive Summary Takeaway
          </span>
          <p className="text-sm font-semibold text-foreground leading-snug">
            {summarySentence}
          </p>
        </div>
        {onOpenDocs && (
          <Button
            size="sm"
            onClick={onOpenDocs}
            className="hidden sm:flex text-xs font-bold text-white shadow-xs"
            style={{ backgroundColor: productConfig.brandColor }}
          >
            Full Documentation <ArrowRight className="size-3.5 ml-1.5" />
          </Button>
        )}
      </div>

      {/* 3. Section A2: 6 KPI Cards (Anchor id="kpis") */}
      <div id="kpis" className="scroll-mt-24 transition-all duration-300">
        <div className="mb-3 px-1 flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            A2. Core Quantitative Usability Indicators (Max 6 KPIs)
          </h2>
          <span className="text-xs text-muted-foreground">
            Snapshot: {selectedVersion} · Driven by {currentProduct === "linear" ? "linearResearch.json" : "research.json"}
          </span>
        </div>
        <KpiCards kpis={currentKpis} />
      </div>

      {/* 4. Section A1: 8 Interactive Recharts Grid */}
      <div className="space-y-4">
        <div className="px-1">
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            A1. Telemetry & Usability Charts (8 Core Dimensions)
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart 1: Iterations line chart (Anchor id="iterations") */}
          <div id="iterations" className="scroll-mt-24 transition-all duration-300">
            <IterationsChart iterations={data.iterations} />
          </div>

          {/* Chart 2: Task Success horizontal bar (Anchor id="tasks") */}
          <div id="tasks" className="scroll-mt-24 transition-all duration-300">
            <TaskSuccessChart tasks={data.tasks} />
          </div>

          {/* Chart 3: Findings by Severity stacked bar (Anchor id="findings") */}
          <div id="findings" className="scroll-mt-24 transition-all duration-300">
            <FindingsSeverityChart findings={data.findings} />
          </div>

          {/* Chart 4: Drop-Off Funnel (Anchor id="funnel") */}
          <div id="funnel" className="scroll-mt-24 transition-all duration-300">
            <DropOffFunnelChart funnel={data.funnel} />
          </div>

          {/* Chart 5: Journey Emotion Curve (Anchor id="journey") */}
          <div id="journey" className="scroll-mt-24 transition-all duration-300">
            <JourneyEmotionChart journey={data.journey} />
          </div>

          {/* Chart 6: Opportunity Priority Matrix (Anchor id="opportunity") */}
          <div id="opportunity" className="scroll-mt-24 transition-all duration-300">
            <OpportunityScatterChart opportunities={data.opportunities} />
          </div>

          {/* Chart 7: UX Health Radar (Anchor id="health") */}
          <div id="health" className="scroll-mt-24 transition-all duration-300">
            <UxHealthRadarChart health={data.health} />
          </div>

          {/* Chart 8: Participants Donut & Segments (Anchor id="participants") */}
          <div id="participants" className="scroll-mt-24 transition-all duration-300">
            <ParticipantsCard participants={data.participants} />
          </div>
        </div>
      </div>

      {/* 5. Before / After Comparison Cards (Anchor id="before-after") */}
      <div id="before-after" className="scroll-mt-24 transition-all duration-300">
        <BeforeAfterCards
          items={data.beforeAfter}
          onNavigateToScreen={onSelectScreen}
        />
      </div>

      {/* 6. Top Issues Table (Anchor id="issues") */}
      <div id="issues" className="scroll-mt-24 transition-all duration-300">
        <TopIssuesTable
          findings={data.findings}
          onSelectScreen={onSelectScreen}
        />
      </div>

      {/* 7. Bottom Gateway to Documentation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-border bg-card shadow-[0px_0px_2px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)]">
        <div className="space-y-1">
          <h3 className="figma-h4 text-[20px] lg:text-[24px] font-bold text-foreground">
            Ready to explore the complete {productConfig.name} UX Documentation & System?
          </h3>
          <p className="figma-body2 text-xs sm:text-sm text-muted-foreground">
            Dive into information architecture, user flows, {productConfig.screensCount} annotated screens, design tokens, and developer handoff specs.
          </p>
        </div>
        {onOpenDocs && (
          <Button
            size="lg"
            onClick={onOpenDocs}
            className="w-full sm:w-auto h-12 min-h-[48px] px-[22px] py-[11px] rounded-[8px] font-bold text-[15px] leading-[26px] text-white cursor-pointer active:scale-[0.98] hover:brightness-105 border-transparent"
            style={{ backgroundColor: productConfig.brandColor, boxShadow: `0 8px 16px ${productConfig.brandColor}3d` }}
          >
            <BookOpen className="size-4 mr-2" />
            Open UX Documentation
          </Button>
        )}
      </div>
    </div>
  )
}
