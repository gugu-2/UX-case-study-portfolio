import { MetricCardData, TaskTimeMetric, SUSScoreData, CognitiveLoadMetric, UsabilityFinding } from '../types'

export const executiveKpiCards: MetricCardData[] = [
  {
    id: 'kpi-sus',
    title: 'System Usability Scale (SUS)',
    value: '88.6',
    delta: '+36.2 pt',
    isPositive: true,
    benchmark: 'Industry Top 5% (Grade A+)',
    description: 'Calculated across 148 enterprise practitioners post-interaction protocol. 94% higher than legacy enterprise baseline.',
    iconName: 'Award',
  },
  {
    id: 'kpi-time',
    title: 'Mean Time-On-Task',
    value: '6.4s',
    delta: '-72.4%',
    isPositive: true,
    benchmark: 'Legacy baseline: 23.2s',
    description: 'Average task execution duration across high-frequency actions (wires, filters, triage, file sharing).',
    iconName: 'Clock',
  },
  {
    id: 'kpi-error',
    title: 'Task Input Error Rate',
    value: '1.8%',
    delta: '-81.2%',
    isPositive: true,
    benchmark: 'Legacy baseline: 9.6%',
    description: 'Form submission validation failures and misclicks reduced drastically via 48px touch bounding and inline guards.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'kpi-success',
    title: 'First-Attempt Success Rate',
    value: '98.4%',
    delta: '+24.1%',
    isPositive: true,
    benchmark: 'Legacy baseline: 74.3%',
    description: 'Unassisted primary goal completion across 480 recorded usability task sessions.',
    iconName: 'CheckCircle2',
  },
]

export const taskTimeData: TaskTimeMetric[] = [
  {
    task: 'Banking Quick Transfer',
    legacyTime: 48.2,
    minimalTime: 6.4,
    reductionPercent: 86.7,
    domain: 'FinTech',
  },
  {
    task: 'Booking Review Moderation',
    legacyTime: 22.5,
    minimalTime: 4.1,
    reductionPercent: 81.8,
    domain: 'Hospitality',
  },
  {
    task: 'Analytics Multi-Cohort Filter',
    legacyTime: 31.8,
    minimalTime: 9.2,
    reductionPercent: 71.1,
    domain: 'Analytics',
  },
  {
    task: 'Cross-Cloud Asset Sharing',
    legacyTime: 41.0,
    minimalTime: 11.5,
    reductionPercent: 72.0,
    domain: 'File Ops',
  },
  {
    task: 'E-Com Inventory Lookup',
    legacyTime: 28.4,
    minimalTime: 7.8,
    reductionPercent: 72.5,
    domain: 'E-Commerce',
  },
  {
    task: 'SaaS Telemetry Bug Triage',
    legacyTime: 35.6,
    minimalTime: 10.2,
    reductionPercent: 71.3,
    domain: 'Operations',
  },
]

export const susBenchmarkData: SUSScoreData[] = [
  { category: 'Navigation Clarity', legacyScore: 48, competitorScore: 68, minimalScore: 92 },
  { category: 'Data Scannability', legacyScore: 54, competitorScore: 72, minimalScore: 95 },
  { category: 'Error Recovery', legacyScore: 42, competitorScore: 64, minimalScore: 88 },
  { category: 'Mobile Ergonomics', legacyScore: 38, competitorScore: 59, minimalScore: 89 },
  { category: 'Visual Serenity', legacyScore: 45, competitorScore: 66, minimalScore: 94 },
  { category: 'Overall SUS Score', legacyScore: 52, competitorScore: 71, minimalScore: 89 },
]

export const cognitiveLoadData: CognitiveLoadMetric[] = [
  { dimension: 'Mental Demand', legacyDemand: 78, minimalDemand: 26, fullMark: 100 },
  { dimension: 'Temporal Demand', legacyDemand: 72, minimalDemand: 29, fullMark: 100 },
  { dimension: 'Effort Required', legacyDemand: 81, minimalDemand: 28, fullMark: 100 },
  { dimension: 'Frustration Level', legacyDemand: 69, minimalDemand: 16, fullMark: 100 },
  { dimension: 'Physical Demand', legacyDemand: 45, minimalDemand: 18, fullMark: 100 },
  { dimension: 'Perceived Performance', legacyDemand: 52, minimalDemand: 91, fullMark: 100 },
]

export const cohortDemographics = [
  { segment: 'SaaS Ops & Engineering Leads', count: 48, percentage: 32.4, primaryDevice: '1440px Laptop + 4K Display' },
  { segment: 'FinTech Accountants & Controllers', count: 38, percentage: 25.7, primaryDevice: 'Dual 24" Displays' },
  { segment: 'E-Commerce Merchandisers', count: 34, percentage: 23.0, primaryDevice: '13" MacBook + Mobile PWA' },
  { segment: 'Hospitality & Asset Operators', count: 28, percentage: 18.9, primaryDevice: 'Tablet (iPad Pro) + Android' },
]

export const usabilityFindings: UsabilityFinding[] = [
  {
    id: 'UF-01',
    heuristic: 'Flexibility & Efficiency of Use (Nielsen #7)',
    severity: 'Critical',
    issue: 'Legacy fixed 280px sidebars crushed horizontal data tables on 1366px–1440px displays, forcing tedious horizontal scrolling.',
    evidence: '78% of users observed dragging horizontal scrollbars repeatedly during daily invoice reconciling.',
    resolution: 'Engineered a Bimodal Layout engine allowing instantaneous toggling between a 280px left rail and a dense Horizontal TopNav for 100% canvas expansion.',
    status: 'Validated',
  },
  {
    id: 'UF-02',
    heuristic: 'Recognition Rather Than Recall (Nielsen #6)',
    severity: 'Major',
    issue: 'Disbursing wire transfers required users to memorize recipient banking identifiers and account numbers across modal steps.',
    evidence: 'Users made an average of 2.4 copy-paste errors per 10 transactions in legacy testing.',
    resolution: 'Created the Quick Transfer carousel featuring one-click recent contact avatars, live balance deductions, and an interactive numeric slider.',
    status: 'Validated',
  },
  {
    id: 'UF-03',
    heuristic: 'Aesthetic & Minimalist Design (Nielsen #8)',
    severity: 'Major',
    issue: 'Legacy dark modes inverted pure white to pure black (#000000), causing severe ocular glare and chromatic aberration around bright text.',
    evidence: '84% of operators reported eye fatigue within 45 minutes of evening operations.',
    resolution: 'Designed the Luminous Slate Dark Mode using layered obsidian and slate surfaces (#161C24 canvas, #212B36 elevated cards) with soft 12% borders.',
    status: 'Validated',
  },
  {
    id: 'UF-04',
    heuristic: 'Consistency & Standards (Nielsen #4)',
    severity: 'Moderate',
    issue: 'Different dashboard domains used varying button shapes, status pill colors, and spacing cadences.',
    evidence: 'Contextual inquiry noted 1.8s hesitation whenever switching between Banking and Booking modules.',
    resolution: 'Established an immutable 8pt spatial token cadence, standardized semantic badge colors (Paid, In Progress, Draft, Failed), and uniform 16px card radii.',
    status: 'Validated',
  },
  {
    id: 'UF-05',
    heuristic: 'Error Prevention (Nielsen #5)',
    severity: 'Minor',
    issue: 'Accidental check-in date collisions in reservation logs due to ambiguous date picker formats.',
    evidence: 'Front desk agents misread 12/10 as Oct 12 instead of Dec 10.',
    resolution: 'Enforced unambiguous ISO-standard typographic date strings (e.g. "08 Apr 2022") with localized semantic date formatting.',
    status: 'Validated',
  },
]
