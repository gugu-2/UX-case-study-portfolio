import React from "react"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"
import { Users, Search, Target, Heart, AlertTriangle, ArrowRight, CheckCircle2, MessageSquare, Compass, Shield, GitFork, Workflow, Box, Layers, Table, CheckSquare, ListTree } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function FrameVisionView() {
  const personas = [
    {
      role: "Startup Co-Founder",
      name: "Alex Rivera",
      age: "32",
      company: "Series A Tech Company",
      goals: "Centralize company knowledge and task management to reduce software subscription costs.",
      frustrations: "Information gets lost across different SaaS tools, and team members ask 'where is that document?'",
      quote: "We were paying for Notion, Asana, and Miro. Frame replaced them all.",
      primaryShortcuts: "Cmd+K (Search), @ (Link Task)",
      avatarColor: "bg-foreground text-background",
    },
    {
      role: "Product Designer",
      name: "Jamie Lin",
      age: "27",
      company: "Design Agency",
      goals: "Keep design specs closely tied to engineering tasks and collaborate on wireframes.",
      frustrations: "Design feedback gets lost in Slack threads and Jira tickets lack visual context.",
      quote: "Being able to embed a whiteboard directly inside a product spec doc is a game changer for my workflow.",
      primaryShortcuts: "B (Whiteboard), M (Markdown)",
      avatarColor: "bg-zinc-500",
    }
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight border-b border-border pb-2">1.1 Unified Workspace Concept</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Frame is a connected OS for teams that unifies documents, tasks, and whiteboards into a single multiplayer workspace. It eliminates context switching by allowing users to seamlessly transition between writing a spec and assigning a task without leaving the canvas.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight border-b border-border pb-2">1.2 Core Integration Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-xl bg-card">
            <h3 className="font-bold text-sm text-foreground">1. Block-Based Architecture</h3>
            <p className="text-xs text-muted-foreground mt-1">Every paragraph, task, and image is a discrete block that can be referenced or transformed instantly.</p>
          </div>
          <div className="p-4 border border-border rounded-xl bg-card">
            <h3 className="font-bold text-sm text-foreground">2. Multiplayer by Default</h3>
            <p className="text-xs text-muted-foreground mt-1">Real-time sync ensures that you always see where your teammates are, whether in a doc or on a whiteboard.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const FrameProcessView: React.FC = () => {
  const processFlowChart = `graph TD
    subgraph Phase1["Phase I: Workspace Setup"]
      S01["01. IMPORT<br/>(Notion/Jira Migration)"] --> S02["02. STRUCTURE<br/>(Folders & Spaces)"]
      S02 --> S03["03. INVITE<br/>(Team Onboarding)"]
    end

    subgraph Phase2["Phase II: Collaborative Creation"]
      S03 --> S04["04. DRAFT<br/>(Markdown Docs)"]
      S04 --> S05["05. BRAINSTORM<br/>(Embedded Whiteboards)"]
    end

    subgraph Phase3["Phase III: Execution & Tracking"]
      S05 --> S06["06. ASSIGN<br/>(Inline Task Linking)"]
      S06 --> S07["07. SYNC<br/>(Unified Inbox & Updates)"]
    end`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-500/30 bg-zinc-500/10 px-4 py-2 min-h-[32px] text-xs font-bold text-zinc-600 dark:text-zinc-400">
            <Workflow className="size-3.5" />
            <span>27 — Master UX Process</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            The Frame Connected Workflow Process
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            How modern teams transition from fragmented tools into a single, unified operating system for daily work.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Workflow className="size-4 text-foreground" />
          <div>
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">27.1 End-to-End Workspace Lifecycle Flowchart</h2>
            <p className="text-xs text-muted-foreground mt-0.5">The 7-stage lifecycle from migration to daily task execution.</p>
          </div>
        </div>
        <MermaidDiagram chart={processFlowChart} title="Frame Workspace Lifecycle" caption="From initial data import to a seamlessly connected team." />
      </div>
    </div>
  )
}

export const FrameArchitectureView: React.FC = () => {
  const sitemapChart = `graph TD
    Root["Global Workspace (Tenant)"]
    
    subgraph Navigation["Sidebar Hierarchy"]
      Inbox["Unified Inbox (Notifications)"]
      Spaces["Team Spaces (e.g. Design, Eng)"]
      Private["Private Files"]
    end
    
    subgraph SpaceMod["Space Content Modalities"]
      Docs["Documents (Rich Text Blocks)"]
      Tasks["Task Views (Kanban, List, Timeline)"]
      Whiteboards["Whiteboards (Infinite Canvas)"]
    end
    
    subgraph GraphDb["Knowledge Graph Layer"]
      Backlinks["Bi-directional Backlinks"]
      Embeds["Live Block Embeds"]
    end
    
    Root --> Navigation
    Navigation --> SpaceMod
    SpaceMod -.->|CRDT Sync| GraphDb
    GraphDb -.->|Updates referenced blocks| SpaceMod`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-500/30 bg-zinc-500/10 px-4 py-2 min-h-[32px] text-xs font-bold text-zinc-600 dark:text-zinc-400">
            <Layers className="size-3.5" />
            <span>05 — Information Architecture</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">Frame Information Architecture</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">The structural blueprint mapping spaces, content modalities, and the underlying knowledge graph.</p>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Layers className="size-4 text-foreground" />
          <div>
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">5.1 Unified Modality Sitemap</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Showing how block embeds connect isolated documents.</p>
          </div>
        </div>
        <MermaidDiagram chart={sitemapChart} title="Frame Connected Topology" caption="The deeply linked architecture between different content modalities." />
      </div>
    </div>
  )
}

export function FrameUserFlowsView() {
  const userFlowChart = `graph TD
    Trigger([Trigger: Need to assign a task during a meeting]) --> Screen1[Screen: Meeting Notes Doc]
    Screen1 --> Action1[Action: Type '@' and select 'New Task']
    Action1 --> Decision1{Task Board exists?}
    Decision1 -->|No| Recovery1[Quick-create new Task Board modal]
    Decision1 -->|Yes| Action2[Action: Select 'Engineering Board']
    Action2 --> Action3[Action: Type task name inline]
    Action3 --> Response1[System Response: Task created and linked instantly]
    Response1 --> Success([Success: Task appears on Eng Board without leaving Doc])`

  const taskFlowChart = `graph TD
    Goal([Goal: Transition sticky notes to actionable engineering tasks]) --> Task1["Task 1: Open 'Brainstorming' Whiteboard"]
    Task1 --> Action1["Action: Multi-select 5 sticky notes"]
    Action1 --> Task2["Task 2: Right-click > 'Convert to Tasks'"]
    Task2 --> Action2["Action: Target 'Sprint 42' Kanban Board"]
    Action2 --> Subtask1["Subtask: System generates 5 tasks and creates bi-directional links"]
    Subtask1 --> Response1["System Response: Stickies visually transform into Task Cards"]
    Response1 --> Complete([Goal Achieved: Brainstorm instantly operationalized])`

  const decisionTreeChart = `graph TD
    Start([Start: User opens the Omni-Search (Cmd+K)]) --> TypeQuery["User types 'Q3 Roadmap'"]
    TypeQuery --> CheckExact{Exact title match?}
    CheckExact -->|Yes| Highlight["Highlight top Doc result"]
    CheckExact -->|No| CheckBlocks{Text inside a block matches?}
    CheckBlocks -->|Yes| ShowBlock["Show preview snippet of specific block"]
    CheckBlocks -->|No| SemanticAI["Trigger Semantic AI Search"]
    SemanticAI --> ReturnSimilar["Return contextually similar documents"]
    Highlight --> PressEnter["User presses Enter to navigate"]
    ShowBlock --> PressEnter
    ReturnSimilar --> PressEnter`

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-500/30 bg-zinc-500/10 px-4 py-2 min-h-[32px] text-xs font-bold text-zinc-600 dark:text-zinc-400">
            <GitFork className="size-3.5" />
            <span>06 — User & Task Flows</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">Frame Action Task Flows</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">Algorithmic mapping of core unified workflow tasks across docs, tasks, and search.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <CheckSquare className="size-4 text-foreground" />
            <div>
              <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">6.1 Contextual Task Generation Flow</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Creating tasks directly from within a markdown document.</p>
            </div>
          </div>
          <MermaidDiagram chart={userFlowChart} title="Inline '@' Task Flow" caption="Eliminating context switching between notes and Jira." />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <ListTree className="size-4 text-foreground" />
            <div>
              <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">6.2 Whiteboard to Kanban Task Flow</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Bridging unstructured brainstorming and structured execution.</p>
            </div>
          </div>
          <MermaidDiagram chart={taskFlowChart} title="Sticky Conversion Flow" caption="Bulk creation of Jira-style tickets from visual boards." />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <GitFork className="size-4 text-foreground" />
            <div>
              <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">6.3 Omni-Search (Cmd+K) Decision Tree</h2>
              <p className="text-xs text-muted-foreground mt-0.5">How the system resolves deep-linked search queries.</p>
            </div>
          </div>
          <MermaidDiagram chart={decisionTreeChart} title="Cmd+K Resolution Tree" caption="Fallback logic from exact title to semantic block search." />
        </div>
      </div>
    </div>
  )
}

export function FrameTokensView() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">Frame Design System & Tokens</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Frame utilizes a high-contrast, minimalist design language that focuses on content over chrome. The color palette relies heavily on stark blacks and whites for structure, with muted accent colors used strictly for semantic state (e.g., green for 'Done' tasks, amber for 'In Progress').
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
          <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground tracking-tight">Semantic Task Tokens</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-zinc-500 rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--status-todo</span>
            </div>
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-amber-500 rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--status-progress</span>
            </div>
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-emerald-500 rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--status-done</span>
            </div>
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-red-500 rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--status-blocked</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
