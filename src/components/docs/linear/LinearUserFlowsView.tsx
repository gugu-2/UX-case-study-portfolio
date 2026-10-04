import React from "react"
import {
  GitFork,
  CheckCircle2,
  ArrowRight,
  Layers,
  Table,
  CheckSquare,
  ListTree,
  GitBranch,
  Terminal,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"
import { linearScreensData } from "@/data/linearScreensData"

export const LinearUserFlowsView: React.FC = () => {
  const issueCreationFlow = `flowchart TD
    Trigger([Trigger: Developer notices bug while writing code]) --> KeyC["Press single-key shortcut 'C'"]
    KeyC --> ModalRender["System: Issue Creation Modal mounts in <16ms<br/>Focus locked to Title Input"]
    ModalRender --> TypeTitle["Action: Type concise issue title"]
    TypeTitle --> DescKey["Action: Press Tab or Enter to description"]
    DescKey --> FastProps["Action: Set status ('S'), priority ('P'), or assignee ('A')<br/>Direct single-key overrides without clicking"]
    FastProps --> SubmitKey["Action: Hit ⌘+Enter to submit"]
    SubmitKey --> Optimistic["System: Optimistically appends issue to list (0ms)<br/>Saves draft to local SQLite Wasm"]
    Optimistic --> BackgroundSync["System: Dispatches GraphQL delta in background<br/>Closes modal & returns focus to previous screen"]
    BackgroundSync --> Success([Success: Issue Created in 2.4s total execution])`

  const statusSwitchFlow = `flowchart TD
    Trigger([Trigger: Daily standup / Starting work]) --> SelectIssue["Action: Arrow keys ↑ / ↓ to select issue in list"]
    SelectIssue --> KeyS["Press shortcut 'S' for Quick Status Switcher"]
    KeyS --> SwitcherRender["System: Sub-50ms Quick Switcher popup appears<br/>Pre-filtered to valid state transitions"]
    SwitcherRender --> ActionChoose["Action: Tap number or initial (e.g. 'I' for In Progress)"]
    ActionChoose --> OptimisticState["System: Instant DOM color update on status badge<br/>No full-table re-render"]
    OptimisticState --> AssignKey{Need to self-assign?}
    AssignKey -->|Yes| KeyA["Press 'A' then hit Enter for 'Assign to me'"]
    AssignKey -->|No| CloseSwitcher["Hit Esc or navigate away"]
    KeyA --> CloseSwitcher
    CloseSwitcher --> Success([Success: Issue triaged in 0.6s])`

  const gitPrFlow = `flowchart TD
    Start([Start: Developer ready to code]) --> CopyBranch["Action: Copy Git branch name from Linear issue (e.g. 'alex/eng-412')"]
    CopyBranch --> TerminalCmd["Terminal: git checkout -b alex/eng-412-oauth-fix"]
    TerminalCmd --> CommitPush["Terminal: git commit -m 'fix: resolve refresh token cycle' && git push"]
    CommitPush --> GitHubPR["Action: Open GitHub Pull Request"]
    GitHubPR --> WebhookReceived["System: Linear receives GitHub Webhook event"]
    WebhookReceived --> CheckStatus{PR Open or Merged?}
    CheckStatus -->|PR Opened| MoveReview["Linear: Automatically moves issue status to 'In Review'"]
    CheckStatus -->|PR Merged| MoveDone["Linear: Automatically moves issue status to 'Done'<br/>Notifies assignee in desktop notifications"]
    MoveReview --> DeveloperNotified["Teammates notified in Slack / Linear Inbox"]
    MoveDone --> Complete([Complete: Issue Closed with Zero Administrative Manual Updates])`

  const screenStates = [
    "Default",
    "Loading",
    "Skeleton",
    "Empty",
    "Error",
    "Success",
    "Offline",
    "Partial Data",
    "Permission Denied",
    "First Use",
    "Returning User",
    "Disabled",
    "Read-Only",
    "Expired",
    "Maintenance",
    "Long Content",
    "Extreme Data",
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 px-4 py-2 min-h-[32px] text-xs font-bold text-[#5E6AD2] dark:text-[#7C88E8]">
            <GitFork className="size-3.5" />
            <span>06 — User & Task Flows</span>
          </div>
          <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            High-Velocity Task Execution & Git State Synchronization
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Every user flow in Linear is engineered to minimize cognitive overhead, eliminate unnecessary clicks, and remove context switching between the codebase and the issue tracker.
          </p>
        </div>
      </div>

      {/* 6.1 Flow 1: Rapid Issue Creation */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Terminal className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              6.1 Flow 1: Rapid Issue Creation via 'C' Shortcut
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              Sub-16ms modal mount, keyboard shortcuts for attributes, and optimistic client commitment.
            </p>
          </div>
        </div>

        <MermaidDiagram
          chart={issueCreationFlow}
          title="Rapid Issue Creation Task Flow"
          caption="Linear 'C' shortcut workflow reducing issue filing latency from 18.2s (Jira baseline) down to 2.4s unassisted."
        />
      </div>

      {/* 6.2 Flow 2: Quick Status Switcher */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <CheckSquare className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              6.2 Flow 2: Quick Status Switcher ('S' Shortcut) & Self-Assignment
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              Instant keyboard state transition with zero full-table DOM re-render lag.
            </p>
          </div>
        </div>

        <MermaidDiagram
          chart={statusSwitchFlow}
          title="Quick Status Switcher Interaction Flow"
          caption="Sub-50ms shortcut 'S' state transition reducing click friction by 87.5%."
        />
      </div>

      {/* 6.3 Flow 3: Git Branch & PR Automation */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <GitBranch className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              6.3 Flow 3: Git Branch Linking & Pull Request Auto-Close
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              Event-driven webhook orchestration between GitHub/GitLab and Linear status ledger.
            </p>
          </div>
        </div>

        <MermaidDiagram
          chart={gitPrFlow}
          title="Git PR Automation & State Synchronization Flowchart"
          caption="Bi-directional webhook event loop eliminating manual ticket status updates upon code merge."
        />
      </div>

      {/* 6.4 14-Screen Master Inventory */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <Table className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              6.4 Complete 14-Screen Master Inventory
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              Comprehensive index of all 14 workflow archetypes captured from the production build.
            </p>
          </div>
        </div>

        <div className="border border-border rounded-xl overflow-hidden bg-card">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Screen Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Priority</th>
                <th className="p-3">Primary User Flow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {linearScreensData.map((screen) => (
                <tr key={screen.id} className="hover:bg-muted/40 transition-colors">
                  <td className="p-3 font-mono font-bold text-[#5E6AD2]">{screen.id}</td>
                  <td className="p-3 font-bold text-foreground">{screen.name}</td>
                  <td className="p-3 text-muted-foreground">{screen.flow}</td>
                  <td className="p-3">
                    <Badge
                      variant="outline"
                      className={`text-[10px] font-bold ${
                        screen.priority === "P0"
                          ? "border-red-500/30 text-red-600 dark:text-red-400 bg-red-500/10"
                          : "border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10"
                      }`}
                    >
                      {screen.priority}
                    </Badge>
                  </td>
                  <td className="p-3 text-muted-foreground">{screen.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 6.5 Screen-State Matrix */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <Layers className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              6.5 Comprehensive 17 Screen-State Matrix
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              UI states verified across every screen archetype for bulletproof front-end stability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
          {screenStates.map((state, index) => (
            <div
              key={state}
              className="p-3 rounded-lg border border-border bg-muted/20 text-center font-medium"
            >
              <span className="text-[10px] text-[#5E6AD2] block font-mono">
                State #{index + 1}
              </span>
              <span className="text-foreground font-semibold">{state}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}





