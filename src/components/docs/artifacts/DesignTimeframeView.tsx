import React, { useState, useEffect } from "react"
import { ProductId, productsConfig } from "@/config/products"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  CheckCircle2,
  Sparkles,
  Layers,
  Compass,
  Calendar,
  GitBranch,
  Layers3,
  Activity,
  ArrowRight,
  TrendingUp,
} from "lucide-react"

interface DesignTimeframeViewProps {
  currentProduct?: ProductId
}

interface CustomMilestone {
  id: string
  title: string
  columnHeader: string
  phaseSpan: string
  color: string
  textColor: string
  leftPercent: number // 0 to 100
  widthPercent: number
  topPercent: number // 0 to 100
  heightPercent: number
  durationText: string
  lead: string
  deliverables: string[]
  metrics: string
  status: "Completed" | "In Review" | "Verified"
}

interface ProductTimelineProfile {
  productName: string
  durationBadge: string
  yearRange: string
  pillarCount: number
  summary: string
  concurrentNote?: string
  brandColor: string
  pillarLabels: string[]
  milestones: CustomMilestone[]
}

// 1. BESPOKE INDIVIDUAL TIMELINES (EACH HAS A COMPLETELY UNIQUE LAYOUT & TIMELINE)
const productTimelines: Record<string, ProductTimelineProfile> = {
  // 1. Linear App: 3 Months in 2020 (March – May 2020) — 6 Bi-weekly Sprint Pillars, 7 Staggered Milestones
  linear: {
    productName: "Linear App",
    durationBadge: "3 Months (May – Jul 2020)",
    yearRange: "2020",
    pillarCount: 6,
    summary: "High-velocity product operations architecture executed over 6 focused bi-weekly sprints in 2020. Optimized specifically for sub-50ms local SQLite Wasm writes and home-row ergonomics.",
    concurrentNote: "Executed prior to the kickoff of Minimals UI as an intense standalone high-velocity sprint.",
    brandColor: "#5E6AD2",
    pillarLabels: [
      "Sprint 01 (May W1)",
      "Sprint 02 (May W3)",
      "Sprint 03 (Jun W1)",
      "Sprint 04 (Jun W3)",
      "Sprint 05 (Jul W1)",
      "Sprint 06 (Jul W3)",
    ],
    milestones: [
      {
        id: "lin-m1",
        title: "Sub-50ms Interaction Spec",
        columnHeader: "Sprint 01",
        phaseSpan: "Weeks 01–02",
        color: "#5E6AD2",
        textColor: "#FFFFFF",
        leftPercent: 1,
        widthPercent: 15,
        topPercent: 8,
        heightPercent: 26,
        durationText: "Weeks 01–02 (Sprint 01)",
        lead: "Lead Product Architect",
        deliverables: [
          "North star latency budget: <50ms keystroke-to-render SLA.",
          "Legacy issue tracker friction audit (8.4s average page load).",
          "Competitive keyboard-first benchmark study across power developers.",
        ],
        metrics: "<50ms Target Latency Budget Established",
        status: "Completed",
      },
      {
        id: "lin-m2",
        title: "Home-Row Keyboard Ergonomics",
        columnHeader: "Sprints 01–02",
        phaseSpan: "Weeks 02–04",
        color: "#38BDF8",
        textColor: "#0F172A",
        leftPercent: 10,
        widthPercent: 20,
        topPercent: 38,
        heightPercent: 26,
        durationText: "Weeks 02–04 (Sprints 01–02)",
        lead: "Principal Interaction Designer",
        deliverables: [
          "Complete single-key shortcut matrix (C to create, G-I for inbox, Cmd+K).",
          "Zero-mouse navigation paths across issue lists and triage queues.",
          "Rapid low-fi keyboard wireframes with 40 power engineers.",
        ],
        metrics: "98.2% Keyboard Traversal Coverage",
        status: "Completed",
      },
      {
        id: "lin-m3",
        title: "Local SQLite Wasm Engine",
        columnHeader: "Sprints 02–03",
        phaseSpan: "Weeks 03–06",
        color: "#10B981",
        textColor: "#0F172A",
        leftPercent: 22,
        widthPercent: 25,
        topPercent: 67,
        heightPercent: 26,
        durationText: "Weeks 03–06 (Sprints 02–03)",
        lead: "Staff Systems Engineer",
        deliverables: [
          "Browser-embedded SQLite Wasm client database architecture.",
          "Multi-tab delta synchronization over shared worker thread.",
          "Instant optimistic mutation pipeline with automatic sync retry.",
        ],
        metrics: "2.4s Issue Creation Time (-86.8% vs Legacy)",
        status: "Completed",
      },
      {
        id: "lin-m4",
        title: "Obsidian Dark Palette & Tokens",
        columnHeader: "Sprints 03–04",
        phaseSpan: "Weeks 05–08",
        color: "#F59E0B",
        textColor: "#18181B",
        leftPercent: 40,
        widthPercent: 22,
        topPercent: 8,
        heightPercent: 26,
        durationText: "Weeks 05–08 (Sprints 03–04)",
        lead: "Design Systems Lead",
        deliverables: [
          "Obsidian dark mode palette strictly adhering to 100% WCAG 2.2 AA.",
          "Custom status badge micro-animations and keyboard focus rings.",
          "14 master screen archetypes finalized in Figma with zero detached tokens.",
        ],
        metrics: "100% WCAG AA Contrast, 14 Screen Archetypes",
        status: "Verified",
      },
      {
        id: "lin-m5",
        title: "Bi-Directional Git PR Links",
        columnHeader: "Sprints 04–05",
        phaseSpan: "Weeks 07–10",
        color: "#EC4899",
        textColor: "#FFFFFF",
        leftPercent: 54,
        widthPercent: 23,
        topPercent: 38,
        heightPercent: 26,
        durationText: "Weeks 07–10 (Sprints 04–05)",
        lead: "Senior Fullstack Engineer",
        deliverables: [
          "Automated Git branch generation matching issue ID conventions.",
          "Pull request status sync (Draft, In Review, Merged, Closed).",
          "Webhook listeners providing real-time notification toasts.",
        ],
        metrics: "Zero-Click Branch Tracking Across GitHub/GitLab",
        status: "Completed",
      },
      {
        id: "lin-m6",
        title: "Latency Telemetry Audits (-86%)",
        columnHeader: "Sprint 05",
        phaseSpan: "Weeks 09–11",
        color: "#8B5CF6",
        textColor: "#FFFFFF",
        leftPercent: 68,
        widthPercent: 18,
        topPercent: 67,
        heightPercent: 26,
        durationText: "Weeks 09–11 (Sprint 05)",
        lead: "QA & Performance Specialist",
        deliverables: [
          "End-to-end telemetry audits across 1,000 synthetic issue mutations.",
          "Network throttling stress-tests (offline, 3G, high packet loss).",
          "SUS usability testing benchmark with n=42 power engineers.",
        ],
        metrics: "91.4 SUS Usability Score (99th Percentile)",
        status: "Completed",
      },
      {
        id: "lin-m7",
        title: "General Availability Rollout",
        columnHeader: "Sprint 06",
        phaseSpan: "Weeks 11–12",
        color: "#05D686",
        textColor: "#18181B",
        leftPercent: 84,
        widthPercent: 15,
        topPercent: 8,
        heightPercent: 56,
        durationText: "Weeks 11–12 (Sprint 06)",
        lead: "VP of Product & Founders",
        deliverables: [
          "Public GA release launch across macOS desktop, web, and iOS.",
          "Production observability dashboard with live error rate telemetry.",
          "Handoff documentation and developer onboarding guide.",
        ],
        metrics: "Production Rollout, 99.99% Reliability SLA",
        status: "Verified",
      },
    ],
  },

  // 2. Minimals UI: Almost 1 Year in 2020–2021 (Oct 2020 – Sep 2021) — 6 Multi-Quarter Bimonthly Pillars, 9 Enterprise Milestones
  minimal: {
    productName: "Minimals UI Design System",
    durationBadge: "~11 Months (Oct 2020 – Sep 2021)",
    yearRange: "2020 – 2021",
    pillarCount: 6,
    summary: "Massive, foundational multi-framework design system & application ecosystem developed continuously across 11 months (2020–2021). Acted as the architectural backbone while concurrently designing Mixpanel, Frame.so, and Miro.",
    concurrentNote: "Multi-Threaded Backbone: Throughout Q1–Q3 2021, Minimals UI was developed concurrently alongside parallel sprints for Mixpanel (Jan–Apr 2021), Frame.so (May–Jun 2021), and Miro (Aug–Sep 2021).",
    brandColor: "#00A76F",
    pillarLabels: [
      "Q4 '20 (Oct-Nov)",
      "Q1 '21 (Dec-Jan)",
      "Q1 '21 (Feb-Mar)",
      "Q2 '21 (Apr-May)",
      "Q3 '21 (Jun-Jul)",
      "Q3 '21 (Aug-Sep)",
    ],
    milestones: [
      {
        id: "min-m1",
        title: "OKLCH Semantic Color Spaces",
        columnHeader: "Q4 '20 (Oct-Nov)",
        phaseSpan: "Months 01–02",
        color: "#00A76F",
        textColor: "#FFFFFF",
        leftPercent: 1,
        widthPercent: 15,
        topPercent: 8,
        heightPercent: 26,
        durationText: "Months 01–02 (Token Core)",
        lead: "Lead Design Systems Architect",
        deliverables: [
          "Perceptually uniform OKLCH color space token formulation.",
          "Light/dark dual theme luminance math with automated contrast validation.",
          "Definition of 6 preset brand palettes (Default, Cyan, Purple, Blue, Orange, Red).",
        ],
        metrics: "OKLCH Token Architecture RFC Approved",
        status: "Completed",
      },
      {
        id: "min-m2",
        title: "Design System RFC & Token Specs",
        columnHeader: "Q4 '20 -> Q1 '21",
        phaseSpan: "Months 02–03",
        color: "#F59E0B",
        textColor: "#18181B",
        leftPercent: 8,
        widthPercent: 19,
        topPercent: 67,
        heightPercent: 26,
        durationText: "Months 02–03 (Specifications)",
        lead: "Senior Frontend UX Researcher",
        deliverables: [
          "Audit of 40 enterprise UI libraries and component customization bottlenecks.",
          "Survey of 120 fullstack developers on theme rigidity and token handoff.",
          "Atomic design schema: Primitives -> Semantic Aliases -> Component Bindings.",
        ],
        metrics: "120 Developer Survey Responses, W3C Token Contract",
        status: "Completed",
      },
      {
        id: "min-m3",
        title: "200+ Figma Component Library",
        columnHeader: "Q1 '21 (Dec-Jan)",
        phaseSpan: "Months 03–04",
        color: "#0284C7",
        textColor: "#FFFFFF",
        leftPercent: 18,
        widthPercent: 18,
        topPercent: 8,
        heightPercent: 26,
        durationText: "Months 03–04 (Figma Kit)",
        lead: "Lead Systems Designer",
        deliverables: [
          "Comprehensive Figma UI kit with 200+ atomic components and 1,400+ variants.",
          "Auto-layout 4.0 conformance with fluid resizing across responsive breakpoints.",
          "1:1 naming parity between Figma layer names and React props.",
        ],
        metrics: "200+ Figma Components, Zero Detached Instances",
        status: "Completed",
      },
      {
        id: "min-m4",
        title: "MUI v5 & React Component Bindings",
        columnHeader: "Q1 '21 (Dec-Mar)",
        phaseSpan: "Months 04–06",
        color: "#7C3AED",
        textColor: "#FFFFFF",
        leftPercent: 26,
        widthPercent: 25,
        topPercent: 38,
        heightPercent: 26,
        durationText: "Months 04–06 (React Engineering)",
        lead: "Staff Frontend Engineers",
        deliverables: [
          "Custom MUI v5 theme wrapper overriding default styling with atomic tokens.",
          "TypeScript interfaces with strict prop types and zero any declarations.",
          "Custom hooks for dark mode toggling, color preset switching, and drawer states.",
        ],
        metrics: "100% TypeScript Strict Coverage",
        status: "Completed",
      },
      {
        id: "min-m5",
        title: "Dual Navigation Rails & Layouts",
        columnHeader: "Q1 '21 (Feb-Mar)",
        phaseSpan: "Months 05–06",
        color: "#059669",
        textColor: "#FFFFFF",
        leftPercent: 38,
        widthPercent: 17,
        topPercent: 67,
        heightPercent: 26,
        durationText: "Months 05–06 (Layout Shells)",
        lead: "Principal Interaction Designer",
        deliverables: [
          "Vertical Classic collapsible sidebar with nested multi-level menu groups.",
          "Horizontal dense TopNav header for enterprise data-dense widescreen applications.",
          "Mini icon-only rail for compact multi-tasking workflows.",
        ],
        metrics: "3 Enterprise Layout Shell Paradigms Finalized",
        status: "Verified",
      },
      {
        id: "min-m6",
        title: "6 Master Dashboard Verticals",
        columnHeader: "Q2 '21 (Apr-May)",
        phaseSpan: "Months 07–08",
        color: "#EA580C",
        textColor: "#FFFFFF",
        leftPercent: 52,
        widthPercent: 19,
        topPercent: 8,
        heightPercent: 26,
        durationText: "Months 07–08 (Verticals)",
        lead: "VP of Product & Lead Designers",
        deliverables: [
          "Banking Dashboard: transaction sliders, currency converters, account ledgers.",
          "Analytics Dashboard: multi-series visitor charts, conversion funnels, conversion rates.",
          "Booking, Ecommerce, File Manager, and General App modular templates.",
        ],
        metrics: "60+ Screen Templates Assembled & Verified",
        status: "Completed",
      },
      {
        id: "min-m7",
        title: "Touch Ergonomics & WCAG 2.2 AA",
        columnHeader: "Q2 '21 (Apr-May)",
        phaseSpan: "Months 07–09",
        color: "#D97706",
        textColor: "#18181B",
        leftPercent: 55,
        widthPercent: 24,
        topPercent: 67,
        heightPercent: 26,
        durationText: "Months 07–09 (Accessibility QA)",
        lead: "Accessibility Director & QA Lead",
        deliverables: [
          "Minimum 48x48px touch bounding box enforcement on mobile viewports (<768px).",
          "Automated Axe-core accessibility testing across all 200 components.",
          "High contrast compliance audit across all 6 light and dark color presets.",
        ],
        metrics: "100% WCAG 2.2 AA Contrast Compliance",
        status: "Completed",
      },
      {
        id: "min-m8",
        title: "Next.js App Router & Vite Adapters",
        columnHeader: "Q3 '21 (Jun-Jul)",
        phaseSpan: "Months 09–10",
        color: "#2563EB",
        textColor: "#FFFFFF",
        leftPercent: 69,
        widthPercent: 18,
        topPercent: 38,
        heightPercent: 26,
        durationText: "Months 09–10 (Framework Adapters)",
        lead: "Fullstack Architecture Team",
        deliverables: [
          "Server Components compatibility with zero-runtime client token hydration.",
          "Vite starter kit with instantaneous Hot Module Replacement (HMR).",
          "Next.js App Router dynamic route segments and layouts.",
        ],
        metrics: "Dual Framework Starter Kits (Next.js & Vite)",
        status: "Completed",
      },
      {
        id: "min-m9",
        title: "LTS Release on Minimals.cc",
        columnHeader: "Q3 '21 (Aug-Sep)",
        phaseSpan: "Months 10–11",
        color: "#00A76F",
        textColor: "#FFFFFF",
        leftPercent: 83,
        widthPercent: 16,
        topPercent: 8,
        heightPercent: 56,
        durationText: "Months 10–11 (Public Launch)",
        lead: "Release Engineering & DevRel",
        deliverables: [
          "Production release published to npm and showcased live on minimals.cc.",
          "Interactive documentation portal with live component preview code editors.",
          "Enterprise customer support tier and LTS maintenance roadmap.",
        ],
        metrics: "Production Launch, 92.4 Usability SUS Benchmark",
        status: "Verified",
      },
    ],
  },

  // 3. Mixpanel: 4 Months in 2021 (Jan – Apr 2021) — 5 Phase Pillars, 6 Intelligence Milestones (Overlaps Minimals UI Q1 2021)
  mixpanel: {
    productName: "Mixpanel",
    durationBadge: "4 Months (Jan – Apr 2021)",
    yearRange: "2021",
    pillarCount: 5,
    summary: "Intense 4-month platform unification in early 2021 consolidating event analytics, session replay, multivariate experiments, feature flags, and Spark AI insights into a single decision engine.",
    concurrentNote: "Built concurrently alongside Minimals UI during Q1 2021, sharing design token standards and high-density data visualization research.",
    brandColor: "#7856FF",
    pillarLabels: [
      "Jan - Phase 01",
      "Feb - Phase 02",
      "Feb - Phase 03",
      "Mar - Phase 04",
      "Apr - Phase 05",
    ],
    milestones: [
      {
        id: "mix-m1",
        title: "5-in-1 Platform Unification Thesis",
        columnHeader: "Jan - Phase 01",
        phaseSpan: "Weeks 01–03",
        color: "#7856FF",
        textColor: "#FFFFFF",
        leftPercent: 1,
        widthPercent: 20,
        topPercent: 8,
        heightPercent: 26,
        durationText: "Weeks 01–03 (Phase 01)",
        lead: "VP of Product & Lead Architect",
        deliverables: [
          "Consolidation strategy: uniting 5 disconnected SaaS tools into one intelligence platform.",
          "Executive PRD defining workflow bridging from event drop-off charts directly into replays.",
          "Scoping Spark AI conversational natural language query engine.",
        ],
        metrics: "5-in-1 Unified Platform Strategy Approved",
        status: "Completed",
      },
      {
        id: "mix-m2",
        title: "Funnel-to-Replay Correlation Engine",
        columnHeader: "Jan -> Feb (Phases 01–02)",
        phaseSpan: "Weeks 02–06",
        color: "#38B6CD",
        textColor: "#0F172A",
        leftPercent: 12,
        widthPercent: 28,
        topPercent: 67,
        heightPercent: 26,
        durationText: "Weeks 02–06 (Phases 01–02)",
        lead: "Staff UX Researcher & Data Science Lead",
        deliverables: [
          "Discovery interviews with 36 data leaders across high-growth startups.",
          "Diagnosing user frustration when numbers don't explain qualitative friction reasons.",
          "Designing the 1-click 'Watch Drop-Off Replays' transition paradigm.",
        ],
        metrics: "36 Enterprise Discovery Interviews, 8 Workflow Maps",
        status: "Completed",
      },
      {
        id: "mix-m3",
        title: "Spark AI Conversational Query UX",
        columnHeader: "Feb - Phase 02",
        phaseSpan: "Weeks 05–08",
        color: "#F43F5E",
        textColor: "#FFFFFF",
        leftPercent: 32,
        widthPercent: 24,
        topPercent: 8,
        heightPercent: 26,
        durationText: "Weeks 05–08 (Phase 02)",
        lead: "Principal Interaction Designer",
        deliverables: [
          "Natural language prompt interface converting plain English into complex cohort queries.",
          "Contextual query suggestions based on project taxonomy and recent anomalies.",
          "Visual AI insight cards with confidence intervals and plain text summaries.",
        ],
        metrics: "94% First-Try Query Success Rate",
        status: "Completed",
      },
      {
        id: "mix-m4",
        title: "Warehouse Native Connectors (BigQuery)",
        columnHeader: "Mar - Phase 03",
        phaseSpan: "Weeks 07–11",
        color: "#10B981",
        textColor: "#0F172A",
        leftPercent: 48,
        widthPercent: 26,
        topPercent: 38,
        heightPercent: 26,
        durationText: "Weeks 07–11 (Phase 03)",
        lead: "Principal Distributed Systems Engineer",
        deliverables: [
          "Direct integration with Snowflake, BigQuery, and Databricks without data duplication.",
          "Vectorized query caching layer delivering sub-second response times on 10B+ events.",
          "Schema-mapping wizard with automated column type detection.",
        ],
        metrics: "Sub-Second Query Latency on 10B+ Events",
        status: "Completed",
      },
      {
        id: "mix-m5",
        title: "Interactive Session Player Scrubber",
        columnHeader: "Mar -> Apr (Phases 04–05)",
        phaseSpan: "Weeks 10–14",
        color: "#F59E0B",
        textColor: "#18181B",
        leftPercent: 62,
        widthPercent: 22,
        topPercent: 67,
        heightPercent: 26,
        durationText: "Weeks 10–14 (Phases 04–05)",
        lead: "Design Systems & Frontend Lead",
        deliverables: [
          "Synchronized session replay player with event timeline markers and rage-click badges.",
          "Client-side PII masking engine complying with strict GDPR/HIPAA standards.",
          "High-performance video scrub bar with thumbnail preview tooltips.",
        ],
        metrics: "13 Screen Archetypes Frozen in Figma",
        status: "Completed",
      },
      {
        id: "mix-m6",
        title: "Enterprise Multi-Tenant GA Launch",
        columnHeader: "Apr - Phase 05",
        phaseSpan: "Weeks 14–16",
        color: "#7856FF",
        textColor: "#FFFFFF",
        leftPercent: 79,
        widthPercent: 20,
        topPercent: 8,
        heightPercent: 56,
        durationText: "Weeks 14–16 (Phase 05 Launch)",
        lead: "QA Director & Compliance Officer",
        deliverables: [
          "Enterprise SSO, role-based permissions (RBAC), and SOC-2 Type II audit completion.",
          "Global multi-region deployment with zero downtime during migration.",
          "Executive sign-off and public rollout of the Product Intelligence Platform.",
        ],
        metrics: "Production Launch, 89.8 SUS Usability Score",
        status: "Verified",
      },
    ],
  },

  // 4. Frame.so: 2 Months in 2021 (May – Jun 2021) — 4 Fortnight Pillars, 5 Connected OS Milestones (Overlaps Minimals UI Q2 2021)
  frame: {
    productName: "Frame.so",
    durationBadge: "2 Months (May – Jun 2021)",
    yearRange: "2021",
    pillarCount: 4,
    summary: "High-velocity 2-month execution in mid-2021 engineering the connected multiplayer team workspace unifying notes, tasks, whiteboards, and CMD+K search into a single operating system.",
    concurrentNote: "Developed concurrently alongside Minimals UI during Q2 2021, exploring hyper-focused monochromatic styling and real-time multiplayer cursor feedback.",
    brandColor: "#18181B",
    pillarLabels: [
      "May - Fortnight 01",
      "May - Fortnight 02",
      "Jun - Fortnight 03",
      "Jun - Fortnight 04",
    ],
    milestones: [
      {
        id: "frame-m1",
        title: "The 'Everything is a Block' Schema",
        columnHeader: "May - Fortnight 01",
        phaseSpan: "Weeks 01–02",
        color: "#18181B",
        textColor: "#FFFFFF",
        leftPercent: 1,
        widthPercent: 24,
        topPercent: 8,
        heightPercent: 26,
        durationText: "Weeks 01–02 (Fortnight 01)",
        lead: "Founder & Lead Designer",
        deliverables: [
          "Unified data model where text notes, kanban cards, and whiteboard nodes share an ID.",
          "Mapping context-switching loss: remote workers lost ~45 mins/day switching apps.",
          "Single-surface interface wireframes eliminating tab fragmentation.",
        ],
        metrics: "Single Surface Connected Workspace Thesis Approved",
        status: "Completed",
      },
      {
        id: "frame-m2",
        title: "Global CMD+K Search Indexer",
        columnHeader: "May (Fortnights 01–02)",
        phaseSpan: "Weeks 02–04",
        color: "#0284C7",
        textColor: "#FFFFFF",
        leftPercent: 15,
        widthPercent: 32,
        topPercent: 67,
        heightPercent: 26,
        durationText: "Weeks 02–04 (Fortnights 01–02)",
        lead: "Interaction Design Lead",
        deliverables: [
          "Omni-search modal with client-side fuzzy indexing running in sub-50ms.",
          "Instant keyboard action triggers: create task, jump to board, search mentions.",
          "Bi-directional reference drawer linking markdown notes to engineering tickets.",
        ],
        metrics: "Sub-50ms Global Search Latency",
        status: "Completed",
      },
      {
        id: "frame-m3",
        title: "Multiplayer CRDT Real-Time Sync",
        columnHeader: "May - Fortnight 02",
        phaseSpan: "Weeks 03–05",
        color: "#10B981",
        textColor: "#0F172A",
        leftPercent: 32,
        widthPercent: 28,
        topPercent: 38,
        heightPercent: 26,
        durationText: "Weeks 03–05 (Fortnight 02)",
        lead: "Staff Real-time Engineer",
        deliverables: [
          "WebSocket Conflict-free Replicated Data Type (CRDT) engine for concurrent typing.",
          "Multiplayer cursor avatar badges with smooth position interpolation.",
          "Optimistic UI updates with offline write queue and conflict resolution.",
        ],
        metrics: "Zero Conflict Data Loss Under 100 Concurrent Editors",
        status: "Completed",
      },
      {
        id: "frame-m4",
        title: "Bi-Directional Doc-to-Kanban Links",
        columnHeader: "Jun - Fortnight 03",
        phaseSpan: "Weeks 05–07",
        color: "#EA580C",
        textColor: "#FFFFFF",
        leftPercent: 52,
        widthPercent: 26,
        topPercent: 8,
        heightPercent: 26,
        durationText: "Weeks 05–07 (Fortnight 03)",
        lead: "Principal Product Designer",
        deliverables: [
          "10 master workspace archetypes finalized with obsidian minimalist dark theme.",
          "Drag-and-drop task assignment directly from inline markdown bullet points.",
          "Usability testing sessions with 30 startup teams achieving 91.0 SUS score.",
        ],
        metrics: "91.0 SUS Usability Score (Grade A+)",
        status: "Completed",
      },
      {
        id: "frame-m5",
        title: "Product Hunt Launch (#1 Product)",
        columnHeader: "Jun - Fortnight 04",
        phaseSpan: "Weeks 07–08",
        color: "#F59E0B",
        textColor: "#18181B",
        leftPercent: 74,
        widthPercent: 25,
        topPercent: 38,
        heightPercent: 55,
        durationText: "Weeks 07–08 (Fortnight 04 Launch)",
        lead: "Founders & Growth Team",
        deliverables: [
          "Public launch on Product Hunt, achieving #1 Product of the Day honor.",
          "10,000+ waitlist onboarding automated without server degradation.",
          "Production bug fixing, telemetry monitoring, and community feedback triage.",
        ],
        metrics: "#1 Product of the Day on Product Hunt",
        status: "Verified",
      },
    ],
  },

  // 5. Miro: 1.5 Months in 2021 (Aug – Sep 2021) — 3 Sprint Cycles (6 Weeks Total), 5 Spatial Milestones (Overlaps Minimals UI Q3 2021)
  miro: {
    productName: "Miro",
    durationBadge: "1.5 Months (Aug – Sep 2021)",
    yearRange: "2021",
    pillarCount: 3,
    summary: "High-intensity 6-week design and prototyping sprint in late summer 2021 optimizing the AI innovation workspace and WebGL infinite visual canvas for remote design sprints and agile teams.",
    concurrentNote: "Executed during the final release polish phase of Minimals UI in late Q3 2021, exploring hardware-accelerated canvas shaders and auto-layout geometry.",
    brandColor: "#FFD02F",
    pillarLabels: [
      "Cycle 01 (Weeks 01–02)",
      "Cycle 02 (Weeks 03–04)",
      "Cycle 03 (Weeks 05–06)",
    ],
    milestones: [
      {
        id: "miro-m1",
        title: "Infinite Canvas Viewport Blueprint",
        columnHeader: "Cycle 01",
        phaseSpan: "Weeks 01–02",
        color: "#FFD02F",
        textColor: "#18181B",
        leftPercent: 2,
        widthPercent: 30,
        topPercent: 8,
        heightPercent: 26,
        durationText: "Weeks 01–02 (Cycle 01)",
        lead: "Canvas Systems Architect",
        deliverables: [
          "Hardware-accelerated WebGL canvas architecture handling 5,000+ nodes.",
          "Zero-latency pan/zoom gesture physics across mouse, trackpad, and stylus.",
          "Benchmarking remote whiteboard cognitive load with 24 agile facilitators.",
        ],
        metrics: "60fps Smooth Viewport Pan/Zoom with 5,000+ Objects",
        status: "Completed",
      },
      {
        id: "miro-m2",
        title: "Sticky Note Smart Clustering",
        columnHeader: "Cycles 01–02",
        phaseSpan: "Weeks 02–04",
        color: "#05D686",
        textColor: "#18181B",
        leftPercent: 18,
        widthPercent: 38,
        topPercent: 67,
        heightPercent: 26,
        durationText: "Weeks 02–04 (Cycles 01–02)",
        lead: "Senior UX Researcher & AI Designer",
        deliverables: [
          "Intelligent auto-layout algorithms clustering 100+ raw brainstorm notes.",
          "Horizontal auto-layout visual node groupings with smart alignment snapping.",
          "Time-on-task testing demonstrating a 35.8-second reduction in synthesis time.",
        ],
        metrics: "-35.8s Reduction in Ideation Synthesis",
        status: "Completed",
      },
      {
        id: "miro-m3",
        title: "60fps Lerp Cursor Sync Loop",
        columnHeader: "Cycle 02",
        phaseSpan: "Weeks 03–04",
        color: "#38B6CD",
        textColor: "#0F172A",
        leftPercent: 38,
        widthPercent: 30,
        topPercent: 38,
        heightPercent: 26,
        durationText: "Weeks 03–04 (Cycle 02)",
        lead: "Staff Graphics & WebSocket Engineer",
        deliverables: [
          "High-frequency WebSocket cursor transmission running at 60Hz update rates.",
          "Linear interpolation (lerp) smoothing eliminating erratic cursor jumping.",
          "Custom cursor name badges, color assignments, and emoji reaction trails.",
        ],
        metrics: "Zero Cursor Drop Under Network Jitter Simulation",
        status: "Completed",
      },
      {
        id: "miro-m4",
        title: "Spatial Frame Hierarchy & Exports",
        columnHeader: "Cycles 02–03",
        phaseSpan: "Weeks 04–06",
        color: "#EA6D2F",
        textColor: "#18181B",
        leftPercent: 52,
        widthPercent: 32,
        topPercent: 8,
        heightPercent: 26,
        durationText: "Weeks 04–06 (Cycles 02–03)",
        lead: "Interaction Design Lead",
        deliverables: [
          "7 infinite canvas archetypes finalized in Figma with z-index layer trees.",
          "Spatial frames bounding sprint areas with 1-click nested presentation modes.",
          "High-resolution vector PDF, SVG, and raster PNG batch export pipeline.",
        ],
        metrics: "7 Infinite Canvas Archetypes Approved",
        status: "Completed",
      },
      {
        id: "miro-m5",
        title: "Enterprise Visual Workspace Release",
        columnHeader: "Cycle 03",
        phaseSpan: "Weeks 05–06",
        color: "#FFD02F",
        textColor: "#18181B",
        leftPercent: 68,
        widthPercent: 30,
        topPercent: 38,
        heightPercent: 55,
        durationText: "Weeks 05–06 (Cycle 03 Launch)",
        lead: "Design Director & QA Lead",
        deliverables: [
          "Usability validation sessions with 35 remote design sprint facilitators.",
          "System Usability Scale score achieved 89.5 (Grade A usability rating).",
          "Production deployment with zero critical defects and automated telemetry.",
        ],
        metrics: "89.5 SUS Usability Score (Grade A)",
        status: "Verified",
      },
    ],
  },
}

// 2. CONCURRENT PORTFOLIO CHRONOLOGY ROADMAP (2020 – 2022)
interface ConcurrentProjectTrack {
  id: string
  title: string
  category: string
  durationText: string
  dateSpan: string
  startOffsetPct: number // 0% = Jan 2020, 100% = Dec 2022 (36 months total)
  widthPct: number
  color: string
  isCoreBackbone?: boolean
  description: string
}

// 36-Month Timeline: Jan 2020 to Dec 2022
// Month 0 = Jan 2020, Month 36 = Dec 2022
const concurrentTracks: ConcurrentProjectTrack[] = [
  // Linear: May 2020 – Jul 2020 (Month 4 to 6.5) -> ~11% to 18%
  {
    id: "linear",
    title: "Linear App",
    category: "High-Velocity Product Architecture",
    durationText: "3 Months Sprint",
    dateSpan: "May 2020 – Jul 2020",
    startOffsetPct: 12,
    widthPct: 9,
    color: "#5E6AD2",
    description: "Sub-50ms SQLite Wasm sync, home-row shortcuts & Git automation.",
  },
  // Minimals UI: Oct 2020 – Sep 2021 (Month 9 to 20) -> ~25% to 56% (Almost 1 Full Year Backbone!)
  {
    id: "minimal",
    title: "Minimals UI Design System (Foundation Backbone)",
    category: "Multi-Framework Enterprise Design System",
    durationText: "~11 Months (Nearly 1 Full Year)",
    dateSpan: "Oct 2020 – Sep 2021",
    startOffsetPct: 25,
    widthPct: 32,
    color: "#00A76F",
    isCoreBackbone: true,
    description: "Core design system backbone running continuously while concurrently shipping Mixpanel, Frame.so & Miro.",
  },
  // Mixpanel: Jan 2021 – Apr 2021 (Month 12 to 16) -> ~33% to 44% (Collides with Minimals UI Q1 2021!)
  {
    id: "mixpanel",
    title: "Mixpanel",
    category: "Product Intelligence Platform for AI Era",
    durationText: "4 Months (Concurrent)",
    dateSpan: "Jan 2021 – Apr 2021",
    startOffsetPct: 34,
    widthPct: 11,
    color: "#7856FF",
    description: "Concurrent with Minimals UI: Spark AI insights, session replays, and event funnels.",
  },
  // Frame.so: May 2021 – Jun 2021 (Month 16 to 18) -> ~44% to 50% (Collides with Minimals UI Q2 2021!)
  {
    id: "frame",
    title: "Frame.so",
    category: "Connected Multiplayer Team OS",
    durationText: "2 Months (Concurrent)",
    dateSpan: "May 2021 – Jun 2021",
    startOffsetPct: 45,
    widthPct: 6,
    color: "#18181B",
    description: "Concurrent with Minimals UI: CMD+K omni-search, multiplayer CRDT, and doc-to-task sync.",
  },
  // EdgeTrade: Apr 2021 – Jun 2021 (Month 15 to 17.5) -> ~42% to 49%
  {
    id: "edgetrade",
    title: "EdgeTrade Terminal",
    category: "Algorithmic Trading & Finance",
    durationText: "3 Months (Concurrent)",
    dateSpan: "Apr 2021 – Jun 2021",
    startOffsetPct: 42,
    widthPct: 8,
    color: "#10B981",
    description: "Concurrent execution: Sub-millisecond trade execution and Level-2 order book depth.",
  },
  // Miro: Aug 2021 – Sep 2021 (Month 19 to 20.5) -> ~53% to 58% (Collides with Minimals UI Q3 2021 Polish!)
  {
    id: "miro",
    title: "Miro",
    category: "AI Innovation & WebGL Infinite Canvas",
    durationText: "1.5 Months (Concurrent)",
    dateSpan: "Aug 2021 – Sep 2021",
    startOffsetPct: 53,
    widthPct: 5,
    color: "#FFD02F",
    description: "Concurrent with Minimals UI final release: Hardware-accelerated infinite canvas & sticky AI.",
  },
  // Soar: Jan 2022 – Mar 2022 (Month 24 to 26.5) -> ~67% to 74%
  {
    id: "soar",
    title: "Soar Mobile",
    category: "Creative Mobile App for FIN & Crypto",
    durationText: "2.5 Months Sprint",
    dateSpan: "Jan 2022 – Mar 2022",
    startOffsetPct: 67,
    widthPct: 7,
    color: "#8B5CF6",
    description: "Dual fiat & cryptocurrency mobile banking, P2P transfers, and biometric security.",
  },
  // Fitness App UX Writing: Jul 2022 – Aug 2022 (Month 30 to 31) -> ~83% to 86%
  {
    id: "fitness-ux-writing",
    title: "Fitness App UX Writing",
    category: "Behavioral Microcopy & Case Study",
    durationText: "1 Month Sprint",
    dateSpan: "Jul 2022 – Aug 2022",
    startOffsetPct: 83,
    widthPct: 4,
    color: "#F97316",
    description: "Behavioral design microcopy, habit-loop motivation framework published on Behance.",
  },
]

export function DesignTimeframeView({ currentProduct = "linear" }: DesignTimeframeViewProps) {
  // Allow toggling between individual project timelines AND the full concurrent portfolio chronology
  const [viewMode, setViewMode] = useState<"individual" | "concurrent">("individual")
  const [selectedProductId, setSelectedProductId] = useState<string>(currentProduct)
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>("")

  // Keep selected product in sync with prop
  useEffect(() => {
    if (productTimelines[currentProduct]) {
      setSelectedProductId(currentProduct)
    }
  }, [currentProduct])

  // Get active product profile
  const activeProfile = productTimelines[selectedProductId] || productTimelines.linear
  const milestones = activeProfile.milestones

  // Initialize or maintain active milestone
  useEffect(() => {
    if (!milestones.find((m) => m.id === activeMilestoneId)) {
      setActiveMilestoneId(milestones[0]?.id || "")
    }
  }, [selectedProductId, milestones, activeMilestoneId])

  const activeMilestone = milestones.find((m) => m.id === activeMilestoneId) || milestones[0]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* 1. Header with Mode Switcher (Individual Bespoke Timeline vs Concurrent Master Chronology) */}
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Calendar className="size-3.5" />
              <span>Verified Delivery Lifecycle (2020 – 2022)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              {viewMode === "individual"
                ? `${activeProfile.productName} Timeline`
                : "Master Portfolio Chronology (2020–2022)"}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground font-medium">
              {viewMode === "individual"
                ? `Bespoke delivery roadmap & milestone geometry — ${activeProfile.durationBadge}`
                : "Multi-threaded engineering roadmap showing concurrent project collisions with Minimals UI"}
            </p>
          </div>

          {/* Master View Mode Switcher Pills */}
          <div className="flex items-center gap-2 bg-muted/40 p-1.5 rounded-2xl border border-border/70 self-start lg:self-auto shrink-0 shadow-2xs">
            <button
              onClick={() => setViewMode("individual")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === "individual"
                  ? "bg-foreground text-background shadow-xs font-black"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Compass className="size-3.5" />
                Individual Timeline
              </span>
            </button>
            <button
              onClick={() => setViewMode("concurrent")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === "concurrent"
                  ? "bg-foreground text-background shadow-xs font-black"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <TrendingUp className="size-3.5 text-emerald-500" />
                Concurrent Roadmap (All 8)
              </span>
            </button>
          </div>
        </div>

        {/* Product Selector Pills (When in Individual View) */}
        {viewMode === "individual" && (
          <div className="pt-4 border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Select Product:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {Object.entries(productTimelines).map(([pid, profile]) => (
                <button
                  key={pid}
                  onClick={() => {
                    setSelectedProductId(pid)
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs ${
                    selectedProductId === pid
                      ? "bg-foreground text-background shadow-sm font-black scale-102"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  <span>{profile.productName}</span>
                  <span className="ml-1.5 opacity-70 font-normal">({profile.yearRange})</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Narrative & Multi-threading Context */}
        <div className="p-4 rounded-2xl border border-border/60 bg-muted/20 space-y-1.5">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              {viewMode === "individual" ? activeProfile.productName : "Multi-Threaded Delivery Architecture"}:
            </strong>{" "}
            {viewMode === "individual" ? activeProfile.summary : (
              "Minimals UI ran continuously for nearly an entire year (Oct 2020 – Sep 2021) as the foundational enterprise design system backbone. During this active tenure, Mixpanel (Jan–Apr 2021), Frame.so (May–Jun 2021), EdgeTrade (Apr–Jun 2021), and Miro (Aug–Sep 2021) were concurrently delivered as focused rapid sprints."
            )}
          </p>
          {viewMode === "individual" && activeProfile.concurrentNote && (
            <p className="text-xs text-primary font-semibold flex items-center gap-1.5 pt-1">
              <Sparkles className="size-3.5 shrink-0" />
              <span>{activeProfile.concurrentNote}</span>
            </p>
          )}
        </div>
      </div>

      {/* 2. VIEW MODE A: BESPOKE INDIVIDUAL TIMELINE (100% UNIQUE GEOMETRY PER PROJECT) */}
      {viewMode === "individual" && (
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-lg space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-foreground">
                {activeProfile.productName} — Visual Milestone Architecture
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                {activeProfile.pillarCount} Delivery Pillars • {milestones.length} Bespoke Milestones • Custom Geometry
              </p>
            </div>
            <Badge
              variant="outline"
              className="text-xs font-bold px-3 py-1 border-border bg-muted/30"
            >
              <Clock className="size-3.5 mr-1 text-primary" />
              {activeProfile.durationBadge}
            </Badge>
          </div>

          {/* Timeline Canvas Container with Dynamic Column Count */}
          <div className="w-full overflow-x-auto pb-4">
            <div className="min-w-[800px] max-w-[1050px] mx-auto">
              {/* Pillar Column Headers */}
              <div
                className="grid gap-3 text-center mb-4"
                style={{
                  gridTemplateColumns: `repeat(${activeProfile.pillarCount}, minmax(0, 1fr))`,
                }}
              >
                {activeProfile.pillarLabels.map((lbl, idx) => (
                  <div
                    key={idx}
                    className="text-xs sm:text-sm font-bold text-foreground truncate px-1"
                  >
                    {lbl}
                  </div>
                ))}
              </div>

              {/* Pillars Background Canvas & Dynamic Floating Milestone Blocks */}
              <div
                className="relative h-[430px] grid gap-3 select-none"
                style={{
                  gridTemplateColumns: `repeat(${activeProfile.pillarCount}, minmax(0, 1fr))`,
                }}
              >
                {/* Render the background vertical pillars */}
                {activeProfile.pillarLabels.map((_, pIdx) => (
                  <div key={pIdx} className="relative h-full">
                    <div className="w-full h-full rounded-2xl sm:rounded-3xl bg-muted/70 dark:bg-muted/30 border border-border/80 shadow-inner" />
                  </div>
                ))}

                {/* Render the Bespoke Milestone Blocks with 100% unique per-project positions */}
                {milestones.map((m) => {
                  const isActive = activeMilestone?.id === m.id
                  return (
                    <div
                      key={m.id}
                      onClick={() => setActiveMilestoneId(m.id)}
                      className={`absolute rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex items-center justify-center text-center font-black text-xs sm:text-sm leading-tight cursor-pointer shadow-md transition-all duration-200 hover:scale-[1.03] active:scale-95 z-20 ${
                        isActive
                          ? "ring-4 ring-foreground shadow-xl scale-[1.02]"
                          : "opacity-95 hover:opacity-100"
                      }`}
                      style={{
                        left: `${m.leftPercent}%`,
                        width: `${m.widthPercent}%`,
                        top: `${m.topPercent}%`,
                        height: `${m.heightPercent}%`,
                        backgroundColor: m.color,
                        color: m.textColor,
                      }}
                    >
                      <span className="line-clamp-3">{m.title}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Milestone Inspector Card */}
          {activeMilestone && (
            <div className="rounded-2xl border border-border bg-muted/20 p-6 space-y-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="size-4 rounded-full shrink-0 shadow-xs"
                    style={{ backgroundColor: activeMilestone.color }}
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {activeMilestone.durationText} — {activeMilestone.phaseSpan}
                    </span>
                    <h3 className="text-xl font-black text-foreground">
                      {activeMilestone.title}
                    </h3>
                  </div>
                </div>

                <Badge
                  variant="outline"
                  className="text-xs font-bold px-3 py-1 self-start sm:self-auto"
                  style={{
                    backgroundColor: `${activeMilestone.color}25`,
                    borderColor: `${activeMilestone.color}50`,
                    color: "inherit",
                  }}
                >
                  {activeMilestone.status}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-xl border border-border bg-card space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                    Discipline Lead
                  </span>
                  <p className="font-bold text-foreground">{activeMilestone.lead}</p>
                </div>

                <div className="p-3.5 rounded-xl border border-border bg-card space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                    Validation Metric
                  </span>
                  <p className="font-bold text-primary">{activeMilestone.metrics}</p>
                </div>

                <div className="p-3.5 rounded-xl border border-border bg-card space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                    Production Deliverable
                  </span>
                  <p className="font-bold text-foreground">
                    Verified & Integrated into Codebase
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                  Core Deliverables & Production Outputs
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {activeMilestone.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border border-border bg-card flex items-start gap-2"
                    >
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Milestone Phase Directory Table */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-black uppercase tracking-wider text-muted-foreground">
              {activeProfile.productName} — Full Phase Breakdown
            </h3>
            <div className="border border-border rounded-xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-muted/50 text-muted-foreground font-semibold uppercase tracking-wider border-b border-border">
                  <tr>
                    <th className="p-3">Phase / Milestone</th>
                    <th className="p-3">Pillar Column</th>
                    <th className="p-3">Discipline Lead</th>
                    <th className="p-3">Outcome Metric</th>
                    <th className="p-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {milestones.map((m) => (
                    <tr
                      key={m.id}
                      onClick={() => setActiveMilestoneId(m.id)}
                      className={`hover:bg-muted/30 cursor-pointer transition-colors ${
                        activeMilestone?.id === m.id ? "bg-muted/40 font-bold" : ""
                      }`}
                    >
                      <td className="p-3 font-bold text-foreground flex items-center gap-2">
                        <div
                          className="size-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: m.color }}
                        />
                        {m.title}
                      </td>
                      <td className="p-3 text-muted-foreground">{m.columnHeader}</td>
                      <td className="p-3 text-muted-foreground">{m.lead}</td>
                      <td className="p-3 font-mono text-muted-foreground">{m.metrics}</td>
                      <td className="p-3 text-center">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 3. VIEW MODE B: CONCURRENT MASTER PORTFOLIO ROADMAP (2020 – 2022) */}
      {viewMode === "concurrent" && (
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-lg space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <div className="flex items-center gap-2">
                <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-xs border-emerald-500/30">
                  3-Year Master Roadmap (2020 – 2022)
                </Badge>
                <Badge variant="outline" className="text-xs font-bold">
                  8 Parallel Systems
                </Badge>
              </div>
              <h2 className="text-2xl font-black text-foreground mt-2">
                Concurrent Delivery Topology & Minimals UI Design Collisions
              </h2>
              <p className="text-xs text-muted-foreground mt-1 max-w-3xl leading-relaxed">
                Empirical visualization proving how <strong>Minimals UI</strong> served as the continuous 11-month design system backbone from late 2020 to late 2021, while Linear, Mixpanel, Frame.so, and Miro were developed concurrently in parallel sprints.
              </p>
            </div>
          </div>

          {/* Multi-Track Gantt / Swimlane Canvas */}
          <div className="w-full overflow-x-auto pb-4">
            <div className="min-w-[860px] space-y-4">
              {/* Year & Quarter Scale Headers */}
              <div className="grid grid-cols-12 text-center text-xs font-bold text-muted-foreground border-b border-border pb-2">
                <div className="col-span-4 border-r border-border pb-1">
                  <span className="text-foreground text-sm font-black block">2020</span>
                  <span className="text-[10px] text-muted-foreground font-normal">
                    Q1 • Q2 (Linear) • Q3 • Q4 (Minimals Start)
                  </span>
                </div>
                <div className="col-span-5 border-r border-border pb-1">
                  <span className="text-foreground text-sm font-black block text-emerald-600 dark:text-emerald-400">
                    2021 (Minimals UI + Mixpanel + Frame + Miro Collision)
                  </span>
                  <span className="text-[10px] text-muted-foreground font-normal">
                    Q1 (Mixpanel) • Q2 (Frame/EdgeTrade) • Q3 (Miro/Minimals LTS)
                  </span>
                </div>
                <div className="col-span-3 pb-1">
                  <span className="text-foreground text-sm font-black block">2022</span>
                  <span className="text-[10px] text-muted-foreground font-normal">
                    Q1 (Soar Mobile) • Q2 • Q3 (Fitness Case)
                  </span>
                </div>
              </div>

              {/* Swimlane Tracks for All Projects */}
              <div className="space-y-3 pt-2">
                {concurrentTracks.map((track) => (
                  <div
                    key={track.id}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      track.isCoreBackbone
                        ? "bg-emerald-500/10 border-emerald-500/40 ring-1 ring-emerald-500/30 shadow-sm"
                        : "bg-muted/20 border-border/70 hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="size-3 rounded-full shrink-0 shadow-2xs"
                          style={{ backgroundColor: track.color }}
                        />
                        <span className="font-black text-sm text-foreground">
                          {track.title}
                        </span>
                        {track.isCoreBackbone && (
                          <Badge className="bg-emerald-600 text-white font-bold text-[10px] py-0 px-2 rounded-full">
                            Continuous 1-Year Core
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">
                          • {track.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-mono font-bold text-foreground">
                          {track.dateSpan}
                        </span>
                        <Badge variant="outline" className="text-[10px] font-bold">
                          {track.durationText}
                        </Badge>
                      </div>
                    </div>

                    {/* Progress Track Bar */}
                    <div className="relative h-7 w-full rounded-xl bg-muted/60 dark:bg-muted/30 border border-border/60 overflow-hidden">
                      {/* Grid Guide Marks */}
                      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none divide-x divide-border/30" />

                      {/* Floating Active Time Span Bar */}
                      <div
                        className="absolute top-1 bottom-1 rounded-lg flex items-center px-3 shadow-md transition-all font-bold text-[11px] truncate"
                        style={{
                          left: `${track.startOffsetPct}%`,
                          width: `${track.widthPct}%`,
                          backgroundColor: track.color,
                          color: track.id === "miro" ? "#18181B" : "#FFFFFF",
                        }}
                      >
                        <span className="truncate">{track.title}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
