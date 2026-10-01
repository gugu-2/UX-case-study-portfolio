import React from "react"
import {
  Layers,
  CheckCircle2,
  Workflow,
  Command,
  Filter,
  Grid,
  ListTree,
  FolderTree,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"

export const LinearArchitectureView: React.FC = () => {
  const sitemapChart = `graph TD
    Workspace["Acme Corp Organization Workspace<br/>(Single Multi-Tenant Root)"]
    
    subgraph Teams["Cross-Functional Teams Hierarchy"]
      EngTeam["ENG: Core Engineering Team"]
      DesignTeam["DES: Product Design Team"]
      InfraTeam["INF: Platform & Infrastructure"]
    end
    
    subgraph Tracks["Dual Cadence Tracks"]
      Cycles["Cycles (Continuous Sprint Cadence)<br/>Current Cycle #42 | Upcoming #43"]
      Projects["Projects (Milestone Roadmap Initiatives)<br/>v3.0 Redesign | Auth 2.0 Migration"]
    end
    
    subgraph IssueEngine["Issue Finite State Graph"]
      Triage["Triage (Incoming Review Queue)"]
      Backlog["Backlog (Prioritized Unassigned Pool)"]
      Todo["Todo (Committed for Active Cycle)"]
      InProgress["In Progress (Active Git Branch Work)"]
      InReview["In Review (PR Open & Under Review)"]
      Done["Done (Merged & Deployed)"]
      Canceled["Canceled (Invalid or Duplicate)"]
    end
    
    subgraph SubAtomic["Sub-Atomic Decomposition"]
      SubIssues["Sub-Issues & Checklists"]
      Attachments["Figma Frames, Loom Videos, Sentry Logs"]
      GitCommits["Linked Git Commits & PR Refs"]
    end
    
    Workspace --> Teams
    EngTeam --> Tracks
    DesignTeam --> Tracks
    InfraTeam --> Tracks
    Tracks --> IssueEngine
    IssueEngine --> SubAtomic`

  const commandMenuChart = `flowchart LR
    KeyK["Press '⌘K' from any view"] --> GlobalModal["Global Command Palette Modal"]
    GlobalModal --> Scope1["1. Navigation Shortcuts<br/>'Go to My Issues' (G then I)<br/>'Go to Projects' (G then P)<br/>'Go to Active Cycle' (G then C)"]
    GlobalModal --> Scope2["2. Entity Creation<br/>'Create New Issue' (C)<br/>'Create Project'<br/>'Create Document'"]
    GlobalModal --> Scope3["3. Issue Mutations<br/>'Change Status' (S)<br/>'Set Priority' (P)<br/>'Assign to...' (A)"]
    GlobalModal --> Scope4["4. Workspace Settings<br/>'Switch Theme' (T)<br/>'Integrations Directory'<br/>'Invite Teammate'"]`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 px-4 py-2 min-h-[32px] text-xs font-bold text-[#5E6AD2] dark:text-[#7C88E8]">
            <Layers className="size-3.5" />
            <span>05 — Information Architecture</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            Dual Cadence Hierarchy & Universal Command Graph
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Linear organizes product development around two distinct dimensions: continuous time-boxed momentum (Cycles) and strategic outcome initiatives (Projects).
            Every issue connects directly to code branches without complex enterprise nested hierarchies.
          </p>
        </div>
      </div>

      {/* 5.1 Dual Hierarchy Sitemap */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <FolderTree className="size-4 text-[#5E6AD2]" />
          <div>
            <h2 className="text-lg font-bold text-foreground">
              5.1 Ecosystem Information Architecture Diagram
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              From organization root down to teams, dual tracks (cycles/projects), deterministic states, and Git commit linkages.
            </p>
          </div>
        </div>

        <MermaidDiagram
          chart={sitemapChart}
          title="Linear Dual Hierarchy Architecture Flowchart"
          caption="Structural relationship between organizational teams, dual continuous tracks, issue states, and sub-atomic Git artifacts."
        />
      </div>

      {/* 5.2 Command Menu Architecture */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Command className="size-4 text-[#5E6AD2]" />
          <div>
            <h2 className="text-lg font-bold text-foreground">
              5.2 Global Command Menu (⌘K) Navigation Topology
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Hierarchical search and execution paths indexed locally in memory for sub-10ms response.
            </p>
          </div>
        </div>

        <MermaidDiagram
          chart={commandMenuChart}
          title="Command Palette Execution Graph"
          caption="Universal navigation, mutation commands, entity creation, and workspace preferences accessible from the home row."
        />
      </div>

      {/* 5.3 Filter & Grouping Engine */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <Filter className="size-4 text-[#5E6AD2]" />
          <h2 className="text-lg font-bold text-foreground">5.3 Multidimensional View Dimension Matrix</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
            <span className="font-bold text-[#5E6AD2] uppercase tracking-wider text-[11px]">Primary Grouping</span>
            <p className="text-muted-foreground">
              Group issues horizontally or vertically by: <strong>Status, Assignee, Priority, Project, or Cycle</strong> with real-time column counts.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
            <span className="font-bold text-[#5E6AD2] uppercase tracking-wider text-[11px]">Secondary Filtering</span>
            <p className="text-muted-foreground">
              Instant boolean composability: <code>status:in_progress assignee:me priority:urgent label:bug</code> with zero server round-trip.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
            <span className="font-bold text-[#5E6AD2] uppercase tracking-wider text-[11px]">View Modes</span>
            <p className="text-muted-foreground">
              One-click switcher between <strong>High-Density List</strong> (V shortcut) and <strong>Drag Kanban Board</strong> (B shortcut).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
