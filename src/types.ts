export interface MetricCardData {
  id: string
  title: string
  value: string
  delta: string
  isPositive: boolean
  benchmark: string
  description: string
  iconName: string
}

export interface TaskTimeMetric {
  task: string
  legacyTime: number
  minimalTime: number
  reductionPercent: number
  domain: string
}

export interface SUSScoreData {
  category: string
  legacyScore: number
  competitorScore: number
  minimalScore: number
}

export interface CognitiveLoadMetric {
  dimension: string
  legacyDemand: number
  minimalDemand: number
  fullMark: number
}

export interface UsabilityFinding {
  id: string
  heuristic: string
  severity: 'Critical' | 'Major' | 'Moderate' | 'Minor'
  issue: string
  evidence: string
  resolution: string
  status: 'Resolved' | 'Validated'
}

export interface DashboardItem {
  id: string
  title: string
  subtitle: string
  domain: string
  description: string
  keyMetrics: { label: string; value: string }[]
  images: {
    light: string
    dark: string
    layout?: string
    mobile: string
  }
  uxRationale: {
    title: string
    frictionPoint: string
    designSolution: string
    craftNuance: string
  }[]
  componentAnatomy: {
    name: string
    type: string
    specs: string
  }[]
  dataVisSpecs: string
  mobileAdaptation: string
}
