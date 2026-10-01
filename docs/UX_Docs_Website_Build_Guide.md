# UX Documentation Website — AI Build Guide

> **Instruction to the AI:** Build the website described in this file. Follow it in order. Do not skip the tasks in Section 13. Do not invent brand colours; take all styling from the shadcn preset. When something is unspecified, choose the simplest option and note it in `DECISIONS.md`.

---

## 1. Goal

A **UX research & documentation website** for stakeholders. It has two parts:

1. **Research Dashboard** (landing page): UX numbers turned into KPI cards, charts and a findings table.
2. **Documentation**: the full UX documentation (vision, research, flows, annotated screens, design system, testing, handoff) with a sidebar.

**Audience:** non-designers first (PMs, executives, clients), then designers and developers.
**Key promise:** a stakeholder understands the UX status in **30 seconds** on the dashboard, and can go deeper in the docs.

---

## 2. Tech stack & setup

| Item | Choice |
|---|---|
| Framework | Next.js (latest stable, App Router), TypeScript |
| Styling | Tailwind CSS + **shadcn/ui** (preset below) |
| Charts | shadcn `chart` component (Recharts), already included in `dashboard-01` |
| Content | MDX files + JSON data. Read with `gray-matter` and `next-mdx-remote/rsc` |
| Diagrams | `mermaid` (client-side) for user flows, images as fallback |
| Hosting | Static-friendly (use `generateStaticParams`; `output: "export"` optional) |
| Package manager | pnpm |

### Setup commands (run in this order)

```bash
# 1. Create the app
pnpm create next-app@latest ux-docs --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd ux-docs

# 2. Initialise shadcn with the brand preset
#    (new project → init. Existing shadcn project → use "apply" instead.)
pnpm dlx shadcn@latest init --preset b3kcuGVx2
#    pnpm dlx shadcn@latest apply --preset b3kcuGVx2     # only if shadcn is already set up

# 3. Dashboard block (research dashboard)
npx shadcn@latest add dashboard-01

# 4. Docs sidebar block (documentation)
npx shadcn@latest add sidebar-03

# 5. Extra UI pieces
npx shadcn@latest add card badge tabs table chart tooltip separator breadcrumb \
  accordion dialog sheet scroll-area skeleton toggle-group progress alert

# 6. Content libs
pnpm add gray-matter next-mdx-remote mermaid
```

### Known conflicts to handle (important)

Both blocks install similarly named files and pages. **When the CLI asks to overwrite, answer No**, or rename *before* installing the second block:

1. After `dashboard-01`: rename `components/app-sidebar.tsx` → `components/dashboard-sidebar.tsx` and move its page to the route in Section 4 (`/`).
2. After `sidebar-03`: rename its `app-sidebar.tsx` → `components/docs-sidebar.tsx` and use it only in `app/docs/layout.tsx`.
3. Keep one shared `components/ui/sidebar.tsx`.
4. Verify imports compile before moving on.

---

## 3. Branding & design rules

**The preset `b3kcuGVx2` is the single source of truth** for colours, radius, fonts and icon library. Read them from `components.json` and the generated CSS variables.

| Rule | Detail |
|---|---|
| Colours | Use semantic tokens only (`bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `border`, `bg-primary`, `bg-muted`). **No hard-coded hex values.** |
| Chart colours | Use `--chart-1` … `--chart-5`. |
| Status colours | Define `--status-good`, `--status-warn`, `--status-bad` in `globals.css` (derived from the theme), for on-target / near-target / off-target. Always pair with an icon or text label. |
| Fonts & icons | From the preset. Use the icon library listed in `components.json`. |
| Theme | Light and dark mode, toggle in the header, follows system by default. |
| Density | Calm and spacious. Generous whitespace, one idea per card. |
| Tone of text | Clear, plain English, short sentences. No jargon without a one-line explanation. |
| Brand placeholders | Product name: `[PRODUCT NAME]`, logo: `/public/logo.svg` (provide a simple placeholder), tagline: `[TAGLINE]`. Keep them in `src/config/site.ts`. |

---

## 4. Routes & site map

```text
/                          Research Dashboard (landing)
/docs                      Documentation home (overview + how to read)
/docs/vision               01 Product & Vision
/docs/research             02 Research & Insight
/docs/problem              03 Problem & Opportunity
/docs/strategy             04 Strategy & Scope
/docs/architecture         05 Information Architecture
/docs/flows                06 User Flows
/docs/screens              07 Screens (gallery)
/docs/screens/[id]         07 Screen detail (annotated image)
/docs/design-system        08 Design System
/docs/testing              09 Usability Testing & Iteration
/docs/accessibility        10 Accessibility & Edge Cases
/docs/handoff              11 Developer Handoff & QA
/docs/metrics              12 Metrics & Improvement
/docs/sign-off             Sign-off
```

---

## 5. Layout wireframes

### 5.1 Global shell (every page)

```text
┌────────────────────────────────────────────────────────────────────────┐
│ [logo] PRODUCT NAME   Dashboard │ Documentation        🔍 ⌘K   ☀/🌙   │  ← top header (sticky)
├────────────────────────────────────────────────────────────────────────┤
│                        (page content, see below)                       │
└────────────────────────────────────────────────────────────────────────┘
```

- Top header has **two main links: Dashboard | Documentation**, a command-palette search (⌘K across all docs pages and screens), and the theme toggle.
- On mobile the header collapses to logo + menu button.

### 5.2 Research Dashboard (`/`), built from `dashboard-01`

```text
┌────────────────────────────────────────────────────────────────────────┐
│ HEADER                                                                 │
├──────────┬─────────────────────────────────────────────────────────────┤
│ SIDEBAR  │ Title: "UX Research Dashboard"      [Version ▾] [Export PDF]│
│ (dash)   │ Summary sentence: "Task success is 82% (target 85%)…"      │
│          ├─────────────────────────────────────────────────────────────┤
│ Overview │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐      │
│ Usability│ │Task    │ │SUS     │ │Time on │ │Error   │ │Issues  │      │  ← KPI cards
│ Findings │ │success │ │score   │ │task    │ │rate    │ │fixed   │      │    (value, target,
│ Journey  │ │ 82% ▲  │ │ 76 ▲   │ │ 41s ▼  │ │ 6% ▼   │ │ 18/24  │      │     trend badge)
│ Priority │ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘      │
│ Impact   ├──────────────────────────────┬──────────────────────────────┤
│          │ Improvement over versions    │ Task success by task         │
│          │ (line: V1→V3)                │ (horizontal bar + target)    │
│          ├──────────────────────────────┼──────────────────────────────┤
│          │ Findings by severity         │ Drop-off funnel              │
│          │ (stacked bar/donut)          │ (bar)                        │
│          ├──────────────────────────────┼──────────────────────────────┤
│          │ Journey emotion curve        │ Opportunity priority         │
│          │ (area)                       │ (scatter: value vs effort)   │
│          ├──────────────────────────────┴──────────────────────────────┤
│          │ UX health (radar)  │ Before / After cards │ Participants    │
│          ├─────────────────────────────────────────────────────────────┤
│          │ TOP ISSUES (data table: sort, filter, severity badge)       │
│          ├─────────────────────────────────────────────────────────────┤
│          │ → "Continue to full documentation"  [Open docs]             │
└──────────┴─────────────────────────────────────────────────────────────┘
```

Every chart card has: **title, one-sentence takeaway, chart, footer "Source · n · date"**.

### 5.3 Documentation (`/docs/*`), built from `sidebar-03`

```text
┌────────────────────────────────────────────────────────────────────────┐
│ HEADER                                                                 │
├──────────────┬───────────────────────────────────────┬─────────────────┤
│ DOCS SIDEBAR │ Breadcrumb: Docs / Research           │ ON THIS PAGE    │
│ (submenus)   │ # 02 Research & Insight               │ • Research plan │
│              │ intro paragraph                       │ • Findings      │
│ ▸ Overview   │                                       │ • Personas      │
│ ▾ Research   │ [content blocks: tables, cards,       │ • Journey map   │
│    Plan      │  persona cards, charts, callouts]     │                 │
│    Findings  │                                       │ (sticky,        │
│    Personas  │ ← Previous          Next →            │  scroll-spy)    │
│ ▸ Flows      │                                       │                 │
│ ▸ Screens    │                                       │                 │
└──────────────┴───────────────────────────────────────┴─────────────────┘
```

### 5.4 Screen detail (`/docs/screens/[id]`), the most important page

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ D01 — Project Dashboard    [Desktop] [P0] [Approved]    ‹ prev  next ›   │
│ Summary (2 sentences)        User goal: "I want to … so that …"          │
├───────────────────────────────────────────┬──────────────────────────────┤
│  ANNOTATED IMAGE (≈60% width)             │  PIN EXPLANATIONS            │
│  ┌─────────────────────────────────────┐  │  ① New project button        │
│  │  screenshot                         │  │     What: … Why: … [R02]     │
│  │   ①        ②                        │  │  ② Status filter             │
│  │        ③                            │  │     What: … Why: … [R04]     │
│  │                ④                    │  │  ③ Project cards             │
│  └─────────────────────────────────────┘  │  (hover a pin ↔ highlights   │
│  State tabs: Default|Loading|Empty|Error  │   its row, and vice versa)   │
├───────────────────────────────────────────┴──────────────────────────────┤
│ Tabs:  Details │ Responsive │ Accessibility │ Research │ Analytics │ Notes│
│  Primary/secondary actions · Entry → Exit · Evidence links · Events      │
├──────────────────────────────────────────────────────────────────────────┤
│ Before / After (only if the screen changed after testing)                │
└──────────────────────────────────────────────────────────────────────────┘
```

On **mobile**: image on top (full width, pins tappable), explanations below as an accordion, tabs become a horizontal scroller.

### 5.5 Screens gallery (`/docs/screens`)

Filter bar (Platform · Priority · Status · Flow) + grid of cards (thumbnail, ID, name, badges). Click → Screen detail.

---

## 6. Research Dashboard spec

**Data file:** `src/data/research.json` (schema in Section 9). The page must read **only** from this file so the owner updates numbers without touching code.

| Block | Component | Data key | Notes |
|---|---|---|---|
| KPI cards (max 6) | `KpiCard` (based on `section-cards`) | `kpis[]` | value, unit, target, change %, status good/warn/bad, tooltip with source |
| Improvement over versions | `LineChartCard` | `iterations[]` | series: SUS, task success, error rate. Use a metric toggle |
| Task success by task | `BarChartCard` (horizontal) | `tasks[]` | draw a target line/marker |
| Findings by severity | `StackedBarCard` | `findings[]` (computed) | stack by status (open/fixed). Count computed in code |
| Drop-off funnel | `BarChartCard` | `funnel[]` | show % lost between steps |
| Journey emotion curve | `AreaChartCard` | `journey[]` | y = 1–5, annotate lowest point |
| Opportunity priority | `ScatterCard` | `opportunities[]` | x = effort, y = user value; quadrant labels: Quick wins, Strategic, Fill-ins, Avoid |
| UX health | `RadarCard` | `health[]` | 6 axes, 0–10 |
| Before / After | `BeforeAfterCard` | `beforeAfter[]` | metric, before, after, % change, link to screen |
| Participants | `ParticipantsCard` | `participants` | donut by method + segment list |
| Top issues | `IssuesTable` (based on `data-table`) | `findings[]` | sort, filter by severity/status/screen, click row → `/docs/screens/[id]` |

**Behaviour**
- Top summary sentence is **generated** from data: e.g. "Task success is {x}% (target {y}%). {n} of {m} issues fixed."
- Version selector (V1/V2/V3) switches all numbers to that snapshot if `snapshots` exist; otherwise hide it.
- "Export PDF" = `window.print()` with a print stylesheet (hide header/sidebar, avoid chart page breaks).
- Every chart has an accessible data-table alternative (`<details>` "View data").
- Loading state: skeletons. Empty state: "No data yet" with instructions to edit `research.json`.

---

## 7. Documentation spec

### 7.1 Sidebar navigation (`sidebar-03` with submenus)

Driven by `src/config/docs-nav.ts`:

```ts
export const docsNav = [
  { title: "Overview", url: "/docs" },
  { title: "Product & Vision", url: "/docs/vision", items: [
      { title: "Overview", url: "/docs/vision#overview" },
      { title: "UX vision", url: "/docs/vision#ux-vision" },
      { title: "Principles", url: "/docs/vision#principles" } ] },
  { title: "Research", url: "/docs/research", items: [
      { title: "Plan", url: "/docs/research#plan" },
      { title: "Findings", url: "/docs/research#findings" },
      { title: "Personas", url: "/docs/research#personas" },
      { title: "Jobs to be done", url: "/docs/research#jtbd" },
      { title: "Journey map", url: "/docs/research#journey" } ] },
  { title: "Problem & Opportunity", url: "/docs/problem" },
  { title: "Strategy & Scope", url: "/docs/strategy" },
  { title: "Information Architecture", url: "/docs/architecture" },
  { title: "User Flows", url: "/docs/flows" },
  { title: "Screens", url: "/docs/screens", items: "AUTO-GENERATED from /content/screens/*.mdx, grouped by platform" },
  { title: "Design System", url: "/docs/design-system" },
  { title: "Testing & Iteration", url: "/docs/testing" },
  { title: "Accessibility & Edge Cases", url: "/docs/accessibility" },
  { title: "Handoff & QA", url: "/docs/handoff" },
  { title: "Metrics & Improvement", url: "/docs/metrics" },
  { title: "Sign-off", url: "/docs/sign-off" },
];
```

- Active item highlighted; parent expands automatically.
- Sidebar collapses to a sheet on mobile.
- Each page shows: breadcrumb, title, "last updated", status badge, previous/next links, and an **"On this page"** scroll-spy table of contents (from `##` headings).
- Section numbers (01–12) appear in titles to match the template.

### 7.2 Content format

Each doc page is an MDX file in `content/docs/*.mdx` with frontmatter:

```yaml
---
title: "Research & Insight"
number: "02"
summary: "What we learned, from whom, and what it means."
status: "Approved"        # Draft | Review | Approved
updated: "2025-01-15"
---
```

### 7.3 MDX components to build and register

| Component | Purpose |
|---|---|
| `<Callout type="info|warn|success">` | Highlighted notes (use shadcn `alert`) |
| `<PersonaCard … />` | Image, name, role, goals, frustrations, quote |
| `<JourneyMap stages={…} />` | Horizontal stages + emotion line + pain/opportunity rows (scrolls on mobile) |
| `<FlowDiagram>` | Renders Mermaid text; fallback image prop; zoomable |
| `<FindingsTable />` | Reads `research.json`, filterable |
| `<ChartCard … />` | Reuses dashboard chart components inside docs |
| `<ScreenExplainer id="D01" />` | The annotated image component (Section 8) |
| `<ScreenGallery />` | Grid with filters |
| `<StateGallery screen="D01" />` | Tabs/thumbnails: default, loading, empty, error |
| `<BeforeAfter before after metric />` | Draggable comparison slider + metric badge |
| `<DesignTokens />` | Colour/type/spacing swatches (read from CSS variables) |
| `<ComponentSpec name="Button" />` | Variants, states, usage, don't-use-when |
| `<DecisionRecord … />` | Decision, options, reason, revisit date |
| `<Checklist items />` | Read-only ticks for QA/sign-off |

Also style tables (horizontal scroll on small screens), code blocks, and `h2/h3` anchors.

---

## 8. `ScreenExplainer` component spec

**Purpose:** show a UI screenshot with numbered pins; each pin explains *What it is → What the user can do → Why it's there*.

**Screen file:** `content/screens/D01.mdx`

```yaml
---
id: "D01"
name: "Project Dashboard"
platform: "Desktop"          # Desktop | Mobile | Tablet
priority: "P0"               # P0 | P1 | P2
status: "Approved"
flow: "Main"
summary: "Shows active projects and what needs attention today."
userGoal: "I want to see what needs my attention so that I never miss a deadline."
image: "/screens/D01/default.png"
alt: "Project dashboard with filter chips and a grid of project cards"
states:
  - { key: "default", label: "Default", image: "/screens/D01/default.png" }
  - { key: "loading", label: "Loading", image: "/screens/D01/loading.png" }
  - { key: "empty",   label: "Empty",   image: "/screens/D01/empty.png" }
  - { key: "error",   label: "Error",   image: "/screens/D01/error.png" }
hotspots:                     # x, y = percentage position (0–100) of pin centre
  - n: 1
    x: 88
    y: 8
    element: "New project button"
    does: "Opens the project creation dialog."
    why: "7 of 8 testers looked here first."
    evidence: ["R02"]
  - n: 2
    x: 30
    y: 18
    element: "Status filter chips"
    does: "Filter the list by status."
    why: "Users found the list endless."
    evidence: ["R04"]
entry: ["Login", "Sidebar → Projects"]
exit:  ["Project detail", "Create project dialog"]
primaryAction: "Create project"
secondaryActions: ["Filter", "Search", "Open project"]
responsive: "Sidebar collapses to icons at <1024px; cards become a single column on mobile."
accessibility: ["Tab order follows pin numbers", "Chips have aria-pressed", "Contrast checked 4.5:1"]
analytics:
  - { event: "project_created", trigger: "Click Create" }
beforeAfter: { before: "/screens/D01/before.png", after: "/screens/D01/default.png", metric: "Task time 74s → 41s" }
---
Free-form notes / open questions in Markdown here.
```

**Behaviour**
- Image scales responsively; pins are absolutely positioned using `%` so they stay correct at any size.
- Pins are numbered circles (theme `primary`), keyboard-focusable (`button`), with `aria-label="Pin 1: New project button"`.
- **Hover/focus a pin ↔ highlights the matching row** (and the reverse). Clicking a pin scrolls to its row on mobile.
- Toggle "Show pins" on/off. Click the image to open a full-screen zoom (`dialog`).
- State tabs swap the image; pins show only on the `default` state unless that state defines its own `hotspots`.
- Explanation list order = pin number. Each row: **element (bold) · does · why · evidence chips** (chips link to findings).
- Missing image → a neutral placeholder with the file path to add.
- Validate the frontmatter at build time (Zod). Fail the build with a clear message if a pin has no `does`/`why`.

---

## 9. Data schema: `src/data/research.json`

Use this structure; fill with the **sample data below** so the site renders out of the box. Mark sample data clearly with a dismissible banner: *"Sample data. Replace in `src/data/research.json`."*

```json
{
  "meta": { "product": "[PRODUCT NAME]", "version": "v1.0", "updated": "2025-01-15" },
  "kpis": [
    { "key": "taskSuccess", "label": "Task success rate", "value": 82, "unit": "%", "baseline": 58, "target": 85, "higherIsBetter": true,  "source": "Usability test, n=12" },
    { "key": "sus",         "label": "SUS score",         "value": 76, "unit": "",  "baseline": 62, "target": 80, "higherIsBetter": true,  "source": "SUS survey, n=12" },
    { "key": "timeOnTask",  "label": "Avg. time on task", "value": 41, "unit": "s", "baseline": 74, "target": 45, "higherIsBetter": false, "source": "Usability test, n=12" },
    { "key": "errorRate",   "label": "Error rate",        "value": 6,  "unit": "%", "baseline": 19, "target": 5,  "higherIsBetter": false, "source": "Usability test, n=12" },
    { "key": "participants","label": "Participants",      "value": 42, "unit": "",  "source": "All methods" },
    { "key": "issuesFixed", "label": "Issues fixed",      "value": 18, "unit": "",  "total": 24, "source": "Findings log" }
  ],
  "iterations": [
    { "version": "V1", "sus": 62, "taskSuccess": 58, "errorRate": 19 },
    { "version": "V2", "sus": 70, "taskSuccess": 71, "errorRate": 11 },
    { "version": "V3", "sus": 76, "taskSuccess": 82, "errorRate": 6 }
  ],
  "tasks": [
    { "task": "Create a project", "success": 92, "target": 85 },
    { "task": "Invite a teammate", "success": 83, "target": 85 },
    { "task": "Export a report", "success": 58, "target": 80 }
  ],
  "funnel": [
    { "step": "Landing", "users": 1000 },
    { "step": "Sign up", "users": 640 },
    { "step": "Onboarding", "users": 480 },
    { "step": "First project", "users": 330 }
  ],
  "journey": [
    { "stage": "Discover", "emotion": 3.5 },
    { "stage": "Onboard", "emotion": 2.0 },
    { "stage": "Core task", "emotion": 3.0 },
    { "stage": "Success", "emotion": 4.5 },
    { "stage": "Return", "emotion": 4.0 }
  ],
  "opportunities": [
    { "id": "O01", "name": "Guided first project", "value": 5, "effort": 2 },
    { "id": "O02", "name": "Simplify export", "value": 4, "effort": 3 },
    { "id": "O03", "name": "Smart filters", "value": 3, "effort": 4 }
  ],
  "health": [
    { "area": "Usability", "score": 7.5 }, { "area": "Accessibility", "score": 6.5 },
    { "area": "Consistency", "score": 8 },  { "area": "Performance", "score": 7 },
    { "area": "Clarity", "score": 7.5 },    { "area": "Satisfaction", "score": 7 }
  ],
  "participants": {
    "byMethod": [ { "method": "Interviews", "n": 10 }, { "method": "Survey", "n": 20 }, { "method": "Usability tests", "n": 12 } ],
    "bySegment": [ { "segment": "New users", "n": 18 }, { "segment": "Power users", "n": 24 } ]
  },
  "findings": [
    { "id": "U01", "title": "Export button not discoverable", "screen": "D01", "severity": "High", "status": "Fixed", "recommendation": "Move to page header", "owner": "Design" },
    { "id": "U02", "title": "Empty state gives no guidance", "screen": "D01", "severity": "Critical", "status": "Open", "recommendation": "Add first-project guide", "owner": "Design" }
  ],
  "beforeAfter": [
    { "screen": "D01", "metric": "Task time", "before": 74, "after": 41, "unit": "s" }
  ]
}
```

- Severity values: `Critical | High | Medium | Low`. Status values: `Open | In progress | Fixed`.
- Validate with Zod in `src/lib/data.ts`. Compute counts, "% change", and target status (good / warn / bad) in code. **Do not store computed values.**
- Status rule: good = meets target; warn = within 10% of target; bad = worse.

---

## 10. Project structure

```text
ux-docs/
├─ components.json
├─ content/
│  ├─ docs/                # vision.mdx, research.mdx, … sign-off.mdx
│  └─ screens/             # D01.mdx, D02.mdx, M01.mdx …
├─ public/
│  ├─ logo.svg
│  ├─ screens/D01/         # default.png, loading.png, empty.png, error.png, before.png
│  └─ personas/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                    # theme provider + global header
│  │  ├─ page.tsx                      # Research Dashboard (from dashboard-01)
│  │  └─ docs/
│  │     ├─ layout.tsx                 # sidebar-03 docs shell + TOC
│  │     ├─ page.tsx                   # Docs home
│  │     ├─ [slug]/page.tsx            # generic doc pages
│  │     └─ screens/
│  │        ├─ page.tsx                # gallery
│  │        └─ [id]/page.tsx           # screen detail
│  ├─ components/
│  │  ├─ ui/                           # shadcn
│  │  ├─ layout/ (site-header, dashboard-sidebar, docs-sidebar, toc, page-nav)
│  │  ├─ dashboard/ (kpi-card, line-chart-card, bar-chart-card, …, issues-table)
│  │  ├─ docs/ (callout, persona-card, journey-map, flow-diagram, before-after, …)
│  │  └─ screens/ (screen-explainer, state-gallery, screen-gallery)
│  ├─ config/ (site.ts, docs-nav.ts)
│  ├─ data/research.json
│  └─ lib/ (data.ts, content.ts, mdx.tsx, utils.ts)
├─ DECISIONS.md
└─ README.md
```

---

## 11. Content mapping: template → website

| Lean template section | Website page | Dashboard link |
|---|---|---|
| Part A Research Dashboard | `/` | Source of all charts |
| 01 Product & Vision | `/docs/vision` | – |
| 02 Research & Insight | `/docs/research` | Participants, journey, findings charts |
| 03 Problem & Opportunity | `/docs/problem` | Opportunity scatter |
| 04 Strategy & Scope | `/docs/strategy` | – |
| 05 Information Architecture | `/docs/architecture` | – |
| 06 User Flows & Inventory | `/docs/flows` | Funnel |
| 07 Screens | `/docs/screens`, `/docs/screens/[id]` | Before/After, issues per screen |
| 08 Design System | `/docs/design-system` | – |
| 09 Testing & Iteration | `/docs/testing` | Task success, iterations, issues |
| 10 Accessibility & Edge Cases | `/docs/accessibility` | – |
| 11 Handoff & QA | `/docs/handoff` | – |
| 12 Metrics & Improvement | `/docs/metrics` | Health radar |
| Part C Sign-off | `/docs/sign-off` | – |

Write each MDX page with **placeholder content that mirrors the template headings** (tables, persona card, journey map, one flow diagram, 3 sample screens D01, D02, M01) so the owner can replace text and images.

---

## 12. Quality requirements

**Responsive:** desktop ≥1280, laptop 1024, tablet 768, mobile 390. No horizontal page scroll; wide tables scroll inside their container. Sidebars become sheets on <1024px.

**Accessibility (WCAG 2.2 AA):** semantic landmarks (`header`, `nav`, `main`), skip link, visible focus, keyboard access for pins/tabs/sidebar, `aria-current` on the active nav item, colour never the only signal, chart data-table alternative, `prefers-reduced-motion` respected, touch targets ≥ 44px.

**Performance:** static generation, `next/image` with width/height for screens, lazy-load charts below the fold, Lighthouse ≥ 90 (performance, accessibility, best practices).

**Code quality:** TypeScript strict, no `any`, ESLint clean, components small and typed, no unused shadcn files left in the repo.

**SEO basics:** title/description per page, Open Graph image, `sitemap.xml`.

---

## 13. Tasks (do in order, verify each before continuing)

**Phase 0: Setup**
- [ ] T0.1 Create the app and run all setup commands (Section 2). App runs with `pnpm dev`.
- [ ] T0.2 Resolve the block conflicts (sidebar names, routes). No duplicate `app-sidebar`.
- [ ] T0.3 Add light/dark theme toggle. Add `src/config/site.ts`.
- *Done when:* `/` and `/docs` both render with their own sidebar, no console errors.

**Phase 1: Shell**
- [ ] T1.1 Global header (logo, Dashboard | Documentation, ⌘K search, theme toggle, mobile menu).
- [ ] T1.2 Docs layout with `sidebar-03`, driven by `docs-nav.ts`, plus breadcrumb, "On this page" TOC, previous/next.
- *Done when:* navigation works on desktop and mobile; active states are correct.

**Phase 2: Data layer**
- [ ] T2.1 Create `research.json` with the sample data (Section 9) and a Zod schema in `src/lib/data.ts`.
- [ ] T2.2 Helpers: target status, % change, severity counts, generated summary sentence.
- *Done when:* a unit test (or script) loads and validates the file; bad data fails with a readable message.

**Phase 3: Research Dashboard**
- [ ] T3.1 KPI cards (6) with status badge, target, trend, source tooltip.
- [ ] T3.2 Charts: iterations (line), tasks (bar+target), findings (stacked), funnel, journey (area), opportunities (scatter with quadrants), health (radar), participants (donut).
- [ ] T3.3 Before/After cards and the Top Issues table (sort, filter, row link to screen).
- [ ] T3.4 Summary sentence, version selector (if snapshots), print/"Export PDF", skeletons, empty state, "View data" table per chart.
- *Done when:* the dashboard matches wireframe 5.2, and editing `research.json` changes the charts.

**Phase 4: Content system**
- [ ] T4.1 MDX pipeline (`gray-matter` + `next-mdx-remote/rsc`), frontmatter validation, `generateStaticParams`.
- [ ] T4.2 Build the MDX components in Section 7.3.
- [ ] T4.3 Create all 14 doc pages with placeholder content following the lean template headings.
- *Done when:* every route in Section 4 renders; TOC works; tables are readable on mobile.

**Phase 5: Screens (priority)**
- [ ] T5.1 `ScreenExplainer` with pins, linked highlighting, zoom, show/hide pins, state tabs (Section 8).
- [ ] T5.2 Screen detail page per wireframe 5.4, with tabs (Details, Responsive, Accessibility, Research, Analytics, Notes).
- [ ] T5.3 Screens gallery with filters; sidebar "Screens" submenu auto-generated.
- [ ] T5.4 Three sample screens (D01, D02, M01) with placeholder images (simple generated wireframe PNG/SVG).
- *Done when:* hovering a pin highlights its explanation and vice versa; works with keyboard and on mobile.

**Phase 6: Polish & QA**
- [ ] T6.1 Responsive pass on 390 / 768 / 1024 / 1440.
- [ ] T6.2 Accessibility pass (keyboard-only walkthrough, contrast, landmarks, reduced motion).
- [ ] T6.3 Performance pass and Lighthouse check.
- [ ] T6.4 Write `README.md` (how to update numbers, add a screen, add a doc page, deploy) and `DECISIONS.md`.
- *Done when:* every item in Section 14 is ticked.

---

## 14. Definition of done

- [ ] Landing page shows KPIs and charts **before** any documentation.
- [ ] All numbers come from `research.json`; nothing hard-coded in components.
- [ ] Every chart has a takeaway line, a source/n/date footer and a "View data" alternative.
- [ ] Every screen page has an annotated image, pin-by-pin explanation, states, and research links.
- [ ] Sidebar navigation works, is auto-generated for screens, and collapses on mobile.
- [ ] Theme comes entirely from the preset. No hard-coded hex colours. Dark mode works.
- [ ] Owner can add a screen by adding **one MDX file + images**, and update numbers by editing **one JSON file**.
- [ ] Build passes (`pnpm build`), lint clean, no console errors.

---

## 15. Don'ts

- Don't invent colours, fonts or logos. Use the preset and placeholders.
- Don't use more than 8 charts or 6 KPI cards on the dashboard.
- Don't hard-code content into components. Content lives in MDX/JSON.
- Don't leave both default `app-sidebar.tsx` files or the stock `dashboard-01` demo data in the final project.
- Don't add features not listed here (auth, database, CMS, comments). Note ideas in `DECISIONS.md` instead.
- Don't fake real research numbers. Sample data must be clearly labelled as sample.
