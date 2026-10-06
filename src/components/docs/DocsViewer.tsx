import React, { useState, useEffect } from "react"
import { getDocsNav, NavItem } from "@/config/docs-nav"
import { screensData, ScreenData } from "@/data/screensData"
import { linearScreensData } from "@/data/linearScreensData"
import { ProductId, productsConfig } from "@/config/products"
import { MarkdownDocReaderModal } from "@/components/docs/MarkdownDocReaderModal"
import { ScreenExplainer } from "@/components/screens/ScreenExplainer"
import { ScreenGallery } from "@/components/screens/ScreenGallery"
import { TokensShowcase } from "@/components/TokensShowcase"
import { ArchitectureView } from "@/components/ArchitectureView"
import { AccessibilityView } from "@/components/AccessibilityView"
import { DeveloperHandoffView } from "@/components/DeveloperHandoffView"
import { MobileErgonomicsView } from "@/components/MobileErgonomicsView"
import { ProductVisionView } from "@/components/docs/ProductVisionView"
import { ResearchInsightView } from "@/components/docs/ResearchInsightView"
import { ProblemOpportunityView } from "@/components/docs/ProblemOpportunityView"
import { UserFlowsView } from "@/components/docs/UserFlowsView"
import { MasterProcessView } from "@/components/docs/MasterProcessView"
import { ArtifactMapView } from "@/components/docs/ArtifactMapView"
// Linear Dedicated Views
import { LinearVisionView } from "@/components/docs/linear/LinearVisionView"
import { LinearProblemOpportunityView } from "@/components/docs/linear/LinearProblemOpportunityView"
import { LinearArchitectureView } from "@/components/docs/linear/LinearArchitectureView"
import { LinearUserFlowsView } from "@/components/docs/linear/LinearUserFlowsView"
import { LinearTokensView } from "@/components/docs/linear/LinearTokensView"
import { LinearAccessibilityView } from "@/components/docs/linear/LinearAccessibilityView"
import { LinearHandoffView } from "@/components/docs/linear/LinearHandoffView"
import { LinearProcessView } from "@/components/docs/linear/LinearProcessView"
import { LinearArtifactMapView } from "@/components/docs/linear/LinearArtifactMapView"
import { LinearResearchView } from "@/components/docs/linear/LinearResearchView"

// Miro Dedicated Views
import {
  MiroVisionView,
  MiroProblemOpportunityView,
  MiroArchitectureView,
  MiroUserFlowsView,
  MiroTokensView,
  MiroAccessibilityView,
  MiroHandoffView,
  MiroProcessView,
  MiroArtifactMapView,
} from "@/components/docs/miro/MiroViews"
import { MiroResearchView } from "@/components/docs/miro/MiroResearchView"

import {
  MixpanelVisionView,
  MixpanelUserFlowsView,
  MixpanelTokensView,
  MixpanelProcessView,
  MixpanelArchitectureView
} from "@/components/docs/mixpanel/MixpanelViews"
import { MixpanelResearchView } from "@/components/docs/mixpanel/MixpanelResearchView"

import {
  FrameVisionView,
  FrameUserFlowsView,
  FrameTokensView,
  FrameProcessView,
  FrameArchitectureView
} from "@/components/docs/frame/FrameViews"
import { FrameResearchView } from "@/components/docs/frame/FrameResearchView"

// Core UX Artifact Views & Sub-Navigation
import { DocsSubNav } from "@/components/docs/DocsSubNav"
import { PersonasView } from "@/components/docs/artifacts/PersonasView"
import { EmpathyMapView } from "@/components/docs/artifacts/EmpathyMapView"
import { UserJourneyMapView } from "@/components/docs/artifacts/UserJourneyMapView"
import { CompetencyMatrixView } from "@/components/docs/artifacts/CompetencyMatrixView"
import { DesignTimeframeView } from "@/components/docs/artifacts/DesignTimeframeView"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  Layers,
  Compass,
  FileText,
  UserCheck,
  Shield,
  Laptop,
  Smartphone,
  ArrowRight,
  ExternalLink,
  Bookmark,
  Share2,
  BookOpen,
} from "lucide-react"

interface DocsViewerProps {
  currentSectionId: string
  onNavigateSection: (sectionId: string, screenId?: string) => void
  activeScreenId?: string
  currentProduct?: ProductId
}

import { miroScreensData } from "@/data/miroScreensData"
import { mixpanelScreensData } from "@/data/mixpanelScreensData"
import { frameScreensData } from "@/data/frameScreensData"
import { qolabaScreensData } from "@/data/qolabaScreensData"
import { brilliantScreensData } from "@/data/brilliantScreensData"
import { mondayScreensData } from "@/data/mondayScreensData"
import { copyaiScreensData } from "@/data/copyaiScreensData"
import { githubScreensData } from "@/data/githubScreensData"
import { officevibeScreensData } from "@/data/officevibeScreensData"
import {
  ProductSuiteVisionView,
  ProductSuiteResearchView,
  ProductSuiteTokensView,
} from "@/components/docs/products/ProductSuiteViews"

export function DocsViewer({
  currentSectionId,
  onNavigateSection,
  activeScreenId = "D01",
  currentProduct = "minimal",
}: DocsViewerProps) {
  const productConfig = productsConfig[currentProduct] || productsConfig.minimal
  const docsNav = getDocsNav(currentProduct)
  const activeScreens =
    currentProduct === "linear" ? linearScreensData :
    currentProduct === "miro" ? miroScreensData :
    currentProduct === "mixpanel" ? mixpanelScreensData :
    currentProduct === "frame" ? frameScreensData :
    currentProduct === "qolaba" ? qolabaScreensData :
    currentProduct === "brilliant" ? brilliantScreensData :
    currentProduct === "monday" ? mondayScreensData :
    currentProduct === "copyai" ? copyaiScreensData :
    currentProduct === "github" ? githubScreensData :
    currentProduct === "officevibe" ? officevibeScreensData :
    screensData

  // Find current doc nav item
  const currentIndex = docsNav.findIndex(
    (item) =>
      item.id === currentSectionId ||
      (currentSectionId === "screens" && item.id === "screens")
  )
  const currentItem = docsNav[currentIndex] || {
    id: currentSectionId,
    title:
      currentSectionId === "persona" ? "User Personas" :
      currentSectionId === "empathy-map" ? "Empathy Map" :
      currentSectionId === "journey-map" ? "User Journey Map" :
      currentSectionId === "competency-matrix" ? "UX Competency Matrix" :
      currentSectionId === "timeframe" ? "Design Time Frame" :
      docsNav[0]?.title || "Documentation",
    number:
      currentSectionId === "persona" ? "02A" :
      currentSectionId === "empathy-map" ? "02B" :
      currentSectionId === "journey-map" ? "02C" :
      currentSectionId === "competency-matrix" ? "02D" :
      currentSectionId === "timeframe" ? "29" :
      docsNav[0]?.number || "00",
  }

  const prevItem = currentIndex > 0 ? docsNav[currentIndex - 1] : null
  const nextItem = currentIndex < docsNav.length - 1 ? docsNav[currentIndex + 1] : null

  // Active screen in screens section
  const [selectedScreenId, setSelectedScreenId] = useState<string>(activeScreenId)
  const [docReaderOpen, setDocReaderOpen] = useState<boolean>(false)

  useEffect(() => {
    if (activeScreenId) {
      setSelectedScreenId(activeScreenId)
    }
  }, [activeScreenId])

  // Fallback to first screen of the active product if current ID does not exist in activeScreens
  const selectedScreen =
    activeScreens.find(
      (s) => s.id.toLowerCase() === selectedScreenId.toLowerCase()
    ) || activeScreens[0]

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start animate-in fade-in-50 duration-300">
      {/* Main Content Column (9 Cols on XL) */}
      <div className="xl:col-span-9 space-y-8 min-w-0">
        {/* Breadcrumb & Metadata Header */}
        <div className="space-y-3 pb-6 border-b border-border">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => onNavigateSection("overview")}
                  className="cursor-pointer hover:text-foreground text-xs"
                >
                  {productConfig.name} Documentation
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-bold text-xs">
                  {currentItem.number && `${currentItem.number} `}
                  {currentItem.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
              {currentSectionId === "screens" && selectedScreenId && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage
                      className="font-bold text-xs"
                      style={{ color: productConfig.brandColor }}
                    >
                      {selectedScreen.id} — {selectedScreen.name}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>

          {/* Title & Author Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="figma-h3 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground">
                  {currentItem.number && `${currentItem.number} — `}
                  {currentItem.title}
                </h3>
                <Badge
                  variant="outline"
                  className="font-bold text-xs min-h-[22px] px-2.5 py-0.5 rounded-[6px]"
                  style={{
                    borderColor: `${productConfig.brandColor}40`,
                    backgroundColor: `${productConfig.brandColor}15`,
                    color: productConfig.brandColor,
                  }}
                >
                  <CheckCircle2 className="size-3 mr-1" /> Approved
                </Badge>
              </div>
              <p className="figma-body2 text-xs sm:text-sm text-muted-foreground mt-1.5 flex items-center gap-2 flex-wrap">
                {currentProduct === "linear" ? (
                  <>
                    <span>By <strong>Linear Design & Engineering Architecture</strong></span>
                    <span>•</span>
                    <span>Production Spec</span>
                    <span>•</span>
                    <span>Sub-50ms Local-First Engine</span>
                  </>
                ) : (
                  <>
                    <span>By <strong>Pritam</strong> (Lead UI/UX Designer & Architect)</span>
                    <span>•</span>
                    <span>Minimal UI 2021 Foundation</span>
                    <span>•</span>
                    <span>Version 3.4.0 LTS</span>
                  </>
                )}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2.5 shrink-0">
              {/* Main CTA: Real Master Figma Design File (Figma Large Button: 48px, 15px font, r: 8px) */}
              <a
                href={productConfig.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 h-12 min-h-[48px] px-[22px] py-[11px] rounded-[8px] text-white font-bold text-[15px] leading-[26px] transition-all group active:scale-[0.98] hover:brightness-105 cursor-pointer shadow-sm"
                style={{ backgroundColor: productConfig.brandColor, boxShadow: `0 8px 16px ${productConfig.brandColor}3d` }}
                title={`Open real master Figma design file for ${productConfig.name}`}
              >
                <svg className="size-4 shrink-0" viewBox="0 0 38 57" fill="none">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                </svg>
                <span>Figma file</span>
                <ExternalLink className="size-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  variant="outline"
                  onClick={() => setDocReaderOpen(true)}
                  className="h-12 min-h-[48px] px-4 font-bold text-xs border-border/80 hover:bg-muted text-foreground cursor-pointer shadow-xs"
                >
                  <BookOpen className="size-4 mr-2 text-primary" />
                  Read Full Markdown Spec
                </Button>

                <Badge variant="secondary" className="text-xs font-mono px-4 py-2 min-h-[32px] rounded-full">
                  WCAG 2.2 AA Verified
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Core UX Artifacts Navigation Sub-Tabs */}
        <DocsSubNav
          currentSectionId={currentSectionId}
          onNavigateSection={onNavigateSection}
          currentProduct={currentProduct}
        />

        {/* ---------------- 00. OVERVIEW VIEW ---------------- */}
        {currentSectionId === "overview" && (
          <div className="space-y-6">
            {currentProduct === "linear" ? (
              <>
                <Alert
                  className="border"
                  style={{
                    borderColor: `${productConfig.brandColor}40`,
                    backgroundColor: `${productConfig.brandColor}08`,
                  }}
                >
                  <Sparkles className="size-4" style={{ color: productConfig.brandColor }} />
                  <AlertTitle className="text-sm font-bold text-foreground">
                    The Linear Method — High-Velocity Product Operations Architecture
                  </AlertTitle>
                  <AlertDescription className="text-xs text-muted-foreground leading-relaxed mt-1">
                    Linear is the purpose-built system for software product development. Engineered around extreme sub-50ms speed, local-first client synchronization, keyboard-first home-row ergonomics, and automated Git state integration.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-border bg-card">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Empirical Baseline
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-black text-foreground">2.4s Latency</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Rapid issue creation unassisted vs 18.2s Jira baseline (-86.8%).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-card">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Core Workflows
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-black text-foreground">14 Archetypes</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Onboarding, Git sync, active issues, Kanban, milestones, and ⌘K.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-card">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Sync Architecture
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-black text-foreground">Local SQLite Wasm</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Sub-16ms optimistic UI commits with background WebSocket delta sync.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
                    How to Read This Linear Documentation
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Review empirical usability metrics in the <strong>Research Dashboard</strong> or traverse sections 01 through 28 to inspect the 14 annotated screen archetypes, interactive task flowcharts (Mermaid.js with zoom/drag controls), design tokens, and developer sync protocols.
                  </p>
                  <div className="flex gap-3 pt-2 flex-wrap">
                    <Button
                      onClick={() => onNavigateSection("vision")}
                      className="font-bold text-sm text-white shadow-xs"
                      style={{ backgroundColor: productConfig.brandColor }}
                    >
                      Start Reading Section 01 <ArrowRight className="size-4 ml-1.5" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => onNavigateSection("screens")}
                      className="font-bold text-sm"
                    >
                      Jump to 14 Screens Gallery
                    </Button>
                  </div>
                </div>
              </>
            ) : currentProduct !== "minimal" ? (
              <>
                <Alert
                  className="border"
                  style={{
                    borderColor: `${productConfig.brandColor}40`,
                    backgroundColor: `${productConfig.brandColor}08`,
                  }}
                >
                  <Sparkles className="size-4" style={{ color: productConfig.brandColor }} />
                  <AlertTitle className="text-sm font-bold text-foreground">
                    {productConfig.name} — {productConfig.subtitle}
                  </AlertTitle>
                  <AlertDescription className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {productConfig.description}
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-border bg-card">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Empirical Baseline
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-black text-foreground">
                        {currentProduct === "qolaba" ? "-84.3% TTFV" :
                         currentProduct === "brilliant" ? "+6.2x Retention" :
                         currentProduct === "monday" ? "-81% Switching" :
                         currentProduct === "copyai" ? "10x Drafting" :
                         currentProduct === "github" ? "-90.8% Finder" :
                         currentProduct === "officevibe" ? "84% Weekly Rate" :
                         "88%+ Usability"}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {currentProduct === "qolaba" ? "3.8m first image vs 24m Discord CLI." :
                         currentProduct === "brilliant" ? "78% 30-day concept retention vs 12.5% video." :
                         currentProduct === "monday" ? "0.8h/day in Work OS vs 4.2h fragmented tools." :
                         currentProduct === "copyai" ? "2.5 mins per outline vs 45 mins manual." :
                         currentProduct === "github" ? "1.1s fuzzy file search vs 12s manual tree." :
                         currentProduct === "officevibe" ? "Weekly check-ins vs 32% annual survey." :
                         "High task success benchmark."}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-card">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Core Archetypes
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-black text-foreground">{activeScreens.length} Archetypes</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Deep hotspot audits, interactive state models, and analytics triggers.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-card">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Design System
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-black" style={{ color: productConfig.brandColor }}>W3C DTCG Tokens</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        WCAG 2.2 AA verified contrast and accessibility specifications.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
                    How to Read This {productConfig.name} Documentation
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Stakeholders and product executives can immediately review the system vision and research insights in sections 01 and 02. Product designers and engineers can traverse through sections 00 to 28 below to inspect the {activeScreens.length} annotated screen archetypes, interactive task flowcharts, design tokens, and developer QA contracts.
                  </p>
                  <div className="flex gap-3 pt-2 flex-wrap">
                    <Button
                      onClick={() => onNavigateSection("vision")}
                      className="font-bold text-sm text-white shadow-xs"
                      style={{ backgroundColor: productConfig.brandColor }}
                    >
                      Start Reading Section 01 <ArrowRight className="size-4 ml-1.5" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => onNavigateSection("screens")}
                      className="font-bold text-sm"
                    >
                      Jump to {activeScreens.length} Screens Gallery
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setDocReaderOpen(true)}
                      className="font-bold text-sm border-border"
                    >
                      <BookOpen className="size-4 mr-1.5 text-primary" />
                      Read Full Markdown Spec
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Alert className="border-emerald-500/30 bg-emerald-500/5">
                  <Sparkles className="size-4 text-emerald-500" />
                  <AlertTitle className="text-sm font-bold text-foreground">
                    Original 2021 Creator — Minimal Client and Admin Dashboard
                  </AlertTitle>
                  <AlertDescription className="text-xs text-muted-foreground leading-relaxed mt-1">
                    This documentation reflects the foundational design architecture created from scratch by Pritam in 2021 for the Minimal Dashboard ecosystem. It combines human-centered usability research, 6 complete dashboard paradigms, an atomic design token engine, and rigorous front-end handoff contracts.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-border bg-card">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Empirical Baseline
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-black text-foreground">82%</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Task success rate achieved across 42 usability participants.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-card">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Core Dashboards
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-black text-foreground">6 Archetypes</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Analytics, App, Banking, Booking, E-Commerce, and File Manager.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-card">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Token Architecture
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-black text-foreground">OKLCH Semantic</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Preset b3kcuGVx2 tokens with vivid organic emerald (#00AB55).
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
                    How to Read This Documentation
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Stakeholders and product executives can immediately review the top-level research numbers in the <strong>Research Dashboard</strong>. Product designers and engineers can traverse through sections 01 to 28 below to inspect user flows, annotated screen hotspots with research rationale, design tokens, and developer QA contracts.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={() => onNavigateSection("vision")}
                      className="font-bold text-sm"
                    >
                      Start Reading Section 01 <ArrowRight className="size-4 ml-1.5" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => onNavigateSection("screens")}
                      className="font-bold text-sm"
                    >
                      Jump to 6 Screens Gallery
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ---------------- 01. PRODUCT & VISION ---------------- */}
        {currentSectionId === "vision" && (
          currentProduct === "linear" ? <LinearVisionView /> :
          currentProduct === "miro" ? <MiroVisionView /> :
          currentProduct === "mixpanel" ? <MixpanelVisionView /> :
          currentProduct === "frame" ? <FrameVisionView /> :
          ["qolaba", "brilliant", "monday", "copyai", "github", "officevibe"].includes(currentProduct) ? <ProductSuiteVisionView productId={currentProduct} /> :
          <ProductVisionView />
        )}

        {/* ---------------- 02. RESEARCH & HUMAN INSIGHT ---------------- */}
        {currentSectionId === "research-doc" && (
          currentProduct === "mixpanel" ? <MixpanelResearchView /> :
          currentProduct === "frame" ? <FrameResearchView /> :
          currentProduct === "linear" ? <LinearResearchView /> :
          currentProduct === "miro" ? <MiroResearchView /> :
          ["qolaba", "brilliant", "monday", "copyai", "github", "officevibe"].includes(currentProduct) ? <ProductSuiteResearchView productId={currentProduct} /> :
          <ResearchInsightView />
        )}

        {/* ---------------- 02A. USER PERSONAS ---------------- */}
        {currentSectionId === "persona" && (
          <PersonasView currentProduct={currentProduct} />
        )}

        {/* ---------------- 02B. EMPATHY MAP ---------------- */}
        {currentSectionId === "empathy-map" && (
          <EmpathyMapView currentProduct={currentProduct} />
        )}

        {/* ---------------- 02C. USER JOURNEY MAP ---------------- */}
        {currentSectionId === "journey-map" && (
          <UserJourneyMapView currentProduct={currentProduct} />
        )}

        {/* ---------------- 02D. UX COMPETENCY MATRIX ---------------- */}
        {(currentSectionId === "competency-matrix" || currentSectionId === "matrix") && (
          <CompetencyMatrixView currentProduct={currentProduct} />
        )}

        {/* ---------------- 03. PROBLEM & OPPORTUNITY ---------------- */}
        {currentSectionId === "problem" && (
          currentProduct === "linear" ? <LinearProblemOpportunityView /> : currentProduct === "miro" ? <MiroProblemOpportunityView /> : <ProblemOpportunityView />
        )}

        {/* ---------------- 04. STRATEGY & SCOPE ---------------- */}
        {currentSectionId === "strategy" && (
          <div className="space-y-6">
            {currentProduct === "linear" ? (
              <>
                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">4.1 Continuous Cycles vs Sprint Ceremony</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-bold text-foreground">1. Continuous Rolling Cadence:</span> 1 to 2-week continuous cycles replace artificial sprint deadlines and pressure.
                    </div>
                    <div className="p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-bold text-foreground">2. Zero-Guilt Rollover:</span> Unfinished issues roll over smoothly to the next cycle with automatic scope adjustment.
                    </div>
                    <div className="p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-bold text-foreground">3. Automated Git State Tracking:</span> Branch creation, commits, and PR merges deterministically update issue state.
                    </div>
                    <div className="p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-bold text-foreground">4. Sub-50ms Quick Switcher ('S'):</span> Single-key home-row state modification eliminates 4.8s dropdown friction.
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">4.2 Linear High-Velocity MVP Scope Matrix</h5>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border">
                        <tr>
                          <th className="p-3">Priority</th>
                          <th className="p-3">Scope Items Included</th>
                          <th className="p-3">Platform Target</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="p-3 font-bold text-[#5E6AD2]">Must Have (P0)</td>
                          <td className="p-3 text-foreground">14 core workflows, offline SQLite sync, single-key shortcuts ('C', 'S', 'P', 'A'), obsidian dark theme.</td>
                          <td className="p-3 text-muted-foreground">Universal Web + Desktop Native</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-blue-500">Should Have (P1)</td>
                          <td className="p-3 text-foreground">Global ⌘K command menu, GitHub/GitLab webhook parser, milestone burndown analytics.</td>
                          <td className="p-3 text-muted-foreground">Desktop + Mobile Companion</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-amber-500">Could Have (P2)</td>
                          <td className="p-3 text-foreground">Figma live embed in markdown description, custom Vim shortcut remapping.</td>
                          <td className="p-3 text-muted-foreground">Web / PWA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : currentProduct === "miro" ? (
              <>
                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">4.1 Core Strategy</h5>
                  <div className="grid grid-cols-1 gap-4 text-xs">
                    <div className="p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-bold text-foreground">1. Unlimited Space:</span> No artboards. One continuous plane of existence.
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">4.1 The 6 Core Operational Pillars</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-bold text-foreground">1. App Cockpit:</span> Telemetry, extension management, disk consumption, billing.
                    </div>
                    <div className="p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-bold text-foreground">2. E-Commerce Center:</span> Revenue profit margins, demographic splits, SKU leaderboards, order fulfillment.
                    </div>
                    <div className="p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-bold text-foreground">3. Analytics Suite:</span> Multi-channel attribution, regional radar distributions, visitor cohorts.
                    </div>
                    <div className="p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-bold text-foreground">4. Banking Treasury:</span> Dual-currency Visa cards, instant slider wire transfers, expense categories.
                    </div>
                    <div className="p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-bold text-foreground">5. Booking Hospitality:</span> Capacity gauges, room inventory status, guest reservation queues, review moderation.
                    </div>
                    <div className="p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-bold text-foreground">6. File Manager:</span> Multi-cloud bridge (Dropbox, Google Drive, OneDrive), MIME storage consumption rings.
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                  <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">4.2 MVP Scope Matrix</h5>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border">
                        <tr>
                          <th className="p-3">Priority</th>
                          <th className="p-3">Scope Items Included</th>
                          <th className="p-3">Target Platform</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Must Have (P0)</td>
                          <td className="p-3 text-foreground">All 6 core dashboards, responsive sidebar, light/dark elevation, token system.</td>
                          <td className="p-3 text-muted-foreground">Desktop (1440px) + Mobile (375px)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-blue-500">Should Have (P1)</td>
                          <td className="p-3 text-foreground">Interactive slider confirmation, high-res screen zoom, quick search ⌘K.</td>
                          <td className="p-3 text-muted-foreground">Universal Web</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-amber-500">Could Have (P2)</td>
                          <td className="p-3 text-foreground">Customizable KPI card widget rearrangement, multi-language string tables.</td>
                          <td className="p-3 text-muted-foreground">Web / PWA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ---------------- 05. ARCHITECTURE ---------------- */}
        {currentSectionId === "architecture" && (
          currentProduct === "linear" ? <LinearArchitectureView /> : currentProduct === "miro" ? <MiroArchitectureView /> : currentProduct === "mixpanel" ? <MixpanelArchitectureView /> : currentProduct === "frame" ? <FrameArchitectureView /> : <ArchitectureView />
        )}

        {/* ---------------- 06. USER & TASK FLOWS ---------------- */}
        {currentSectionId === "flows" && (
          currentProduct === "linear" ? <LinearUserFlowsView /> : currentProduct === "miro" ? <MiroUserFlowsView /> : currentProduct === "mixpanel" ? <MixpanelUserFlowsView /> : currentProduct === "frame" ? <FrameUserFlowsView /> : <UserFlowsView />
        )}

        {/* ---------------- 07. SCREENS & ARCHETYPES ---------------- */}
        {currentSectionId === "screens" && (
          <div className="space-y-8">
            {/* Screen Selector Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Select Screen Archetype ({activeScreens.length} Total):
                </span>
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
                {activeScreens.map((s) => {
                  const isSelected = selectedScreen.id === s.id
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedScreenId(s.id)}
                      className={`h-9 min-h-[36px] px-4 py-[6px] text-sm font-bold rounded-[8px] transition-all shrink-0 cursor-pointer ${
                        isSelected
                          ? "text-white shadow-xs"
                          : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                      }`}
                      style={{
                        backgroundColor: isSelected ? productConfig.brandColor : undefined,
                      }}
                    >
                      {s.id} — {s.name.replace(/^(General |Linear )/, "")}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Render ScreenExplainer */}
            <ScreenExplainer
              screen={selectedScreen}
              onNavigateScreen={(id) => setSelectedScreenId(id)}
              onNavigateToFinding={() => onNavigateSection("research-doc")}
            />

            {/* Gallery Grid below for easy navigation */}
            <div className="pt-8 border-t border-border">
              <h3 className="figma-h4 text-[20px] lg:text-[24px] font-bold text-foreground mb-4">
                All {activeScreens.length} {productConfig.name} Workflow Archetypes
              </h3>
              <ScreenGallery
                screens={activeScreens}
                onSelectScreen={(id) => {
                  setSelectedScreenId(id)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              />
            </div>
          </div>
        )}

        {/* Individual Screen Deep Links */}
        {currentSectionId.startsWith("screen-") && (
          <div className="space-y-6">
            <ScreenExplainer
              screen={
                activeScreens.find(
                  (s) => s.id.toLowerCase() === currentSectionId.replace("screen-", "")
                ) || activeScreens[0]
              }
              onNavigateScreen={(id) => onNavigateSection(`screen-${id.toLowerCase()}`)}
              onNavigateToFinding={() => onNavigateSection("research-doc")}
            />
          </div>
        )}

        {/* ---------------- 08. DESIGN SYSTEM & TOKENS ---------------- */}
        {currentSectionId === "tokens" && (
          currentProduct === "linear" ? <LinearTokensView /> :
          currentProduct === "miro" ? <MiroTokensView /> :
          currentProduct === "mixpanel" ? <MixpanelTokensView /> :
          currentProduct === "frame" ? <FrameTokensView /> :
          ["qolaba", "brilliant", "monday", "copyai", "github", "officevibe"].includes(currentProduct) ? <ProductSuiteTokensView productId={currentProduct} /> :
          <TokensShowcase />
        )}

        {/* ---------------- 09. TESTING & ITERATION ---------------- */}
        {currentSectionId === "testing" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">9.1 Usability Benchmarks Across Iterations</h5>
              <div className="border border-border rounded-lg overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border">
                    <tr>
                      <th className="p-3">Iteration Version</th>
                      <th className="p-3">SUS Score</th>
                      <th className="p-3">Task Success</th>
                      <th className="p-3">Error Rate</th>
                      <th className="p-3">Key Architectural Refactor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {currentProduct === "linear" ? (
                      <>
                        <tr>
                          <td className="p-3 font-bold">V1 (Linear Beta 2019)</td>
                          <td className="p-3 font-mono">74</td>
                          <td className="p-3 font-mono">76%</td>
                          <td className="p-3 font-mono text-red-500">7.4%</td>
                          <td className="p-3 text-muted-foreground">Original keyboard prototype with simple local in-memory cache.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold">V2 (Sync Engine 2021)</td>
                          <td className="p-3 font-mono">84</td>
                          <td className="p-3 font-mono">88%</td>
                          <td className="p-3 font-mono text-amber-500">3.8%</td>
                          <td className="p-3 text-muted-foreground">Local SQLite Wasm + WebSocket conflict-free delta sync protocol.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold" style={{ color: productConfig.brandColor }}>
                            V3 (The Linear Method 2024)
                          </td>
                          <td className="p-3 font-mono font-bold">91.4</td>
                          <td className="p-3 font-mono font-bold">96%</td>
                          <td className="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">1.2%</td>
                          <td className="p-3 text-muted-foreground">Sub-50ms Quick Switcher ('S'), automated Git PR link, multi-team cycles.</td>
                        </tr>
                      </>
                    ) : currentProduct === "miro" ? (
                      <>
                        <tr>
                          <td className="p-3 font-bold">V1 (Month 1 2020)</td>
                          <td className="p-3 font-mono">65</td>
                          <td className="p-3 font-mono">70%</td>
                          <td className="p-3 font-mono text-red-500">12.4%</td>
                          <td className="p-3 text-muted-foreground">Initial WebGL canvas without auto-layout.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold">V2 (Month 3 2020)</td>
                          <td className="p-3 font-mono">78</td>
                          <td className="p-3 font-mono">82%</td>
                          <td className="p-3 font-mono text-amber-500">6.8%</td>
                          <td className="p-3 text-muted-foreground">Added Multiplayer Cursors and Frame Export.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">V3 (Month 6 2020)</td>
                          <td className="p-3 font-mono font-bold">89.5</td>
                          <td className="p-3 font-mono font-bold">94%</td>
                          <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">2.1%</td>
                          <td className="p-3 text-muted-foreground">Stable infinite node architecture and optimized WebSockets.</td>
                        </tr>
                      </>
                    ) : (
                      <>
                        <tr>
                          <td className="p-3 font-bold">V1 (Initial Prototype)</td>
                          <td className="p-3 font-mono">62</td>
                          <td className="p-3 font-mono">58%</td>
                          <td className="p-3 font-mono text-red-500">19%</td>
                          <td className="p-3 text-muted-foreground">Original multi-step wire forms; dense non-responsive tables.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold">V2 (Interactive Alpha)</td>
                          <td className="p-3 font-mono">70</td>
                          <td className="p-3 font-mono">71%</td>
                          <td className="p-3 font-mono text-amber-500">11%</td>
                          <td className="p-3 text-muted-foreground">Introduced quick transfer slider and collapsible left sidebar rail.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">V3 (2021 Foundation Release)</td>
                          <td className="p-3 font-mono font-bold">76</td>
                          <td className="p-3 font-mono font-bold">82%</td>
                          <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">6%</td>
                          <td className="p-3 text-muted-foreground">Atomic OKLCH tokens, 8pt spacing cadence, and dual dark elevation engine.</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 10. ACCESSIBILITY ---------------- */}
        {currentSectionId === "accessibility" && (
          currentProduct === "linear" ? <LinearAccessibilityView /> : currentProduct === "miro" ? <MiroAccessibilityView /> : <AccessibilityView />
        )}

        {/* ---------------- 11. HANDOFF & QA ---------------- */}
        {currentSectionId === "handoff" && (
          currentProduct === "linear" ? <LinearHandoffView /> : currentProduct === "miro" ? <MiroHandoffView /> : <DeveloperHandoffView />
        )}

        {/* ---------------- 12. METRICS & GOVERNANCE ---------------- */}
        {currentSectionId === "metrics" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">12.1 Google HEART Framework Implementation</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-1">
                  <span className="font-bold text-foreground">Happiness:</span>
                  <p className="text-muted-foreground">
                    {currentProduct === "linear"
                      ? "Target CSAT > 92%, SUS 91.4 (Grade A+, 99th percentile across 140 developers)."
                      : currentProduct === "miro"
                      ? "Target CSAT > 90%, SUS 89.5 (Grade A, exceptional spatial workflow)."
                      : "Target CSAT > 85%, SUS > 75. Measured via periodic in-app micro-prompts."}
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-1">
                  <span className="font-bold text-foreground">Engagement:</span>
                  <p className="text-muted-foreground">
                    {currentProduct === "linear"
                      ? "Average daily active session of 62 minutes with 38 home-row micro-actions per user."
                      : currentProduct === "miro"
                      ? "Average team session length of 58 minutes with live cursors driving high engagement."
                      : "Average daily active session length of 24 minutes with 4.2 dashboard views per session."}
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-1">
                  <span className="font-bold text-foreground">Adoption:</span>
                  <p className="text-muted-foreground">
                    {currentProduct === "linear"
                      ? "98% of engineering teams adopt keyboard shortcut 'C' within 24 hours of onboarding."
                      : currentProduct === "miro"
                      ? "95% of workspace invites result in active diagram collaboration within 24 hours."
                      : "84% of new team accounts configure at least 2 dashboards within the first 48 hours."}
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-1">
                  <span className="font-bold text-foreground">Task Velocity:</span>
                  <p className="text-muted-foreground">
                    {currentProduct === "linear"
                      ? "2.4s unassisted issue creation latency (vs 18.2s Jira baseline, -86.8%)."
                      : currentProduct === "miro"
                      ? "4.2s to auto-layout 20 stickies (vs 45s manual manipulation, -90%)."
                      : "Over 85% completion rate on core financial, booking, and analytics task funnels."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 13. SIGN-OFF & ROADMAP ---------------- */}
        {currentSectionId === "sign-off" && (
          <div className="space-y-6">
            <div
              className="rounded-xl border p-6 space-y-4"
              style={{
                borderColor: `${productConfig.brandColor}40`,
                backgroundColor: `${productConfig.brandColor}08`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex size-10 items-center justify-center rounded-xl text-white font-bold"
                  style={{ backgroundColor: productConfig.brandColor }}
                >
                  ✓
                </div>
                <div>
                  <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-foreground tracking-tight">
                    {productConfig.name} Production Sign-Off & Approval
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    {productConfig.name} {productConfig.versionBadge} is certified for production deployment.
                  </p>
                </div>
              </div>

              <div className="border border-border rounded-lg overflow-hidden bg-card mt-4">
                <table className="w-full text-xs text-left">
                  <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border">
                    <tr>
                      <th className="p-3">Role</th>
                      <th className="p-3">Signatory</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {currentProduct === "linear" ? (
                      <>
                        <tr>
                          <td className="p-3 font-medium">Head of Design & Product</td>
                          <td className="p-3 font-bold text-foreground">Karri Saarinen</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Approved</td>
                          <td className="p-3 font-mono">2024-09-15</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Head of Engineering & Sync Engine</td>
                          <td className="p-3 font-bold text-foreground">Tuomas Artman</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Approved</td>
                          <td className="p-3 font-mono">2024-09-16</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Executive Review Committee</td>
                          <td className="p-3 font-bold text-foreground">Linear Product Council</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Approved</td>
                          <td className="p-3 font-mono">2024-09-17</td>
                        </tr>
                      </>
                    ) : currentProduct === "miro" ? (
                      <>
                        <tr>
                          <td className="p-3 font-medium">Head of Canvas Engineering</td>
                          <td className="p-3 font-bold text-foreground">Miro WebGL Team</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Approved</td>
                          <td className="p-3 font-mono">2020-11-18</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Lead Spatial UX Designer</td>
                          <td className="p-3 font-bold text-foreground">Miro Design System</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Approved</td>
                          <td className="p-3 font-mono">2020-11-19</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">VP of Product</td>
                          <td className="p-3 font-bold text-foreground">Executive Committee</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Approved</td>
                          <td className="p-3 font-mono">2020-11-20</td>
                        </tr>
                      </>
                    ) : (
                      <>
                        <tr>
                          <td className="p-3 font-medium">Principal UI/UX Architect</td>
                          <td className="p-3 font-bold text-foreground">Pritam (Lead Designer)</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Approved</td>
                          <td className="p-3 font-mono">2021-08-20</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Engineering Lead</td>
                          <td className="p-3 font-bold text-foreground">Frontend Architecture Team</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Approved</td>
                          <td className="p-3 font-mono">2021-08-21</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Product Director</td>
                          <td className="p-3 font-bold text-foreground">Executive Committee</td>
                          <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Approved</td>
                          <td className="p-3 font-mono">2021-08-22</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 27. MASTER UX PROCESS ---------------- */}
        {currentSectionId === "process" && (
          currentProduct === "linear" ? <LinearProcessView /> : currentProduct === "miro" ? <MiroProcessView /> : currentProduct === "mixpanel" ? <MixpanelProcessView /> : currentProduct === "frame" ? <FrameProcessView /> : <MasterProcessView />
        )}

        {/* ---------------- 28. THE IDEAL UX ARTIFACT MAP ---------------- */}
        {currentSectionId === "artifact-map" && (
          currentProduct === "linear" ? <LinearArtifactMapView /> : currentProduct === "miro" ? <MiroArtifactMapView /> : <ArtifactMapView />
        )}

        {/* ---------------- 29. DESIGN TIME FRAME ---------------- */}
        {currentSectionId === "timeframe" && (
          <DesignTimeframeView currentProduct={currentProduct} />
        )}

        {/* Bottom Pagination Links (Prev / Next Section) */}
        <div className="flex items-center justify-between pt-8 border-t border-border">
          {prevItem ? (
            <Button
              variant="outline"
              size="default"
              onClick={() => onNavigateSection(prevItem.id)}
              className="font-bold"
            >
              <ChevronLeft className="size-4 mr-1" />
              Previous: {prevItem.title}
            </Button>
          ) : (
            <div />
          )}

          {nextItem ? (
            <Button
              size="default"
              onClick={() => onNavigateSection(nextItem.id)}
              className="font-bold text-white shadow-xs"
              style={{ backgroundColor: productConfig.brandColor, boxShadow: `0 8px 16px ${productConfig.brandColor}3d` }}
            >
              Next: {nextItem.title}
              <ChevronRight className="size-4 ml-1" />
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Right Column: Sticky "On This Page" Table of Contents (3 Cols on XL) */}
      <div className="hidden xl:block xl:col-span-3 sticky top-24 space-y-4 text-xs">
        <div className="p-4 rounded-xl border border-border bg-card/60 backdrop-blur-xs space-y-3">
          <span className="font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 text-[11px]">
            <Bookmark className="size-3.5" style={{ color: productConfig.brandColor }} /> On This Page
          </span>
          <div className="space-y-1.5 border-l border-border pl-2.5">
            {currentItem.items ? (
              currentItem.items.map((sub) => (
                <button
                  key={sub.title}
                  onClick={() => {
                    if (sub.id.startsWith("screen-")) {
                      onNavigateSection("screens", sub.id.replace("screen-", "").toUpperCase())
                    } else {
                      onNavigateSection(sub.id)
                    }
                  }}
                  className="block text-left text-muted-foreground hover:text-foreground transition-colors py-1 px-2 rounded-lg text-xs truncate max-w-full cursor-pointer"
                >
                  {sub.title}
                </button>
              ))
            ) : (
              <span className="text-muted-foreground italic">Section content</span>
            )}
          </div>
        </div>

        {/* Quick Screen Shortcuts */}
        <div className="p-4 rounded-xl border border-border bg-card/60 backdrop-blur-xs space-y-2">
          <span className="font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 text-[11px]">
            <Laptop className="size-3.5" /> {activeScreens.length} Screen Archetypes
          </span>
          <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-3 gap-1.5 pt-1 max-h-72 overflow-y-auto">
            {activeScreens.map((s) => {
              const isSelected = selectedScreen.id === s.id && currentSectionId === "screens"
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    onNavigateSection("screens")
                    setSelectedScreenId(s.id)
                  }}
                  className={`p-2.5 rounded-xl text-center font-bold text-xs border transition-colors min-h-[36px] flex items-center justify-center cursor-pointer ${
                    isSelected
                      ? "text-white shadow-xs"
                      : "bg-muted text-muted-foreground hover:text-foreground border-border"
                  }`}
                  style={{
                    backgroundColor: isSelected ? productConfig.brandColor : undefined,
                    borderColor: isSelected ? productConfig.brandColor : undefined,
                  }}
                >
                  {s.id}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Master Markdown Documentation Reader Modal */}
      <MarkdownDocReaderModal
        isOpen={docReaderOpen}
        onClose={() => setDocReaderOpen(false)}
        initialProjectId={currentProduct}
      />
    </div>
  )
}




