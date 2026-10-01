import React, { useState } from "react"
import { ProductId, productsConfig } from "@/config/products"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, CheckCircle2, Info, Compass, Layers, ShieldCheck, Award } from "lucide-react"

interface CompetencyMatrixViewProps {
  currentProduct?: ProductId
}

interface SkillCompetency {
  id: string
  name: string
  category: "Strategy" | "Research" | "Interaction" | "Visual" | "Execution"
  level: number // 1 to 5
  maxLevel: number
  description: string
  artifacts: string[]
  evidence: string
}

// 19 Competencies positioned clockwise matching user reference image:
// Starting around 11:30 -> 12:00 -> 1:00 -> 2:00 -> 3:00, then bottom-right quadrant cutout, then 6:00 -> 9:00 -> 11:00
interface PolarSkill {
  id: string
  name: string
  angleDeg: number // polar angle in SVG coordinate system (0 = right, 90 = top / 270 in SVG if flipped, we map standard math angle)
  level: number // 0 to 5 filled
  category: string
  description: string
  deliverables: string
}

const defaultReferenceSkills: PolarSkill[] = [
  // Top-left to Top-right (Quadrant 2 to Quadrant 1)
  {
    id: "ux-writing",
    name: "UX Writing",
    angleDeg: 98,
    level: 3,
    category: "Execution",
    description: "Product microcopy, voice-and-tone frameworks, error strings, and progressive disclosure messaging.",
    deliverables: "Copy Matrix, Empty State Copy, Error Grammar Specs",
  },
  {
    id: "ia",
    name: "Information Architecture",
    angleDeg: 88,
    level: 5,
    category: "Strategy",
    description: "Taxonomy structures, entity hierarchies, navigation models, and relational data schemas.",
    deliverables: "IA Tree, Ontology Models, URL Path Mapping",
  },
  {
    id: "user-flows",
    name: "User Flows",
    angleDeg: 75,
    level: 3,
    category: "Interaction",
    description: "Mermaid state charts, branch condition logic, happy paths, and exception decision trees.",
    deliverables: "Multi-branch Flowcharts, State Transition Diagrams",
  },
  {
    id: "communication",
    name: "Communication & Presenting",
    angleDeg: 62,
    level: 4,
    category: "Strategy",
    description: "Cross-functional executive alignment, design reviews, stakeholder presentations, and PRD articulation.",
    deliverables: "Design Review Decks, Executive UX Briefs",
  },
  {
    id: "wireframing",
    name: "Wireframing & Prototyping",
    angleDeg: 48,
    level: 4,
    category: "Execution",
    description: "Rapid low-fi wireframes to high-fidelity clickable interactive WebGL and React prototypes.",
    deliverables: "Interactive Figma Prototypes, Component Sandboxes",
  },
  {
    id: "branding",
    name: "Branding",
    angleDeg: 34,
    level: 3,
    category: "Visual",
    description: "Brand voice, visual identity guidelines, iconography typography harmony, and emotional design.",
    deliverables: "Brand Identity Guide, Semantic Color Palette",
  },
  {
    id: "ui-design",
    name: "User Interface Design",
    angleDeg: 18,
    level: 5,
    category: "Visual",
    description: "Design systems, OKLCH atomic tokens, 100% WCAG contrast, micro-interactions, and visual hierarchy.",
    deliverables: "Atomic Design System, Token Engine, Figma Components",
  },
  // Quadrant 4 (bottom-right: 0 to -90 deg) is the CUTOUT with "Filled Matrix Example"
  // Quadrant 3 & 2 (bottom to left):
  {
    id: "interaction-design",
    name: "Interaction Design",
    angleDeg: 270,
    level: 4,
    category: "Interaction",
    description: "Keyboard shortcuts, gesture physics, tactile feedback, sub-50ms transitions, and mental models.",
    deliverables: "Keyboard Navigation Spec, Animation Timings, State Matrix",
  },
  {
    id: "workshop-facilitation",
    name: "Workshop Facilitation",
    angleDeg: 254,
    level: 3,
    category: "Strategy",
    description: "Design sprints, cross-functional discovery workshops, Crazy Eights, and priority scoring sessions.",
    deliverables: "Miro Sprint Boards, Affinity Synthesis Boards",
  },
  {
    id: "design-thinking",
    name: "Design Thinking",
    angleDeg: 238,
    level: 4,
    category: "Strategy",
    description: "Double diamond methodology: Discover, Define, Develop, and Deliver with user-centered rigor.",
    deliverables: "Empathy Maps, Problem Framing Canvases, HMW Statements",
  },
  {
    id: "agile",
    name: "Agile",
    angleDeg: 222,
    level: 4,
    category: "Execution",
    description: "Sprint velocity management, continuous rolling cycles, issue backlog grooming, and developer pairs.",
    deliverables: "Kanban Cadence Specs, User Story Acceptance Criteria",
  },
  {
    id: "empathy",
    name: "Empathy",
    angleDeg: 206,
    level: 5,
    category: "Research",
    description: "Deep user perspective adoption, emotional valence tracking, accessibility ethics, and inclusive design.",
    deliverables: "Empathy Quadrant Maps, Inclusive Persona Models",
  },
  {
    id: "qualitative-research",
    name: "Qualitative Research",
    angleDeg: 190,
    level: 4,
    category: "Research",
    description: "1-on-1 contextual inquiry, generative interviews, cognitive walkthroughs, and thematic synthesis.",
    deliverables: "Interview Transcripts, Tagged Video Snippets, Affinity Clusters",
  },
  {
    id: "quantitative-research",
    name: "Quantitative Research",
    angleDeg: 174,
    level: 4,
    category: "Research",
    description: "SUS usability benchmarking, telemetry event funnels, task completion latency, and cohort analysis.",
    deliverables: "SUS Benchmark Dashboards, Event Tracking Architecture",
  },
  {
    id: "analysis",
    name: "Analysis",
    angleDeg: 158,
    level: 5,
    category: "Research",
    description: "Triangulating empirical usability signals, heuristic scorecards, drop-off curves, and behavioral analytics.",
    deliverables: "Heuristic Audit Reports, Funnel Friction Diagnoses",
  },
  {
    id: "ux-audits",
    name: "UX Audits",
    angleDeg: 142,
    level: 4,
    category: "Execution",
    description: "Nielsen-Norman 10 Usability Heuristics scoring, WCAG 2.2 AA accessibility validation, and friction logs.",
    deliverables: "Comprehensive UX Heuristic Audit, WCAG Compliance Sheet",
  },
  {
    id: "ux-leadership",
    name: "UX Leadership",
    angleDeg: 126,
    level: 4,
    category: "Strategy",
    description: "Design team mentorship, product strategy alignment, design ops governance, and ROI justification.",
    deliverables: "Design Ops Charter, UX Maturity Roadmap",
  },
  {
    id: "ux-strategy",
    name: "UX Strategy & Planning",
    angleDeg: 110,
    level: 4,
    category: "Strategy",
    description: "Long-range product roadmaps, north-star vision archetypes, MVP scoping matrices, and value proposition.",
    deliverables: "5-6 Month Design Roadmap, North Star Prototypes",
  },
]

// Product-specific customized skill levels showing authentic distribution for each product
const productSkillOverrides: Record<ProductId, Record<string, number>> = {
  linear: {
    "ia": 5,
    "user-flows": 5,
    "interaction-design": 5,
    "ui-design": 5,
    "agile": 5,
    "wireframing": 5,
    "analysis": 4,
    "ux-strategy": 5,
    "ux-writing": 4,
    "communication": 4,
    "branding": 4,
    "workshop-facilitation": 3,
    "design-thinking": 4,
    "empathy": 4,
    "qualitative-research": 4,
    "quantitative-research": 5,
    "ux-audits": 4,
    "ux-leadership": 4,
  },
  mixpanel: {
    "quantitative-research": 5,
    "analysis": 5,
    "ia": 5,
    "user-flows": 4,
    "ui-design": 4,
    "ux-audits": 5,
    "wireframing": 4,
    "interaction-design": 4,
    "communication": 4,
    "branding": 3,
    "ux-strategy": 4,
    "workshop-facilitation": 4,
    "design-thinking": 4,
    "agile": 4,
    "empathy": 4,
    "qualitative-research": 4,
    "ux-writing": 4,
    "ux-leadership": 4,
  },
  frame: {
    "ui-design": 5,
    "branding": 5,
    "wireframing": 5,
    "ia": 4,
    "interaction-design": 5,
    "ux-writing": 4,
    "user-flows": 4,
    "design-thinking": 4,
    "communication": 4,
    "analysis": 4,
    "workshop-facilitation": 3,
    "agile": 4,
    "empathy": 4,
    "qualitative-research": 3,
    "quantitative-research": 4,
    "ux-audits": 4,
    "ux-leadership": 3,
    "ux-strategy": 4,
  },
  miro: {
    "interaction-design": 5,
    "workshop-facilitation": 5,
    "design-thinking": 5,
    "ui-design": 4,
    "wireframing": 5,
    "empathy": 5,
    "qualitative-research": 4,
    "ia": 4,
    "user-flows": 4,
    "communication": 4,
    "branding": 4,
    "analysis": 4,
    "agile": 4,
    "quantitative-research": 4,
    "ux-audits": 4,
    "ux-leadership": 4,
    "ux-strategy": 4,
    "ux-writing": 3,
  },
  minimal: {
    "ui-design": 5,
    "ia": 5,
    "wireframing": 4,
    "ux-audits": 5,
    "branding": 4,
    "interaction-design": 4,
    "analysis": 4,
    "user-flows": 4,
    "communication": 3,
    "workshop-facilitation": 3,
    "design-thinking": 4,
    "agile": 4,
    "empathy": 4,
    "qualitative-research": 4,
    "quantitative-research": 4,
    "ux-leadership": 4,
    "ux-strategy": 4,
    "ux-writing": 3,
  },
}

const productSkillDetails: Record<ProductId, Record<string, { description?: string; deliverables?: string }>> = {
  linear: {
    ia: {
      description: "Sub-50ms Keyboard-First IA, 14-screen workflow hierarchy, single-key action bindings ('C', 'S', 'P', 'A'), and bidirectional Git branch state synchronization.",
      deliverables: "Keyboard Navigation IA Tree, Shortcut Matrix, State Machine Schema",
    },
    "interaction-design": {
      description: "Sub-16ms optimistic UI micro-feedback, tactile toast notifications, instant board drag-and-drop, and home-row triage sweeps.",
      deliverables: "Optimistic State Spec, Keyboard Event Handlers, Motion Timing Curves",
    },
    "ui-design": {
      description: "Obsidian dark mode palette, sub-pixel border radiuses (6px/8px), monospace ticket metadata badges, and 100% WCAG AA contrast.",
      deliverables: "Obsidian Token Architecture, Master Figma Screen Inventory, SVG Icon Kit",
    },
    "ux-strategy": {
      description: "The Linear Method: Replacing sprint theater and story pointing with continuous rolling 2-week cadences and automated Git PR closures.",
      deliverables: "Linear Method Playbook, Rolling Cycle Spec, Zero-Ceremony Handoff",
    },
    "ux-audits": {
      description: "Empirical usability benchmarking against legacy Jira workflows, proving 86.8% reduction in issue creation latency (2.4s vs 18.2s).",
      deliverables: "Comparative Latency Benchmark, SUS Evaluation Deck (Grade A+ 91.4)",
    },
    wireframing: {
      description: "High-density developer tool layouts, split-pane command palettes, and keyboard-focused issue inspector dialogs.",
      deliverables: "Desktop Command Center Wireframes, Split Inspector Specs",
    },
    "quantitative-research": {
      description: "Rigorous unassisted developer testing across 140 engineers, validating 96% task success and sub-2.4s creation time.",
      deliverables: "Developer Workflow Benchmark (n=140), Quantitative Telemetry Dashboard",
    },
  },
  mixpanel: {
    "quantitative-research": {
      description: "Multi-million event cohort telemetry, 5-step conversion drop-off funnels, and retention cohort heatmaps without SQL dependencies.",
      deliverables: "Quantitative Telemetry Model, Funnel Segmentation Report, Statistical Significance Matrix",
    },
    analysis: {
      description: "Root-cause anomaly detection, behavioral user path exploration, and Spark AI automated explanatory digests.",
      deliverables: "Behavioral Path Graph, Event Anomaly Framework, Spark AI Prompt Architecture",
    },
    ia: {
      description: "Event Lexicon Governance: Unifying fragmented event taxonomies, property naming standards, and multi-tenant data dictionary rules.",
      deliverables: "Lexicon Event Schema, Property Dictionary, Data Governance Protocol",
    },
    "ui-design": {
      description: "Visual query builder with modular step blocks, chromatic cohort spectrums, and dark/light analytical dashboard boards.",
      deliverables: "Query Builder Token Language, Interactive Funnel Visualizer, Board Widget Specs",
    },
    "ux-strategy": {
      description: "Transforming raw data engineering into democratized self-serve product intelligence for modern growth teams.",
      deliverables: "Self-Serve Adoption Framework, Product Intelligence Architecture, A/B Testing Workflow",
    },
    "ux-audits": {
      description: "Audit of enterprise SQL dependencies, reducing time-to-insight from 30 seconds to 4.2 seconds across 55 participants.",
      deliverables: "Ad-hoc SQL Friction Audit, Usability Study Report (SUS 88.5)",
    },
  },
  frame: {
    ia: {
      description: "Connected Workspace IA: Unifying docs, tasks, and infinite whiteboards into a single tab with bi-directional backlinks.",
      deliverables: "Unified Entity Schema, Backlink Graph Topology, CMD+K Route Map",
    },
    "interaction-design": {
      description: "Sub-50ms CMD+K Omni-Search, inline '@' task generation from rich text docs, and multiplayer audio huddle presence.",
      deliverables: "Omni-Search Protocol, Inline Action Triggers, Multiplayer Spatial Interaction",
    },
    branding: {
      description: "Playful, clean, modern workspace visual identity with high-contrast monochrome base and vibrant accent indicators.",
      deliverables: "Connected OS Brand Guidelines, Iconography System, Marketing Landing Asset Suite",
    },
    "ui-design": {
      description: "Modular connected canvas panes, flexible split-screen viewports, and unified typography for long-form reading and rapid triage.",
      deliverables: "Pane Layout Engine, Typography Rhythm Matrix, Universal Component Library",
    },
    "ux-writing": {
      description: "Contextual empty states, keyboard command hints, inline markdown slash-menu syntax, and unified notification microcopy.",
      deliverables: "Workspace Microcopy Matrix, Command Menu Strings, Empty State Catalog",
    },
  },
  miro: {
    "interaction-design": {
      description: "Hardware-accelerated WebGL infinite canvas pan/zoom at 60fps, smooth vector scaling, and real-time multiplayer cursor telemetry.",
      deliverables: "WebGL Interaction Spec, Multiplayer Cursor Telemetry, Spatial Gesture Engine",
    },
    "workshop-facilitation": {
      description: "Collaborative sprint tools: 5-minute dot-voting timer, participant attention beacon ('Bring to Me'), and sticky note clustering.",
      deliverables: "Sprint Facilitation Toolkit, Dot-Voting Logic Model, Participant Control Spec",
    },
    wireframing: {
      description: "Rapid low-fi collaborative wireframing library with magnetic smart connectors and multi-participant live drafting.",
      deliverables: "Miro Component Stencils, Connector Routing Logic, Agile Retro Canvas",
    },
    "ui-design": {
      description: "High-visibility canvas chrome, spatial minimap radar, floating tool palettes, and ergonomic toolbar clustering.",
      deliverables: "Floating Palette Design Spec, Canvas Coordinate Engine, Vector Frame Library",
    },
    "design-thinking": {
      description: "Agile retrospective frameworks, double-diamond divergence/convergence templates, and user journey mapping stencils.",
      deliverables: "Retrospective Template Suite, Empathy Canvas Pack, Remote Workshop Playbook",
    },
  },
  minimal: {
    "ui-design": {
      description: "Production design system with OKLCH semantic tokens, 6 complete business dashboard paradigms, and 50+ screens.",
      deliverables: "Atomic Design Token Engine, 50+ Screen Master Kit, Dual Theme Elevation Tokens",
    },
    ia: {
      description: "Dual-rail navigation architecture (vertical left rail vs ultrawide horizontal bar) across 6 distinct SaaS enterprise domains.",
      deliverables: "Dual Navigation Hierarchy, Domain Model Architecture, Multi-Tenant Routing Tree",
    },
    "ux-audits": {
      description: "Comprehensive WCAG 2.2 AA accessibility audit, 48px touch bounding box enforcement, and color-contrast verification.",
      deliverables: "Accessibility Compliance Audit, Touch Ergonomics Matrix, Semantic Contrast Table",
    },
    "interaction-design": {
      description: "Tactile physical-resistance wire confirmation slider, room reservation carousels, and optimistic UI state transitions.",
      deliverables: "Tactile Slider Component Contract, Carousels Gesture Spec, Micro-Interaction Specs",
    },
    branding: {
      description: "Vivid organic emerald primary token (#00AB55) balancing enterprise trust with fresh consumer-grade vibrancy.",
      deliverables: "Design System Guidelines, Multi-Tone Palette Token Sheet, Typography Scale",
    },
  },
}

const productProductionContext: Record<ProductId, string> = {
  linear: "Applied rigorously across Linear's 3-month high-velocity sprint in 2020 to establish a new gold standard in developer ergonomics.",
  mixpanel: "Engineered across Mixpanel's 4-month architecture initiative in 2021 to redefine self-serve product intelligence for the AI era.",
  frame: "Developed across Frame's 2-month rapid build cycle in 2021, launching to #1 Product of the Day on Product Hunt.",
  miro: "Refined across Miro's 1.5-month visual collaboration overhaul in late 2020 to power remote enterprise war rooms.",
  minimal: "Architected across Pritam's comprehensive 1-year master systems build (2020–2021) as the foundational backbone for enterprise SaaS.",
}

export function CompetencyMatrixView({ currentProduct = "linear" }: CompetencyMatrixViewProps) {
  const productConfig = productsConfig[currentProduct] || productsConfig.linear
  const [activeSkillId, setActiveSkillId] = useState<string>("ia")
  const [viewMode, setViewMode] = useState<"product" | "reference">("product")

  // Generate competencies list based on active mode with bespoke product text
  const skills: PolarSkill[] = defaultReferenceSkills.map((s) => {
    if (viewMode === "product") {
      const levelOverride = productSkillOverrides[currentProduct]?.[s.id]
      const detailOverride = productSkillDetails[currentProduct]?.[s.id]
      return {
        ...s,
        level: levelOverride !== undefined ? levelOverride : s.level,
        description: detailOverride?.description || s.description,
        deliverables: detailOverride?.deliverables || s.deliverables,
      }
    }
    return s
  })

  const selectedSkill = skills.find((s) => s.id === activeSkillId) || skills[0]

  // SVG Geometry Settings matching the user reference image
  const size = 900
  const center = size / 2
  const innerHubRadius = 50
  const ringStep = 36
  const totalRings = 5 // Levels 1 through 5
  const maxRadius = innerHubRadius + totalRings * ringStep // 50 + 180 = 230px

  // Sector angular width: each skill slice gets roughly 13 degrees
  const sliceWidthDeg = 13.5

  // Helper function to calculate arc paths in polar coordinates
  const polarToCartesian = (cx: number, cy: number, r: number, angleDeg: number) => {
    // In SVG, 0 deg is positive X (right), positive angles go clockwise if y increases down
    // Standard math angle: 0 is right, 90 is top (cy - r * sin)
    const rad = (angleDeg * Math.PI) / 180
    return {
      x: cx + r * Math.cos(rad),
      y: cy - r * Math.sin(rad),
    }
  }

  // Generate SVG path for a polar segment
  const getSegmentPath = (rInner: number, rOuter: number, startAngle: number, endAngle: number) => {
    const p1 = polarToCartesian(center, center, rInner, startAngle)
    const p2 = polarToCartesian(center, center, rOuter, startAngle)
    const p3 = polarToCartesian(center, center, rOuter, endAngle)
    const p4 = polarToCartesian(center, center, rInner, endAngle)

    const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0
    // sweep flag: standard math is counter-clockwise (sweep = 0 in SVG where Y is inverted)
    const sweep = 0

    return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} A ${rOuter} ${rOuter} 0 ${largeArc} ${sweep} ${p3.x} ${p3.y} L ${p4.x} ${p4.y} A ${rInner} ${rInner} 0 ${largeArc} ${1 - sweep} ${p1.x} ${p1.y} Z`
  }

  // Color generator matching user reference image:
  // Level 1-2: Warm Peach / Amber (#FED7AA, #FDBA74)
  // Level 3-4: Soft Pink / Rose (#FECDD3, #FDA4AF)
  // Level 5: Soft Sky Blue (#BAE6FD, #7DD3FC)
  const getLevelColor = (levelIndex: number) => {
    if (levelIndex === 1 || levelIndex === 2) return "#FED7AA" // Warm peach
    if (levelIndex === 3 || levelIndex === 4) return "#FECDD3" // Soft coral pink
    return "#BAE6FD" // Sky blue
  }

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* 1. Master Balanced Header Card */}
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title & Methodology */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-500">
              <Compass className="size-3.5" />
              <span>UX Competencies & Skills Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground uppercase">
              UX Skills & Competency Matrix
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Radial polar competency matrix mapping the 18 core disciplines of user experience across 5 progressive mastery tiers: Novice (L1), Advanced Beginner (L2), Competent (L3), Proficient (L4), and Expert / Lead (L5). Demonstrates empirical team capability allocation across discovery, systems, and product delivery.
            </p>
          </div>

          {/* Right Column: Telemetry Summary & Mode Switcher */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-3 rounded-2xl border border-border bg-muted/20 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                  Disciplines
                </span>
                <span className="text-lg font-black text-foreground">18 Skills</span>
              </div>
              <div className="p-3 rounded-2xl border border-border bg-muted/20 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                  Mastery Tiers
                </span>
                <span className="text-lg font-black text-primary">5 Levels</span>
              </div>
              <div className="p-3 rounded-2xl border border-border bg-muted/20 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                  Lead Tiers
                </span>
                <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                  {skills.filter((s) => s.level >= 4).length} Mastery
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 rounded-2xl border border-border bg-muted/30">
              <span className="text-xs font-bold text-muted-foreground pl-2">
                Active View
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setViewMode("product")}
                  className={`px-3 py-1.5 rounded-xl text-xs transition-all cursor-pointer ${
                    viewMode === "product"
                      ? "bg-card text-foreground font-black shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {productConfig.name}
                </button>
                <button
                  onClick={() => setViewMode("reference")}
                  className={`px-3 py-1.5 rounded-xl text-xs transition-all cursor-pointer ${
                    viewMode === "reference"
                      ? "bg-card text-foreground font-black shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Reference Matrix
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Radial Matrix Canvas */}
      <div className="rounded-3xl border border-border bg-card p-4 sm:p-8 shadow-lg flex flex-col lg:flex-row items-center gap-8 justify-center">
        {/* SVG Radial Wheel */}
        <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center select-none overflow-visible">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="w-full h-full drop-shadow-sm overflow-visible"
          >
            {/* Background Concentric Rings (Levels 1 to 5) */}
            {/* Note: In image, quadrant 4 (bottom-right: from 270 deg to 360/0 deg) is cut open! */}
            {[1, 2, 3, 4, 5].map((lvl) => {
              const r = innerHubRadius + lvl * ringStep
              const isSolid = lvl === 3 || lvl === 5
              // Draw arc from 270 deg counter-clockwise to 0 deg (or math 270 to 360/0)
              // In our system, skills are placed from 0 deg CCW to 270 deg!
              const pStart = polarToCartesian(center, center, r, 0)
              const pEnd = polarToCartesian(center, center, r, 270)
              // Large arc flag = 1 since angle is 270 degrees
              return (
                <path
                  key={`ring-${lvl}`}
                  d={`M ${pStart.x} ${pStart.y} A ${r} ${r} 0 1 0 ${pEnd.x} ${pEnd.y}`}
                  fill="none"
                  stroke="currentColor"
                  className="text-border/70"
                  strokeWidth="1.2"
                  strokeDasharray={isSolid ? "none" : "3,3"}
                />
              )
            })}

            {/* Radial Line Dividers at boundary 0 deg and 270 deg */}
            <line
              x1={center}
              y1={center}
              x2={center + maxRadius + 30}
              y2={center}
              stroke="currentColor"
              className="text-border/90"
              strokeWidth="1.2"
            />
            <line
              x1={center}
              y1={center}
              x2={center}
              y2={center + maxRadius + 30}
              stroke="currentColor"
              className="text-border/90"
              strokeWidth="1.2"
            />

            {/* Center Dark Charcoal Hub */}
            <circle
              cx={center}
              cy={center}
              r={innerHubRadius}
              className="fill-zinc-800 dark:fill-zinc-900 stroke-border"
              strokeWidth="2"
            />

            {/* Bottom-Right Quadrant Text Banner: "Filled Matrix Example" (matching user image) */}
            <g transform={`translate(${center + 45}, ${center + 85})`}>
              <text
                x="0"
                y="0"
                className="fill-muted-foreground/35 font-black text-4xl sm:text-5xl tracking-tight select-none"
                style={{ fontFamily: "inherit" }}
              >
                Filled
              </text>
              <text
                x="0"
                y="48"
                className="fill-muted-foreground/35 font-black text-4xl sm:text-5xl tracking-tight select-none"
                style={{ fontFamily: "inherit" }}
              >
                Matrix
              </text>
              <text
                x="0"
                y="96"
                className="fill-muted-foreground/35 font-black text-4xl sm:text-5xl tracking-tight select-none"
                style={{ fontFamily: "inherit" }}
              >
                Example
              </text>
            </g>

            {/* Render 18 Radial Competency Slices with Filled Levels */}
            {skills.map((skill) => {
              const startAngle = skill.angleDeg + sliceWidthDeg / 2
              const endAngle = skill.angleDeg - sliceWidthDeg / 2
              const isSelected = activeSkillId === skill.id

              // Label Position: Radial vector extended past outer radius
              const labelRadius = maxRadius + 45
              const labelPos = polarToCartesian(center, center, labelRadius, skill.angleDeg)

              // Text alignment based on polar quadrant
              let textAnchor: "start" | "end" | "middle" = "middle"
              if (skill.angleDeg > 15 && skill.angleDeg < 80) textAnchor = "start"
              else if (skill.angleDeg > 100 && skill.angleDeg < 260) textAnchor = "end"
              else if (skill.angleDeg >= 80 && skill.angleDeg <= 100) textAnchor = "middle"

              return (
                <g
                  key={skill.id}
                  className="cursor-pointer group"
                  onClick={() => setActiveSkillId(skill.id)}
                >
                  {/* Radial Divider Rays */}
                  {(() => {
                    const rayInner = polarToCartesian(center, center, innerHubRadius, startAngle)
                    const rayOuter = polarToCartesian(center, center, maxRadius, startAngle)
                    return (
                      <line
                        x1={rayInner.x}
                        y1={rayInner.y}
                        x2={rayOuter.x}
                        y2={rayOuter.y}
                        stroke="currentColor"
                        className="text-border/50"
                        strokeWidth="0.8"
                      />
                    )
                  })()}

                  {/* Level Segments 1 through 5 */}
                  {[1, 2, 3, 4, 5].map((lvl) => {
                    const rInner = innerHubRadius + (lvl - 1) * ringStep
                    const rOuter = innerHubRadius + lvl * ringStep
                    const isFilled = lvl <= skill.level
                    const pathD = getSegmentPath(rInner, rOuter, startAngle, endAngle)
                    const fillColor = isFilled ? getLevelColor(lvl) : "transparent"

                    return (
                      <path
                        key={`cell-${skill.id}-${lvl}`}
                        d={pathD}
                        fill={fillColor}
                        className={`transition-all duration-200 ${
                          isSelected
                            ? "stroke-foreground stroke-[1.5] filter brightness-105"
                            : "stroke-border/40 hover:stroke-foreground/60 stroke-[0.8]"
                        }`}
                      />
                    )
                  })}

                  {/* Outer Label text */}
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor={textAnchor}
                    dominantBaseline="central"
                    className={`text-[11px] font-bold tracking-tight transition-colors select-none ${
                      isSelected
                        ? "fill-foreground font-black text-[12px] underline"
                        : "fill-foreground/80 hover:fill-foreground"
                    }`}
                  >
                    {skill.name}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Interactive Detail Inspector Panel */}
        <div className="w-full lg:w-[380px] shrink-0 space-y-5">
          <div className="rounded-2xl border border-border bg-muted/20 p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-500">
                ACTIVE COMPETENCY
              </span>
              <Badge
                variant="outline"
                className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: getLevelColor(selectedSkill.level),
                  color: "#18181B",
                  borderColor: "transparent",
                }}
              >
                Level {selectedSkill.level} / 5
              </Badge>
            </div>

            <div>
              <h3 className="text-xl font-black text-foreground">
                {selectedSkill.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            {/* Level Tier Gauge */}
            <div className="space-y-1.5 pt-2 border-t border-border">
              <div className="flex justify-between text-xs font-bold text-foreground">
                <span>Proficiency Tier</span>
                <span className="text-sky-600 dark:text-sky-400 font-mono">
                  {selectedSkill.level === 5
                    ? "Expert / Lead"
                    : selectedSkill.level === 4
                    ? "Proficient"
                    : selectedSkill.level === 3
                    ? "Competent"
                    : selectedSkill.level === 2
                    ? "Advanced Beginner"
                    : "Foundational"}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1.5 h-2">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <div
                    key={lvl}
                    className="h-full rounded-full transition-all"
                    style={{
                      backgroundColor:
                        lvl <= selectedSkill.level
                          ? getLevelColor(lvl)
                          : "var(--border)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Core Deliverables */}
            <div className="space-y-1.5 pt-2 border-t border-border">
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                Primary Deliverables
              </span>
              <p className="text-xs font-semibold text-foreground/90">
                {selectedSkill.deliverables}
              </p>
            </div>

            {/* Project Context */}
            <div className="p-3 rounded-xl bg-card border border-border text-xs space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                {productConfig.name} Production Context
              </span>
              <p className="text-muted-foreground leading-relaxed">
                {productProductionContext[currentProduct] || `Applied rigorously across ${productConfig.name}'s product architecture to validate user mental models and eliminate operational friction.`}
              </p>
            </div>
          </div>

          {/* Color Legend Matching the Reference Image */}
          <div className="p-4 rounded-2xl border border-border bg-card space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
              Matrix Color Hierarchy
            </span>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-md bg-[#FED7AA] border border-border/50 shrink-0" />
                <span className="text-muted-foreground text-[11px]">Level 1–2 (Peach)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-md bg-[#FECDD3] border border-border/50 shrink-0" />
                <span className="text-muted-foreground text-[11px]">Level 3–4 (Rose)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-md bg-[#BAE6FD] border border-border/50 shrink-0" />
                <span className="text-muted-foreground text-[11px]">Level 5 (Sky Blue)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Comprehensive Competency Grid Table */}
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
          <div>
            <h2 className="text-lg font-black text-foreground uppercase tracking-tight">
              18 UX Competencies Directory & Scoring Rubric
            </h2>
            <p className="text-xs text-muted-foreground">
              Complete inventory of evaluated disciplines, deliverables, and demonstrated proficiency levels.
            </p>
          </div>
          <Badge variant="outline" className="text-xs font-mono">
            {skills.filter((s) => s.level >= 4).length} Mastery Competencies
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted/50 text-muted-foreground font-semibold uppercase tracking-wider border-b border-border">
              <tr>
                <th className="p-3">Competency</th>
                <th className="p-3">Discipline</th>
                <th className="p-3 text-center">Level</th>
                <th className="p-3">Tier Status</th>
                <th className="p-3">Primary Deliverable Evidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {skills.map((s) => (
                <tr
                  key={s.id}
                  onClick={() => setActiveSkillId(s.id)}
                  className={`hover:bg-muted/30 cursor-pointer transition-colors ${
                    activeSkillId === s.id ? "bg-muted/50 font-bold" : ""
                  }`}
                >
                  <td className="p-3 font-bold text-foreground flex items-center gap-2">
                    <div
                      className="size-2 rounded-full"
                      style={{ backgroundColor: getLevelColor(s.level) }}
                    />
                    {s.name}
                  </td>
                  <td className="p-3 text-muted-foreground">{s.category}</td>
                  <td className="p-3 text-center font-mono font-bold">{s.level} / 5</td>
                  <td className="p-3">
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                      style={{
                        backgroundColor: `${getLevelColor(s.level)}40`,
                        color: s.level === 5 ? "#0284C7" : s.level >= 3 ? "#E11D48" : "#D97706",
                      }}
                    >
                      {s.level === 5 ? "Expert / Lead" : s.level === 4 ? "Proficient" : s.level === 3 ? "Competent" : "Beginner"}
                    </span>
                  </td>
                  <td className="p-3 text-muted-foreground font-mono">{s.deliverables}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
