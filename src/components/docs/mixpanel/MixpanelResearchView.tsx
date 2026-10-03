import React from 'react'
import { Users, Search, Target, Heart, AlertTriangle, ArrowRight, CheckCircle2, MessageSquare, Compass, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const MixpanelResearchView: React.FC = () => {
  const journeyChart = `graph LR
    Awareness["1. Awareness<br/>(Drop-off Problem)"] --> Consideration["2. Consideration<br/>(Event Tracking Eval)"]
    Consideration --> Onboarding["3. Onboarding<br/>(SDK Integration)"]
    Onboarding --> FirstUse["4. First Use<br/>(Building First Funnel)"]
    FirstUse --> CoreTask["5. Core Task<br/>(Segmenting by Cohort)"]
    CoreTask --> Success["6. Success<br/>(Finding the 'Aha' Moment)"]
    Success --> Retention["7. Retention<br/>(Daily KPI Dashboards)"]
    Retention --> Advocacy["8. Advocacy<br/>(Sharing Boards with Team)"]`

  const experienceMapChart = `graph TD
    User["Product Manager (Jessica)"]
    
    subgraph Frontstage["Frontstage (UI & Dashboards)"]
      Web["Mixpanel Web Interface"]
      QueryBuilder["Visual Query Builder"]
      Board["Interactive KPI Boards"]
    end

    subgraph Channels["Communications & Push Channels"]
      Email["Weekly Digest Emails"]
      Push["Anomaly Detection Alerts"]
    end

    subgraph Backstage["Backstage (Data Engine)"]
      Auth["SSO & Workspace Auth"]
      Arb["Arb Columnar Datastore"]
      Lexicon["Lexicon Data Dictionary"]
    end

    subgraph DataAI["Infrastructure"]
      Ingestion["High-Volume Ingestion API"]
      Kafka["Distributed Event Queue"]
    end

    User --> Frontstage
    Frontstage --> Channels
    Frontstage <--> Backstage
    Backstage <--> DataAI`

  const personas = [
    {
      name: 'Jessica Chen',
      role: 'Lead Product Manager',
      age: '34',
      experience: '7 years in B2B SaaS',
      device: 'MacBook Pro 14"',
      proficiency: 'Advanced Analytics User',
      quote: "Mixpanel lets me visually build a funnel in seconds and immediately slice it by user segments without asking engineers.",
      goals: [
        'Understand user drop-off during onboarding flows.',
        'Measure adoption rates of newly released features.',
        'Share actionable insights with the leadership team.',
      ],
      motivations: [
        'Making data-driven product decisions quickly.',
        'Proving the ROI of her team’s product initiatives.',
      ],
      frustrations: [
        'Writing complex SQL queries.',
        'Waiting weeks for the data engineering team to pull reports.',
        'Data silos between product and marketing teams.',
      ],
      behaviors: [
        'Checks core dashboards every morning.',
        'Frequently uses "Breakdown" to segment data by cohorts.',
      ],
      needs: [
        'Instant chart re-rendering when adding filters.',
        'Clean, exportable visualizations for pitch decks.',
      ],
      a11y: 'Requires high-contrast colors for categorical data visualizations (charts).',
    },
    {
      name: 'David Lee',
      role: 'Growth Marketer',
      age: '29',
      experience: '5 years in E-Commerce',
      device: 'MacBook Air + 27" Monitor',
      proficiency: 'Intermediate',
      quote: "The cohort retention matrix shows me exactly which campaigns bring users who actually stick around.",
      goals: [
        'Measure campaign ROI across paid channels.',
        'Track retention cohorts of acquired users over time.',
        'Identify high-LTV customer segments.',
      ],
      motivations: [
        'Optimizing marketing spend.',
        'Accelerating user acquisition loops.',
      ],
      frustrations: [
        'Attribution data is scattered across tools.',
        'Matching ad campaigns to long-term in-app behavior is difficult.',
      ],
      behaviors: [
        'Creates tracking links and monitors UTM parameters.',
        'Builds custom cohorts to export to ad platforms.',
      ],
      needs: [
        'Seamless integrations with ad networks.',
        'Clear cohort retention tables.',
      ],
      a11y: 'Relies on clear tooltip hover states to read exact data points on charts.',
    },
    {
      name: 'Elena Rostova',
      role: 'Data Analyst / Engineer',
      age: '31',
      experience: '8 years in Data Engineering',
      device: 'ThinkPad + Dual Monitors',
      proficiency: 'Expert / Admin',
      quote: "The Lexicon is a lifesaver. I can merge duplicate events so the whole company uses the same data dictionary.",
      goals: [
        'Ensure data integrity across all events.',
        'Govern event naming conventions (taxonomy).',
        'Maintain low latency on the ingestion pipeline.',
      ],
      motivations: [
        'Single source of truth for company data.',
        'Preventing "garbage in, garbage out".',
      ],
      frustrations: [
        'Messy, unorganized tracking plans from PMs.',
        'Duplicate event names across web and mobile platforms.',
      ],
      behaviors: [
        'Spends time in the Lexicon fixing bad event names.',
        'Sets up alerts for data anomalies or drops in ingestion.',
      ],
      needs: [
        'Powerful bulk-edit capabilities for properties.',
        'Detailed audit logs for workspace changes.',
      ],
      a11y: 'Keyboard-heavy user; navigates complex data tables via keyboard shortcuts.',
    },
  ]

  const journeyStages = [
    {
      stage: '1. Awareness',
      goal: 'Find a solution for product analytics',
      action: 'Searches for alternatives to Google Analytics',
      thought: '"I need to see exactly where users drop off in the app."',
      emotion: 'Frustrated (2/5)',
      pain: 'Current tools only track pageviews, not custom events',
      opportunity: 'Highlight event-based tracking architecture',
    },
    {
      stage: '2. Consideration',
      goal: 'Evaluate ease of use',
      action: 'Signs up for a free tier and plays with sample data',
      thought: '"Can I build a funnel without writing SQL?"',
      emotion: 'Curious (4/5)',
      pain: 'Steep learning curves in other BI tools',
      opportunity: 'Showcase the intuitive drag-and-drop query builder',
    },
    {
      stage: '3. Onboarding',
      goal: 'Implement SDK and send first event',
      action: 'Engineers install Mixpanel JS snippet',
      thought: '"I hope the docs are clear and integration is fast."',
      emotion: 'Determined (3/5)',
      pain: 'Waiting on dev resources to instrument events',
      opportunity: 'Provide clear developer docs and integration wizards',
    },
    {
      stage: '4. First Use',
      goal: 'Answer a pressing product question',
      action: 'Builds a 3-step sign-up funnel',
      thought: '"Wow, I can instantly see the conversion rate."',
      emotion: 'High (5/5)',
      pain: 'Fear of setting up the query wrong',
      opportunity: 'Provide contextual tooltips and query templates',
    },
    {
      stage: '5. Core Task',
      goal: 'Find the root cause of drop-off',
      action: 'Breaks down the funnel by Device Type and Region',
      thought: '"Mobile users in Europe are failing the payment step."',
      emotion: 'Delight (5/5)',
      pain: 'Data might take too long to load when segmented',
      opportunity: 'Ensure sub-second query execution on Arb datastore',
    },
    {
      stage: '6. Success',
      goal: 'Save and act on the insight',
      action: 'Pins the chart to a Board and shares it in Slack',
      thought: '"The team needs to see this immediately."',
      emotion: 'High (5/5)',
      pain: 'Static screenshots get outdated quickly',
      opportunity: 'Rich Slack unfurls and live dashboard links',
    },
    {
      stage: '7. Retention',
      goal: 'Monitor metrics over time',
      action: 'Sets up weekly email digests and anomaly alerts',
      thought: '"I want Mixpanel to tell me if something breaks."',
      emotion: 'Satisfied (5/5)',
      pain: 'Forgetting to check the dashboard daily',
      opportunity: 'Proactive alerting and scheduled delivery',
    },
    {
      stage: '8. Advocacy',
      goal: 'Standardize analytics across the org',
      action: 'Invites marketing and executive teams to workspace',
      thought: '"Everyone should use this instead of gut feelings."',
      emotion: 'Enthusiastic (5/5)',
      pain: 'Managing permissions for dozens of users',
      opportunity: 'Robust RBAC and SSO integrations',
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-600 dark:text-purple-400">
            <Users className="size-3.5" />
            <span>02 — Research & Human Insight (Cohort n=45)</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            Mixpanel User Personas, Journey Maps & End-to-End Experience
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Empirical field research conducted across product managers, marketers, and data engineers uncovered the behavioral friction points that drove Mixpanel's visual query architecture. Here we document our archetypal personas, 8-stage journey progression, and multi-tier experience topology.
          </p>
        </div>
      </div>

      {/* 2.3 Persona Templates (Rich Visual Cards) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Target className="size-4 text-purple-600" />
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
              2.3 Core Persona Templates (Analytics Archetypes)
            </h2>
          </div>
          <Badge variant="outline" className="border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-xs">
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
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#7856FF] text-white font-black text-lg shadow-sm">
                    {persona.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-foreground">{persona.name}</h3>
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
                  <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-bold">
                    {persona.proficiency}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="rounded-xl border border-border bg-muted/20 p-4 text-xs italic text-foreground leading-relaxed border-l-4 border-l-[#7856FF]">
                "{persona.quote}"
              </blockquote>

              {/* Persona Attributes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {/* Goals */}
                <div className="rounded-xl border border-border bg-muted/10 p-4 space-y-2">
                  <span className="font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 text-[11px] block">
                    Core Goals
                  </span>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {persona.goals.map((g, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#7856FF] font-bold">✓</span>
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
                  <span className="font-bold uppercase tracking-wider text-[#7856FF] text-[11px] block">
                    Behaviors & Needs
                  </span>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {persona.needs.map((n, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#7856FF] font-bold">•</span>
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
          <Compass className="size-4 text-[#7856FF]" />
          <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
            2.5 End-to-End User Journey Map (8-Stage Flowchart & Progression Table)
          </h2>
        </div>

        <MermaidDiagram
          chart={journeyChart}
          title="Mixpanel User Journey Stage Progression Flow"
          caption="Linear progression from discovering an analytics need to daily workflow retention and enterprise advocacy."
        />

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground tracking-tight">
            Stage-by-Stage Journey Analysis Matrix
          </h3>
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
                    <td className="p-3 font-mono font-bold text-[#7856FF] whitespace-nowrap">{j.stage}</td>
                    <td className="p-3 font-semibold">{j.goal}</td>
                    <td className="p-3 text-muted-foreground">{j.action}</td>
                    <td className="p-3 italic text-muted-foreground">{j.thought}</td>
                    <td className="p-3 text-red-500 font-medium">{j.pain}</td>
                    <td className="p-3 text-[#7856FF]">{j.opportunity}</td>
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
          <Shield className="size-4 text-[#7856FF]" />
          <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
            2.6 Holistic Experience Map (Frontstage, Channels & Backstage Architecture)
          </h2>
        </div>

        <MermaidDiagram
          chart={experienceMapChart}
          title="Mixpanel Holistic Experience Topology"
          caption="Traces user actions from frontstage interactive surfaces through communication channels, backstage columnar datastores, and ingestion queues."
        />

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground tracking-tight">
            Cross-Layer Architecture Mapping Matrix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-[#7856FF] uppercase text-[11px] block">1. Frontstage UI</span>
              <p className="text-muted-foreground leading-relaxed">
                Visual query builders, interactive Funnel / Retention / Flow reports, Dashboard pinning, and Lexicon dictionary.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-[#7856FF] uppercase text-[11px] block">2. Touchpoints & Alerts</span>
              <p className="text-muted-foreground leading-relaxed">
                Weekly digest emails, anomaly detection Slack alerts, push notifications for metric thresholds.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-[#7856FF] uppercase text-[11px] block">3. Backstage Services</span>
              <p className="text-muted-foreground leading-relaxed">
                Arb highly-optimized columnar datastore for sub-second aggregations, RBAC permissions, and Lexicon metadata syncing.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-[#7856FF] uppercase text-[11px] block">4. Data & Fail-Safes</span>
              <p className="text-muted-foreground leading-relaxed">
                Globally distributed Kafka event queues, dead-letter queues for malformed events, SOC2 compliant audit logging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
