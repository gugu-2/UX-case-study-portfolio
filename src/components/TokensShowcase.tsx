import React from 'react'
import { Palette, Type, Ruler, CheckCircle2, Activity, Sparkles, Layers } from 'lucide-react'
import { colorPalette, typographyScale, spatialCadence } from '../data/tokenData'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const TokensShowcase: React.FC = () => {
  const stateModelChart = `flowchart TD
    Init((●)) --> S_Default["Default / Idle State"]
    S_Default -->|Cursor Enters Bounds| S_Hover["Hover State (+8% Luminance)"]
    S_Hover -->|Cursor Leaves Bounds| S_Default
    S_Hover -->|Keyboard Tab| S_Focus["Focus State (2px Emerald Ring)"]
    S_Default -->|Direct Tab Focus| S_Focus
    S_Focus -->|Mouse Down / Spacebar| S_Pressed["Pressed State (Scale 0.98)"]
    S_Pressed -->|Action Dispatched| S_Loading["Loading State (<200ms)"]
    S_Loading -->|200 OK Resolution| S_Success["Success State (1.8s Feedback)"]
    S_Loading -->|Validation / Network Fault| S_Error["Error State (Alert Toast)"]
    S_Error -->|User Recovery / Re-edit| S_Hover
    S_Success -->|Feedback Expiry| S_Default
    
    S_Default -.->|Quota / Lockout| S_Disabled["Disabled State (40% Opacity)"]
    S_Default -.->|Compliance Audit Mode| S_ReadOnly["Read-Only State"]
    S_Default -.->|Multi-select Action| S_Selected["Selected Pill State"]
    S_Default -.->|Accordion / Sheet Trigger| S_Expanded["Expanded State"]

    classDef defaultState fill:#F4F6F8,stroke:#919EAB,stroke-width:1.5px,color:#212B36;
    classDef successState fill:#E8F5E9,stroke:#00AB55,stroke-width:2px,color:#007B55;
    classDef errorState fill:#FFEBEE,stroke:#FF4842,stroke-width:2px,color:#B72136;
    classDef activeState fill:#E8F4FD,stroke:#1890FF,stroke-width:2px,color:#0C53B7;

    class S_Default,S_Disabled,S_ReadOnly defaultState;
    class S_Success successState;
    class S_Error errorState;
    class S_Hover,S_Focus,S_Pressed,S_Loading,S_Selected,S_Expanded activeState;`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Palette className="size-3.5" />
            <span>08 — Design System, Tokens & Interaction States</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            Interaction State Machine, Tokens & 8pt Cadence
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A unified design system is only as strong as its immutable token primitives and deterministic state transitions.
            Minimal UI enforces an atomic state-machine model across every interactive surface, seamlessly compiling to CSS Custom Properties,
            Tailwind CSS OKLCH variables, and Figma Design Tokens.
          </p>
        </div>
      </div>

      {/* 8.1 Interaction State Model */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Activity className="size-4 text-primary" />
            <h2 className="text-lg font-bold text-foreground">
              8.1 Interaction State Model (Deterministic State Machine)
            </h2>
          </div>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            12 Finite States
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Every interactive component in Minimal UI (buttons, table rows, sliders, dropdowns, and cards) strictly adheres to this 12-state deterministic lifecycle to eliminate ambiguous interface states before handoff.
        </p>

        <MermaidDiagram
          chart={stateModelChart}
          title="Component Interaction Lifecycle & State Transition Engine"
          caption="Deterministic state transitions ensure zero dead-ends and instantaneous optimistic feedback for enterprise operators."
        />

        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-muted/40">
              <tr>
                <th className="p-3">State</th>
                <th className="p-3">Trigger / Condition</th>
                <th className="p-3">Visual & Ergonomic Feedback</th>
                <th className="p-3">A11y / ARIA Attribute</th>
                <th className="p-3">Next Recovery State</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground">
              <tr className="hover:bg-muted/30">
                <td className="p-3 font-mono font-bold text-primary">Default</td>
                <td className="p-3 text-muted-foreground">Initial render; component ready</td>
                <td className="p-3">Base token fill, 1px border at 16% opacity</td>
                <td className="p-3 font-mono">aria-disabled="false"</td>
                <td className="p-3">Hover, Focus, Disabled</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 font-mono font-bold text-primary">Hover</td>
                <td className="p-3 text-muted-foreground">Pointer enters component bounds</td>
                <td className="p-3">+8% surface luminance, subtle shadow-xs elevation</td>
                <td className="p-3 font-mono">:hover pseudo-class</td>
                <td className="p-3">Default, Pressed</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 font-mono font-bold text-primary">Focus</td>
                <td className="p-3 text-muted-foreground">Tab key traversal / programmatic focus</td>
                <td className="p-3">2px solid emerald ring (<code className="text-primary font-bold">ring-2 ring-primary ring-offset-2</code>)</td>
                <td className="p-3 font-mono">:focus-visible</td>
                <td className="p-3">Pressed, Default</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 font-mono font-bold text-primary">Pressed</td>
                <td className="p-3 text-muted-foreground">Mouse click down / Spacebar / Enter</td>
                <td className="p-3">Active scale(0.98), darker accent fill</td>
                <td className="p-3 font-mono">:active</td>
                <td className="p-3">Loading, Default</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 font-mono font-bold text-amber-500">Loading</td>
                <td className="p-3 text-muted-foreground">Action dispatched; waiting for API</td>
                <td className="p-3">Micro spinner replaces icon; pointer-events-none</td>
                <td className="p-3 font-mono">aria-busy="true"</td>
                <td className="p-3">Success, Error</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Success</td>
                <td className="p-3 text-muted-foreground">API returns 200 OK</td>
                <td className="p-3">Green pulse checkmark, transient snackbar notification</td>
                <td className="p-3 font-mono">role="status"</td>
                <td className="p-3">Default (after 1.8s)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 font-mono font-bold text-red-500">Error</td>
                <td className="p-3 text-muted-foreground">Validation failure / 4xx/5xx network error</td>
                <td className="p-3">Red highlight ring, inline error text with retry action</td>
                <td className="p-3 font-mono">aria-invalid="true"</td>
                <td className="p-3">Hover, Focus (re-edit)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 font-mono font-bold text-muted-foreground">Disabled</td>
                <td className="p-3 text-muted-foreground">Permissions lock or required inputs incomplete</td>
                <td className="p-3">Opacity 45%, cursor: not-allowed, stripped click events</td>
                <td className="p-3 font-mono">aria-disabled="true"</td>
                <td className="p-3">Default (upon precondition)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 font-mono font-bold text-muted-foreground">Read-Only</td>
                <td className="p-3 text-muted-foreground">Auditing mode or historical snapshot view</td>
                <td className="p-3">Clean plaintext look, no focus rings, copy enabled</td>
                <td className="p-3 font-mono">aria-readonly="true"</td>
                <td className="p-3">Immutable</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 font-mono font-bold text-blue-500">Selected</td>
                <td className="p-3 text-muted-foreground">Multi-select table row or active chip</td>
                <td className="p-3">Subtle emerald wash (primary.lighter at 20%), check badge</td>
                <td className="p-3 font-mono">aria-selected="true"</td>
                <td className="p-3">Default</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 font-mono font-bold text-purple-500">Expanded / Collapsed</td>
                <td className="p-3 text-muted-foreground">Accordion or sidebar drawer toggled</td>
                <td className="p-3">Chevron rotates 180deg, CSS grid animated expansion</td>
                <td className="p-3 font-mono">aria-expanded="true/false"</td>
                <td className="p-3">Bi-directional toggle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Color Palette Categories */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Palette className="size-4 text-primary" />
          <h2 className="text-lg font-bold text-foreground">
            Color Primitives & Contrast Ratios
          </h2>
        </div>

        <div className="space-y-6">
          {colorPalette.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-6 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {group.category}
                </h3>
                <span className="text-xs text-muted-foreground font-mono">
                  {group.tokens.length} Tokens
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {group.tokens.map((tok) => (
                  <div
                    key={tok.name}
                    className="flex flex-col justify-between rounded-xl border border-border bg-muted/20 p-3 hover:border-primary/50 transition-colors"
                  >
                    {/* Color Swatch Block (No copy buttons) */}
                    <div
                      className="h-14 w-full rounded-lg border border-border/80 shadow-xs mb-3 flex items-end justify-between p-2"
                      style={{ backgroundColor: tok.hex }}
                    >
                      <span className="text-[10px] font-mono px-1 py-0.5 rounded bg-black/40 text-white backdrop-blur-xs">
                        {tok.contrastOnWhite}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground truncate">
                          {tok.name}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground font-semibold">
                          {tok.hex}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {tok.usage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography Scale Grid */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Type className="size-4 text-primary" />
            <h2 className="text-lg font-bold text-foreground">
              Typography Optical Hierarchy (Roboto Type Scale)
            </h2>
          </div>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            13-Level Material Spec
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Standardized 13-tier optical typographic hierarchy utilizing <strong>Roboto</strong> across all viewport scales.
          Calibrated for high data density, enhanced subtext/description legibility (+30%), and crisp contrast ratios across desktop and mobile devices.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-muted/40">
              <tr>
                <th className="p-3">Scale Token</th>
                <th className="p-3">Typeface</th>
                <th className="p-3">Weight</th>
                <th className="p-3">Size</th>
                <th className="p-3">Case</th>
                <th className="p-3">Letter Spacing</th>
                <th className="p-3">Line Height</th>
                <th className="p-3">Typical Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground">
              {typographyScale.map((t) => (
                <tr key={t.name} className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 font-mono font-bold text-primary">{t.name}</td>
                  <td className="p-3 font-medium text-foreground">{t.typeface}</td>
                  <td className="p-3">{t.weight}</td>
                  <td className="p-3 font-mono font-bold">{t.size}</td>
                  <td className="p-3">{t.case}</td>
                  <td className="p-3 font-mono">{t.letterSpacing}</td>
                  <td className="p-3 font-mono text-muted-foreground">{t.lineHeight}</td>
                  <td className="p-3 text-muted-foreground">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 8pt Spatial Cadence Scale */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Ruler className="size-4 text-primary" />
          <h2 className="text-lg font-bold text-foreground">
            8pt Linear Spatial Cadence
          </h2>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          All padding, margin, gutter, and radius tokens derive strictly from multiples of 8 (with 4px micro-steps).
          This guarantees mathematical rhythm across multi-pane layouts.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-2">
          {spatialCadence.map((space) => (
            <div
              key={space.token}
              className="rounded-xl border border-border bg-muted/30 p-3 flex flex-col justify-between hover:border-primary/50 transition-colors"
            >
              <div className="text-xs font-mono font-bold text-foreground">
                {space.token}
              </div>
              <div className="text-xl font-black text-primary font-mono my-1">
                {space.px}
              </div>
              <div className="text-xs text-muted-foreground">
                {space.usage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
