export type ProductId =
  | "minimal"
  | "linear"
  | "miro"
  | "mixpanel"
  | "frame"
  | "qolaba"
  | "brilliant"
  | "monday"
  | "copyai"
  | "github"
  | "officevibe"

export interface ProductConfig {
  id: ProductId
  name: string
  shortName: string
  subtitle: string
  tagline: string
  versionBadge: string
  figmaUrl: string
  liveUrl?: string
  brandColor: string
  brandHoverColor: string
  brandLogoText: string
  logoUrl?: string
  screensCount: number
  primaryEntity: string
  description: string
}

export const productsConfig: Record<ProductId, ProductConfig> = {
  minimal: {
    id: "minimal",
    name: "Minimal UI System",
    shortName: "Minimal",
    subtitle: "2021 Foundation Spec",
    tagline: "Client and Admin Dashboard UX Architecture",
    versionBadge: "2021 First Release",
    figmaUrl: "https://www.figma.com/design/fL8YGLfjPlERWUkTH8nw5f/Web-r?node-id=0-1&t=BTJyRgvy69NK0EJw-1",
    brandColor: "#00AB55",
    brandHoverColor: "#007B55",
    brandLogoText: "M",
    logoUrl: "/logos/minimal.svg",
    screensCount: 6,
    primaryEntity: "Dashboard Archetypes",
    description: "Multi-archetype SaaS administration dashboard system with dual navigation rail, OKLCH token engine, and rigorous front-end contracts."
  },
  linear: {
    id: "linear",
    name: "Linear",
    shortName: "Linear App",
    subtitle: "The System for Product Development",
    tagline: "High-Velocity Issue Tracking & Product Operations",
    versionBadge: "Production Spec",
    figmaUrl: "https://www.figma.com/design/KbEEvOwGnxSPis5uzH5Fq0/Linear-UI?node-id=2202-2",
    liveUrl: "https://linear.app/",
    brandColor: "#5E6AD2",
    brandHoverColor: "#4752B3",
    brandLogoText: "L",
    logoUrl: "/logos/linear.svg",
    screensCount: 14,
    primaryEntity: "Product Workflows",
    description: "The purpose-built product management and issue tracking system engineered for high-velocity software teams with sub-50ms keyboard ergonomics."
  },
  miro: {
    id: "miro",
    name: "Miro",
    shortName: "Miro App",
    subtitle: "The Visual Workspace for Innovation",
    tagline: "Collaborative Whiteboarding & Diagramming",
    versionBadge: "2020 Architecture Spec",
    figmaUrl: "https://www.figma.com/design/WjnNoSSAZWFzAkxupduRlo/Miro-UI-myui?node-id=3312-2",
    brandColor: "#FFD02F",
    brandHoverColor: "#E5B925",
    brandLogoText: "M",
    logoUrl: "/logos/miro.png",
    screensCount: 7,
    primaryEntity: "Whiteboard Canvases",
    description: "Enterprise-grade visual collaboration workspace with infinite canvas rendering, real-time multiplayer cursor synchronization, and node-based diagramming architecture."
  },
  mixpanel: {
    id: "mixpanel",
    name: "Mixpanel",
    shortName: "Mixpanel App",
    subtitle: "Product Intelligence Platform",
    tagline: "Event Analytics & Data Exploration",
    versionBadge: "2021 Architecture Spec",
    figmaUrl: "https://mixpanel.com/home/",
    liveUrl: "https://mixpanel.com/",
    brandColor: "#7856FF",
    brandHoverColor: "#613CE6",
    brandLogoText: "MP",
    logoUrl: "/logos/mixpanel.svg",
    screensCount: 13,
    primaryEntity: "Analytics Dashboards",
    description: "Advanced product intelligence platform transforming complex SQL data sets into self-serve visual workflows, enabling intuitive user path exploration and funnel segmentation."
  },
  frame: {
    id: "frame",
    name: "Frame",
    shortName: "Frame.so",
    subtitle: "Smart & Connected Team Workspace",
    tagline: "Unifying Apps, Notes, and Tasks",
    versionBadge: "Production Spec",
    figmaUrl: "https://www.frame.so/",
    liveUrl: "https://www.frame.so/",
    brandColor: "#000000",
    brandHoverColor: "#333333",
    brandLogoText: "F",
    logoUrl: "/logos/frame.png",
    screensCount: 10,
    primaryEntity: "Workspaces",
    description: "A connected OS for modern teams that unifies documentation, project management, and whiteboarding into one seamless interface to reduce context switching."
  },
  qolaba: {
    id: "qolaba",
    name: "Qolaba AI",
    shortName: "Qolaba",
    subtitle: "Multimodal Generative AI Studio",
    tagline: "Spatial AI Generation, Inpainting & Diffusion Studio",
    versionBadge: "2023 GenAI Spec",
    figmaUrl: "https://www.figma.com/design/TwXTBJhwGg3Pi3YzH1sLsp/Qolaba---AI-App--dark-theme?node-id=7-45267",
    brandColor: "#3045C9",
    brandHoverColor: "#22329A",
    brandLogoText: "Q",
    screensCount: 14,
    primaryEntity: "AI Generation Canvases",
    description: "Enterprise multimodal generative AI creation studio engineered by Pritam in 2023. Eliminates prompt fatigue and black-box waiting through progressive latent previews, 100% token-symmetric obsidian dark mode, and surgical inpainting masks."
  },
  brilliant: {
    id: "brilliant",
    name: "Brilliant.org",
    shortName: "Brilliant",
    subtitle: "Interactive STEM Learning Platform",
    tagline: "Active Problem Solving & Intuition-First Pedagogy",
    versionBadge: "Oct 2022 Architecture",
    figmaUrl: "https://www.figma.com/design/NzeSyhIAKyx7DSOEBrmG6l/Pritam-s-Portfolio-List?node-id=1146-17675",
    liveUrl: "https://brilliant.org/",
    brandColor: "#04A777",
    brandHoverColor: "#03825C",
    brandLogoText: "B",
    screensCount: 19,
    primaryEntity: "Interactive STEM Lessons",
    description: "Pedagogical master architecture architected by Pritam in Oct 2022. Transforms passive STEM video lectures into interactive guided simulations, daily habit formation loops, and micro-stepping scaffolding."
  },
  monday: {
    id: "monday",
    name: "monday.com",
    shortName: "monday.com",
    subtitle: "Enterprise Work OS Platform",
    tagline: "Modular Lego-Block Project & Operations Architecture",
    versionBadge: "2022 Work OS Spec",
    figmaUrl: "https://www.figma.com/design/NzeSyhIAKyx7DSOEBrmG6l/Pritam-s-Portfolio-List?node-id=1143-87",
    liveUrl: "https://monday.com/",
    brandColor: "#0073EA",
    brandHoverColor: "#005bb5",
    brandLogoText: "M",
    screensCount: 21,
    primaryEntity: "Collaborative Workspaces",
    description: "Work OS enterprise reference architecture from 2022. Deconstructs organizational silos through infinite columnar flexibility, real-time battery status distribution, and multi-perspective view virtualization."
  },
  copyai: {
    id: "copyai",
    name: "Copy.ai",
    shortName: "Copy.ai",
    subtitle: "Generative AI Writing Platform",
    tagline: "High-Volume Marketing Content & Workflow Engine",
    versionBadge: "2021 GenAI Spec",
    figmaUrl: "https://www.figma.com/design/NzeSyhIAKyx7DSOEBrmG6l/Pritam-s-Portfolio-List?node-id=1-52010",
    liveUrl: "https://www.copy.ai/",
    brandColor: "#2563EB",
    brandHoverColor: "#1d4ed8",
    brandLogoText: "C",
    screensCount: 12,
    primaryEntity: "Copy Generation Workflows",
    description: "Generative AI writing platform architecture from 2021. Features intuitive prompt structuring, tone-of-voice calibration, and multi-format content generation."
  },
  github: {
    id: "github",
    name: "GitHub Web",
    shortName: "GitHub Web",
    subtitle: "Developer Code Review & Collaboration Platform",
    tagline: "Async Pull Request Ergonomics & Primer Design System",
    versionBadge: "2019-2020 Dev Spec",
    figmaUrl: "https://www.figma.com/design/NzeSyhIAKyx7DSOEBrmG6l/Pritam-s-Portfolio-List?node-id=0-1",
    liveUrl: "https://github.com/",
    brandColor: "#24292F",
    brandHoverColor: "#0d1117",
    brandLogoText: "GH",
    screensCount: 18,
    primaryEntity: "Code Review Surfaces",
    description: "Developer platform master architecture from 2019-2020. Streamlines code review cognitive load through keyboard-first split diffs, inline suggested changes, and Primer design tokens."
  },
  officevibe: {
    id: "officevibe",
    name: "Officevibe",
    shortName: "Officevibe",
    subtitle: "Employee Experience & Continuous Pulse Platform",
    tagline: "Psychological Safety & Continuous Engagement Feedback",
    versionBadge: "2021 HR Tech Spec",
    figmaUrl: "https://www.figma.com/design/NzeSyhIAKyx7DSOEBrmG6l/Pritam-s-Portfolio-List?node-id=1-57423",
    liveUrl: "https://officevibe.com/",
    brandColor: "#FF5C5C",
    brandHoverColor: "#e04848",
    brandLogoText: "OV",
    screensCount: 19,
    primaryEntity: "Pulse Survey Experiences",
    description: "Employee experience platform architecture from 2021. Replaces stressful annual reviews with safe weekly pulse surveys, 10 engagement metrics, and anonymous manager-employee conversations."
  }
}
