import React, { useState } from 'react'
import {
  Award,
  Clock,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Users,
  Activity,
  Filter,
} from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
} from 'recharts'
import {
  executiveKpiCards,
  taskTimeData,
  susBenchmarkData,
  cognitiveLoadData,
  cohortDemographics,
  usabilityFindings,
} from '../data/researchData'

export const ResearchDashboard: React.FC = () => {
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All')

  const filteredFindings =
    selectedSeverity === 'All'
      ? usabilityFindings
      : usabilityFindings.filter((item) => item.severity === selectedSeverity)

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-[#0e1626] to-[#0a1f18] p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 ">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <Activity className="h-3.5 w-3.5" />
            <span>Research Studio & Quantitative Telemetry (dashboard-01 Architecture)</span>
          </div>
          <h5 className="figma-h5 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold tracking-tight text-white mt-3">
            Enterprise Human Insight & Performance Benchmark
          </h5>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Rigorous quantitative findings and user experience telemetry recorded across 148 enterprise practitioners
            operating in high-velocity FinTech, E-Commerce, and SaaS environments over a 12-week operational cycle.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Users className="h-4 w-4 text-[#00AB55]" />
              <strong>148</strong> Enterprise Participants
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="h-4 w-4 text-cyan-400" />
              <strong>480</strong> Recorded Usability Sessions
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span className="flex items-center gap-1.5 text-slate-300">
              <Award className="h-4 w-4 text-amber-400" />
              <strong>88.6</strong> Industry Benchmark SUS (Grade A+)
            </span>
          </div>
        </div>
      </div>

      {/* Row 1: 4 Executive KPI Cards (dashboard-01 metric cards) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {executiveKpiCards.map((kpi) => {
          return (
            <div
              key={kpi.id}
              className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-sm transition hover:border-slate-700 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">{kpi.title}</span>
                <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                  <TrendingUp className="h-3 w-3" />
                  {kpi.delta}
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-heading text-3xl font-extrabold tracking-tight text-white">
                  {kpi.value}
                </span>
                <span className="text-xs text-slate-400">{kpi.benchmark}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-2">
                {kpi.description}
              </p>
              {/* Subtle emerald bottom glow */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[#00AB55]/50 to-transparent" />
            </div>
          )
        })}
      </div>

      {/* Row 2: Charts Grid (Time-on-Task Delta & SUS Benchmark Comparison) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Chart: Time on Task Delta (7 cols) */}
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-sm lg:col-span-7">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-heading text-base font-bold text-white">
                Task Execution Duration: Legacy vs. Minimal UI
              </h3>
              <p className="text-xs text-slate-400">
                Mean time in seconds across high-frequency actions (Lower is better). Average reduction: 72.4%.
              </p>
            </div>
            <span className="self-start rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs font-semibold text-cyan-400 sm:self-auto">
              -72.4% Avg Speedup
            </span>
          </div>

          <div className="mt-6 h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={taskTimeData}
                margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis
                  dataKey="task"
                  stroke="#64748b"
                  fontSize={11}
                  tickLine={false}
                  angle={-15}
                  textAnchor="end"
                  interval={0}
                />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} unit="s" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                  formatter={(val: any) => [`${val} seconds`, '']}
                />
                <Legend
                  wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                  iconType="circle"
                />
                <Bar
                  dataKey="legacyTime"
                  name="Legacy Enterprise Baseline"
                  fill="#475569"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="minimalTime"
                  name="Minimal UI System"
                  fill="#00AB55"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Chart: SUS Usability Comparison Area Chart (5 cols) */}
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-sm lg:col-span-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading text-base font-bold text-white">
                Usability Dimension Scores
              </h3>
              <p className="text-xs text-slate-400">
                Normalized SUS sub-metrics across 6 evaluation vectors (0-100).
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
              Top 5% Grade A+
            </span>
          </div>

          <div className="mt-6 h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={susBenchmarkData}
                margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis
                  dataKey="category"
                  stroke="#64748b"
                  fontSize={10}
                  tickLine={false}
                  angle={-20}
                  textAnchor="end"
                  interval={0}
                />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Legend
                  wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                  iconType="circle"
                />
                <Area
                  type="monotone"
                  dataKey="minimalScore"
                  name="Minimal UI"
                  stroke="#00AB55"
                  fill="#00AB55"
                  fillOpacity={0.25}
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="competitorScore"
                  name="Competitor Avg"
                  stroke="#0284c7"
                  fill="#0284c7"
                  fillOpacity={0.1}
                  strokeWidth={1.5}
                />
                <Area
                  type="monotone"
                  dataKey="legacyScore"
                  name="Legacy Systems"
                  stroke="#64748b"
                  fill="#64748b"
                  fillOpacity={0.05}
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Row 3: NASA-TLX Cognitive Load & Enterprise Cohort Distribution */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: NASA-TLX Radar (6 cols) */}
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-sm lg:col-span-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading text-base font-bold text-white">
                NASA-TLX Cognitive Load Assessment
              </h3>
              <p className="text-xs text-slate-400">
                Mental Demand, Frustration, and Effort comparison (Lower is superior).
              </p>
            </div>
            <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-400">
              -64% Mental Strain
            </span>
          </div>

          <div className="mt-4 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={cognitiveLoadData} outerRadius="75%">
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="dimension" stroke="#94a3b8" fontSize={11} />
                <PolarRadiusAxis stroke="#475569" angle={30} domain={[0, 100]} />
                <Radar
                  name="Legacy Baseline Demand"
                  dataKey="legacyDemand"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.2}
                />
                <Radar
                  name="Minimal UI Demand"
                  dataKey="minimalDemand"
                  stroke="#00AB55"
                  fill="#00AB55"
                  fillOpacity={0.35}
                />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Cohort Demographics & Primary Workstation breakdown (6 cols) */}
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-sm lg:col-span-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading text-base font-bold text-white">
                Participant Demographic Matrix
              </h3>
              <p className="text-xs text-slate-400">
                148 Enterprise practitioners grouped by operational domain and hardware setup.
              </p>
            </div>
            <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
              N=148
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {cohortDemographics.map((cohort) => (
              <div
                key={cohort.segment}
                className="rounded-lg border border-slate-800 bg-slate-950/60 p-3"
              >
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-200">{cohort.segment}</span>
                  <span className="text-[#00AB55]">{cohort.count} users ({cohort.percentage}%)</span>
                </div>
                {/* Visual Progress Bar */}
                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#00AB55] to-emerald-400"
                    style={{ width: `${cohort.percentage}%` }}
                  />
                </div>
                <p className="mt-1.5 text-xs text-slate-400">
                  Primary hardware profile: <span className="text-slate-300 font-mono">{cohort.primaryDevice}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 4: Interactive Usability Heuristic Findings Table */}
      <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-sm">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-heading text-base font-bold text-white">
              Heuristic Usability Violations & Architectural Resolutions
            </h3>
            <p className="text-xs text-slate-400">
              Empirical usability defects identified during contextual inquiry and the verified system design resolutions.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5">
            <Filter className="h-3.5 w-3.5 text-slate-400 mr-1" />
            {['All', 'Critical', 'Major', 'Moderate'].map((severity) => (
              <button
                key={severity}
                onClick={() => setSelectedSeverity(severity)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                  selectedSeverity === severity
                    ? 'bg-[#00AB55] text-white shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {severity}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-950/60 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <tr>
                <th className="py-3 px-3">ID / Heuristic</th>
                <th className="py-3 px-3">Severity</th>
                <th className="py-3 px-3">Observed Friction & Evidence</th>
                <th className="py-3 px-3">Minimal UI Resolution</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredFindings.map((finding) => (
                <tr key={finding.id} className="hover:bg-slate-800/30 transition">
                  <td className="py-3 px-3 whitespace-nowrap font-medium text-white">
                    <span className="font-mono text-emerald-400 mr-1.5">{finding.id}</span>
                    <span className="text-xs text-slate-400 block">{finding.heuristic}</span>
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-bold ${
                        finding.severity === 'Critical'
                          ? 'bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30'
                          : finding.severity === 'Major'
                          ? 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30'
                          : 'bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30'
                      }`}
                    >
                      {finding.severity}
                    </span>
                  </td>
                  <td className="py-3 px-3 max-w-sm">
                    <p className="font-medium text-slate-200">{finding.issue}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{finding.evidence}</p>
                  </td>
                  <td className="py-3 px-3 max-w-sm text-slate-200 leading-relaxed">
                    {finding.resolution}
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {finding.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}



