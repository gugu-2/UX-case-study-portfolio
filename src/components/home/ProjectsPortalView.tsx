import React, { useState } from "react"
import { motion } from "framer-motion"
import { ProductId, productsConfig } from "@/config/products"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  BookOpen,
  ExternalLink,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  FolderKanban,
  Clock,
  Compass,
  Globe,
  UserCheck,
  Briefcase,
  Award,
  Code2,
} from "lucide-react"

interface ProjectsPortalViewProps {
  onSelectProject: (productId: ProductId, view: "dashboard" | "docs") => void
}

type ProjectType = "studio" | "external"

interface UnifiedProjectCard {
  id: string
  title: string
  subtitle: string
  tagline: string
  description: string
  brandColor: string
  brandLogoText?: string
  brandIcon?: React.ReactNode
  coverImage: string
  badgeText: string
  type: ProjectType
  studioProductId?: ProductId
  externalUrl?: string
  screensCountText?: string
  kpis: {
    label: string
    value: string
    note: string
  }[]
  highlights: string[]
}

export function ProjectsPortalView({ onSelectProject }: ProjectsPortalViewProps) {
  const [filterType, setFilterType] = useState<"all" | "mobile" | "desktop" | "web">("all")

  // Reorganized unified project list where #1 is Linear App, #2 is EdgeTrade App, and #3 is Minimals UI
  const allProjects: UnifiedProjectCard[] = [
    // 1st Product: Linear App
    {
      id: "linear",
      title: "Linear App",
      subtitle: "High-Velocity Product Operations Architecture",
      tagline: "The Issue Tracking System for High-Performance Teams",
      description: "Engineered around extreme sub-50ms speed, local SQLite Wasm sync, keyboard-first home-row ergonomics, and bidirectional Git branch automation.",
      brandColor: "#5E6AD2",
      brandLogoText: "L",
      coverImage: "/thumbnails/linear.png",
      badgeText: "Sub-50ms Sync",
      type: "studio",
      studioProductId: "linear",
      screensCountText: "14 Screen Archetypes",
      kpis: [
        { label: "Creation Latency", value: "2.4s", note: "-86.8% vs Jira" },
        { label: "SUS Usability Score", value: "91.4", note: "Grade A+ (99th %ile)" },
        { label: "Keyboard Traversal", value: "98.2%", note: "Full home-row flow" },
      ],
      highlights: [
        "14 Master Screen Archetypes (L01–L14)",
        "Sub-50ms Local SQLite Wasm Sync Engine",
        "Bi-directional Git Branch & PR Automation",
        "Obsidian Dark Mode with 100% WCAG AA Contrast",
      ],
    },
    // 2nd Product: EdgeTrade App
    {
      id: "edgetrade",
      title: "EdgeTrade",
      subtitle: "Algorithmic Trading & High-Frequency Terminal",
      tagline: "Sub-Millisecond Institutional Financial Execution",
      description: "High-frequency trade execution platform featuring dynamic Level-2 order book depth visualizers, sub-millisecond execution, and automated portfolio risk telemetry.",
      brandColor: "#10B981",
      brandLogoText: "E",
      coverImage: "/thumbnails/edgetrade.avif",
      badgeText: "Live Terminal",
      type: "external",
      externalUrl: "https://edgetrade-ux.agarthan.space/",
      screensCountText: "Live Trading Terminal",
      kpis: [
        { label: "Order Latency", value: "<1ms", note: "Sub-millisecond" },
        { label: "Execution Precision", value: "99.99%", note: "Zero slip tolerance" },
        { label: "Market Depth", value: "Level 2", note: "Real-time order book" },
      ],
      highlights: [
        "Sub-millisecond Order Execution Topology",
        "Dynamic Depth Chart & Level-2 Market Visualizer",
        "Margin, Leverage & Liquidation Risk Controls",
        "Multi-Asset Hedging Architecture & Audits",
      ],
    },
    // 3rd Product: Minimals UI (Complete Design System & Multi-Framework Ecosystem)
    {
      id: "minimal",
      title: "Minimals UI",
      subtitle: "Universal Design System & Enterprise Application Ecosystem",
      tagline: "Multi-Framework Design System for React, Next.js, Vite & MUI",
      description: "A complete, production-grade design system and multi-framework application ecosystem built for designers and developers. Features 1:1 Figma token synchronization, atomic OKLCH color palettes, multi-framework architecture (Next.js App Router, Vite, Material-UI), dark/light adaptive presets, and 60+ modular application templates and banking dashboards.",
      brandColor: "#00A76F",
      brandLogoText: "Min",
      coverImage: "/images/General_Analytics.png",
      badgeText: "Full Design System",
      type: "studio",
      studioProductId: "minimal",
      screensCountText: "Design System & 6+ Dashboards",
      kpis: [
        { label: "Component Atoms", value: "200+ Atoms", note: "Figma & React 1:1 sync" },
        { label: "Framework Ready", value: "Next.js / MUI", note: "TypeScript & Vite core" },
        { label: "SUS Usability Score", value: "92.4", note: "Grade A+ (Benchmark n=42)" },
      ],
      highlights: [
        "Complete Design System Architecture & Multi-Preset Tokens",
        "1:1 Component Parity Between Figma and React / Next.js",
        "Dual Navigation Rails (Vertical, Horizontal, Compact)",
        "WCAG 2.2 AA Contrast Compliance & Fluid Responsiveness",
      ],
    },
    // 4th Product: Mixpanel (Product Intelligence Platform for the AI Era)
    {
      id: "mixpanel",
      title: "Mixpanel",
      subtitle: "Product Intelligence Platform for the AI Era",
      tagline: "Combining Analytics, Session Replay, Experiments, Feature Flags & AI Insights",
      description: "The product intelligence platform for the AI era. Combines event analytics, visual session replays, multivariate feature experimentation, feature flags, and Spark AI insights into a unified decision engine. Teams discover what users do, why they do it, and test optimizations in real time.",
      brandColor: "#7856FF",
      brandLogoText: "M",
      coverImage: "/images/mixpanel/Thumbnail_Mixpanel.png",
      badgeText: "13 Screens",
      type: "studio",
      studioProductId: "mixpanel",
      screensCountText: "13 Screen Archetypes",
      kpis: [
        { label: "Query Latency", value: "<1s", note: "Sub-second on billions of events" },
        { label: "Decision Velocity", value: "10x", note: "Spark AI conversational insights" },
        { label: "Unified Engine", value: "5-in-1", note: "Analytics, Replay, Flags, Tests, AI" },
      ],
      highlights: [
        "AI-Powered Conversational Insights (Spark AI)",
        "Integrated Session Replay Tied to Event Funnels",
        "Native Multivariate Experiments & Targeted Feature Flags",
        "Warehouse Native Connectors (Snowflake, BigQuery, Databricks)",
      ],
    },
    // 5th Product: Frame.so
    {
      id: "frame",
      title: "Frame.so",
      subtitle: "Connected Team Workspace & Operating System",
      tagline: "All-in-One Docs, Tasks & Whiteboards Platform",
      description: "A multiplayer connected OS eliminating SaaS fragmentation. Seamlessly link notes to engineering tasks and infinite whiteboards in a single view.",
      brandColor: "#18181B",
      brandLogoText: "F",
      coverImage: "/thumbnails/cover-frame.png",
      badgeText: "10 Screens",
      type: "studio",
      studioProductId: "frame",
      screensCountText: "10 Screen Archetypes",
      kpis: [
        { label: "Task Success", value: "92%", note: "+41% from baseline" },
        { label: "SUS Usability Score", value: "91.0", note: "Grade A+" },
        { label: "Time to Insight", value: "1.2s", note: "-95% search latency" },
      ],
      highlights: [
        "10 Workspace Core Archetypes (FR01–FR10)",
        "Global CMD+K Search Modal Engine",
        "Bi-directional Doc-to-Task Sync",
        "Unified Real-time Multiplayer Collaboration",
      ],
    },
    // 6th Product: Miro
    {
      id: "miro",
      title: "Miro",
      subtitle: "Multiplayer Visual Workspace & Infinite Canvas",
      tagline: "Infinite Digital Whiteboard for Distributed Teams",
      description: "Hardware-accelerated WebGL infinite canvas powering remote design sprints, interactive sticky note synthesis, and live cursors.",
      brandColor: "#FFD02F",
      brandLogoText: "M",
      coverImage: "/images/miro/Auto Layout Horizontal.png",
      badgeText: "7 Screens",
      type: "studio",
      studioProductId: "miro",
      screensCountText: "7 Screen Archetypes",
      kpis: [
        { label: "Task Success", value: "94%", note: "+29% from baseline" },
        { label: "SUS Usability Score", value: "89.5", note: "Grade A" },
        { label: "Time on Task", value: "12.4s", note: "-35.8s reduction" },
      ],
      highlights: [
        "7 Infinite Canvas Archetypes (M01–M07)",
        "Horizontal Auto-Layout Visual Nodes",
        "WebSocket 60fps Multiplayer Cursors",
        "Spatial Frames & Z-Index Layer Exports",
      ],
    },
    // 7th Product: Soar (Creative Mobile App for FIN Banking & Crypto)
    {
      id: "soar",
      title: "Soar",
      subtitle: "Creative Mobile App for FIN Banking & Crypto",
      tagline: "Fluid Mobile Experience for Modern Banking & Digital Asset Management",
      description: "A creative, fluid mobile banking and crypto application engineered for modern digital finance. Features intuitive multi-currency fiat accounts, seamless cryptocurrency portfolio tracking, instant peer-to-peer transfers, and tactile financial telemetry.",
      brandColor: "#8B5CF6",
      brandLogoText: "S",
      coverImage: "/thumbnails/soar.avif",
      badgeText: "Live Mobile UX",
      type: "external",
      externalUrl: "https://soar.agarthan.space/",
      screensCountText: "Live FIN & Crypto Mobile App",
      kpis: [
        { label: "Asset Scope", value: "Fiat + Crypto", note: "Dual-portfolio ledger" },
        { label: "Transaction Speed", value: "Instant P2P", note: "Sub-second transfers" },
        { label: "Security Flow", value: "Biometric", note: "Multi-factor authentication" },
      ],
      highlights: [
        "Creative Interface for Modern FIN Banking & Crypto",
        "Unified Multi-Currency Fiat & Digital Asset Portfolios",
        "Instant P2P Transfers & Frictionless Send/Receive Flows",
        "Real-Time Crypto Telemetry & Interactive Asset Visualizers",
      ],
    },
    // 8th Product: Fitness App UX Writing
    {
      id: "fitness-ux-writing",
      title: "Fitness App UX Writing",
      subtitle: "Mobile Health UX Writing & Case Study",
      tagline: "Behavioral Design & Habit Loop Microcopy",
      description: "Comprehensive behavioral UX writing, tone-of-voice frameworks, habit-loop motivational copy, and onboarding conversion case study published on Behance.",
      brandColor: "#F97316",
      brandIcon: <Activity className="size-5 text-white" />,
      coverImage: "/thumbnails/fitness-app.jpeg",
      badgeText: "Behance Case",
      type: "external",
      externalUrl: "https://www.behance.net/gallery/176002683/Fitness-App-UX-Writing",
      screensCountText: "Behance UX Case Study",
      kpis: [
        { label: "Onboarding Flow", value: "+38%", note: "Conversion increase" },
        { label: "Habit Loops", value: "84%", note: "Daily task streak" },
        { label: "Tone Framework", value: "Grade A", note: "Voice consistency" },
      ],
      highlights: [
        "Habit Loop & Behavioral Microcopy Guidelines",
        "Tone of Voice Matrix across User Emotional States",
        "Onboarding Funnel Copy & Friction Reduction",
        "Push Notification Retention Engine Copy",
      ],
    },
  ]

    const displayedProjects = allProjects.filter((p) => {
    if (filterType === "mobile") return p.id === "soar" || p.id === "fitness-ux-writing"
    if (filterType === "desktop") return p.id === "linear" || p.id === "edgetrade" || p.id === "frame"
    if (filterType === "web") return p.id === "minimal" || p.id === "mixpanel" || p.id === "miro"
    return true
  })

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="space-y-10 animate-in fade-in-50 duration-300">
      {/* 1. Master Studio Hero Header: Hidden for now */}
      {false && (
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

        {/* Top Section: Balanced Two-Column Split */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Mission Statement */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-[8px] border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <FolderKanban className="size-3.5" />
              <span>Master UX Documentation & Architecture Platform</span>
            </div>

            <h3 className="figma-h3 text-[40px] leading-[50px] sm:text-[52px] sm:leading-[64px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
              Unified Product Design Systems & Usability Studios
            </h3>

            <p className="figma-body1 text-base sm:text-lg leading-relaxed text-muted-foreground ">
              Explore complete, verified UX documentation, quantitative research telemetry dashboards, and interactive task flowcharts for world-class software products. Select any product below to enter its specialized workspace.
            </p>
          </div>

          {/* Right Column: Platform Telemetry & Ecosystem Overview */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="rounded-2xl border border-border/80 bg-muted/30 p-5 space-y-3.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-foreground">Verified Case Studies Live</span>
                </div>
                <Badge variant="outline" className="text-[10px] font-bold border-border bg-card">
                  8 Systems
                </Badge>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Priority Systems</span>
                  <span className="font-bold text-foreground">Linear • EdgeTrade • Minimals</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Platform Matrix</span>
                  <span className="font-bold text-foreground">Web • Desktop • Mobile Haptic</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>UX Artifacts</span>
                  <span className="font-bold text-foreground">Personas • Empathy • Journey Maps</span>
                </div>
              </div>

              <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                  <CheckCircle2 className="size-3" />
                  WCAG 2.2 AA Compliant
                </span>
                <span className="font-mono text-[10px]">v3.2 Production</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Full-Width 4-Column Quick Metrics Bar */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-6 border-t border-border/60 mt-8">
          <div className="p-4 rounded-2xl border border-border bg-muted/20 hover:bg-muted/30 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block truncate">
              Total Projects
            </span>
            <span className="text-lg sm:text-xl font-black text-foreground whitespace-nowrap block mt-1">
              8 Systems
            </span>
            <span className="text-[11px] text-primary font-semibold block mt-0.5 truncate">
              5 Studios + 3 Live Portals
            </span>
          </div>

          <div className="p-4 rounded-2xl border border-border bg-muted/20 hover:bg-muted/30 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block truncate">
              Screen Archetypes
            </span>
            <span className="text-lg sm:text-xl font-black text-foreground whitespace-nowrap block mt-1">
              50+ Screens
            </span>
            <span className="text-[11px] text-muted-foreground block mt-0.5 truncate">
              14 Lin + 13 Mix + 10 Fra + 7 Mir + 6 Min
            </span>
          </div>

          <div className="p-4 rounded-2xl border border-border bg-muted/20 hover:bg-muted/30 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block truncate">
              Accessibility
            </span>
            <span className="text-lg sm:text-xl font-black text-foreground whitespace-nowrap block mt-1">
              100% AA
            </span>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5 truncate">
              WCAG 2.2 Verified
            </span>
          </div>

          <div className="p-4 rounded-2xl border border-border bg-muted/20 hover:bg-muted/30 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block truncate">
              Figma Traceability
            </span>
            <span className="text-lg sm:text-xl font-black text-foreground whitespace-nowrap block mt-1">
              Bi-Directional
            </span>
            <span className="text-[11px] text-muted-foreground block mt-0.5 truncate">
              Direct Master Files
            </span>
          </div>
        </div>
      </div>
      )}

      {/* 2. Projects Showcase with Filter Tabs */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
          <div>
            <h4 className="figma-h4 text-[24px] leading-[36px] lg:text-[24px] lg:leading-[36px] font-bold tracking-tight text-foreground">All 8 Product Design Systems & Documentations</h4>
            <p className="figma-body2 text-sm text-muted-foreground mt-1">
              Reorganized by priority: Linear App (#1), EdgeTrade Terminal (#2), and Minimals UI (#3), complete with verified cover thumbnails and telemetry.
            </p>
          </div>

                    {/* Filter Dropdown */}
          <div className="self-start sm:self-auto">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              className="h-10 px-4 py-2 rounded-[8px] text-sm font-bold border border-border bg-card text-foreground cursor-pointer outline-none shadow-sm focus:ring-2 focus:ring-primary/20 transition-all appearance-none pr-10 relative"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27currentColor%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1rem' }}
            >
              <option value="all">All Projects ({allProjects.length})</option>
              <option value="mobile">Mobile Apps (2)</option>
              <option value="desktop">Desktop Clients (3)</option>
              <option value="web">Web Portals (3)</option>
            </select>
          </div>
        </div>

        {/* 9 Cards Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-3xl border border-border/80 bg-card overflow-hidden shadow-[0px_0px_2px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:shadow-[0px_0px_2px_rgba(0,0,0,0.20),0px_12px_24px_-4px_rgba(0,0,0,0.24)] hover:shadow-[0px_16px_32px_-4px_rgba(145,158,171,0.20)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Strip with Color Accent & Logo */}
                <div
                  className="p-5 border-b border-border/70 flex items-center justify-between gap-4"
                  style={{
                    backgroundColor: `${project.brandColor}08`,
                  }}
                >
                  <div className="flex items-center gap-3">
                                        <div
                      className="flex size-10 items-center justify-center rounded-xl font-black text-white text-sm shadow-sm shrink-0"
                      style={{ backgroundColor: project.brandColor }}
                    >
                      {project.brandIcon || project.brandLogoText}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="figma-h4 text-[20px] leading-[30px] lg:text-[24px] lg:leading-[36px] font-bold tracking-tight text-foreground">
                          {project.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-[11px] font-bold rounded-full"
                          style={{
                            borderColor: `${project.brandColor}40`,
                            backgroundColor: `${project.brandColor}15`,
                            color: project.brandColor,
                          }}
                        >
                          {project.badgeText}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground font-semibold">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {project.type === "external" ? (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-card hover:bg-muted text-xs font-bold text-foreground transition-all duration-150 active:scale-95 group/link shrink-0 shadow-2xs"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="size-3 text-muted-foreground group-hover/link:text-foreground" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-muted-foreground px-2 py-1 rounded bg-muted/50 border border-border/40 shrink-0">
                      In-Studio UX
                    </span>
                  )}
                </div>

                {/* Cover Image Thumbnail (Prominent aspect-video banner) */}
                <div className="relative aspect-video w-full overflow-hidden bg-muted/40 border-b border-border">
                  <img
                    src={project.coverImage}
                    alt={`${project.title} Cover Thumbnail`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    onError={(e) => {
                      (e.target as HTMLElement).style.opacity = '0.6';
                    }}
                  />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-xl bg-black/85 backdrop-blur-md text-white font-mono text-[11px] font-bold shadow-md flex items-center gap-1.5">
                      {project.type === "external" ? (
                        <Globe className="size-3 text-emerald-400" />
                      ) : (
                        <Layers className="size-3 text-primary" />
                      )}
                      <span>{project.screensCountText}</span>
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-5">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* 3 Core KPI Metrics */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {project.kpis.map((kpi) => (
                      <div
                        key={kpi.label}
                        className="p-3 rounded-2xl border border-border bg-muted/20 text-center space-y-0.5"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block truncate">
                          {kpi.label}
                        </span>
                        <span
                          className="text-base sm:text-lg font-black block"
                          style={{ color: project.brandColor }}
                        >
                          {kpi.value}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-medium block truncate">
                          {kpi.note}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Architectural Highlights */}
                  <div className="space-y-1.5 text-xs">
                    <span className="font-bold text-foreground block text-[11px] uppercase tracking-wider">
                      Verified Specifications & Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-1.5">
                          <CheckCircle2
                            className="size-3.5 shrink-0"
                            style={{ color: project.brandColor }}
                          />
                          <span className="text-[11px] leading-tight">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Studio Dashboard/Docs vs External Portal Link */}
              <div className="p-6 pt-0">
                {project.type === "studio" && project.studioProductId ? (
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      size="lg"
                      onClick={() => onSelectProject(project.studioProductId!, "dashboard")}
                      className="w-full sm:flex-1 h-12 min-h-[48px] px-[22px] py-[11px] rounded-[8px] text-[15px] leading-[26px] font-bold text-white cursor-pointer active:scale-[0.98] transition-all hover:brightness-105 border-transparent"
                      style={{ backgroundColor: project.brandColor, boxShadow: `0 8px 16px ${project.brandColor}3d` }}
                    >
                      <LayoutDashboard className="size-4 mr-2" />
                      Open Dashboard
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => onSelectProject(project.studioProductId!, "docs")}
                      className="w-full sm:flex-1 h-12 min-h-[48px] px-[22px] py-[11px] rounded-[8px] text-[15px] leading-[26px] font-bold border-border/80 hover:bg-muted text-foreground cursor-pointer active:scale-[0.98] transition-all"
                    >
                      <BookOpen className="size-4 mr-2" />
                      Documentation
                    </Button>
                  </div>
                ) : (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 h-12 min-h-[48px] px-[22px] py-[11px] rounded-[8px] text-[15px] leading-[26px] font-bold text-white transition-all hover:brightness-105 active:scale-[0.98]"
                    style={{ backgroundColor: project.brandColor, boxShadow: `0 8px 16px ${project.brandColor}3d` }}
                  >
                    <span>Visit Live UX Documentation</span>
                    <ExternalLink className="size-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 3. About Me & Master Portfolios Section */}
        <div className="mt-16 sm:mt-24 rounded-3xl border border-border bg-gradient-to-b from-card via-card to-muted/20 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 -mt-16 size-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 -mb-16 size-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Section Header with Designer Info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border">
              <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
                {/* Designer Monogram / Avatar */}
                <div className="relative size-16 sm:size-20 rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-indigo-600 p-0.5 shadow-md shrink-0">
                  <div className="size-full rounded-[14px] bg-card flex flex-col items-center justify-center text-foreground font-black">
                    <span className="text-lg sm:text-xl tracking-tighter">PM</span>
                    <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest -mt-1">Architect</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-emerald-500 border-2 border-card ring-1 ring-emerald-500/30" title="Active & Available" />
                </div>

                {/* Bio & Pedigree */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h2 className="figma-h2 text-[32px] leading-[42px] sm:text-[40px] sm:leading-[52px] lg:text-[48px] lg:leading-[64px] font-extrabold tracking-tight text-foreground">
                      About Pritam
                    </h2>
                    <Badge variant="outline" className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border-primary/30 bg-primary/10 text-primary">
                      14+ Yrs Experience
                    </Badge>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      Senior Product Designer & Developer
                    </span>
                  </div>

                  <p className="figma-body1 text-sm sm:text-base font-semibold text-foreground/90 leading-snug">
                    "14+ yrs Senior Product Designer & Developer at Airbnb, GitHub, and BBC – built and shipped polished websites and digital products used by millions globally"
                  </p>

                  {/* Pedigree Tags */}
                  <div className="flex items-center gap-2 pt-1 flex-wrap">
                    <span className="text-xs text-muted-foreground font-medium">Shipped at:</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[8px] bg-muted text-[11px] font-bold text-foreground border border-border">
                      <span className="text-rose-500">●</span> Airbnb
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[8px] bg-muted text-[11px] font-bold text-foreground border border-border">
                      <span className="text-foreground">●</span> GitHub
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[8px] bg-muted text-[11px] font-bold text-foreground border border-border">
                      <span className="text-amber-500">●</span> BBC
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 shrink-0">
                <div className="p-3 rounded-xl border border-border bg-muted/20 text-center">
                  <span className="text-lg font-black text-foreground block leading-none">14+</span>
                  <span className="text-[10px] text-muted-foreground font-medium mt-1 block">Years Shipped</span>
                </div>
                <div className="p-3 rounded-xl border border-border bg-muted/20 text-center">
                  <span className="text-lg font-black text-foreground block leading-none">Millions</span>
                  <span className="text-[10px] text-muted-foreground font-medium mt-1 block">Global Users</span>
                </div>
                <div className="p-3 rounded-xl border border-border bg-muted/20 text-center">
                  <span className="text-lg font-black text-foreground block leading-none">8+</span>
                  <span className="text-[10px] text-muted-foreground font-medium mt-1 block">Master Systems</span>
                </div>
                <div className="p-3 rounded-xl border border-border bg-muted/20 text-center">
                  <span className="text-lg font-black text-emerald-600 dark:text-emerald-400 block leading-none">100%</span>
                  <span className="text-[10px] text-muted-foreground font-medium mt-1 block">Production Code</span>
                </div>
              </div>
            </div>

            {/* Master External Portfolio Cards */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="figma-h3 text-[22px] leading-[32px] sm:text-[28px] sm:leading-[38px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground tracking-tight">
                    Official Portfolios, Design Systems & Code Repositories
                  </h3>
                  <p className="figma-body2 text-xs text-muted-foreground">
                    Direct access to all websites, design case studies, and engineering repositories created by Pritam.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">
                  4 Verified Profiles
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1: Framer Website */}
                <a
                  href="https://pritam96.framer.website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-4 relative overflow-hidden active:scale-[0.98]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-xl bg-gradient-to-tr from-[#0055FF] to-[#0099FF] text-white flex items-center justify-center shadow-sm">
                        <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                        </svg>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        Shipped Sites
                      </Badge>
                    </div>
                    <div>
                      <h4 className="figma-h4 text-[18px] leading-[26px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                        Personal Website
                        <ExternalLink className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <span className="text-[11px] font-mono text-muted-foreground block">
                        pritam96.framer.website
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Official flagship portfolio website featuring the complete index of live production websites, bespoke web architectures, and client platforms created by Pritam.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border flex items-center justify-between text-xs font-bold text-foreground group-hover:text-primary">
                    <span>Visit Live Portfolio</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                {/* Card 2: Behance */}
                <a
                  href="https://behance.net/pritam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl border border-border bg-card hover:border-[#0057FF]/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-4 relative overflow-hidden active:scale-[0.98]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-xl bg-[#0057FF] text-white flex items-center justify-center shadow-sm">
                        <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.971 3-3.467 0-5.755-2.5-5.755-6s2.327-6 5.755-6c3.486 0 5.483 2.502 5.344 6.333h-8.083c.092 1.802 1.378 2.721 2.871 2.721 1.488 0 2.29-.691 2.593-1.666l2.246 1.612zm-5.008-5.333c-.053-1.428-1.077-2.18-2.433-2.18-1.398 0-2.404.793-2.585 2.18h5.018zm-11.718 7.333h-7v-16h7.288c3.044 0 4.908 1.427 4.908 4.025 0 1.636-.889 2.83-2.228 3.424 1.777.568 2.748 1.996 2.748 3.967 0 2.894-2.193 4.584-5.716 4.584zm-3.864-6.866h3.407c1.385 0 2.373-.623 2.373-1.921 0-1.258-.934-1.848-2.34-1.848h-3.44v3.769zm0 4.148h3.616c1.61 0 2.65-.679 2.65-2.091 0-1.455-1.096-2.19-2.731-2.19h-3.535v4.281z" />
                        </svg>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        UI/UX Design
                      </Badge>
                    </div>
                    <div>
                      <h4 className="figma-h4 text-[18px] leading-[26px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground group-hover:text-[#0057FF] transition-colors flex items-center gap-1.5">
                        Behance Portfolio
                        <ExternalLink className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <span className="text-[11px] font-mono text-muted-foreground block">
                        behance.net/pritam
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Comprehensive visual design archives, mobile app ergonomics, atomic color & token guidelines, and published end-to-end UX writing case studies created by Pritam.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border flex items-center justify-between text-xs font-bold text-foreground group-hover:text-[#0057FF]">
                    <span>Explore Behance Works</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                {/* Card 3: GitHub */}
                <a
                  href="https://github.com/gugu-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl border border-border bg-card hover:border-foreground/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-4 relative overflow-hidden active:scale-[0.98]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-xl bg-[#24292F] dark:bg-muted text-white dark:text-foreground flex items-center justify-center shadow-sm">
                        <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400">
                        Code Repos
                      </Badge>
                    </div>
                    <div>
                      <h4 className="figma-h4 text-[18px] leading-[26px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex items-center gap-1.5">
                        GitHub Profile
                        <ExternalLink className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <span className="text-[11px] font-mono text-muted-foreground block">
                        github.com/gugu-2
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Active open-source code repositories, full-stack React/Next.js/TypeScript architectures, production UI libraries, and automated CI/CD configurations.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border flex items-center justify-between text-xs font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    <span>View GitHub Repos</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                {/* Card 4: LinkedIn */}
                <a
                  href="https://linkedin.com/in/pritam-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl border border-border bg-card hover:border-[#0A66C2]/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-4 relative overflow-hidden active:scale-[0.98]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shadow-sm">
                        <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        Professional
                      </Badge>
                    </div>
                    <div>
                      <h4 className="figma-h4 text-[18px] leading-[26px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground group-hover:text-[#0A66C2] transition-colors flex items-center gap-1.5">
                        LinkedIn Profile
                        <ExternalLink className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <span className="text-[11px] font-mono text-muted-foreground block">
                        linkedin.com/in/pritam-design/
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      14+ year verified career path across Airbnb, GitHub, and BBC, enterprise design leadership experience, architecture recommendations, and network.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border flex items-center justify-between text-xs font-bold text-foreground group-hover:text-[#0A66C2]">
                    <span>Connect on LinkedIn</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>

            {/* Platform Footer Note */}
            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span>All case studies, systems architecture, and engineering assets authored & curated by Pritam.</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] font-mono">
                <a href="https://pritam96.framer.website/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  pritam96.framer.website
                </a>
                <span>•</span>
                <a href="https://github.com/gugu-2" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  github.com/gugu-2
                </a>
                <span>•</span>
                <a href="https://behance.net/pritam" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  behance.net/pritam
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}













