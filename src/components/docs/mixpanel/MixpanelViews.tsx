import React from "react"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"
import { TypographySpecimen } from "@/components/TypographySpecimen"
import { Users, Search, Target, Heart, AlertTriangle, ArrowRight, CheckCircle2, MessageSquare, Compass, Shield, GitFork, Workflow, ShieldCheck, Box, Layers, Table, CheckSquare, ListTree } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function MixpanelVisionView() {
  const personas = [
    {
      role: "Lead Product Manager",
      name: "Jessica Chen",
      age: "34",
      company: "SaaS Scaleup",
      goals: "Understand user drop-off during onboarding and measure feature adoption.",
      frustrations: "Writing complex SQL queries or waiting weeks for the data engineering team.",
      quote: "Mixpanel lets me visually build a funnel in seconds and immediately slice it by user segments without asking engineers.",
      primaryShortcuts: "Cmd+Enter (Run Query), F (Funnel)",
      avatarColor: "bg-[#7856FF]",
    },
    {
      role: "Growth Marketer",
      name: "David Lee",
      age: "29",
      company: "E-Commerce App",
      goals: "Measure campaign ROI and track retention cohorts of acquired users over time.",
      frustrations: "Attribution data is scattered across tools and matching campaigns to in-app behavior is hard.",
      quote: "The cohort retention matrix shows me exactly which campaigns bring users who actually stick around for month 2.",
      primaryShortcuts: "R (Retention), S (Segment)",
      avatarColor: "bg-[#00D084]",
    },
    {
      role: "Data Analyst",
      name: "Elena Rostova",
      age: "31",
      company: "Fintech Enterprise",
      goals: "Ensure data integrity, govern event naming conventions, and build complex predictive models.",
      frustrations: "Messy, unorganized tracking plans with duplicate event names across web and mobile platforms.",
      quote: "The Lexicon is a lifesaver. I can merge duplicate events and add descriptions so the whole company uses the same data dictionary.",
      primaryShortcuts: "Cmd+K (Search), D (Data Dictionary)",
      avatarColor: "bg-[#FF5C8E]",
    }
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight border-b border-border pb-2">1.1 Visual Workspace Overview</h5>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Mixpanel is an advanced product analytics platform that transforms complex event stream data into visual, interactive reports. It empowers product managers and growth teams to query billions of events in seconds without SQL.
        </p>
      </div>
      <div className="space-y-4">
        <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight border-b border-border pb-2">1.2 Spatial Principles</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-xl bg-card">
            <h3 className="font-bold text-sm text-foreground">1. Query as a Visual Block</h3>
            <p className="text-xs text-muted-foreground mt-1">Events and properties are modular blocks that can be dragged, nested, and combined to form complex logic.</p>
          </div>
          <div className="p-4 border border-border rounded-xl bg-card">
            <h3 className="font-bold text-sm text-foreground">2. Speed of Thought</h3>
            <p className="text-xs text-muted-foreground mt-1">Instant chart re-rendering. No loading spinners while iterating on data segments.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MixpanelProcessView: React.FC = () => {
  const processFlowChart = `graph TD
    subgraph Phase1["Phase I: Ingestion Strategy"]
      S01["01. DISCOVER<br/>(Core Tracking Plan Setup)"] --> S02["02. INSTRUMENT<br/>(SDK Implementation)"]
      S02 --> S03["03. VALIDATE<br/>(Lexicon & Data Integrity QA)"]
    end

    subgraph Phase2["Phase II: Query & Analysis"]
      S03 --> S04["04. BUILD<br/>(Visual Query Construction)"]
      S04 --> S05["05. SEGMENT<br/>(Breakdown by Cohort/Property)"]
    end

    subgraph Phase3["Phase III: Action & Distribution"]
      S05 --> S06["06. BOARD<br/>(Pin to KPI Dashboard)"]
      S06 --> S07["07. SHARE<br/>(Slack/Email Team Distribution)"]
    end`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7856FF]/30 bg-[#7856FF]/10 px-4 py-2 min-h-[32px] text-xs font-bold text-[#7856FF]">
            <Workflow className="size-3.5" />
            <span>27 — Master UX Process</span>
          </div>
          <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            The Mixpanel Data-Driven Design Process
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            How data teams implement tracking, govern events, and distribute insights to the rest of the product organization at speed.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Workflow className="size-4 text-[#7856FF]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">27.1 End-to-End Data Lifecycle Flowchart</h5>
            <p className="text-xs text-muted-foreground mt-0.5">The 7-stage lifecycle of tracking and querying data.</p>
          </div>
        </div>
        <MermaidDiagram chart={processFlowChart} title="Mixpanel Data Lifecycle Flowchart" caption="From raw ingestion to actionable insights on a KPI board." />
      </div>
    </div>
  )
}

export const MixpanelArchitectureView: React.FC = () => {
  const sitemapChart = `graph TD
    Root["Workspace (Global Auth Context)"]
    
    subgraph AnalysisCore["Visual Analysis Modules"]
      Insights["Insights (Event Volume)"]
      Funnels["Funnels (Conversion & Drop-off)"]
      Retention["Retention (Cohort Engagement)"]
      Flows["Flows (Pathing & Journeys)"]
    end
    
    subgraph DataGov["Data Governance & Dictionary"]
      Lexicon["Lexicon (Event Taxonomy)"]
      Users["Users & Cohorts Explorer"]
      Integrations["Integrations (CDPs, Data Warehouses)"]
    end
    
    subgraph Dashboards["Consumption & Delivery"]
      Boards["Boards (KPI Visualizations)"]
      Alerts["Anomaly Alerts & Thresholds"]
    end
    
    Root --> AnalysisCore
    Root --> DataGov
    Root --> Dashboards
    AnalysisCore --> Boards
    DataGov -.->|Populates dropdowns| AnalysisCore`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7856FF]/30 bg-[#7856FF]/10 px-4 py-2 min-h-[32px] text-xs font-bold text-[#7856FF]">
            <Layers className="size-3.5" />
            <span>05 — Information Architecture</span>
          </div>
          <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            Mixpanel Architecture Ecosystem Topology
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The structural blueprint mapping Analysis modules against Data Governance and Dashboard delivery systems.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Layers className="size-4 text-[#7856FF]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">5.1 Global Sitemap & Module Interactions</h5>
            <p className="text-xs text-muted-foreground mt-0.5">Showing how the Lexicon dictionary powers the visual query builders.</p>
          </div>
        </div>
        <MermaidDiagram chart={sitemapChart} title="Mixpanel Information Architecture" caption="Strict separation between data governance (Lexicon) and ad-hoc analysis (Funnels, Retention)." />
      </div>
    </div>
  )
}

export function MixpanelUserFlowsView() {
  const userFlowChart = `graph TD
    Trigger([Trigger: Need to analyze onboarding drop-off]) --> Screen1[Screen: Reports Hub]
    Screen1 --> Action1[Action: Click 'Funnels' Report]
    Action1 --> Decision1{Are events defined?}
    Decision1 -->|No| Recovery1[Switch to Lexicon to define events]
    Decision1 -->|Yes| Action2[Action: Add 'Sign Up' and 'Purchase' event blocks]
    Action2 --> Action3[Action: Click 'Breakdown' and select 'Device Type']
    Action3 --> Response1[System Response: Sub-second chart render via Arb engine]
    Response1 --> Success([Success: Identified drop-off on mobile devices])`
    
  const taskFlowChart = `graph TD
    Goal([Goal: Distribute KPI dashboard to Execs]) --> Task1["Task 1: Open 'Revenue Board'"]
    Task1 --> Action1["Action: Click 'Share' button in top right"]
    Action1 --> Task2["Task 2: Select 'Email Digest' tab"]
    Task2 --> Action2["Action: Set cadence to 'Weekly on Monday 9AM'"]
    Action2 --> Subtask1["Subtask: Add C-Suite email distribution list"]
    Subtask1 --> Response1["System Response: Confirm schedule"]
    Response1 --> Complete([Goal Achieved: Automated reporting established])`

  const decisionTreeChart = `graph TD
    Start([Start: Event Naming Convention Check]) --> CheckLexicon{Does Event Exist in Lexicon?}
    CheckLexicon -->|Yes| CheckStatus{Is Event Active or Hidden?}
    CheckStatus -->|Hidden| PromptUnhide["Prompt Analyst to Unhide or Merge"]
    CheckStatus -->|Active| AutoComplete["Show in Visual Builder Autocomplete"]
    CheckLexicon -->|No| CheckIngestion{Is it flowing in from SDK?}
    CheckIngestion -->|Yes| AutoAdd["Auto-add to Lexicon as 'New Event'"]
    CheckIngestion -->|No| Wait["Wait for Developer Implementation"]`

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7856FF]/30 bg-[#7856FF]/10 px-4 py-2 min-h-[32px] text-xs font-bold text-[#7856FF]">
            <GitFork className="size-3.5" />
            <span>06 — User & Task Flows</span>
          </div>
          <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            Mixpanel Interaction Decision Trees
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Algorithmic mapping of core user workflows including ad-hoc querying, dashboard distribution, and data governance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <CheckSquare className="size-4 text-[#7856FF]" />
            <div>
              <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">6.1 Core Funnel Analysis Flow</h5>
              <p className="text-xs text-muted-foreground mt-0.5">The visual query building process for product managers.</p>
            </div>
          </div>
          <MermaidDiagram chart={userFlowChart} title="Funnel Report Creation Flow" caption="Happy path for discovering drop-off rates." />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <ListTree className="size-4 text-[#7856FF]" />
            <div>
              <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">6.2 Dashboard Distribution Task Flow</h5>
              <p className="text-xs text-muted-foreground mt-0.5">Scheduling automated reports for executives.</p>
            </div>
          </div>
          <MermaidDiagram chart={taskFlowChart} title="Email Digest Scheduling" caption="Step-by-step setup for weekly async reporting." />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <GitFork className="size-4 text-[#7856FF]" />
            <div>
              <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">6.3 Lexicon Data Governance Decision Tree</h5>
              <p className="text-xs text-muted-foreground mt-0.5">How the system handles new or hidden events.</p>
            </div>
          </div>
          <MermaidDiagram chart={decisionTreeChart} title="Lexicon Validation Tree" caption="Logic for ensuring data integrity across the workspace." />
        </div>
      </div>
    </div>
  )
}

export function MixpanelTokensView() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">Mixpanel Design System & Tokens</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Mixpanel's design system is engineered for data density and clarity. It heavily utilizes a distinct purple primary brand color, combined with strict charting palettes (categorical colors) to ensure data visualizations remain accessible (WCAG AA) and distinguishable even when segmenting dozens of properties.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <TypographySpecimen />
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
          <h6 className="figma-h6 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-semibold text-foreground tracking-tight">Charting & Brand Tokens</h6>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-[#7856FF] rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--mp-brand</span>
            </div>
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-[#4285F4] rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--chart-cat-1</span>
            </div>
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-[#34A853] rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--chart-cat-2</span>
            </div>
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-[#FBBC05] rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--chart-cat-3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}







