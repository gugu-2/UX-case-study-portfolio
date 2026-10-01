import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { getDocsNav, NavItem } from "@/config/docs-nav"
import { screensData } from "@/data/screensData"
import { linearScreensData } from "@/data/linearScreensData"
import { ProductId, productsConfig } from "@/config/products"
import { externalProjects } from "@/config/external-projects"
import {
  LayoutDashboard,
  BookOpen,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Laptop,
  CheckCircle2,
  FileText,
  BadgePercent,
  Layers,
  Shield,
  Activity,
  Award,
  ArrowRight,
  ExternalLink,
  FolderKanban,
  Check,
} from "lucide-react"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  currentView: "home" | "dashboard" | "docs"
  setCurrentView: (view: "home" | "dashboard" | "docs") => void
  activeSection: string
  setActiveSection: (sec: string) => void
  activeScreenId: string
  setActiveScreenId: (id: string) => void
  currentProduct?: ProductId
  setCurrentProduct?: (product: ProductId) => void
}

export function AppSidebar({
  currentView,
  setCurrentView,
  activeSection,
  setActiveSection,
  activeScreenId,
  setActiveScreenId,
  currentProduct = "minimal",
  setCurrentProduct,
  ...props
}: AppSidebarProps) {
  const productConfig = productsConfig[currentProduct] || productsConfig.minimal
  const docsNav = getDocsNav(currentProduct)
  const activeScreens = currentProduct === "linear" ? linearScreensData : screensData

  // Smooth scroll handler for dashboard telemetry anchors
  const handleTelemetryClick = (id: string) => {
    setActiveSection(id)
    if (currentView !== "dashboard") {
      setCurrentView("dashboard")
    }

    // Allow time for dashboard to be rendered if switching views
    setTimeout(
      () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
          el.classList.add("ring-2", "ring-primary", "rounded-2xl")
          setTimeout(() => {
            el.classList.remove("ring-2", "ring-primary")
          }, 1800)
        }
      },
      currentView === "dashboard" ? 10 : 120
    )
  }

  return (
    <Sidebar {...props} className="border-r border-border bg-sidebar">
      {/* Brand Header */}
      <SidebarHeader className="p-4 border-b border-sidebar-border space-y-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => {
                  setCurrentView("home")
                }}
                title="Go to All Projects Portal"
              >
                <div
                  className="flex size-9 items-center justify-center rounded-xl font-black text-white text-sm shadow-xs transition-colors shrink-0"
                  style={{ backgroundColor: productConfig.brandColor }}
                >
                  {productConfig.brandLogoText}
                </div>
                <div className="flex flex-col leading-tight min-w-0 flex-1">
                  <span className="font-bold text-sm tracking-tight text-sidebar-foreground truncate">
                    {productConfig.name}
                  </span>
                  <span
                    className="text-xs font-semibold font-mono truncate"
                    style={{ color: productConfig.brandColor }}
                  >
                    {productConfig.versionBadge}
                  </span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Product Quick-Switch Tabs */}
        {setCurrentProduct && (
          <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-xl border border-sidebar-border text-[11px]">
            <button
              onClick={() => setCurrentProduct("minimal")}
              className={`flex-1 py-1.5 px-2 rounded-lg font-bold text-center transition-all cursor-pointer ${
                currentProduct === "minimal"
                  ? "bg-background text-foreground shadow-xs font-black"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Minimal UI
            </button>
            <button
              onClick={() => setCurrentProduct("linear")}
              className={`flex-1 py-1.5 px-2 rounded-lg font-bold text-center transition-all cursor-pointer ${
                currentProduct === "linear"
                  ? "bg-background text-foreground shadow-xs font-black text-[#5E6AD2]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Linear App
            </button>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-2 py-3 space-y-4">
        {/* Navigation Mode Quick Switch (All Projects | Dashboard | Docs) */}
        <div className="px-2">
          <div className="flex items-center gap-1 bg-sidebar-accent/60 p-1 rounded-xl border border-sidebar-border text-[11px]">
            <button
              onClick={() => setCurrentView("home")}
              className={`flex-1 py-1.5 px-1.5 rounded-lg font-bold text-center transition-all cursor-pointer ${
                currentView === "home"
                  ? "bg-background text-foreground shadow-xs font-black"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              title="Return to unified projects portal"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentView("dashboard")}
              className={`flex-1 py-1.5 px-1.5 rounded-lg font-bold text-center transition-all cursor-pointer ${
                currentView === "dashboard"
                  ? "bg-background text-foreground shadow-xs font-black"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentView("docs")}
              className={`flex-1 py-1.5 px-1.5 rounded-lg font-bold text-center transition-all cursor-pointer ${
                currentView === "docs"
                  ? "bg-background text-foreground shadow-xs font-black"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Docs
            </button>
          </div>
        </div>

        {/* 1. If in HOME VIEW: Show all projects navigator */}
        {currentView === "home" ? (
          <SidebarGroup>
            <div className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Production Product Systems
            </div>
            <SidebarMenu className="space-y-1.5">
              {Object.values(productsConfig).map((p) => {
                const isSelected = currentProduct === p.id
                return (
                  <SidebarMenuItem key={p.id}>
                    <div
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer space-y-2 ${
                        isSelected
                          ? "bg-sidebar-accent border-sidebar-border shadow-xs"
                          : "bg-muted/20 border-transparent hover:bg-sidebar-accent/50"
                      }`}
                      onClick={() => {
                        if (setCurrentProduct) setCurrentProduct(p.id)
                        setCurrentView("dashboard")
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="flex size-6 items-center justify-center rounded-md font-bold text-white text-xs"
                            style={{ backgroundColor: p.brandColor }}
                          >
                            {p.brandLogoText}
                          </div>
                          <span className="text-xs font-bold text-sidebar-foreground">
                            {p.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-muted-foreground">
                          {p.screensCount} Screens
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 pt-1 border-t border-border/40 text-[10px]">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            if (setCurrentProduct) setCurrentProduct(p.id)
                            setCurrentView("dashboard")
                          }}
                          className="flex-1 py-1 px-1.5 rounded bg-background/80 hover:bg-background text-foreground font-semibold text-center border border-border/50"
                        >
                          Dashboard
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            if (setCurrentProduct) setCurrentProduct(p.id)
                            setCurrentView("docs")
                          }}
                          className="flex-1 py-1 px-1.5 rounded bg-background/80 hover:bg-background text-foreground font-semibold text-center border border-border/50"
                        >
                          Docs
                        </button>
                      </div>
                    </div>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>

            <div className="pt-4 px-3 pb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
              <span>Live External Documentations</span>
              <ExternalLink className="size-3" />
            </div>
            <SidebarMenu className="space-y-1">
              {externalProjects.map((ep) => (
                <SidebarMenuItem key={ep.id}>
                  <a
                    href={ep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl border border-border/40 bg-card/40 hover:bg-sidebar-accent/50 transition-all text-xs group"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className="flex size-5 items-center justify-center rounded-md font-bold text-white text-[10px] shrink-0"
                        style={{ backgroundColor: ep.brandColor }}
                      >
                        {ep.title[0]}
                      </div>
                      <span className="font-bold text-sidebar-foreground truncate">
                        {ep.title}
                      </span>
                    </div>
                    <ExternalLink className="size-3 text-muted-foreground group-hover:text-foreground shrink-0" />
                  </a>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ) : currentView === "dashboard" ? (
          /* 2. If in DASHBOARD VIEW: Show dashboard telemetry links with active state & click handling */
          <SidebarGroup>
            <div className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Research Telemetry
            </div>
            <SidebarMenu>
              {[
                { title: "Executive Overview", id: "kpis", icon: Award },
                { title: "Iterative Benchmarks (V1→V3)", id: "iterations", icon: Activity },
                { title: "Task Success by Flow", id: "tasks", icon: CheckCircle2 },
                { title: "Findings by Severity", id: "findings", icon: Layers },
                { title: "Drop-Off Funnel", id: "funnel", icon: BadgePercent },
                { title: "Emotional Resonance", id: "journey", icon: Sparkles },
                { title: "Opportunity Matrix", id: "opportunity", icon: Activity },
                { title: "UX Health Radar", id: "health", icon: Shield },
                { title: "Top Issues Data Table", id: "issues", icon: FileText },
              ].map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={isActive}
                      onClick={() => handleTelemetryClick(item.id)}
                      className={`text-xs font-medium transition-all ${
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-bold"
                          : "text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent/50"
                      }`}
                    >
                      <Icon className={`size-3.5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroup>
        ) : (
          /* 3. If in DOCS VIEW (Official sidebar-03 structure with submenus) */
          <SidebarGroup>
            <div className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Master UX Documentation
            </div>
            <SidebarMenu className="space-y-1">
              {docsNav.map((section) => {
                const isActive = activeSection === section.id
                return (
                  <SidebarMenuItem key={section.id}>
                    <SidebarMenuButton
                      isActive={isActive}
                      onClick={() => {
                        setActiveSection(section.id)
                      }}
                      className={`text-xs font-semibold rounded-lg px-2.5 py-1.5 transition-all ${
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-bold"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      }`}
                    >
                      <span className="font-mono text-xs text-muted-foreground mr-1.5">
                        {section.number}
                      </span>
                      <span className="truncate flex-1">{section.title}</span>
                      {section.badge && (
                        <span className="text-[12px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                          {section.badge}
                        </span>
                      )}
                    </SidebarMenuButton>

                    {/* Submenu for Section 07 Screens */}
                    {section.id === "screens" && (
                      <SidebarMenuSub className="my-1 border-l border-sidebar-border ml-3 pl-2 space-y-0.5 max-h-60 overflow-y-auto">
                        {activeScreens.map((screen) => (
                          <SidebarMenuSubItem key={screen.id}>
                            <SidebarMenuSubButton
                              isActive={activeSection === "screens" && activeScreenId === screen.id}
                              onClick={() => {
                                setActiveSection("screens")
                                setActiveScreenId(screen.id)
                              }}
                              className={`text-xs py-1 cursor-pointer ${
                                activeSection === "screens" && activeScreenId === screen.id
                                  ? "text-primary font-bold"
                                  : "text-muted-foreground hover:text-sidebar-foreground"
                              }`}
                            >
                              <span className="font-mono font-bold mr-1">{screen.id}</span>
                              <span className="truncate">{screen.name.replace(/^(General |Linear )/, "")}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border space-y-2">
        <a
          href={productConfig.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-2.5 rounded-xl border border-sidebar-border bg-sidebar-accent/40 hover:bg-sidebar-accent text-xs font-semibold text-sidebar-foreground transition group"
        >
          <div className="flex items-center gap-2">
            <svg className="size-3.5 shrink-0" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
            </svg>
            <span className="truncate">Open Master Figma</span>
          </div>
          <ExternalLink className="size-3 text-muted-foreground group-hover:text-foreground" />
        </a>

        <div className="flex items-center justify-between text-[11px] text-muted-foreground px-1 font-mono">
          <span>{productConfig.screensCount} Archetypes</span>
          <span className="text-primary font-bold">100% WCAG AA</span>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
