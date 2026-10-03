import React from 'react'
import { GitBranch, CheckCircle2, ArrowRight, ShieldCheck, Award, Layers, Target, Compass, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const MasterProcessView: React.FC = () => {
  const processFlowChart = `graph TD
    subgraph Phase1["Phase I: Discovery & Strategy"]
      S01["01. DISCOVER<br/>(Business Needs & Market Audit)"] --> S02["02. RESEARCH<br/>(Qualitative & Quant Audits n=42)"]
      S02 --> S03["03. UNDERSTAND<br/>(Personas & JTBD Synthesis)"]
      S03 --> S04["04. DEFINE<br/>(Core Problem Statements)"]
      S04 --> S05["05. OPPORTUNITY<br/>(Value vs. Effort Matrix)"]
      S05 --> S06["06. STRATEGY<br/>(6 Operational Pillars & MVP Scope)"]
    end

    subgraph Phase2["Phase II: Architecture & Flows"]
      S06 --> S07["07. INFORMATION ARCHITECTURE<br/>(Ecosystem Sitemap & Taxonomy)"]
      S07 --> S08["08. USER FLOWS<br/>(User & Task Flows, Decision Trees)"]
    end

    subgraph Phase3["Phase III: Interaction & Visual Design"]
      S08 --> S09["09. WIREFRAMES<br/>(8pt Spatial Layout Cadence)"]
      S09 --> S10["10. INTERACTION DESIGN<br/>(12-State Component Machine)"]
      S10 --> S11["11. VISUAL DESIGN<br/>(OKLCH Emerald & Roboto Type Scale)"]
      S11 --> S12["12. PROTOTYPE<br/>(Interactive High-Fidelity Artifacts)"]
    end

    subgraph Phase4["Phase IV: Testing & Design System"]
      S12 --> S13["13. TEST<br/>(SUS Benchmarking & Task Audits)"]
      S13 --> S14["14. ITERATE<br/>(V1 -> V2 -> V3 2021 Foundation)"]
      S14 --> S15["15. DESIGN SYSTEM<br/>(W3C Design Tokens & Atomicity)"]
    end

    subgraph Phase5["Phase V: Delivery & Production QA"]
      S15 --> S16["16. DEVELOPER HANDOFF<br/>(Machine-Readable API Contracts & DDRs)"]
      S16 --> S17["17. DESIGN QA<br/>(Automated WCAG 2.2 AA Regression)"]
      S17 --> S18["18. LAUNCH<br/>(Executive & Technical Sign-Off)"]
    end

    subgraph Phase6["Phase VI: Governance & Continuous Evolution"]
      S18 --> S19["19. MEASURE<br/>(Google HEART & Health Telemetry)"]
      S19 --> S20["20. LEARN & IMPROVE<br/>(Continuous Enterprise Evolution)"]
    end`

  const phasesDetail = [
    {
      phase: 'Phase I: Discovery, Research & Strategy (Steps 01–06)',
      role: 'Principal UX Architect + Product Director',
      deliverables: 'Market benchmark, 42-cohort field inquiry, Elena/Marcus personas, formal problem hierarchy, and MVP matrix.',
      gate: 'Problem statement signed off; strategic priorities locked.',
    },
    {
      phase: 'Phase II: Information Architecture & Flows (Steps 07–08)',
      role: 'Information Architect + Systems Lead',
      deliverables: 'Ecosystem sitemap, dual navigation rails, content metadata schema, and banking/booking user task flows.',
      gate: 'Zero dead-ends in decision trees; all entry/exit paths verified.',
    },
    {
      phase: 'Phase III: Interaction & Visual Design (Steps 09–12)',
      role: 'Lead UI/UX Designer (Pritam)',
      deliverables: '8pt spatial wireframes, tactile amount slider, 13-tier Roboto typography scale, and clickable prototype.',
      gate: 'Full 16-state component matrix accounted for in Figma.',
    },
    {
      phase: 'Phase IV: Testing & Design Tokens (Steps 13–15)',
      role: 'UX Researcher + Design Technologist',
      deliverables: 'Usability benchmark (SUS 76, task success 82%), V1-V3 iteration audit, and W3C token repository.',
      gate: 'WCAG 2.2 AA contrast passed on all color tokens.',
    },
    {
      phase: 'Phase V: Production Handoff & QA (Steps 16–18)',
      role: 'Frontend Engineering Lead + QA Architect',
      deliverables: 'Immutable DDRs, component API contracts, automated Storybook visual regression suite, and production deploy.',
      gate: '100% visual fidelity sign-off across desktop and mobile.',
    },
    {
      phase: 'Phase VI: Governance & Evolution (Steps 19–20)',
      role: 'UX Governance Board + Analytics Lead',
      deliverables: 'HEART telemetry tracking, UX Health Radar, token versioning releases, and continuous roadmap feedback.',
      gate: 'Quarterly CSAT > 85% and voluntary adoption SLA sustained.',
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <GitBranch className="size-3.5" />
            <span>27 — Master UX Process (20-Step Design Lifecycle)</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            End-to-End 20-Step Product Design & Governance Lifecycle
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A world-class product experience is the output of a disciplined, repeatable design lifecycle.
            Minimal UI follows an exhaustive 20-step lifecycle spanning discovery, architecture, high-density interaction,
            empirical testing, developer QA contracts, and continuous governance.
          </p>
        </div>
      </div>

      {/* 20-Step Lifecycle Flowchart */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Layers className="size-4 text-primary" />
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
              Master 20-Step Lifecycle Flowchart
            </h2>
          </div>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            6 Sequential Phases
          </Badge>
        </div>

        <MermaidDiagram
          chart={processFlowChart}
          title="Minimal UI 20-Step Product Design Lifecycle"
          caption="Linear progression with integrated quality gates, empirical testing loops, and governance mechanisms ensuring zero drift between vision and production."
        />
      </div>

      {/* Detailed Phase Breakdown */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Award className="size-4 text-primary" />
            <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground tracking-tight">
              Phase-by-Phase Deliverables, Roles & Gatekeeper Criteria
            </h3>
          </div>
          <Badge variant="outline" className="text-xs font-semibold">
            Quality Gatekeepers
          </Badge>
        </div>

        <div className="space-y-4">
          {phasesDetail.map((p, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-muted/20 p-5 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="figma-h4 text-[18px] leading-[26px] lg:text-[24px] lg:leading-[36px] font-bold text-foreground flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-black">
                    {idx + 1}
                  </span>
                  <span>{p.phase}</span>
                </h4>
                <span className="text-xs font-mono text-muted-foreground font-semibold">
                  Lead: {p.role}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                <div className="space-y-1">
                  <span className="font-bold uppercase tracking-wider text-muted-foreground text-[10px]">Deliverables:</span>
                  <p className="text-foreground leading-relaxed">{p.deliverables}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 text-[10px]">Gatekeeper Criteria:</span>
                  <p className="text-foreground leading-relaxed">{p.gate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
