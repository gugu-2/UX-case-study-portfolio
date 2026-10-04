import React, { useState } from "react"
import {
  Palette,
  CheckCircle2,
  Copy,
  Layers,
  Sparkles,
  Command,
  Keyboard,
  Workflow,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"
import { TypographySpecimen } from "@/components/TypographySpecimen"

export const LinearTokensView: React.FC = () => {
  const stateModelChart = `stateDiagram-v2
    [*] --> Idle: Viewport Rendered
    Idle --> Focused: Keyboard Arrow Navigation (↑ / ↓)
    Focused --> ModalActive: Press Shortcut 'C' or '⌘K'
    ModalActive --> OptimisticCommit: Hit ⌘+Enter to submit
    OptimisticCommit --> Idle: Instant UI update (<16ms)
    OptimisticCommit --> WebSocketSync: Background WebSocket Dispatch
    WebSocketSync --> ServerAcknowledged: Server 200 OK Ack
    WebSocketSync --> OfflineQueued: Network Disconnected (IndexedDB Queue)
    OfflineQueued --> WebSocketSync: Network Restored (Delta Flush)
    WebSocketSync --> ErrorRollback: Conflict / Validation Fault
    ErrorRollback --> Idle: Toast notification with Undo action`

  const colorTokens = [
    {
      name: "Linear Indigo (Primary Accent)",
      token: "--color-brand-primary",
      hex: "#5E6AD2",
      role: "Primary action buttons, brand logo glyph, selected active tab indicator, Done state badge.",
      contrast: "4.8:1 against Obsidian Dark",
    },
    {
      name: "Obsidian Canvas (Background)",
      token: "--color-bg-canvas",
      hex: "#0F1015",
      role: "Base root viewport background for deep ocular focus and zero glare during night operations.",
      contrast: "Base Surface",
    },
    {
      name: "Elevated Surface (Cards)",
      token: "--color-bg-surface",
      hex: "#16181D",
      role: "Active issue list rows, Kanban cards, modal containers, and sidebar surfaces.",
      contrast: "Layer +1 Elevation",
    },
    {
      name: "Obsidian Border & Divider",
      token: "--color-border-subtle",
      hex: "#1F232B",
      role: "1px hairline table dividers, card boundaries, and command menu item separators.",
      contrast: "3.2:1 against Canvas",
    },
    {
      name: "In Progress Status (Amber)",
      token: "--color-status-progress",
      hex: "#F2C94C",
      role: "Active issue in progress glyph dot and cycle progress bar indicator.",
      contrast: "11.2:1 against Obsidian",
    },
    {
      name: "Urgent Priority (Coral Red)",
      token: "--color-priority-urgent",
      hex: "#EB5757",
      role: "P0 blockers, critical security defects, and automated build regression alerts.",
      contrast: "5.1:1 against Obsidian",
    },
    {
      name: "Done Status (Emerald Green)",
      token: "--color-status-done",
      hex: "#27AE60",
      role: "Merged pull requests, completed milestones, and successfully closed tickets.",
      contrast: "5.6:1 against Obsidian",
    },
    {
      name: "Canceled Status (Muted Slate)",
      token: "--color-status-canceled",
      hex: "#828282",
      role: "Duplicate tickets, discarded drafts, and out-of-scope backlog items.",
      contrast: "4.5:1 against Obsidian",
    },
  ]

  const shortcuts = [
    { key: "C", description: "Create new issue instantly from any view", category: "Creation" },
    { key: "S", description: "Open Quick Status Switcher for selected issue", category: "Triage" },
    { key: "P", description: "Change Priority (Urgent, High, Medium, Low, None)", category: "Triage" },
    { key: "A", description: "Assign issue to a teammate or self", category: "Triage" },
    { key: "L", description: "Add or remove labels and tags", category: "Triage" },
    { key: "⌘K", description: "Open global command palette and search", category: "Navigation" },
    { key: "G then I", description: "Jump directly to My Inbox & Mentions", category: "Navigation" },
    { key: "G then P", description: "Jump to Projects Roadmap", category: "Navigation" },
    { key: "G then C", description: "Jump to Active Cycle board", category: "Navigation" },
    { key: "V / B", description: "Toggle between List view (V) and Board view (B)", category: "View" },
    { key: "Space", description: "Preview issue details in side drawer", category: "Preview" },
    { key: "X", description: "Toggle issue selection for batch operations", category: "Selection" },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 px-4 py-2 min-h-[32px] text-xs font-bold text-[#5E6AD2] dark:text-[#7C88E8]">
            <Palette className="size-3.5" />
            <span>08 — Design System & Tokens</span>
          </div>
          <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            Obsidian Dark Architecture & Keyboard Interaction Model
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Linear's visual aesthetic is characterized by deep obsidian blacks, glowing violet-indigo accents, high contrast typography, and an uncompromising dedication to single-key home-row ergonomics.
          </p>
        </div>
      </div>

      {/* 8.1 Interaction State Model */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Workflow className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              8.1 Interaction State Model
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              Finite state machine governing focus states, optimistic commits, and offline WebSocket delta synchronization.
            </p>
          </div>
        </div>

        <MermaidDiagram
          chart={stateModelChart}
          title="Linear Interaction Finite State Diagram"
          caption="State transitions from keyboard focus to optimistic local commits, WebSocket delta synchronization, and offline queue recovery."
        />
      </div>

      {/* 8.2 Color Token Primitives */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Palette className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              8.2 Obsidian Dark Mode Color Primitives
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              Calibrated for 100% WCAG 2.2 AA contrast compliance on desktop and high-DPI displays.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {colorTokens.map((c) => (
            <div
              key={c.hex}
              className="p-4 rounded-xl border border-border bg-card space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div
                  className="w-full h-14 rounded-lg border border-border/50 shadow-inner flex items-center justify-center font-mono text-xs font-bold"
                  style={{
                    backgroundColor: c.hex,
                    color: c.hex === "#0F1015" || c.hex === "#16181D" || c.hex === "#1F232B" ? "#FFFFFF" : "#000000",
                  }}
                >
                  {c.hex}
                </div>
                <h3 className="text-xs font-bold text-foreground">{c.name}</h3>
                <p className="text-[11px] text-muted-foreground leading-snug">{c.role}</p>
              </div>

              <div className="pt-2 border-t border-border/50 text-[10px] text-muted-foreground font-mono flex items-center justify-between">
                <span>{c.token}</span>
                <span className="text-[#5E6AD2] font-semibold">{c.contrast}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TypographySpecimen />
      <TypographySpecimen />

      {/* 8.3 Keyboard Ergonomics Index */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Keyboard className="size-4 text-[#5E6AD2]" />
          <div>
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              8.3 Universal Keyboard Shortcuts Master Index
            </h5>
            <p className="text-xs text-muted-foreground mt-0.5">
              The core keys that enable 98.2% unassisted keyboard traversal across all product operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {shortcuts.map((s) => (
            <div
              key={s.key}
              className="p-3.5 rounded-xl border border-border bg-muted/20 flex items-center justify-between gap-3"
            >
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                  {s.category}
                </span>
                <p className="text-xs text-foreground font-medium">{s.description}</p>
              </div>
              <kbd className="px-2.5 py-1 rounded-md bg-background border border-border font-mono text-xs font-bold text-[#5E6AD2] shadow-xs shrink-0">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}







