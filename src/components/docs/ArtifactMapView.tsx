import React from 'react'
import { Map, Layers, CheckCircle2, FileText, ArrowRight, ShieldCheck, Sparkles, Database } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const ArtifactMapView: React.FC = () => {
  const artifactMapChart = `graph TD
    Vision["PRODUCT & UX VISION<br/>(Pritam 2021 Foundation)"]
    
    subgraph Stream1["Discovery & Business Foundations"]
      Research["HUMAN RESEARCH<br/>(n=42 Cohort, Personas, JTBD)"]
      Business["BUSINESS GOALS<br/>(Velocity, Accuracy, SLAs)"]
    end
    
    subgraph Stream2["Problem & Strategy Synthesis"]
      Problem["PROBLEM SPACE<br/>(5-Layer Hierarchy & Opportunities)"]
      Strategy["UX STRATEGY<br/>(6 Pillars & MVP Scope)"]
    end
    
    subgraph Stream3["Architecture & Flow Modeling"]
      IA["INFORMATION ARCHITECTURE<br/>(Ecosystem Sitemap & Taxonomy)"]
      Flows["USER & TASK FLOWS<br/>(Banking Slider & Booking Queue)"]
    end
    
    subgraph Stream4["Dual-Surface Execution"]
      Desktop["DESKTOP SURFACES<br/>(280px Rail & Ultrawide TopNav)"]
      Mobile["MOBILE SURFACES<br/>(Bottom Tab Bar & Drawer Sheets)"]
    end
    
    subgraph Stream5["System & Validation"]
      DesignSystem["DESIGN SYSTEM<br/>(OKLCH Tokens, Roboto Scale, 8pt)"]
      Prototype["HIGH-FIDELITY PROTOTYPE<br/>(Interactive Tactile Components)"]
      Testing["USABILITY TESTING<br/>(SUS 76, 82% Task Success)"]
      Iteration["ITERATION AUDIT<br/>(V1 -> V2 -> V3 2021 Release)"]
    end
    
    subgraph Stream6["Delivery & Production Governance"]
      Handoff["DEVELOPER HANDOFF<br/>(API Contracts & Immutable DDRs)"]
      DesignQA["DESIGN & A11Y QA<br/>(WCAG 2.2 AA Automated Tests)"]
      Launch["PRODUCTION LAUNCH<br/>(Executive & Tech Sign-Off)"]
      Analytics["ANALYTICS TELEMETRY<br/>(Google HEART & Radar Health)"]
      Governance["UX GOVERNANCE<br/>(Token Versioning & Quarterly SLAs)"]
    end

    Vision --> Stream1
    Research --> Problem
    Business --> Problem
    Problem --> Strategy
    Strategy --> IA
    IA --> Flows
    Flows --> Desktop
    Flows --> Mobile
    Desktop --> DesignSystem
    Mobile --> DesignSystem
    DesignSystem --> Prototype
    Prototype --> Testing
    Testing --> Iteration
    Iteration --> Handoff
    Handoff --> DesignQA
    DesignQA --> Launch
    Launch --> Analytics
    Analytics --> Governance`

  const artifactMatrix = [
    {
      stage: '01. Strategic Foundations',
      artifacts: 'Product Overview, UX Vision Statement, 6 UX Principles, Product Ecosystem Map',
      tool: 'Minimal UI Docs / Executive Brief',
      owner: 'Principal UX Architect (Pritam)',
      consumers: 'Executive Stakeholders, Product Leadership',
    },
    {
      stage: '02. Human Research',
      artifacts: 'Research Plan, Findings Severity Log, Elena/Marcus Personas, JTBD Statements',
      tool: 'Qualitative Field Inquiries (n=42)',
      owner: 'Lead UX Researcher',
      consumers: 'Product Managers, UX Designers',
    },
    {
      stage: '03. Problem Space',
      artifacts: 'Formal Problem Statement, 5-Layer Hierarchy, Opportunity Matrix, Assumption Map',
      tool: 'Strategic Matrix & Affinity Diagrams',
      owner: 'Systems Architect',
      consumers: 'Engineering Leads, Merchandising Teams',
    },
    {
      stage: '04. Architecture & Flows',
      artifacts: '4-Tier Sitemap, Dual-Nav Breakpoint Rules, Content Metadata, Banking/Booking Flows',
      tool: 'Mermaid.js Flowcharts & Vector Schematics',
      owner: 'Information Architect',
      consumers: 'Frontend Engineers, Backend API Designers',
    },
    {
      stage: '05. Dual-Surface Layout',
      artifacts: '6 Canonical Screen Archetypes (D01-D06), 8pt Spatial Layout Wireframes, 17-State Matrix',
      tool: 'Figma Web-r Lineage & High-Res Previews',
      owner: 'Lead UI/UX Designer',
      consumers: 'Frontend Developers, Product Owners',
    },
    {
      stage: '06. System & Tokens',
      artifacts: 'OKLCH Color Palette, 13-Level Roboto Typography Spec, 8pt Cadence, 12-State Machine',
      tool: 'W3C DTCG Tokens & Style Dictionary',
      owner: 'Design System Lead',
      consumers: 'Engineering Build Pipelines, QA Teams',
    },
    {
      stage: '07. Validation & Iteration',
      artifacts: 'SUS Usability Benchmarks, Drop-Off Funnels, Emotional Resonance Splines, V1-V3 History',
      tool: 'Usability Lab & Telemetry Dashboard',
      owner: 'UX Researcher & Data Analyst',
      consumers: 'Executive Reviewers, Product Team',
    },
    {
      stage: '08. Delivery & QA',
      artifacts: 'Component API Contracts, Design Decision Records (DDRs), WCAG AA Contrast Audits',
      tool: 'Storybook, Axe-Core & Git CI/CD',
      owner: 'Frontend Engineering Lead',
      consumers: 'Production Engineering, Compliance Auditors',
    },
    {
      stage: '09. Governance',
      artifacts: 'Google HEART Metric Framework, UX Health Radar, Governance SLA Checklist',
      tool: 'In-App Telemetry & Quarterly Audits',
      owner: 'UX Governance Board',
      consumers: 'Entire Enterprise Organization',
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Map className="size-3.5" />
            <span>28 — The Ideal UX Artifact Map (Full Ecosystem Topology)</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            Master UX Artifact Topology & Deliverable Traceability
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A complete enterprise design system requires unbroken traceability between high-level vision and production code.
            This topology maps every canonical artifact produced in Minimal UI, establishing clear ownership, tools,
            and downstream engineering handoffs.
          </p>
        </div>
      </div>

      {/* Complete Artifact Topology Mermaid Diagram */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Layers className="size-4 text-primary" />
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
              Master UX Artifact Topology Map
            </h2>
          </div>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs px-4 py-2 min-h-[32px] rounded-full">
            End-to-End Traceability
          </Badge>
        </div>

        <MermaidDiagram
          chart={artifactMapChart}
          title="The Ideal UX Artifact Ecosystem Topology"
          caption="Unbroken lineage from strategic product vision through dual-surface UI execution, design system tokens, automated QA, and continuous governance."
        />
      </div>

      {/* Artifact Ecosystem Traceability Matrix */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <FileText className="size-4 text-primary" />
            <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground tracking-tight">
              Artifact Ecosystem Matrix & Responsibility Mapping
            </h3>
          </div>
          <Badge variant="outline" className="text-xs font-semibold px-4 py-2 min-h-[32px] rounded-full">
            9 Core Streams
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border">
              <tr>
                <th className="p-3">Stream</th>
                <th className="p-3">Produced Artifacts</th>
                <th className="p-3">Format / Tool</th>
                <th className="p-3">Primary Owner</th>
                <th className="p-3">Downstream Consumers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground">
              {artifactMatrix.map((row) => (
                <tr key={row.stage} className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 font-semibold text-primary whitespace-nowrap">{row.stage}</td>
                  <td className="p-3 font-medium text-foreground">{row.artifacts}</td>
                  <td className="p-3 text-muted-foreground">{row.tool}</td>
                  <td className="p-3 text-muted-foreground font-medium">{row.owner}</td>
                  <td className="p-3 text-muted-foreground">{row.consumers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
