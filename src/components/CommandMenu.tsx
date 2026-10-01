import React, { useState, useEffect } from "react"
import {
  Search,
  X,
  Layers,
  BarChart3,
  Palette,
  Smartphone,
  ShieldCheck,
  FileCode2,
  Laptop,
  CheckCircle2,
  Sparkles,
  Command,
} from "lucide-react"
import { ProductId, productsConfig } from "@/config/products"
import { linearScreensData } from "@/data/linearScreensData"
import { screensData } from "@/data/screensData"
import { miroScreensData } from "@/data/miroScreensData"
import { mixpanelScreensData } from "@/data/mixpanelScreensData"
import { frameScreensData } from "@/data/frameScreensData"

interface CommandMenuProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (sectionId: string, screenId?: string) => void
  currentProduct?: ProductId
}

export function CommandMenu({
  isOpen,
  onClose,
  onNavigate,
  currentProduct = "minimal",
}: CommandMenuProps) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        if (isOpen) onClose()
      }
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const activeScreens = currentProduct === "linear" ? linearScreensData : currentProduct === "miro" ? miroScreensData : currentProduct === "mixpanel" ? mixpanelScreensData : currentProduct === "frame" ? frameScreensData : screensData
  const productConfig = productsConfig[currentProduct] || productsConfig.minimal
  interface MenuItem {
    label: string
    category: string
    tab: string
    screenId?: string
    icon: any
  }

  const baseItems: MenuItem[] = [
    { label: `${productConfig.name} UX Research & Telemetry`, category: "Dashboard", tab: "dashboard", icon: BarChart3 },
    { label: "00. Documentation Executive Overview", category: "Docs", tab: "overview", icon: Layers },
    { label: "01. Product & UX Vision", category: "Docs", tab: "vision", icon: Sparkles },
    { label: "02. Human Insights & Personas", category: "Docs", tab: "research-doc", icon: BarChart3 },
    { label: "03. Problem & Opportunity Matrix", category: "Docs", tab: "problem", icon: Layers },
    { label: "04. Strategy & Scope Matrix", category: "Docs", tab: "strategy", icon: Layers },
    { label: "05. Information Architecture", category: "Docs", tab: "architecture", icon: Layers },
    { label: "06. User & Task Flows (Mermaid Flowcharts)", category: "Docs", tab: "flows", icon: Layers },
    { label: "08. Design System Tokens & State Model", category: "Design System", tab: "tokens", icon: Palette },
    { label: "09. Usability Testing & Benchmarks (V1→V3)", category: "Testing", tab: "testing", icon: CheckCircle2 },
    { label: "10. Accessibility (WCAG 2.2 AA Contrast & Focus)", category: "Accessibility", tab: "accessibility", icon: ShieldCheck },
    { label: "11. Developer Handoff, API Contracts & Sync", category: "Governance", tab: "handoff", icon: FileCode2 },
    { label: "13. Final Production Sign-Off & Roadmap", category: "Sign-Off", tab: "sign-off", icon: CheckCircle2 },
    { label: "27. Master UX Process (Delivery Lifecycle)", category: "Process", tab: "process", icon: Layers },
    { label: "28. The Ideal UX Artifact Map (Topology & Lineage)", category: "Artifacts", tab: "artifact-map", icon: Sparkles },
  ]

  const screenItems: MenuItem[] = activeScreens.map((s) => ({
    label: `07. Screen: ${s.id} — ${s.name} (${s.flow})`,
    category: "Screens",
    tab: "screens",
    screenId: s.id,
    icon: Laptop,
  }))

  const allItems: MenuItem[] = [...baseItems, ...screenItems]

  const filtered = allItems.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-xl rounded-2xl border border-border bg-card shadow-2xl overflow-hidden ring-1 ring-border/50 animate-in zoom-in-95 duration-150">
        {/* Input Bar */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3 bg-muted/30">
          <Search className="size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={`Search ${productConfig.name} documentation, screens, or telemetry...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-muted-foreground">
              No matching documentation topics found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon
              return (
                <button
                  key={idx}
                  onClick={() => {
                    onNavigate(item.tab, item.screenId)
                    onClose()
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-5 py-3 min-h-[48px] text-left text-xs transition hover:bg-muted/70 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                      <Icon className="size-4" />
                    </div>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-xs uppercase font-bold text-muted-foreground bg-muted px-3.5 py-1.5 rounded-full border border-border shrink-0 ml-2">
                    {item.category}
                  </span>
                </button>
              )
            })
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border px-4 py-2 bg-muted/20 flex items-center justify-between text-xs text-muted-foreground">
          <span>Active Product: <strong className="text-foreground">{productConfig.name}</strong></span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  )
}
