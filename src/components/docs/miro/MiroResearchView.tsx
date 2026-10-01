import React from 'react'
import { Users, Search, Target, Heart, AlertTriangle, ArrowRight, CheckCircle2, MessageSquare, Compass, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const MiroResearchView: React.FC = () => {
  const journeyChart = `graph LR
    Awareness["1. Awareness<br/>(Remote Brainstorming)"] --> Consideration["2. Consideration<br/>(Testing Canvas)"]
    Consideration --> Onboarding["3. Onboarding<br/>(Inviting Team)"]
    Onboarding --> FirstUse["4. First Use<br/>(Sticky Notes)"]
    FirstUse --> CoreTask["5. Core Task<br/>(Live Workshop)"]
    CoreTask --> Success["6. Success<br/>(Synthesis & Alignment)"]
    Success --> Retention["7. Retention<br/>(Async Diagrams)"]
    Retention --> Advocacy["8. Advocacy<br/>(Enterprise Rollout)"]`

  const experienceMapChart = `graph TD
    User["UX Facilitator (Maria)"]
    
    subgraph Frontstage["Frontstage (UI & Canvas)"]
      Web["WebGL Infinite Canvas"]
      Toolbar["Contextual Toolbars"]
      Cursors["Multiplayer Live Cursors"]
    end

    subgraph Channels["Communications & Push Channels"]
      Email["Board Invites & Comments"]
      Video["In-App Video Chat"]
    end

    subgraph Backstage["Backstage (Data Engine)"]
      Auth["Enterprise SSO"]
      Sync["WebSocket Canvas Sync"]
      Export["PDF/Image Render Engine"]
    end

    subgraph DataAI["Infrastructure"]
      DB["Spatial Indexing DB"]
      Cloud["CDN for Image Assets"]
    end

    User --> Frontstage
    Frontstage --> Channels
    Frontstage <--> Backstage
    Backstage <--> DataAI`

  const personas = [
    {
      name: 'Maria Gonzalez',
      role: 'Lead UX Researcher & Facilitator',
      age: '36',
      experience: '8 years in Design Thinking',
      device: 'MacBook Pro 14" + Wacom Tablet',
      proficiency: 'Power User (Facilitator)',
      quote: "When running a workshop with 20 people remotely, the tool has to be completely invisible. If they struggle with stickies, the brainstorm fails.",
      goals: [
        'Run remote design sprints and brainstorming sessions.',
        'Synthesize hundreds of qualitative research data points.',
        'Keep non-technical stakeholders engaged.',
      ],
      motivations: [
        'Creating a sense of "being in the same room".',
        'Extracting actionable insights from chaotic brainstorms.',
      ],
      frustrations: [
        'Users getting lost on the infinite canvas.',
        'Accidentally moving or deleting locked background frames.',
        'Performance lag when too many images are uploaded.',
      ],
      behaviors: [
        'Uses "Bring Everyone to Me" constantly during workshops.',
        'Relies heavily on bulk-add sticky note features.',
      ],
      needs: [
        'Robust facilitator controls (timers, voting, attention).',
        'Fluid zoom and pan navigation without stutter.',
      ],
      a11y: 'Needs clear visual boundaries (Frames) to help screen readers and keyboard users navigate the canvas.',
    },
    {
      name: 'Tom Reynolds',
      role: 'Agile Coach / Scrum Master',
      age: '42',
      experience: '15 years in Agile Delivery',
      device: 'Windows ThinkPad + Mouse',
      proficiency: 'Advanced',
      quote: "I need to replicate the physical Kanban board we used to have in the office. It needs to feel real, messy, and collaborative.",
      goals: [
        'Facilitate daily standups and sprint retrospectives.',
        'Map out complex dependencies (PI Planning).',
        'Track team sentiment over time.',
      ],
      motivations: [
        'Fostering team autonomy and transparency.',
        'Making abstract processes highly visual.',
      ],
      frustrations: [
        'Jira is too rigid for brainstorming.',
        'Syncing sticky notes back to Jira tickets is manual and tedious.',
      ],
      behaviors: [
        'Uses templates heavily (Retrospective, Kanban).',
        'Adds emojis and reaction stickers to team feedback.',
      ],
      needs: [
        'Two-way sync with Jira/Azure DevOps.',
        'Easy template creation and sharing.',
      ],
      a11y: 'Requires high-contrast cursors to see where 15 different team members are pointing.',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Enterprise Solutions Architect',
      age: '39',
      experience: '12 years in Cloud Architecture',
      device: 'Dual 27" Monitors (Windows)',
      proficiency: 'Intermediate (Consumer of boards)',
      quote: "I use Miro to draw cloud architecture diagrams. It's much faster than Visio, but I need standard AWS/Azure shape libraries.",
      goals: [
        'Create technical architecture diagrams for client pitches.',
        'Map out complex data flows and API integrations.',
        'Collaborate with developers on system design.',
      ],
      motivations: [
        'Communicating complex technical concepts simply.',
        'Getting rapid sign-off from stakeholders.',
      ],
      frustrations: [
        'Drawing straight connecting lines that snap properly is sometimes finicky.',
        'Lack of strict grid alignment compared to dedicated diagramming tools.',
      ],
      behaviors: [
        'Uses the shapes library and connection lines extensively.',
        'Exports high-res PDFs to include in technical documentation.',
      ],
      needs: [
        'Smart snapping and alignment guides.',
        'Comprehensive technical icon libraries.',
      ],
      a11y: 'Relies on text labels for shapes; needs accessible text contrast against colored backgrounds.',
    },
  ]

  const journeyStages = [
    {
      stage: '1. Awareness',
      goal: 'Find a virtual whiteboard for remote work',
      action: 'Searches for "online sticky notes"',
      thought: '"How do we run our quarterly planning remotely?"',
      emotion: 'Anxious (3/5)',
      pain: 'Loss of the physical office whiteboard',
      opportunity: 'Highlight multiplayer collaboration and templates',
    },
    {
      stage: '2. Consideration',
      goal: 'Test if it’s easy for non-tech users',
      action: 'Creates a free board and tests adding a sticky',
      thought: '"If the CEO can’t use it, we can’t buy it."',
      emotion: 'Curious (4/5)',
      pain: 'Complex UI in traditional diagramming tools',
      opportunity: 'Ensure day-1 onboarding is incredibly simple',
    },
    {
      stage: '3. Onboarding',
      goal: 'Set up the first team workshop',
      action: 'Selects a Retrospective template and invites the team via link',
      thought: '"I hope they don’t have to create accounts just to view this."',
      emotion: 'Hopeful (4/5)',
      pain: 'Login walls blocking quick collaboration',
      opportunity: 'Guest access links with zero friction',
    },
    {
      stage: '4. First Use',
      goal: 'Participate in the brainstorm',
      action: 'Team joins, sees cursors flying around, adds stickies',
      thought: '"Whoa, seeing everyone’s cursor is so cool!"',
      emotion: 'Delight (5/5)',
      pain: 'Chaos and overlapping sticky notes',
      opportunity: 'Joyful animations and real-time cursor smoothing',
    },
    {
      stage: '5. Core Task',
      goal: 'Synthesize the ideas',
      action: 'Facilitator groups stickies and starts a voting session',
      thought: '"Let’s cluster these into themes."',
      emotion: 'Focused (4/5)',
      pain: 'Manually organizing 200 stickies takes forever',
      opportunity: 'Provide AI clustering and bulk alignment tools',
    },
    {
      stage: '6. Success',
      goal: 'Reach a decision',
      action: 'Voting ends, clear winners emerge',
      thought: '"We actually aligned faster than we would have in person."',
      emotion: 'High (5/5)',
      pain: 'Losing track of the action items',
      opportunity: 'Convert sticky notes directly into Jira tasks',
    },
    {
      stage: '7. Retention',
      goal: 'Use it for async work',
      action: 'Architect creates a system diagram for documentation',
      thought: '"It’s great for live meetings, but also just for my own thinking."',
      emotion: 'Satisfied (5/5)',
      pain: 'Finding old boards in a messy dashboard',
      opportunity: 'Robust folder organization and search',
    },
    {
      stage: '8. Advocacy',
      goal: 'Roll out to the entire enterprise',
      action: 'IT approves Miro for the whole 5,000 person company',
      thought: '"This is the standard for visual collaboration now."',
      emotion: 'Enthusiastic (5/5)',
      pain: 'Security and data governance concerns',
      opportunity: 'Enterprise admin controls and SSO',
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD02F]/50 bg-[#FFD02F]/10 px-3 py-1 text-xs font-bold text-yellow-600 dark:text-yellow-500">
            <Users className="size-3.5" />
            <span>02 — Research & Human Insight (Cohort n=60)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            Miro User Personas, Journey Maps & End-to-End Experience
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Empirical field research conducted across Agile coaches, UX researchers, and enterprise architects uncovered the behavioral friction points that drove Miro's WebGL infinite canvas architecture. Here we document our archetypal personas, 8-stage journey progression, and multi-tier experience topology.
          </p>
        </div>
      </div>

      {/* 2.3 Persona Templates (Rich Visual Cards) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Target className="size-4 text-yellow-500" />
            <h2 className="text-lg font-bold text-foreground">
              2.3 Core Persona Templates (Visual Collaboration Archetypes)
            </h2>
          </div>
          <Badge variant="outline" className="border-[#FFD02F]/30 bg-[#FFD02F]/10 text-yellow-600 dark:text-yellow-500 font-bold text-xs">
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
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#FFD02F] text-black font-black text-lg shadow-sm">
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
                  <span className="px-2.5 py-1 rounded-lg bg-[#FFD02F]/10 text-yellow-600 dark:text-yellow-500 border border-[#FFD02F]/30 font-bold">
                    {persona.proficiency}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="rounded-xl border border-border bg-muted/20 p-4 text-xs italic text-foreground leading-relaxed border-l-4 border-l-[#FFD02F]">
                "{persona.quote}"
              </blockquote>

              {/* Persona Attributes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {/* Goals */}
                <div className="rounded-xl border border-border bg-muted/10 p-4 space-y-2">
                  <span className="font-bold uppercase tracking-wider text-yellow-600 dark:text-yellow-500 text-[11px] block">
                    Core Goals
                  </span>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {persona.goals.map((g, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-yellow-600 font-bold">✓</span>
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
                  <span className="font-bold uppercase tracking-wider text-yellow-600 dark:text-yellow-500 text-[11px] block">
                    Behaviors & Needs
                  </span>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {persona.needs.map((n, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-yellow-600 font-bold">•</span>
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
          <Compass className="size-4 text-yellow-500" />
          <h2 className="text-lg font-bold text-foreground">
            2.5 End-to-End User Journey Map (8-Stage Flowchart & Progression Table)
          </h2>
        </div>

        <MermaidDiagram
          chart={journeyChart}
          title="Miro User Journey Stage Progression Flow"
          caption="Linear progression from discovering remote brainstorming needs to enterprise-wide visual collaboration adoption."
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
                    <td className="p-3 font-mono font-bold text-yellow-600 dark:text-yellow-500 whitespace-nowrap">{j.stage}</td>
                    <td className="p-3 font-semibold">{j.goal}</td>
                    <td className="p-3 text-muted-foreground">{j.action}</td>
                    <td className="p-3 italic text-muted-foreground">{j.thought}</td>
                    <td className="p-3 text-red-500 font-medium">{j.pain}</td>
                    <td className="p-3 text-yellow-600 dark:text-yellow-500">{j.opportunity}</td>
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
          <Shield className="size-4 text-yellow-500" />
          <h2 className="text-lg font-bold text-foreground">
            2.6 Holistic Experience Map (Frontstage, Channels & Backstage Architecture)
          </h2>
        </div>

        <MermaidDiagram
          chart={experienceMapChart}
          title="Miro Holistic Experience Topology"
          caption="Traces user actions from frontstage infinite canvas through WebSockets for multiplayer cursors."
        />

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-foreground">
            Cross-Layer Architecture Mapping Matrix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-yellow-600 dark:text-yellow-500 uppercase text-[11px] block">1. Frontstage UI</span>
              <p className="text-muted-foreground leading-relaxed">
                WebGL infinite canvas, contextual floating toolbars, live cursors with names, sticky notes, and drawing tools.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-yellow-600 dark:text-yellow-500 uppercase text-[11px] block">2. Touchpoints & Alerts</span>
              <p className="text-muted-foreground leading-relaxed">
                Email invitations, @mentions on board comments, in-app timer sounds, and voting session notifications.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-yellow-600 dark:text-yellow-500 uppercase text-[11px] block">3. Backstage Services</span>
              <p className="text-muted-foreground leading-relaxed">
                WebSocket connection pool for real-time cursor broadcasting, PDF/Image export rendering microservice.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-yellow-600 dark:text-yellow-500 uppercase text-[11px] block">4. Data & Fail-Safes</span>
              <p className="text-muted-foreground leading-relaxed">
                Spatial indexing database (to only render objects in viewport), global CDN for uploaded images and assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
