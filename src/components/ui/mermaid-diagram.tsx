import React, { useEffect, useRef, useState, useCallback } from "react"
import mermaid from "mermaid"
import { Badge } from "@/components/ui/badge"
import { GitFork, RefreshCw, ZoomIn, ZoomOut, RotateCcw, Hand } from "lucide-react"

interface MermaidDiagramProps {
  chart: string
  title?: string
  caption?: string
  className?: string
}

export function MermaidDiagram({
  chart,
  title,
  caption,
  className = "",
}: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svgContent, setSvgContent] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  // Zoom and Pan (drag) state
  const [scale, setScale] = useState<number>(1)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  // Initialize mermaid with light theme defaults and Roboto font
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
      securityLevel: "loose",
      fontFamily: "'Roboto', -apple-system, sans-serif",
      fontSize: 13,
      flowchart: {
        htmlLabels: true,
        curve: "basis",
        padding: 16,
        nodeSpacing: 40,
        rankSpacing: 45,
      },
    })
  }, [])

  useEffect(() => {
    let isMounted = true
    const uniqueId = `mermaid-${Math.random().toString(36).substring(2, 9)}`

    const renderChart = async () => {
      try {
        setError(null)
        const { svg } = await mermaid.render(uniqueId, chart)
        if (isMounted) {
          setSvgContent(svg)
          // Reset zoom and pan on chart change
          setScale(1)
          setPosition({ x: 0, y: 0 })
        }
      } catch (err: any) {
        if (isMounted) {
          console.error("Mermaid rendering error:", err)
          setError(err?.message || "Failed to render Mermaid diagram")
        }
      }
    }

    renderChart()

    return () => {
      isMounted = false
    }
  }, [chart])

  // Zoom controls
  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.15, 2.5))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.15, 0.4))
  }

  const handleReset = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return // Left-click only
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    },
    [isDragging, dragStart]
  )

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0]
      setIsDragging(true)
      setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return
    const touch = e.touches[0]
    setPosition({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Wheel zoom with Ctrl or Alt
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey || e.altKey) {
      e.preventDefault()
      const delta = -e.deltaY * 0.002
      setScale((prev) => Math.min(Math.max(prev + delta, 0.4), 2.5))
    }
  }

  return (
    <div
      className={`rounded-2xl border border-border bg-card p-5 shadow-xs space-y-3 ${className}`}
    >
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <GitFork className="size-4" />
          </div>
          <div>
            {title && (
              <h4 className="text-sm font-bold text-foreground tracking-tight">
                {title}
              </h4>
            )}
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 flex-wrap">
              <span>Interactive Flowchart</span>
              <span>•</span>
              <span className="text-primary font-bold">Interactive Zoom & Pan</span>
            </span>
          </div>
        </div>

        {/* Top Zoom & Pan Controls */}
        <div className="flex items-center gap-2 self-end sm:self-center bg-muted/60 p-2 rounded-2xl border border-border">
          <button
            onClick={handleZoomOut}
            className="flex size-10 items-center justify-center rounded-xl hover:bg-background text-muted-foreground hover:text-foreground transition-colors shadow-2xs"
            title="Zoom Out (-15%)"
          >
            <ZoomOut className="size-4" />
          </button>
          
          <button
            onClick={handleReset}
            className="px-4 py-2 text-xs font-mono font-bold text-muted-foreground hover:text-foreground hover:bg-background rounded-xl transition-colors min-h-[40px] flex items-center justify-center"
            title="Click to reset zoom to 100%"
          >
            {Math.round(scale * 100)}%
          </button>

          <button
            onClick={handleZoomIn}
            className="flex size-10 items-center justify-center rounded-xl hover:bg-background text-muted-foreground hover:text-foreground transition-colors shadow-2xs"
            title="Zoom In (+15%)"
          >
            <ZoomIn className="size-4" />
          </button>

          <div className="w-[1px] h-4 bg-border mx-0.5" />

          <button
            onClick={handleReset}
            className="flex size-10 items-center justify-center rounded-xl hover:bg-background text-muted-foreground hover:text-foreground transition-colors shadow-2xs"
            title="Reset position & scale to default"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>

      {/* SVG Container with Drag & Zoom Viewport */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        className={`w-full overflow-hidden relative min-h-[220px] max-h-[620px] rounded-xl border border-border/70 p-4 select-none transition-colors ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:16px_16px] bg-muted/15`}
      >
        {/* Floating Hint Overlay */}
        <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none opacity-80 hover:opacity-100 transition-opacity">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background/80 backdrop-blur-sm border border-border/70 text-xs font-medium text-muted-foreground shadow-xs">
            <Hand className="size-3.5 text-primary animate-pulse" />
            <span>Click & drag canvas to pan • Use + / − to zoom</span>
          </div>
        </div>

        {/* Floating Quick Mini Toolbar (bottom-right) */}
        <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1.5 bg-background/90 backdrop-blur-md border border-border/80 shadow-md p-2 rounded-2xl">
          <button
            onClick={handleZoomOut}
            className="flex size-9 items-center justify-center rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition"
            title="Zoom Out"
          >
            <ZoomOut className="size-3.5" />
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs font-mono font-semibold text-muted-foreground hover:text-foreground rounded-lg transition"
            title="Reset"
          >
            {Math.round(scale * 100)}%
          </button>
          <button
            onClick={handleZoomIn}
            className="flex size-9 items-center justify-center rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition"
            title="Zoom In"
          >
            <ZoomIn className="size-3.5" />
          </button>
          <div className="w-[1px] h-3.5 bg-border" />
          <button
            onClick={handleReset}
            className="flex size-9 items-center justify-center rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition"
            title="Reset Zoom & Pan"
          >
            <RotateCcw className="size-3.5" />
          </button>
        </div>

        {error ? (
          <div className="text-xs text-red-500 p-6 text-center space-y-1 my-auto">
            <p className="font-bold">Error rendering diagram:</p>
            <p className="font-mono text-[11px]">{error}</p>
          </div>
        ) : svgContent ? (
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: "center center",
              transition: isDragging ? "none" : "transform 0.12s ease-out",
            }}
            className="w-full h-full min-h-[180px] flex items-center justify-center pointer-events-none [&_svg]:pointer-events-auto [&_svg]:max-w-none [&_svg]:h-auto [&_svg]:drop-shadow-xs"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground min-h-[160px]">
            <RefreshCw className="size-3.5 animate-spin text-primary" />
            <span>Compiling Mermaid flowchart...</span>
          </div>
        )}
      </div>

      {/* Footer Caption */}
      {caption && (
        <p className="text-xs text-muted-foreground border-t border-border/50 pt-2 leading-relaxed">
          {caption}
        </p>
      )}
    </div>
  )
}
