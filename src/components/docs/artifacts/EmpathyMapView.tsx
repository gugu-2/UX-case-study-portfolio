import React, { useState } from "react"
import { ProductId, productsConfig } from "@/config/products"
import { Badge } from "@/components/ui/badge"
import { Quote, Heart, Eye, Ear, MessageSquare, Check, Sparkles, ChevronRight, User } from "lucide-react"

interface EmpathyMapViewProps {
  currentProduct?: ProductId
}

interface PersonaEmpathyData {
  personaName: string
  personaRole: string
  avatarUrl: string
  avatarInitials: string
  thinkAndFeel: string[]
  hear: string[]
  see: string[]
  sayAndDo: string[]
  gains: string[]
  pains: string[]
}

const empathyDataByProduct: Record<ProductId, PersonaEmpathyData[]> = {
  linear: [
    {
      personaName: "Karri Saarinen",
      personaRole: "Staff Software Engineer (Core Platform)",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      avatarInitials: "KS",
      thinkAndFeel: [
        "Waiting 8 seconds for a Jira issue to load completely breaks my engineering flow state.",
        "Why do I have to fill out 6 mandatory dropdowns just to log a typo fix?",
        "Tools for software engineers should move at the speed of thought, like Vim or VS Code.",
        "If a tool requires a mouse for standard navigation, it is inherently slowing me down.",
        "Will our sprint cycle burndown automatically reflect my PR without manual ticket dragging?",
      ],
      hear: [
        "Tech Leads preaching about agile velocity while making everyone log Jira story points.",
        "Peers complaining on Twitter and Slack about clunky enterprise software bloat.",
        "Engineering Managers asking: 'Did you remember to move that issue to In Progress?'",
        "Open-source creators praising Linear's sub-50ms speed and keyboard shortcuts.",
      ],
      see: [
        "Messy backlog lists with hundreds of abandoned tickets older than 9 months.",
        "Clean, dark-mode minimalist UIs in modern developer tooling like Raycast and GitHub.",
        "Engineers spending 30 minutes in standups just reconciling ticket statuses.",
        "Disconnection between code commits in Git and tracking tickets in project management.",
      ],
      sayAndDo: [
        "Creates issues instantly using single-key shortcut 'C' in less than 2 seconds.",
        "Navigates entire team cycle backlog using arrow keys and 'S' to switch status.",
        "Links PRs with 'Fixes ENG-104' so issues close automatically on merge.",
        "Advocates to leadership to deprecate slow legacy tools in favor of Linear.",
      ],
      gains: [
        "Instantaneous sub-50ms UI response with local SQLite Wasm caching.",
        "Zero-friction issue filing with keyboard-only shortcuts (C, S, P, A).",
        "Deterministic Git automation where PR merges auto-close corresponding issues.",
        "Clean, clutter-free workspace that respects cognitive bandwidth.",
      ],
      pains: [
        "Constant context-switching between code editor and slow web trackers.",
        "Stale backlogs filled with zombie tickets that never get prioritized.",
        "Manual ticket maintenance ceremony that steals time from building features.",
        "Eye strain and visual fatigue caused by cluttered, unpolished interfaces.",
      ],
    },
    {
      personaName: "Jori Lallo",
      personaRole: "Engineering Manager (Infrastructure)",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      avatarInitials: "JL",
      thinkAndFeel: [
        "I need immediate transparency into whether this cycle will ship on schedule.",
        "Estimating story points is theater; tracking actual cycle velocity is reality.",
        "How can I unblock my team without interrupting them with Slack DMs?",
      ],
      hear: [
        "Executives wanting weekly milestone roadmaps without micromanagement.",
        "Developers begging for fewer sprint planning meetings.",
      ],
      see: [
        "Burndown graphs that update in real-time as pull requests merge.",
        "Cross-functional dependencies between frontend, mobile, and backend teams.",
      ],
      sayAndDo: [
        "Triage incoming bug reports every morning via the Triage inbox.",
        "Grooms upcoming rolling 2-week cycles without ceremonial poker planning.",
      ],
      gains: [
        "Automated rolling cycles with zero manual sprint setup overhead.",
        "Real-time insight into blockers and cycle scope expansion.",
      ],
      pains: [
        "Having to badger engineers for status updates before executive syncs.",
        "Complex BI tools required just to see basic team velocity.",
      ],
    },
  ],
  mixpanel: [
    {
      personaName: "Jessica Chen",
      personaRole: "Lead Product Manager (Growth)",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      avatarInitials: "JC",
      thinkAndFeel: [
        "Where exactly are users dropping off between the onboarding tour and first purchase?",
        "I shouldn't have to wait 2 weeks for a data engineer to write a SQL query for a simple funnel.",
        "Is this conversion drop specific to iOS users in Europe or a global anomaly?",
        "I feel empowered when I can slice cohort metrics live during an executive review.",
      ],
      hear: [
        "Engineers saying 'Look at the data warehouse' while PMs struggle with SQL syntax.",
        "Leadership asking for evidence-backed product decisions instead of gut feelings.",
        "Marketing asking which paid campaign brings users who actually retain past day 30.",
      ],
      see: [
        "Sudden 14% drop-off at the payment method selection screen.",
        "Disorganized tracking plans with duplicate event names like 'user_signup' vs 'UserSignedUp'.",
        "Dashboards full of high-level pageviews that tell nothing about feature adoption.",
      ],
      sayAndDo: [
        "Builds visual funnels by selecting event blocks in the intuitive query builder.",
        "Breaks down funnel conversion rates by device, region, and acquisition cohort.",
        "Pins critical charts to shared KPI Boards and sets automated Slack alerts.",
      ],
      gains: [
        "Sub-second interactive query computation powered by the Arb columnar datastore.",
        "Self-serve cohort exploration without writing a single line of SQL.",
        "Clean, standardized event dictionary governed through the Lexicon.",
      ],
      pains: [
        "Waiting weeks for data engineering backlogs to fulfill ad-hoc reporting requests.",
        "Data integrity issues caused by poorly governed, inconsistent event naming.",
        "Static screenshot decks that become obsolete 24 hours after presentation.",
      ],
    },
  ],
  miro: [
    {
      personaName: "Maria Gonzalez",
      personaRole: "Lead UX Researcher & Workshop Facilitator",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      avatarInitials: "MG",
      thinkAndFeel: [
        "If non-technical stakeholders struggle to add a sticky note, this entire workshop will derail.",
        "How do I recreate the tactile spontaneity of an in-person war room online?",
        "Will the canvas lag when 35 people are simultaneously moving stickies?",
        "I need a bird's-eye view of the strategy, but the team needs to zoom into details.",
      ],
      hear: [
        "Clients asking 'Where did my sticky note go?' when they accidentally pan too far.",
        "Executives expressing delight when seeing 25 live cursors flying across the board.",
        "Scrum masters asking how to export synthesis stickies into Jira tickets.",
      ],
      see: [
        "Dozens of colorful multiplayer cursors clustering around brainstorming frames.",
        "Unstructured walls of hundreds of stickies needing rapid thematic clustering.",
        "Locked background frames preventing accidental drags by inexperienced guests.",
      ],
      sayAndDo: [
        "Uses 'Bring Everyone to Me' to command stakeholder focus during transitions.",
        "Runs integrated dot-voting sessions with countdown timers and celebration chimes.",
        "Converts prioritized sticky clusters directly into Jira issue epics.",
      ],
      gains: [
        "Fluid WebGL infinite zoom and panning without stutter or frame drops.",
        "Zero-friction guest links that allow immediate collaboration without mandatory logins.",
        "AI-assisted sticky clustering to synthesize 100+ ideas in seconds.",
      ],
      pains: [
        "Participants accidentally moving background frames or getting lost on the infinite plane.",
        "Manual labor required to transcribe whiteboard stickies into actionable Jira tasks.",
        "Browser performance degradation when boards accumulate thousands of vector objects.",
      ],
    },
  ],
  frame: [
    {
      personaName: "Alex Rivera",
      personaRole: "Startup Co-Founder & Product Lead",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      avatarInitials: "AR",
      thinkAndFeel: [
        "Why are we paying $50/user across Notion, Asana, and Miro when they overlap so much?",
        "Information gets lost in SaaS silos; nobody knows where the latest product spec lives.",
        "I want to write a spec doc, link tasks inline, and brainstorm on a canvas in one tab.",
      ],
      hear: [
        "Teammates asking 'Is this documented in Notion, or is it on the Jira ticket?'",
        "Investors demanding lean software expenditure and high operational efficiency.",
      ],
      see: [
        "15 browser tabs open just to keep track of specs, tasks, whiteboards, and chats.",
        "Tasks detached from their original context, leaving engineers confused about why they're building.",
      ],
      sayAndDo: [
        "Types '@' inside a meeting doc to spin up a linked engineering task without leaving.",
        "Embeds an infinite whiteboard directly inside the product requirement specification.",
        "Uses the global ⌘K Omni-Search to find any document, task, or team member instantly.",
      ],
      gains: [
        "Unified Connected OS combining Documents, Tasks, and Whiteboards into one engine.",
        "Bi-directional backlinks ensuring tasks always retain their contextual spec origins.",
        "Massive SaaS cost consolidation eliminating redundant subscriptions.",
      ],
      pains: [
        "Context switching fatigue jumping between multiple fragmented web applications.",
        "Document-task disconnect leading to misaligned feature implementations.",
        "Paying multiple expensive per-seat licenses for overlapping tool capabilities.",
      ],
    },
  ],
  minimal: [
    {
      personaName: "Marcus Vance",
      personaRole: "Chief Financial Officer & Treasury Architect",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      avatarInitials: "MV",
      thinkAndFeel: [
        "Is our intraday liquidity reserve sufficient across all cross-border subsidiaries?",
        "One misplaced decimal or delayed transaction confirmation could cause liquidity breach.",
        "I need instant, optimistic reconciliation feedback without waiting for banking batch jobs.",
      ],
      hear: [
        "Regulators demanding strict audit trail logs and WCAG AA contrast compliance.",
        "Treasury analysts struggling with dense, outdated legacy ERP banking software.",
      ],
      see: [
        "Real-time dual-card liquidity balance updates with tactile confirmation sliders.",
        "Color-coded transaction status indicators ensuring zero ambiguity.",
      ],
      sayAndDo: [
        "Audits multi-currency balances every morning via the Banking Treasury Dashboard.",
        "Drags tactile confirmation slider to approve seven-figure currency transfers.",
        "Downloads automated immutable audit slips for regulatory compliance.",
      ],
      gains: [
        "Optimistic UI confirmation within 200ms with real-time ledger synchronization.",
        "Tactile slider interaction that eliminates accidental transfer confirmations.",
        "Atomic OKLCH color token system ensuring flawless high-contrast readability.",
      ],
      pains: [
        "Legacy banking software with 15-minute batch delays and confusing navigation rails.",
        "Fear of catastrophic wire errors caused by lack of step-by-step confirmation barriers.",
        "Data fragmentation across multiple regional banking portals.",
      ],
    },
  ],
}

export function EmpathyMapView({ currentProduct = "linear" }: EmpathyMapViewProps) {
  const productConfig = productsConfig[currentProduct] || productsConfig.linear
  const personas = empathyDataByProduct[currentProduct] || empathyDataByProduct.linear
  const [selectedPersonaIndex, setSelectedPersonaIndex] = useState(0)
  const currentPersona = personas[selectedPersonaIndex] || personas[0]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner matching layout */}
      <div className="text-center max-w-3xl mx-auto space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold"
          style={{
            borderColor: `${productConfig.brandColor}40`,
            backgroundColor: `${productConfig.brandColor}15`,
            color: productConfig.brandColor,
          }}
        >
          <Heart className="size-3.5" />
          <span>Research Synthesis Artifact</span>
        </div>
        <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
          Empathy Map
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          An empathy map is a collaborative visualization used to articulate what we know about a particular type of user. It helps to synthesize research data to assist our team in understanding how people make decisions and navigate systemic friction points.
        </p>

        {/* Persona Selector Tabs if multiple personas */}
        {personas.length > 1 && (
          <div className="flex items-center justify-center gap-2 pt-3 flex-wrap">
            {personas.map((p, idx) => (
              <button
                key={p.personaName}
                onClick={() => setSelectedPersonaIndex(idx)}
                className={`figma-btn-md h-9 min-h-[36px] px-4 py-[6px] rounded-[8px] text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedPersonaIndex === idx
                    ? "bg-foreground text-background shadow-xs"
                    : "bg-muted text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                <span>{p.personaName}</span>
                <span className="text-[10px] opacity-75">({p.personaRole.split("(")[0].trim()})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Empathy Map Visual Canvas (The 4-Quadrant X Layout from User Image) */}
      <div className="relative rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md p-6 sm:p-10 shadow-lg overflow-hidden">
        {/* Subtle Background Contour / Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(circle_at_center,var(--primary)_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Diagonal X-Divider SVG Lines connecting corners to center */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-30" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
        </svg>

        {/* Center Circular Avatar Anchor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <div className="relative size-24 sm:size-28 rounded-full border-4 border-background shadow-xl overflow-hidden ring-4 ring-border/50 bg-muted">
            <img
              src={currentPersona.avatarUrl}
              alt={currentPersona.personaName}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to stylized initials avatar if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center font-black text-2xl text-white -z-10"
              style={{ backgroundColor: productConfig.brandColor }}
            >
              {currentPersona.avatarInitials}
            </div>
          </div>
          <div className="mt-2 text-center bg-background/90 backdrop-blur-xs px-3 py-1 rounded-full border border-border/80 shadow-xs">
            <span className="text-xs font-bold text-foreground block leading-tight">{currentPersona.personaName}</span>
            <span className="text-[10px] text-muted-foreground block font-medium">{currentPersona.personaRole}</span>
          </div>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-28 relative z-10 py-6">
          {/* TOP QUADRANT: What does he Think & feel */}
          <div className="md:col-span-2 flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">What does user</span>
              <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-amber-500 dark:text-amber-400 tracking-tight flex items-center justify-center gap-2">
                <Heart className="size-5" /> Think & feel
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full text-left">
              {currentPersona.thinkAndFeel.map((thought, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-background/80 border border-border/70 text-xs text-foreground/90 shadow-2xs leading-relaxed italic">
                  "{thought}"
                </div>
              ))}
            </div>
          </div>

          {/* LEFT QUADRANT: What does he Hear */}
          <div className="flex flex-col items-start space-y-4 md:pr-14">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">What does user</span>
              <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-amber-500 dark:text-amber-400 tracking-tight flex items-center gap-2">
                <Ear className="size-5" /> Hear
              </h3>
            </div>
            <div className="space-y-2.5 w-full">
              {currentPersona.hear.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-background/80 border border-border/70 text-xs text-foreground/90 shadow-2xs leading-relaxed">
                  • {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT QUADRANT: What does he See */}
          <div className="flex flex-col items-start md:items-end md:text-right space-y-4 md:pl-14">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">What does user</span>
              <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-amber-500 dark:text-amber-400 tracking-tight flex items-center gap-2 md:flex-row-reverse">
                <Eye className="size-5" /> See
              </h3>
            </div>
            <div className="space-y-2.5 w-full">
              {currentPersona.see.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-background/80 border border-border/70 text-xs text-foreground/90 shadow-2xs leading-relaxed md:text-right">
                  {item} •
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM QUADRANT: What does he Say and Do */}
          <div className="md:col-span-2 flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto pt-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">What does user</span>
              <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-amber-500 dark:text-amber-400 tracking-tight flex items-center justify-center gap-2">
                <MessageSquare className="size-5" /> Say and Do
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full text-left">
              {currentPersona.sayAndDo.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-background/80 border border-border/70 text-xs text-foreground/90 shadow-2xs leading-relaxed">
                  • {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Side-by-Side Cards: GAIN & PAIN (Exactly matching User Image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* GAIN CARD */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-5 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Quote className="size-5" />
            </div>
            <div>
              <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground tracking-tight">Gain</h3>
              <p className="text-xs text-muted-foreground">User needs, value accelerators, and desires</p>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-foreground/90">
            {currentPersona.gains.map((gain, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/30 border border-border/50">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                <span className="leading-relaxed">{gain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PAIN CARD */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-5 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20">
              <Quote className="size-5" />
            </div>
            <div>
              <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground tracking-tight">Pain</h3>
              <p className="text-xs text-muted-foreground">Frictions, anxieties, and operational roadblocks</p>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-foreground/90">
            {currentPersona.pains.map((pain, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/30 border border-border/50">
                <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                <span className="leading-relaxed">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
