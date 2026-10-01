import { ScreenData } from "./screensData"

export const miroScreensData: ScreenData[] = [
  {
    id: "M01",
    name: "Board Layout Architecture",
    platform: "Desktop",
    priority: "P0",
    status: "Approved",
    flow: "Canvas Framework Visualization",
    summary:
      "Horizontal auto-layout logic for dynamic resizing of diagram nodes and nested frames, preserving spatial hierarchy on an infinite canvas.",
    userGoal:
      "I want to map out complex architectures where boxes automatically expand and rearrange as I type or add nested elements without manual nudging.",
    image: "/images/miro/Auto Layout Horizontal.png",
    alt: "Miro auto-layout structure displaying horizontal node alignment on the infinite canvas",
    states: [
      { key: "default", label: "Default Layout", image: "/images/miro/Auto Layout Horizontal.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 50,
        y: 45,
        element: "Auto-Layout Parent Container",
        does: "Automatically distributes child nodes evenly along the horizontal axis, adjusting spacing on content overflow.",
        why: "Prevents canvas clutter and eliminates the manual repositioning overhead that plagues free-form whiteboarding.",
        evidence: ["E1", "E3"],
      },
      {
        n: 2,
        x: 75,
        y: 50,
        element: "Spacing Guidelines",
        does: "Renders transient CSS grid-like guides revealing exact pixel distances between neighboring sibling elements.",
        why: "Provides immediate visual feedback to maintain design system rigor even in unstructured brainstorming.",
        evidence: ["E4"],
      }
    ],
    entry: ["Create new frame", "Select auto-layout"],
    exit: ["Add node to frame", "Change layout direction"],
    primaryAction: "Add Child Node",
    secondaryActions: ["Toggle Direction", "Adjust Padding"],
    responsive: "Canvas scales infinitely, tools anchor to edges.",
    accessibility: ["Arrow key traversal between siblings"],
    analytics: [
      { event: "board_layout_changed", trigger: "User modifies layout direction" }
    ],
    beforeAfter: {
      beforeMetric: "45s manual manipulation",
      afterMetric: "4.2s auto-layout",
      metricDelta: "-90% time",
      explanation: "Auto-layout eliminates manual nudging for clean workshop architectures."
    }
  },
  {
    id: "M02",
    name: "Template & Frame Initialization",
    platform: "Desktop",
    priority: "P1",
    status: "Approved",
    flow: "Canvas Initialization",
    summary:
      "Initial blank state canvas featuring the central object toolbar and frame-based compartmentalization for structuring workshop spaces.",
    userGoal:
      "I want to start a new collaborative session by dropping in pre-built workshop frames and navigating around the infinite canvas effortlessly.",
    image: "/images/miro/Frame 1.png",
    alt: "Miro frame initialization on an empty canvas with zoom controls and presentation scaffolding",
    states: [
      { key: "default", label: "Initial Frame", image: "/images/miro/Frame 1.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 20,
        y: 20,
        element: "Frame Boundary Handle",
        does: "Acts as a clipping mask and presentation slide container that can be dynamically resized and exported as a discrete asset.",
        why: "Groups free-floating sticky notes into logical, exportable units (like PDF slides) without restricting horizontal expansion.",
        evidence: ["E2", "E3"],
      }
    ],
    entry: ["Create new board"],
    exit: ["Drop template", "Draw frame"],
    primaryAction: "Draw Frame",
    secondaryActions: ["Rename Frame", "Export Frame"],
    responsive: "Frames render as discrete bounding boxes in DOM overlay.",
    accessibility: ["Focus shifts to frame content", "Screen reader announces frame boundaries"],
    analytics: [
      { event: "frame_created", trigger: "User draws a new frame" }
    ]
  },
  {
    id: "M03",
    name: "Multi-Object Grouping",
    platform: "Desktop",
    priority: "P1",
    status: "Approved",
    flow: "Object Manipulation",
    summary:
      "Deep structural grouping of heterogeneous vector objects (text, shapes, connections) acting as a single interactive entity.",
    userGoal:
      "I want to select dozens of sticky notes and arrows, group them, and drag them across the canvas without breaking their relative connections.",
    image: "/images/miro/Group 2.png",
    alt: "Selected object group in Miro canvas",
    states: [
      { key: "default", label: "Group Selected", image: "/images/miro/Group 2.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 50,
        y: 50,
        element: "Bounding Box Overlap",
        does: "Aggregates the total bounding volume of all selected items and renders a unified drag handle and context menu.",
        why: "Simplifies bulk operations (change color, lock, align) across diverse object types simultaneously.",
        evidence: ["E1", "E2"],
      }
    ],
    entry: ["Lasso select multiple items"],
    exit: ["Group items (Cmd+G)"],
    primaryAction: "Group Selection",
    secondaryActions: ["Align Selected", "Distribute Evenly"],
    responsive: "Bounding box recalculates precisely on resize.",
    accessibility: ["Group announced as combined element"],
    analytics: [
      { event: "objects_grouped", trigger: "User presses Cmd+G on selection" }
    ]
  },
  {
    id: "M04",
    name: "Canvas Toolbar & Interactions",
    platform: "Desktop",
    priority: "P0",
    status: "Approved",
    flow: "Core Tooling",
    summary:
      "The primary interaction palette governing cursor state (select, hand, text, sticky note, shape, connection line) anchored to the viewport edge.",
    userGoal:
      "I want instant access to my most-used ideation tools (stickies and shapes) so I can capture thoughts as fast as I can type.",
    image: "/images/miro/Miro 17.png",
    alt: "Primary vertical toolbar on the left side of the Miro interface",
    states: [
      { key: "default", label: "Toolbar Default", image: "/images/miro/Miro 17.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 10,
        y: 40,
        element: "Sticky Note Tool",
        does: "Spawns a color-palette popover on hover, allowing 1-click deployment of a specific colored note.",
        why: "Reduces time-to-first-note to under 1 second, critical for fast-paced brainstorming workshops.",
        evidence: ["E1", "E4"],
      },
      {
        n: 2,
        x: 10,
        y: 60,
        element: "Connection Line Tool",
        does: "Forces the cursor into routing mode, highlighting snap-points on all shapes to draw orthogonal or curved bezier links.",
        why: "Visualizing dependencies is the core value proposition of diagramming; this must be perfectly frictionless.",
        evidence: ["E3", "E5"],
      }
    ],
    entry: ["Load board workspace"],
    exit: ["Select tool"],
    primaryAction: "Select Tool",
    secondaryActions: ["Open More Tools"],
    responsive: "Toolbar collapses to icon-only on smaller viewports.",
    accessibility: ["Toolbar acts as aria-menubar", "Keyboard shortcuts for all tools"],
    analytics: [
      { event: "tool_selected", trigger: "User clicks a tool icon" }
    ],
    beforeAfter: {
      beforeMetric: "3.8s to first shape",
      afterMetric: "0.8s to first shape",
      metricDelta: "-3s latency",
      explanation: "Keyboard shortcuts bypass toolbar entirely for advanced users."
    }
  },
  {
    id: "M05",
    name: "Contextual Object Menu",
    platform: "Desktop",
    priority: "P1",
    status: "Approved",
    flow: "Object Styling",
    summary:
      "Floating popover menu that appears immediately above a selected object, offering localized styling and typographic controls.",
    userGoal:
      "I want to change the color and font size of my sticky note without looking away from the object I'm currently editing.",
    image: "/images/miro/Miro 18.png",
    alt: "Floating contextual menu above a selected shape in Miro",
    states: [
      { key: "default", label: "Floating Menu", image: "/images/miro/Miro 18.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 50,
        y: 20,
        element: "Color Palette Swatches",
        does: "Offers 16 brand-aligned sticky note colors, stripping out complex hex-pickers in favor of speed.",
        why: "Decision fatigue in workshops kills momentum. Constrained palettes force users to focus on content over aesthetics.",
        evidence: ["E2", "E3"],
      }
    ],
    entry: ["Click object"],
    exit: ["Deselect object"],
    primaryAction: "Change Color",
    secondaryActions: ["Change Font", "Add Link"],
    responsive: "Menu positions itself dynamically to avoid screen edges.",
    accessibility: ["Focus traps within menu until dismissed"],
    analytics: [
      { event: "object_styled", trigger: "User modifies object property" }
    ]
  },
  {
    id: "M06",
    name: "Multiplayer Cursor Sync",
    platform: "Desktop",
    priority: "P0",
    status: "Approved",
    flow: "Real-time Collaboration",
    summary:
      "Real-time websocket-driven visualization of collaborator presence, rendering remote cursors with name tags on the canvas at 60fps.",
    userGoal:
      "I want to see exactly what my remote team members are pointing at and typing right now, feeling like we are in the same room.",
    image: "/images/miro/Miro 19.png",
    alt: "Multiple user cursors with name tags interacting on the same Miro board",
    states: [
      { key: "default", label: "Multiplayer View", image: "/images/miro/Miro 19.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 60,
        y: 35,
        element: "Named Cursor Flag",
        does: "Renders an SVG cursor scaled inversely to the zoom level, appended with the user's first name in their assigned presence color.",
        why: "Provides spatial awareness of team attention, turning a static diagram into a living workspace.",
        evidence: ["E1", "E4", "E5"],
      },
      {
        n: 2,
        x: 85,
        y: 10,
        element: "Top Nav Avatars",
        does: "Lists all active users in the session. Clicking an avatar jumps your camera to their current viewport.",
        why: "Solves 'where did everyone go' on an infinite canvas by allowing instant teleportation to collaborators.",
        evidence: ["E2"],
      }
    ],
    entry: ["Other users join board"],
    exit: ["Other users leave board"],
    primaryAction: "Track User Cursor",
    secondaryActions: ["Hide Collaborators"],
    responsive: "Remote cursors scale properly across different zoom levels.",
    accessibility: ["Live announcements of who enters/leaves session"],
    analytics: [
      { event: "cursor_teleport", trigger: "User clicks avatar to jump to location" }
    ],
    beforeAfter: {
      beforeMetric: "25.0 min avg session",
      afterMetric: "58.0 min avg session",
      metricDelta: "+132% engagement",
      explanation: "Live cursors created engagement loop preventing user drop-off."
    }
  },
  {
    id: "M07",
    name: "Zoom & Minimap Navigation",
    platform: "Desktop",
    priority: "P1",
    status: "Approved",
    flow: "Viewport Navigation",
    summary:
      "Bottom-right interface quadrant containing zoom percentage controls, fit-to-screen commands, and the spatial minimap toggle.",
    userGoal:
      "I want to zoom out to see the whole 10,000-node architecture, then instantly snap back to 100% scale on the specific frame I'm editing.",
    image: "/images/miro/Miro 20.png",
    alt: "Miro zoom controls and viewport navigation UI",
    states: [
      { key: "default", label: "Zoom Controls", image: "/images/miro/Miro 20.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 90,
        y: 90,
        element: "Zoom Level Input",
        does: "Displays current zoom ratio (e.g., 25%, 100%) and accepts manual numerical entry or click-to-reset.",
        why: "While pinch-to-zoom is primary, users often need exact 100% scale for pixel-perfect typography alignment.",
        evidence: ["E3", "E4"],
      }
    ],
    entry: ["Scroll wheel", "Pinch gesture"],
    exit: ["Click 100% reset"],
    primaryAction: "Zoom Canvas",
    secondaryActions: ["Toggle Minimap", "Fit to Screen"],
    responsive: "Minimap renders simplified WebGL texture map.",
    accessibility: ["Keyboard shortcuts (+/-) to step zoom levels"],
    analytics: [
      { event: "minimap_toggled", trigger: "User opens minimap" }
    ]
  }
];
