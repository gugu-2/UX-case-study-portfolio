import React, { useState, useEffect } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { ProjectsPortalView } from "@/components/home/ProjectsPortalView"
import { ResearchDashboardView } from "@/components/dashboard/ResearchDashboardView"
import { DocsViewer } from "@/components/docs/DocsViewer"
import { CommandMenu } from "@/components/CommandMenu"
import { ProductId, productsConfig } from "@/config/products"

export function App() {
  // Initialize product from URL, localStorage, or default to "linear"
    const [currentProduct, setCurrentProduct] = useState<ProductId>(() => {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search)
        const productParam = params.get("product") as ProductId | null
        if (productParam && (productParam === "minimal" || productParam === "linear" || productParam === "miro" || productParam === "mixpanel" || productParam === "frame")) {
          return productParam
        }
        const saved = localStorage.getItem("ux_docs_active_product") as ProductId | null
        if (saved && (saved === "minimal" || saved === "linear" || saved === "miro" || saved === "mixpanel" || saved === "frame")) {
          return saved
        }
      }
      return "linear"
    })

  // Initialize view: "home" (unified portal), "dashboard", or "docs"
  const [currentView, setCurrentView] = useState<"home" | "dashboard" | "docs">(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const viewParam = params.get("view") as "home" | "dashboard" | "docs" | null
      if (viewParam && ["home", "dashboard", "docs"].includes(viewParam)) {
        return viewParam
      }
    }
    return "home" // Land on the unified Home Page with all projects!
  })

  const [activeSection, setActiveSection] = useState<string>("overview")
  const [activeScreenId, setActiveScreenId] = useState<string>(() =>
    currentProduct === "linear" ? "L01" : currentProduct === "miro" ? "M01" : currentProduct === "mixpanel" ? "MX01" : currentProduct === "frame" ? "FR01" : "D01"
  )
  // By default, light theme is active
  const [isDark, setIsDark] = useState<boolean>(false)
  const [commandMenuOpen, setCommandMenuOpen] = useState<boolean>(false)

  // Sync theme with documentElement class 'dark'
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  // Sync URL when product or view changes
  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set("product", currentProduct)
    url.searchParams.set("view", currentView)
    window.history.replaceState({}, "", url.toString())
  }, [currentProduct, currentView])

  // Handle switching product
  const handleSelectProduct = (newProduct: ProductId) => {
    setCurrentProduct(newProduct)
    localStorage.setItem("ux_docs_active_product", newProduct)

    // Reset default screen id
    const defaultScreen = newProduct === "linear" ? "L01" : newProduct === "miro" ? "M01" : newProduct === "mixpanel" ? "MX01" : newProduct === "frame" ? "FR01" : "D01"
    setActiveScreenId(defaultScreen)
    setActiveSection("overview")
  }

  // Update document title dynamically
  useEffect(() => {
    if (currentView === "home") {
      document.title = "UX Documentation & Design Systems — All Projects Studio"
    } else {
      const config = productsConfig[currentProduct] || productsConfig.minimal
      document.title = `${config.name} — UX Documentation & System`
    }
  }, [currentProduct, currentView])

  // Navigate to documentation with specific section and screen
  const handleNavigateToDocs = (sectionId = "overview", screenId?: string) => {
    setCurrentView("docs")
    setActiveSection(sectionId)
    if (screenId) {
      setActiveScreenId(screenId)
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Navigate from dashboard issues table or screen cards directly to screen explainer
  const handleSelectScreen = (screenId: string) => {
    setCurrentView("docs")
    setActiveSection("screens")
    setActiveScreenId(screenId.toUpperCase())
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="bg-background text-foreground min-h-screen transition-colors">
      <SidebarProvider defaultOpen={true}>
        {/* Official Shadcn sidebar-03 Navigation */}
        <AppSidebar
          currentView={currentView}
          setCurrentView={(view) => {
            setCurrentView(view)
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          activeScreenId={activeScreenId}
          setActiveScreenId={setActiveScreenId}
          currentProduct={currentProduct}
          setCurrentProduct={handleSelectProduct}
        />

        <SidebarInset className="min-w-0 bg-background">
          {/* Official Shadcn SiteHeader with All Projects | Dashboard | Docs Switcher */}
          <SiteHeader
            currentView={currentView}
            setCurrentView={(view) => {
              setCurrentView(view)
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            isDark={isDark}
            setIsDark={setIsDark}
            onOpenSearch={() => setCommandMenuOpen(true)}
            currentProduct={currentProduct}
            setCurrentProduct={handleSelectProduct}
          />

          {/* Main View Port */}
          <main className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full">
            {currentView === "home" ? (
              /* PART 0 — UNIFIED HOME PAGE (ALL PROJECTS IN ONE PLACE) */
              <ProjectsPortalView
                onSelectProject={(productId, targetView) => {
                  handleSelectProduct(productId)
                  setCurrentView(targetView)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              />
            ) : currentView === "dashboard" ? (
              /* PART A — RESEARCH DASHBOARD (dashboard-01) */
              <ResearchDashboardView
                onOpenDocs={() => handleNavigateToDocs("overview")}
                onSelectScreen={handleSelectScreen}
                currentProduct={currentProduct}
              />
            ) : (
              /* PART B — MASTER UX DOCUMENTATION (sidebar-03) */
              <DocsViewer
                currentSectionId={activeSection}
                onNavigateSection={(sectionId, screenId) => {
                  setActiveSection(sectionId)
                  if (screenId) setActiveScreenId(screenId)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                activeScreenId={activeScreenId}
                currentProduct={currentProduct}
              />
            )}
          </main>
        </SidebarInset>
      </SidebarProvider>

      {/* Global Command Palette (⌘K) */}
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
        currentProduct={currentProduct}
        onNavigate={(section, screenId) => {
          if (section === "dashboard") {
            setCurrentView("dashboard")
          } else {
            handleNavigateToDocs(section, screenId)
          }
        }}
      />
    </div>
  )
}

export default App
