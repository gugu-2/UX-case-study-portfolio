import React from "react"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Search,
  Sun,
  Moon,
  LayoutDashboard,
  BookOpen,
  ExternalLink,
  ChevronDown,
  Check,
  Sparkles,
  FolderKanban,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { ProductId, productsConfig } from "@/config/products"
import { externalProjects } from "@/config/external-projects"

interface SiteHeaderProps {
  currentView: "home" | "dashboard" | "docs"
  setCurrentView: (view: "home" | "dashboard" | "docs") => void
  isDark: boolean
  setIsDark: (val: boolean) => void
  onOpenSearch: () => void
  currentProduct?: ProductId
  setCurrentProduct?: (product: ProductId) => void
}

export function SiteHeader({
  currentView,
  setCurrentView,
  isDark,
  setIsDark,
  onOpenSearch,
  currentProduct = "minimal",
  setCurrentProduct,
}: SiteHeaderProps) {
  const productConfig = productsConfig[currentProduct] || productsConfig.minimal

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-background/95 backdrop-blur-sm px-4 lg:px-6 sticky top-0 z-30 transition-colors">
      {/* Left: Sidebar Trigger & Product Brand Selector */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-1 size-9 rounded-[8px]" />
        <Separator orientation="vertical" className="h-4 hidden sm:block" />

        {/* Global Product Switcher Dropdown */}
        {setCurrentProduct ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] border border-border bg-card/60 hover:bg-muted/60 transition group text-left cursor-pointer">
                <div
                  className="flex size-7 items-center justify-center rounded-[6px] font-black text-white text-xs shadow-xs transition-colors shrink-0"
                  style={{ backgroundColor: productConfig.brandColor }}
                >
                  {productConfig.brandLogoText}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-xs tracking-tight text-foreground leading-tight">
                      {productConfig.name}
                    </span>
                    <ChevronDown className="size-3 text-muted-foreground group-hover:text-foreground transition-transform" />
                  </div>
                  <span className="text-[10px] text-muted-foreground leading-none font-mono">
                    {productConfig.screensCount} Archetypes
                  </span>
                </div>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-64 p-1.5">
              <DropdownMenuLabel className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono px-2 py-1">
                Select Active Product System
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {Object.values(productsConfig).map((p) => {
                const isSelected = currentProduct === p.id
                return (
                  <DropdownMenuItem
                    key={p.id}
                    onClick={() => setCurrentProduct(p.id)}
                    className="flex items-center justify-between p-2 rounded-lg cursor-pointer font-medium"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="flex size-6 items-center justify-center rounded-md font-bold text-white text-xs shadow-xs"
                        style={{ backgroundColor: p.brandColor }}
                      >
                        {p.brandLogoText}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-foreground">{p.name}</span>
                        <span className="text-[10px] text-muted-foreground font-mono">
                          {p.screensCount} Archetypes · {p.versionBadge}
                        </span>
                      </div>
                    </div>
                    {isSelected && <Check className="size-4 text-primary shrink-0" />}
                  </DropdownMenuItem>
                )
              })}
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono px-2 py-1 flex items-center justify-between">
                <span>External Live Systems</span>
                <ExternalLink className="size-3" />
              </DropdownMenuLabel>
              {externalProjects.map((ep) => (
                <DropdownMenuItem
                  key={ep.id}
                  asChild
                  className="flex items-center justify-between p-2 rounded-lg cursor-pointer font-medium"
                >
                  <a href={ep.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="flex size-6 items-center justify-center rounded-md font-bold text-white text-xs shadow-xs shrink-0"
                        style={{ backgroundColor: ep.brandColor }}
                      >
                        {ep.title[0]}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-foreground truncate">{ep.title}</span>
                        <span className="text-[10px] text-muted-foreground font-mono truncate">
                          {ep.subtitle}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="size-3 text-muted-foreground shrink-0 ml-2" />
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-2.5">
            <div
              className="flex size-8 items-center justify-center rounded-xl font-black text-white text-xs shadow-xs"
              style={{ backgroundColor: productConfig.brandColor }}
            >
              {productConfig.brandLogoText}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-foreground leading-tight">
                {productConfig.name}
              </span>
              <span className="text-xs text-muted-foreground hidden sm:inline leading-none font-mono">
                {productConfig.screensCount} Archetypes
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Center: The Three Primary Top Links (All Projects | Dashboard | Documentation) */}
      <div className="flex items-center gap-1.5 bg-muted/60 p-1 rounded-[10px] border border-border">
        <button
          onClick={() => setCurrentView("home")}
          className={`flex items-center gap-2 h-9 min-h-[36px] px-3.5 py-[6px] text-sm font-bold rounded-[8px] transition-all cursor-pointer ${
            currentView === "home"
              ? "bg-background text-foreground shadow-xs font-black"
              : "text-muted-foreground hover:text-foreground"
          }`}
          title="Return to unified projects portal"
        >
          <FolderKanban className="size-4 text-primary" />
          <span>All Projects</span>
        </button>

        <button
          onClick={() => setCurrentView("dashboard")}
          className={`flex items-center gap-2 h-9 min-h-[36px] px-3.5 py-[6px] text-sm font-bold rounded-[8px] transition-all cursor-pointer ${
            currentView === "dashboard"
              ? "bg-background text-foreground shadow-xs font-black"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <LayoutDashboard className="size-4" />
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => setCurrentView("docs")}
          className={`flex items-center gap-2 h-9 min-h-[36px] px-3.5 py-[6px] text-sm font-bold rounded-[8px] transition-all cursor-pointer ${
            currentView === "docs"
              ? "bg-background text-foreground shadow-xs font-black"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <BookOpen className="size-4" />
          <span>Documentation</span>
        </button>
      </div>

      {/* Right: Quick Tools (Search, Figma CTA, Version Badge, Theme Toggle) */}
      <div className="flex items-center gap-2.5">
        {/* Search Bar */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 rounded-[8px] border border-border bg-muted/40 px-3.5 py-[6px] text-sm text-muted-foreground hover:text-foreground hover:border-border/80 transition h-9 min-h-[36px] cursor-pointer"
          title="Open search (⌘K)"
        >
          <Search className="size-4" />
          <span className="hidden md:inline">Search docs...</span>
          <kbd className="hidden sm:inline rounded-[4px] bg-muted px-1.5 py-0.5 text-xs font-mono border border-border/50">
            ⌘K
          </kbd>
        </button>

        {/* Master Figma CTA Link (Dynamic per active product) */}
        <a
          href={productConfig.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-[8px] border border-border bg-muted/40 hover:bg-muted px-3.5 py-[6px] text-sm font-bold text-foreground transition group h-9 min-h-[36px] cursor-pointer"
          title={`Open ${productConfig.name} real master Figma design file in a new tab`}
        >
          <svg className="size-3.5 shrink-0" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
          <span className="hidden md:inline">Figma</span>
          <ExternalLink className="size-3 text-muted-foreground group-hover:text-foreground" />
        </a>

        {/* Dynamic Product Version Badge */}
        <span
          className="hidden lg:inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold min-h-[30px]"
          style={{
            borderColor: `${productConfig.brandColor}40`,
            backgroundColor: `${productConfig.brandColor}15`,
            color: productConfig.brandColor,
          }}
        >
          {productConfig.versionBadge}
        </span>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex size-9 items-center justify-center rounded-[8px] border border-border text-foreground hover:bg-muted transition cursor-pointer"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? (
            <Sun className="size-4 text-amber-400" />
          ) : (
            <Moon className="size-4 text-slate-700" />
          )}
        </button>
      </div>
    </header>
  )
}
