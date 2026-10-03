import React, { useState } from "react"
import { ProductId, productsConfig } from "@/config/products"
import { Badge } from "@/components/ui/badge"
import { MapPin, Compass, Sparkles, CheckCircle2 } from "lucide-react"

interface UserJourneyMapViewProps {
  currentProduct?: ProductId
}

interface TouchpointNode {
  id: string
  x: number // SVG viewBox x (0 to 1000)
  y: number // SVG viewBox y (0 to 360)
  tagX: number
  tagY: number
  tagWidth: number
  tagHeight: number
  label: string
  type: "positive" | "friction" // blue (up) or green (down)
  direction: "up" | "down"
}

interface ProductJourneyDataset {
  takeaways: string[]
  nodes: TouchpointNode[]
  curvePath: string
  subStages: [string, string, string, string, string]
  delights: [string, string, string, string, string]
  opportunities: [string, string, string, string, string]
  userAvatars: string[][]
  satisfactionPct: number
  satisfactionFraction: string
  metrics: {
    label: string
    score: string
    barPct: number
  }[]
  totalRespondents: number
  satisfiedCount: number
  nonSatisfiedCount: number
}

// 1. EXACT REFERENCE DATASET (CLONING USER REFERENCE IMAGE 1:1)
const exactReferenceDataset: ProductJourneyDataset = {
  takeaways: ["Entice", "Enter", "Engage", "Exit", "Extend"],
  curvePath:
    "M 0 250 C 40 245, 60 235, 90 230 C 120 225, 140 215, 170 212 C 200 210, 230 208, 260 212 C 290 216, 310 226, 340 232 C 370 238, 390 238, 420 220 C 450 202, 480 182, 520 174 C 560 166, 600 168, 630 170 C 660 172, 690 190, 720 184 C 750 176, 780 155, 820 150 C 860 145, 890 185, 920 190 C 950 195, 980 212, 1000 212",
  nodes: [
    // ENTICE
    {
      id: "p1",
      x: 90,
      y: 230,
      tagX: 58,
      tagY: 175,
      tagWidth: 74,
      tagHeight: 28,
      label: "Informed\nby friend",
      type: "positive",
      direction: "up",
    },
    {
      id: "p2",
      x: 165,
      y: 213,
      tagX: 132,
      tagY: 145,
      tagWidth: 76,
      tagHeight: 28,
      label: "Informed\nby Admin",
      type: "positive",
      direction: "up",
    },
    // ENTER
    {
      id: "p3",
      x: 250,
      y: 212,
      tagX: 226,
      tagY: 135,
      tagWidth: 56,
      tagHeight: 24,
      label: "Install",
      type: "positive",
      direction: "up",
    },
    {
      id: "p4",
      x: 320,
      y: 228,
      tagX: 292,
      tagY: 160,
      tagWidth: 66,
      tagHeight: 28,
      label: "Invite by\nadmin",
      type: "positive",
      direction: "up",
    },
    {
      id: "p5",
      x: 395,
      y: 238,
      tagX: 355,
      tagY: 285,
      tagWidth: 84,
      tagHeight: 28,
      label: "To complicated\nfor sign up",
      type: "friction",
      direction: "down",
    },
    {
      id: "p6",
      x: 468,
      y: 198,
      tagX: 432,
      tagY: 250,
      tagWidth: 76,
      tagHeight: 28,
      label: "OTP often\nfailed",
      type: "friction",
      direction: "down",
    },
    // ENGAGE
    {
      id: "p7",
      x: 545,
      y: 172,
      tagX: 510,
      tagY: 90,
      tagWidth: 80,
      tagHeight: 28,
      label: "Enroll for\nmembersip",
      type: "positive",
      direction: "up",
    },
    {
      id: "p8",
      x: 635,
      y: 170,
      tagX: 600,
      tagY: 230,
      tagWidth: 78,
      tagHeight: 28,
      label: "Progress not\nrealtime",
      type: "friction",
      direction: "down",
    },
    {
      id: "p9",
      x: 715,
      y: 184,
      tagX: 682,
      tagY: 105,
      tagWidth: 72,
      tagHeight: 24,
      label: "Order Online",
      type: "positive",
      direction: "up",
    },
    // EXIT
    {
      id: "p10",
      x: 825,
      y: 150,
      tagX: 792,
      tagY: 80,
      tagWidth: 68,
      tagHeight: 24,
      label: "NPS Survey",
      type: "positive",
      direction: "up",
    },
    // EXTEND
    {
      id: "p11",
      x: 918,
      y: 190,
      tagX: 885,
      tagY: 115,
      tagWidth: 68,
      tagHeight: 24,
      label: "Trx History",
      type: "positive",
      direction: "up",
    },
    {
      id: "p12",
      x: 980,
      y: 212,
      tagX: 952,
      tagY: 145,
      tagWidth: 56,
      tagHeight: 24,
      label: "Receipt",
      type: "positive",
      direction: "up",
    },
  ],
  subStages: ["Discover", "Enrolment", "Learning", "achievement", "Extend"],
  delights: [
    "User should be able to see google reviews for this app",
    "A verry complicated sign up proccess. has multiple form and field to filled in.",
    "• I will be able to call grocery admin when I get trouble\n• I will be want to get doubt clearing throught chat support",
    "• Promo and reward\n• free shipping for nearest order",
    "• Discount for spesific item\n• special day promo",
  ],
  opportunities: [
    "send it via WA or other cloud platform should be good, because the user is limited just for sumbawa user.",
    "Registration and enrollment proccess needed to be simple and less complicated. Scan ID card should be good.",
    "Grochery admin should be standby when user get trouble with their order and shipping.",
    "• Give promo and reward for limited product\n• give free shiping when order location less than 3 KM",
    "Offers made to retain customers like discounts and other limited offers.",
  ],
  userAvatars: [
    [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80",
    ],
  ],
  satisfactionPct: 85,
  satisfactionFraction: "85/100 %",
  metrics: [
    { label: "Main feature", score: "40/55 Satisfied", barPct: 73 },
    { label: "Edge Cases", score: "22/55 Satisfied", barPct: 40 },
    { label: "User Journey", score: "47/55 Satisfied", barPct: 85 },
  ],
  totalRespondents: 55,
  satisfiedCount: 45,
  nonSatisfiedCount: 10,
}

// 2. PRODUCT DATASETS MAPPED TO THE SAME EXACT GEOMETRY
const productDatasets: Record<ProductId, ProductJourneyDataset> = {
  linear: {
    ...exactReferenceDataset,
    nodes: [
      { id: "p1", x: 130, y: 275, tagX: 95, tagY: 200, tagWidth: 78, tagHeight: 28, label: "Discovers on\nDev Twitter", type: "positive", direction: "up" },
      { id: "p2", x: 180, y: 263, tagX: 145, tagY: 175, tagWidth: 80, tagHeight: 28, label: "Recommended\nby Staff Eng", type: "positive", direction: "up" },
      { id: "p3", x: 245, y: 275, tagX: 215, tagY: 195, tagWidth: 75, tagHeight: 26, label: "Install App\n< 10s", type: "positive", direction: "up" },
      { id: "p4", x: 295, y: 285, tagX: 265, tagY: 215, tagWidth: 80, tagHeight: 28, label: "GitHub OAuth\nSync", type: "positive", direction: "up" },
      { id: "p5", x: 360, y: 290, tagX: 325, tagY: 330, tagWidth: 85, tagHeight: 30, label: "Unfamiliar\nVim shortcuts", type: "friction", direction: "down" },
      { id: "p6", x: 430, y: 245, tagX: 395, tagY: 290, tagWidth: 85, tagHeight: 30, label: "Messy legacy\nbacklog clutter", type: "friction", direction: "down" },
      { id: "p7", x: 505, y: 190, tagX: 470, tagY: 110, tagWidth: 85, tagHeight: 30, label: "Press 'C' opens\nissue in <2s", type: "positive", direction: "up" },
      { id: "p8", x: 600, y: 230, tagX: 565, tagY: 275, tagWidth: 85, tagHeight: 30, label: "Lost in board\ngroup filters", type: "friction", direction: "down" },
      { id: "p9", x: 715, y: 184, tagX: 675, tagY: 105, tagWidth: 85, tagHeight: 28, label: "Home-row 'S'\ntriage mastery", type: "positive", direction: "up" },
      { id: "p10", x: 825, y: 150, tagX: 785, tagY: 75, tagWidth: 85, tagHeight: 28, label: "PR Merge\nAuto-Closes", type: "positive", direction: "up" },
      { id: "p11", x: 918, y: 190, tagX: 880, tagY: 115, tagWidth: 85, tagHeight: 28, label: "Continuous\nCycle Rollover", type: "positive", direction: "up" },
      { id: "p12", x: 980, y: 212, tagX: 940, tagY: 140, tagWidth: 70, tagHeight: 26, label: "Zero-bloat\nFlow State", type: "positive", direction: "up" },
    ],
    takeaways: ["Speed First", "Keyboard Flow", "Git Automation", "Zero Clutter", "Continuous Cycles"],
    subStages: ["Discovery", "Workspace Setup", "Daily Execution", "PR Merge & Release", "Cycle Rollover"],
    delights: [
      "Sub-50ms landing page instant interaction without corporate marketing fluff.",
      "Instant GitHub OAuth linking with automated team directory mapping.",
      "• Press 'C' creates issues in <2s\n• Home-row keyboard arrow triage during daily standup",
      "• Git PR merge deterministically closes linked issues\n• Zero manual ticket management ceremony",
      "• Continuous 2-week cycle rollover without retrospectives\n• 90-day automatic stale issue archival",
    ],
    opportunities: [
      "Provide 1-click interactive playground sandbox without requiring authentication.",
      "Add automated preset templates for Kanban vs Continuous rolling cadences.",
      "Expand command-line CLI terminal hooks for power engineering users.",
      "Auto-generate Markdown changelog release notes directly from completed cycles.",
      "AI cycle velocity forecasting based on historical completion velocity trends.",
    ],
    satisfactionPct: 91,
    satisfactionFraction: "91/100 %",
    metrics: [
      { label: "Sub-50ms Speed", score: "48/50 Satisfied", barPct: 96 },
      { label: "Keyboard Shortcuts", score: "45/50 Satisfied", barPct: 90 },
      { label: "Git Automation", score: "47/50 Satisfied", barPct: 94 },
    ],
    totalRespondents: 50,
    satisfiedCount: 46,
    nonSatisfiedCount: 4,
  },
  mixpanel: {
    ...exactReferenceDataset,
    nodes: [
      { id: "p1", x: 130, y: 275, tagX: 95, tagY: 200, tagWidth: 78, tagHeight: 28, label: "Ad-hoc SQL\nbacklog pain", type: "positive", direction: "up" },
      { id: "p2", x: 180, y: 263, tagX: 145, tagY: 175, tagWidth: 80, tagHeight: 28, label: "Executive\ndata mandate", type: "positive", direction: "up" },
      { id: "p3", x: 245, y: 275, tagX: 215, tagY: 195, tagWidth: 75, tagHeight: 26, label: "Connect SDK\n& Warehouse", type: "positive", direction: "up" },
      { id: "p4", x: 295, y: 285, tagX: 265, tagY: 215, tagWidth: 80, tagHeight: 28, label: "Select initial\nkpi metrics", type: "positive", direction: "up" },
      { id: "p5", x: 360, y: 290, tagX: 325, tagY: 330, tagWidth: 85, tagHeight: 30, label: "Messy duplicate\nevent schemas", type: "friction", direction: "down" },
      { id: "p6", x: 430, y: 245, tagX: 395, tagY: 290, tagWidth: 85, tagHeight: 30, label: "Unformatted\ntracking calls", type: "friction", direction: "down" },
      { id: "p7", x: 505, y: 190, tagX: 470, tagY: 110, tagWidth: 85, tagHeight: 30, label: "Build 5-step\nfunnel report", type: "positive", direction: "up" },
      { id: "p8", x: 600, y: 230, tagX: 565, tagY: 275, tagWidth: 85, tagHeight: 30, label: "Unexplained\nstep 3 drop-off", type: "friction", direction: "down" },
      { id: "p9", x: 715, y: 184, tagX: 675, tagY: 105, tagWidth: 85, tagHeight: 28, label: "Session Replay\nreveals bug", type: "positive", direction: "up" },
      { id: "p10", x: 825, y: 150, tagX: 785, tagY: 75, tagWidth: 85, tagHeight: 28, label: "Spark AI\nInsight Digest", type: "positive", direction: "up" },
      { id: "p11", x: 918, y: 190, tagX: 880, tagY: 115, tagWidth: 85, tagHeight: 28, label: "Slack Alert\nLive KPI Sync", type: "positive", direction: "up" },
      { id: "p12", x: 980, y: 212, tagX: 940, tagY: 140, tagWidth: 70, tagHeight: 26, label: "Cohort Retention\nForecast", type: "positive", direction: "up" },
    ],
    takeaways: ["Product Intelligence", "Spark AI Insights", "Session Replay", "Experiments & Flags", "Warehouse Connect"],
    subStages: ["Event Ingestion", "Lexicon Governance", "Funnels & Replay", "A/B Experiments", "AI Executive Digest"],
    delights: [
      "Sub-second behavioral insights over billions of events without engineering SQL dependencies.",
      "Clean unified lexicon dictionary with merged duplicate event schemas.",
      "• Visual 5-step conversion funnels tied directly to session replays\n• Instant root-cause explanation via Spark AI",
      "• Native multivariate experiments and feature flag rollouts in a single click\n• Slack anomaly alerts",
      "• Executive retention heatmaps and warehouse native sync (Snowflake, BigQuery)\n• Predictive churn models",
    ],
    opportunities: [
      "Automated event schema validator to block unformatted instrumentation in CI/CD.",
      "Natural language prompt to instant multi-touch attribution reports.",
      "Live user session replay linked directly to drop-off funnel friction points.",
      "Automated executive weekly summaries with top 3 KPI movers highlighted.",
      "Cross-device user ID unification wizard with deterministic identity graph rules.",
    ],
    satisfactionPct: 88,
    satisfactionFraction: "88/100 %",
    metrics: [
      { label: "Spark AI Insight Speed", score: "42/45 Satisfied", barPct: 93 },
      { label: "Session Replay & Funnels", score: "41/45 Satisfied", barPct: 91 },
      { label: "Experiments & Flags", score: "39/45 Satisfied", barPct: 86 },
    ],
    totalRespondents: 45,
    satisfiedCount: 40,
    nonSatisfiedCount: 5,
  },
  frame: {
    ...exactReferenceDataset,
    nodes: [
      { id: "p1", x: 130, y: 275, tagX: 95, tagY: 200, tagWidth: 78, tagHeight: 28, label: "#1 Product\nof the Day", type: "positive", direction: "up" },
      { id: "p2", x: 180, y: 263, tagX: 145, tagY: 175, tagWidth: 80, tagHeight: 28, label: "Recommended\nby founder", type: "positive", direction: "up" },
      { id: "p3", x: 245, y: 275, tagX: 215, tagY: 195, tagWidth: 75, tagHeight: 26, label: "Workspace\nSetup in 1-Click", type: "positive", direction: "up" },
      { id: "p4", x: 295, y: 285, tagX: 265, tagY: 215, tagWidth: 80, tagHeight: 28, label: "Import Notion\n& Asana data", type: "positive", direction: "up" },
      { id: "p5", x: 360, y: 290, tagX: 325, tagY: 330, tagWidth: 85, tagHeight: 30, label: "Fragmented\nguest permissions", type: "friction", direction: "down" },
      { id: "p6", x: 430, y: 245, tagX: 395, tagY: 290, tagWidth: 85, tagHeight: 30, label: "Lost context\nin Slack threads", type: "friction", direction: "down" },
      { id: "p7", x: 505, y: 190, tagX: 470, tagY: 110, tagWidth: 85, tagHeight: 30, label: "Type '@' to link\ntask in doc", type: "positive", direction: "up" },
      { id: "p8", x: 600, y: 230, tagX: 565, tagY: 275, tagWidth: 85, tagHeight: 30, label: "Overlapping\ncanvas frames", type: "friction", direction: "down" },
      { id: "p9", x: 715, y: 184, tagX: 675, tagY: 105, tagWidth: 85, tagHeight: 28, label: "Sub-50ms CMD+K\nOmni-Search", type: "positive", direction: "up" },
      { id: "p10", x: 825, y: 150, tagX: 785, tagY: 75, tagWidth: 85, tagHeight: 28, label: "Live Multiplayer\nAudio Huddle", type: "positive", direction: "up" },
      { id: "p11", x: 918, y: 190, tagX: 880, tagY: 115, tagWidth: 85, tagHeight: 28, label: "Consolidated\n4 SaaS tools", type: "positive", direction: "up" },
      { id: "p12", x: 980, y: 212, tagX: 940, tagY: 140, tagWidth: 70, tagHeight: 26, label: "Connected OS\nKnowledge Hub", type: "positive", direction: "up" },
    ],
    takeaways: ["Unified OS", "CMD+K Search", "Doc-to-Task", "Infinite Canvas", "Multiplayer Presence"],
    subStages: ["Workspace Hub", "Document Drafting", "Task Linking", "Team Review", "Knowledge Base"],
    delights: [
      "Single tab replaces Notion, Trello, Miro, and Slack note fragmentation.",
      "Instant rich-text editing with nested toggle headers and live Figma embeds.",
      "• Inline task conversion from bullet points in one keystroke\n• Multiplayer live avatars with audio huddle",
      "• Sub-50ms global CMD+K search finding any note or task across the company\n• Instant status update",
      "• Bi-directional graph view showing connected workspace knowledge\n• Archive management",
    ],
    opportunities: [
      "Offline sync support for continuous editing during flight travel.",
      "Export entire workspace hierarchies to Markdown / PDF packages with one click.",
      "Role-based granular guest permissioning for external agency contractors.",
      "Voice memo AI transcription into structured bulleted task cards.",
      "Automated weekly team activity digests highlighting completed milestones.",
    ],
    satisfactionPct: 90,
    satisfactionFraction: "90/100 %",
    metrics: [
      { label: "Multi-Tool Unification", score: "44/48 Satisfied", barPct: 92 },
      { label: "CMD+K Search Speed", score: "46/48 Satisfied", barPct: 96 },
      { label: "Doc-Task Sync", score: "42/48 Satisfied", barPct: 87 },
    ],
    totalRespondents: 48,
    satisfiedCount: 43,
    nonSatisfiedCount: 5,
  },
  miro: {
    ...exactReferenceDataset,
    nodes: [
      { id: "p1", x: 130, y: 275, tagX: 95, tagY: 200, tagWidth: 78, tagHeight: 28, label: "Guest link in\ncalendar invite", type: "positive", direction: "up" },
      { id: "p2", x: 180, y: 263, tagX: 145, tagY: 175, tagWidth: 80, tagHeight: 28, label: "Design sprint\nkickoff alert", type: "positive", direction: "up" },
      { id: "p3", x: 245, y: 275, tagX: 215, tagY: 195, tagWidth: 75, tagHeight: 26, label: "Instant WebGL\nCanvas load", type: "positive", direction: "up" },
      { id: "p4", x: 295, y: 285, tagX: 265, tagY: 215, tagWidth: 80, tagHeight: 28, label: "Select Sprint\nRetro template", type: "positive", direction: "up" },
      { id: "p5", x: 360, y: 290, tagX: 325, tagY: 330, tagWidth: 85, tagHeight: 30, label: "Accidental pan\naway from frame", type: "friction", direction: "down" },
      { id: "p6", x: 430, y: 245, tagX: 395, tagY: 290, tagWidth: 85, tagHeight: 30, label: "Visual clutter\n100+ stickies", type: "friction", direction: "down" },
      { id: "p7", x: 505, y: 190, tagX: 470, tagY: 110, tagWidth: 85, tagHeight: 30, label: "'Bring to Me'\nfocuses room", type: "positive", direction: "up" },
      { id: "p8", x: 600, y: 230, tagX: 565, tagY: 275, tagWidth: 85, tagHeight: 30, label: "Unsorted messy\nbrainstorm wall", type: "friction", direction: "down" },
      { id: "p9", x: 715, y: 184, tagX: 675, tagY: 105, tagWidth: 85, tagHeight: 28, label: "Auto-cluster\nstickies by tag", type: "positive", direction: "up" },
      { id: "p10", x: 825, y: 150, tagX: 785, tagY: 75, tagWidth: 85, tagHeight: 28, label: "5-min Dot Voting\nwith Timer", type: "positive", direction: "up" },
      { id: "p11", x: 918, y: 190, tagX: 880, tagY: 115, tagWidth: 85, tagHeight: 28, label: "Export frames\nto Jira Epics", type: "positive", direction: "up" },
      { id: "p12", x: 980, y: 212, tagX: 940, tagY: 140, tagWidth: 70, tagHeight: 26, label: "Retrospective\nsign-off & deck", type: "positive", direction: "up" },
    ],
    takeaways: ["Infinite Canvas", "Hardware WebGL", "Sticky Clustering", "Live Cursors", "Spatial Frames"],
    subStages: ["Template Setup", "Sprint Kickoff", "Idea Generation", "Synthesis & Voting", "Export & Handoff"],
    delights: [
      "Infinite 60fps pan-and-zoom without viewport clipping or memory lag.",
      "Pre-built design sprint and retrospective templates ready with one click.",
      "• Auto-layout sticky note clustering by color and tag\n• Dot voting widget with countdown timer",
      "• 60fps multiplayer cursor tracks with customizable participant names\n• Live presentation mode",
      "• High-resolution vector export of selected frames for executive decks\n• Jira ticket sync",
    ],
    opportunities: [
      "Reduced CPU overhead when boards exceed 5,000 vector shapes.",
      "Smart connector magnetic snapping to irregular UI component boundaries.",
      "Live bidirectional sync between Miro wireframes and Figma vector components.",
      "AI thematic cluster summarization turning 100 stickies into 3 key insights.",
      "Presenter spotlight lockdown preventing participants from wandering during reviews.",
    ],
    satisfactionPct: 89,
    satisfactionFraction: "89/100 %",
    metrics: [
      { label: "Canvas Performance", score: "45/52 Satisfied", barPct: 86 },
      { label: "Sticky Note Clustering", score: "48/52 Satisfied", barPct: 92 },
      { label: "Real-time Cursors", score: "49/52 Satisfied", barPct: 94 },
    ],
    totalRespondents: 52,
    satisfiedCount: 47,
    nonSatisfiedCount: 5,
  },
  minimal: {
    ...exactReferenceDataset,
    nodes: [
      { id: "p1", x: 130, y: 275, tagX: 95, tagY: 200, tagWidth: 78, tagHeight: 28, label: "Discovered on\nReact Ecosystem", type: "positive", direction: "up" },
      { id: "p2", x: 180, y: 263, tagX: 145, tagY: 175, tagWidth: 80, tagHeight: 28, label: "Figma Community\nLTS release", type: "positive", direction: "up" },
      { id: "p3", x: 245, y: 275, tagX: 215, tagY: 195, tagWidth: 75, tagHeight: 26, label: "Clone Repo\n& Figma Kit", type: "positive", direction: "up" },
      { id: "p4", x: 295, y: 285, tagX: 265, tagY: 215, tagWidth: 80, tagHeight: 28, label: "Review 6 core\ndashboards", type: "positive", direction: "up" },
      { id: "p5", x: 360, y: 290, tagX: 325, tagY: 330, tagWidth: 85, tagHeight: 30, label: "Dense data\nmodel layout", type: "friction", direction: "down" },
      { id: "p6", x: 430, y: 245, tagX: 395, tagY: 290, tagWidth: 85, tagHeight: 30, label: "Legacy ERP\nspreadsheet bloat", type: "friction", direction: "down" },
      { id: "p7", x: 505, y: 190, tagX: 470, tagY: 110, tagWidth: 85, tagHeight: 30, label: "Deploy Treasury\n& Cash Cockpit", type: "positive", direction: "up" },
      { id: "p8", x: 600, y: 230, tagX: 565, tagY: 275, tagWidth: 85, tagHeight: 30, label: "Fear of wrong\nwire transfer", type: "friction", direction: "down" },
      { id: "p9", x: 715, y: 184, tagX: 675, tagY: 105, tagWidth: 85, tagHeight: 28, label: "Tactile slider\nconfirms wire", type: "positive", direction: "up" },
      { id: "p10", x: 825, y: 150, tagX: 785, tagY: 75, tagWidth: 85, tagHeight: 28, label: "Immutable PDF\nAudit Slip", type: "positive", direction: "up" },
      { id: "p11", x: 918, y: 190, tagX: 880, tagY: 115, tagWidth: 85, tagHeight: 28, label: "Dual Dark/Light\nTheme sync", type: "positive", direction: "up" },
      { id: "p12", x: 980, y: 212, tagX: 940, tagY: 140, tagWidth: 70, tagHeight: 26, label: "100% WCAG AA\nEnterprise Pass", type: "positive", direction: "up" },
    ],
    takeaways: ["Treasury Ledger", "Dual Rail Nav", "Tactile Sliders", "OKLCH Tokens", "Instant Reconcile"],
    subStages: ["Treasury Audit", "Beneficiary Selection", "Amount Slider", "Ledger Sync", "Audit Reconcile"],
    delights: [
      "Single consolidated liquidity overview across 14 multi-currency subsidiaries.",
      "Visual beneficiary avatars preventing misrouted wires between similar corporate entities.",
      "• Physical-resistance tactile wire confirmation slider\n• Real-time interbank fee breakdown",
      "• Sub-200ms optimistic ledger UI with cryptographic SHA-256 confirmation slip\n• Instant receipt",
      "• Elimination of end-of-month manual reconciliation spreadsheets\n• Direct SAP / NetSuite bridge",
    ],
    opportunities: [
      "Live FX rate fluctuation hedging alert prior to large cross-border payouts.",
      "Multi-signatory approval workflow for wires exceeding $1,000,000 USD.",
      "Automated biometric confirmation fallback for mobile treasury officers.",
      "AI predictive corporate burn rate modeling and treasury forecasting.",
      "Customizable dashboard KPI widget layout with persistent profile sync.",
    ],
    satisfactionPct: 86,
    satisfactionFraction: "86/100 %",
    metrics: [
      { label: "Dashboard Clarity", score: "38/44 Satisfied", barPct: 86 },
      { label: "Tactile Slider Safety", score: "42/44 Satisfied", barPct: 95 },
      { label: "Audit Slip Generation", score: "39/44 Satisfied", barPct: 89 },
    ],
    totalRespondents: 44,
    satisfiedCount: 38,
    nonSatisfiedCount: 6,
  },
}

export function UserJourneyMapView({ currentProduct = "linear" }: UserJourneyMapViewProps) {
  const [dataMode, setDataMode] = useState<"product" | "reference">("product")
  const productConfig = productsConfig[currentProduct] || productsConfig.linear
  const dataset = dataMode === "reference" ? exactReferenceDataset : (productDatasets[currentProduct] || exactReferenceDataset)

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* 1. Header Banner matching reference image: 📍 Define + USER JOURNEY MAP + Point Take away */}
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <span className="text-red-500 text-base">📍</span>
            <span>Define</span>
          </div>
          <h1 className="figma-h1 text-[40px] leading-[50px] lg:text-[64px] lg:leading-[80px] font-extrabold tracking-tight text-foreground uppercase">
            USER JOURNEY MAP
          </h1>
          <p className="text-xs text-muted-foreground max-w-xl pt-1">
            End-to-end emotional trajectory and touchpoint analysis across the 5 lifecycle phases: Entice, Enter, Engage, Exit, and Extend.
          </p>
        </div>

        {/* Top-Right: Point Take away Box matching reference image */}
        <div className="flex flex-col items-end gap-3 shrink-0">
          <div className="p-4 rounded-2xl border border-border bg-card min-w-[220px] text-xs space-y-2">
            <span className="font-bold text-foreground text-xs block">
              Point Take away
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-muted-foreground">
              {dataset.takeaways.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1.5 truncate">
                  <span className="text-emerald-500 text-xs font-black">•</span>
                  <span className="truncate">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Toggle between Product Dataset and Exact Image Reference Dataset */}
          <div className="flex items-center bg-muted p-1 rounded-xl border border-border text-xs font-bold">
            <button
              onClick={() => setDataMode("product")}
              className={`figma-btn-md h-9 min-h-[36px] px-3.5 py-[6px] rounded-[8px] transition-all cursor-pointer ${
                dataMode === "product"
                  ? "bg-card text-foreground font-black shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {productConfig.name} Journey
            </button>
            <button
              onClick={() => setDataMode("reference")}
              className={`figma-btn-md h-9 min-h-[36px] px-3.5 py-[6px] rounded-[8px] transition-all cursor-pointer ${
                dataMode === "reference"
                  ? "bg-card text-foreground font-black shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Reference Image Copy
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Master Table Structure with Green Touch Points Tab & 5 Columns */}
      <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-md">
        {/* Top 5 Column Header Bar */}
        <div className="grid grid-cols-12 border-b border-border bg-card text-xs font-black uppercase tracking-wider">
          {/* Empty corner aligned with left vertical sidebar */}
          <div className="col-span-2 sm:col-span-1 p-3 border-r border-border bg-card" />
          {/* 5 Column Titles */}
          <div className="col-span-10 sm:col-span-11 grid grid-cols-5 divide-x divide-border text-center">
            <div className="py-3 px-2 font-black text-xs sm:text-sm text-foreground tracking-widest">ENTICE</div>
            <div className="py-3 px-2 font-black text-xs sm:text-sm text-foreground tracking-widest">ENTER</div>
            <div className="py-3 px-2 font-black text-xs sm:text-sm text-foreground tracking-widest">ENGAGE</div>
            <div className="py-3 px-2 font-black text-xs sm:text-sm text-foreground tracking-widest">EXIT</div>
            <div className="py-3 px-2 font-black text-xs sm:text-sm text-foreground tracking-widest">ENTEND</div>
          </div>
        </div>

        {/* The Graphic Canvas Row with TOUCH POINTS vertical green badge */}
        <div className="grid grid-cols-12 min-h-[380px] bg-card relative border-b border-border">
          {/* Left Vertical Green TOUCH POINTS Tab */}
          <div className="col-span-2 sm:col-span-1 border-r border-border bg-card flex items-center justify-start p-0 overflow-visible relative select-none">
            <div className="absolute left-0 w-10 h-36 bg-[#00AB55] rounded-r-2xl flex items-center justify-center shadow-md z-10">
              <span className="rotate-[-90deg] whitespace-nowrap text-white font-black text-xs sm:text-sm tracking-widest uppercase select-none drop-shadow-xs">
                TOUCH POINTS
              </span>
            </div>
          </div>

          {/* Main 5-Column SVG Wave Chart Area */}
          <div className="col-span-10 sm:col-span-11 relative min-h-[380px]">
            {/* Background 5 Column Dividing Lines */}
            <div className="absolute inset-0 grid grid-cols-5 divide-x divide-border/40 pointer-events-none">
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>

            {/* SVG Graphic Wave with Glowing Green Gradient and Interactive Connectors */}
            <svg
              viewBox="0 0 1000 360"
              className="absolute inset-0 w-full h-full overflow-visible select-none"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Emerald Green Area Glow Gradient beneath the wave */}
                <linearGradient id="greenAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.32" />
                  <stop offset="60%" stopColor="#059669" stopOpacity="0.10" />
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.0" />
                </linearGradient>

                {/* Drop shadow / glow filter for the green wave */}
                <filter id="waveGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Shaded Area Beneath the Wave */}
              <path
                d={`${dataset.curvePath} L 1000 360 L 0 360 Z`}
                fill="url(#greenAreaGradient)"
              />

              {/* The Thick Glowing Green Curve */}
              <path
                d={dataset.curvePath}
                fill="none"
                stroke="#10B981"
                strokeWidth="4.5"
                strokeLinecap="round"
                filter="url(#waveGlow)"
              />

              {/* Dashed Connector Lines from Nodes to Speech Bubbles (Green / Cyan, Zero Yellow) */}
              {dataset.nodes.map((n) => {
                const strokeColor = n.type === "positive" ? "#0284C7" : "#10B981"
                const targetY = n.direction === "up" ? n.tagY + n.tagHeight : n.tagY
                return (
                  <line
                    key={`line-${n.id}`}
                    x1={n.x}
                    y1={n.y}
                    x2={n.x}
                    y2={targetY}
                    stroke={strokeColor}
                    strokeWidth="1.6"
                    strokeDasharray="4,4"
                  />
                )
              })}

              {/* Callout Speech Bubble Cards with Green Accent Border */}
              {dataset.nodes.map((n) => {
                const lines = n.label.split("\n")
                return (
                  <g key={`bubble-${n.id}`}>
                    <rect
                      x={n.tagX}
                      y={n.tagY}
                      width={n.tagWidth}
                      height={n.tagHeight}
                      rx="6"
                      className="fill-card stroke-emerald-500/30"
                      strokeWidth="1.2"
                    />
                    {lines.map((l, lIdx) => (
                      <text
                        key={lIdx}
                        x={n.tagX + n.tagWidth / 2}
                        y={n.tagY + (lines.length === 1 ? 16 : 11 + lIdx * 11)}
                        className="fill-foreground text-[10px] font-bold"
                        textAnchor="middle"
                        style={{ fontFamily: "inherit" }}
                      >
                        {l}
                      </text>
                    ))}
                  </g>
                )
              })}

              {/* Nodes on the Wave Line (Emerald Green, Zero Yellow) */}
              {dataset.nodes.map((n) => {
                const ringColor = n.type === "positive" ? "#0284C7" : "#10B981"
                return (
                  <g key={`node-${n.id}`}>
                    {/* Outer ring */}
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r="6.5"
                      fill={ringColor}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    {/* Inner White Core */}
                    <circle cx={n.x} cy={n.y} r="2" fill="#FFFFFF" />
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        {/* Sub-Stage Indicator Row (Discover, Enrolment, Learning, achievement, Extend) */}
        <div className="grid grid-cols-12 border-b border-border bg-card text-xs">
          <div className="col-span-2 sm:col-span-1 p-2 border-r border-border" />
          <div className="col-span-10 sm:col-span-11 grid grid-cols-5 divide-x divide-border text-center font-bold text-muted-foreground">
            {dataset.subStages.map((s, idx) => (
              <div key={idx} className="py-2.5 px-2 text-xs capitalize text-foreground">
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* DELIGHTS Row */}
        <div className="grid grid-cols-12 border-b border-border text-xs">
          <div className="col-span-2 sm:col-span-1 p-2 border-r border-border bg-card flex items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black tracking-widest text-foreground uppercase">
              DELIGHTS
            </span>
          </div>
          <div className="col-span-10 sm:col-span-11 grid grid-cols-5 divide-x divide-border bg-card">
            {dataset.delights.map((d, idx) => (
              <div key={idx} className="p-3 text-[11px] text-muted-foreground leading-relaxed whitespace-pre-line">
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* OPPORTUNITIES Row */}
        <div className="grid grid-cols-12 border-b border-border text-xs">
          <div className="col-span-2 sm:col-span-1 p-2 border-r border-border bg-card flex items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              OPPORTUNITIES
            </span>
          </div>
          <div className="col-span-10 sm:col-span-11 grid grid-cols-5 divide-x divide-border bg-card">
            {dataset.opportunities.map((o, idx) => (
              <div key={idx} className="p-3 text-[11px] text-foreground/90 font-medium leading-relaxed whitespace-pre-line">
                {o}
              </div>
            ))}
          </div>
        </div>

        {/* USERS Row with Capsule Avatars */}
        <div className="grid grid-cols-12 border-b border-border text-xs">
          <div className="col-span-2 sm:col-span-1 p-2 border-r border-border bg-card flex items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black tracking-widest text-foreground uppercase">
              USERS
            </span>
          </div>
          <div className="col-span-10 sm:col-span-11 grid grid-cols-5 divide-x divide-border bg-card">
            {dataset.userAvatars.map((avatars, idx) => (
              <div key={idx} className="p-3 flex items-center gap-1">
                <div className="flex items-center -space-x-2 bg-muted p-1 rounded-full border border-border">
                  {avatars.map((url, aIdx) => (
                    <img
                      key={aIdx}
                      src={url}
                      alt="User avatar"
                      className="size-6 rounded-full border-2 border-card object-cover"
                    />
                  ))}
                  {idx === 2 && (
                    <span className="text-[10px] font-bold text-muted-foreground pl-2 pr-1 font-mono">
                      +3
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUMMARY Row matching reference image — Clean layout with ZERO overlap */}
        <div className="grid grid-cols-12 text-xs bg-card">
          <div className="col-span-2 sm:col-span-1 p-2 border-r border-border bg-card flex items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black tracking-widest text-foreground uppercase">
              SUMMARY
            </span>
          </div>
          <div className="col-span-10 sm:col-span-11 p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card">
            {/* Box 1: Satisfaction Range (Circular Donut Ring Gauge with Spacious Typography) */}
            <div className="lg:col-span-4 flex items-center gap-5">
              <div className="relative size-28 shrink-0 flex items-center justify-center">
                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-muted/30"
                    strokeWidth="3.6"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-emerald-500"
                    strokeDasharray={`${dataset.satisfactionPct}, 100`}
                    strokeLinecap="round"
                    strokeWidth="3.6"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                  <span className="text-sm font-black text-foreground leading-none">
                    {dataset.satisfactionFraction}
                  </span>
                  <span className="text-[9px] text-muted-foreground font-bold tracking-wider mt-1">
                    Satisfied
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-foreground block">
                  Satisfaction Range
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold block">
                  High Valence
                </span>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Overall user sentiment across lifecycle touchpoints.
                </p>
              </div>
            </div>

            {/* Box 2: Satisfaction Percentage (3 Line Metrics) */}
            <div className="lg:col-span-4 space-y-2.5 border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-6">
              <span className="text-xs font-bold text-foreground block">
                Satisfaction Percentage
              </span>
              <div className="space-y-2 text-xs">
                {dataset.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-3 text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1 w-3 bg-emerald-500 rounded-full inline-block" />
                      <span className="text-muted-foreground">{m.label}</span>
                    </div>
                    <span className="font-bold text-foreground font-mono">{m.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 3: Total Respondent Progress Bar */}
            <div className="lg:col-span-4 space-y-2.5 border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-6">
              <span className="text-xs font-bold text-foreground block">
                Total respondent
              </span>
              <div className="text-sm font-black text-foreground">
                {dataset.totalRespondents} <span className="text-xs font-normal text-muted-foreground">Total</span>
              </div>

              {/* Progress Split Bar */}
              <div className="h-2 rounded-full bg-muted overflow-hidden flex">
                <div
                  className="bg-emerald-500 h-full"
                  style={{
                    width: `${(dataset.satisfiedCount / dataset.totalRespondents) * 100}%`,
                  }}
                />
                <div
                  className="bg-red-400 h-full"
                  style={{
                    width: `${(dataset.nonSatisfiedCount / dataset.totalRespondents) * 100}%`,
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] text-muted-foreground font-medium">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Satisfied <span className="font-bold text-foreground">{dataset.satisfiedCount} users</span>
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-red-400" />
                  Non Satisfied <span className="font-bold text-foreground">{dataset.nonSatisfiedCount} users</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
