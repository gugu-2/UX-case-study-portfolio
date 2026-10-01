import React, { useState } from 'react'
import {
  Sun,
  Moon,
  Columns3,
  Smartphone,
  Maximize2,
  Minimize2,
  Sparkles,
  Layers,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { dashboardList } from '../data/dashboardData'
import { Badge } from '@/components/ui/badge'

interface DashboardShowcaseProps {
  activeDashboardId: string
  setActiveDashboardId: (id: string) => void
}

export const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({
  activeDashboardId,
  setActiveDashboardId,
}) => {
  const [activeViewMode, setActiveViewMode] = useState<'light' | 'dark' | 'layout' | 'mobile'>('light')
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const currentDashboard =
    dashboardList.find((d) => d.id === activeDashboardId) || dashboardList[0]

  // Pick the right image path based on active view mode
  const getActiveImage = () => {
    switch (activeViewMode) {
      case 'dark':
        return currentDashboard.images.dark
      case 'layout':
        return currentDashboard.images.layout || currentDashboard.images.light
      case 'mobile':
        return currentDashboard.images.mobile
      case 'light':
      default:
        return currentDashboard.images.light
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Top Selector Ribbon for the 6 Dashboards */}
      <div className="overflow-x-auto pb-1">
        <div className="flex items-center gap-2 min-w-max">
          {dashboardList.map((item) => {
            const isSelected = item.id === currentDashboard.id
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveDashboardId(item.id)
                  if (activeViewMode === 'layout' && !item.images.layout) {
                    setActiveViewMode('light')
                  }
                }}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
                }`}
              >
                <span>{item.title}</span>
                {isSelected && (
                  <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Archetype Description & Context Header */}
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-xs sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-primary uppercase">
              Archetype Specification
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">Original 2021 Foundation</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground">
            {currentDashboard.title}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {currentDashboard.description}
          </p>
        </div>

        {/* Live Key Metrics Row */}
        <div className="flex flex-wrap items-center gap-3">
          {currentDashboard.keyMetrics.map((km) => (
            <div
              key={km.label}
              className="rounded-xl border border-border bg-muted/30 px-3 py-2 text-center"
            >
              <div className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                {km.label}
              </div>
              <div className="text-sm font-extrabold text-foreground">
                {km.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Screen Canvas Container with 4-Way Mode Switcher */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        {/* Viewport & Theme Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3 mb-4">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setActiveViewMode('light')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                activeViewMode === 'light'
                  ? 'bg-background text-foreground shadow-xs border border-border font-bold'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Sun className="size-3.5 text-amber-500" />
              <span>Desktop Light</span>
            </button>

            <button
              onClick={() => setActiveViewMode('dark')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                activeViewMode === 'dark'
                  ? 'bg-background text-foreground shadow-xs border border-border font-bold'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Moon className="size-3.5 text-blue-500" />
              <span>Desktop Dark Elevation</span>
            </button>

            {currentDashboard.images.layout && (
              <button
                onClick={() => setActiveViewMode('layout')}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  activeViewMode === 'layout'
                    ? 'bg-primary text-primary-foreground shadow-xs font-bold'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Columns3 className="size-3.5" />
                <span>Wireframe Layout</span>
              </button>
            )}

            <button
              onClick={() => setActiveViewMode('mobile')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                activeViewMode === 'mobile'
                  ? 'bg-primary text-primary-foreground shadow-xs font-bold'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Smartphone className="size-3.5 text-emerald-500" />
              <span>375px Mobile Adaptive</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted transition"
            >
              {isZoomed ? (
                <>
                  <Minimize2 className="size-3.5" />
                  <span>Standard View</span>
                </>
              ) : (
                <>
                  <Maximize2 className="size-3.5" />
                  <span>Expanded View</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Image Rendering Surface */}
        <div className="flex justify-center overflow-hidden rounded-xl border border-border/80 bg-background/50 p-4 transition-all">
          <div
            className={`transition-all duration-300 ${
              isZoomed
                ? 'w-full'
                : activeViewMode === 'mobile'
                ? 'w-[375px] rounded-2xl shadow-xl'
                : 'w-full max-w-5xl rounded-lg shadow-sm'
            }`}
          >
            <img
              src={getActiveImage()}
              alt={`${currentDashboard.title} (${activeViewMode} view)`}
              className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-[1.01]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Senior UX Rationale & Craft Nuance Cards */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-primary" />
          <h3 className="text-lg font-bold text-foreground">
            Senior UI/UX Architectural Rationale & Cognitive Mechanics
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {currentDashboard.uxRationale.map((rationale, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-xs hover:border-primary/50 transition"
            >
              <div>
                <div className="flex items-center gap-2 text-primary font-bold text-xs">
                  <span>0{idx + 1}.</span>
                  <span>{rationale.title}</span>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="rounded-lg bg-red-500/10 p-2.5 text-xs text-red-600 dark:text-red-400 border border-red-500/20">
                    <span className="font-bold block mb-0.5">Observed Friction:</span>
                    {rationale.frictionPoint}
                  </div>

                  <div className="rounded-lg bg-emerald-500/10 p-2.5 text-xs text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="font-bold block mb-0.5">Design Solution:</span>
                    {rationale.designSolution}
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-border/80 text-xs text-muted-foreground italic">
                <strong className="text-foreground not-italic font-semibold block mb-0.5">
                  14+ Yr Designer Craft Nuance:
                </strong>
                {rationale.craftNuance}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Component Anatomy & Specifications Table */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs lg:col-span-8">
          <div className="flex items-center gap-2">
            <Layers className="size-4 text-primary" />
            <h4 className="text-base font-bold text-foreground">
              Component Anatomy & Front-End Spec
            </h4>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-muted/30">
                <tr>
                  <th className="p-2.5">Component Name</th>
                  <th className="p-2.5">Pattern Type</th>
                  <th className="p-2.5">Spatial & Interaction Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground">
                {currentDashboard.componentAnatomy.map((comp) => (
                  <tr key={comp.name} className="hover:bg-muted/30 transition">
                    <td className="p-2.5 font-semibold text-foreground whitespace-nowrap">
                      {comp.name}
                    </td>
                    <td className="p-2.5 text-muted-foreground whitespace-nowrap">
                      <span className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono border border-border">
                        {comp.type}
                      </span>
                    </td>
                    <td className="p-2.5 text-muted-foreground leading-relaxed">{comp.specs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Visualization Physics & Mobile Rule Cards (4 cols) */}
        <div className="space-y-4 lg:col-span-4">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
            <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Data Visualization Specs
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {currentDashboard.dataVisSpecs}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
            <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Mobile Viewport Handshake
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {currentDashboard.mobileAdaptation}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
