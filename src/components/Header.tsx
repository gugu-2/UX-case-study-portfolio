import React from 'react'
import { ExternalLink, Search, Sparkles, Layers, ShieldCheck, Moon, Sun } from 'lucide-react'

interface HeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  isDark: boolean
  setIsDark: (val: boolean) => void
  onOpenSearch: () => void
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isDark,
  setIsDark,
  onOpenSearch,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0b0f17]/90 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00AB55] to-[#007B55] shadow-lg shadow-[#00AB55]/20 ring-1 ring-[#00AB55]/50">
            <Layers className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-base font-bold tracking-tight text-white">
                Minimal UI
              </span>
              <span className="rounded-full bg-[#00AB55]/15 px-2 py-0.5 text-xs font-semibold tracking-wide text-[#00AB55] ring-1 ring-[#00AB55]/30">
                v3.4.0
              </span>
            </div>
            <p className="text-xs text-slate-400">Design System & UX Studio</p>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {[
            { id: 'research', label: 'Research Studio (Dashboard)', icon: Sparkles },
            { id: 'showcase', label: '6 Core Dashboards (UI)', icon: Layers },
            { id: 'architecture', label: 'Architecture & Layouts', icon: ShieldCheck },
            { id: 'tokens', label: 'Design Tokens', icon: Sparkles },
            { id: 'mobile', label: 'Mobile & Ergonomics', icon: Layers },
            { id: 'handoff', label: 'Handoff & DDRs', icon: ExternalLink },
          ].map((item) => {
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#00AB55]/15 text-[#00AB55] ring-1 ring-[#00AB55]/30 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Right Tools & Author Badge */}
        <div className="flex items-center gap-3">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="hidden items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-400 transition hover:border-slate-600 hover:text-slate-200 sm:flex"
          >
            <Search className="h-3.5 w-3.5 text-slate-400" />
            <span>Search docs...</span>
            <kbd className="rounded bg-slate-800 px-1.5 py-0.5 text-xs font-mono text-slate-400">⌘K</kbd>
          </button>

          {/* System Spec Badge */}
          <span className="hidden xl:inline-flex items-center rounded-md border border-border bg-muted/40 px-2 py-1 text-xs font-mono text-muted-foreground">
            Spec Node 0-2913
          </span>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/80 text-slate-300 transition hover:text-white"
            title="Toggle Luminous Theme"
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-300" />}
          </button>

          {/* Author Badge */}
          <div className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/60 py-1 pl-1 pr-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-xs font-bold text-white shadow-sm">
              P
            </div>
            <div className="hidden text-left sm:block">
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-slate-200">Pritam</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#00AB55]" />
              </div>
              <p className="text-xs text-slate-400">14+ Yrs Lead UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

