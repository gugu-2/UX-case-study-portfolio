import React from "react"
import { ProductId, productsConfig } from "@/config/products"
import { Badge } from "@/components/ui/badge"
import { Users, Target, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Heart, User } from "lucide-react"

interface PersonasViewProps {
  currentProduct?: ProductId
}

interface PersonaCardData {
  name: string
  role: string
  age: string
  experience: string
  device: string
  proficiency: string
  avatarUrl: string
  quote: string
  goals: string[]
  motivations: string[]
  frustrations: string[]
  behaviors: string[]
  needs: string[]
  accessibilityNeed: string
}

const personasByProduct: Record<ProductId, PersonaCardData[]> = {
  linear: [
    {
      name: "Karri Saarinen",
      role: "Staff Software Engineer",
      age: "33",
      experience: "10 years in High-Growth Startups",
      device: "MacBook Pro M3 Max",
      proficiency: "Power User (Keyboard Only)",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      quote: "Every second waiting for a Jira page to load is a second I lose my train of thought. Tools should move at the speed of my mind.",
      goals: [
        "Write code, not manage tickets.",
        "Have issues automatically update when PRs are merged.",
        "Never touch the mouse while navigating the issue tracker.",
      ],
      motivations: [
        "Staying in the flow state.",
        "Shipping features rapidly without bureaucratic overhead.",
      ],
      frustrations: [
        "Slow, bloated legacy project management tools.",
        "Mandatory fields and 5-step dropdowns just to create a task.",
        "Disconnect between code (Git) and issues.",
      ],
      behaviors: [
        "Uses the terminal and keyboard shortcuts exclusively.",
        "Types 'C' to create, 'S' to change status instantly.",
      ],
      needs: [
        "Sub-50ms latency on all actions.",
        "Offline capability for working on flights.",
      ],
      accessibilityNeed: "Requires high-contrast dark mode to prevent eye strain during 10-hour coding sessions.",
    },
    {
      name: "Jori Lallo",
      role: "Engineering Manager",
      age: "38",
      experience: "12 years managing engineering teams",
      device: "iMac 27\"",
      proficiency: "Advanced",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      quote: "I need to know the health of the current cycle at a glance without having to harass my team for status updates.",
      goals: [
        "Plan and groom upcoming cycles (sprints).",
        "Monitor cycle burndown and scope creep.",
        "Ensure the team isn't bottlenecked.",
      ],
      motivations: [
        "Predictable velocity and high team morale.",
        "Data-driven insights into engineering health.",
      ],
      frustrations: [
        "Stale tickets that devs forget to move to 'Done'.",
        "Complex query languages required to build simple reports.",
      ],
      behaviors: [
        "Reviews the 'Active Cycle' board daily.",
        "Triages new bugs from the Triage inbox.",
      ],
      needs: [
        "Automated workflows (e.g., PR merge auto-closes issue).",
        "Clear visualizations of cycle progress.",
      ],
      accessibilityNeed: "Prefers clear typography and distinct iconography for issue types (Bug, Feature).",
    },
  ],
  mixpanel: [
    {
      name: "Jessica Chen",
      role: "Lead Product Manager",
      age: "34",
      experience: "7 years in B2B SaaS",
      device: "MacBook Pro 14\"",
      proficiency: "Advanced Analytics User",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      quote: "Mixpanel lets me visually build a funnel in seconds and immediately slice it by user segments without asking engineers.",
      goals: [
        "Understand user drop-off during onboarding flows.",
        "Measure adoption rates of newly released features.",
        "Share actionable insights with the leadership team.",
      ],
      motivations: [
        "Making data-driven product decisions quickly.",
        "Proving the ROI of her team's product initiatives.",
      ],
      frustrations: [
        "Writing complex SQL queries.",
        "Waiting weeks for the data engineering team to pull reports.",
        "Data silos between product and marketing teams.",
      ],
      behaviors: [
        "Checks core dashboards every morning.",
        "Frequently uses 'Breakdown' to segment data by cohorts.",
      ],
      needs: [
        "Instant chart re-rendering when adding filters.",
        "Clean, exportable visualizations for pitch decks.",
      ],
      accessibilityNeed: "Requires high-contrast categorical colors for charts to ensure data segments are distinguishable.",
    },
    {
      name: "Elena Rostova",
      role: "Data Analyst / Engineer",
      age: "31",
      experience: "8 years in Data Engineering",
      device: "ThinkPad + Dual Monitors",
      proficiency: "Expert / Admin",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      quote: "The Lexicon is a lifesaver. I can merge duplicate events so the whole company uses the same data dictionary.",
      goals: [
        "Ensure data integrity across all events.",
        "Govern event naming conventions (taxonomy).",
        "Maintain low latency on the ingestion pipeline.",
      ],
      motivations: [
        "Single source of truth for company data.",
        "Preventing 'garbage in, garbage out'.",
      ],
      frustrations: [
        "Messy, unorganized tracking plans from PMs.",
        "Duplicate event names across web and mobile platforms.",
      ],
      behaviors: [
        "Spends time in the Lexicon fixing bad event names.",
        "Sets up alerts for data anomalies or drops in ingestion.",
      ],
      needs: [
        "Powerful bulk-edit capabilities for properties.",
        "Detailed audit logs for workspace changes.",
      ],
      accessibilityNeed: "Keyboard-heavy user; navigates complex data tables via keyboard shortcuts.",
    },
  ],
  miro: [
    {
      name: "Maria Gonzalez",
      role: "Lead UX Researcher & Facilitator",
      age: "36",
      experience: "8 years in Design Thinking",
      device: "MacBook Pro 14\" + Wacom Tablet",
      proficiency: "Power User (Facilitator)",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      quote: "When running a workshop with 20 people remotely, the tool has to be completely invisible. If they struggle with stickies, the brainstorm fails.",
      goals: [
        "Run remote design sprints and brainstorming sessions.",
        "Synthesize hundreds of qualitative research data points.",
        "Keep non-technical stakeholders engaged.",
      ],
      motivations: [
        "Creating a sense of 'being in the same room'.",
        "Extracting actionable insights from chaotic brainstorms.",
      ],
      frustrations: [
        "Users getting lost on the infinite canvas.",
        "Accidentally moving or deleting locked background frames.",
        "Performance lag when too many images are uploaded.",
      ],
      behaviors: [
        "Uses 'Bring Everyone to Me' constantly during workshops.",
        "Relies heavily on bulk-add sticky note features.",
      ],
      needs: [
        "Robust facilitator controls (timers, voting, attention).",
        "Fluid zoom and pan navigation without stutter.",
      ],
      accessibilityNeed: "Needs clear visual boundaries (Frames) to help screen readers and keyboard users navigate the canvas.",
    },
  ],
  frame: [
    {
      name: "Alex Rivera",
      role: "Startup Co-Founder",
      age: "32",
      experience: "5 years managing distributed teams",
      device: "MacBook Pro 16\"",
      proficiency: "Power User",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      quote: "We were paying for Notion, Asana, and Miro. Frame replaced them all, and my team actually knows where to find things now.",
      goals: [
        "Centralize company knowledge and task management.",
        "Reduce software subscription costs.",
        "Improve cross-functional team alignment.",
      ],
      motivations: [
        "Building a productive, fast-moving team culture.",
        "Eliminating context switching between apps.",
      ],
      frustrations: [
        "Information gets lost across different SaaS tools.",
        "Team members asking 'where is that document?'.",
        "Paying $50/user/mo for overlapping tools.",
      ],
      behaviors: [
        "Starts the day by checking the unified Inbox.",
        "Creates interconnected docs and tasks during meetings.",
      ],
      needs: [
        "Seamless linking between tasks, docs, and goals.",
        "Fast, reliable search across all modules.",
      ],
      accessibilityNeed: "Requires highly readable typography for long-form reading in docs.",
    },
  ],
  minimal: [
    {
      name: "Marcus Vance",
      role: "Chief Financial Officer & Treasury Architect",
      age: "46",
      experience: "18 years in Institutional Finance",
      device: "MacBook Pro 16\" + Dual 4K Displays",
      proficiency: "Executive Power User",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      quote: "Treasury management is a zero-error business. The interface must provide tactile feedback and instant ledger clarity.",
      goals: [
        "Monitor intraday multi-currency liquidity across 14 subsidiaries.",
        "Authorize seven-figure cross-border payments with foolproof verification.",
        "Maintain immutable audit logs for international regulatory compliance.",
      ],
      motivations: [
        "Safeguarding corporate balance sheet capital.",
        "Minimizing operational and FX transfer latency.",
      ],
      frustrations: [
        "Clunky legacy ERP portals with 15-minute batch delays.",
        "Risk of accidental wire confirmation on single-click buttons.",
        "Dense tables lacking visual hierarchy and status clarity.",
      ],
      behaviors: [
        "Reviews the Treasury Dashboard first thing every morning.",
        "Uses tactile slider interaction to confirm high-value transfers.",
      ],
      needs: [
        "Optimistic UI confirmation within 200ms with real-time ledger sync.",
        "Fail-safe confirmation barriers for critical transactions.",
      ],
      accessibilityNeed: "Strict adherence to WCAG 2.2 AA contrast ratios across all financial data tables.",
    },
  ],
}

export function PersonasView({ currentProduct = "linear" }: PersonasViewProps) {
  const productConfig = productsConfig[currentProduct] || productsConfig.linear
  const personas = personasByProduct[currentProduct] || personasByProduct.linear

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl space-y-3">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold"
            style={{
              borderColor: `${productConfig.brandColor}40`,
              backgroundColor: `${productConfig.brandColor}15`,
              color: productConfig.brandColor,
            }}
          >
            <Users className="size-3.5" />
            <span>02.3 — Archetypal User Personas</span>
          </div>

          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            {productConfig.name} User Personas & Behavioral Archetypes
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Empirically validated user archetypes synthesizing qualitative field interviews and quantitative telemetry. Detailing primary goals, cognitive motivations, friction points, and accessibility requirements.
          </p>
        </div>
      </div>

      {/* Persona Cards */}
      <div className="space-y-6">
        {personas.map((persona, idx) => (
          <div
            key={persona.name}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6"
          >
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-5">
              <div className="flex items-center gap-4">
                <img
                  src={persona.avatarUrl}
                  alt={persona.name}
                  className="size-14 sm:size-16 rounded-2xl object-cover border-2 border-border shadow-xs"
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground">{persona.name}</h3>
                    <Badge variant="outline" className="font-mono text-xs">
                      Persona 0{idx + 1}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">
                    {persona.role} • Age {persona.age} • {persona.experience}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-lg bg-muted text-foreground border border-border">
                  <strong>Device:</strong> {persona.device}
                </span>
                <span
                  className="px-3 py-1 rounded-lg border font-bold"
                  style={{
                    borderColor: `${productConfig.brandColor}40`,
                    backgroundColor: `${productConfig.brandColor}15`,
                    color: productConfig.brandColor,
                  }}
                >
                  {persona.proficiency}
                </span>
              </div>
            </div>

            {/* Quote */}
            <blockquote
              className="rounded-2xl border border-border bg-muted/20 p-4 text-xs italic text-foreground leading-relaxed border-l-4"
              style={{ borderLeftColor: productConfig.brandColor }}
            >
              "{persona.quote}"
            </blockquote>

            {/* Persona Attributes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* Goals & Motivations */}
              <div className="rounded-2xl border border-border bg-muted/10 p-4 space-y-2">
                <span className="font-bold uppercase tracking-wider text-primary text-[11px] block">
                  Core Goals & Motivations
                </span>
                <ul className="space-y-1.5 text-muted-foreground">
                  {persona.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Frustrations */}
              <div className="rounded-2xl border border-border bg-muted/10 p-4 space-y-2">
                <span className="font-bold uppercase tracking-wider text-red-500 text-[11px] block">
                  Key Frustrations
                </span>
                <ul className="space-y-1.5 text-muted-foreground">
                  {persona.frustrations.map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Behaviors & Accessibility */}
              <div className="rounded-2xl border border-border bg-muted/10 p-4 space-y-2">
                <span className="font-bold uppercase tracking-wider text-foreground text-[11px] block">
                  Behaviors & Needs
                </span>
                <ul className="space-y-1.5 text-muted-foreground">
                  {persona.needs.map((n, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-primary font-bold shrink-0">•</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-border/60 text-[11px] text-muted-foreground">
                  <strong className="text-foreground">Accessibility:</strong> {persona.accessibilityNeed}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
