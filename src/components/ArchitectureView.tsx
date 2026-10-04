import React from 'react'
import { Layers, Columns3, CheckCircle2, LayoutGrid, CheckSquare, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const ArchitectureView: React.FC = () => {
  const statesList = [
    'Default Loaded State',
    'Shimmer Skeleton State',
    'Zero-Data Empty State',
    'Inline Form Error State',
    'Network Offline Cache State',
    'Partial Metric Fallback State',
    'Role-Based Lock State',
    'Onboarding Walkthrough State',
    'Extreme Value Truncation State',
    'Micro-Filter Dynamic State',
    'Hover Elevation State',
    'Focus-Visible Ring State',
    'Active Pressed State',
    'Disabled Inactive State',
    'Luminous Slate Dark State',
    'Single-Column Mobile State',
  ]

  const sitemapMermaidChart = `graph TD
    Root["Minimal UI Ecosystem (Root /)"]
    
    subgraph General["01. General Overview Archetypes"]
      D01["D01 General Analytics<br/>(Metrics, Splines, Regional Radar)"]
      D02["D02 General App<br/>(Telemetry, Invoices, Top Authors)"]
      D03["D03 General Banking<br/>(Dual Cards, Quick Transfer Slider, Expenses)"]
      D04["D04 General Booking<br/>(Capacity Gauges, Room Status, Reviews)"]
      D05["D05 General E-Commerce<br/>(Profit Margins, SKU Leaderboard, Sales)"]
      D06["D06 General File Manager<br/>(Cloud Bridge, Donut Ring, Spatial Grid)"]
    end
    
    subgraph Management["02. Management Hub"]
      Users["User Directory & Access Control"]
      Products["Product Catalog & SKU Inventory"]
      Orders["Order Dispatch & Tracking"]
      Invoices["Invoicing & Tax Compliance"]
    end
    
    subgraph Apps["03. Operational Apps"]
      Chat["Real-time Operator Chat"]
      Mail["Dispatch Notification Mailbox"]
      Calendar["Shift & Booking Scheduler"]
      Kanban["Ops Task & Sprint Board"]
    end
    
    subgraph SharedServices["04. Cross-Cutting Services"]
      Command["Global Command Menu (⌘K)"]
      Notifications["Realtime Alert Center (Bell)"]
      Profile["User Account & MFA Security"]
      Settings["Theme (Light/Dark) & Token Config"]
    end
    
    Root --> General
    Root --> Management
    Root --> Apps
    Root --> SharedServices`

  const iaMermaidChart = `graph TD
    Root["Minimal UI Ecosystem (Root)"] --> Nav["Dual Navigation Engine"]
    Nav -->|Laptop < 1920px| Rail["280px Vertical Left Rail"]
    Nav -->|Ultrawide >= 1920px| TopNav["Full-Bleed Horizontal TopNav"]
    Nav -->|Mobile < 768px| BottomNav["Mobile Bottom Tab Bar + Sheet Drawer"]
    
    Rail --> D01["D01 General Analytics"]
    Rail --> D02["D02 General App"]
    Rail --> D03["D03 General Banking"]
    Rail --> D04["D04 General Booking"]
    Rail --> D05["D05 General E-Commerce"]
    Rail --> D06["D06 General File Manager"]

    TopNav --> D01
    TopNav --> D02
    TopNav --> D03
    TopNav --> D04
    TopNav --> D05
    TopNav --> D06

    BottomNav --> D01
    BottomNav --> D03
    BottomNav --> D05
    BottomNav --> D06
`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Layers className="size-3.5" />
            <span>05 — System Information Architecture & Spatial Grid</span>
          </div>
          <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            Ecosystem Sitemap, Dual Navigation & Content Models
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Minimal UI structures deep operational SaaS applications into a predictable, low-cognitive-load taxonomy.
            It features a 4-tier ecosystem sitemap, a viewport-adaptive dual navigation engine (280px vertical rail vs. horizontal topnav),
            and strict content metadata architectures.
          </p>
        </div>
      </div>

      {/* 5.1 Full Ecosystem Sitemap in Mermaid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="size-4 text-primary" />
          <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
            5.1 Ecosystem Sitemap & Structural Taxonomy
          </h5>
        </div>
        <MermaidDiagram
          chart={sitemapMermaidChart}
          title="Minimal UI Complete Ecosystem Sitemap Hierarchy"
          caption="Comprehensive hierarchical sitemap showing all primary navigation branches, management hubs, embedded operational apps, and system cross-cutting services."
        />
      </div>

      {/* 5.2 Navigation Architecture Header & Diagram */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Columns3 className="size-4 text-primary" />
          <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
            5.2 Viewport Navigation Architecture & Resolution Routing
          </h5>
        </div>
        <MermaidDiagram
          chart={iaMermaidChart}
          title="Viewport Breakpoint Routing & Navigation Resolution Engine"
          caption="Adaptive engine dynamically serves vertical rail navigation on laptops, full-bleed horizontal navigation on ultrawide monitors, and thumb-friendly bottom bars on mobile."
        />
      </div>

      {/* Dual Layout Comparison Visual */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Layout A: Vertical Rail */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs border border-emerald-500/20">
                  A
                </span>
                <h3 className="text-base font-bold text-foreground">
                  Vertical Rail Navigation (Default)
                </h3>
              </div>
              <Badge variant="outline" className="text-xs font-mono font-semibold">
                1280px – 1440px
              </Badge>
            </div>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Fixed 280px left rail with clear categorical division: General, Management, and Apps.
              Optimal for standard laptops and single-task operations where vertical scanning is primary.
            </p>

            {/* Visual Interactive Wireframe Mockup */}
            <div className="mt-4 rounded-xl border border-border bg-background shadow-xs overflow-hidden text-[11px]">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-3 py-2 bg-muted/60 border-b border-border text-[10px] text-muted-foreground font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-red-400/80" />
                  <span className="size-2 rounded-full bg-amber-400/80" />
                  <span className="size-2 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-[9px] text-foreground font-semibold">1440 × 900 Laptop Display (Standard)</span>
                </div>
                <Badge variant="outline" className="text-[9px] px-1.5 py-0 h-4 border-emerald-500/30 text-emerald-600 bg-emerald-500/10">
                  Vertical Rail Active
                </Badge>
              </div>

              {/* Window Body: Sidebar + Main Content */}
              <div className="grid grid-cols-12 min-h-[220px]">
                {/* 280px Vertical Rail (represented as 3 cols out of 12) */}
                <div className="col-span-3 bg-muted/30 border-r border-border p-2 space-y-2.5">
                  {/* Brand logo */}
                  <div className="flex items-center gap-1.5 pb-1 border-b border-border/60">
                    <div className="size-4 rounded bg-primary text-primary-foreground font-black text-[9px] flex items-center justify-center">
                      M
                    </div>
                    <span className="font-bold text-[10px] text-foreground tracking-tight">Minimal</span>
                  </div>

                  {/* Nav Group 1 */}
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-wider block px-1">
                      General
                    </span>
                    <div className="rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold px-1.5 py-0.5 text-[9px] flex items-center gap-1">
                      <span className="size-1 rounded-full bg-emerald-500" />
                      <span>Analytics</span>
                    </div>
                    <div className="text-muted-foreground px-1.5 py-0.5 text-[9px]">Banking</div>
                    <div className="text-muted-foreground px-1.5 py-0.5 text-[9px]">Booking</div>
                    <div className="text-muted-foreground px-1.5 py-0.5 text-[9px]">E-Commerce</div>
                  </div>

                  {/* Nav Group 2 */}
                  <div className="space-y-1 pt-1 border-t border-border/40">
                    <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-wider block px-1">
                      Management
                    </span>
                    <div className="text-muted-foreground px-1.5 py-0.5 text-[9px]">Users</div>
                    <div className="text-muted-foreground px-1.5 py-0.5 text-[9px]">Invoices</div>
                  </div>
                </div>

                {/* Main Content Area (9 cols out of 12) */}
                <div className="col-span-9 p-3 space-y-2.5 bg-background">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-border/60">
                    <div className="h-5 px-2 rounded bg-muted/50 border border-border text-[9px] text-muted-foreground flex items-center gap-1 w-28">
                      <span>🔍</span> <span>Search ⌘K</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="size-4 rounded-full bg-muted flex items-center justify-center text-[9px]">🔔</span>
                      <span className="size-4 rounded-full bg-primary/20 text-primary font-bold text-[9px] flex items-center justify-center">P</span>
                    </div>
                  </div>

                  {/* 4 KPI Cards */}
                  <div className="grid grid-cols-4 gap-1.5">
                    <div className="p-1.5 rounded-lg border border-border bg-card">
                      <span className="text-[8px] text-muted-foreground block truncate">Revenue</span>
                      <span className="font-bold text-[10px] text-foreground">$48.2k</span>
                    </div>
                    <div className="p-1.5 rounded-lg border border-border bg-card">
                      <span className="text-[8px] text-muted-foreground block truncate">Speed</span>
                      <span className="font-bold text-[10px] text-foreground">12s</span>
                    </div>
                    <div className="p-1.5 rounded-lg border border-border bg-card">
                      <span className="text-[8px] text-muted-foreground block truncate">Orders</span>
                      <span className="font-bold text-[10px] text-foreground">1,420</span>
                    </div>
                    <div className="p-1.5 rounded-lg border border-border bg-card">
                      <span className="text-[8px] text-muted-foreground block truncate">Capacity</span>
                      <span className="font-bold text-[10px] text-foreground">94%</span>
                    </div>
                  </div>

                  {/* 2 Bottom Panels */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {/* Primary Mixed Chart Panel (2 cols) */}
                    <div className="col-span-2 p-2 rounded-lg border border-border bg-card space-y-1">
                      <div className="flex items-center justify-between text-[9px] font-bold text-foreground">
                        <span>Revenue & Conversion Spline</span>
                        <span className="text-emerald-500 font-mono text-[8px]">+31.1%</span>
                      </div>
                      <div className="h-14 w-full rounded bg-muted/20 flex items-end p-1 gap-1">
                        <div className="w-1/6 bg-primary/30 h-4 rounded-xs" />
                        <div className="w-1/6 bg-primary/40 h-7 rounded-xs" />
                        <div className="w-1/6 bg-primary/50 h-5 rounded-xs" />
                        <div className="w-1/6 bg-primary/70 h-9 rounded-xs" />
                        <div className="w-1/6 bg-primary/90 h-11 rounded-xs" />
                        <div className="w-1/6 bg-primary h-12 rounded-xs" />
                      </div>
                    </div>

                    {/* Donut / Ratio Panel (1 col) */}
                    <div className="col-span-1 p-2 rounded-lg border border-border bg-card space-y-1 flex flex-col justify-between">
                      <span className="text-[9px] font-bold text-foreground">Direct Share</span>
                      <div className="size-10 rounded-full border-4 border-primary border-t-emerald-300 mx-auto flex items-center justify-center text-[8px] font-bold text-foreground">
                        68%
                      </div>
                      <span className="text-[8px] text-muted-foreground text-center block">Organic Direct</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="size-4" />
            <span>Optimal focus; prevents eye strain on 13"-15" laptops.</span>
          </div>
        </div>

        {/* Layout B: Horizontal TopNav */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs border border-blue-500/20">
                  B
                </span>
                <h3 className="text-base font-bold text-foreground">
                  Horizontal TopNav Layout (Ultrawide)
                </h3>
              </div>
              <Badge variant="outline" className="text-xs font-mono font-semibold">
                1920px+ Enterprise
              </Badge>
            </div>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Collapses navigation into a slim sticky top header, unlocking 100% full-bleed canvas width for 8-column financial grids, extensive booking reservation matrices, and multi-cloud file directories.
            </p>

            {/* Visual Interactive Wireframe Mockup */}
            <div className="mt-4 rounded-xl border border-border bg-background shadow-xs overflow-hidden text-[11px]">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-3 py-2 bg-muted/60 border-b border-border text-[10px] text-muted-foreground font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-red-400/80" />
                  <span className="size-2 rounded-full bg-amber-400/80" />
                  <span className="size-2 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-[9px] text-foreground font-semibold">2560 × 1440 Ultrawide Display (Full-Bleed)</span>
                </div>
                <Badge variant="outline" className="text-[9px] px-1.5 py-0 h-4 border-blue-500/30 text-blue-600 bg-blue-500/10">
                  Full-Bleed TopNav Active
                </Badge>
              </div>

              {/* Full Width TopNav Header (No Left Sidebar!) */}
              <div className="flex items-center justify-between px-3 py-2 bg-muted/30 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="size-4 rounded bg-blue-600 text-white font-black text-[9px] flex items-center justify-center">
                      M
                    </div>
                    <span className="font-bold text-[10px] text-foreground tracking-tight">Minimal UI</span>
                  </div>

                  {/* Horizontal Navigation Pills */}
                  <div className="flex items-center gap-1">
                    <span className="rounded bg-blue-500/15 text-blue-600 dark:text-blue-400 font-bold px-2 py-0.5 text-[9px]">
                      General
                    </span>
                    <span className="text-muted-foreground px-2 py-0.5 text-[9px]">Apps</span>
                    <span className="text-muted-foreground px-2 py-0.5 text-[9px]">Management</span>
                    <span className="text-muted-foreground px-2 py-0.5 text-[9px]">Analytics</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-5 px-2 rounded bg-background border border-border text-[9px] text-muted-foreground flex items-center gap-1 w-28">
                    <span>🔍</span> <span>Search ⌘K</span>
                  </div>
                  <span className="size-4 rounded-full bg-muted flex items-center justify-center text-[9px]">🔔</span>
                  <span className="size-4 rounded-full bg-blue-600/20 text-blue-600 font-bold text-[9px] flex items-center justify-center">P</span>
                </div>
              </div>

              {/* Full-Bleed Content Area */}
              <div className="p-3 space-y-2.5 bg-background">
                {/* 5 KPI Cards Across Full 100% Width */}
                <div className="grid grid-cols-5 gap-1.5">
                  <div className="p-1.5 rounded-lg border border-border bg-card">
                    <span className="text-[8px] text-muted-foreground block truncate">Gross Margin</span>
                    <span className="font-bold text-[10px] text-foreground">$1.24M</span>
                  </div>
                  <div className="p-1.5 rounded-lg border border-border bg-card">
                    <span className="text-[8px] text-muted-foreground block truncate">Settlement</span>
                    <span className="font-bold text-[10px] text-foreground">1.4s</span>
                  </div>
                  <div className="p-1.5 rounded-lg border border-border bg-card">
                    <span className="text-[8px] text-muted-foreground block truncate">Active Seats</span>
                    <span className="font-bold text-[10px] text-foreground">3,890</span>
                  </div>
                  <div className="p-1.5 rounded-lg border border-border bg-card">
                    <span className="text-[8px] text-muted-foreground block truncate">Global Vol</span>
                    <span className="font-bold text-[10px] text-foreground">$8.9M</span>
                  </div>
                  <div className="p-1.5 rounded-lg border border-border bg-card">
                    <span className="text-[8px] text-muted-foreground block truncate">Error Rate</span>
                    <span className="font-bold text-[10px] text-emerald-500 font-mono">0.04%</span>
                  </div>
                </div>

                {/* 2 Wide Panels: Full-Bleed 16-Col Table + Quick Panel */}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  {/* Full-Bleed 16-Col Ledger (3 cols) */}
                  <div className="col-span-3 p-2 rounded-lg border border-border bg-card space-y-1.5">
                    <div className="flex items-center justify-between text-[9px] font-bold text-foreground">
                      <span>Full-Bleed 16-Column Multi-Currency Financial Ledger</span>
                      <span className="text-blue-500 text-[8px] font-mono">+28% Width Unlocked</span>
                    </div>
                    {/* Mini Data Table Rows */}
                    <div className="space-y-1 text-[8px]">
                      <div className="grid grid-cols-5 gap-1 text-muted-foreground font-semibold border-b border-border/40 pb-0.5">
                        <span>TX ID</span>
                        <span>Counterparty</span>
                        <span>Currency</span>
                        <span>Amount</span>
                        <span>Status</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-foreground">
                        <span className="font-mono text-primary font-bold">#TX-8921</span>
                        <span>Acme Treasury</span>
                        <span>USD</span>
                        <span className="font-bold">$240,000</span>
                        <span className="text-emerald-500 font-bold">✓ Settled</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-foreground">
                        <span className="font-mono text-primary font-bold">#TX-8922</span>
                        <span>Global Logistics</span>
                        <span>EUR</span>
                        <span className="font-bold">€185,500</span>
                        <span className="text-emerald-500 font-bold">✓ Settled</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Control Panel (1 col) */}
                  <div className="col-span-1 p-2 rounded-lg border border-border bg-card space-y-1.5 flex flex-col justify-between">
                    <span className="text-[9px] font-bold text-foreground">Quick Action</span>
                    <div className="p-1 rounded bg-muted/40 border border-border/60 text-[8px] space-y-1">
                      <span className="text-muted-foreground block">Transfer Slider:</span>
                      <div className="h-1.5 w-full bg-blue-500/20 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-3/4 rounded-full" />
                      </div>
                      <span className="font-bold text-foreground font-mono block">$750 / $1000</span>
                    </div>
                    <div className="h-4 rounded bg-blue-600 text-white font-bold text-[8px] flex items-center justify-center">
                      Execute
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="size-4" />
            <span>Yields 28% wider data tables and maximum spatial density.</span>
          </div>
        </div>
      </div>

      {/* 5.3 Content Architecture & Data Schemas */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
          <div className="flex items-center gap-2.5">
            <LayoutGrid className="size-4 text-primary" />
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              5.3 Content Architecture, Taxonomy & Metadata Schemas
            </h5>
          </div>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            Normalized Schema
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Every entity across Minimal UI is mapped through a strict content model guaranteeing consistent labeling, sorting, filtering, and role-based permissions across desktop and mobile surfaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-xs">
          <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-2">
            <span className="font-bold uppercase tracking-wider text-primary text-[11px]">01. Content Types</span>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>• Financial Transaction Ledgers</li>
              <li>• Telemetry Time-Series Feeds</li>
              <li>• Hospitality Reservations</li>
              <li>• Multi-Cloud Storage Objects</li>
              <li>• SKU Inventory & Invoices</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-2">
            <span className="font-bold uppercase tracking-wider text-primary text-[11px]">02. Metadata Primitives</span>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>• Unique UUID / ISO Timestamps</li>
              <li>• Currency ISO 4217 ($ / € / £)</li>
              <li>• State Badges (Success/Pending/Fail)</li>
              <li>• MIME Types & Byte Sizes</li>
              <li>• Audit Trail Signatures</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-2">
            <span className="font-bold uppercase tracking-wider text-primary text-[11px]">03. Search & Filters</span>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>• Global ⌘K Omni-Search</li>
              <li>• Multi-column dynamic sorting</li>
              <li>• Date range temporal presets</li>
              <li>• Saved view state persistence</li>
              <li>• Fuzzy typo tolerance matching</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-2">
            <span className="font-bold uppercase tracking-wider text-primary text-[11px]">04. Permissions (RBAC)</span>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>• <strong>Admin:</strong> Full CRUD + Governance</li>
              <li>• <strong>Operator:</strong> Transfers & Dispatch</li>
              <li>• <strong>Analyst:</strong> Read-only exports</li>
              <li>• <strong>Auditor:</strong> Immutable log access</li>
              <li>• Automatic UI element masking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Universal 16-State Matrix */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
          <div className="flex items-center gap-2.5">
            <LayoutGrid className="size-4 text-primary" />
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              Universal 16-State Component Architecture
            </h5>
          </div>
          <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 font-bold text-xs">
            100% Coverage Certified
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Every interactive widget, data-table row, and action card within Minimal UI strictly implements this standardized 16-state lifecycle to eliminate edge-case errors before engineering handoff.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {statesList.map((state, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-xl border border-border bg-muted/30 p-3 text-xs font-medium text-foreground hover:border-primary/50 transition-colors"
            >
              <CheckSquare className="size-3.5 text-primary shrink-0" />
              <span className="truncate">{state}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}





