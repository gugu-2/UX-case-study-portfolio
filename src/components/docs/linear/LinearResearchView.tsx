import React from 'react'
import { Users, Search, Target, Heart, AlertTriangle, ArrowRight, CheckCircle2, MessageSquare, Compass, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const LinearResearchView: React.FC = () => {
  const journeyChart = `graph LR
    Awareness["1. Awareness<br/>(Jira Fatigue)"] --> Consideration["2. Consideration<br/>(Speed Eval)"]
    Consideration --> Onboarding["3. Onboarding<br/>(GitHub Sync)"]
    Onboarding --> FirstUse["4. First Use<br/>(Creating Issue in < 2s)"]
    FirstUse --> CoreTask["5. Core Task<br/>(Running Cycles)"]
    CoreTask --> Success["6. Success<br/>(Automated PR Linking)"]
    Success --> Retention["7. Retention<br/>(Keyboard-Only Routine)"]
    Retention --> Advocacy["8. Advocacy<br/>(Team-Wide Adoption)"]`

  const experienceMapChart = `graph TD
    User["Engineering Manager (Karri)"]
    
    subgraph Frontstage["Frontstage (UI & Interactions)"]
      Web["Linear Desktop App (Electron)"]
      Keyboard["Home-row Shortcuts (C, S, O)"]
      CmdK["Command Menu (⌘K)"]
    end

    subgraph Channels["Communications & Push Channels"]
      Slack["Rich Slack Unfurls"]
      Notifications["Non-intrusive Inbox"]
    end

    subgraph Backstage["Backstage (Data Engine)"]
      Sync["WebSocket Delta Sync"]
      Git["GitHub/GitLab Integrations"]
      GraphQL["GraphQL API"]
    end

    subgraph DataAI["Infrastructure"]
      LocalDB["Local SQLite (Wasm)"]
      RemoteDB["Cloud Postgres Cluster"]
    end

    User --> Frontstage
    Frontstage --> Channels
    Frontstage <--> Backstage
    Backstage <--> DataAI`

  const personas = [
    {
      name: 'Karri Saarinen',
      role: 'Staff Software Engineer',
      age: '33',
      experience: '10 years in High-Growth Startups',
      device: 'MacBook Pro M3 Max',
      proficiency: 'Power User (Keyboard Only)',
      quote: "Every second waiting for a Jira page to load is a second I lose my train of thought. Tools should move at the speed of my mind.",
      goals: [
        'Write code, not manage tickets.',
        'Have issues automatically update when PRs are merged.',
        'Never touch the mouse while navigating the issue tracker.',
      ],
      motivations: [
        'Staying in the flow state.',
        'Shipping features rapidly without bureaucratic overhead.',
      ],
      frustrations: [
        'Slow, bloated legacy project management tools.',
        'Mandatory fields and 5-step dropdowns just to create a task.',
        'Disconnect between code (Git) and issues.',
      ],
      behaviors: [
        'Uses the terminal and keyboard shortcuts exclusively.',
        'Types "C" to create, "S" to change status instantly.',
      ],
      needs: [
        'Sub-50ms latency on all actions.',
        'Offline capability for working on flights.',
      ],
      a11y: 'Requires dark mode to prevent eye strain; relies heavily on keyboard focus states.',
    },
    {
      name: 'Jori Lallo',
      role: 'Engineering Manager',
      age: '38',
      experience: '12 years managing engineering teams',
      device: 'iMac 27"',
      proficiency: 'Advanced',
      quote: "I need to know the health of the current cycle at a glance without having to harass my team for status updates.",
      goals: [
        'Plan and groom upcoming cycles (sprints).',
        'Monitor cycle burndown and scope creep.',
        'Ensure the team isn’t bottlenecked.',
      ],
      motivations: [
        'Predictable velocity and high team morale.',
        'Data-driven insights into engineering health.',
      ],
      frustrations: [
        'Stale tickets that devs forget to move to "Done".',
        'Complex query languages required to build simple reports.',
      ],
      behaviors: [
        'Reviews the "Active Cycle" board daily.',
        'Triages new bugs from the Triage inbox.',
      ],
      needs: [
        'Automated workflows (e.g., PR merge auto-closes issue).',
        'Clear visualizations of cycle progress.',
      ],
      a11y: 'Prefers clear typography and distinct iconography for issue types (Bug, Feature).',
    },
    {
      name: 'Tuomas Artman',
      role: 'Product Designer',
      age: '30',
      experience: '6 years in UI/UX',
      device: 'MacBook Pro 16" + Pro Display XDR',
      proficiency: 'Advanced',
      quote: "Tools for makers should be beautiful. The aesthetics of the software we use influence the quality of the software we build.",
      goals: [
        'Attach design specs and Figma links to engineering issues.',
        'Track UX debt and visual bugs.',
        'Collaborate with front-end engineers on implementation details.',
      ],
      motivations: [
        'Crafting pixel-perfect, highly polished user interfaces.',
        'Closing the gap between design and engineering.',
      ],
      frustrations: [
        'Clunky interfaces that look like they were built in 2005.',
        'Design feedback getting lost in massive comment threads.',
      ],
      behaviors: [
        'Embeds Figma files directly into issue descriptions.',
        'Uses custom views to track "Design Needed" issues.',
      ],
      needs: [
        'Rich text editor with markdown and embed support.',
        'Clean, minimalist interface that stays out of the way.',
      ],
      a11y: 'Highly sensitive to color contrast and spatial cadence (8pt grid).',
    },
  ]

  const journeyStages = [
    {
      stage: '1. Awareness',
      goal: 'Find a faster issue tracker',
      action: 'Sees a tweet praising Linear\'s speed',
      thought: '"Is it really that much faster than Jira?"',
      emotion: 'Curious (4/5)',
      pain: 'Waiting 10 seconds for a page load in current tool',
      opportunity: 'Highlight sub-50ms interactions and local-first architecture',
    },
    {
      stage: '2. Consideration',
      goal: 'Test the keyboard shortcuts',
      action: 'Signs up and opens the command menu (⌘K)',
      thought: '"Wow, this feels like an IDE, not a web app."',
      emotion: 'Delight (5/5)',
      pain: 'Mouse-heavy workflows in other tools',
      opportunity: 'Provide an interactive shortcut onboarding tutorial',
    },
    {
      stage: '3. Onboarding',
      goal: 'Connect GitHub and Slack',
      action: 'Installs the GitHub app and links repositories',
      thought: '"I want issues to close automatically when I merge PRs."',
      emotion: 'Determined (4/5)',
      pain: 'Manual status updates',
      opportunity: 'Frictionless OAuth integrations with auto-linking',
    },
    {
      stage: '4. First Use',
      goal: 'File a bug report quickly',
      action: 'Presses "C", types description, hits Cmd+Enter',
      thought: '"That took literally 2 seconds."',
      emotion: 'High (5/5)',
      pain: 'Mandatory fields slowing down issue creation',
      opportunity: 'Keep the issue creation modal minimal and instantly focused',
    },
    {
      stage: '5. Core Task',
      goal: 'Run a development cycle (sprint)',
      action: 'Moves issues to the "Active Cycle" and starts working',
      thought: '"The cycle automatically tracks our velocity. Nice."',
      emotion: 'Satisfied (5/5)',
      pain: 'Sprint planning meetings taking hours',
      opportunity: 'Automated rolling cycles that don\'t require manual start/stop',
    },
    {
      stage: '6. Success',
      goal: 'Close an issue via Git',
      action: 'Includes "Fixes ENG-123" in PR, merges, issue moves to Done',
      thought: '"I didn\'t even have to open the app to update the ticket."',
      emotion: 'High (5/5)',
      pain: 'Forgetting to update the tracker',
      opportunity: 'Deep, reliable two-way sync with version control',
    },
    {
      stage: '7. Retention',
      goal: 'Use Linear as the daily operating system for engineering',
      action: 'Downloads the native macOS app',
      thought: '"I live in this app alongside VS Code."',
      emotion: 'Satisfied (5/5)',
      pain: 'Browser tabs getting lost',
      opportunity: 'Provide native desktop apps with OS-level integrations',
    },
    {
      stage: '8. Advocacy',
      goal: 'Force the rest of the company to switch',
      action: 'Complains when other teams try to use legacy tools',
      thought: '"We can never go back to Jira."',
      emotion: 'Enthusiastic (5/5)',
      pain: 'Dealing with non-technical teams on other platforms',
      opportunity: 'Expand use cases (Triage, Helpdesk) to bring in other teams',
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 px-3 py-1 text-xs font-bold text-[#5E6AD2] dark:text-[#5E6AD2]">
            <Users className="size-3.5" />
            <span>02 — Research & Human Insight (Cohort n=50)</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            Linear User Personas, Journey Maps & End-to-End Experience
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Empirical field research conducted across high-performing engineering teams uncovered the behavioral friction points that drove Linear's sub-50ms local-first architecture. Here we document our archetypal personas, 8-stage journey progression, and multi-tier experience topology.
          </p>
        </div>
      </div>

      {/* 2.3 Persona Templates (Rich Visual Cards) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Target className="size-4 text-[#5E6AD2]" />
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
              2.3 Core Persona Templates (Engineering & Product Archetypes)
            </h2>
          </div>
          <Badge variant="outline" className="border-[#5E6AD2]/30 bg-[#5E6AD2]/10 text-[#5E6AD2] dark:text-[#5E6AD2] font-bold text-xs">
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
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#5E6AD2] text-white font-black text-lg shadow-sm">
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
                  <span className="px-2.5 py-1 rounded-lg bg-[#5E6AD2]/10 text-[#5E6AD2] dark:text-[#5E6AD2] border border-[#5E6AD2]/20 font-bold">
                    {persona.proficiency}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="rounded-xl border border-border bg-muted/20 p-4 text-xs italic text-foreground leading-relaxed border-l-4 border-l-[#5E6AD2]">
                "{persona.quote}"
              </blockquote>

              {/* Persona Attributes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {/* Goals */}
                <div className="rounded-xl border border-border bg-muted/10 p-4 space-y-2">
                  <span className="font-bold uppercase tracking-wider text-[#5E6AD2] dark:text-[#5E6AD2] text-[11px] block">
                    Core Goals
                  </span>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {persona.goals.map((g, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#5E6AD2] font-bold">✓</span>
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
                  <span className="font-bold uppercase tracking-wider text-[#5E6AD2] text-[11px] block">
                    Behaviors & Needs
                  </span>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {persona.needs.map((n, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#5E6AD2] font-bold">•</span>
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
          <Compass className="size-4 text-[#5E6AD2]" />
          <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
            2.5 End-to-End User Journey Map (8-Stage Flowchart & Progression Table)
          </h2>
        </div>

        <MermaidDiagram
          chart={journeyChart}
          title="Linear User Journey Stage Progression Flow"
          caption="Linear progression from Jira fatigue to daily keyboard-driven workflow retention and enterprise advocacy."
        />

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground">
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
                    <td className="p-3 font-mono font-bold text-[#5E6AD2] whitespace-nowrap">{j.stage}</td>
                    <td className="p-3 font-semibold">{j.goal}</td>
                    <td className="p-3 text-muted-foreground">{j.action}</td>
                    <td className="p-3 italic text-muted-foreground">{j.thought}</td>
                    <td className="p-3 text-red-500 font-medium">{j.pain}</td>
                    <td className="p-3 text-[#5E6AD2]">{j.opportunity}</td>
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
          <Shield className="size-4 text-[#5E6AD2]" />
          <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
            2.6 Holistic Experience Map (Frontstage, Channels & Backstage Architecture)
          </h2>
        </div>

        <MermaidDiagram
          chart={experienceMapChart}
          title="Linear Holistic Experience Topology"
          caption="Traces user actions from frontstage local-first clients through WebSocket sync layers to cloud Postgres."
        />

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-foreground">
            Cross-Layer Architecture Mapping Matrix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-[#5E6AD2] uppercase text-[11px] block">1. Frontstage UI</span>
              <p className="text-muted-foreground leading-relaxed">
                Electron desktop app and Web app, dominated by a global ⌘K palette, keyboard shortcuts, and dark-mode default aesthetics.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-[#5E6AD2] uppercase text-[11px] block">2. Touchpoints & Alerts</span>
              <p className="text-muted-foreground leading-relaxed">
                Quiet, non-intrusive Inbox design, rich Slack unfurls, and GitHub PR comments synced bi-directionally.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-[#5E6AD2] uppercase text-[11px] block">3. Backstage Services</span>
              <p className="text-muted-foreground leading-relaxed">
                GraphQL API for custom integrations, Git/VCS webhook listener for auto-updating states via PRs.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <span className="font-bold text-[#5E6AD2] uppercase text-[11px] block">4. Data & Fail-Safes</span>
              <p className="text-muted-foreground leading-relaxed">
                Local-first SQLite (Wasm) architecture for 0ms reads, optimistic mutations, background WebSocket delta sync.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
