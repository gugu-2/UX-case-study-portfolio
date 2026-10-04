import React, { useState } from 'react'
import { Smartphone, Hand, CheckCircle2, ShieldAlert } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const MobileErgonomicsView: React.FC = () => {
  const [activeZone, setActiveZone] = useState<'all' | 'easy' | 'reachable' | 'stretch'>('all')

  const mobileMermaidChart = `graph TD
    Desktop["1440px Multi-Column Grid"] --> Breakpoint{"Viewport < 768px?"}
    Breakpoint -->|Yes| Reflow["Mobile Reflow Engine"]
    Breakpoint -->|No| Maintain["Maintain Desktop Layout"]
    
    Reflow --> Cards["Stack Metric Cards to 1-Column"]
    Reflow --> Tables["Enable Sticky Column Horizontal Swiping"]
    Reflow --> CTAs["Pin Primary Actions to 64px Bottom Thumb Zone"]
    Reflow --> Charts["Collapse Multi-axis Legends to Accordions"]
`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Smartphone className="size-3.5" />
            <span>Mobile UX Kit & Touch Ergonomics</span>
          </div>
          <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            Thumb-Zone Architecture & 48px Touch Ergonomics
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Desktop dashboards cannot simply be shrunk down to mobile. In Minimal UI, every surface
            undergoes structural reflow: tables receive horizontal scroll affordances with sticky headers,
            critical CTAs anchor inside natural thumb sweeps, and touch targets maintain an immutable 48px bounding box.
          </p>
        </div>
      </div>

      {/* Mermaid Mobile Reflow Engine Diagram */}
      <MermaidDiagram
        chart={mobileMermaidChart}
        title="Mobile Adaptive Reflow & Breakpoint Engine"
        caption="Algorithmic reflow pipeline converting desktop multi-column dashboards into thumb-reachable mobile views on viewports < 768px."
      />

      {/* Thumb Zone Visualizer & Principles */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: Interactive Phone Mockup with Thumb Zones (5 cols) */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs lg:col-span-5 flex flex-col items-center">
          <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight mb-4 text-center">
            375px Natural Thumb-Sweep Ergonomic Mapping
          </h5>

          {/* Interactive Zone Filter Buttons */}
          <div className="flex items-center gap-1.5 mb-6 bg-muted/60 p-1 rounded-xl border border-border">
            {(['all', 'easy', 'reachable', 'stretch'] as const).map((zone) => (
              <button
                key={zone}
                onClick={() => setActiveZone(zone)}
                className={`figma-btn-sm h-[30px] min-h-[30px] rounded-[8px] px-3 py-1 text-xs font-bold capitalize transition cursor-pointer ${
                  activeZone === zone
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>

          {/* Phone Frame */}
          <div className="relative w-[280px] h-[520px] rounded-[36px] border-4 border-border bg-background p-3 shadow-xl flex flex-col justify-between overflow-hidden">
            {/* Notch */}
            <div className="absolute top-2 inset-x-0 mx-auto h-4 w-24 rounded-full bg-muted z-20" />

            {/* Stretch Zone (Top 25%) */}
            <div
              className={`rounded-t-2xl p-3 border border-dashed transition-all ${
                activeZone === 'all' || activeZone === 'stretch'
                  ? 'bg-red-500/10 border-red-500/40 opacity-100'
                  : 'opacity-25'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-red-500">
                <span>Hard / Stretch Zone</span>
                <span>Top 25%</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Reserved for static headers, search bars, and display breadcrumbs only.
              </p>
            </div>

            {/* Reachable Zone (Middle 40%) */}
            <div
              className={`my-2 flex-1 rounded-lg p-3 border border-dashed flex flex-col justify-center transition-all ${
                activeZone === 'all' || activeZone === 'reachable'
                  ? 'bg-amber-500/10 border-amber-500/40 opacity-100'
                  : 'opacity-25'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-amber-500">
                <span>Reachable Zone</span>
                <span>Mid 40%</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Interactive charts, filter chips, and scrollable data cards.
              </p>
            </div>

            {/* Natural Easy Zone (Bottom 35%) */}
            <div
              className={`rounded-b-2xl p-3 border border-dashed transition-all ${
                activeZone === 'all' || activeZone === 'easy'
                  ? 'bg-emerald-500/10 border-emerald-500/40 opacity-100'
                  : 'opacity-25'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span>Natural Easy Sweep</span>
                <span>Bottom 35%</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Primary CTAs, bottom navigation sheets, and quick transfer slider.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Technical Ergonomic Rules (7 cols) */}
        <div className="space-y-4 lg:col-span-7">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <Hand className="size-4 text-primary" />
              <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
                48px Immutable Touch Target Bounds
              </h5>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every interactive element rendered on viewport widths &lt; 768px strictly adheres to WCAG 2.2 Target Size Level AA requirements. Even when visual icon glyphs measure 18px–20px, their hit-testing bounding boxes expand seamlessly to at least 48×48px.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl border border-border bg-muted/20">
                <span className="font-bold text-foreground text-xs block mb-1">Padded Hit Boxes</span>
                <p className="text-xs text-muted-foreground">
                  Buttons use negative margin offsets or explicit padding rings to satisfy touch hit targets without altering visual balance.
                </p>
              </div>
              <div className="p-3 rounded-xl border border-border bg-muted/20">
                <span className="font-bold text-foreground text-xs block mb-1">Bottom Sheet Drawers</span>
                <p className="text-xs text-muted-foreground">
                  Complex filter modals translate into bottom swipeable drawers anchored within thumb reach on mobile devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





