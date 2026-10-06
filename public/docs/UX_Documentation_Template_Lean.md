# UX Documentation Template — Lean Edition

**Use this for:** any web or mobile product. Fill it in, top to bottom.
**Reading order for stakeholders:** Part A (numbers) → Part B (full documentation) → Part C (sign-off).

**How to fill it in**
1. Duplicate this file and replace every `[bracket]`.
2. If a section doesn't apply, write `N/A – reason`. Don't delete it silently.
3. Every number needs a **source, date and sample size (n)**.
4. Every screen gets an **annotated image + explanation** (Section 07).
5. Sections tagged **`[DASHBOARD]`** feed the charts in Part A.

---

# PROJECT INFO

| Field | Details |
|---|---|
| Product | [Name] |
| Type | [SaaS / Marketplace / Consumer app / Internal tool] |
| Platforms | [Web / iOS / Android] |
| Team | Designer: [ ] · PM: [ ] · Eng: [ ] · Researcher: [ ] |
| Version / Date / Status | [v1.0] · [date] · [Draft / Review / Approved] |
| Links | Figma: [ ] · Prototype: [ ] · Repo: [ ] |

---

# PART A — RESEARCH DASHBOARD (THE NUMBERS)

This part is shown **first** on the website. It answers one question for stakeholders: *"Is the UX working, and what should we do next?"*

## A1. Dashboard mapping — which numbers become which chart

| # | Dashboard element | Data (fields) | Chart type | Comes from |
|---|---|---|---|---|
| 1 | **KPI cards** (max 6) | value, baseline, target, change % | Number card + trend badge | Section 09 |
| 2 | Task success by task | task, success %, target % | Horizontal bar | 09 Usability testing |
| 3 | Improvement over iterations | version, SUS, task success %, error rate | Line | 09 Iteration log |
| 4 | Findings by severity | severity, count, status | Stacked bar or donut | 02 + 09 Findings |
| 5 | Funnel / drop-off | step, users | Bar (descending) | 06 User flows |
| 6 | Journey emotion curve | stage, emotion score (1–5) | Line / area | 02 Journey map |
| 7 | Opportunity priority | opportunity, user value, effort | Scatter (value vs effort) | 03 Opportunity map |
| 8 | Heuristic / UX health scores | area, score (0–10) | Radar | 12 Metrics |
| 9 | Participants & methods | method, n; segment, n | Donut + small table | 02 Research plan |
| 10 | Top issues | id, issue, severity, screen, owner, status | Data table (sortable, filterable) | 09 Findings |
| 11 | Before / After | metric, before, after | Paired bar or number cards | 09 Before/After |

## A2. KPI cards

| KPI | Value | Baseline | Target | Trend | Source (n, date) |
|---|---:|---:|---:|---|---|
| Task success rate | [ ]% | [ ]% | [ ]% | ▲/▼ [ ]% | [ ] |
| SUS score (0–100) | [ ] | [ ] | [ ] | [ ] | [ ] |
| Avg. time on task | [ ]s | [ ]s | [ ]s | [ ] | [ ] |
| Error rate | [ ]% | [ ]% | [ ]% | [ ] | [ ] |
| Participants | [ ] | – | – | – | [ ] |
| Issues fixed / found | [ ]/[ ] | – | – | – | [ ] |

## A3. Dashboard rules

- **Max 6 KPI cards and 8 charts.** More numbers = less understanding.
- Under every chart write a **one-sentence takeaway** ("So what?"), e.g. *"Checkout has the lowest success rate (58%); fixing it is priority #1."*
- Show **target next to actual** wherever a target exists.
- Always show **n** (sample size). Flag anything with n < 5 as "directional only".
- Colour = meaning (green on target, amber near, red off). Never rely on colour alone. Add icons or labels.

---

# PART B — UX DOCUMENTATION

## 01 — Product & Vision

**Product in one line:** [ ]

| Question | Answer |
|---|---|
| Who is it for? | [ ] |
| What problem does it solve? | [ ] |
| What makes it different? | [ ] |

**UX vision (2–3 sentences):** [The experience should feel…]

**UX principles (5 max)**

| # | Principle | What it means | Design implication |
|---|---|---|---|
| 1 | [ ] | [ ] | [ ] |
| 2 | [ ] | [ ] | [ ] |
| 3 | [ ] | [ ] | [ ] |

---

## 02 — Research & Insight

### 2.1 Research plan `[DASHBOARD: participants & methods]`

- **Objectives:** 1. [ ] 2. [ ] 3. [ ]
- **Hypotheses:**

| ID | Hypothesis | Evidence needed | Status (Open / Confirmed / Rejected) |
|---|---|---|---|
| H01 | [ ] | [ ] | [ ] |

- **Participants:** n = [ ] · Who: [ ] · Recruited via: [ ]
- **Methods used:** [Interviews (n)] · [Survey (n)] · [Usability tests (n)] · [Analytics] · [Support tickets] · [Competitor review]

### 2.2 Findings `[DASHBOARD: findings by severity]`

| ID | Finding | Evidence (quote / metric) | Frequency | Severity (Critical / High / Med / Low) | Design implication |
|---|---|---|---|---|---|
| R01 | [ ] | [ ] | [x of n] | [ ] | [ ] |

### 2.3 Personas (2–3 max)

**Persona: [Name]** — [Role], [context], primary device [ ]
- **Goals:** [ ]
- **Frustrations:** [ ]
- **Behaviours:** [ ]
- **Quote:** "[ ]"
- **Image:** `/public/personas/[name].png`

### 2.4 Jobs to be done

> When [situation], I want to [action], so that [outcome].

### 2.5 Journey map `[DASHBOARD: emotion curve]`

| Stage | Goal | Action | Emotion (1–5) | Pain point | Opportunity |
|---|---|---|---:|---|---|
| Discover | [ ] | [ ] | [ ] | [ ] | [ ] |
| Onboard | [ ] | [ ] | [ ] | [ ] | [ ] |
| Core task | [ ] | [ ] | [ ] | [ ] | [ ] |
| Success | [ ] | [ ] | [ ] | [ ] | [ ] |
| Return | [ ] | [ ] | [ ] | [ ] | [ ] |

---

## 03 — Problem & Opportunity

**Problem statement:**
> [USER] needs to [ACTION] because [INSIGHT], but currently [BARRIER], resulting in [IMPACT].

### Opportunity map `[DASHBOARD: value vs effort scatter]`

| ID | Opportunity | Linked finding | User value (1–5) | Effort (1–5) | Category (Quick win / Strategic / Experiment) |
|---|---|---|---:|---:|---|
| O01 | [ ] | R01 | [ ] | [ ] | [ ] |

---

## 04 — Strategy & Scope

**Strategic priorities:** 1. [ ] 2. [ ] 3. [ ]

**MVP scope**

| Must have | Should have | Could have | Later |
|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] |

**Feature inventory**

| ID | Feature | User | Importance | Platform | Status |
|---|---|---|---|---|---|
| F01 | [ ] | [ ] | Critical / High / Med / Low | [ ] | [ ] |

---

## 05 — Information Architecture

**Sitemap** (replace with yours)

```text
PRODUCT
├── Home
├── Dashboard
│   ├── Overview
│   └── Reports
├── [Feature area]
│   ├── List
│   └── Detail
├── Search
└── Settings
```

**Navigation**

| | Desktop | Mobile |
|---|---|---|
| Primary | [Sidebar / Top nav] | [Bottom tabs] |
| Secondary | [Tabs / Breadcrumb] | [Top bar / Sheets] |
| Shortcuts | [Search / ⌘K] | [Gestures] |

---

## 06 — User Flows & Screen Inventory

### 6.1 Main flows `[DASHBOARD: funnel]`

For each key flow, add a diagram (image or Mermaid) and this table:

| Field | Details |
|---|---|
| Flow name | [e.g. Sign up → first project] |
| Trigger | [ ] |
| Steps | 1. [ ] 2. [ ] 3. [ ] |
| Decision points | [ ] |
| Error / recovery | [ ] |
| Success | [ ] |
| Drop-off per step | [Step 1: n · Step 2: n · Step 3: n] |

### 6.2 Screen inventory

| ID | Screen | Platform | Priority | Flow | Status |
|---|---|---|---|---|---|
| D01 | [Dashboard] | Desktop | P0 | Main | [ ] |
| M01 | [Home] | Mobile | P0 | Main | [ ] |

---

## 07 — Screens (how to explain every UI screen)

**This is the most important section for stakeholders.** Each screen gets its own page with an **annotated image** and a **structured explanation**.

### 7.1 The image

- One **main screenshot** per screen (desktop: 1440px wide; mobile: 390px wide). Export 2× PNG or WebP.
- Add **numbered pins (①②③…)** on every element you explain. Max **8 pins** per image; if you need more, split the screen.
- Number pins in **reading order** (top-left → bottom-right), *primary action first*.
- Name files: `[ScreenID]-[state].png`, e.g. `D01-default.png`, `D01-empty.png`, `D01-error.png`.
- Add **alt text** describing the screen in one sentence.

### 7.2 The explanation (use this page template for every screen)

```text
SCREEN D01 — [Screen name]              [Desktop]  [P0]  [Status]

[ANNOTATED IMAGE WITH NUMBERED PINS]

1. SUMMARY (2 sentences)
   What this screen is and who uses it.

2. USER GOAL
   "I want to ______ so that ______."

3. WHAT YOU SEE (pin-by-pin)
   | # | Element | What it does | Why it's designed this way | Evidence |
   | 1 | [ ]     | [ ]          | [ ]                        | R01      |

4. PRIMARY ACTION / SECONDARY ACTIONS
5. ENTRY → EXIT  (where users come from and go next)
6. STATES  (thumbnails: Default · Loading · Empty · Error · Success)
7. RESPONSIVE  (what changes on tablet / mobile)
8. ACCESSIBILITY  (keyboard order, contrast, labels, touch targets)
9. RESEARCH LINK  (findings, test results, and metrics that shaped it)
10. ANALYTICS EVENTS  (event name → trigger)
11. OPEN QUESTIONS / DECISIONS
```

### 7.3 Rules for writing the explanation

- **Three layers for every pin:** *What it is → What the user can do → Why it's there.* The "why" must link to a finding (R01) or a principle.
- Describe **behaviour, not looks.** Write "Filters the list by status", not "a blue dropdown".
- Keep each pin note to **1–2 sentences**.
- Always show **at least 3 states**: Default, Empty, Error. Add Loading and Success when relevant.
- If the screen changed after testing, add a **Before / After** pair with the metric.

### 7.4 Worked example (short)

> **D01 — Project Dashboard** (Desktop, P0)
> *Shows a user's active projects and what needs attention today.*
>
> | # | Element | What it does | Why |
> |---|---|---|---|
> | ① | "New project" button | Opens the project creation dialog | 7 of 8 testers looked here first (R02) |
> | ② | Status filter chips | Filter the list by status | Users said the list felt "endless" (R04) |
> | ③ | Project cards | Show progress and due date; click to open | Progress is the top thing users check (survey, n=42) |
> | ④ | Alert banner | Flags overdue items with a "Fix now" link | Reduced missed deadlines in V2 test (−35%) |
> | ⑤ | Empty-state panel | Guides first-time users to create a project | 3 of 8 testers stalled on a blank screen (R05) |

---

## 08 — Design System (short)

| Area | Specification |
|---|---|
| Colour | Brand [ ] · Primary [ ] · Success/Warning/Error [ ] · Surface/Text [ ] |
| Typography | Font [ ] · Scale: Display / H1–H3 / Body / Caption |
| Spacing & radius | Scale: [4, 8, 12, 16, 24, 32] · Radius [ ] |
| Grid & breakpoints | Desktop [12 col, 1440] · Tablet [ ] · Mobile [4 col, 390] |
| Icons | [Library] |

**Key components** (only those you actually use)

| Component | Variants | States | Notes / Don't use when |
|---|---|---|---|
| Button | [Primary / Secondary / Ghost] | Default, Hover, Focus, Disabled, Loading | [ ] |
| Input | [ ] | Default, Focus, Error, Disabled | [ ] |
| Card | [ ] | Default, Hover, Selected | [ ] |
| Table | [ ] | Loading, Empty, Error | [ ] |
| Dialog / Sheet | [ ] | Open, Closing | [ ] |

**Voice & tone:** [3 adjectives, e.g. clear, calm, confident]

| Term | Use | Avoid |
|---|---|---|
| [ ] | [ ] | [ ] |

---

## 09 — Usability Testing & Iteration

### 9.1 Test plan

| Field | Details |
|---|---|
| Objective | [ ] |
| Participants | n = [ ] · [segment] |
| Prototype | [link] |
| Tasks | T1 [ ] · T2 [ ] · T3 [ ] |
| Success criteria | [e.g. ≥ 80% complete without help] |

### 9.2 Results `[DASHBOARD: task success, KPIs]`

| Task | Success % | Avg time (s) | Errors (avg) | Target % | Pass? |
|---|---:|---:|---:|---:|---|
| T1 | [ ] | [ ] | [ ] | [ ] | ✅/❌ |
| T2 | [ ] | [ ] | [ ] | [ ] | ✅/❌ |
| T3 | [ ] | [ ] | [ ] | [ ] | ✅/❌ |

**SUS score:** [ ] (n = [ ])

### 9.3 Findings `[DASHBOARD: top issues table]`

| ID | Finding | Screen | Evidence | Severity | Recommendation | Owner | Status |
|---|---|---|---|---|---|---|---|
| U01 | [ ] | D01 | [ ] | [ ] | [ ] | [ ] | Open / Fixed |

### 9.4 Iteration log `[DASHBOARD: improvement over versions]`

| Version | What changed | Why (finding) | Task success | SUS | Error rate |
|---|---|---|---:|---:|---:|
| V1 | Baseline | – | [ ]% | [ ] | [ ]% |
| V2 | [ ] | U01 | [ ]% | [ ] | [ ]% |
| V3 | [ ] | U03 | [ ]% | [ ] | [ ]% |

### 9.5 Before / After `[DASHBOARD: before-after]`

| Screen | Before (image) | After (image) | Metric change |
|---|---|---|---|
| [ ] | `before.png` | `after.png` | [e.g. Task time 74s → 41s] |

---

## 10 — Accessibility & Edge Cases

**Accessibility (target: WCAG 2.2 AA)**

| Requirement | Standard | How we meet it | Checked? |
|---|---|---|---|
| Colour contrast | 4.5:1 text / 3:1 UI | [ ] | ☐ |
| Keyboard | Everything reachable, visible focus | [ ] | ☐ |
| Screen reader | Labels, landmarks, alt text | [ ] | ☐ |
| Touch targets | ≥ 44×44 px (mobile) | [ ] | ☐ |
| Reduced motion | Respect user setting | [ ] | ☐ |

**Edge cases to check on every key screen**

☐ No data · ☐ 1 item · ☐ 1,000+ items · ☐ Very long text · ☐ Slow / offline network · ☐ API error · ☐ Expired session · ☐ No permission · ☐ Small screen · ☐ Large text · ☐ Dark mode

**Error & empty states** — each must answer: *What happened? → Why? → What can I do?*

| Situation | Message | Recovery action |
|---|---|---|
| [Network error] | [ ] | [Retry] |
| [No results] | [ ] | [Clear filters] |

---

## 11 — Developer Handoff & QA

**Handoff checklist (per screen):** ☐ Layout & spacing · ☐ Components used · ☐ All states · ☐ Responsive rules · ☐ Accessibility notes · ☐ API dependencies · ☐ Analytics events · ☐ Assets exported

**Design QA:** ☐ Visual match · ☐ Functional · ☐ Responsive (desktop, tablet, mobile) · ☐ Accessibility (keyboard, screen reader, contrast)

---

## 12 — Metrics & Ongoing Improvement

**Analytics events**

| Event | Trigger | Properties | Success looks like |
|---|---|---|---|
| `project_created` | Click "Create" | type, source, device | [ ] |

**UX health scores** `[DASHBOARD: radar]` — score each 0–10: Usability · Accessibility · Consistency · Performance · Clarity · Satisfaction

**UX debt (known gaps)**

| Issue | User impact | Effort | Priority (P0–P2) | Owner |
|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] |

**Key design decisions** (only major ones)

| Decision | Options considered | Chosen | Reason | Revisit when |
|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] |

---

# PART C — SIGN-OFF

☐ Research findings validated · ☐ All P0 screens documented with states · ☐ Usability targets met or risks accepted · ☐ Accessibility reviewed · ☐ Handoff complete · ☐ Analytics defined

| Role | Name | Status | Date |
|---|---|---|---|
| Product | [ ] | [ ] | [ ] |
| UX / UI | [ ] | [ ] | [ ] |
| Engineering | [ ] | [ ] | [ ] |
| QA | [ ] | [ ] | [ ] |

---

## Optional add-ons (include only if they apply)

- **AI features:** entry points · loading/streaming states · sources & confidence · failure and retry · user control/override
- **Mobile-specific:** thumb-zone placement of primary actions · gestures (with fallback) · keyboard behaviour · push notifications
- **Localization / RTL:** text expansion · date/currency formats · RTL layouts
