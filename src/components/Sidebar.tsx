import React, { useState } from 'react'
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Smartphone,
  FileCode2,
  ChevronDown,
  LayoutDashboard,
  BarChart3,
  CreditCard,
  CalendarDays,
  ShoppingBag,
  FolderSync,
  Compass,
  Palette,
  CheckCircle,
} from 'lucide-react'

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  activeDashboardId: string
  setActiveDashboardId: (id: string) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

interface NavGroup {
  title: string
  items: {
    id: string
    label: string
    icon: React.ComponentType<{ className?: string }>
    badge?: string
    badgeColor?: string
    isDashboard?: boolean
    dashboardId?: string
  }[]
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  activeDashboardId,
  setActiveDashboardId,
  isOpen,
  setIsOpen,
}) => {
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({})

  const toggleGroup = (title: string) => {
    setCollapsedGroups((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  const navGroups: NavGroup[] = [
    {
      title: '01. GETTING STARTED',
      items: [
        { id: 'overview', label: 'Executive Vision & Principles', icon: Compass },
      ],
    },
    {
      title: '02. RESEARCH STUDIO (DASHBOARD-01)',
      items: [
        { id: 'research', label: 'Quantitative Telemetry & SUS', icon: BarChart3, badge: '88.6 SUS', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
      ],
    },
    {
      title: '03. THE 6 CORE DASHBOARDS',
      items: [
        { id: 'showcase', label: 'General Analytics', icon: BarChart3, isDashboard: true, dashboardId: 'general-analytics', badge: 'Traffic' },
        { id: 'showcase', label: 'General App', icon: LayoutDashboard, isDashboard: true, dashboardId: 'general-app', badge: 'SaaS' },
        { id: 'showcase', label: 'General Banking', icon: CreditCard, isDashboard: true, dashboardId: 'general-banking', badge: 'FinTech' },
        { id: 'showcase', label: 'General Booking', icon: CalendarDays, isDashboard: true, dashboardId: 'general-booking', badge: 'Hotels' },
        { id: 'showcase', label: 'General E-Commerce', icon: ShoppingBag, isDashboard: true, dashboardId: 'general-ecommerce', badge: 'Retail' },
        { id: 'showcase', label: 'General File Manager', icon: FolderSync, isDashboard: true, dashboardId: 'general-file', badge: 'Cloud' },
      ],
    },
    {
      title: '04. ARCHITECTURE & LAYOUTS',
      items: [
        { id: 'architecture', label: 'Dual Navigation Layouts', icon: Layers, badge: 'Rail vs Top' },
      ],
    },
    {
      title: '05. DESIGN SYSTEM & TOKENS',
      items: [
        { id: 'tokens', label: 'Tokens, Type & 8pt Grid', icon: Palette, badge: 'Atomic' },
      ],
    },
    {
      title: '06. MOBILE UX & ERGONOMICS',
      items: [
        { id: 'mobile', label: 'Thumb Zones & Touch Bounds', icon: Smartphone, badge: '375px' },
      ],
    },
    {
      title: '07. ACCESSIBILITY & GOVERNANCE',
      items: [
        { id: 'accessibility', label: 'WCAG 2.2 AA Contrast & ARIA', icon: ShieldCheck, badge: 'AA Compliant' },
        { id: 'handoff', label: 'Dev Handoff & DDRs', icon: FileCode2, badge: 'Sign-Off' },
      ],
    },
  ]

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-72 border-r border-slate-800/80 bg-[#0d121c] p-4 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        {/* Workspace Context Switcher Header */}
        <div className="mb-4 rounded-xl border border-slate-800/90 bg-slate-900/60 p-3 shadow-inner">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00AB55]/15 text-[#00AB55] ring-1 ring-[#00AB55]/30">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-100">Minimal UI Spec</p>
                <p className="text-xs text-slate-400">Enterprise Edition v3.4</p>
              </div>
            </div>
            <span className="flex h-2 w-2 rounded-full bg-[#00AB55] animate-pulse" />
          </div>
        </div>

        {/* Navigation Groups (sidebar-03 pattern) */}
        <div className="space-y-5">
          {navGroups.map((group) => {
            const isCollapsed = collapsedGroups[group.title]
            return (
              <div key={group.title} className="space-y-1">
                <button
                  onClick={() => toggleGroup(group.title)}
                  className="flex w-full items-center justify-between px-2 py-1 text-xs font-bold tracking-wider text-slate-400 hover:text-slate-200"
                >
                  <span>{group.title}</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      isCollapsed ? '-rotate-90' : 'rotate-0'
                    }`}
                  />
                </button>

                {!isCollapsed && (
                  <div className="space-y-0.5 pt-0.5">
                    {group.items.map((item) => {
                      const Icon = item.icon
                      let isActive = false

                      if (item.isDashboard) {
                        isActive = activeTab === 'showcase' && activeDashboardId === item.dashboardId
                      } else {
                        isActive = activeTab === item.id
                      }

                      return (
                        <button
                          key={item.label}
                          onClick={() => {
                            if (item.isDashboard && item.dashboardId) {
                              setActiveTab('showcase')
                              setActiveDashboardId(item.dashboardId)
                            } else {
                              setActiveTab(item.id)
                            }
                            if (window.innerWidth < 1024) setIsOpen(false)
                          }}
                          className={`group flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium transition-all ${
                            isActive
                              ? 'bg-gradient-to-r from-[#00AB55]/20 to-[#00AB55]/5 text-white ring-1 ring-[#00AB55]/40 shadow-sm'
                              : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <Icon
                              className={`h-4 w-4 shrink-0 transition-colors ${
                                isActive ? 'text-[#00AB55]' : 'text-slate-500 group-hover:text-slate-300'
                              }`}
                            />
                            <span className="truncate">{item.label}</span>
                          </div>

                          {item.badge && (
                            <span
                              className={`ml-1.5 shrink-0 rounded px-1.5 py-0.5 text-xs font-semibold ${
                                item.badgeColor || 'bg-slate-800 text-slate-300'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Lead Designer Footer Card */}
        <div className="mt-8 rounded-xl border border-slate-800/90 bg-gradient-to-b from-slate-900/80 to-slate-950 p-3.5">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 font-bold text-white shadow-md">
                P
              </div>
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#00AB55] ring-2 ring-[#0d121c]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-200">Pritam</p>
              <p className="text-xs text-slate-400">Principal UI/UX Architect</p>
            </div>
          </div>
          <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
            "Designed to resolve high data density without visual exhaustion. Built on 14+ years of enterprise design leadership."
          </p>
          <div className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-[#00AB55]">
            <CheckCircle className="h-3 w-3" />
            <span>Verified System Creator</span>
          </div>
        </div>
      </aside>
    </>
  )
}
