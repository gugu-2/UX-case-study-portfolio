import { z } from "zod"
import rawResearchData from "@/data/research.json"
import rawLinearResearchData from "@/data/linearResearch.json"
import rawMiroResearchData from "@/data/miroResearch.json"
import rawMixpanelResearchData from "@/data/mixpanelResearch.json"
import rawFrameResearchData from "@/data/frameResearch.json"

export const KpiSchema = z.object({
  key: z.string(),
  label: z.string(),
  value: z.number(),
  unit: z.string().optional(),
  baseline: z.number().optional(),
  target: z.number().optional(),
  higherIsBetter: z.boolean().optional(),
  source: z.string(),
  total: z.number().optional(),
})

export const IterationSchema = z.object({
  version: z.string(),
  sus: z.number(),
  taskSuccess: z.number(),
  errorRate: z.number(),
})

export const TaskSchema = z.object({
  task: z.string(),
  success: z.number(),
  target: z.number(),
})

export const FunnelStepSchema = z.object({
  step: z.string(),
  users: z.number(),
})

export const JourneyPointSchema = z.object({
  stage: z.string(),
  emotion: z.number(),
  notes: z.string().optional(),
})

export const OpportunitySchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.number(),
  effort: z.number(),
  category: z.string(),
})

export const HealthAreaSchema = z.object({
  area: z.string(),
  score: z.number(),
})

export const ParticipantGroupSchema = z.object({
  byMethod: z.array(z.object({ method: z.string(), n: z.number() })),
  bySegment: z.array(z.object({ segment: z.string(), n: z.number() })),
})

export const FindingSchema = z.object({
  id: z.string(),
  title: z.string(),
  screen: z.string(),
  severity: z.enum(["Critical", "High", "Medium", "Low"]),
  status: z.enum(["Fixed", "In progress", "Open"]),
  recommendation: z.string(),
  owner: z.string(),
})

export const BeforeAfterSchema = z.object({
  screen: z.string(),
  metric: z.string(),
  before: z.number(),
  after: z.number(),
  unit: z.string(),
  notes: z.string().optional(),
})

export const ResearchDataSchema = z.object({
  meta: z.object({
    product: z.string(),
    version: z.string(),
    creator: z.string().optional(),
    updated: z.string(),
    status: z.string().optional(),
  }),
  kpis: z.array(KpiSchema),
  snapshots: z.record(z.string(), z.any()).optional(),
  iterations: z.array(IterationSchema),
  tasks: z.array(TaskSchema),
  funnel: z.array(FunnelStepSchema),
  journey: z.array(JourneyPointSchema),
  opportunities: z.array(OpportunitySchema),
  health: z.array(HealthAreaSchema),
  participants: ParticipantGroupSchema,
  findings: z.array(FindingSchema),
  beforeAfter: z.array(BeforeAfterSchema),
})

export type ResearchData = z.infer<typeof ResearchDataSchema>
export type KpiItem = z.infer<typeof KpiSchema>
export type FindingItem = z.infer<typeof FindingSchema>

export function validateResearchData(data: unknown): ResearchData {
  return ResearchDataSchema.parse(data)
}

export const minimalResearchData: ResearchData = validateResearchData(rawResearchData)
export const linearResearchData: ResearchData = validateResearchData(rawLinearResearchData)
export const miroResearchData: ResearchData = validateResearchData(rawMiroResearchData)
export const mixpanelResearchData: ResearchData = validateResearchData(rawMixpanelResearchData)
export const frameResearchData: ResearchData = validateResearchData(rawFrameResearchData)
export const researchData: ResearchData = minimalResearchData

export function getResearchData(productId: string): ResearchData {
  if (productId === "linear") {
    return linearResearchData
  }
  if (productId === "miro") {
    return miroResearchData
  }
  if (productId === "mixpanel") {
    return mixpanelResearchData
  }
  if (productId === "frame") {
    return frameResearchData
  }
  return minimalResearchData
}

/**
 * Status calculation:
 * Good = meets target
 * Warn = within 10% of target
 * Bad = worse
 */
export function getKpiStatus(
  value: number,
  target?: number,
  higherIsBetter = true
): "good" | "warn" | "bad" | "neutral" {
  if (target === undefined) return "neutral"
  if (higherIsBetter) {
    if (value >= target) return "good"
    if (value >= target * 0.9) return "warn"
    return "bad"
  } else {
    if (value <= target) return "good"
    if (value <= target * 1.1) return "warn"
    return "bad"
  }
}

/**
 * Formats % change relative to baseline
 */
export function calculateChange(
  value: number,
  baseline?: number,
  higherIsBetter = true
): { percent: number; isPositive: boolean; formatted: string } | null {
  if (baseline === undefined || baseline === 0) return null
  const diff = value - baseline
  const percent = Math.round((Math.abs(diff) / baseline) * 100)
  const isPositive = higherIsBetter ? diff >= 0 : diff <= 0
  const symbol = diff >= 0 ? "▲" : "▼"
  return {
    percent,
    isPositive,
    formatted: `${symbol} ${percent}%`,
  }
}

/**
 * Aggregates findings by severity & status
 */
export function getSeverityCounts(findings: FindingItem[]) {
  const counts: Record<string, { total: number; fixed: number; open: number }> = {
    Critical: { total: 0, fixed: 0, open: 0 },
    High: { total: 0, fixed: 0, open: 0 },
    Medium: { total: 0, fixed: 0, open: 0 },
    Low: { total: 0, fixed: 0, open: 0 },
  }

  findings.forEach((f) => {
    if (counts[f.severity]) {
      counts[f.severity].total += 1
      if (f.status === "Fixed") {
        counts[f.severity].fixed += 1
      } else {
        counts[f.severity].open += 1
      }
    }
  })

  return counts
}

/**
 * Automatically generates the summary sentence mandated by the AI Build Guide
 */
export function generateSummarySentence(data: ResearchData): string {
  const taskSuccessKpi = data.kpis.find((k) => k.key === "taskSuccess")
  const issuesKpi = data.kpis.find((k) => k.key === "issuesFixed")

  const taskSuccess = taskSuccessKpi?.value ?? 82
  const targetSuccess = taskSuccessKpi?.target ?? 85
  const fixedCount = issuesKpi?.value ?? 18
  const totalCount = issuesKpi?.total ?? 24

  return `Task success rate is ${taskSuccess}% (target: ${targetSuccess}%). ${fixedCount} of ${totalCount} identified usability issues successfully resolved.`
}
