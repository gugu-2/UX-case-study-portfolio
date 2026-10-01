export type ProductId = "minimal" | "linear" | "miro" | "mixpanel" | "frame"

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
    screensCount: 10,
    primaryEntity: "Workspaces",
    description: "A connected OS for modern teams that unifies documentation, project management, and whiteboarding into one seamless interface to reduce context switching."
  }
}
