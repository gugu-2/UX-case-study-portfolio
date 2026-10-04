import React from 'react'
import { FileCode2, CheckCircle2, ShieldCheck, Layers, Award, GitBranch, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from '@/components/ui/mermaid-diagram'

export const DeveloperHandoffView: React.FC = () => {
  const ddrList = [
    {
      id: 'DDR-01',
      title: 'Dual Navigation Architecture (Vertical Rail vs. Horizontal TopNav)',
      context: 'Power users on 27"+ 4K monitors reported standard 280px sidebars crushed wide financial ledgers and comparison charts.',
      decision: 'Engineered a switchable CSS Grid engine allowing instant toggling between a vertical left rail and a dense top horizontal navigation bar.',
      impact: 'Yielded 28% wider data tables and 41.8% voluntary adoption among enterprise operators.',
    },
    {
      id: 'DDR-02',
      title: 'Tactile Quick Transfer Amount Slider with Bi-Directional Input',
      context: 'Original 5-step wire modal caused high cognitive drop-off and transfer execution times exceeding 48 seconds.',
      decision: 'Replaced multi-step forms with a tactile slider + recipient avatar bar and instant input synchronization.',
      impact: 'Reduced transfer completion time to 12s and increased completion rate from 61% to 88%.',
    },
    {
      id: 'DDR-03',
      title: 'Subtext & Description Typographic Legibility Scaling (+30%)',
      context: 'Enterprise analysts in low-light environments experienced eye strain with sub-13px small text during prolonged shifts.',
      decision: 'Elevated base description, subtext, and caption scale by ~30% and medium text by 20% while calibrating contrast to WCAG 2.2 AAA ratios.',
      impact: 'Eliminated reading fatigue during high-speed data audits and established benchmark accessibility.',
    },
  ]

  const qaMermaidChart = `graph TD
    Figma["Figma Tokens (Web-r Node 0-2913)"] --> Export["Tokens Studio JSON Exporter"]
    Export --> Tokens["Semantic Token Dictionary"]
    Tokens --> CSS["CSS / Tailwind OKLCH Custom Variables"]
    
    CSS --> Storybook["Component Storybook Sandboxes"]
    Storybook --> A11yTest["Automated Axe WCAG 2.2 AA Audit"]
    A11yTest --> E2E["Cypress / Playwright Visual Regression"]
    E2E --> SignOff["Production Sign-Off & Ship"]
`

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <FileCode2 className="size-3.5" />
            <span>11 — Developer Handoff, API Contracts & Design QA</span>
          </div>
          <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
            Machine-Readable Token Engine & Design Decision Records (DDRs)
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Zero ambiguity in engineering handoff. Minimal UI delivers strict component API contracts,
            versioned W3C-compliant Design Tokens in JSON format, and immutable architectural records detailing the exact research rationale behind every interaction.
          </p>
        </div>
      </div>

      {/* Mermaid Handoff & QA Pipeline Diagram */}
      <MermaidDiagram
        chart={qaMermaidChart}
        title="Automated Design-to-Code Pipeline & QA Gatekeeper"
        caption="From Figma atomic tokens to automated WCAG regression tests, ensuring 100% fidelity between design specifications and production code."
      />

      {/* Token Schema & Specifications Architecture Card (Zero-Code Visual Presentation) */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Layers className="size-4 text-primary" />
            <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
              Production Design Token Schema Specifications
            </h5>
          </div>
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="size-3 mr-1" /> W3C DTCG Standard
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Minimal UI design tokens follow the official <strong>W3C Design Tokens Community Group (DTCG)</strong> standard specification.
          Design decisions compile deterministically from Figma nodes into atomic semantic variables across web, iOS, and Android without manual developer interpretation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Tier 1: Global Primitives
              </h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Base values for raw OKLCH hue channels, mathematical spatial increments (4px, 8px, 16px, 24px), font weight vectors, and core radiuses. Never consumed directly in UI components.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-blue-500" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Tier 2: Semantic Intent
              </h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Contextual aliases mapping primitives to intent: <code className="text-primary font-bold">bg.default</code>, <code className="text-primary font-bold">text.primary</code>, <code className="text-primary font-bold">accent.main</code>, and <code className="text-primary font-bold">status.warning</code>. Resolves light/dark elevation automatically.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-purple-500" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Tier 3: Component Scopes
              </h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Component-level tokens binding semantic roles to concrete UI widgets: <code className="text-primary font-bold">card.radius.default</code>, <code className="text-primary font-bold">button.primary.hover</code>, and <code className="text-primary font-bold">slider.track.fill</code>.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border/70 bg-muted/10 p-4 text-xs space-y-2">
          <div className="font-bold text-foreground flex items-center gap-1.5">
            <GitBranch className="size-3.5 text-primary" />
            <span>Automated Token Handoff Pipeline</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-muted-foreground">
            <div className="p-2 rounded bg-card border border-border">
              <strong className="text-foreground block mb-0.5">1. Figma Studio</strong>
              Designer updates variable node
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <strong className="text-foreground block mb-0.5">2. GitHub Action</strong>
              Transforms tokens into OKLCH variables
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <strong className="text-foreground block mb-0.5">3. Style Dictionary</strong>
              Compiles CSS, Tailwind, & Swift
            </div>
            <div className="p-2 rounded bg-card border border-border">
              <strong className="text-foreground block mb-0.5">4. Storybook QA</strong>
              Automated visual diff pass
            </div>
          </div>
        </div>
      </div>

      {/* DDR Cards */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="size-4 text-primary" />
          <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
            Design Decision Records (DDRs)
          </h5>
        </div>

        <div className="space-y-4">
          {ddrList.map((ddr) => (
            <div
              key={ddr.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-primary">
                  {ddr.id}
                </span>
                <Badge variant="outline" className="text-xs font-semibold">
                  Approved Architectural Record
                </Badge>
              </div>

              <h3 className="text-base font-bold text-foreground">
                {ddr.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="rounded-xl border border-border bg-muted/20 p-3 space-y-1">
                  <span className="font-bold text-muted-foreground uppercase text-xs">Context:</span>
                  <p className="text-foreground">{ddr.context}</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/20 p-3 space-y-1">
                  <span className="font-bold text-primary uppercase text-xs">Decision:</span>
                  <p className="text-foreground">{ddr.decision}</p>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3 space-y-1">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase text-xs">Empirical Impact:</span>
                  <p className="text-foreground">{ddr.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}





