import React from 'react'
import { Users, Search, Target, Heart, AlertTriangle, ArrowRight, CheckCircle2, MessageSquare, Compass, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const FrameResearchView: React.FC = () => {
  const journeyChart = `graph LR
    Awareness["1. Awareness<br/>(Tool Fatigue)"] --> Consideration["2. Consideration<br/>(All-in-One Eval)"]
    Consideration --> Onboarding["3. Onboarding<br/>(Importing Data)"]
    Onboarding --> FirstUse["4. First Use<br/>(Creating First Doc/Task)"]
    FirstUse --> CoreTask["5. Core Task<br/>(Team Collaboration on Canvas)"]
    CoreTask --> Success["6. Success<br/>(Unified Workflow Achieved)"]
    Success --> Retention["7. Retention<br/>(Daily OS Usage)"]
    Retention --> Advocacy["8. Advocacy<br/>(Deprecating Old Tools)"]`

  const experienceMapChart = `graph TD
    User["Team Lead (Alex)"]
    
    subgraph Frontstage["Frontstage (UI & Modules)"]
      Web["Frame OS Interface"]
      Modules["Docs, Tasks, Whiteboards"]
      Cmd["Omni-Search ⌘K"]
    end

    subgraph Channels["Communications & Push Channels"]
      Email["Summary Digests"]
      Push["Real-time @mentions"]
    end

    subgraph Backstage["Backstage (Data Engine)"]
      Auth["Unified Auth & RBAC"]
      Sync["Real-time Multiplayer Sync"]
      Graph["Knowledge Graph"]
    end

    subgraph DataAI["Infrastructure"]
      DB["Relational + Document DB"]
      AI["AI Assistant (Frame AI)"]
    end

    User --> Frontstage
    Frontstage --> Channels
    Frontstage <--> Backstage
    Backstage <--> DataAI`

  const personas = [
    {
      name: 'Alex Rivera',
      role: 'Startup Co-Founder',
      age: '32',
      experience: '5 years managing distributed teams',
      device: 'MacBook Pro 16"',
      proficiency: 'Power User',
      quote: "We were paying for Notion, Asana, and Miro. Frame replaced them all, and my team actually knows where to find things now.",
      goals: [
        'Centralize company knowledge and task management.',
        'Reduce software subscription costs.',
        'Improve cross-functional team alignment.',
      ],
      motivations: [
        'Building a productive, fast-moving team culture.',
        'Eliminating context switching between apps.',
      ],
      frustrations: [
        'Information gets lost across different SaaS tools.',
        'Team members asking "where is that document?"',
        'Paying $50/user/mo for overlapping tools.',
      ],
      behaviors: [
        'Starts the day by checking the unified Inbox.',
        'Creates interconnected docs and tasks during meetings.',
      ],
      needs: [
        'Seamless linking between tasks, docs, and goals.',
        'Fast, reliable search across all modules.',
      ],
      a11y: 'Requires highly readable typography for long-form reading in docs.',
    },
    {
      name: 'Jamie Lin',
      role: 'Product Designer',
      age: '27',
      experience: '4 years in UX/UI',
      device: 'iMac 27" + iPad',
      proficiency: 'Intermediate',
      quote: "Being able to embed a whiteboard directly inside a product spec doc is a game changer for my workflow.",
      goals: [
        'Collaborate on wireframes and user flows.',
        'Keep design specs closely tied to engineering tasks.',
        'Maintain a clean, organized personal workspace.',
      ],
      motivations: [
        'Producing high-quality, well-documented design work.',
        'Seamless collaboration with developers.',
      ],
      frustrations: [
        'Design feedback gets lost in Slack threads.',
        'Jira tickets lack visual context.',
      ],
      behaviors: [
        'Heavily uses the Whiteboard module for brainstorming.',
        'Tags developers directly inside doc comments.',
      ],
      needs: [
        'Infinite canvas capabilities with smooth panning.',
        'Rich text formatting in docs with image support.',
      ],
      a11y: 'Relies on visual hierarchy and color-coded tags to quickly parse task statuses.',
    },
    {
      name: 'Samir Patel',
      role: 'Engineering Lead',
      age: '35',
      experience: '10 years in Full Stack Development',
      device: 'Linux Desktop + Ultrawide',
      proficiency: 'Expert',
      quote: "I love that Frame has an API and two-way sync with GitHub. It's an all-in-one tool that actually respects developer workflows.",
      goals: [
        'Track sprint progress and velocity.',
        'Manage bug reports and feature requests.',
        'Keep technical documentation up to date.',
      ],
      motivations: [
        'Shipping features on time with high quality.',
        'Keeping the engineering team focused and unblocked.',
      ],
      frustrations: [
        'Slow, bloated project management tools.',
        'Having to manually update statuses in multiple places.',
      ],
      behaviors: [
        'Uses keyboard shortcuts for almost everything.',
        'Integrates Frame with CI/CD pipelines and GitHub.',
      ],
      needs: [
        'Markdown support in docs and task descriptions.',
        'Automated workflows and issue syncing.',
      ],
      a11y: 'Prefers dark mode to reduce eye strain during long coding sessions.',
    },
  ]

  const journeyStages = [
    {
      stage: '1. Awareness',
      goal: 'Find a way to consolidate tools',
      action: 'Searches for "Notion + Linear alternative"',
      thought: '"We have too many subscriptions and data silos."',
      emotion: 'Frustrated (2/5)',
      pain: 'Context switching and scattered information',
      opportunity: 'Position Frame as the unified Connected OS',
    },
    {
      stage: '2. Consideration',
      goal: 'Evaluate if Frame can replace existing stack',
      action: 'Watches demo videos of linked Docs and Tasks',
      thought: '"Can it really do what Asana AND Notion do?"',
      emotion: 'Skeptical (3/5)',
      pain: 'Fear of "jack of all trades, master of none"',
      opportunity: 'Highlight deep integration and bidirectional linking',
    },
    {
      stage: '3. Onboarding',
      goal: 'Migrate data and invite team',
      action: 'Uses the Notion/Jira import tool',
      thought: '"I hope this migration isn’t a nightmare."',
      emotion: 'Anxious (3/5)',
      pain: 'Moving years of legacy data is daunting',
      opportunity: 'Provide robust, 1-click importers with preview',
    },
    {
      stage: '4. First Use',
      goal: 'Create a project and write a spec',
      action: 'Creates a Doc and links it to a new Task board',
      thought: '"Wow, pressing @ lets me link a task instantly inside the doc."',
      emotion: 'Delight (5/5)',
      pain: 'Learning a new UI paradigm',
      opportunity: 'Ensure standard shortcuts (/, @, ⌘K) work identically to competitors',
    },
    {
      stage: '5. Core Task',
      goal: 'Run a sprint or project entirely in Frame',
      action: 'Team collaborates on a whiteboard, turns stickies into tasks',
      thought: '"We didn\'t have to open Miro once today."',
      emotion: 'High (5/5)',
      pain: 'Whiteboard might lag with too many objects',
      opportunity: 'Optimize WebGL canvas for performance',
    },
    {
      stage: '6. Success',
      goal: 'Achieve team alignment',
      action: 'Reviews the unified Inbox to catch up on all @mentions',
      thought: '"I know exactly what everyone is working on."',
      emotion: 'High (5/5)',
      pain: 'Inbox can get noisy',
      opportunity: 'Smart filtering and AI summarization of notifications',
    },
    {
      stage: '7. Retention',
      goal: 'Use Frame as the default OS for work',
      action: 'Sets Frame as the new tab page/desktop startup app',
      thought: '"This is where my work lives now."',
      emotion: 'Satisfied (5/5)',
      pain: 'Offline access needed for travel',
      opportunity: 'Provide robust offline mode with local-first sync',
    },
    {
      stage: '8. Advocacy',
      goal: 'Evangelize to other companies/founders',
      action: 'Shares public docs and templates',
      thought: '"Every startup needs to use this to save money and time."',
      emotion: 'Enthusiastic (5/5)',
      pain: 'Explaining it to people used to legacy tools',
      opportunity: 'Create viral loops via shared public links',
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-500/30 bg-zinc-500/10 px-3 py-1 text-xs font-bold text-zinc-600 dark:text-zinc-400">
            <Users className="size-3.5" />
            <span>02 — Research & Human Insight (Cohort n=38)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            Frame User Personas, Journey Maps & End-to-End Experience
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Empirical field research conducted across startup founders, designers, and engineers uncovered the behavioral friction points that drove Frame's unified all-in-one architecture. Here we document our archetypal personas, 8-stage journey progression, and multi-tier experience topology.
          </p>
        </div>
      </div>

      {/* 2.3 Persona Templates (Rich Visual Cards) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Target className="size-4 text-foreground" />
            <h2 className="text-lg font-bold text-foreground">
              2.3 Core Persona Templates (Collaboration Archetypes)
            </h2>
          </div>
          <Badge variant="outline" className="border-zinc-500/30 bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 font-bold text-xs">
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
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-foreground text-background font-black text-lg shadow-sm">
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
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-500/20 font-bold">
                    {persona.proficiency}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="rounded-xl border border-border bg-muted/20 p-4 text-xs italic text-foreground leading-relaxed border-l-4 border-l-foreground">
                "{persona.quote}"
              </blockquote>

              {/* Persona Attributes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {/* Goals */}
                <div className="rounded-xl border border-border bg-muted/10 p-4 space-y-2">
                  <span className="font-bold uppercase tracking-wider text-foreground text-[11px] block">
                    Core Goals
                  </span>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {persona.goals.map((g, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-foreground font-bold">✓</span>
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
                  <span className="font-bold uppercase tracking-wider text-foreground text-[11px] block">
                    Behaviors & Needs
                  </span>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {persona.needs.map((n, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-foreground font-bold">•</span>
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
          <Compass className="size-4 text-foreground" />
          <h2 className="text-lg font-bold text-foreground">
            2.5 End-to-End User Journey Map (8-Stage Flowchart & Progression Table)
          </h2>
        </div>

        <MermaidDiagram
          chart={journeyChart}
          title="Frame User Journey Stage Progression Flow"
          caption="Linear progression from discovering tool fatigue to daily workflow retention and enterprise advocacy."
        />

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-foreground">
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
                    <td className="p-3 font-mono font-bold text-foreground whitespace-nowrap">{j.stage}</td>
                    <td className="p-3 font-semibold">{j.goal}</td>
                    <td className="p-3 text-muted-foreground">{j.action}</td>
                    <td className="p-3 italic text-muted-foreground">{j.thought}</td>
                    <td className="p-3 text-red-500 font-medium">{j.pain}</td>
                    <td className="p-3 text-foreground">{j.opportunity}</td>
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
          <Shield className="size-4 text-foreground" />
          <h2 className="text-lg font-bold text-foreground">
            2.6 Holistic Experience Map (Frontstage, Channels & Backstage Architecture)
          </h2>
        </div>

        <MermaidDiagram
          chart={experienceMapChart}
          title="Frame Holistic Experience Topology"
          caption="Traces user actions from frontstage interactive surfaces through communication channels, backstage sync layers, and AI integrations."
        />

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-foreground">
            Cross-Layer Architecture Mapping Matrix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-foreground uppercase text-[11px] block">1. Frontstage UI</span>
              <p className="text-muted-foreground leading-relaxed">
                Unified workspace integrating Documents, Task Kanban Boards, Whiteboards, and a global ⌘K Omni-Search palette.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-foreground uppercase text-[11px] block">2. Touchpoints & Alerts</span>
              <p className="text-muted-foreground leading-relaxed">
                Aggregated unified Inbox, real-time in-app @mentions, and daily email summaries for offline team members.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-foreground uppercase text-[11px] block">3. Backstage Services</span>
              <p className="text-muted-foreground leading-relaxed">
                CRDT-based multiplayer real-time sync engine, Knowledge Graph mapping connections between entities, Unified Auth.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-foreground uppercase text-[11px] block">4. Data & Fail-Safes</span>
              <p className="text-muted-foreground leading-relaxed">
                Hybrid Relational & Document Databases, AI vector embeddings for semantic search, regular automated backups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
