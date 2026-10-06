import { ProductId } from "./products"

export interface NavSubItem {
  title: string
  id: string
  hash?: string
}

export interface NavItem {
  title: string
  id: string
  number?: string
  badge?: string
  items?: NavSubItem[]
}

export const docsNav: NavItem[] = [
  {
    title: "Overview",
    id: "overview",
    number: "00",
    badge: "Executive",
    items: [
      { title: "System Abstract", id: "overview", hash: "abstract" },
      { title: "Creator & Lineage", id: "overview", hash: "lineage" },
      { title: "Core Architecture", id: "overview", hash: "architecture" },
    ],
  },
  {
    title: "Product & Vision",
    id: "vision",
    number: "01",
    badge: "Approved",
    items: [
      { title: "Overview", id: "vision", hash: "overview" },
      { title: "UX Vision", id: "vision", hash: "ux-vision" },
      { title: "Principles", id: "vision", hash: "principles" },
      { title: "Ecosystem Map", id: "vision", hash: "ecosystem" },
    ],
  },
  {
    title: "Research & Human Insight",
    id: "research-doc",
    number: "02",
    badge: "n=42",
    items: [
      { title: "2.1 Research Plan & Objectives", id: "research-doc", hash: "plan" },
      { title: "2.2 Research Findings", id: "research-doc", hash: "findings" },
      { title: "2.3 Persona Template (Cards)", id: "research-doc", hash: "personas" },
      { title: "2.4 Jobs to be Done (JTBD)", id: "research-doc", hash: "jtbd" },
      { title: "2.5 User Journey Map (Mermaid)", id: "research-doc", hash: "journey" },
      { title: "2.6 Experience Map (Front/Back)", id: "research-doc", hash: "experience-map" },
    ],
  },
  {
    title: "User Personas",
    id: "persona",
    number: "02A",
    badge: "Archetypes",
    items: [
      { title: "Archetypal User Profiles", id: "persona", hash: "profiles" },
      { title: "Goals, Motivations & Frustrations", id: "persona", hash: "goals" },
      { title: "Accessibility Specifications", id: "persona", hash: "a11y" },
    ],
  },
  {
    title: "Empathy Map",
    id: "empathy-map",
    number: "02B",
    badge: "Empathy",
    items: [
      { title: "Think & Feel Quadrant", id: "empathy-map", hash: "think" },
      { title: "Hear & See Observations", id: "empathy-map", hash: "hear-see" },
      { title: "Say & Do Actions", id: "empathy-map", hash: "say-do" },
      { title: "Pain & Gain Analysis", id: "empathy-map", hash: "pain-gain" },
    ],
  },
  {
    title: "User Journey Map",
    id: "journey-map",
    number: "02C",
    badge: "5 Phases",
    items: [
      { title: "Emotional Trajectory Curve", id: "journey-map", hash: "curve" },
      { title: "Touchpoint Matrix (Entice to Extend)", id: "journey-map", hash: "touchpoints" },
      { title: "Satisfaction Summary Gauges", id: "journey-map", hash: "summary" },
    ],
  },
  {
    title: "UX Competency Matrix",
    id: "competency-matrix",
    number: "02D",
    badge: "18 Skills",
    items: [
      { title: "Radial Polar Competencies Wheel", id: "competency-matrix", hash: "wheel" },
      { title: "5-Tier Mastery Levels", id: "competency-matrix", hash: "tiers" },
      { title: "Deliverables & Artifact Rubric", id: "competency-matrix", hash: "rubric" },
    ],
  },
  {
    title: "Problem & Opportunity",
    id: "problem",
    number: "03",
    badge: "Strategic",
    items: [
      { title: "3.1 Problem Statement", id: "problem", hash: "statement" },
      { title: "3.2 5-Layer Problem Hierarchy", id: "problem", hash: "hierarchy" },
      { title: "3.3 Opportunity Matrix", id: "problem", hash: "matrix" },
      { title: "3.4 Assumption Map", id: "problem", hash: "assumptions" },
    ],
  },
  {
    title: "Strategy & Scope",
    id: "strategy",
    number: "04",
    badge: "Roadmap",
    items: [
      { title: "4.1 Strategic Pillars", id: "strategy", hash: "pillars" },
      { title: "4.2 MVP Scope Matrix", id: "strategy", hash: "scope" },
      { title: "4.3 Feature Inventory", id: "strategy", hash: "features" },
    ],
  },
  {
    title: "Information Architecture",
    id: "architecture",
    number: "05",
    badge: "Specs",
    items: [
      { title: "5.1 Ecosystem Sitemap (Mermaid)", id: "architecture", hash: "sitemap" },
      { title: "5.2 Dual Navigation Architecture", id: "architecture", hash: "navigation" },
      { title: "5.3 Content Architecture", id: "architecture", hash: "content" },
    ],
  },
  {
    title: "User & Task Flows",
    id: "flows",
    number: "06",
    badge: "Mermaid",
    items: [
      { title: "6.1 User Flow (Banking Transfer)", id: "flows", hash: "flow-banking" },
      { title: "6.2 Task Flow (Cognitive Steps)", id: "flows", hash: "task-flow" },
      { title: "6.3 Decision Tree (Branching)", id: "flows", hash: "decision-tree" },
      { title: "6.4 Screen Inventory", id: "flows", hash: "inventory" },
      { title: "6.5 Screen-State Matrix", id: "flows", hash: "state-matrix" },
    ],
  },
  {
    title: "Screens & Archetypes",
    id: "screens",
    number: "07",
    badge: "6 Screens",
    items: [
      { title: "D01 — General Analytics", id: "screen-d01", hash: "d01" },
      { title: "D02 — General App", id: "screen-d02", hash: "d02" },
      { title: "D03 — General Banking", id: "screen-d03", hash: "d03" },
      { title: "D04 — General Booking", id: "screen-d04", hash: "d04" },
      { title: "D05 — General E-Commerce", id: "screen-d05", hash: "d05" },
      { title: "D06 — General File Manager", id: "screen-d06", hash: "d06" },
    ],
  },
  {
    title: "Design System & Tokens",
    id: "tokens",
    number: "08",
    badge: "Tokens",
    items: [
      { title: "8.1 Interaction State Model", id: "tokens", hash: "state-model" },
      { title: "8.2 Color Primitives & Ratios", id: "tokens", hash: "colors" },
      { title: "8.3 Typography Scale (Roboto)", id: "tokens", hash: "typography" },
      { title: "8.4 8pt Spatial Cadence", id: "tokens", hash: "spacing" },
    ],
  },
  {
    title: "Testing & Iteration",
    id: "testing",
    number: "09",
    badge: "V1→V3",
    items: [
      { title: "Usability Benchmarks", id: "testing", hash: "benchmarks" },
      { title: "Iteration History", id: "testing", hash: "iterations" },
      { title: "Resolved Friction", id: "testing", hash: "resolved" },
    ],
  },
  {
    title: "Accessibility & Edge Cases",
    id: "accessibility",
    number: "10",
    badge: "WCAG AA",
    items: [
      { title: "Contrast Audit", id: "accessibility", hash: "contrast" },
      { title: "Keyboard & Focus Order", id: "accessibility", hash: "keyboard" },
      { title: "Edge Cases & Stress Tests", id: "accessibility", hash: "edge-cases" },
    ],
  },
  {
    title: "Handoff & Design QA",
    id: "handoff",
    number: "11",
    badge: "Contracts",
    items: [
      { title: "Component API Contracts", id: "handoff", hash: "contracts" },
      { title: "Design QA Checklist", id: "handoff", hash: "qa-checklist" },
      { title: "State Machine Coverage", id: "handoff", hash: "states" },
    ],
  },
  {
    title: "Metrics & Governance",
    id: "metrics",
    number: "12",
    badge: "HEART",
    items: [
      { title: "HEART Framework", id: "metrics", hash: "heart" },
      { title: "UX Health Radar", id: "metrics", hash: "health" },
      { title: "Governance SLA", id: "metrics", hash: "governance" },
    ],
  },
  {
    title: "Sign-Off & Roadmap",
    id: "sign-off",
    number: "13",
    badge: "Final",
    items: [
      { title: "Stakeholder Sign-Off", id: "sign-off", hash: "sign-off" },
      { title: "Implementation Roadmap", id: "sign-off", hash: "roadmap" },
      { title: "Release Milestones", id: "sign-off", hash: "milestones" },
    ],
  },
  {
    title: "Master UX Process",
    id: "process",
    number: "27",
    badge: "20 Steps",
    items: [
      { title: "20-Step Lifecycle Flowchart", id: "process", hash: "flowchart" },
      { title: "Phase Deliverables & Roles", id: "process", hash: "phases" },
      { title: "QA & Governance Gates", id: "process", hash: "gates" },
    ],
  },
  {
    title: "Ideal UX Artifact Map",
    id: "artifact-map",
    number: "28",
    badge: "Topology",
    items: [
      { title: "Master Artifact Topology", id: "artifact-map", hash: "topology" },
      { title: "Artifact Ecosystem Matrix", id: "artifact-map", hash: "matrix" },
      { title: "Handoff & Traceability", id: "artifact-map", hash: "traceability" },
    ],
  },
  {
    title: "Design Time Frame",
    id: "timeframe",
    number: "29",
    badge: "6 Months",
    items: [
      { title: "29.1 Chronological Sprints (Months 1–6)", id: "timeframe", hash: "months" },
      { title: "29.2 Milestone Sign-Offs", id: "timeframe", hash: "milestones" },
    ],
  },
]

export const minimalDocsNav = docsNav

export const linearDocsNav: NavItem[] = [
  {
    title: "Overview",
    id: "overview",
    number: "00",
    badge: "Production",
    items: [
      { title: "The Linear Method", id: "overview", hash: "abstract" },
      { title: "Velocity Architecture", id: "overview", hash: "architecture" },
      { title: "Figma Master Lineage", id: "overview", hash: "figma" },
    ],
  },
  {
    title: "Product & Vision",
    id: "vision",
    number: "01",
    badge: "The Method",
    items: [
      { title: "1.1 Product Overview", id: "vision", hash: "overview" },
      { title: "1.2 6 Design Principles", id: "vision", hash: "principles" },
      { title: "1.3 Ecosystem Map (Mermaid)", id: "vision", hash: "ecosystem" },
      { title: "2.3 Core Personas (Alex, Elena, Marcus)", id: "vision", hash: "personas" },
      { title: "2.5 User Journey Map (Mermaid)", id: "vision", hash: "journey" },
      { title: "2.6 Frontstage & Backstage Map", id: "vision", hash: "experience-map" },
    ],
  },
  {
    title: "User Personas",
    id: "persona",
    number: "02A",
    badge: "Archetypes",
    items: [
      { title: "Staff Software Engineer Profile", id: "persona", hash: "staff-eng" },
      { title: "Engineering Manager Profile", id: "persona", hash: "eng-manager" },
    ],
  },
  {
    title: "Empathy Map",
    id: "empathy-map",
    number: "02B",
    badge: "Empathy",
    items: [
      { title: "Think & Feel Quadrant", id: "empathy-map", hash: "think" },
      { title: "Hear & See Observations", id: "empathy-map", hash: "hear-see" },
      { title: "Say & Do Actions", id: "empathy-map", hash: "say-do" },
      { title: "Gain & Pain Analysis", id: "empathy-map", hash: "gain-pain" },
    ],
  },
  {
    title: "User Journey Map",
    id: "journey-map",
    number: "02C",
    badge: "5 Phases",
    items: [
      { title: "Developer Emotional Curve", id: "journey-map", hash: "curve" },
      { title: "Touchpoint Lifecycle", id: "journey-map", hash: "touchpoints" },
      { title: "Satisfaction Metrics", id: "journey-map", hash: "summary" },
    ],
  },
  {
    title: "UX Competency Matrix",
    id: "competency-matrix",
    number: "02D",
    badge: "18 Skills",
    items: [
      { title: "High-Velocity Engineering Competencies", id: "competency-matrix", hash: "wheel" },
      { title: "5-Tier Mastery Levels", id: "competency-matrix", hash: "tiers" },
      { title: "Deliverables & Artifact Rubric", id: "competency-matrix", hash: "rubric" },
    ],
  },
  {
    title: "Problem & Opportunity",
    id: "problem",
    number: "03",
    badge: "Strategic",
    items: [
      { title: "3.1 Root Problem Statement", id: "problem", hash: "statement" },
      { title: "3.2 5-Layer Problem Hierarchy", id: "problem", hash: "hierarchy" },
      { title: "3.3 Strategic Opportunity Matrix", id: "problem", hash: "matrix" },
    ],
  },
  {
    title: "Strategy & Scope",
    id: "strategy",
    number: "04",
    badge: "14 Modules",
    items: [
      { title: "4.1 Continuous Cycles vs Sprints", id: "strategy", hash: "pillars" },
      { title: "4.2 High-Velocity Scope Matrix", id: "strategy", hash: "scope" },
      { title: "4.3 14 Core Workflows", id: "strategy", hash: "features" },
    ],
  },
  {
    title: "Information Architecture",
    id: "architecture",
    number: "05",
    badge: "Specs",
    items: [
      { title: "5.1 Dual Hierarchy Sitemap (Mermaid)", id: "architecture", hash: "sitemap" },
      { title: "5.2 Command Menu ⌘K Topology", id: "architecture", hash: "command-menu" },
      { title: "5.3 Multi-Dimension View Matrix", id: "architecture", hash: "matrix" },
    ],
  },
  {
    title: "User & Task Flows",
    id: "flows",
    number: "06",
    badge: "Mermaid",
    items: [
      { title: "6.1 Flow 1: Rapid Issue Creation ('C')", id: "flows", hash: "creation-flow" },
      { title: "6.2 Flow 2: Quick Status Switcher ('S')", id: "flows", hash: "switcher-flow" },
      { title: "6.3 Flow 3: Git PR Auto-Close", id: "flows", hash: "git-flow" },
      { title: "6.4 14-Screen Master Inventory", id: "flows", hash: "inventory" },
      { title: "6.5 17 Screen-State Matrix", id: "flows", hash: "state-matrix" },
    ],
  },
  {
    title: "Screens & Archetypes",
    id: "screens",
    number: "07",
    badge: "14 Screens",
    items: [
      { title: "L01 — Workspace Setup", id: "screen-l01", hash: "l01" },
      { title: "L02 — Onboarding Completion", id: "screen-l02", hash: "l02" },
      { title: "L03 — Welcome & Philosophy", id: "screen-l03", hash: "l03" },
      { title: "L04 — UI Theme Selection", id: "screen-l04", hash: "l04" },
      { title: "L05 — GitHub VCS Sync", id: "screen-l05", hash: "l05" },
      { title: "L06 — Product Updates Hub", id: "screen-l06", hash: "l06" },
      { title: "L07 — Core Active Issues", id: "screen-l07", hash: "l07" },
      { title: "L08 — Quick Status Switcher", id: "screen-l08", hash: "l08" },
      { title: "L09 — High-Velocity Kanban", id: "screen-l09", hash: "l09" },
      { title: "L10 — Rapid Issue Creation", id: "screen-l10", hash: "l10" },
      { title: "L11 — Project Detail Hub", id: "screen-l11", hash: "l11" },
      { title: "L12 — Command Menu ⌘K", id: "screen-l12", hash: "l12" },
      { title: "L13 — Workspace Ecosystem", id: "screen-l13", hash: "l13" },
      { title: "L14 — Git Ergonomics & Prefs", id: "screen-l14", hash: "l14" },
    ],
  },
  {
    title: "Design System & Tokens",
    id: "tokens",
    number: "08",
    badge: "Obsidian",
    items: [
      { title: "8.1 Interaction State Model (Mermaid)", id: "tokens", hash: "state-model" },
      { title: "8.2 Obsidian Dark Mode Palette", id: "tokens", hash: "colors" },
      { title: "8.3 Universal Shortcuts Index", id: "tokens", hash: "shortcuts" },
    ],
  },
  {
    title: "Testing & Iteration",
    id: "testing",
    number: "09",
    badge: "V1→V3",
    items: [
      { title: "9.1 Usability Benchmarks", id: "testing", hash: "benchmarks" },
      { title: "9.2 Evolution: Beta to Sync Engine", id: "testing", hash: "evolution" },
    ],
  },
  {
    title: "Accessibility & Edge Cases",
    id: "accessibility",
    number: "10",
    badge: "WCAG AA",
    items: [
      { title: "10.1 Contrast Ratio Verification", id: "accessibility", hash: "contrast" },
      { title: "10.2 Architectural Focus Mechanisms", id: "accessibility", hash: "focus" },
      { title: "10.3 Offline Queue Resilience", id: "accessibility", hash: "offline" },
    ],
  },
  {
    title: "Handoff & Design QA",
    id: "handoff",
    number: "11",
    badge: "Contracts",
    items: [
      { title: "11.1 Sub-50ms Sync Protocol", id: "handoff", hash: "protocol" },
      { title: "11.2 Component API Contracts", id: "handoff", hash: "contracts" },
    ],
  },
  {
    title: "Master UX Process",
    id: "process",
    number: "27",
    badge: "The Method",
    items: [
      { title: "27.1 Continuous Cycle Flowchart", id: "process", hash: "flowchart" },
      { title: "27.2 The 3 Non-Negotiable Rules", id: "process", hash: "rules" },
    ],
  },
  {
    title: "Ideal UX Artifact Map",
    id: "artifact-map",
    number: "28",
    badge: "Traceability",
    items: [
      { title: "28.1 Linear Ecosystem Artifact Topology", id: "artifact-map", hash: "topology" },
      { title: "28.2 Figma-to-Code Traceability Matrix", id: "artifact-map", hash: "traceability" },
    ],
  },
  {
    title: "Design Time Frame",
    id: "timeframe",
    number: "29",
    badge: "6 Months",
    items: [
      { title: "29.1 Chronological Sprints (Months 1–6)", id: "timeframe", hash: "months" },
      { title: "29.2 Milestone Sign-Offs", id: "timeframe", hash: "milestones" },
    ],
  },
]

export const miroDocsNav: NavItem[] = [
  {
    title: "Overview",
    id: "overview",
    number: "00",
    badge: "Architecture",
    items: [
      { title: "The Visual Workspace", id: "overview", hash: "abstract" },
      { title: "Infinite Canvas Architecture", id: "overview", hash: "architecture" },
      { title: "Multiplayer Engine", id: "overview", hash: "engine" },
    ],
  },
  {
    title: "Product & Vision",
    id: "vision",
    number: "01",
    badge: "Visuals",
    items: [
      { title: "1.1 Product Overview", id: "vision", hash: "overview" },
      { title: "1.2 Spatial Principles", id: "vision", hash: "principles" },
      { title: "1.3 Ecosystem Map (Mermaid)", id: "vision", hash: "ecosystem" },
      { title: "2.3 Core Personas", id: "vision", hash: "personas" },
      { title: "2.5 User Journey Map (Mermaid)", id: "vision", hash: "journey" },
      { title: "2.6 Frontstage & Backstage Map", id: "vision", hash: "experience-map" },
    ],
  },
  {
    title: "User Personas",
    id: "persona",
    number: "02A",
    badge: "Archetypes",
    items: [
      { title: "UX Facilitator Profile", id: "persona", hash: "facilitator" },
      { title: "Agile Coach Profile", id: "persona", hash: "agile-coach" },
    ],
  },
  {
    title: "Empathy Map",
    id: "empathy-map",
    number: "02B",
    badge: "Empathy",
    items: [
      { title: "Think & Feel Quadrant", id: "empathy-map", hash: "think" },
      { title: "Hear & See Observations", id: "empathy-map", hash: "hear-see" },
      { title: "Say & Do Actions", id: "empathy-map", hash: "say-do" },
      { title: "Gain & Pain Analysis", id: "empathy-map", hash: "gain-pain" },
    ],
  },
  {
    title: "User Journey Map",
    id: "journey-map",
    number: "02C",
    badge: "5 Phases",
    items: [
      { title: "Facilitator Emotional Curve", id: "journey-map", hash: "curve" },
      { title: "Workshop Touchpoint Lifecycle", id: "journey-map", hash: "touchpoints" },
      { title: "Synthesis Metrics", id: "journey-map", hash: "summary" },
    ],
  },
  {
    title: "UX Competency Matrix",
    id: "competency-matrix",
    number: "02D",
    badge: "18 Skills",
    items: [
      { title: "Multiplayer Canvas Competencies", id: "competency-matrix", hash: "wheel" },
      { title: "5-Tier Mastery Levels", id: "competency-matrix", hash: "tiers" },
      { title: "Deliverables & Artifact Rubric", id: "competency-matrix", hash: "rubric" },
    ],
  },
  {
    title: "Problem & Opportunity",
    id: "problem",
    number: "03",
    badge: "Strategic",
    items: [
      { title: "3.1 Root Problem Statement", id: "problem", hash: "statement" },
      { title: "3.2 5-Layer Problem Hierarchy", id: "problem", hash: "hierarchy" },
      { title: "3.3 Strategic Opportunity Matrix", id: "problem", hash: "matrix" },
    ],
  },
  {
    title: "Strategy & Scope",
    id: "strategy",
    number: "04",
    badge: "Modules",
    items: [
      { title: "4.1 Spatial Alignment vs Linear", id: "strategy", hash: "pillars" },
      { title: "4.2 Infinite Canvas Scope", id: "strategy", hash: "scope" },
      { title: "4.3 Core Workshop Workflows", id: "strategy", hash: "features" },
    ],
  },
  {
    title: "Information Architecture",
    id: "architecture",
    number: "05",
    badge: "Specs",
    items: [
      { title: "5.1 Z-Index Rendering Sitemap", id: "architecture", hash: "sitemap" },
      { title: "5.2 Object Toolbar Topology", id: "architecture", hash: "toolbar" },
      { title: "5.3 Canvas Navigation Matrix", id: "architecture", hash: "matrix" },
    ],
  },
  {
    title: "User & Task Flows",
    id: "flows",
    number: "06",
    badge: "Mermaid",
    items: [
      { title: "6.1 Flow 1: Workshop Board Creation", id: "flows", hash: "creation-flow" },
      { title: "6.2 Flow 2: Live Cursor Syncing", id: "flows", hash: "sync-flow" },
      { title: "6.3 Flow 3: Template Deployment", id: "flows", hash: "template-flow" },
      { title: "6.4 7-Screen Master Inventory", id: "flows", hash: "inventory" },
      { title: "6.5 12 Screen-State Matrix", id: "flows", hash: "state-matrix" },
    ],
  },
  {
    title: "Screens & Archetypes",
    id: "screens",
    number: "07",
    badge: "7 Screens",
    items: [
      { title: "M01 — Board Layout Architecture", id: "screen-m01", hash: "m01" },
      { title: "M02 — Template & Frame Init", id: "screen-m02", hash: "m02" },
      { title: "M03 — Multi-Object Grouping", id: "screen-m03", hash: "m03" },
      { title: "M04 — Canvas Toolbar", id: "screen-m04", hash: "m04" },
      { title: "M05 — Contextual Menu", id: "screen-m05", hash: "m05" },
      { title: "M06 — Multiplayer Cursors", id: "screen-m06", hash: "m06" },
      { title: "M07 — Zoom Navigation", id: "screen-m07", hash: "m07" },
    ],
  },
  {
    title: "Design System & Tokens",
    id: "tokens",
    number: "08",
    badge: "Vector",
    items: [
      { title: "8.1 Vector State Model (Mermaid)", id: "tokens", hash: "state-model" },
      { title: "8.2 Sticky Note Vibrant Palette", id: "tokens", hash: "colors" },
      { title: "8.3 Object Snap Guidelines", id: "tokens", hash: "snapping" },
    ],
  },
  {
    title: "Testing & Iteration",
    id: "testing",
    number: "09",
    badge: "V1→V2",
    items: [
      { title: "9.1 Usability Benchmarks", id: "testing", hash: "benchmarks" },
      { title: "9.2 Evolution: Frame Export", id: "testing", hash: "evolution" },
    ],
  },
  {
    title: "Accessibility & Edge Cases",
    id: "accessibility",
    number: "10",
    badge: "WCAG AA",
    items: [
      { title: "10.1 Canvas Screen Reader Limits", id: "accessibility", hash: "contrast" },
      { title: "10.2 Architectural Focus Mechanisms", id: "accessibility", hash: "focus" },
      { title: "10.3 Websocket Disconnect Resilience", id: "accessibility", hash: "offline" },
    ],
  },
  {
    title: "Handoff & Design QA",
    id: "handoff",
    number: "11",
    badge: "Contracts",
    items: [
      { title: "11.1 Canvas WebGL Render Protocol", id: "handoff", hash: "protocol" },
      { title: "11.2 Vector Component API Contracts", id: "handoff", hash: "contracts" },
    ],
  },
  {
    title: "Master UX Process",
    id: "process",
    number: "27",
    badge: "The Process",
    items: [
      { title: "27.1 Infinite Design Flowchart", id: "process", hash: "flowchart" },
      { title: "27.2 The Collaboration First Rules", id: "process", hash: "rules" },
    ],
  },
  {
    title: "Ideal UX Artifact Map",
    id: "artifact-map",
    number: "28",
    badge: "Traceability",
    items: [
      { title: "28.1 Miro Ecosystem Artifact Topology", id: "artifact-map", hash: "topology" },
      { title: "28.2 Figma-to-Code Matrix", id: "artifact-map", hash: "traceability" },
    ],
  },
  {
    title: "Design Time Frame",
    id: "timeframe",
    number: "29",
    badge: "6 Months",
    items: [
      { title: "29.1 Chronological Sprints (Months 1–6)", id: "timeframe", hash: "months" },
      { title: "29.2 Milestone Sign-Offs", id: "timeframe", hash: "milestones" },
    ],
  },
]

export const mixpanelDocsNav: NavItem[] = docsNav.map((section) => {
  if (section.id === "screens") {
    return {
      title: "Screens & Archetypes",
      id: "screens",
      number: "07",
      badge: "13 Screens",
      items: [
        { title: "MX01 — Analytics Dashboard", id: "screen-mx01", hash: "mx01" },
        { title: "MX02 — Funnel Analysis", id: "screen-mx02", hash: "mx02" },
        { title: "MX03 — Retention Cohorts", id: "screen-mx03", hash: "mx03" },
        { title: "MX04 — Flows & Paths", id: "screen-mx04", hash: "mx04" },
        { title: "MX05 — Event Segmentation", id: "screen-mx05", hash: "mx05" },
        { title: "MX06 — User Profiles", id: "screen-mx06", hash: "mx06" },
        { title: "MX07 — Data Management", id: "screen-mx07", hash: "mx07" },
        { title: "MX08 — Board Settings", id: "screen-mx08", hash: "mx08" },
        { title: "MX09 — Alerts & Anomalies", id: "screen-mx09", hash: "mx09" },
        { title: "MX10 — Cohort Builder", id: "screen-mx10", hash: "mx10" },
        { title: "MX11 — Integration Catalog", id: "screen-mx11", hash: "mx11" },
        { title: "MX12 — Query Builder Details", id: "screen-mx12", hash: "mx12" },
        { title: "MX13 — Enterprise Workspace", id: "screen-mx13", hash: "mx13" },
      ],
    }
  }
  if (section.id === "flows") {
    return {
      ...section,
      items: [
        { title: "6.1 Funnel Creation Flow", id: "flows", hash: "funnel-flow" },
        { title: "6.2 Event Segmentation", id: "flows", hash: "segment-flow" },
        { title: "6.3 13-Screen Inventory", id: "flows", hash: "inventory" },
      ],
    }
  }
  return section
})

export const frameDocsNav: NavItem[] = docsNav.map((section) => {
  if (section.id === "screens") {
    return {
      title: "Screens & Archetypes",
      id: "screens",
      number: "07",
      badge: "10 Screens",
      items: [
        { title: "FR01 — Workspace Home", id: "screen-fr01", hash: "fr01" },
        { title: "FR02 — Connected Notes", id: "screen-fr02", hash: "fr02" },
        { title: "FR03 — Task View", id: "screen-fr03", hash: "fr03" },
        { title: "FR04 — Universal Search", id: "screen-fr04", hash: "fr04" },
        { title: "FR05 — Whiteboard", id: "screen-fr05", hash: "fr05" },
        { title: "FR06 — Integrations Hub", id: "screen-fr06", hash: "fr06" },
        { title: "FR07 — Team Settings", id: "screen-fr07", hash: "fr07" },
        { title: "FR08 — Notifications", id: "screen-fr08", hash: "fr08" },
        { title: "FR09 — Calendar", id: "screen-fr09", hash: "fr09" },
        { title: "FR10 — Activity Feed", id: "screen-fr10", hash: "fr10" },
      ],
    }
  }
  if (section.id === "flows") {
    return {
      ...section,
      items: [
        { title: "6.1 Search & Navigation Flow", id: "flows", hash: "search-flow" },
        { title: "6.2 Task & Note Connection", id: "flows", hash: "connection-flow" },
        { title: "6.3 10-Screen Inventory", id: "flows", hash: "inventory" },
      ],
    }
  }
  return section
})

export const qolabaDocsNav: NavItem[] = docsNav.map((section) => {
  if (section.id === "screens") {
    return {
      title: "Screens & Archetypes",
      id: "screens",
      number: "07",
      badge: "14 Screens",
      items: [
        { title: "Q01 — Flagship Studio Canvas", id: "screen-q01", hash: "q01" },
        { title: "Q02 — Parameter Tuning Dock", id: "screen-q02", hash: "q02" },
        { title: "Q03 — Generation Quad Grid", id: "screen-q03", hash: "q03" },
        { title: "Q04 — Latent Synthesis Queue", id: "screen-q04", hash: "q04" },
        { title: "Q05 — Studio Lightbox", id: "screen-q05", hash: "q05" },
        { title: "Q06 — Inpainting & Mask Canvas", id: "screen-q06", hash: "q06" },
        { title: "Q07 — Outpainting Expansion", id: "screen-q07", hash: "q07" },
        { title: "Q08 — LoRA & Style Presets", id: "screen-q08", hash: "q08" },
        { title: "Q09 — Aspect Ratio Selector", id: "screen-q09", hash: "q09" },
        { title: "Q10 — AI Chat Co-Pilot", id: "screen-q10", hash: "q10" },
        { title: "Q11 — Prompt Marketplace", id: "screen-q11", hash: "q11" },
        { title: "Q12 — Creator Auth Gate", id: "screen-q12", hash: "q12" },
        { title: "Q13 — Onboarding & Credits", id: "screen-q13", hash: "q13" },
        { title: "Q14 — Dual-Theme Dark & Light", id: "screen-q14", hash: "q14" },
      ],
    }
  }
  if (section.id === "flows") {
    return {
      ...section,
      items: [
        { title: "6.1 Prompt to Generation Flow", id: "flows", hash: "prompt-flow" },
        { title: "6.2 Inpainting & Mask Pipeline", id: "flows", hash: "inpaint-flow" },
        { title: "6.3 14-Screen Inventory", id: "flows", hash: "inventory" },
      ],
    }
  }
  return section
})

export const brilliantDocsNav: NavItem[] = docsNav.map((section) => {
  if (section.id === "screens") {
    return {
      title: "Screens & Archetypes",
      id: "screens",
      number: "07",
      badge: "19 Screens",
      items: [
        { title: "B01 — Master Hero & STEM Suite", id: "screen-b01", hash: "b01" },
        { title: "B02 — Flagship STEM Homepage", id: "screen-b02", hash: "b02" },
        { title: "B03 — Community Wall of Love", id: "screen-b03", hash: "b03" },
        { title: "B04 — Pricing & Subscription", id: "screen-b04", hash: "b04" },
        { title: "B05 — Daily Challenges Hub", id: "screen-b05", hash: "b05" },
        { title: "B06 — Interactive Challenge Solver", id: "screen-b06", hash: "b06" },
        { title: "B07 — STEM Course Catalog", id: "screen-b07", hash: "b07" },
        { title: "B08 — About Us & Mission", id: "screen-b08", hash: "b08" },
        { title: "B09 — Beautiful Geometry Tree", id: "screen-b09", hash: "b09" },
        { title: "B10 — Pedagogical Manifesto", id: "screen-b10", hash: "b10" },
        { title: "B11 — Authors & Engineers", id: "screen-b11", hash: "b11" },
        { title: "B12 — Orbital Physics Auth", id: "screen-b12", hash: "b12" },
        { title: "B13 — Intent Qualification", id: "screen-b13", hash: "b13" },
        { title: "B14 — Rocket Propulsion Hook", id: "screen-b14", hash: "b14" },
        { title: "B15 — Authenticated Catalog", id: "screen-b15", hash: "b15" },
        { title: "B16 — Today Habit Surface", id: "screen-b16", hash: "b16" },
        { title: "B17 — Probability & Galton Board", id: "screen-b17", hash: "b17" },
        { title: "B18 — In-Lesson Dice Player", id: "screen-b18", hash: "b18" },
        { title: "B19 — Student Home & Streak", id: "screen-b19", hash: "b19" },
      ],
    }
  }
  if (section.id === "flows") {
    return {
      ...section,
      items: [
        { title: "6.1 Interactive Problem Flow", id: "flows", hash: "problem-flow" },
        { title: "6.2 Daily Habit & Streak Loop", id: "flows", hash: "streak-flow" },
        { title: "6.3 19-Screen Inventory", id: "flows", hash: "inventory" },
      ],
    }
  }
  return section
})

export const mondayDocsNav: NavItem[] = docsNav.map((section) => {
  if (section.id === "screens") {
    return {
      title: "Screens & Archetypes",
      id: "screens",
      number: "07",
      badge: "21 Screens",
      items: [
        { title: "MN01 — Master Work OS Hero Card", id: "screen-mn01", hash: "mn01" },
        { title: "MN02 — Flagship Homepage & Demo", id: "screen-mn02", hash: "mn02" },
        { title: "MN03 — Master Pricing Matrix", id: "screen-mn03", hash: "mn03" },
        { title: "MN04 — About Us & Heritage", id: "screen-mn04", hash: "mn04" },
        { title: "MN05 — Authentication & Proof", id: "screen-mn05", hash: "mn05" },
        { title: "MN06 — Work Management Suite", id: "screen-mn06", hash: "mn06" },
        { title: "MN07 — Template Center Library", id: "screen-mn07", hash: "mn07" },
        { title: "MN08 — monday dev Agile Suite", id: "screen-mn08", hash: "mn08" },
        { title: "MN09 — Executive BI Dashboards", id: "screen-mn09", hash: "mn09" },
        { title: "MN10 — Integrations Ecosystem", id: "screen-mn10", hash: "mn10" },
        { title: "MN11 — Enterprise Consultation", id: "screen-mn11", hash: "mn11" },
        { title: "MN12 — Onboarding: Intent", id: "screen-mn12", hash: "mn12" },
        { title: "MN13 — Onboarding: Domain", id: "screen-mn13", hash: "mn13" },
        { title: "MN14 — Onboarding: Needs", id: "screen-mn14", hash: "mn14" },
        { title: "MN15 — Onboarding: Attribution", id: "screen-mn15", hash: "mn15" },
        { title: "MN16 — Team Provisioning Modal", id: "screen-mn16", hash: "mn16" },
        { title: "MN17 — Dark Workspace Directory", id: "screen-mn17", hash: "mn17" },
        { title: "MN18 — Updates Inbox Stream", id: "screen-mn18", hash: "mn18" },
        { title: "MN19 — Board Canvas & Battery", id: "screen-mn19", hash: "mn19" },
        { title: "MN20 — Search Everything (Ctrl+B)", id: "screen-mn20", hash: "mn20" },
        { title: "MN21 — Personal Home & Tasks", id: "screen-mn21", hash: "mn21" },
      ],
    }
  }
  if (section.id === "flows") {
    return {
      ...section,
      items: [
        { title: "6.1 Board & Column Automation Flow", id: "flows", hash: "board-flow" },
        { title: "6.2 Multi-View Virtualization", id: "flows", hash: "view-flow" },
        { title: "6.3 21-Screen Inventory", id: "flows", hash: "inventory" },
      ],
    }
  }
  return section
})

export const copyaiDocsNav: NavItem[] = docsNav.map((section) => {
  if (section.id === "screens") {
    return {
      title: "Screens & Archetypes",
      id: "screens",
      number: "07",
      badge: "12 Screens",
      items: [
        { title: "C01 — Flagship Copy Studio", id: "screen-c01", hash: "c01" },
        { title: "C02 — 90+ Template Directory", id: "screen-c02", hash: "c02" },
        { title: "C03 — Blog Post Wizard", id: "screen-c03", hash: "c03" },
        { title: "C04 — High-CTR Ad Copy Engine", id: "screen-c04", hash: "c04" },
        { title: "C05 — Brand Voice Tuning", id: "screen-c05", hash: "c05" },
        { title: "C06 — Real-Time Editor Workspace", id: "screen-c06", hash: "c06" },
        { title: "C07 — Project Folders & Docs", id: "screen-c07", hash: "c07" },
        { title: "C08 — Multi-Seat Team Hub", id: "screen-c08", hash: "c08" },
        { title: "C09 — Workflow Prompt Studio", id: "screen-c09", hash: "c09" },
        { title: "C10 — CMS Export & Publishing", id: "screen-c10", hash: "c10" },
        { title: "C11 — Enterprise Usage Telemetry", id: "screen-c11", hash: "c11" },
        { title: "C12 — Onboarding Walkthrough", id: "screen-c12", hash: "c12" },
      ],
    }
  }
  if (section.id === "flows") {
    return {
      ...section,
      items: [
        { title: "6.1 Prompt Scaffolding to Variation", id: "flows", hash: "scaffold-flow" },
        { title: "6.2 Blog Wizard 4-Step Pipeline", id: "flows", hash: "blog-flow" },
        { title: "6.3 12-Screen Inventory", id: "flows", hash: "inventory" },
      ],
    }
  }
  return section
})

export const githubDocsNav: NavItem[] = docsNav.map((section) => {
  if (section.id === "screens") {
    return {
      title: "Screens & Archetypes",
      id: "screens",
      number: "07",
      badge: "18 Screens",
      items: [
        { title: "GH01 — Repository Root & Primer UI", id: "screen-gh01", hash: "gh01" },
        { title: "GH02 — Pull Request & CI Checks", id: "screen-gh02", hash: "gh02" },
        { title: "GH03 — Split Diff Code Review", id: "screen-gh03", hash: "gh03" },
        { title: "GH04 — Git Blame & History", id: "screen-gh04", hash: "gh04" },
        { title: "GH05 — Issues & Project Board", id: "screen-gh05", hash: "gh05" },
        { title: "GH06 — GitHub Actions CI/CD Logs", id: "screen-gh06", hash: "gh06" },
        { title: "GH07 — Branch Protection Rules", id: "screen-gh07", hash: "gh07" },
        { title: "GH08 — Discussions & Community", id: "screen-gh08", hash: "gh08" },
        { title: "GH09 — Profile & 365d Heatmap", id: "screen-gh09", hash: "gh09" },
        { title: "GH10 — Repository Traffic Stats", id: "screen-gh10", hash: "gh10" },
        { title: "GH11 — Dependabot Security CVEs", id: "screen-gh11", hash: "gh11" },
        { title: "GH12 — Releases & Binary Downloads", id: "screen-gh12", hash: "gh12" },
        { title: "GH13 — Fork & Upstream Sync", id: "screen-gh13", hash: "gh13" },
        { title: "GH14 — Command Palette ('t' Finder)", id: "screen-gh14", hash: "gh14" },
        { title: "GH15 — GFM & Mermaid Renderer", id: "screen-gh15", hash: "gh15" },
        { title: "GH16 — Organization Teams RBAC", id: "screen-gh16", hash: "gh16" },
        { title: "GH17 — PR Squash & Merge Matrix", id: "screen-gh17", hash: "gh17" },
        { title: "GH18 — Global Code Search & Grep", id: "screen-gh18", hash: "gh18" },
      ],
    }
  }
  if (section.id === "flows") {
    return {
      ...section,
      items: [
        { title: "6.1 Pull Request Code Review Flow", id: "flows", hash: "pr-flow" },
        { title: "6.2 CI Check to Merge Decision", id: "flows", hash: "ci-merge-flow" },
        { title: "6.3 18-Screen Inventory", id: "flows", hash: "inventory" },
      ],
    }
  }
  return section
})

export const officevibeDocsNav: NavItem[] = docsNav.map((section) => {
  if (section.id === "screens") {
    return {
      title: "Screens & Archetypes",
      id: "screens",
      number: "07",
      badge: "19 Screens",
      items: [
        { title: "OV01 — Platform Hero Dashboard", id: "screen-ov01", hash: "ov01" },
        { title: "OV02 — 10 Metrics Pulse Radar", id: "screen-ov02", hash: "ov02" },
        { title: "OV03 — Weekly Pulse Survey Card", id: "screen-ov03", hash: "ov03" },
        { title: "OV04 — Anonymous Feedback Drawer", id: "screen-ov04", hash: "ov04" },
        { title: "OV05 — eNPS Loyalty Trendline", id: "screen-ov05", hash: "ov05" },
        { title: "OV06 — 1-on-1 Collaborative Agenda", id: "screen-ov06", hash: "ov06" },
        { title: "OV07 — Action Items & Commitments", id: "screen-ov07", hash: "ov07" },
        { title: "OV08 — Psychological Safety Report", id: "screen-ov08", hash: "ov08" },
        { title: "OV09 — Manager Relationship Health", id: "screen-ov09", hash: "ov09" },
        { title: "OV10 — Good Vibes Peer Praise Hub", id: "screen-ov10", hash: "ov10" },
        { title: "OV11 — Wellness & Burnout Warning", id: "screen-ov11", hash: "ov11" },
        { title: "OV12 — Personal Growth & Mastery", id: "screen-ov12", hash: "ov12" },
        { title: "OV13 — Feedback Quality Benchmark", id: "screen-ov13", hash: "ov13" },
        { title: "OV14 — Ambassadorship & Pride", id: "screen-ov14", hash: "ov14" },
        { title: "OV15 — Custom Micro-Poll Builder", id: "screen-ov15", hash: "ov15" },
        { title: "OV16 — Team Benchmark Heatmap", id: "screen-ov16", hash: "ov16" },
        { title: "OV17 — Executive PDF Report", id: "screen-ov17", hash: "ov17" },
        { title: "OV18 — Mobile Responsive Survey", id: "screen-ov18", hash: "ov18" },
        { title: "OV19 — Anonymity Shield Guarantee", id: "screen-ov19", hash: "ov19" },
      ],
    }
  }
  if (section.id === "flows") {
    return {
      ...section,
      items: [
        { title: "6.1 5-Question Weekly Pulse Flow", id: "flows", hash: "pulse-flow" },
        { title: "6.2 Anonymous Two-Way Dialogue", id: "flows", hash: "dialogue-flow" },
        { title: "6.3 19-Screen Inventory", id: "flows", hash: "inventory" },
      ],
    }
  }
  return section
})

export function getDocsNav(productId: ProductId = "minimal"): NavItem[] {
  switch (productId) {
    case "linear":
      return linearDocsNav
    case "miro":
      return miroDocsNav
    case "mixpanel":
      return mixpanelDocsNav
    case "frame":
      return frameDocsNav
    case "qolaba":
      return qolabaDocsNav
    case "brilliant":
      return brilliantDocsNav
    case "monday":
      return mondayDocsNav
    case "copyai":
      return copyaiDocsNav
    case "github":
      return githubDocsNav
    case "officevibe":
      return officevibeDocsNav
    case "minimal":
    default:
      return minimalDocsNav
  }
}

