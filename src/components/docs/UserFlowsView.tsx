import React from 'react'
import { GitFork, CheckCircle2, ArrowRight, Layers, Table, CheckSquare, ListTree } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'
import { screensData } from '@/data/screensData'

export const UserFlowsView: React.FC = () => {
  const userFlowChart = `graph TD
    Trigger([Trigger: 8:00 AM Daily Treasury Audit]) --> Screen1[Screen D03: Banking Treasury Dashboard]
    Screen1 --> Action1[Action: Select Favorite Beneficiary Avatar]
    Action1 --> Decision1{Account Valid & Active?}
    Decision1 -->|No| Recovery1[Inline IBAN Prompt & Verification]
    Decision1 -->|Yes| Action2[Action: Drag Tactile Amount Slider]
    Action2 --> Decision2{Sufficient Liquidity Balance?}
    Decision2 -->|No| Recovery2[Prompt Treasury Top-up / FX Conversion]
    Decision2 -->|Yes| Action3[Action: Slide to Confirm Transaction]
    Action3 --> Response1[System Response: Optimistic UI Animation <200ms]
    Response1 --> Screen2[Screen: Instant Transfer Slip & Real-Time Ledger Sync]
    Screen2 --> Success([Success: Transaction Completed with Zero Errors])`

  const taskFlowChart = `graph TD
    Goal([Goal: Front-Desk Guest Check-in & Review Moderation]) --> Task1["Task 1: Search Reservation ID in Booking Ledger"]
    Task1 --> Subtask1["Subtask 1.1: Verify Guest Photo ID & Digital Passport"]
    Subtask1 --> Action1["Action: Click Assign Key Card Button"]
    Action1 --> Response1["System Response: Smart NFC Key Card Programmed"]
    Response1 --> Decision1{Pending Guest Feedback?}
    Decision1 -->|No| NextAction["Dispatch Welcome SMS & Complete Check-in"]
    Decision1 -->|Yes| Task2["Task 2: Review Escalation Queue"]
    Task2 --> Action2["Action: Moderate Review Rating"]
    Action2 --> Complete([Goal Achieved: Guest Checked-in & Sentiment Safeguarded])`

  const decisionTreeChart = `graph TD
    Start([Start: Cloud File Ingestion Request]) --> CheckAuth{Is User Authenticated?}
    CheckAuth -->|No| PromptMFA["Prompt MFA Security Check"]
    PromptMFA --> CheckAuth
    CheckAuth -->|Yes| CheckRole{Role Permissions?}
    CheckRole -->|Viewer| LockUpload["Display Upload Disabled: Read-Only Role"]
    CheckRole -->|Operator / Admin| CheckQuota{Storage Headroom Available?}
    CheckQuota -->|Quota Exceeded| TriggerAlert["Warning Donut: Quota Reached (Prompt Upgrade)"]
    CheckQuota -->|Within Limit| ClientEncrypt["Client-side SHA-256 Hash & Encrypted Upload"]
    ClientEncrypt --> GenerateLink["Generate Real-time Secure Share Link"]
    GenerateLink --> Complete([Upload Verified & Indexed])`

  const screenStates = [
    'Default',
    'Loading',
    'Skeleton',
    'Empty',
    'Error',
    'Success',
    'Offline',
    'Partial Data',
    'Permission Denied',
    'First Use',
    'Returning User',
    'Disabled',
    'Read-Only',
    'Expired',
    'Maintenance',
    'Long Content',
    'Extreme Data',
  ]

  const screenInventory = [
    { id: 'D01', name: 'General Analytics', platform: 'Desktop / Mobile', priority: 'P0 Critical', defaultFlow: 'Executive KPI audit & channel attribution' },
    { id: 'D02', name: 'General App', platform: 'Desktop / Mobile', priority: 'P0 Critical', defaultFlow: 'Storage telemetry & developer billing ledger' },
    { id: 'D03', name: 'General Banking', platform: 'Desktop / Mobile', priority: 'P0 Critical', defaultFlow: 'Dual-card quick transfer & expense reconciliation' },
    { id: 'D04', name: 'General Booking', platform: 'Desktop / Mobile', priority: 'P0 Critical', defaultFlow: 'Front-desk arrivals & review sentiment moderation' },
    { id: 'D05', name: 'General E-Commerce', platform: 'Desktop / Mobile', priority: 'P0 Critical', defaultFlow: 'Hourly sales velocity & SKU depletion tracking' },
    { id: 'D06', name: 'General File Manager', platform: 'Desktop / Mobile', priority: 'P0 Critical', defaultFlow: 'Multi-cloud asset ingestion & storage breakdown' },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <GitFork className="size-3.5" />
            <span>06 — User & Task Flows, Decision Trees & State Matrices</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            End-to-End Operational Flows & Screen-State Matrix
          </h1>
          <p className="figma-body1 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Every critical task in Minimal UI is mapped through deterministic flowchart topologies.
            We eliminate ambiguous UI paths by specifying exact user actions, branching logic, optimistic feedback cycles,
            screen inventories, and universal 17-state matrices.
          </p>
        </div>
      </div>

      {/* 6.1 User Flow */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <GitFork className="size-4 text-primary" />
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground">
              6.1 Primary User Flow: Banking Quick Transfer & Treasury Settlement
            </h2>
          </div>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            12s Target Latency
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Pritam's foundational 2021 interaction pattern replacing multi-step wire forms with an intuitive tactile slider and favorite recipient avatars, delivering instant optimistic feedback in under 200ms.
        </p>

        <MermaidDiagram
          chart={userFlowChart}
          title="Banking Quick Transfer & Dynamic Balance Validation User Flow"
          caption="Linear flow with integrated pre-condition checks, tactile slider interaction, and optimistic UI commitment."
        />
      </div>

      {/* 6.2 Task Flow */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <ListTree className="size-4 text-primary" />
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground">
              6.2 Granular Task Flow: Hospitality Booking & Review Escalation
            </h2>
          </div>
          <Badge variant="outline" className="text-xs font-bold">
            Cognitive Audit
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Deconstructs high-frequency operator actions into subtasks, system responses, and moderation decisions to minimize mental workload during peak check-in surges.
        </p>

        <MermaidDiagram
          chart={taskFlowChart}
          title="Front-Desk Check-in & Review Escalation Task Flow"
          caption="Maps granular human actions to automatic system responses and sentiment escalation triggers."
        />
      </div>

      {/* 6.3 Decision Tree */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Layers className="size-4 text-primary" />
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground">
              6.3 Architectural Decision Tree: Cloud Ingestion & Quota Allocation
            </h2>
          </div>
          <Badge variant="outline" className="text-xs font-bold">
            Branching Logic
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Explicit decision branches handling authentication states, role permissions (RBAC), and disk quota warnings before cloud ingestion begins.
        </p>

        <MermaidDiagram
          chart={decisionTreeChart}
          title="Multi-Cloud Ingestion & RBAC Authorization Decision Tree"
          caption="Zero-dead-end decision tree ensuring proper access verification and storage quota headroom."
        />
      </div>

      {/* 6.4 Screen Inventory */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Table className="size-4 text-primary" />
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground">
              6.4 Master Screen Inventory (The 6 Canonical Archetypes)
            </h2>
          </div>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            6 Archetypes
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Screen Name</th>
                <th className="p-3">Target Platform</th>
                <th className="p-3">Priority</th>
                <th className="p-3">Core Operational Flow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground">
              {screenInventory.map((s) => (
                <tr key={s.id} className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 font-mono font-bold text-primary">{s.id}</td>
                  <td className="p-3 font-semibold">{s.name}</td>
                  <td className="p-3 text-muted-foreground">{s.platform}</td>
                  <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">{s.priority}</td>
                  <td className="p-3 text-muted-foreground">{s.defaultFlow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 6.5 Screen-State Matrix */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <CheckSquare className="size-4 text-primary" />
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground">
              6.5 Comprehensive 17-State Screen Matrix
            </h2>
          </div>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            100% Edge-Case Coverage
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          In Minimal UI, every single screen archetypes strictly specifies and implements these 17 distinct edge-case states before engineering sign-off.
        </p>

        <div className="overflow-x-auto pt-2">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border">
              <tr>
                <th className="p-3">State Identifier</th>
                <th className="p-3">Operational Purpose & Presentation</th>
                <th className="p-3">Screen Archetype Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground">
              {screenStates.map((state, idx) => (
                <tr key={state} className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 font-mono font-bold text-primary">State {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}: {state}</td>
                  <td className="p-3 text-muted-foreground">
                    {state === 'Default' && 'Nominal operational layout with fully loaded live telemetry and active metrics.'}
                    {state === 'Loading' && 'Instantaneous micro-spinners and optimistic updates while awaiting async responses.'}
                    {state === 'Skeleton' && 'Shimmer pulse skeletons matching exact 8pt spatial dimensions to prevent layout shifts.'}
                    {state === 'Empty' && 'Descriptive empty state answering: What happened? Why? What can I do next?'}
                    {state === 'Error' && 'Clear inline error rings, explicit explanations, and non-destructive retry actions.'}
                    {state === 'Success' && 'Transient pulse badges, optimistic balance reconciliation, and non-blocking slips.'}
                    {state === 'Offline' && 'Local storage caching with persistent status banner indicating cached mode.'}
                    {state === 'Partial Data' && 'Displays available metrics with graceful fallback indicators on failing endpoints.'}
                    {state === 'Permission Denied' && 'Visual masking and lock icons explaining required RBAC credentials.'}
                    {state === 'First Use' && 'Subtle interactive onboarding pointers highlighting ⌘K and quick transfer.'}
                    {state === 'Returning User' && 'Immediate restoration of user filter presets and dual-nav layout preferences.'}
                    {state === 'Disabled' && '45% opacity, non-interactive cursor, and explanatory tooltip.'}
                    {state === 'Read-Only' && 'Compliance audit view; text copy allowed; action dispatchers suppressed.'}
                    {state === 'Expired' && 'Session timeout modal with secure in-place re-authentication preserving input.'}
                    {state === 'Maintenance' && 'Scheduled downtime banner with countdown timer and read-only fallback mode.'}
                    {state === 'Long Content' && 'Graceful multi-line truncation with tooltip reveal and virtualized scrolling.'}
                    {state === 'Extreme Data' && 'Handles billions in currency and 7-digit tables without container overflow.'}
                  </td>
                  <td className="p-3 font-mono text-[11px] text-primary">All 6 Archetypes (D01-D06)</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
