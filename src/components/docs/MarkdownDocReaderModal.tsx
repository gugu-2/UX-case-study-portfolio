import React, { useState, useEffect, useMemo, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { marked } from "marked"
import { DocProjectInfo, docsRegistry } from "@/config/docs-registry"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  X,
  Download,
  Copy,
  Check,
  Search,
  ExternalLink,
  BookOpen,
  FileText,
  Palette,
  ChevronRight,
  List,
  ArrowUp,
  Maximize2,
  Minimize2,
  Sparkles,
  Layers,
} from "lucide-react"

interface MarkdownDocReaderModalProps {
  isOpen: boolean
  onClose: () => void
  initialProjectId: string
}

interface TocItem {
  id: string
  text: string
  level: number
}

// In-memory cache for loaded documents
const docCache: Record<string, string> = {}

export function MarkdownDocReaderModal({
  isOpen,
  onClose,
  initialProjectId,
}: MarkdownDocReaderModalProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(initialProjectId)
  const [activeDocType, setActiveDocType] = useState<"spec" | "audit">("spec")
  const [markdownContent, setMarkdownContent] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [copied, setCopied] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [tocFilter, setTocFilter] = useState<string>("")
  const [showToc, setShowToc] = useState<boolean>(true)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const [activeHeadingId, setActiveHeadingId] = useState<string>("")

  const contentScrollRef = useRef<HTMLDivElement>(null)

  // Update selected project when prop changes
  useEffect(() => {
    if (initialProjectId) {
      setSelectedProjectId(initialProjectId)
      setActiveDocType("spec")
    }
  }, [initialProjectId])

  const project: DocProjectInfo = docsRegistry[selectedProjectId] || docsRegistry.qolaba

  // Determine current file path
  const currentPath =
    activeDocType === "audit" && project.auditPath ? project.auditPath : project.docPath

  // Fetch document content
  useEffect(() => {
    if (!isOpen) return

    let isMounted = true
    setIsLoading(true)

    const fetchDoc = async () => {
      if (docCache[currentPath]) {
        if (isMounted) {
          setMarkdownContent(docCache[currentPath])
          setIsLoading(false)
        }
        return
      }

      try {
        const res = await fetch(currentPath)
        if (!res.ok) {
          throw new Error(`Failed to load ${currentPath}: ${res.statusText}`)
        }
        const text = await res.text()
        docCache[currentPath] = text
        if (isMounted) {
          setMarkdownContent(text)
          setIsLoading(false)
        }
      } catch (err) {
        console.error("Error loading markdown doc:", err)
        if (isMounted) {
          setMarkdownContent(
            `# Error Loading Document\n\nUnable to load document at \`${currentPath}\`.\n\nPlease verify file exists in \`public/docs\`.`
          )
          setIsLoading(false)
        }
      }
    }

    fetchDoc()

    return () => {
      isMounted = false
    }
  }, [currentPath, isOpen])

  // Reset scroll to top when document changes
  useEffect(() => {
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTop = 0
    }
  }, [currentPath])

  // Keyboard navigation: ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Extract Table of Contents from markdown
  const tocItems: TocItem[] = useMemo(() => {
    if (!markdownContent) return []

    const lines = markdownContent.split("\n")
    const items: TocItem[] = []

    lines.forEach((line) => {
      const match = line.match(/^(#{1,3})\s+(.+)$/)
      if (match) {
        const level = match[1].length
        let text = match[2].trim()
        // Strip markdown links and formatting from title
        text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        text = text.replace(/[*_`]/g, "")
        const slug = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")

        items.push({
          id: `heading-${slug}`,
          text,
          level,
        })
      }
    })

    return items
  }, [markdownContent])

  // Render markdown to HTML with IDs on headings
  const htmlContent = useMemo(() => {
    if (!markdownContent) return ""

    const renderer = new marked.Renderer()

    renderer.heading = ({ text, depth }: any) => {
      const plainText = text.replace(/<[^>]*>/g, "").replace(/[*_`]/g, "")
      const slug = plainText
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
      const id = `heading-${slug}`
      return `<h${depth} id="${id}" class="doc-heading doc-h${depth}">${text}</h${depth}>`
    }

    try {
      marked.use({ renderer })
      return marked.parse(markdownContent) as string
    } catch (e) {
      console.error("Marked parsing error:", e)
      return `<p>Error rendering document.</p>`
    }
  }, [markdownContent])

  // Scroll to heading smoothly
  const scrollToHeading = (id: string) => {
    setActiveHeadingId(id)
    const el = document.getElementById(id)
    if (el && contentScrollRef.current) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Handle Copy Raw Markdown
  const handleCopy = () => {
    if (!markdownContent) return
    navigator.clipboard.writeText(markdownContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  // Handle Download .md
  const handleDownload = () => {
    if (!markdownContent) return
    const filename = currentPath.split("/").pop() || `${project.id}-ux-documentation.md`
    const blob = new Blob([markdownContent], { type: "text/markdown;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const filteredToc = tocItems.filter((item) =>
    item.text.toLowerCase().includes(tocFilter.toLowerCase())
  )

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`flex flex-col bg-background border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 ${
            isFullscreen ? "w-full h-full rounded-none" : "w-full max-w-7xl h-[92vh]"
          }`}
        >
          {/* Top Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 px-5 py-3.5 border-b border-border bg-card/80 shrink-0">
            {/* Left: Brand & Title & Project Switcher */}
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="flex size-9 items-center justify-center rounded-xl font-black text-white text-sm shadow-xs shrink-0"
                style={{ backgroundColor: project.brandColor }}
              >
                {project.brandLogoText || project.title.slice(0, 2)}
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-extrabold text-base tracking-tight text-foreground truncate">
                    {project.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{
                      borderColor: `${project.brandColor}50`,
                      backgroundColor: `${project.brandColor}15`,
                      color: project.brandColor,
                    }}
                  >
                    {project.badgeText}
                  </Badge>
                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    · {project.sizeText}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground truncate">
                  Author: <strong>Pritam Maji</strong> (Principal UI/UX Architect) · {project.year}
                </span>
              </div>
            </div>

            {/* Middle: Document Mode Switcher (Spec vs Audit) */}
            <div className="flex items-center gap-1.5 bg-muted/60 p-1 rounded-xl border border-border shrink-0 self-start md:self-auto">
              <button
                onClick={() => setActiveDocType("spec")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeDocType === "spec"
                    ? "bg-background text-foreground shadow-xs font-extrabold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <BookOpen className="size-3.5 text-primary" />
                <span>Master Architecture Spec</span>
              </button>

              {project.auditPath && (
                <button
                  onClick={() => setActiveDocType("audit")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    activeDocType === "audit"
                      ? "bg-background text-foreground shadow-xs font-extrabold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Palette className="size-3.5 text-emerald-500" />
                  <span>Design System Audit</span>
                </button>
              )}
            </div>

            {/* Right: Action Buttons (Download, Copy, Figma, TOC toggle, Close) */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition cursor-pointer"
                title="Copy raw markdown to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5 text-muted-foreground" />
                    <span className="hidden sm:inline">Copy MD</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition cursor-pointer"
                title="Download raw .md file"
              >
                <Download className="size-3.5 text-muted-foreground" />
                <span className="hidden sm:inline">Download</span>
              </button>

              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-white transition hover:brightness-110 cursor-pointer shadow-xs"
                  style={{ backgroundColor: project.brandColor }}
                  title="Open Figma File"
                >
                  <ExternalLink className="size-3.5" />
                  <span>Figma</span>
                </a>
              )}

              <button
                onClick={() => setShowToc(!showToc)}
                className={`p-2 rounded-lg border border-border transition cursor-pointer ${
                  showToc ? "bg-primary/10 text-primary border-primary/30" : "bg-card hover:bg-muted text-muted-foreground"
                }`}
                title="Toggle Table of Contents"
              >
                <List className="size-4" />
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer hidden sm:inline-flex"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-lg border border-border bg-muted/60 hover:bg-destructive hover:text-destructive-foreground transition cursor-pointer ml-1"
                title="Close Reader (Esc)"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Quick Project Switcher Ribbon */}
          <div className="flex items-center gap-1.5 px-4 py-2 border-b border-border/80 bg-muted/30 overflow-x-auto text-xs shrink-0 no-scrollbar">
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider shrink-0 mr-2">
              Browse Docs:
            </span>
            {Object.values(docsRegistry).map((p) => {
              const isSelected = selectedProjectId === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedProjectId(p.id)
                    setActiveDocType("spec")
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full whitespace-nowrap transition cursor-pointer shrink-0 font-medium ${
                    isSelected
                      ? "bg-foreground text-background font-bold shadow-xs"
                      : "bg-background/80 hover:bg-muted text-foreground border border-border/70"
                  }`}
                >
                  <span
                    className="size-2 rounded-full shrink-0"
                    style={{ backgroundColor: p.brandColor }}
                  />
                  <span>{p.title}</span>
                </button>
              )
            })}
          </div>

          {/* Body: Two Columns (TOC Sidebar + Markdown Content) */}
          <div className="flex-1 flex overflow-hidden min-h-0">
            {/* Table of Contents Sidebar */}
            {showToc && (
              <div className="w-72 lg:w-80 border-r border-border bg-card/40 flex flex-col shrink-0 overflow-hidden">
                {/* TOC Search Input */}
                <div className="p-3 border-b border-border bg-card/60">
                  <div className="relative">
                    <Search className="size-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Filter sections..."
                      value={tocFilter}
                      onChange={(e) => setTocFilter(e.target.value)}
                      className="w-full bg-background border border-border rounded-lg pl-8 pr-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* TOC List */}
                <div className="flex-1 overflow-y-auto p-2 space-y-1 text-xs">
                  {filteredToc.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">
                      No sections matching "{tocFilter}"
                    </div>
                  ) : (
                    filteredToc.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToHeading(item.id)}
                        className={`w-full text-left py-1.5 px-2.5 rounded-lg transition cursor-pointer block truncate ${
                          item.level === 1
                            ? "font-bold text-foreground text-[12px] mt-2"
                            : item.level === 2
                            ? "font-medium text-muted-foreground hover:text-foreground pl-4 text-[11px]"
                            : "text-muted-foreground/80 hover:text-foreground pl-6 text-[11px]"
                        } ${
                          activeHeadingId === item.id
                            ? "bg-primary/10 text-primary font-bold border-l-2 border-primary"
                            : "hover:bg-muted/60"
                        }`}
                        title={item.text}
                      >
                        {item.text}
                      </button>
                    ))
                  )}
                </div>

                {/* Bottom TOC Stats */}
                <div className="p-2.5 border-t border-border bg-card/60 text-[11px] text-muted-foreground flex items-center justify-between">
                  <span>{tocItems.length} Headings</span>
                  <span className="font-mono">{project.sizeText}</span>
                </div>
              </div>
            )}

            {/* Markdown Document Content Area */}
            <div
              ref={contentScrollRef}
              className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-14 bg-background scroll-smooth"
            >
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-96 gap-4 text-muted-foreground">
                  <div className="size-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                  <p className="text-sm font-medium">Loading {project.title} documentation...</p>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto space-y-6">
                  {/* Top Notification Badge */}
                  <div className="p-4 rounded-xl border border-border bg-card/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                    <div className="flex items-center gap-3">
                      <Sparkles className="size-5 text-primary shrink-0" />
                      <div>
                        <div className="font-bold text-sm text-foreground">
                          {activeDocType === "spec"
                            ? `${project.title} — Master UX Architecture Specification`
                            : `${project.title} — Visual Design System & Component Audit`}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Directly from verified disk documentation · Authentic 1:1 Markdown File
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleCopy}
                        className="text-xs h-8"
                      >
                        <Copy className="size-3 mr-1.5" />
                        Copy Markdown
                      </Button>
                      <Button
                        size="sm"
                        onClick={handleDownload}
                        className="text-xs h-8 text-white"
                        style={{ backgroundColor: project.brandColor }}
                      >
                        <Download className="size-3 mr-1.5" />
                        Download .md
                      </Button>
                    </div>
                  </div>

                  {/* Rendered Markdown Body */}
                  <article
                    className="doc-rendered-markdown prose prose-neutral dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />

                  {/* End of Document Footer */}
                  <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <div>
                      Master UX Specification signed by <strong>Pritam Maji</strong> (Creative Director / Principal UI/UX Architect)
                    </div>
                    <button
                      onClick={() => contentScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground font-semibold cursor-pointer transition"
                    >
                      <ArrowUp className="size-3.5" />
                      <span>Back to top</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
