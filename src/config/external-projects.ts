export interface ExternalProject {
  id: string
  title: string
  subtitle: string
  category: string
  description: string
  url: string
  badge: string
  brandColor: string
  previewImage: string
  highlights: string[]
}

export const externalProjects: ExternalProject[] = [
  {
    id: "edgetrade",
    title: "EdgeTrade",
    subtitle: "Algorithmic Trading & Financial Terminal",
    category: "Fintech & High-Frequency Markets",
    description: "High-frequency trade execution, order book depth charts, latency benchmarks, and institutional portfolio risk telemetry.",
    url: "https://edgetrade-ux.agarthan.space/",
    badge: "Live Terminal",
    brandColor: "#10B981",
    previewImage: "/thumbnails/edgetrade.avif",
    highlights: [
      "Sub-millisecond Order Execution Topology",
      "Dynamic Depth Chart & Level-2 Market Visualizer",
      "Margin, Leverage & Liquidation Risk Controls",
      "Multi-Asset Hedging Architecture & Audits",
    ],
  },
  // Note: "Gene" is hidden as requested
  {
    id: "soar",
    title: "Soar",
    subtitle: "Creative Mobile App for FIN Banking & Crypto",
    category: "Fintech, Mobile Banking & Crypto",
    description: "Creative personal finance and digital banking mobile application integrating traditional fiat accounts with cryptocurrency portfolios. Designed for frictionless wealth management, instant P2P payments, and interactive financial telemetry.",
    url: "https://soar.agarthan.space/",
    badge: "Live Mobile UX",
    brandColor: "#8B5CF6",
    previewImage: "/thumbnails/soar.avif",
    highlights: [
      "Creative Interface for Modern FIN Banking & Crypto",
      "Unified Multi-Currency Fiat & Digital Asset Portfolios",
      "Instant P2P Transfers & Frictionless Payment Flows",
      "Real-Time Crypto Telemetry & Interactive Asset Tickers",
    ],
  },
  {
    id: "fitness-ux-writing",
    title: "Fitness App UX Writing",
    subtitle: "Mobile Health UX Writing & Case Study",
    category: "Consumer Health & Behavior Design",
    description: "Comprehensive behavioral UX writing, tone-of-voice frameworks, habit-loop microcopy, and onboarding conversion case study on Behance.",
    url: "https://www.behance.net/gallery/176002683/Fitness-App-UX-Writing",
    badge: "Behance Master Case",
    brandColor: "#F97316",
    previewImage: "/thumbnails/fitness-app.jpeg",
    highlights: [
      "Habit Loop & Behavioral Microcopy Guidelines",
      "Tone of Voice Matrix across User Emotional States",
      "Onboarding Funnel Copy & Friction Reduction",
      "Push Notification Retention Engine Copy",
    ],
  },
]
