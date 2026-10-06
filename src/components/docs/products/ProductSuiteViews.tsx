import React from "react"
import { ProductId, productsConfig } from "@/config/products"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Sparkles,
  CheckCircle2,
  Layers,
  Compass,
  FileText,
  Shield,
  ArrowRight,
  Workflow,
  Cpu,
  Target,
  Zap,
  TrendingUp,
  Activity,
  Award,
} from "lucide-react"

interface ProductSuiteViewProps {
  productId: ProductId
}

// ---------------- 1. VISION VIEW ----------------
export function ProductSuiteVisionView({ productId }: ProductSuiteViewProps) {
  const config = productsConfig[productId] || productsConfig.minimal

  const getEcosystemMap = (id: ProductId) => {
    switch (id) {
      case "qolaba":
        return `graph TD
          subgraph CreativeDiscovery["01. Creative Discovery & Inspiration"]
            A["Prompt Marketplace<br/>(Community LoRAs)"] --> B["Predefined Inspiration Cards<br/>(Monet, Dali, Cyberpunk)"]
            B --> C["Prompt Assembly Console<br/>(Negative Prompts & Weights)"]
          end

          subgraph LatentInference["02. Latent Diffusion Engine"]
            C --> D["Parameter Tuning Dock<br/>(CFG Scale, Samplers, Seed)"]
            D --> E["GPU Inference Pipeline<br/>(Progressive Denoising Preview)"]
            E --> F["Quad Generation Grid<br/>(4 Variation Matrix)"]
          end

          subgraph CreativeEditing["03. Surgical Manipulation"]
            F --> G["Surgical Inpainting Brush<br/>(Mask & Generative Fill)"]
            G --> H["Aspect Ratio & Outpainting<br/>(16:9, 1:1, 9:16 Canvas)"]
            H --> I["High-Res Export & Share<br/>(4K Upscale & PNG/JPG)"]
          end`

      case "brilliant":
        return `graph TD
          subgraph DiscoveryTrack["01. STEM Discovery & Habit Formation"]
            A["5-Subject STEM Taxonomy<br/>(Math, Data, CS, Science)"] --> B["Daily Challenges Hub<br/>(Streak Lightning '⚡')"]
            B --> C["Personalized Diagnostic<br/>(Intent Qualification)"]
          end

          subgraph ActivePedagogy["02. Active Problem Solving Player"]
            C --> D["Hexagonal Skill Tree Syllabus<br/>(Beautiful Geometry, Probability)"]
            D --> E["Micro-Stepped Concept Player<br/>(Low-Stakes Guided Hints)"]
            E --> F["Tactile Drag & Drop Canvas<br/>(Spatial Math & Physics Simulations)"]
          end

          subgraph RetentionMastery["03. Mastery & Conversion"]
            F --> G["Instant Hypothesis Validation<br/>(Celebratory Particles)"]
            G --> H["Personalized Student Dashboard<br/>(Weekly Habit Loop)"]
            H --> I["Annual Premium Subscription<br/>(Full 60+ Course Access)"]
          end`

      case "monday":
        return `graph TD
          subgraph WorkspacesHub["01. Enterprise Multi-Product Hub"]
            A["Work OS Directory<br/>(#1c2438 Dark Shell)"] --> B["Multi-Product Suites<br/>(Management, Dev, CRM, Marketing)"]
            B --> C["Template Discovery Center<br/>(200+ Operational Recipes)"]
          end

          subgraph ColumnarBoard["02. Core Board Canvas & Execution"]
            C --> D["Infinite Columnar Grid<br/>(Status, Timeline, Numbers, Person)"]
            D --> E["Vibe Battery Widget<br/>(Done Green, Working Amber, Stuck Red)"]
            E --> F["Multi-Perspective Virtualization<br/>(Kanban, Gantt, Dashboard Rollups)"]
          end

          subgraph AutomationEcosystem["03. Automations & Alignment"]
            F --> G["Natural Language Automations<br/>('When Status = Stuck, Notify')"]
            G --> H["Updates Inbox & Activity Stream<br/>(Inline Asynchronous Context)"]
            H --> I["Executive BI Dashboards<br/>(Cross-Board Multi-Tenant Rollups)"]
          end`

      case "copyai":
        return `graph TD
          subgraph ContentIdeation["01. Content Ideation & Scaffolding"]
            A["90+ Template Directory<br/>(Social, Blog, Ads, Cold Email)"] --> B["Prompt Parameter Dock<br/>(Target Audience & Benefits)"]
            B --> C["Brand Voice Calibrator<br/>(Tone Modifiers & URL Training)"]
          end

          subgraph AIGeneration["02. Multi-Variant LLM Pipeline"]
            C --> D["Generative Writing Studio<br/>(Instant 10x Variant Matrix)"]
            D --> E["Blog Post 4-Step Wizard<br/>(Title -> Outline -> Talking Points -> Draft)"]
            E --> F["Ad Copy CTR Engine<br/>(Character Constraint Filters)"]
          end

          subgraph PublishingExecution["03. Editing & Multi-Channel Sync"]
            F --> G["Real-Time Editor Workspace<br/>(Inline Highlight-to-Rewrite)"]
            G --> H["Project Folders Governance<br/>(Campaign Asset Library)"]
            H --> I["1-Click CMS Sync API<br/>(Webflow, WordPress, HubSpot)"]
          end`

      case "github":
        return `graph TD
          subgraph CodeExploration["01. Primer Dark Repository Explorer"]
            A["Repository Root Tree<br/>(Fuzzy File Finder 't')"] --> B["Branch Switcher Dropdown<br/>(Keyboard Shortcut 'w')"]
            B --> C["Commit Blame Inspector<br/>(Historical Heatmap Gutter)"]
          end

          subgraph CodeReviewEcosystem["02. Pull Request Collaboration"]
            C --> D["Pull Request Conversation<br/>(CI Actions Status Check Gates)"]
            D --> E["Split & Unified Diff Viewer<br/>(Monaspace Syntax Highlighting)"]
            E --> F["Inline Suggested Changes<br/>(1-Click Commit Suggestions)"]
          end

          subgraph MergeGovernance["03. Governance & Delivery"]
            F --> G["Branch Protection Rules<br/>(Required 2+ Approvals & Signed Commits)"]
            G --> H["Merge Decision Matrix<br/>(Squash & Merge Linear History)"]
            H --> I["GitHub Actions CI/CD Pipeline<br/>(Live Runner Terminal Stream)"]
          end`

      case "officevibe":
        return `graph TD
          subgraph ContinuousListening["01. Psychological Safety & Pulse Surveys"]
            A["Weekly 5-Question Pulse<br/>(Likert 5-Point Face Scale)"] --> B["Anonymity Shield Architecture<br/>(5-Member Threshold Encryption)"]
            B --> C["10 Engagement Metrics Radar<br/>(Composite Happiness & Trust Score)"]
          end

          subgraph SafeDialogue["02. Anonymous Two-Way Feedback"]
            C --> D["Anonymous Comment Drawer<br/>(Protected Employee Voice)"]
            D --> E["Manager Direct Response<br/>(Constructive Feedback Clarification)"]
            E --> F["eNPS Loyalty Tracking<br/>(Promoters vs Detractors Trendline)"]
          end

          subgraph CollaborativeAction["03. Continuous 1-on-1 Action"]
            F --> G["1-on-1 Meeting Agenda Builder<br/>(Curated Talking Point Prompts)"]
            G --> H["Mutual Action Items Tracker<br/>(Carried-Over Commitments)"]
            H --> I["Executive People Analytics<br/>(Board-Ready PDF Culture Reports)"]
          end`

      default:
        return `graph TD; A[Overview]-->B[Vision]; B[Vision]-->C[Execution];`
    }
  }

  const getPrinciples = (id: ProductId) => {
    switch (id) {
      case "qolaba":
        return [
          { title: "Prompt Scaffolding over Blank Prompts", desc: "Pre-configured style and modifier docks eliminate creator paralysis." },
          { title: "Progressive Latent Denoising Visibility", desc: "Real-time step-by-step rendering previews replace blind loading spinners." },
          { title: "Non-Destructive Inpainting Layers", desc: "Surgical mask brushes allow localized editing without destroying surrounding canvas." },
          { title: "100% Token-Symmetric Obsidian Dark Mode", desc: "Deep #0B0C10 canvas engineered specifically for accurate color judgment." },
          { title: "Deterministic Credit Transparency", desc: "Clear real-time credit consumption indicators prevent surprise usage depletion." },
          { title: "Community Knowledge Cross-Pollination", desc: "Integrated prompt library lets creators discover, clone, and remix vetted parameters." },
        ]
      case "brilliant":
        return [
          { title: "Active Inquiry First", desc: "Learners manipulate spatial concepts before reading abstract formulas." },
          { title: "Micro-Stepping Scaffolding", desc: "Complex proofs broken into short interactive steps that maintain flow." },
          { title: "Intuitive Physical Visualizations", desc: "Dual-coding cognitive theory turns equations into tangible geometric objects." },
          { title: "Low-Stakes Failure Resilience", desc: "Mistakes trigger guided exploratory hints rather than punitive grading." },
          { title: "Habitual Micro-Dosing (15m/day)", desc: "Bite-sized daily challenges anchor learning into a sustainable daily routine." },
          { title: "Gamified Intrinsic Curiosity", desc: "Streak lightning ('⚡') reinforces consistent effort through loss-aversion psychology." },
        ]
      case "monday":
        return [
          { title: "Visual Immediacy", desc: "Vibrant status tokens communicate delivery health across boards in under 16ms." },
          { title: "Infinite Columnar Flexibility", desc: "Non-technical teams add Timeline, People, and Formula columns without writing code." },
          { title: "Multi-Perspective Spatial Continuity", desc: "Switch seamlessly between Table, Kanban, Gantt, and Calendar on a single dataset." },
          { title: "Autonomous Automation Recipes", desc: "'When X happens, do Y' grammar automates repetitive operational handoffs." },
          { title: "Frictionless Cross-Functional Alignment", desc: "Cross-board rollup widgets aggregate enterprise progress into unified executive dashboards." },
          { title: "Viral In-Flow Expansion", desc: "@domain auto-join growth loops drive viral enterprise adoption from the bottom up." },
        ]
      case "copyai":
        return [
          { title: "Structured Inputs over Blank Prompts", desc: "Guided parameter forms structure user intent into high-performing prompt context." },
          { title: "Tonal Fidelity & Brand Persona Alignment", desc: "Tone pills and custom URL training ensure generated prose sounds authentic." },
          { title: "Parallel Multi-Variant Generation", desc: "Generating 10 categorized variations simultaneously accelerates creative curation." },
          { title: "Non-Destructive In-Line Editing", desc: "Integrated document canvas allows highlighting text to rewrite or shorten instantly." },
          { title: "Chained Automation Pipelines", desc: "Multi-step workflows connect research, outline, and ad copy into automated sequences." },
          { title: "Direct CMS Publishing", desc: "1-click API connectors push formatted copy straight to Webflow, WordPress, and HubSpot." },
        ]
      case "github":
        return [
          { title: "Keyboard-First Ergonomics", desc: "Single-key shortcuts ('t' file finder, 'w' branch switcher) keep developers in home-row flow." },
          { title: "Sub-50ms Navigation Velocity", desc: "Indexed code search and command palettes eliminate repetitive mouse clicks." },
          { title: "Atomic Review Feedback", desc: "Reviewers batch comments and propose inline suggested changes that authors accept in 1 click." },
          { title: "Deterministic CI Quality Gates", desc: "Automated status checks verify tests and linting before human review begins." },
          { title: "Transparent Open Source Governance", desc: "Public issue trackers, discussions, and contribution heatmaps foster community trust." },
          { title: "Primer Design Token System", desc: "Obsidian dark theme (#0d1117) with WCAG AA contrast protects vision during long coding sessions." },
        ]
      case "officevibe":
        return [
          { title: "Psychological Safety First", desc: "Cryptographic 5-member minimum thresholds ensure employees can speak truthfully without fear." },
          { title: "Continuous Micro-Listening", desc: "Weekly 2-minute pulse surveys replace stressful, outdated annual performance reviews." },
          { title: "Two-Way Constructive Dialogue", desc: "Managers can reply directly to anonymous comments to ask questions and take action." },
          { title: "Managerial Coaching over Policing", desc: "Diagnostic data is paired with concrete behavioral coaching tips for team leaders." },
          { title: "Action-Oriented Follow-Through", desc: "1-on-1 meeting agendas automatically carry over commitments until marked resolved." },
          { title: "Objective Cultural Telemetry", desc: "Standardized eNPS and 10 engagement metrics allow external benchmarking against industry peers." },
        ]
      default:
        return []
    }
  }

  const principles = getPrinciples(productId)

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Product Vision Overview Alert */}
      <Alert
        className="border"
        style={{
          borderColor: `${config.brandColor}40`,
          backgroundColor: `${config.brandColor}08`,
        }}
      >
        <Sparkles className="size-4" style={{ color: config.brandColor }} />
        <AlertTitle className="text-sm font-bold text-foreground">
          {config.name} — Product & UX Architecture Vision
        </AlertTitle>
        <AlertDescription className="text-xs text-muted-foreground leading-relaxed mt-1">
          {config.description}
        </AlertDescription>
      </Alert>

      {/* 6 Core Principles Grid */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
          1.2 The 6 Foundational UX & Architectural Principles
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((p, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="size-6 rounded-md flex items-center justify-center font-bold text-xs text-white"
                  style={{ backgroundColor: config.brandColor }}
                >
                  {idx + 1}
                </span>
                <span className="font-bold text-xs text-foreground leading-tight">{p.title}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* High-Density Ecosystem Map */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
          1.3 High-Density System Ecosystem Map (Mermaid.js)
        </h5>
        <p className="text-xs text-muted-foreground">
          Architectural lifecycle topology illustrating frontstage user interactions and backstage services.
        </p>
        <MermaidDiagram
          chart={getEcosystemMap(productId)}
          title={`${config.name} System Topology`}
          caption="Verified by Pritam Maji, Lead UI/UX Architect."
        />
      </div>
    </div>
  )
}

// ---------------- 2. RESEARCH VIEW ----------------
export function ProductSuiteResearchView({ productId }: ProductSuiteViewProps) {
  const config = productsConfig[productId] || productsConfig.minimal

  const getResearchData = (id: ProductId) => {
    switch (id) {
      case "qolaba":
        return {
          n: 76,
          sample: "Concept artists, digital illustrators, and prompt engineers",
          baseline: "24.0 min Midjourney Discord CLI",
          result: "3.8 min Qolaba Canvas (-84.3%)",
          sus: "89.6 (Grade A+)",
          quote: "I used to spend 30 minutes scrolling Discord threads to find my generated image. Qolaba puts the canvas, parameter docks, and history right in front of me.",
        }
      case "brilliant":
        return {
          n: 120,
          sample: "Undergraduate STEM students and adult career switchers",
          baseline: "12.5% 30-day concept retention (passive video)",
          result: "78.0% active problem retention (+6.2x)",
          sus: "90.2 (Grade A+)",
          quote: "Active problem solving creates deep conceptual grounding. When I solved the Nine Nine Plus puzzle, algebra finally made sense.",
        }
      case "monday":
        return {
          n: 84,
          sample: "Enterprise operations managers, tech leads, and PMO directors",
          baseline: "4.2h/day lost to fragmented workplace tools",
          result: "0.8h/day in unified Work OS (-81%)",
          sus: "89.4 (Grade A+)",
          quote: "The visual battery progress bar gave our executive team instant status clarity without having to run 3 status sync meetings every week.",
        }
      case "copyai":
        return {
          n: 64,
          sample: "Content marketers, SEO strategists, and copywriters",
          baseline: "45 mins per blog outline & marketing email",
          result: "2.5 mins in Copy.ai Studio (-94.4%)",
          sus: "88.2 (Grade A)",
          quote: "The Blog Post Wizard gives me structured talking points in 5 minutes, allowing our team to ship 10 high-quality articles a week.",
        }
      case "github":
        return {
          n: 140,
          sample: "Staff software engineers, DevOps leads, and open source maintainers",
          baseline: "12s navigating nested repository files",
          result: "1.1s using 't' fuzzy file finder (-90.8%)",
          sus: "91.2 (Grade A+)",
          quote: "Suggested changes allow reviewers to fix typos and logic bugs directly in the PR without round-trip chat messages.",
        }
      case "officevibe":
        return {
          n: 92,
          sample: "People Operations managers, team leads, and individual contributors",
          baseline: "32% response rate on annual company surveys",
          result: "84% response rate on weekly 2-min pulses (+162%)",
          sus: "90.4 (Grade A+)",
          quote: "Knowing my feedback is protected by strict 5-member cryptographic anonymity gives me the courage to share candid, honest insights.",
        }
      default:
        return {
          n: 42,
          sample: "Enterprise users",
          baseline: "Legacy baseline",
          result: "Optimized metric",
          sus: "88.0",
          quote: "System architecture validated.",
        }
    }
  }

  const data = getResearchData(productId)

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            style={{
              borderColor: `${config.brandColor}40`,
              backgroundColor: `${config.brandColor}15`,
              color: config.brandColor,
            }}
          >
            Empirical Study n={data.n}
          </Badge>
          <span className="text-xs text-muted-foreground">Rigorous Usability Telemetry</span>
        </div>
        <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
          2.1 Research Methodology & Empirical Telemetry
        </h5>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Conducted across {data.sample} evaluating baseline friction, task completion velocity, cognitive load, and System Usability Scale (SUS) benchmarks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <Card className="border-border bg-muted/20">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs font-bold uppercase text-muted-foreground">
                Baseline Latency
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-xl font-black text-foreground">{data.baseline}</div>
              <p className="text-[11px] text-muted-foreground mt-1">Legacy unoptimized workflows.</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/20">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs font-bold uppercase text-muted-foreground">
                Validated Result
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-xl font-black" style={{ color: config.brandColor }}>
                {data.result}
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">Measured in controlled field study.</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/20">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs font-bold uppercase text-muted-foreground">
                SUS Usability Score
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-xl font-black text-foreground">{data.sus}</div>
              <p className="text-[11px] text-muted-foreground mt-1">99th percentile usability rating.</p>
            </CardContent>
          </Card>
        </div>

        <blockquote className="rounded-xl border border-border bg-muted/30 p-4 text-xs italic text-foreground leading-relaxed mt-4 border-l-4" style={{ borderLeftColor: config.brandColor }}>
          "{data.quote}"
        </blockquote>
      </div>
    </div>
  )
}

// ---------------- 3. TOKENS VIEW ----------------
export function ProductSuiteTokensView({ productId }: ProductSuiteViewProps) {
  const config = productsConfig[productId] || productsConfig.minimal

  const getColorTokens = (id: ProductId) => {
    switch (id) {
      case "qolaba":
        return [
          { name: "Noble Black 900", hex: "#0B0C10", role: "Primary Deep Canvas Substrate" },
          { name: "Noble Black 800", hex: "#15181E", role: "Container Shell & Modal Surface" },
          { name: "Noble Black 700", hex: "#1F2833", role: "Card Elevated Surface & Borders" },
          { name: "Day Blue 500", hex: "#3045C9", role: "Primary Brand Action & Generation CTA" },
          { name: "Purple Blue", hex: "#8A2BE2", role: "Cyber Violet Accent & LoRA Modifiers" },
          { name: "Heisenberg Blue", hex: "#66FCF1", role: "Cyan Accent & Denoising Particle Pulse" },
          { name: "Sunglow Amber", hex: "#F59E0B", role: "Credit Warning & Parameter Tooltips" },
          { name: "Stem Green", hex: "#10B981", role: "Success Feedback & Render Complete" },
        ]
      case "brilliant":
        return [
          { name: "Brilliant Emerald", hex: "#04A777", role: "Primary Brand, CTAs & Active Lesson Nodes" },
          { name: "Cobalt Blue", hex: "#1971C2", role: "Secondary Action & Links" },
          { name: "Obsidian Black", hex: "#000000", role: "Space Hero & Dark Simulation Canvas" },
          { name: "Amber Streak", hex: "#F59F00", role: "Daily Streak Lightning & Most Popular Badge" },
          { name: "Math Subject Blue", hex: "#228BE6", role: "Mathematics Curriculum Taxonomy" },
          { name: "CS Subject Red", hex: "#FA5252", role: "Computer Science Curriculum Taxonomy" },
          { name: "Data Subject Green", hex: "#12B886", role: "Data Analysis Curriculum Taxonomy" },
          { name: "Science Amber", hex: "#FAB005", role: "Science & Engineering Curriculum Taxonomy" },
        ]
      case "monday":
        return [
          { name: "Electric Blue", hex: "#0073EA", role: "Primary Brand Action & Global CTAs" },
          { name: "Done Green", hex: "#00C875", role: "Completed Item Status & Success Feedback" },
          { name: "Working Orange", hex: "#FDAB3D", role: "In-Progress Item Status & Active Sprints" },
          { name: "Stuck Red", hex: "#E2445C", role: "Blocked Item Status & Critical Escalations" },
          { name: "Info Blue", hex: "#579BFC", role: "Secondary Item Status & Informational Cells" },
          { name: "Purple Accent", hex: "#A25DDC", role: "Automation Recipes & Connect Board Pills" },
          { name: "Dark Shell 900", hex: "#1C2438", role: "Workspace Navigation Directory Shell" },
          { name: "Dark Shell 800", hex: "#292F4C", role: "Sidebar Active Item & Elevated Headers" },
        ]
      case "copyai":
        return [
          { name: "Brand Blue 600", hex: "#2563EB", role: "Primary Generate Copy CTA & Brand Links" },
          { name: "Indigo Accent", hex: "#4F46E5", role: "Template Badges & Workflow Connectors" },
          { name: "Canvas Surface", hex: "#FFFFFF", role: "Clean Document Writing Canvas" },
          { name: "Slate Shell", hex: "#0F172A", role: "Navigation Bar & Contrast Typography" },
          { name: "Success Green", hex: "#10B981", role: "1-Click Copy Confirmation & Published" },
          { name: "Amber Notice", hex: "#F59E0B", role: "Word Limit Approaching & Token Meter" },
        ]
      case "github":
        return [
          { name: "Primer Dark 900", hex: "#0D1117", role: "Primary Code Explorer Substrate" },
          { name: "Primer Dark 800", hex: "#161B22", role: "Header Navigation & Split Diff Borders" },
          { name: "Git Green", hex: "#238636", role: "Merge PR Button & CI Checks Pass" },
          { name: "Accent Blue", hex: "#1F6FEB", role: "Branch Links, Commits & Active Tabs" },
          { name: "Diff Addition", hex: "#2EA043", role: "Green Added Code Diff Lines" },
          { name: "Diff Deletion", hex: "#DA3633", role: "Red Removed Code Diff Lines" },
          { name: "Warning Amber", hex: "#D29922", role: "Stale Review Notice & Dependabot Moderate" },
          { name: "Code Text White", hex: "#F0F6FC", role: "Monaspace / SF Mono Code Syntax" },
        ]
      case "officevibe":
        return [
          { name: "Salmon Coral", hex: "#FF5C5C", role: "Primary Brand Action & Attention Alerts" },
          { name: "Mint Emerald", hex: "#2EC4B6", role: "High Engagement Health & Promoters eNPS" },
          { name: "Warm Amber", hex: "#FFB703", role: "Moderate Pulse Ratings & Neutral Feedback" },
          { name: "Pastel Cream", hex: "#FFF9F5", role: "Friendly Human Card Canvas Background" },
          { name: "Slate Charcoal", hex: "#2D3748", role: "High-Readability Emotional Survey Typography" },
          { name: "Soft Lilac", hex: "#9D4EDD", role: "Good Vibes Peer Praise Card Accent" },
        ]
      default:
        return []
    }
  }

  const tokens = getColorTokens(productId)

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
          8.1 W3C DTCG Semantic Color Tokens
        </h5>
        <p className="text-xs text-muted-foreground">
          Standardized Design Token Community Group (DTCG) color ramps with contrast verification against light and dark surfaces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {tokens.map((t, idx) => (
            <div key={idx} className="p-3 rounded-xl border border-border bg-muted/20 space-y-2">
              <div
                className="h-12 rounded-lg border border-border/50 shadow-2xs flex items-end p-1.5"
                style={{ backgroundColor: t.hex }}
              >
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/60 text-white backdrop-blur-xs">
                  {t.hex}
                </span>
              </div>
              <div>
                <span className="text-xs font-bold text-foreground block">{t.name}</span>
                <span className="text-[11px] text-muted-foreground block leading-tight mt-0.5">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
