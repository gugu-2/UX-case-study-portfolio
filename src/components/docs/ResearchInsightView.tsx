import React from 'react'
import { Users, Search, Target, Heart, AlertTriangle, ArrowRight, CheckCircle2, MessageSquare, Compass, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const ResearchInsightView: React.FC = () => {
  const journeyChart = `graph LR
    Awareness["1. Awareness<br/>(Discovery of SaaS Tool)"] --> Consideration["2. Consideration<br/>(Trial & Evaluation)"]
    Consideration --> Onboarding["3. Onboarding<br/>(Workspace & Role Setup)"]
    Onboarding --> FirstUse["4. First Use<br/>(Navigating 6 Dashboards)"]
    FirstUse --> CoreTask["5. Core Task<br/>(Wire Transfer / Review Moderation)"]
    CoreTask --> Success["6. Success<br/>(Instant Optimistic Slip)"]
    Success --> Retention["7. Retention<br/>(Daily Active Routine)"]
    Retention --> Advocacy["8. Advocacy<br/>(Team Invitation & Expansion)"]`

  const experienceMapChart = `graph TD
    User["Enterprise Operator (Elena / Marcus)"]
    
    subgraph Frontstage["Frontstage (Direct Visible Touchpoints)"]
      Web["Minimal UI Web App (Desktop / Ultrawide)"]
      Mobile["Mobile PWA (Thumb-Friendly Bottom Bar)"]
      Command["Global ⌘K Omni-Palette"]
      Slider["Quick Transfer Tactile Slider"]
    end

    subgraph Channels["Communications & Push Channels"]
      Email["Transactional Email Settlement Receipts"]
      Push["Browser & OS Urgent Balance Alerts"]
      InApp["Toast Notifications & Feedback Rings"]
    end

    subgraph Backstage["Backstage (Microservices & Integration Layer)"]
      Auth["OAuth 2.0 & RBAC Permission Masker"]
      Ledger["Real-Time Treasury Ledger Engine"]
      CloudSync["Multi-Cloud Asset Sync Bridge"]
      Sentiment["Guest Review Moderation Queue"]
    end

    subgraph DataAI["Data Infrastructure & Fail-Safes"]
      Postgres["PostgreSQL Transaction Database"]
      Redis["Redis In-Memory State Cache"]
      Anomaly["AI Predictive Anomaly Detection"]
      Audit["Immutable Compliance Audit Logs"]
    end

    User --> Frontstage
    Frontstage --> Channels
    Frontstage <--> Backstage
    Backstage <--> DataAI`

  const personas = [
    {
      name: 'Elena Rostova',
      role: 'Lead Quantitative Operations & Treasury Analyst',
      age: '34',
      experience: '9 years in high-frequency FinTech',
      device: 'Dual 27" 4K Ultrawide Workstations (macOS)',
      proficiency: 'Advanced / Power User',
      quote: "Every extra modal click between me and treasury verification adds 30 seconds of risk. I need dense data without eye strain.",
      goals: [
        'Audit real-time USD/EUR multi-currency balances in a single glance at 8:00 AM.',
        'Execute high-value vendor settlements in under 15 seconds with zero decimal errors.',
        'Export compliant ledger audits without waiting for server batch jobs.',
      ],
      motivations: [
        'Maintaining 99.99% treasury ledger reconciliation accuracy.',
        'Protecting company liquidity margins through rapid foreign-exchange execution.',
      ],
      frustrations: [
        'Slow 5-step wire transfer confirmation modals with hidden fee breakdowns.',
        'Low-contrast tabular fonts that cause eye fatigue during 8-hour monitoring shifts.',
        'Static dashboards that fail to reflect optimistic real-time balance updates.',
      ],
      behaviors: [
        'Utilizes keyboard shortcuts (⌘K) heavily to jump between banking accounts.',
        'Arranges multiple browser windows side-by-side on ultrawide monitors.',
      ],
      needs: [
        'Tactile slider controls for quick transfer amounts with instant input sync.',
        'WCAG AAA high-contrast primary typography (#212B36 on white).',
      ],
      a11y: 'Relies on crisp contrast ratios and 2px visible focus rings for swift keyboard-only auditing.',
    },
    {
      name: 'Marcus Vance',
      role: 'VP of Product & Omnichannel Operations',
      age: '41',
      experience: '15 years in enterprise e-commerce',
      device: 'MacBook Pro 16" + iPad Pro on the go',
      proficiency: 'High Strategic / Executive',
      quote: "I care about SKU depletion velocity and gross profit margin. Give me high-level signals with immediate drill-down.",
      goals: [
        'Monitor hourly flash-sale revenue velocity across 4 international regions.',
        'Identify fast-selling SKU shortages before supplier warehouse cut-offs.',
        'Track customer sentiment ratings across hospitalities and bookings.',
      ],
      motivations: [
        'Accelerating daily active decision velocity across product merchandising teams.',
        'Preventing customer review drop-offs below 4.8 stars.',
      ],
      frustrations: [
        'Dashboard chrome and decorative gradients that steal screen space from charts.',
        'Disjointed reporting that forces context switching between e-commerce and analytics.',
      ],
      behaviors: [
        'Scans top 3 KPI cards first thing each morning on mobile PWA.',
        'Drills down into product leaderboard tables during midday executive standups.',
      ],
      needs: [
        'Progressive disclosure: 7-bar sparklines on top, detailed tabular breakdowns below.',
        'Adaptive navigation that converts smoothly from desktop rail to mobile bottom tabs.',
      ],
      a11y: 'Prefers larger text scale (+30% subtext) for rapid readability while walking warehouse floors.',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of Engineering & Cloud Infrastructure',
      age: '38',
      experience: '12 years in distributed cloud platforms',
      device: 'Linux ThinkPad + 34" Curved Monitor',
      proficiency: 'Expert / Technical Architect',
      quote: "Design systems must be machine-readable. If tokens don't map cleanly to code variables, design and dev drift apart.",
      goals: [
        'Oversee multi-cloud asset storage quotas (Google Drive, Dropbox, OneDrive).',
        'Ensure 100% WCAG 2.2 AA regulatory compliance for enterprise clients.',
        'Integrate zero-friction Design Tokens directly into front-end build pipelines.',
      ],
      motivations: [
        'Preventing front-end regression bugs and reducing design-to-code cycle time.',
        'Eliminating accessibility lawsuits with bulletproof contrast ratios.',
      ],
      frustrations: [
        'Vague design specs without explicit state definitions for errors, loading, and offline.',
        'Inconsistent color hex values scattered across multiple design files.',
      ],
      behaviors: [
        'Audits design systems using automated CLI linters and headless browser tests.',
        'Monitors active seat licenses and cloud storage consumption rings daily.',
      ],
      needs: [
        'W3C-compliant semantic design tokens with predictable OKLCH variable naming.',
        'Universal 16-state component coverage guarantee for every widget.',
      ],
      a11y: 'Strict keyboard navigation tester; verifies screen-reader landmark boundaries.',
    },
  ]

  const journeyStages = [
    {
      stage: '1. Awareness',
      goal: 'Discover modern dashboard alternative',
      action: 'Searches for clean SaaS dashboard kit',
      thought: '"Current enterprise UI is too bloated and slow."',
      emotion: 'Neutral (3/5)',
      pain: 'Legacy tools overwhelmed with decorative chrome',
      opportunity: 'Lead with minimal aesthetics and 8pt spatial cadence',
    },
    {
      stage: '2. Consideration',
      goal: 'Evaluate architecture and design tokens',
      action: 'Explores live interactive documentation',
      thought: '"Does this system handle high data density cleanly?"',
      emotion: 'Positive (4/5)',
      pain: 'Uncertainty regarding dark mode contrast & mobile scaling',
      opportunity: 'Demonstrate dual navigation rail and OKLCH semantic tokens',
    },
    {
      stage: '3. Onboarding',
      goal: 'Deploy initial team workspace',
      action: 'Configures roles, currencies, and integrations',
      thought: '"Setup should take under 5 minutes."',
      emotion: 'Positive (4/5)',
      pain: 'Complex permission configuration wizards',
      opportunity: 'Provide sensible RBAC defaults and ⌘K quick setup',
    },
    {
      stage: '4. First Use',
      goal: 'Inspect 6 operational dashboard archetypes',
      action: 'Navigates through Banking, Analytics, and Booking',
      thought: '"Everything is visually coherent; data is front and center."',
      emotion: 'High (5/5)',
      pain: 'Information overload if all 6 archetypes open at once',
      opportunity: 'Highlight primary KPI trend badges and 7-bar sparklines',
    },
    {
      stage: '5. Core Task',
      goal: 'Execute rapid financial transfer & moderation',
      action: 'Drags quick transfer slider; approves reviews',
      thought: '"This slider is fast; I don’t need to click through 5 modals."',
      emotion: 'Delight (5/5)',
      pain: 'Fear of accidental high-value transfers',
      opportunity: 'Tactile slider threshold + optimistic 200ms confirmation slip',
    },
    {
      stage: '6. Success',
      goal: 'Verify transaction settlement',
      action: 'Receives instant green pulse slip and balance sync',
      thought: '"Transaction verified. Treasury ledger updated instantly."',
      emotion: 'High (5/5)',
      pain: 'Waiting for page refresh or ambiguous pending states',
      opportunity: 'Optimistic state commitment with non-blocking recovery toast',
    },
    {
      stage: '7. Retention',
      goal: 'Rely on Minimal UI as primary daily cockpit',
      action: 'Pins dashboard; utilizes ⌘K for continuous workflow',
      thought: '"My morning reconciliation takes 12 minutes instead of 45."',
      emotion: 'Satisfied (5/5)',
      pain: 'Shift fatigue during prolonged low-light audits',
      opportunity: 'Luminous slate dark mode with WCAG AAA typography scale',
    },
    {
      stage: '8. Advocacy',
      goal: 'Recommend system across enterprise business units',
      action: 'Invites 25+ colleagues; mandates design token handoff',
      thought: '"This is the benchmark for enterprise software."',
      emotion: 'Enthusiastic (5/5)',
      pain: 'Team onboarding friction across engineering and design',
      opportunity: 'Zero-ambiguity API contracts and Design Decision Records (DDRs)',
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Users className="size-3.5" />
            <span>02 — Research & Human Insight (Cohort n=42)</span>
          </div>
          <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            User Personas, Journey Maps & End-to-End Experience Topology
          </h3>
          <p className="figma-body1 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Empirical field research conducted across 42 enterprise operators uncovered the behavioral friction points
            that drove the foundational 2021 Minimal UI architecture. Here we document our archetypal personas,
            8-stage journey progression, and multi-tier experience topology.
          </p>
        </div>
      </div>

      {/* 2.3 Persona Templates (Rich Visual Cards) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Target className="size-4 text-primary" />
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground">
              2.3 Core Persona Templates (Quantitative & Strategic Archetypes)
            </h5>
          </div>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            Validated Profiles
          </Badge>
        </div>

        <div className="space-y-6">
          {personas.map((persona, idx) => (
            <div
              key={persona.name}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6"
            >
              {/* Persona Top Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-black text-lg shadow-sm">
                    {persona.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="figma-h4 text-[20px] lg:text-[24px] font-bold text-foreground">{persona.name}</h3>
                      <Badge variant="secondary" className="text-[11px] font-mono">
                        Persona 0{idx + 1}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">{persona.role} • Age {persona.age}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-muted text-foreground border border-border">
                    <strong>Device:</strong> {persona.device}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                    {persona.proficiency}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="rounded-xl border border-border bg-muted/20 p-4 text-xs italic text-foreground leading-relaxed border-l-4 border-l-primary">
                "{persona.quote}"
              </blockquote>

              {/* Persona Attributes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {/* Goals */}
                <div className="rounded-xl border border-border bg-muted/10 p-4 space-y-2">
                  <span className="font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 text-[11px] block">
                    Core Goals
                  </span>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {persona.goals.map((g, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-primary font-bold">✓</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Frustrations */}
                <div className="rounded-xl border border-border bg-muted/10 p-4 space-y-2">
                  <span className="font-bold uppercase tracking-wider text-red-500 text-[11px] block">
                    Key Frustrations
                  </span>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {persona.frustrations.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-red-500 font-bold">✕</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Needs & A11y */}
                <div className="rounded-xl border border-border bg-muted/10 p-4 space-y-2">
                  <span className="font-bold uppercase tracking-wider text-primary text-[11px] block">
                    Behaviors & Needs
                  </span>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {persona.needs.map((n, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-primary font-bold">•</span>
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-border/60 text-[11px] text-muted-foreground">
                    <strong>A11y:</strong> {persona.a11y}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2.5 User Journey Map */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Compass className="size-4 text-primary" />
          <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground">
            2.5 End-to-End User Journey Map (8-Stage Flowchart & Progression Table)
          </h5>
        </div>

        <MermaidDiagram
          chart={journeyChart}
          title="User Journey Stage Progression Flow"
          caption="Linear progression from product discovery to daily workflow retention and enterprise advocacy."
        />

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h6 className="figma-h6 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-semibold text-foreground">
            Stage-by-Stage Journey Analysis Matrix
          </h6>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border">
                <tr>
                  <th className="p-3">Stage</th>
                  <th className="p-3">User Goal</th>
                  <th className="p-3">Key Action</th>
                  <th className="p-3">User Mindset / Thought</th>
                  <th className="p-3">Friction / Pain Point</th>
                  <th className="p-3">System Opportunity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground">
                {journeyStages.map((j) => (
                  <tr key={j.stage} className="hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-mono font-bold text-primary whitespace-nowrap">{j.stage}</td>
                    <td className="p-3 font-semibold">{j.goal}</td>
                    <td className="p-3 text-muted-foreground">{j.action}</td>
                    <td className="p-3 italic text-muted-foreground">{j.thought}</td>
                    <td className="p-3 text-red-500 font-medium">{j.pain}</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400">{j.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2.6 Experience Map (Beyond UI) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Shield className="size-4 text-primary" />
          <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground">
            2.6 Holistic Experience Map (Frontstage, Channels & Backstage Architecture)
          </h5>
        </div>

        <MermaidDiagram
          chart={experienceMapChart}
          title="Holistic Multi-Layer Experience Topology"
          caption="Traces user actions from frontstage interactive surfaces through communication channels, backstage microservices, and database fail-safes."
        />

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h6 className="figma-h6 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-semibold text-foreground">
            Cross-Layer Architecture Mapping Matrix
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-primary uppercase text-[11px] block">1. Frontstage UI</span>
              <p className="text-muted-foreground leading-relaxed">
                6 core dashboard archetypes, switchable 280px left rail / topnav, tactile quick-transfer slider, and global ⌘K palette.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-primary uppercase text-[11px] block">2. Touchpoints & Alerts</span>
              <p className="text-muted-foreground leading-relaxed">
                Transactional settlement emails, push threshold warnings, optimistic inline feedback badges, and snackbar toasts.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-primary uppercase text-[11px] block">3. Backstage Services</span>
              <p className="text-muted-foreground leading-relaxed">
                High-speed GraphQL gateway, real-time banking settlement ledger, and multi-cloud storage bridge (Google Drive, Dropbox).
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-primary uppercase text-[11px] block">4. Data & Fail-Safes</span>
              <p className="text-muted-foreground leading-relaxed">
                PostgreSQL ACID transaction ledgers, Redis state caching, immutable audit signatures, and automatic rollback handlers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





