import React, { useState, useRef } from "react"
import { ScreenData, ScreenHotspot } from "@/data/screensData"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Eye,
  EyeOff,
  ZoomIn,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Layers,
  ArrowRight,
  Sparkles,
  Smartphone,
  Laptop,
  Maximize2,
  Tag,
  Clock,
  Compass,
} from "lucide-react"

interface ScreenExplainerProps {
  screen: ScreenData
  onNavigateScreen?: (screenId: string) => void
  onNavigateToFinding?: (findingId: string) => void
}

export function ScreenExplainer({
  screen,
  onNavigateScreen,
  onNavigateToFinding,
}: ScreenExplainerProps) {
  const [activeState, setActiveState] = useState<string>("default")
  const [showPins, setShowPins] = useState<boolean>(true)
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<string>("details")

  const currentImage =
    screen.states.find((s) => s.key === activeState)?.image || screen.image

  const rowsRef = useRef<{ [key: number]: HTMLDivElement | null }>({})

  const handleHotspotClick = (hotspotNumber: number) => {
    setActiveHotspot(hotspotNumber)
    const element = rowsRef.current[hotspotNumber]
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* 1. Header Bar: ID, Name, Badges, Summary & User Goal */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-sm shadow-xs">
              {screen.id}
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {screen.name}
            </h1>
            <Badge variant="outline" className="font-medium">
              {screen.platform}
            </Badge>
            <Badge
              variant="default"
              className={
                screen.priority === "P0"
                  ? "bg-red-500/10 text-red-500 border-red-500/20"
                  : "bg-amber-500/10 text-amber-500 border-amber-500/20"
              }
            >
              {screen.priority} Priority
            </Badge>
            <Badge
              variant="outline"
              className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold"
            >
              <CheckCircle2 className="mr-1 size-3" />
              {screen.status}
            </Badge>
          </div>

          {/* Quick Navigator among the 6 screens */}
          {onNavigateScreen && (
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {["D01", "D02", "D03", "D04", "D05", "D06"].map((id) => (
                <button
                  key={id}
                  onClick={() => onNavigateScreen(id)}
                  className={`px-4.5 py-2.5 text-xs font-semibold rounded-xl min-h-[40px] transition-colors ${
                    screen.id === id
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {id}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Summary & User Goal Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-sm">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Compass className="size-3.5" /> Summary
            </span>
            <p className="text-foreground leading-relaxed">{screen.summary}</p>
          </div>
          <div className="space-y-1 rounded-lg bg-muted/40 p-3 border border-border/60">
            <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Sparkles className="size-3.5" /> User Goal
            </span>
            <p className="text-foreground italic leading-relaxed">
              "{screen.userGoal}"
            </p>
          </div>
        </div>
      </div>

      {/* 2. State Switcher & Pin Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-muted/40 p-2.5 rounded-xl border border-border">
        {/* State Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1 flex items-center gap-1">
            <Layers className="size-3.5" /> Visual State:
          </span>
          {screen.states.map((st) => (
            <button
              key={st.key}
              onClick={() => setActiveState(st.key)}
              className={`px-4.5 py-2.5 text-xs font-medium rounded-xl min-h-[40px] transition-all ${
                activeState === st.key
                  ? "bg-background text-foreground shadow-xs border border-border font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>

        {/* Pin Visibility & Zoom Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPins(!showPins)}
            className="h-11 min-h-[44px] px-4.5 text-xs font-semibold rounded-xl"
          >
            {showPins ? (
              <>
                <EyeOff className="mr-1.5 size-3.5" /> Hide Pins
              </>
            ) : (
              <>
                <Eye className="mr-1.5 size-3.5" /> Show Pins (
                {screen.hotspots.length})
              </>
            )}
          </Button>

          <Dialog open={isZoomOpen} onOpenChange={setIsZoomOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-11 min-h-[44px] px-4.5 text-xs font-semibold rounded-xl">
                <ZoomIn className="mr-1.5 size-3.5" /> Zoom High-Res
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[92vh] overflow-y-auto p-4">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-base">
                  <Maximize2 className="size-4" />
                  {screen.id} — {screen.name} ({activeState.toUpperCase()} View)
                </DialogTitle>
              </DialogHeader>
              <div className="mt-2 rounded-lg overflow-hidden border border-border bg-black/10">
                <img
                  src={currentImage}
                  alt={screen.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* 3. Main Split View: Annotated Image (≈60%) + Pin Explanations (≈40%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Responsive Annotated Image Canvas */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-md group">
            {/* Screenshot */}
            <img
              src={currentImage}
              alt={screen.alt}
              className="w-full h-auto object-cover block select-none cursor-pointer"
              onClick={() => setIsZoomOpen(true)}
            />

            {/* Pins Overlay (Shown on Default/Light state where coordinate maps apply) */}
            {showPins && activeState === "default" && (
              <div className="absolute inset-0 pointer-events-none">
                {screen.hotspots.map((pin) => {
                  const isHighlighted = activeHotspot === pin.n
                  return (
                    <button
                      key={pin.n}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleHotspotClick(pin.n)
                      }}
                      onMouseEnter={() => setActiveHotspot(pin.n)}
                      onMouseLeave={() => setActiveHotspot(null)}
                      onFocus={() => setActiveHotspot(pin.n)}
                      onBlur={() => setActiveHotspot(null)}
                      aria-label={`Pin ${pin.n}: ${pin.element}`}
                      style={{
                        left: `${pin.x}%`,
                        top: `${pin.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      className={`pointer-events-auto absolute flex size-7 items-center justify-center rounded-full font-bold text-xs transition-all duration-200 cursor-pointer shadow-lg ${
                        isHighlighted
                          ? "bg-emerald-500 text-white scale-125 ring-4 ring-emerald-500/40 z-30"
                          : "bg-primary text-primary-foreground hover:scale-110 ring-2 ring-background z-20"
                      }`}
                    >
                      {pin.n}
                    </button>
                  )
                })}
              </div>
            )}

            {/* Hint Overlay at Bottom */}
            <div className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium text-muted-foreground border border-border/50 flex items-center gap-1.5">
              <ZoomIn className="size-3" /> Click image to zoom high-res · Hover pins to inspect
            </div>
          </div>

          {/* Quick Caption */}
          <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
            <span>
              State: <strong>{activeState.toUpperCase()}</strong> · Dimensions: 1440×900px native
            </span>
            <span>Authored in Figma (Web-r) by Pritam</span>
          </div>
        </div>

        {/* Right: Pin Explanations (Synchronized Hover & Focus) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Tag className="size-3.5" /> Pin Annotations ({screen.hotspots.length})
            </h2>
            <span className="text-xs text-muted-foreground">
              Hover row to locate on image
            </span>
          </div>

          <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
            {screen.hotspots.map((pin) => {
              const isHighlighted = activeHotspot === pin.n
              return (
                <div
                  key={pin.n}
                  ref={(el) => {
                    rowsRef.current[pin.n] = el
                  }}
                  onMouseEnter={() => setActiveHotspot(pin.n)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  onClick={() => setActiveHotspot(pin.n)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isHighlighted
                      ? "border-emerald-500 bg-emerald-500/5 shadow-sm ring-1 ring-emerald-500/20"
                      : "border-border bg-card hover:bg-muted/40 hover:border-border/80"
                  }`}
                >
                  {/* Top Row: Pin Number + Element Name + Evidence Chips */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex size-6 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                          isHighlighted
                            ? "bg-emerald-500 text-white"
                            : "bg-primary text-primary-foreground"
                        }`}
                      >
                        {pin.n}
                      </span>
                      <h3 className="text-sm font-bold text-foreground">
                        {pin.element}
                      </h3>
                    </div>

                    {/* Evidence Chips linking to Research Findings */}
                    <div className="flex items-center gap-1 flex-wrap">
                      {pin.evidence.map((ev) => (
                        <button
                          key={ev}
                          onClick={(e) => {
                            e.stopPropagation()
                            if (onNavigateToFinding) onNavigateToFinding(ev)
                          }}
                          className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-border min-h-[28px]"
                          title={`Click to view research finding ${ev}`}
                        >
                          [{ev}]
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* What it is & Does */}
                  <div className="text-xs text-foreground/90 mb-2 leading-relaxed">
                    <strong className="text-muted-foreground uppercase text-[10px] tracking-wider block mb-0.5">
                      What it does:
                    </strong>
                    {pin.does}
                  </div>

                  {/* Why it's there (Design & Research Rationale) */}
                  <div className="text-xs text-muted-foreground leading-relaxed rounded bg-muted/30 p-2 border border-border/40">
                    <strong className="text-foreground uppercase text-[10px] tracking-wider block mb-0.5">
                      Why it's there (Rationale):
                    </strong>
                    {pin.why}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* 4. Deep Specification Tabs: Details | Responsive | Accessibility | Research | Analytics | Notes */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-6">
            <TabsTrigger value="details">Details & Flow</TabsTrigger>
            <TabsTrigger value="responsive">Responsive</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
            <TabsTrigger value="research">Research Impact</TabsTrigger>
            <TabsTrigger value="analytics">Telemetry Events</TabsTrigger>
            <TabsTrigger value="notes">Design Notes</TabsTrigger>
          </TabsList>

          {/* Details & Actions */}
          <TabsContent value="details" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Navigation Entry & Exit
                </h4>
                <div className="rounded-lg bg-muted/40 p-3 border border-border text-xs space-y-2">
                  <div>
                    <span className="font-semibold text-foreground">Entry Paths:</span>
                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-0.5">
                      {screen.entry.map((e, idx) => (
                        <li key={idx}>{e}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <span className="font-semibold text-foreground">Exit Transitions:</span>
                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-0.5">
                      {screen.exit.map((e, idx) => (
                        <li key={idx}>{e}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Action Hierarchy
                </h4>
                <div className="rounded-lg bg-muted/40 p-3 border border-border text-xs space-y-2">
                  <div>
                    <span className="font-semibold text-foreground">Primary Action:</span>
                    <p className="text-primary font-bold mt-1">
                      {screen.primaryAction}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <span className="font-semibold text-foreground">Secondary Actions:</span>
                    <div className="flex gap-1.5 flex-wrap mt-1">
                      {screen.secondaryActions.map((sec, idx) => (
                        <Badge key={idx} variant="secondary" className="text-[11px]">
                          {sec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Responsive Behavior */}
          <TabsContent value="responsive" className="space-y-4">
            <div className="rounded-lg bg-muted/30 p-4 border border-border text-sm leading-relaxed">
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Laptop className="size-4 text-primary" /> Breakpoint Specifications
              </h4>
              <p className="text-muted-foreground">{screen.responsive}</p>
            </div>
          </TabsContent>

          {/* Accessibility Standards */}
          <TabsContent value="accessibility" className="space-y-4">
            <div className="rounded-lg bg-muted/30 p-4 border border-border space-y-3">
              <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500" /> WCAG 2.2 AA Compliance Audit
              </h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {screen.accessibility.map((a, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✔</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* Research Impact & Before/After */}
          <TabsContent value="research" className="space-y-4">
            {screen.beforeAfter ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-500 text-white font-bold">
                      Iteration Benchmark
                    </Badge>
                    <span className="text-sm font-bold text-foreground">
                      {screen.beforeAfter.metricDelta}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">
                    Baseline: {screen.beforeAfter.beforeMetric} → Refactored: {screen.beforeAfter.afterMetric}
                  </div>
                </div>
                <p className="text-xs text-foreground/90 leading-relaxed">
                  {screen.beforeAfter.explanation}
                </p>
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">
                Validated in the 2021 first release. Standard baseline maintained.
              </p>
            )}
          </TabsContent>

          {/* Analytics Events */}
          <TabsContent value="analytics" className="space-y-4">
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-muted text-muted-foreground uppercase tracking-wider font-semibold border-b border-border">
                  <tr>
                    <th className="p-3">Event Name</th>
                    <th className="p-3">Trigger Condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {screen.analytics.map((evt, idx) => (
                    <tr key={idx} className="hover:bg-muted/20">
                      <td className="p-3 font-mono font-bold text-primary">{evt.event}</td>
                      <td className="p-3 text-foreground">{evt.trigger}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Design Notes */}
          <TabsContent value="notes" className="space-y-4">
            <div className="rounded-lg bg-muted/30 p-4 border border-border text-xs leading-relaxed text-foreground">
              <p>{screen.notes || "Authored by Pritam for the Minimal UI ecosystem."}</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
