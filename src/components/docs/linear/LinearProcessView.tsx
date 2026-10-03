import React from "react"
import {
  Workflow,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  Zap,
  Target,
  Clock,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"

export const LinearProcessView: React.FC = () => {
  const processFlowchart = `flowchart TD
    Phase1["1. Idea & Spec Formulation<br/><b>Lead:</b> Product Designer & PM<br/><b>Artifact:</b> Figma spec & brief"] --> Gate1{Spec Approved?}
    Gate1 -->|Yes| Phase2["2. Rapid Decomposition<br/><b>Tool:</b> Linear 'C' Shortcut<br/><b>Action:</b> Create sub-issues & milestones"]
    Gate1 -->|No| Phase1
    Phase2 --> Phase3["3. Automated Cycle Ingestion<br/><b>Cadence:</b> 1-2 week rolling cycle<br/><b>Rule:</b> No story points estimation theater"]
    Phase3 --> Phase4["4. Git Branch Checkout<br/><b>Developer:</b> git checkout -b alex/eng-104<br/><b>System:</b> Auto-moves status to In Progress"]
    Phase4 --> Phase5["5. Pull Request & Review<br/><b>System:</b> PR opened -> moves to In Review<br/><b>Figma:</b> Dev Mode inspection embed"]
    Phase5 --> Gate2{CI & Code Review Pass?}
    Gate2 -->|Yes| Phase6["6. Merge & Production Deploy<br/><b>System:</b> Issue auto-closes to Done<br/><b>Slack:</b> Deploy notice dispatched"]
    Gate2 -->|No| Phase4
    Phase6 --> Phase7["7. Cycle Insights & Auto-Rollover<br/><b>System:</b> Unfinished work rolls over smoothly<br/><b>Burndown:</b> Cycle velocity graphed"]`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 px-4 py-2 min-h-[32px] text-xs font-bold text-[#5E6AD2] dark:text-[#7C88E8]">
            <Workflow className="size-3.5" />
            <span>27 — Master UX Process</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            The Linear Method: Continuous Cadence & Zero-Bloat Delivery
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            How world-class product and engineering teams execute software from initial Figma ideation to production deployment with minimal ceremonial overhead.
          </p>
        </div>
      </div>

      {/* 27.1 Process Flowchart */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Workflow className="size-4 text-[#5E6AD2]" />
          <div>
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
              27.1 Continuous Cycle Cadence Flowchart
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              The 7-stage lifecycle of high-velocity software engineering.
            </p>
          </div>
        </div>

        <MermaidDiagram
          chart={processFlowchart}
          title="The Linear Method Delivery Lifecycle Flowchart"
          caption="End-to-end flow from Figma spec formulation through Git branch execution and automated cycle rollover."
        />
      </div>

      {/* 27.2 Core Principles of The Method */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <ShieldCheck className="size-4 text-[#5E6AD2]" />
          <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">27.2 The 3 Non-Negotiable Operational Rules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
            <span className="font-bold text-[#5E6AD2] uppercase tracking-wider text-[11px]">Rule 1: No Stale Backlogs</span>
            <p className="text-muted-foreground leading-relaxed">
              If an issue has not been prioritized or worked on within 90 days, it is automatically archived. Backlogs must remain small, actionable, and truthful.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
            <span className="font-bold text-[#5E6AD2] uppercase tracking-wider text-[11px]">Rule 2: Automated Git Source of Truth</span>
            <p className="text-muted-foreground leading-relaxed">
              Developers never manually drag tickets across columns. Code branch creation, commits, and PR merges deterministically update Linear status.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
            <span className="font-bold text-[#5E6AD2] uppercase tracking-wider text-[11px]">Rule 3: Autonomous Ownership</span>
            <p className="text-muted-foreground leading-relaxed">
              Engineers own their issues from spec to deploy. Project lead assigns high-level milestones; developers decompose their own technical tasks via 'C'.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
