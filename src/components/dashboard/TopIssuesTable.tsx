import React, { useState } from "react"
import { FindingItem } from "@/lib/data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowUpDown,
  Search,
  Filter,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react"

interface TopIssuesTableProps {
  findings: FindingItem[]
  onSelectScreen?: (screenId: string) => void
}

export function TopIssuesTable({ findings, onSelectScreen }: TopIssuesTableProps) {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [severityFilter, setSeverityFilter] = useState<string>("All")
  const [statusFilter, setStatusFilter] = useState<string>("All")
  const [sortField, setSortField] = useState<"id" | "severity">("id")
  const [sortAsc, setSortAsc] = useState<boolean>(true)

  const severityWeight: Record<string, number> = {
    Critical: 4,
    High: 3,
    Medium: 2,
    Low: 1,
  }

  const filtered = findings.filter((f) => {
    const matchesSearch =
      f.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.recommendation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSeverity =
      severityFilter === "All" || f.severity === severityFilter
    const matchesStatus =
      statusFilter === "All" || f.status === statusFilter
    return matchesSearch && matchesSeverity && matchesStatus
  })

  filtered.sort((a, b) => {
    if (sortField === "severity") {
      const diff = (severityWeight[a.severity] || 0) - (severityWeight[b.severity] || 0)
      return sortAsc ? diff : -diff
    } else {
      return sortAsc ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id)
    }
  })

  return (
    <Card className="border-border bg-card shadow-xs">
      <CardHeader className="p-4 pb-2 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <CardTitle className="text-sm font-bold text-foreground">
              Top Usability & Design QA Issues
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">
              Logged friction points, severity ratings, design resolutions, and screen linkages.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-mono">
              Showing {filtered.length} of {findings.length} issues
            </span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
            <Input
              placeholder="Search findings, recommendations, or issue IDs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 h-8 text-xs"
            />
          </div>

          {/* Severity Filter */}
          <div className="flex items-center gap-1 bg-muted/60 p-0.5 rounded-lg border border-border">
            {["All", "Critical", "High", "Medium", "Low"].map((sev) => (
              <button
                key={sev}
                onClick={() => setSeverityFilter(sev)}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  severityFilter === sev
                    ? "bg-background text-foreground shadow-xs font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {sev}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1 bg-muted/60 p-0.5 rounded-lg border border-border">
            {["All", "Fixed", "Open"].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  statusFilter === st
                    ? "bg-background text-foreground shadow-xs font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <div className="rounded-lg border border-border overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted/80 text-muted-foreground uppercase font-semibold text-xs border-b border-border">
              <tr>
                <th
                  className="p-3 cursor-pointer hover:text-foreground"
                  onClick={() => {
                    setSortField("id")
                    setSortAsc(!sortAsc)
                  }}
                >
                  <div className="flex items-center gap-1">
                    <span>ID</span>
                    <ArrowUpDown className="size-3" />
                  </div>
                </th>
                <th className="p-3">Issue Title</th>
                <th className="p-3">Target Screen</th>
                <th
                  className="p-3 cursor-pointer hover:text-foreground"
                  onClick={() => {
                    setSortField("severity")
                    setSortAsc(!sortAsc)
                  }}
                >
                  <div className="flex items-center gap-1">
                    <span>Severity</span>
                    <ArrowUpDown className="size-3" />
                  </div>
                </th>
                <th className="p-3">Status</th>
                <th className="p-3">Resolution & Recommendation</th>
                <th className="p-3">Owner</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((finding) => {
                const sevBadge = {
                  Critical: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30",
                  High: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
                  Medium: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
                  Low: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30",
                }[finding.severity]

                return (
                  <tr
                    key={finding.id}
                    onClick={() => onSelectScreen && onSelectScreen(finding.screen)}
                    className="hover:bg-muted/40 transition-colors cursor-pointer group"
                  >
                    <td className="p-3 font-mono font-bold text-primary">{finding.id}</td>
                    <td className="p-3 font-semibold text-foreground max-w-xs">{finding.title}</td>
                    <td className="p-3">
                      <span className="px-3 py-1.5 rounded-lg bg-muted text-xs font-mono font-bold text-foreground border border-border">
                        {finding.screen}
                      </span>
                    </td>
                    <td className="p-3">
                      <Badge variant="outline" className={`text-[13px] font-semibold ${sevBadge}`}>
                        {finding.severity}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-flex items-center text-xs font-semibold ${
                          finding.status === "Fixed"
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        {finding.status === "Fixed" ? (
                          <CheckCircle2 className="size-3 mr-1 text-emerald-500" />
                        ) : (
                          <Clock className="size-3 mr-1 text-amber-500" />
                        )}
                        {finding.status}
                      </span>
                    </td>
                    <td className="p-3 text-muted-foreground text-xs max-w-sm">
                      {finding.recommendation}
                    </td>
                    <td className="p-3 font-medium text-foreground">{finding.owner}</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          if (onSelectScreen) onSelectScreen(finding.screen)
                        }}
                        className="text-muted-foreground group-hover:text-primary transition-colors p-1"
                        title="View Screen Annotations"
                      >
                        <ArrowUpRight className="size-4" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
