import React from 'react'
import {
  Sparkles,
  Layers,
  ArrowRight,
  Palette,
  Target,
  BarChart3,
  CheckCircle2,
} from 'lucide-react'
import { dashboardList } from '../data/dashboardData'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface OverviewViewProps {
  setActiveTab: (tab: string) => void
  setActiveDashboardId: (id: string) => void
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  setActiveTab,
  setActiveDashboardId,
}) => {
  const principles = [
    {
      num: '01',
      title: 'Content Over Chrome',
      meaning: 'Interface containers, borders, and decorations exist solely to elevate data clarity, not compete with it.',
      implication: 'Drop heavy borders; leverage 8pt whitespace cadence and subtle 1px dividers at 16% opacity.',
    },
    {
      num: '02',
      title: 'Progressive Visual Disclosure',
      meaning: 'Surface high-level operational signals immediately; defer granular row data to deliberate interaction.',
      implication: 'Sparklines and KPI badges occupy the primary viewport; full tables reveal upon scroll or drawer trigger.',
    },
    {
      num: '03',
      title: 'Zero-Ambiguity Feedback',
      meaning: 'Every user click or gesture must trigger an instantaneous, unambiguous physical or visual state transition.',
      implication: 'Optimistic UI updates for checklists and financial transfers with sub-16ms perceived response latency.',
    },
    {
      num: '04',
      title: 'Ergonomic Saliency (Fitts’s Law)',
      meaning: 'High-frequency primary actions must live within natural motor-planning zones.',
      implication: 'Bottom thumb-reach docking on mobile devices; top-right contextual filters on desktop grids.',
    },
    {
      num: '05',
      title: 'Bimodal Spatial Elasticity',
      meaning: 'The design system must feel native whether rendered on a 375px mobile screen or an ultrawide 4K monitor.',
      implication: 'Engineered a dual-navigation layout engine (Left Vertical Rail vs. Top Horizontal Nav).',
    },
  ]

  return (
    <div className="space-y-10 animate-in fade-in-50 duration-300">
      {/* Hero Presentation */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-xs">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Sparkles className="size-3.5" />
            <span>Created by Pritam • 14+ Years Lead UI/UX Systems Architect</span>
          </div>

          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground leading-[1.1]">
            Minimal UI Design System
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
            A comprehensive, battle-tested SaaS product framework engineered for extreme data density without cognitive exhaustion.
            Grounded in empirical research across 148 enterprise practitioners and 6 complete operational domains.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              onClick={() => setActiveTab('research')}
              className="figma-btn-lg h-12 min-h-[48px] px-[22px] py-[11px] rounded-[8px] text-[15px] leading-[26px] font-bold bg-primary text-primary-foreground shadow-sm"
              size="lg"
            >
              <span>Explore Research Dashboard</span>
              <ArrowRight className="size-4 ml-1" />
            </Button>

            <Button
              variant="outline"
              onClick={() => setActiveTab('showcase')}
              className="figma-btn-lg h-12 min-h-[48px] px-[22px] py-[11px] rounded-[8px] text-[15px] leading-[26px] font-bold"
              size="lg"
            >
              <Layers className="size-4 mr-1 text-primary" />
              <span>Inspect 6 Core Dashboards</span>
            </Button>

            <Button
              variant="outline"
              onClick={() => setActiveTab('tokens')}
              className="figma-btn-lg h-12 min-h-[48px] px-[22px] py-[11px] rounded-[8px] text-[15px] leading-[26px] font-bold"
              size="lg"
            >
              <Palette className="size-4 mr-1 text-primary" />
              <span>Design Tokens & Foundations</span>
            </Button>
          </div>
        </div>
      </div>

      {/* The 6 Core Dashboards Visual Teaser Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
              The 6 Core Operational Dashboards
            </h2>
            <p className="text-xs text-muted-foreground">
              Each module is custom-tailored with unique data visualizers, micro-interactions, and responsive layouts.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('showcase')}
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
          >
            <span>View all screens</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardList.map((dash) => (
            <div
              key={dash.id}
              onClick={() => {
                setActiveDashboardId(dash.id)
                setActiveTab('showcase')
              }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
            >
              {/* Thumbnail Container */}
              <div className="relative h-44 w-full overflow-hidden rounded-xl bg-muted/40 border border-border">
                <img
                  src={dash.images.light}
                  alt={dash.title}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 rounded-md bg-background/80 px-2 py-0.5 text-xs font-bold text-primary backdrop-blur-md border border-border">
                  {dash.domain}
                </div>
              </div>

              <div className="mt-3.5 space-y-1">
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition">
                  {dash.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {dash.description}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-border pt-2 text-xs text-muted-foreground">
                <span>Light • Dark • Layout • Mobile</span>
                <span className="font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition">
                  Inspect Spec
                  <ArrowRight className="size-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The 5 Core UX Principles */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Target className="size-4 text-primary" />
          <h2 className="figma-h2 text-[28px] leading-[38px] lg:text-[48px] lg:leading-[64px] font-extrabold text-foreground tracking-tight">
            The 5 Immutable UX Principles of Minimal UI
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.num}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/40 transition"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs border border-primary/20">
                    {p.num}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">Architectural Law</span>
                </div>

                <h3 className="text-base font-bold text-foreground">
                  {p.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.meaning}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border">
                <div className="text-xs font-semibold text-primary flex items-center gap-1">
                  <CheckCircle2 className="size-3.5" />
                  <span>Design Implication</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {p.implication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
