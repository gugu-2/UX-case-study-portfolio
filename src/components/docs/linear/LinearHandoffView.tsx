import React from "react"
import {
  Code2,
  CheckCircle2,
  Workflow,
  Cpu,
  Layers,
  FileCheck,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const LinearHandoffView: React.FC = () => {
  const componentContracts = [
    {
      name: "<IssueRow />",
      props: "issue: IssueEntity, isSelected: boolean, onSelect: () => void",
      states: "Default, Focused, Dragging, InProgress, Done, Canceled",
      performance: "Sub-16ms render via React.memo and CSS transforms",
      a11y: "role='option', aria-selected={isSelected}, aria-labelledby={titleId}",
    },
    {
      name: "<QuickStatusPicker />",
      props: "currentStatus: StatusEnum, onTransition: (s: StatusEnum) => void, isOpen: boolean",
      states: "Active, KeyboardNavigating, Submitting, Closed",
      performance: "Sub-50ms popover mount, unmounts on Esc or backdrop click",
      a11y: "role='menu', aria-activedescendant to focused status item",
    },
    {
      name: "<CommandMenuModal />",
      props: "isOpen: boolean, onClose: () => void, onExecute: (cmdId: string) => void",
      states: "Idle, Querying, Navigating, Executing",
      performance: "Wasm SQLite full-text search executed in <8ms",
      a11y: "role='dialog', aria-modal='true', automatic focus trap",
    },
    {
      name: "<MilestoneProgressBar />",
      props: "totalPoints: number, completedPoints: number, velocity: number",
      states: "Zero, InProgress, AtRisk, Completed",
      performance: "Pure CSS flex-basis interpolation with zero layout shift",
      a11y: "role='progressbar', aria-valuenow={percent}, aria-valuemax={100}",
    },
  ]

  const syncProtocolSteps = [
    {
      phase: "1. Local State Mutation (0ms)",
      action: "React dispatch updates UI instantly; user sees the new status pill without waiting for network ACK.",
    },
    {
      phase: "2. SQLite Wasm Persistence (<5ms)",
      action: "Local IndexedDB/SQLite transaction writes change to disk; guarantees zero draft data loss even on crash.",
    },
    {
      phase: "3. WebSocket Delta Dispatch (<25ms)",
      action: "Compact binary/JSON delta transmitted over persistent secure WebSocket connection to Linear backend.",
    },
    {
      phase: "4. Distributed Fan-out (<50ms)",
      action: "Backend verifies authorization, writes to PostgreSQL, and broadcasts delta to all active team sessions.",
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 px-4 py-2 min-h-[32px] text-xs font-bold text-[#5E6AD2] dark:text-[#7C88E8]">
            <Code2 className="size-3.5" />
            <span>11 — Developer Handoff & Sync Engine</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            Front-End Component Contracts & Sync Protocol
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Specifications for front-end architecture, strict props contracts, and the sub-50ms local-first synchronization protocol that powers Linear.
          </p>
        </div>
      </div>

      {/* 11.1 Sync Engine Architecture */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Zap className="size-4 text-[#5E6AD2]" />
          <div>
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
              11.1 The Sub-50ms Local-First Sync Protocol
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              The four lifecycle stages executed on every single mutation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {syncProtocolSteps.map((step) => (
            <div
              key={step.phase}
              className="p-5 rounded-xl border border-border bg-muted/20 space-y-2"
            >
              <h3 className="text-xs font-mono font-bold text-[#5E6AD2]">{step.phase}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 11.2 Component Contracts */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Cpu className="size-4 text-[#5E6AD2]" />
          <div>
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
              11.2 Core Component API Contracts
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Type-safe interface boundaries and accessibility guarantees for engineering implementation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {componentContracts.map((c) => (
            <div
              key={c.name}
              className="p-5 rounded-xl border border-border bg-card space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-foreground bg-muted px-2 py-0.5 rounded">
                    {c.name}
                  </span>
                  <Badge variant="outline" className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="size-3 mr-1" /> Approved
                  </Badge>
                </div>
                <div className="text-[11px] text-muted-foreground font-mono bg-muted/40 p-2 rounded">
                  <code>{c.props}</code>
                </div>
                <div className="space-y-1 text-xs">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Supported States:</strong> {c.states}
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Performance:</strong> {c.performance}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-border/50 text-[10px] text-muted-foreground font-mono">
                <span className="text-[#5E6AD2]">A11y:</span> {c.a11y}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
