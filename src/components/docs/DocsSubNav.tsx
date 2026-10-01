import React from "react"
import { ProductId, productsConfig } from "@/config/products"
import { Users, Heart, Compass, Workflow, GitFork, Calendar, Target } from "lucide-react"

interface DocsSubNavProps {
  currentSectionId: string
  onNavigateSection: (sectionId: string) => void
  currentProduct?: ProductId
}

export function DocsSubNav({
  currentSectionId,
  onNavigateSection,
  currentProduct = "linear",
}: DocsSubNavProps) {
  const productConfig = productsConfig[currentProduct] || productsConfig.linear

  const subTabs = [
    {
      id: "persona",
      label: "PERSONA",
      icon: Users,
      matches: ["persona", "personas"],
    },
    {
      id: "empathy-map",
      label: "EMPATHY MAP",
      icon: Heart,
      matches: ["empathy-map", "empathy"],
    },
    {
      id: "journey-map",
      label: "JOURNEY MAP",
      icon: Compass,
      matches: ["journey-map", "journey"],
    },
    {
      id: "competency-matrix",
      label: "COMPETENCY MATRIX",
      icon: Target,
      matches: ["competency-matrix", "matrix", "skills-matrix"],
    },
    {
      id: "process",
      label: "DESIGN PROCESS",
      icon: Workflow,
      matches: ["process"],
    },
    {
      id: "flows",
      label: "USER & TASK FLOWS",
      icon: GitFork,
      matches: ["flows"],
    },
    {
      id: "timeframe",
      label: "Design time frame",
      icon: Calendar,
      matches: ["timeframe", "time-frame", "roadmap"],
    },
  ]

  return (
    <div className="w-full bg-card/80 backdrop-blur-md border border-border/80 rounded-2xl p-1.5 shadow-xs mb-6 overflow-x-auto">
      <div className="flex items-center gap-1.5 min-w-max">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground px-2 py-1 hidden sm:inline">
          Artifacts:
        </span>
        {subTabs.map((tab) => {
          const Icon = tab.icon
          const isActive = tab.matches.includes(currentSectionId)

          return (
            <button
              key={tab.id}
              onClick={() => onNavigateSection(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap min-h-[36px] ${
                isActive
                  ? "text-white shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
              style={{
                backgroundColor: isActive ? productConfig.brandColor : undefined,
              }}
            >
              <Icon className="size-3.5 shrink-0" />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
