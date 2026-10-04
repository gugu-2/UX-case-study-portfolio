import React from "react"
import {
  Sparkles,
  Compass,
  CheckCircle2,
  Layers,
  Cpu,
  Database,
  Globe,
  Smartphone,
  ShieldCheck,
  Zap,
  Command,
  GitBranch,
  Workflow,
  Eye,
  Terminal,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"

export const LinearVisionView: React.FC = () => {
  const ecosystemChart = `graph TD
    Engineers["Software Engineers & Tech Leads<br/>(Alex Chen, Principal Devs)"]
    Designers["Product Designers & UX Architects<br/>(Elena Rostova, Design Systems)"]
    Leadership["VPs of Engineering & PMs<br/>(Marcus Vance, Sprint Stewards)"]
    
    subgraph Clients["Sub-50ms Universal Client Layer"]
      Desktop["macOS & Windows Native Apps<br/>(Electron + Native GPU Engine)"]
      Web["Linear Web App<br/>(Optimistic React + SQLite Wasm)"]
      Mobile["iOS & Android Companion Apps<br/>(Offline Cache + Quick Triage)"]
    end
    
    subgraph CoreEngine["Linear Sync & Local-First Engine"]
      LocalDB["Client-Side IndexedDB / SQLite<br/>(Sub-50ms Instant Mutations)"]
      SyncSocket["Real-Time WebSocket Sync Protocol<br/>(Conflict-Free Delta Resolution)"]
      StateGraph["Deterministic Finite State Machine<br/>(Triage, Todo, In Progress, Done)"]
    end
    
    subgraph Ecosystem["14 Master Workflow Archetypes (L01–L14)"]
      Onboarding["L01–L04: Domain, Theme & Ergonomics"]
      VCS["L05 & L14: Git Branch Auto-Link & Webhooks"]
      Issues["L07–L10: Backlog, Triage & 'C' Creation"]
      Projects["L11 & L12: Milestones & Global ⌘K Menu"]
      Directory["L13: Integrations (Slack, GitHub, Figma)"]
    end
    
    subgraph Backstage["Backstage Cloud Services & External Integrations"]
      GraphQL["Linear High-Throughput GraphQL API"]
      GitHub["GitHub / GitLab PR Status Engine"]
      Figma["Figma Live Embed & Dev Mode Sync"]
      Slack["Slack Real-Time Notifications Hub"]
    end
    
    subgraph Outcomes["Productivity & UX Outcomes"]
      Speed["2.4s Issue Creation (vs 18.2s Jira)"]
      Keyboard["98.2% Unassisted Keyboard Traversal"]
      SUS["91.4 / 100 SUS Usability (Grade A+)"]
      Flow["Zero Spinner Friction & Flow State"]
    end
    
    Engineers <--> Clients
    Designers <--> Clients
    Leadership <--> Clients
    Clients <--> CoreEngine
    CoreEngine --> Ecosystem
    Ecosystem <--> Backstage
    Ecosystem --> Outcomes`

  const journeyChart = `flowchart LR
    Stage1["1. Morning Focus<br/><b>Trigger:</b> Standup / Personal Queue<br/><b>Action:</b> Hit 'G then I' for Inbox<br/><b>Emotion:</b> 4.7/5 Calm"] --> Stage2["2. Rapid Issue Capture<br/><b>Trigger:</b> Bug found in PR<br/><b>Action:</b> Tap 'C' shortcut<br/><b>Latency:</b> <16ms modal<br/><b>Emotion:</b> 4.9/5 Fluid"]
    Stage2 --> Stage3["3. Status Triage<br/><b>Trigger:</b> Cycle assignment<br/><b>Action:</b> Tap 'S' then 'In Progress'<br/><b>Key:</b> 'A' to self-assign<br/><b>Emotion:</b> 4.8/5 In Control"]
    Stage3 --> Stage4["4. Git Work & PR Sync<br/><b>Action:</b> git checkout -b alex/eng-412<br/><b>System:</b> Auto-links PR to issue<br/><b>Emotion:</b> 5.0/5 Effortless"]
    Stage4 --> Stage5["5. Merge & Auto-Close<br/><b>Action:</b> GitHub PR merged to main<br/><b>System:</b> Auto-moves issue to Done<br/><b>Outcome:</b> Zero manual backlog tax"]`

  const experienceMapChart = `flowchart TD
    subgraph Frontstage["Frontstage: User Interaction Touchpoints"]
      F1["User taps shortcut 'C' in any view"]
      F2["Typing issue title & markdown description"]
      F3["Tapping shortcut 'S' for Status, 'P' for Priority"]
      F4["Hitting ⌘+Enter to submit"]
      F5["Developer checks out branch 'eng-104-fix-auth'"]
      F6["Opening GitHub Pull Request"]
    end

    subgraph ClientEngine["Client Sync Engine (Sub-50ms)"]
      C1["Local state immediately updates UI DOM (0ms perceived lag)"]
      C2["Offline SQLite database writes change locally"]
      C3["WebSocket client frames mutation delta"]
    end

    subgraph BackstageServices["Backstage Services & Integrations"]
      B1["Linear GraphQL gateway receives mutation"]
      B2["PostgreSQL transactional ledger updates"]
      B3["GitHub Webhook listener detects branch & PR tag"]
      B4["Auto-transitions Linear issue status to 'In Review'"]
      B5["Real-time WebSocket broadcast pushes update to entire team"]
    end

    F1 --> C1
    F2 --> C1
    F3 --> C1
    F4 --> C1
    C1 --> C2
    C2 --> C3
    C3 --> B1
    B1 --> B2
    F5 --> B3
    F6 --> B3
    B3 --> B4
    B4 --> B5
    B5 --> Frontstage`

  const principlesList = [
    {
      num: "01",
      title: "Sub-50ms Perceived Latency",
      meaning: "Software should feel as fast as thought; no spinner wheels should block human motor action.",
      implication:
        "Every write operation updates local SQLite/IndexedDB state instantaneously before broadcasting over WebSockets. Perceived latency is under 16ms.",
    },
    {
      num: "02",
      title: "Keyboard-First Ergonomics",
      meaning: "Every core workflow can be executed entirely from the home row without reaching for a pointing device.",
      implication:
        "Single-key shortcuts ('C' for create, 'S' for status, 'P' for priority, 'A' for assignee, '⌘K' for command palette) achieve 98.2% keyboard traversal.",
    },
    {
      num: "03",
      title: "Focus & Cognitive Serenity",
      meaning: "Interfaces must eliminate visual noise and reduce administrative tax on engineers.",
      implication:
        "Obsidian dark mode (#0F1015), clean status dots, subtle 1px dividers, and no redundant metadata chips preserve sustained developer flow state.",
    },
    {
      num: "04",
      title: "Git-Native Automation",
      meaning: "Manual issue status maintenance is waste; code commits should drive project state automatically.",
      implication:
        "Branch creation automatically claims issues. PR creation sets status to 'In Review'. PR merge automatically moves issues to 'Done'.",
    },
    {
      num: "05",
      title: "Cycles Over Sprints",
      meaning: "Sprints introduce artificial cliff-edge stress and ceremony. Continuous cycles provide predictable momentum.",
      implication:
        "Linear cycles run on automated 1-to-2 week cadences without heavy sprint planning overhead, auto-rolling unfinished work with zero guilt.",
    },
    {
      num: "06",
      title: "Opinionated Workflows",
      meaning: "Configurable chaos creates fragile processes. Provide the optimal software delivery defaults out of the box.",
      implication:
        "Standardized workflow states (Triage, Backlog, Todo, In Progress, In Review, Done, Canceled) enforce team alignment without tedious Jira custom workflows.",
    },
  ]

  const personas = [
    {
      role: "Staff Product Engineer",
      name: "Alex Chen",
      age: "31",
      company: "Series B Scaleup (65 Engineers)",
      goals: "Ship reliable features rapidly, avoid context switching, maintain unbroken flow state while coding.",
      frustrations:
        "Sluggish legacy Jira dashboards taking 20s to load, clicking through 5 dropdown menus to log a bug, having to manually update ticket states after merging PRs.",
      linearQuote:
        "Linear is the only issue tracker that doesn't make me feel like an administrative clerk. I hit 'C', type the title, press ⌘+Enter, and get straight back to my IDE.",
      primaryShortcuts: "C (Create), S (Status), ⌘K (Command Menu), G then I (Inbox)",
      avatarColor: "bg-indigo-600",
    },
    {
      role: "Lead Product Designer",
      name: "Elena Rostova",
      age: "29",
      company: "Product Studio (Design Systems Lead)",
      goals: "Maintain pixel-perfect UI fidelity, embed live Figma frames into specs, inspect developer handoff tickets easily.",
      frustrations:
        "Tickets lacking visual context, broken image attachments, harsh white enterprise UIs that cause severe eye strain during evening reviews.",
      linearQuote:
        "The obsidian dark mode is gorgeous, and pasting a Figma link embeds live frames directly in the card. Our design-eng sync has never been this smooth.",
      primaryShortcuts: "L (Labels), P (Projects), Space (Quick Look), Esc (Dismiss)",
      avatarColor: "bg-purple-600",
    },
    {
      role: "VP of Engineering",
      name: "Marcus Vance",
      age: "42",
      company: "High-Growth FinTech (180 Team Members)",
      goals: "Predictable delivery velocity, cross-team milestone visibility, zero administrative backlog grooming overhead.",
      frustrations:
        "Endless sprint planning meetings, unmaintained backlogs with 2,000 stale tickets, lack of real-time cycle progress visibility.",
      linearQuote:
        "Linear's cycles auto-rollover, and the project milestone burndown charts give me executive clarity without me ever having to ask engineers for status reports.",
      primaryShortcuts: "G then P (Projects), G then C (Cycles), ⌘K (Search Teams)",
      avatarColor: "bg-blue-600",
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 px-4 py-2 min-h-[32px] text-xs font-bold text-[#5E6AD2] dark:text-[#7C88E8]">
            <Compass className="size-3.5" />
            <span>01 — Product & UX Vision (The Linear Method)</span>
          </div>
          <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            The Purpose-Built System for Modern Product Teams
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Linear was created as the definitive response to bloated, slow enterprise issue tracking systems.
            It pairs radical sub-50ms speed, keyboard ergonomics, and opinionated engineering practices to help high-performing teams build software with clarity and momentum.
          </p>
        </div>
      </div>

      {/* 1.1 Product Overview */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Sparkles className="size-4 text-[#5E6AD2]" />
          <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
            1.1 Comprehensive Product Overview
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="space-y-2 p-4 rounded-xl border border-border bg-muted/20">
            <span className="font-bold uppercase tracking-wider text-[#5E6AD2] text-[11px]">Product Name & Architecture</span>
            <h3 className="text-sm font-bold text-foreground">Linear — High-Velocity Product Operations</h3>
            <p className="text-muted-foreground leading-relaxed">
              Engineered with a local-first sync architecture (client SQLite + WebSockets) delivering sub-50ms UI updates and full offline continuity.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl border border-border bg-muted/20">
            <span className="font-bold uppercase tracking-wider text-[#5E6AD2] text-[11px]">The Linear Philosophy</span>
            <h3 className="text-sm font-bold text-foreground">The Linear Method</h3>
            <p className="text-muted-foreground leading-relaxed">
              Software development should be focused on building products, not managing tickets. We strip away ceremonial overhead in favor of momentum, autonomy, and continuous cycles.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl border border-border bg-muted/20">
            <span className="font-bold uppercase tracking-wider text-[#5E6AD2] text-[11px]">Primary Target Audience</span>
            <p className="text-muted-foreground leading-relaxed">
              Software engineers, technical product managers, product designers, and engineering leadership at high-growth tech companies and visionary startups.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl border border-border bg-muted/20">
            <span className="font-bold uppercase tracking-wider text-[#5E6AD2] text-[11px]">What Friction Does It Solve?</span>
            <p className="text-muted-foreground leading-relaxed">
              Replaces sluggish Jira/Asana workflows (18.2s issue creation, 4.8s dropdowns, stale backlogs) with 2.4s creation, single-key commands, and automatic Git synchronization.
            </p>
          </div>
        </div>
      </div>

      {/* 1.2 UX Principles */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Zap className="size-4 text-[#5E6AD2]" />
          <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
            1.2 The 6 Linear UX Design Principles
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principlesList.map((p) => (
            <div key={p.num} className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#5E6AD2]">
                  {p.num}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Core Rule
                </span>
              </div>
              <h3 className="text-sm font-bold text-foreground">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>Meaning:</strong> {p.meaning}
              </p>
              <div className="pt-2 border-t border-border/50 text-[11px] text-muted-foreground/90">
                <span className="font-semibold text-foreground">Implementation:</span> {p.implication}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1.3 Ecosystem Architecture Map */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Layers className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              1.3 Linear Product Ecosystem & Architecture Map
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              Client local-first engine, 14 workflow archetypes, Git automation, and outcome metrics.
            </p>
          </div>
        </div>

        <MermaidDiagram
          chart={ecosystemChart}
          title="Linear Ecosystem Architecture Map"
          caption="Local-first client synchronization engine connected to 14 master workflow archetypes and backstage developer services."
        />
      </div>

      {/* 2.3 Persona Templates */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Terminal className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              2.3 Core User Personas
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              Engineered around the distinct ergonomics of engineers, designers, and engineering leadership.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.name}
              className="rounded-xl border border-border bg-card p-5 space-y-4 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`size-10 rounded-xl ${persona.avatarColor} text-white font-black text-sm flex items-center justify-center shadow-xs`}
                  >
                    {persona.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground leading-tight">
                      {persona.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-semibold">
                      {persona.role} ({persona.age})
                    </p>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground font-mono bg-muted/40 p-2 rounded-lg">
                  {persona.company}
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-foreground block mb-0.5">Primary Goals:</span>
                    <p className="text-muted-foreground leading-relaxed">{persona.goals}</p>
                  </div>
                  <div>
                    <span className="font-bold text-red-500/90 block mb-0.5">Key Friction Points:</span>
                    <p className="text-muted-foreground leading-relaxed">{persona.frustrations}</p>
                  </div>
                </div>

                <blockquote className="text-xs italic text-foreground/90 border-l-2 border-[#5E6AD2] pl-3 py-1 bg-[#5E6AD2]/5 rounded-r-lg">
                  "{persona.linearQuote}"
                </blockquote>
              </div>

              <div className="pt-3 border-t border-border text-[11px] font-mono text-muted-foreground">
                <span className="font-bold text-foreground block mb-1">Key Ergonomic Shortcuts:</span>
                <span className="text-[#5E6AD2]">{persona.primaryShortcuts}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2.5 User Journey Map */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Workflow className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              2.5 Daily Developer User Journey Map
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              Step-by-step emotional velocity curve from morning standup triage to PR merge auto-close.
            </p>
          </div>
        </div>

        <MermaidDiagram
          chart={journeyChart}
          title="Daily Developer Journey Flowchart"
          caption="Zero-friction transition across triage, instant 'C' creation, and automated branch lifecycle."
        />
      </div>

      {/* 2.6 Experience Map (Frontstage / Backstage) */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Cpu className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              2.6 Frontstage & Backstage Experience Map
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              Correlation between user gestures, optimistic local-first client mutations, and distributed backend synchronization.
            </p>
          </div>
        </div>

        <MermaidDiagram
          chart={experienceMapChart}
          title="Linear Frontstage & Backstage Experience Map"
          caption="Sub-50ms local DOM mutations backed by client SQLite persistence and real-time WebSocket broadcast."
        />
      </div>
    </div>
  )
}





