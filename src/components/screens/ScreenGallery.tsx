import React, { useState } from "react"
import { screensData, ScreenData } from "@/data/screensData"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CheckCircle2, Filter, Layers, Smartphone, Laptop } from "lucide-react"

interface ScreenGalleryProps {
  onSelectScreen: (screenId: string) => void
  screens?: ScreenData[]
}

export function ScreenGallery({ onSelectScreen, screens = screensData }: ScreenGalleryProps) {
  const [selectedPriority, setSelectedPriority] = useState<string>("All")
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All")

  const filteredScreens = screens.filter((screen) => {
    const matchesPriority =
      selectedPriority === "All" || screen.priority === selectedPriority
    const matchesPlatform =
      selectedPlatform === "All" || screen.platform === selectedPlatform
    return matchesPriority && matchesPlatform
  })

  return (
    <div className="space-y-6">
      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-border bg-card shadow-xs">
        <div className="flex items-center gap-2">
          <Filter className="size-4 text-muted-foreground" />
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Filter Archetypes ({filteredScreens.length} of {screensData.length})
          </span>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Priority Filter */}
          <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-[10px] border border-border">
            {["All", "P0", "P1"].map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPriority(p)}
                className={`h-9 min-h-[36px] px-3.5 py-[6px] text-sm font-bold rounded-[8px] transition-all cursor-pointer ${
                  selectedPriority === p
                    ? "bg-background text-foreground shadow-xs font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p === "All" ? "All Priorities" : `${p} Priority`}
              </button>
            ))}
          </div>

          {/* Platform Filter */}
          <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-[10px] border border-border">
            {["All", "Desktop", "Mobile"].map((plat) => (
              <button
                key={plat}
                onClick={() => setSelectedPlatform(plat)}
                className={`h-9 min-h-[36px] px-3.5 py-[6px] text-sm font-bold rounded-[8px] transition-all cursor-pointer ${
                  selectedPlatform === plat
                    ? "bg-background text-foreground shadow-xs font-black"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {plat === "All" ? "All Form Factors" : plat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Screen Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredScreens.map((screen) => (
          <div
            key={screen.id}
            onClick={() => onSelectScreen(screen.id)}
            className="group rounded-2xl border border-border/80 bg-card overflow-hidden shadow-[0px_0px_2px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] hover:border-primary/50 hover:shadow-[0px_16px_32px_-4px_rgba(145,158,171,0.20)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            {/* Thumbnail with Hover Zoom */}
            <div className="relative aspect-video w-full overflow-hidden bg-muted/50 border-b border-border">
              <img
                src={screen.image}
                alt={screen.alt}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                <span className="flex size-6 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground text-xs shadow-xs">
                  {screen.id}
                </span>
                <Badge
                  variant="default"
                  className={
                    screen.priority === "P0"
                      ? "bg-red-500/90 text-white font-semibold text-[10px]"
                      : "bg-amber-500/90 text-white font-semibold text-[10px]"
                  }
                >
                  {screen.priority}
                </Badge>
              </div>

              <div className="absolute top-2.5 right-2.5">
                <Badge
                  variant="outline"
                  className="bg-background/80 backdrop-blur-md text-foreground font-semibold text-[10px] border-border"
                >
                  <CheckCircle2 className="mr-1 size-3 text-emerald-500" />
                  {screen.status}
                </Badge>
              </div>

              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1 border border-border">
                  Inspect Screen Annotations <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {screen.name}
                  </h3>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Laptop className="size-3.5" /> {screen.platform}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {screen.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  {screen.hotspots.length} Pin Annotations
                </span>
                <span className="font-semibold text-primary flex items-center gap-1">
                  Open Explainer <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
