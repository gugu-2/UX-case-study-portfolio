import React from "react"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"
import { Users, Search, Target, Heart, AlertTriangle, ArrowRight, CheckCircle2, MessageSquare, Compass, Shield, GitFork, Workflow, Box, Layers, Table, CheckSquare, ListTree } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function MiroVisionView() {
  const personas = [
    {
      role: "UX Researcher & Facilitator",
      name: "Maria Gonzalez",
      age: "36",
      company: "Design Consultancy",
      goals: "Run remote design sprints and synthesize qualitative research.",
      frustrations: "Users getting lost on the canvas or deleting locked background frames.",
      quote: "When running a workshop with 20 people remotely, the tool has to be completely invisible.",
      primaryShortcuts: "V (Select), N (Sticky Note)",
      avatarColor: "bg-[#FFD02F] text-black",
    },
    {
      role: "Agile Coach",
      name: "Tom Reynolds",
      age: "42",
      company: "Financial Enterprise",
      goals: "Replicate the physical Kanban board and facilitate daily standups.",
      frustrations: "Jira is too rigid for brainstorming and syncing stickies is tedious.",
      quote: "It needs to feel real, messy, and collaborative just like our old office whiteboard.",
      primaryShortcuts: "Cmd+C/V, Space (Pan)",
      avatarColor: "bg-[#050038] text-white",
    }
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight border-b border-border pb-2">1.1 Visual Collaboration Overview</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Miro is an online collaborative whiteboard platform that enables distributed teams to work effectively together. It translates the experience of a physical whiteboard into an infinite, multiplayer digital canvas.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight border-b border-border pb-2">1.2 Spatial Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-xl bg-card">
            <h3 className="font-bold text-sm text-foreground">1. Absolute Freedom</h3>
            <p className="text-xs text-muted-foreground mt-1">No rigid boundaries. Teams can zoom out to see the entire strategy or zoom in on a single sticky note.</p>
          </div>
          <div className="p-4 border border-border rounded-xl bg-card">
            <h3 className="font-bold text-sm text-foreground">2. Multiplayer Presence</h3>
            <p className="text-xs text-muted-foreground mt-1">Live cursors with names create a sense of being in the same room.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MiroProcessView: React.FC = () => {
  const processFlowChart = `graph TD
    subgraph Phase1["Phase I: Preparation"]
      S01["01. OBJECTIVE<br/>(Workshop Goals)"] --> S02["02. TEMPLATE<br/>(Selecting Framework)"]
      S02 --> S03["03. INVITE<br/>(Guest Access Links)"]
    end

    subgraph Phase2["Phase II: Live Collaboration"]
      S03 --> S04["04. DIVERGE<br/>(Silent Brainstorming)"]
      S04 --> S05["05. CONVERGE<br/>(Clustering Ideas)"]
    end

    subgraph Phase3["Phase III: Synthesis"]
      S05 --> S06["06. VOTE<br/>(Dot Voting Session)"]
      S06 --> S07["07. EXPORT<br/>(Jira/PDF Export)"]
    end`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 min-h-[32px] text-xs font-bold text-yellow-600 dark:text-yellow-500">
            <Workflow className="size-3.5" />
            <span>27 — Master UX Process</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            The Miro Facilitation Process
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            How facilitators prepare, run, and synthesize remote workshops on an infinite canvas.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Workflow className="size-4 text-yellow-600" />
          <div>
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">27.1 End-to-End Workshop Lifecycle</h2>
            <p className="text-xs text-muted-foreground mt-0.5">The 7-stage lifecycle of remote collaboration.</p>
          </div>
        </div>
        <MermaidDiagram chart={processFlowChart} title="Miro Workshop Lifecycle" caption="From template selection to Jira export." />
      </div>
    </div>
  )
}

export const MiroArchitectureView: React.FC = () => {
  const sitemapChart = `graph TD
    Root["Enterprise Organization"]
    
    subgraph Dashboard["Workspace Dashboard"]
      Recent["Recent Boards"]
      Starred["Starred Boards"]
      Templates["Template Library"]
    end
    
    subgraph CanvasData["WebGL Canvas Engine"]
      Background["Layer 1: Grid & Frames"]
      Objects["Layer 2: Stickies, Shapes, Text"]
      Connections["Layer 3: Smart Lines & Connectors"]
      UI["Layer 4: DOM Toolbars & Menus"]
    end
    
    subgraph Multiplayer["Real-Time Sync Services"]
      Cursors["Live Mouse Cursors (WebSockets)"]
      Presence["Avatars & Active Users List"]
    end
    
    Root --> Dashboard
    Dashboard --> CanvasData
    CanvasData --> Multiplayer`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 min-h-[32px] text-xs font-bold text-yellow-600 dark:text-yellow-500">
            <Layers className="size-3.5" />
            <span>05 — Information Architecture</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">Miro Z-Index Architecture</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">The spatial indexing hierarchy of the infinite canvas and its relationship to the dashboard.</p>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Layers className="size-4 text-yellow-600" />
          <div>
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">5.1 Canvas Layer Topology</h2>
            <p className="text-xs text-muted-foreground mt-0.5">The z-index layers that make up the WebGL canvas separating content from UI.</p>
          </div>
        </div>
        <MermaidDiagram chart={sitemapChart} title="Miro Layer Topology" caption="Separation of DOM elements (UI) from WebGL rendered objects (Canvas)." />
      </div>
    </div>
  )
}

export function MiroUserFlowsView() {
  const userFlowChart = `graph TD
    Trigger([Trigger: Need to run a retrospective]) --> Screen1[Screen: Dashboard]
    Screen1 --> Action1[Action: Click 'New Board']
    Action1 --> Decision1{Use Template?}
    Decision1 -->|No| Blank[Start with blank canvas]
    Decision1 -->|Yes| Action2[Action: Select 'Retrospective' Template]
    Action2 --> Action3[Action: Click 'Share' to generate guest link]
    Action3 --> Response1[System Response: Generate secure URL]
    Response1 --> Success([Success: Team joins via link instantly])`

  const taskFlowChart = `graph TD
    Goal([Goal: Synthesize 50 chaotic sticky notes]) --> Task1["Task 1: Zoom out to view cluster"]
    Task1 --> Action1["Action: Click and drag to lasso select all 50 stickies"]
    Action1 --> Task2["Task 2: Select 'Cluster by Keyword' (AI Tool)"]
    Task2 --> Action2["Action: AI processes text embeddings"]
    Action2 --> Subtask1["Subtask: System generates grouping frames"]
    Subtask1 --> Response1["System Response: Stickies animate into 4 distinct groups"]
    Response1 --> Complete([Goal Achieved: Brainstorm synthesized])`

  const decisionTreeChart = `graph TD
    Start([Start: User drags a connection line]) --> DragLine["User drags line from Shape A"]
    DragLine --> CheckTarget{Hovering over a target?}
    CheckTarget -->|Yes| HighlightTarget["Highlight Shape B boundary in blue"]
    HighlightTarget --> ReleaseTarget["User releases mouse"]
    ReleaseTarget --> SnapToEdge["Line snaps to closest anchor point on Shape B"]
    CheckTarget -->|No| ReleaseEmpty["User releases mouse in empty space"]
    ReleaseEmpty --> PromptCreate["Open quick-create menu (Rectangle, Diamond)"]
    PromptCreate --> SelectShape["User selects Diamond"]
    SelectShape --> AutoConnect["Auto-create Diamond and connect line"]`

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 min-h-[32px] text-xs font-bold text-yellow-600 dark:text-yellow-500">
            <GitFork className="size-3.5" />
            <span>06 — User & Task Flows</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">Miro Action Task Flows</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">Algorithmic mapping of core facilitation and diagramming tasks.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <CheckSquare className="size-4 text-yellow-600" />
            <div>
              <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">6.1 Workshop Creation Flow</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Creating and sharing a structured workshop board.</p>
            </div>
          </div>
          <MermaidDiagram chart={userFlowChart} title="Template Deployment Flow" caption="Fast-path to getting an empty board ready for guests." />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <ListTree className="size-4 text-yellow-600" />
            <div>
              <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">6.2 AI Clustering Task Flow</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Automating synthesis of qualitative sticky note data.</p>
            </div>
          </div>
          <MermaidDiagram chart={taskFlowChart} title="Sticky Synthesis Flow" caption="Using AI to reduce the manual labor of grouping stickies." />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <GitFork className="size-4 text-yellow-600" />
            <div>
              <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">6.3 Smart Diagramming Decision Tree</h2>
              <p className="text-xs text-muted-foreground mt-0.5">How the system anticipates connection intent.</p>
            </div>
          </div>
          <MermaidDiagram chart={decisionTreeChart} title="Auto-Connect Logic Tree" caption="Accelerating flowcharts by auto-prompting next shapes." />
        </div>
      </div>
    </div>
  )
}

export function MiroTokensView() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">Miro Design System & Tokens</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Miro uses a playful yet highly legible design system. The core UI chrome is kept minimal and neutral to let the vibrant colors of user-generated content (like sticky notes) pop on the canvas.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
          <h3 className="figma-h3 text-[22px] leading-[32px] lg:text-[32px] lg:leading-[48px] font-bold text-foreground tracking-tight">Vibrant Sticky Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-[#FFF9B1] rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--sticky-yellow</span>
            </div>
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-[#FF8DA1] rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--sticky-pink</span>
            </div>
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-[#A6CCF5] rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--sticky-blue</span>
            </div>
            <div className="p-4 rounded-xl bg-muted border border-border flex flex-col gap-2">
              <div className="w-full h-12 bg-[#D0E17A] rounded-md"></div>
              <span className="text-foreground text-xs font-mono">--sticky-green</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MiroArtifactMapView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight border-b border-border pb-2">28.1 Miro Ecosystem Artifact Topology</h2>
        <MermaidDiagram chart={`
          graph TD
            MiroFigma[Miro Figma UI Kit] --> Components[React UI Components]
            MiroFigma --> WebGL[Canvas Render Textures]
            Components --> Toolbar
            Components --> Popovers
            WebGL --> Stickies
            WebGL --> Cursors
        `} />
      </div>
    </div>
  )
}

export function MiroProblemOpportunityView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight border-b border-border pb-2">3.1 Core Problem</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Remote teams struggle to replicate the unstructured, chaotic nature of in-person brainstorming sessions, leading to rigid workflows.
        </p>
      </div>
    </div>
  )
}

export function MiroAccessibilityView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight border-b border-border pb-2">10.1 Canvas Screen Reader Limits</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Infinite canvas applications fundamentally break standard DOM accessibility trees because objects are rendered via WebGL or absolute positioning. We maintain a hidden DOM tree overlay to allow screen readers to parse sticky note contents sequentially.
        </p>
      </div>
    </div>
  )
}

export function MiroHandoffView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight border-b border-border pb-2">11.1 Canvas WebGL Render Protocol</h2>
        <div className="p-4 bg-muted text-muted-foreground font-mono text-xs rounded-xl overflow-x-auto border border-border">
          <pre>
{`interface CanvasNode {
  id: string;
  type: "STICKY" | "SHAPE" | "TEXT" | "CONNECTOR";
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  style: NodeStyle;
  content: string;
  zIndex: number;
  groupId?: string;
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
