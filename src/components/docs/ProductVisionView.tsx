import React from 'react'
import { Sparkles, Compass, CheckCircle2, Layers, Cpu, Database, Globe, Smartphone, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const ProductVisionView: React.FC = () => {
  const ecosystemChart = `graph TD
    Users["Enterprise Operators & Users<br/>(Treasury Analysts, Ops Leads, Execs)"]
    Devices["Client Viewport Surfaces<br/>(Desktop 4K, Laptop 1440px, Tablet, Mobile PWA)"]
    Core["Minimal UI Core Framework<br/>(Design System & Semantic Token Engine)"]
    
    subgraph Surfaces["6 Core Operational Dashboard Archetypes"]
      D01["D01 General Analytics<br/>(Attribution & Cohorts)"]
      D02["D02 General App<br/>(Telemetry & Invoicing)"]
      D03["D03 General Banking<br/>(Dual Cards & Slider Wire)"]
      D04["D04 General Booking<br/>(Capacity & Review Queue)"]
      D05["D05 General E-Commerce<br/>(Profit & SKU Leaderboard)"]
      D06["D06 General File Manager<br/>(Multi-Cloud Storage Bridge)"]
    end
    
    subgraph Backstage["Backstage Cloud Services & Data Fabric"]
      Gateway["GraphQL & High-Frequency API Gateway"]
      AI["Predictive Anomaly & Forecasting Engine"]
      Cloud["Multi-Cloud Object Storage (S3 / Drive / Dropbox)"]
      DB["PostgreSQL & Real-Time Settlement Ledger"]
      ThirdParty["Stripe, AWS, Microsoft Graph, Slack"]
    end
    
    subgraph Outcomes["Enterprise Operational Outcomes"]
      Velocity["75% Faster Task Completion"]
      Accuracy["6% Error Rate (down from 19%)"]
      A11y["100% WCAG 2.2 Level AA Certified"]
      Scale["Universal Dual-Navigation Scalability"]
    end
    
    Users <--> Devices
    Devices <--> Core
    Core --> Surfaces
    Surfaces <--> Backstage
    Surfaces --> Outcomes`

  const principlesList = [
    {
      num: '01',
      title: 'Content Over Chrome',
      meaning: 'Interface chrome exists strictly to frame and elevate data, never to compete with it.',
      implication: 'Drop heavy box shadows and 3D bevels; rely on 8pt whitespace cadence, subtle background tonal shifts, and 1px dividers at 16% opacity.',
    },
    {
      num: '02',
      title: 'Progressive Disclosure',
      meaning: 'Present summary trends immediately; defer granular row parameters to secondary user interaction.',
      implication: '7-bar vertical sparklines and KPI delta badges live in the top viewport; expansive data ledgers load smoothly upon scrolling.',
    },
    {
      num: '03',
      title: 'Zero-Ambiguity Feedback',
      meaning: 'Every user gesture triggers an immediate visual, tactile, or motor state update.',
      implication: 'Micro-spinners, optimistic UI state commitments (<200ms) for transfers and approvals, with non-blocking recovery toasts.',
    },
    {
      num: '04',
      title: 'Ergonomic Saliency',
      meaning: 'High-frequency primary controls live in natural motor-planning zones across all form factors.',
      implication: 'Floating quick-transfer actions on mobile; top-right contextual filters on desktop; global ⌘K command switcher.',
    },
    {
      num: '05',
      title: 'Bimodal Elasticity',
      meaning: 'Interface feels naturally native whether operated under glaring daylight or in dark flight-control environments.',
      implication: 'Dedicated OKLCH semantic tokens for light paper elevation and luminous slate dark mode, maintaining WCAG AAA contrast.',
    },
    {
      num: '06',
      title: 'Always Provide Recovery',
      meaning: 'Errors are treated as conversational checkpoints rather than punitive interruptions.',
      implication: 'No modal dead-ends; every validation fault provides inline explanation, pre-filled inputs, and one-click retry.',
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Compass className="size-3.5" />
            <span>01 — Product & UX Vision (Pritam 2021 Foundation)</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            Product Purpose, UX Principles & Ecosystem Architecture
          </h1>
          <p className="figma-body1 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Minimal UI was conceived as an intentional antidote to modern enterprise software bloat.
            It delivers a clean, high-density dashboard language engineered to support high-velocity operations with zero sensory fatigue.
          </p>
        </div>
      </div>

      {/* 1.1 Product Overview */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Sparkles className="size-4 text-primary" />
          <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground">
            1.1 Comprehensive Product Overview
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="space-y-2 p-4 rounded-xl border border-border bg-muted/20">
            <span className="font-bold uppercase tracking-wider text-primary text-[11px]">Product Name & Lineage</span>
            <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground">Minimal UI — Client & Admin Dashboard Architecture</h3>
            <p className="text-muted-foreground leading-relaxed">
              Original foundational design system created from scratch in 2021 by <strong>Pritam</strong> (Principal UI/UX Architect with 14+ years experience).
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl border border-border bg-muted/20">
            <span className="font-bold uppercase tracking-wider text-primary text-[11px]">One-Line Definition</span>
            <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground">High-Density, Zero-Fatigue Operational Cockpit</h3>
            <p className="text-muted-foreground leading-relaxed">
              A production-grade multi-platform design framework unifying 6 complex operational archetypes into a single cohesive, accessible experience.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl border border-border bg-muted/20">
            <span className="font-bold uppercase tracking-wider text-primary text-[11px]">Who Is It For?</span>
            <p className="text-muted-foreground leading-relaxed">
              Quantitative risk analysts, treasury operators, logistics dispatchers, hospitality managers, and SaaS engineering architects who monitor complex live workflows.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl border border-border bg-muted/20">
            <span className="font-bold uppercase tracking-wider text-primary text-[11px]">What Problem Does It Solve?</span>
            <p className="text-muted-foreground leading-relaxed">
              Eliminates legacy dashboard clutter: illegible small text, fragmented navigation tabs, 5-step transaction modals, and eye-straining low-contrast palettes.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl border border-border bg-muted/20">
            <span className="font-bold uppercase tracking-wider text-primary text-[11px]">Why Does It Exist?</span>
            <p className="text-muted-foreground leading-relaxed">
              Enterprise software should empower operators with the tactile speed and clarity of modern consumer applications without sacrificing analytical density.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl border border-border bg-muted/20">
            <span className="font-bold uppercase tracking-wider text-primary text-[11px]">What Makes It Different?</span>
            <p className="text-muted-foreground leading-relaxed">
              Switchable dual navigation rail, W3C DTCG atomic tokens, optimistic 200ms state updates, 100% WCAG 2.2 AA verified contrast, and full Roboto typography hierarchy.
            </p>
          </div>
        </div>
      </div>

      {/* 1.2 UX Vision */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Compass className="size-4 text-primary" />
          <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground">
            1.2 UX Vision & Sensory Experience Qualities
          </h2>
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2">
            The UX Vision Statement
          </span>
          <blockquote className="text-sm font-medium text-foreground leading-relaxed italic">
            "Minimal UI transforms high-density enterprise operations into a calm, authoritative, and tactile experience where knowledge workers navigate multi-million-dollar ledgers and complex real-time telemetry with zero friction, instant feedback, and absolute confidence."
          </blockquote>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-lg border border-border bg-muted/20 space-y-1">
            <strong className="text-foreground block">• Effortless Interaction</strong>
            <span className="text-muted-foreground">Smart defaults and ⌘K quick access bypass complex menu hierarchies.</span>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/20 space-y-1">
            <strong className="text-foreground block">• Authoritative Clarity</strong>
            <span className="text-muted-foreground">Mathematical spatial cadence and Roboto type scale ensure unambiguous data reading.</span>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/20 space-y-1">
            <strong className="text-foreground block">• Tactile Responsiveness</strong>
            <span className="text-muted-foreground">Sliders and micro-interactions give immediate physical sensation of direct manipulation.</span>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/20 space-y-1">
            <strong className="text-foreground block">• Calm Under Load</strong>
            <span className="text-muted-foreground">Muted neutral palettes prevent sensory fatigue during 8-hour monitoring shifts.</span>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/20 space-y-1">
            <strong className="text-foreground block">• Resilient Recovery</strong>
            <span className="text-muted-foreground">Every system error provides actionable guidance and zero data loss checkpoints.</span>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/20 space-y-1">
            <strong className="text-foreground block">• Inclusive by Default</strong>
            <span className="text-muted-foreground">Full keyboard focus roving and screen reader landmarks built into every component.</span>
          </div>
        </div>
      </div>

      {/* 1.3 UX Principles */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground">
              1.3 The 6 Foundational UX Principles
            </h2>
          </div>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            Architectural Guardrails
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">UX Principle</th>
                <th className="p-3">Meaning in Practice</th>
                <th className="p-3">Concrete Design Implication</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground">
              {principlesList.map((p) => (
                <tr key={p.num} className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 font-mono font-bold text-primary">{p.num}</td>
                  <td className="p-3 font-semibold text-foreground">{p.title}</td>
                  <td className="p-3 text-muted-foreground leading-relaxed">{p.meaning}</td>
                  <td className="p-3 text-muted-foreground leading-relaxed">{p.implication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 1.4 Product Ecosystem Map */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="size-4 text-primary" />
          <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground">
            1.4 Product Ecosystem Map (Topology of Surfaces & Infrastructure)
          </h2>
        </div>
        <MermaidDiagram
          chart={ecosystemChart}
          title="Minimal UI Complete Ecosystem Architecture Map"
          caption="Holistic topology connecting end-user personas, responsive client viewports, the 6 core dashboard archetypes, backstage data services, and business outcomes."
        />
      </div>
    </div>
  )
}
