# Ultimate UX Documentation Template Kit
## Iconic, Out-of-the-Box Product UX Documentation System

**Version:** 1.0  
**Platforms:** Desktop / Web / Tablet / Mobile  
**Purpose:** A reusable end-to-end UX documentation framework covering research, strategy, architecture, flows, interaction, UI, validation, development handoff, QA, analytics, and UX governance.

---

# How to Use This Template

Use this document as the master UX specification for a new or existing digital product.

For each project:

1. Duplicate this template.
2. Replace bracketed placeholders such as `[PRODUCT NAME]`.
3. Complete the strategic sections before detailed UI design.
4. Create the listed diagrams and artifacts in Figma or another design tool.
5. Link each major artifact from the relevant section.
6. Keep decisions, assumptions, open questions, and revisions documented.
7. Treat desktop and mobile as related experiences, not simply scaled versions of one another.
8. Document all important states, edge cases, accessibility requirements, and recovery paths.
9. Use the final sections for developer handoff, QA, analytics, and governance.

---

# MASTER PROJECT INFORMATION

| Field | Details |
|---|---|
| Product | [Product name] |
| Product type | [SaaS / Marketplace / Consumer app / Enterprise / etc.] |
| Platforms | [Web / Desktop / iOS / Android / Tablet] |
| Designer | [Name] |
| Product manager | [Name] |
| Engineering lead | [Name] |
| Researcher | [Name] |
| Stakeholders | [Names / teams] |
| Version | [Version] |
| Date | [Date] |
| Status | [Draft / Review / Approved / Shipped] |
| Design system | [Name + version] |
| Figma file | [Link] |
| Prototype | [Link] |
| Repository / specs | [Link] |

---

# TABLE OF CONTENTS

1. Product & Vision
2. Research & Human Insight
3. Problem & Opportunity
4. Product & UX Strategy
5. Information Architecture
6. User & Task Flows
7. Wireframes & Layout
8. Interaction & Experience
9. Design System & UI
10. Validation & Iteration
11. Development & QA
12. Metrics & Experience Governance
13. Desktop UX Kit
14. Mobile UX Kit
15. AI UX Kit
16. Edge-Case Library
17. Master Artifact Checklist
18. Final UX Sign-Off

---

# 01 — PRODUCT & VISION

## 1.1 Product Overview

**Product name:**  
[Write here]

**One-line description:**  
[Write here]

**What is the product?**  
[Write here]

**Who is it for?**  
[Write here]

**What problem does it solve?**  
[Write here]

**Why does it exist?**  
[Write here]

**What makes it different?**  
[Write here]

---

## 1.2 UX Vision

> The experience should feel...

- [Experience quality]
- [Emotional quality]
- [Functional quality]
- [Brand quality]
- [Trust quality]
- [Performance expectation]
- [Accessibility expectation]

### UX Vision Statement

[Write the ideal future experience in 2–5 sentences.]

---

## 1.3 UX Principles

Define 5–10 principles.

| # | Principle | Meaning | Design implication |
|---|---|---|---|
| 01 | [Principle] | [Meaning] | [Implication] |
| 02 | [Principle] | [Meaning] | [Implication] |
| 03 | [Principle] | [Meaning] | [Implication] |
| 04 | [Principle] | [Meaning] | [Implication] |
| 05 | [Principle] | [Meaning] | [Implication] |

### Suggested principles

- Make complexity feel simple.
- Reduce cognitive load.
- Show rather than explain.
- Use progressive disclosure.
- Design for confidence.
- Always provide recovery.
- Accessibility by default.
- Make system status visible.
- Preserve user control.
- Prefer meaningful feedback over decoration.

### Artifact to create

- [ ] UX Principles Wheel
- [ ] UX Vision Poster
- [ ] Experience Principles Diagram

---

## 1.4 Product Ecosystem Map

Create a visual map connecting:

- Users
- Devices
- Platforms
- Product surfaces
- APIs
- AI
- Cloud
- Database
- Third-party services
- Notifications
- Support
- Analytics
- Administration
- Business systems

### Suggested diagram

```text
                         PRODUCT
                            |
          +-----------------+-----------------+
          |                 |                 |
        USERS              DATA            BUSINESS
          |                 |                 |
       Devices             APIs            Revenue
       Desktop             AI              Growth
       Mobile              Cloud           Retention
       Tablet              Database        Operations
          |                 |
          +-------- PRODUCT SURFACES -------+
```

---

# 02 — RESEARCH & HUMAN INSIGHT

## 2.1 Research Plan

### Research objectives

1. [Objective]
2. [Objective]
3. [Objective]

### Research questions

- [Question]
- [Question]
- [Question]

### Hypotheses

| ID | Hypothesis | Evidence needed | Status |
|---|---|---|---|
| H01 | [Hypothesis] | [Evidence] | [Open/Tested] |
| H02 | [Hypothesis] | [Evidence] | [Open/Tested] |

### Participants

- Target population: [ ]
- Number: [ ]
- Recruitment criteria: [ ]
- Exclusion criteria: [ ]

### Methods

- [ ] Interviews
- [ ] Surveys
- [ ] Contextual inquiry
- [ ] Diary study
- [ ] Usability testing
- [ ] Competitive research
- [ ] Analytics analysis
- [ ] Support-ticket analysis
- [ ] Review analysis
- [ ] Field observation

---

## 2.2 Research Findings

For every finding document:

**Finding:** [ ]  
**Evidence:** [ ]  
**Frequency:** [ ]  
**Severity:** [ ]  
**Affected users:** [ ]  
**Design implication:** [ ]

---

## 2.3 Persona Template

### Persona: [NAME]

**Role:** [ ]  
**Context:** [ ]  
**Technical proficiency:** [ ]  
**Primary device:** [ ]  

### Goals

- [ ]
- [ ]
- [ ]

### Motivations

- [ ]
- [ ]

### Frustrations

- [ ]
- [ ]

### Behaviors

- [ ]
- [ ]

### Needs

- [ ]
- [ ]

### Accessibility considerations

- [ ]

### Quote

> "[Representative quote]"

### Persona artifact

Create a visual persona card containing:

- Photo / illustration
- Name
- Role
- Goals
- Frustrations
- Behaviors
- Needs
- Context
- Quote

---

## 2.4 Jobs To Be Done

### JTBD Statement

> When [situation], I want to [motivation/action], so that [desired outcome].

### Job details

| Element | Details |
|---|---|
| Situation | [ ] |
| Motivation | [ ] |
| Desired outcome | [ ] |
| Current workaround | [ ] |
| Pain | [ ] |
| Opportunity | [ ] |

---

## 2.5 User Journey Map

Map:

- Stages
- Goals
- Actions
- Thoughts
- Emotions
- Pain points
- Questions
- Touchpoints
- Opportunities
- Business impact

### Journey stages

```text
Awareness
   ↓
Consideration
   ↓
Onboarding
   ↓
First Use
   ↓
Core Task
   ↓
Success
   ↓
Retention
   ↓
Advocacy
```

### Journey table

| Stage | Goal | Action | Thought | Emotion | Pain | Opportunity |
|---|---|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

### Artifact

- [ ] Journey Map
- [ ] Emotional Curve
- [ ] Opportunity Layer

---

## 2.6 Experience Map

Map the complete experience beyond the product UI:

```text
User
 ↓
Website
 ↓
Product
 ↓
Notifications
 ↓
Email
 ↓
Support
 ↓
Human interaction
 ↓
Backend / AI / Data
```

Document:

- Frontstage
- Backstage
- Systems
- People
- Dependencies
- Failure points
- Opportunities

---

# 03 — PROBLEM & OPPORTUNITY

## 3.1 Problem Statement

Use:

> [USER] needs to [ACTION] because [INSIGHT], but currently [BARRIER], resulting in [IMPACT].

### Final problem statement

[Write here]

---

## 3.2 Problem Hierarchy

```text
CORE PROBLEM
     ↓
USER PROBLEM
     ↓
BEHAVIOR PROBLEM
     ↓
INTERFACE PROBLEM
     ↓
INTERACTION PROBLEM
```

Document each layer.

---

## 3.3 Opportunity Map

| User pain | Opportunity | User value | Business value | Effort | Risk |
|---|---|---:|---:|---:|---:|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

Categorize:

- Quick wins
- Strategic opportunities
- Experiments
- Future opportunities

---

## 3.4 Assumption Map

| Assumption | Importance | Evidence | Confidence | Next action |
|---|---|---|---|---|
| [ ] | High | [ ] | Low | [ ] |

---

# 04 — PRODUCT & UX STRATEGY

## 4.1 Product Vision

[Write here]

## 4.2 UX Vision

[Write here]

## 4.3 Strategic Priorities

1. [ ]
2. [ ]
3. [ ]

## 4.4 MVP

### Must have

- [ ]

### Should have

- [ ]

### Could have

- [ ]

### Future

- [ ]

---

## 4.5 Success Metrics

| Goal | Metric | Baseline | Target | Measurement |
|---|---|---:|---:|---|
| Activation | [ ] | [ ] | [ ] | [ ] |
| Retention | [ ] | [ ] | [ ] | [ ] |
| Conversion | [ ] | [ ] | [ ] | [ ] |
| Task success | [ ] | [ ] | [ ] | [ ] |

---

## 4.6 Feature Inventory

| ID | Feature | User | Frequency | Importance | Platform | Status |
|---|---|---|---|---|---|---|
| F01 | [ ] | [ ] | [ ] | Critical/High/Med/Low | [ ] | [ ] |

---

# 05 — INFORMATION ARCHITECTURE

## 5.1 Sitemap

```text
PRODUCT
|
+-- Home
+-- Dashboard
|   +-- Overview
|   +-- Analytics
|   +-- Reports
|
+-- Projects
|   +-- Project List
|   +-- Project Detail
|   +-- Project Settings
|
+-- Search
+-- Notifications
+-- Profile
+-- Settings
```

Replace this with the actual product sitemap.

### Artifact checklist

- [ ] Sitemap
- [ ] Hierarchy map
- [ ] Taxonomy
- [ ] Content model
- [ ] Labeling system

---

## 5.2 Navigation Architecture

### Desktop

Document:

- Global navigation
- Sidebar
- Top navigation
- Breadcrumbs
- Tabs
- Contextual navigation
- Command menu
- Keyboard navigation

### Mobile

Document:

- Top bar
- Bottom navigation
- Back behavior
- Tabs
- Sheets
- Contextual actions
- Gesture navigation

---

## 5.3 Content Architecture

Document:

- Content types
- Metadata
- Categories
- Labels
- Search terms
- Filters
- Sorting
- Relationships
- Permissions

---

# 06 — USER & TASK FLOWS

## 6.1 User Flow Template

```text
TRIGGER
  ↓
SCREEN
  ↓
ACTION
  ↓
SYSTEM RESPONSE
  ↓
DECISION
  ↓
NEXT SCREEN
  ↓
SUCCESS / FAILURE / RECOVERY
```

For every major flow document:

- Trigger
- Preconditions
- Steps
- Decisions
- Errors
- Empty states
- Success
- Recovery
- Exit points

---

## 6.2 Task Flow

```text
GOAL
 ↓
TASK
 ↓
SUBTASK
 ↓
ACTION
 ↓
SYSTEM RESPONSE
 ↓
DECISION
 ↓
NEXT ACTION
```

Record:

- Number of steps
- Number of decisions
- Cognitive load
- Error opportunities
- Time to completion

---

## 6.3 Decision Tree

```text
START
 |
 +-- Condition A?
 |     |
 |     +-- YES → Flow A
 |     |
 |     +-- NO → Flow B
 |
 +-- Condition B?
       |
       +-- YES → Flow C
       +-- NO → Recovery
```

---

## 6.4 Screen Inventory

| ID | Screen | Platform | State | Priority | Flow |
|---|---|---|---|---|---|
| D01 | Dashboard | Desktop | Default | P0 | Main |
| D02 | Dashboard | Desktop | Empty | P0 | Main |
| M01 | Home | Mobile | Default | P0 | Main |

---

## 6.5 Screen-State Matrix

Every important screen should consider:

- [ ] Default
- [ ] Loading
- [ ] Skeleton
- [ ] Empty
- [ ] Error
- [ ] Success
- [ ] Offline
- [ ] Partial data
- [ ] Permission denied
- [ ] First use
- [ ] Returning user
- [ ] Disabled
- [ ] Read-only
- [ ] Expired
- [ ] Maintenance
- [ ] Long content
- [ ] Extreme data

---

# 07 — WIREFRAMES & LAYOUT

## 7.1 Wireframe Levels

### Low fidelity

Focus on:

- Layout
- Hierarchy
- Navigation
- Information architecture

### Mid fidelity

Focus on:

- Component placement
- Interaction
- Content hierarchy
- Responsive behavior

### High fidelity

Focus on:

- Typography
- Color
- Components
- Images
- Motion
- Brand

---

## 7.2 Screen Specification

### Screen ID

[ ]

### Screen name

[ ]

### Purpose

[ ]

### User goal

[ ]

### Entry points

[ ]

### Exit points

[ ]

### Primary action

[ ]

### Secondary actions

[ ]

### Content hierarchy

1. [ ]
2. [ ]
3. [ ]

### Components

- [ ]
- [ ]

### States

- [ ]
- [ ]

### Accessibility

- [ ]

### Responsive behavior

- [ ]

### Analytics events

- [ ]

---

# 08 — INTERACTION & EXPERIENCE

## 8.1 Interaction State Model

For each interactive component:

```text
DEFAULT
   ↓
HOVER
   ↓
FOCUS
   ↓
PRESSED
   ↓
LOADING
   ↓
SUCCESS
   ↓
ERROR
```

Also document:

- Disabled
- Read-only
- Selected
- Expanded
- Collapsed

---

## 8.2 Mobile Interaction Model

Document:

- Tap
- Double tap
- Long press
- Swipe
- Drag
- Pinch
- Pull to refresh
- Haptic feedback
- Keyboard behavior
- Device rotation

---

## 8.3 Microinteraction Specification

For each microinteraction:

| Property | Specification |
|---|---|
| Trigger | [ ] |
| Action | [ ] |
| Feedback | [ ] |
| Result | [ ] |
| Duration | [ ] |
| Easing | [ ] |
| Reduced-motion alternative | [ ] |

---

## 8.4 Forms

Document:

- Labels
- Placeholder
- Required fields
- Optional fields
- Validation
- Inline errors
- Password rules
- Autofill
- Input masks
- Character limits
- Keyboard type
- Save behavior
- Unsaved changes

---

## 8.5 Search

Document:

- Search entry
- Autocomplete
- Suggestions
- Recent searches
- Search results
- Filters
- Sorting
- No results
- Typo correction
- Voice search
- Advanced search

---

## 8.6 Empty States

Create:

- First-use empty
- No-data empty
- No-results empty
- Permission empty
- Error empty
- Offline empty
- Completed state

Every empty state should answer:

**What happened? → Why? → What can I do?**

---

## 8.7 Error Architecture

### Error taxonomy

- User error
- System error
- Network error
- Permission error
- Data error
- Authentication error
- Payment error
- Unknown error

For each:

| Error | Severity | Message | Recovery | Retry | Support |
|---|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

---

# 09 — DESIGN SYSTEM & UI

## 9.1 Foundations

Document:

### Color

- Brand
- Primary
- Secondary
- Background
- Surface
- Text
- Border
- Success
- Warning
- Error
- Information

### Typography

- Font family
- Display
- Heading
- Body
- Caption
- Label
- Numeric styles

### Spacing

Define a spacing scale.

### Other foundations

- Radius
- Elevation
- Shadows
- Icons
- Illustrations
- Motion
- Grid

---

## 9.2 Component Library

Document:

- Buttons
- Inputs
- Selects
- Checkboxes
- Radios
- Toggles
- Cards
- Tables
- Modals
- Drawers
- Bottom sheets
- Tooltips
- Toasts
- Banners
- Tabs
- Navigation
- Pagination
- Menus
- Date pickers
- Uploaders

---

## 9.3 Component Specification

### Component

[Name]

### Purpose

[ ]

### Anatomy

[Describe or link diagram]

### Variants

- [ ]
- [ ]

### Sizes

- [ ]
- [ ]

### States

- [ ]
- [ ]

### Behavior

[ ]

### Accessibility

[ ]

### Responsive behavior

[ ]

### Usage

[ ]

### Don't use when

[ ]

---

## 9.4 Content Design

Define:

- Voice
- Tone
- Terminology
- Labels
- Button language
- Error language
- Empty-state language
- Confirmation language
- Notifications
- Tooltips

### UX Writing Glossary

| Term | Preferred | Avoid | Reason |
|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] |

---

# 10 — VALIDATION & ITERATION

## 10.1 Prototype

Document:

- Prototype scope
- Key flows
- Interactive screens
- Transitions
- Animation
- Simulated data
- Limitations

---

## 10.2 Usability Testing

### Objective

[ ]

### Hypothesis

[ ]

### Participants

[ ]

### Scenario

[ ]

### Tasks

1. [ ]
2. [ ]
3. [ ]

### Success criteria

[ ]

### Metrics

- Task success
- Time on task
- Error rate
- Drop-off
- Satisfaction
- SUS
- Completion rate

---

## 10.3 Findings

| Finding | Evidence | Severity | Recommendation | Status |
|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] |

---

## 10.4 Iteration Log

| Version | Change | Reason | Evidence | Result |
|---|---|---|---|---|
| V01 | [ ] | [ ] | [ ] | [ ] |
| V02 | [ ] | [ ] | [ ] | [ ] |

---

## 10.5 Before / After

### Before

[Describe problem]

### After

[Describe change]

### Evidence

[Metric / test result / observation]

---

# 11 — DEVELOPMENT & QA

## 11.1 Developer Handoff

Every major screen should include:

- [ ] Layout specification
- [ ] Component references
- [ ] Spacing
- [ ] Typography
- [ ] Colors
- [ ] Assets
- [ ] Responsive rules
- [ ] Interaction rules
- [ ] API dependencies
- [ ] Edge cases
- [ ] Accessibility
- [ ] Analytics events

---

## 11.2 Design-to-Development Specification

| Area | Specification |
|---|---|
| Layout | [ ] |
| Grid | [ ] |
| Breakpoints | [ ] |
| Components | [ ] |
| Typography | [ ] |
| Colors | [ ] |
| Motion | [ ] |
| Accessibility | [ ] |
| Data states | [ ] |
| API dependencies | [ ] |

---

## 11.3 Design QA

### Visual

- [ ] Alignment
- [ ] Spacing
- [ ] Typography
- [ ] Colors
- [ ] Icons
- [ ] Images

### Functional

- [ ] Navigation
- [ ] Forms
- [ ] Errors
- [ ] Loading
- [ ] Success
- [ ] Recovery

### Responsive

- [ ] Desktop
- [ ] Laptop
- [ ] Tablet
- [ ] Mobile

### Accessibility

- [ ] Keyboard
- [ ] Screen reader
- [ ] Contrast
- [ ] Focus
- [ ] Text scaling
- [ ] Reduced motion

---

# 12 — METRICS & EXPERIENCE GOVERNANCE

## 12.1 Analytics Instrumentation

For every major interaction:

| Event | Trigger | Properties | Success |
|---|---|---|---|
| [event_name] | [ ] | [ ] | [ ] |

Example:

```text
project_created
```

Properties:

- project_type
- source
- device
- user_type

---

## 12.2 UX Health Metrics

Track:

- Task success
- Completion rate
- Error rate
- Time on task
- Conversion
- Retention
- Satisfaction
- Support contacts
- Feature adoption
- Accessibility issues

---

## 12.3 UX Debt

| Issue | Impact | Effort | Priority | Owner | Status |
|---|---|---|---|---|---|
| [ ] | [ ] | [ ] | P0/P1/P2 | [ ] | [ ] |

---

## 12.4 UX Governance

Define:

- Design review
- Product review
- Accessibility review
- Design-system governance
- Component ownership
- Versioning
- Approval process
- UX debt review
- Research repository
- Documentation ownership

---

# 13 — DESKTOP UX KIT

## 13.1 Desktop Master Canvas

Define:

- Primary viewport: [e.g. 1440px]
- Secondary viewport: [ ]
- Minimum supported width: [ ]
- Maximum content width: [ ]
- Grid: [ ]
- Sidebar: [ ]
- Header: [ ]

---

## 13.2 Desktop Grid

Recommended documentation:

- Column count
- Margin
- Gutter
- Max width
- Content width
- Sidebar width
- Utility area

### Grid artifact

Create a visual 12-column grid.

```text
|--|--|--|--|--|--|--|--|--|--|--|--|
```

---

## 13.3 Desktop Navigation

Document:

- Global navigation
- Sidebar
- Header
- Breadcrumb
- Tabs
- Contextual navigation
- Command palette
- Search
- Keyboard shortcuts

---

## 13.4 Desktop Data-Dense Patterns

Document:

- Tables
- Dashboards
- Filters
- Bulk actions
- Multi-select
- Side panels
- Detail views
- Split views
- Comparison views
- Multi-column layouts

---

## 13.5 Desktop Interaction

Include:

- Hover
- Focus
- Keyboard navigation
- Context menus
- Drag and drop
- Tooltips
- Multi-select
- Right-click behavior
- Shortcuts

---

## 13.6 Desktop Responsive Behavior

Document:

```text
Large Desktop
     ↓
Desktop
     ↓
Laptop
     ↓
Tablet
```

For each component specify:

- Resize
- Collapse
- Hide
- Reorder
- Stack
- Replace

---

# 14 — MOBILE UX KIT

## 14.1 Mobile Platform

Document:

- iOS
- Android
- Device families
- Supported versions
- Portrait
- Landscape

---

## 14.2 Safe Areas

Document:

- Status bar
- Camera / notch area
- Bottom system area
- Keyboard
- Navigation area

---

## 14.3 Mobile Navigation

Document:

- Bottom navigation
- Top bar
- Back navigation
- Tabs
- Drawers
- Sheets
- Full-screen flows

---

## 14.4 Thumb-Zone Design

Create a visual showing:

```text
+----------------------+
|       HARD           |
|                      |
|    REACHABLE         |
|                      |
|       EASY           |
|      ███████         |
+----------------------+
```

Document:

- Primary action location
- Secondary action location
- Thumb reach
- One-handed use

---

## 14.5 Touch Targets

Document:

- Minimum touch target
- Spacing between targets
- Gesture conflict
- Accidental tap prevention

---

## 14.6 Mobile Keyboard Behavior

Document:

- Keyboard type
- Input focus
- Scroll behavior
- Keyboard dismissal
- Submit action
- Autocomplete
- Password manager
- Safe-area interaction

---

## 14.7 Mobile Gestures

Document:

- Tap
- Long press
- Swipe
- Drag
- Pinch
- Pull-to-refresh
- Edge swipe
- Haptic feedback

For every gesture specify:

**Gesture → Visual feedback → Result → Recovery**

---

## 14.8 Mobile Notifications

Document:

- Push
- In-app
- Badge
- Deep links
- Permission request
- Notification preferences
- Notification grouping

---

# 15 — AI UX KIT

For products using AI, add this entire section.

## 15.1 AI Entry Points

Document:

- Chat
- Search
- Inline AI
- Suggestions
- Automation
- AI assistant
- Smart actions

---

## 15.2 AI Interaction Flow

```text
USER REQUEST
     ↓
AI PROCESSING
     ↓
STREAMING / LOADING
     ↓
AI RESPONSE
     ↓
SOURCES / EVIDENCE
     ↓
USER REVIEW
     ↓
ACCEPT / EDIT / REGENERATE
     ↓
RESULT
```

---

## 15.3 AI States

Document:

- Idle
- Thinking
- Streaming
- Success
- Partial result
- Error
- Retry
- Regeneration
- No answer
- Low confidence
- Unsupported request

---

## 15.4 AI Trust

Document:

- Sources
- Citations
- Confidence indicators
- Explainability
- User control
- Human override
- Feedback
- Privacy
- Data usage
- Model limitations

---

## 15.5 AI Failure UX

For every AI failure:

**What happened?**  
[ ]

**Why might it have happened?**  
[ ]

**What can the user do?**  
[ ]

**Can the user retry?**  
[ ]

**Can the user edit the request?**  
[ ]

---

# 16 — EDGE-CASE LIBRARY

Every project should explicitly evaluate:

## Data

- [ ] No data
- [ ] One item
- [ ] Typical data
- [ ] Hundreds of items
- [ ] Thousands of items
- [ ] Extremely long content
- [ ] Missing data
- [ ] Duplicate data
- [ ] Invalid data

## Network

- [ ] Fast network
- [ ] Slow network
- [ ] Offline
- [ ] Intermittent connection
- [ ] API timeout
- [ ] API failure

## Account

- [ ] New user
- [ ] Returning user
- [ ] Expired session
- [ ] Permission revoked
- [ ] Suspended account
- [ ] Deleted account

## Interface

- [ ] Small viewport
- [ ] Large viewport
- [ ] Large text
- [ ] Localization
- [ ] RTL
- [ ] Dark mode
- [ ] Reduced motion

## Content

- [ ] Long names
- [ ] Long titles
- [ ] Huge numbers
- [ ] Special characters
- [ ] Missing image
- [ ] Broken image
- [ ] Translation expansion

---

# 17 — ACCESSIBILITY

## Accessibility Requirements

Document:

- [ ] WCAG target
- [ ] Keyboard navigation
- [ ] Focus management
- [ ] Screen reader
- [ ] Color contrast
- [ ] Touch targets
- [ ] Text scaling
- [ ] Reduced motion
- [ ] Captions
- [ ] Alternative text
- [ ] Form accessibility
- [ ] Cognitive accessibility

### Accessibility specification

| Requirement | Standard | Implementation | QA |
|---|---|---|---|
| Contrast | [ ] | [ ] | [ ] |
| Keyboard | [ ] | [ ] | [ ] |
| Focus | [ ] | [ ] | [ ] |
| Screen reader | [ ] | [ ] | [ ] |

---

# 18 — LOCALIZATION

Document:

- Translation
- Text expansion
- Date formats
- Time formats
- Currency
- Numbers
- Addresses
- Units
- RTL
- Cultural differences
- Locale-specific content

### Localization test matrix

| Locale | Text expansion | Date | Currency | RTL | QA |
|---|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

---

# 19 — MOTION DESIGN

## Motion Principles

Define:

- Purpose
- Continuity
- Feedback
- Orientation
- Attention
- Delight

## Motion specification

| Interaction | Trigger | Duration | Easing | Purpose | Reduced-motion |
|---|---|---:|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

---

# 20 — SECURITY & TRUST UX

Document:

- Login
- MFA
- Password recovery
- Session expiry
- Permissions
- Privacy
- Data deletion
- Security warnings
- Sensitive actions
- Confirmation
- Consent

### Trust moments

Identify where users need confidence:

1. [ ]
2. [ ]
3. [ ]

---

# 21 — ONBOARDING

## Onboarding Journey

```text
INSTALL / ENTRY
      ↓
WELCOME
      ↓
PERMISSION
      ↓
ACCOUNT
      ↓
PREFERENCES
      ↓
FIRST TASK
      ↓
FIRST SUCCESS
      ↓
HABIT / RETENTION
```

Document:

- First-run experience
- Skip behavior
- Progressive onboarding
- Tooltips
- Empty-state onboarding
- Education
- First success moment

---

# 22 — PERSONALIZATION

Document:

- User preferences
- Recommendations
- Recently used
- Favorites
- Defaults
- Adaptive UI
- Personalized dashboard
- Personalization controls

### Memory model

Document:

**What the system remembers:**  
[ ]

**What the system does not remember:**  
[ ]

**What the user can control:**  
[ ]

---

# 23 — DESIGN DECISION RECORDS

For important decisions:

### Decision: [Name]

**Date:** [ ]  
**Decision owner:** [ ]  
**Context:** [ ]  
**Options considered:** [ ]  
**Chosen direction:** [ ]  
**Reason:** [ ]  
**Evidence:** [ ]  
**Trade-offs:** [ ]  
**Revisit when:** [ ]

---

# 24 — UX RISKS

| Risk | Probability | Impact | Mitigation | Owner | Status |
|---|---:|---:|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

---

# 25 — UX DEBT

| UX Debt | User impact | Business impact | Effort | Priority | Owner |
|---|---:|---:|---:|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

---

# 26 — MASTER ARTIFACT CHECKLIST

## Research

- [ ] Research plan
- [ ] Interview guide
- [ ] Survey
- [ ] Research findings
- [ ] Personas
- [ ] JTBD
- [ ] Journey map
- [ ] Experience map

## Strategy

- [ ] Product vision
- [ ] UX vision
- [ ] UX principles
- [ ] Problem statement
- [ ] Opportunity map
- [ ] Competitive analysis
- [ ] Product strategy
- [ ] Success metrics

## Architecture

- [ ] Sitemap
- [ ] Navigation architecture
- [ ] Taxonomy
- [ ] Content model
- [ ] Feature inventory
- [ ] Screen inventory

## Flows

- [ ] User flows
- [ ] Task flows
- [ ] Decision trees
- [ ] Error flows
- [ ] Recovery flows

## Wireframes

- [ ] Low fidelity
- [ ] Mid fidelity
- [ ] High fidelity
- [ ] Responsive layouts
- [ ] Desktop layouts
- [ ] Mobile layouts

## Interaction

- [ ] Component states
- [ ] Microinteractions
- [ ] Forms
- [ ] Search
- [ ] Empty states
- [ ] Error states
- [ ] Loading states
- [ ] Success states
- [ ] Offline states

## UI

- [ ] Design tokens
- [ ] Typography
- [ ] Color
- [ ] Grid
- [ ] Spacing
- [ ] Components
- [ ] Patterns
- [ ] Design system

## Advanced UX

- [ ] AI UX
- [ ] Personalization
- [ ] Accessibility
- [ ] Localization
- [ ] Motion
- [ ] Security
- [ ] Privacy
- [ ] Notifications

## Validation

- [ ] Prototype
- [ ] Usability testing
- [ ] Findings
- [ ] Metrics
- [ ] Iteration
- [ ] Before/after evidence

## Delivery

- [ ] Developer handoff
- [ ] Design QA
- [ ] Accessibility QA
- [ ] Analytics
- [ ] UX debt
- [ ] Governance
- [ ] Final sign-off

---

# 27 — MASTER UX PROCESS

Use this as the overall product-design lifecycle:

```text
DISCOVER
   ↓
RESEARCH
   ↓
UNDERSTAND
   ↓
DEFINE
   ↓
OPPORTUNITY
   ↓
STRATEGY
   ↓
INFORMATION ARCHITECTURE
   ↓
USER FLOWS
   ↓
WIREFRAMES
   ↓
INTERACTION DESIGN
   ↓
VISUAL DESIGN
   ↓
PROTOTYPE
   ↓
TEST
   ↓
ITERATE
   ↓
DESIGN SYSTEM
   ↓
DEVELOPER HANDOFF
   ↓
DESIGN QA
   ↓
LAUNCH
   ↓
MEASURE
   ↓
LEARN
   ↓
IMPROVE
```

---

# 28 — THE IDEAL UX ARTIFACT MAP

A complete project should ideally produce:

```text
                    PRODUCT VISION
                          |
             +------------+------------+
             |                         |
          RESEARCH                  BUSINESS
             |                         |
       Personas / JTBD          Goals / Metrics
             |                         |
             +------------+------------+
                          |
                     PROBLEM SPACE
                          |
                 Opportunities
                          |
                 UX STRATEGY
                          |
                 INFORMATION ARCH
                          |
                    USER FLOWS
                          |
              +-----------+-----------+
              |                       |
           DESKTOP                  MOBILE
              |                       |
          Wireframes              Wireframes
              |                       |
          Interaction             Interaction
              |                       |
          High Fidelity           High Fidelity
              |                       |
              +-----------+-----------+
                          |
                    DESIGN SYSTEM
                          |
                       PROTOTYPE
                          |
                  USABILITY TESTING
                          |
                     ITERATION
                          |
                 DEVELOPER HANDOFF
                          |
                     DESIGN QA
                          |
                       LAUNCH
                          |
                      ANALYTICS
                          |
                   UX GOVERNANCE
```

---

# 29 — FINAL UX SIGN-OFF

## Product

- [ ] Product requirements understood
- [ ] User problems validated
- [ ] Business goals documented
- [ ] Success metrics defined

## UX

- [ ] Personas complete
- [ ] Journey complete
- [ ] Architecture complete
- [ ] Flows complete
- [ ] Edge cases complete

## UI

- [ ] Design system complete
- [ ] Components complete
- [ ] Responsive behavior complete
- [ ] States complete

## Accessibility

- [ ] Accessibility reviewed
- [ ] Keyboard reviewed
- [ ] Screen reader reviewed
- [ ] Contrast reviewed
- [ ] Motion reviewed

## Engineering

- [ ] Handoff complete
- [ ] Specs complete
- [ ] Assets complete
- [ ] Analytics complete
- [ ] API dependencies documented

## QA

- [ ] Visual QA
- [ ] Functional QA
- [ ] Responsive QA
- [ ] Accessibility QA

## Launch

- [ ] Stakeholder approval
- [ ] Product approval
- [ ] Engineering approval
- [ ] UX approval

### Final approval

| Role | Name | Status | Date |
|---|---|---|---|
| Product | [ ] | [ ] | [ ] |
| UX | [ ] | [ ] | [ ] |
| UI | [ ] | [ ] | [ ] |
| Engineering | [ ] | [ ] | [ ] |
| QA | [ ] | [ ] | [ ] |

---

# 30 — QUICK START: 10 ARTIFACTS TO CREATE FIRST

For a new project, start with these ten artifacts:

1. **Product / UX Vision**
2. **Research Findings**
3. **Persona**
4. **Journey Map**
5. **Problem + Opportunity Map**
6. **Information Architecture**
7. **Primary User Flow**
8. **Screen Inventory + State Matrix**
9. **Responsive Wireframes**
10. **Prototype + Usability Test**

Then expand into the full documentation system.

---

# 31 — FINAL PRINCIPLE

A strong UX document should not merely show what the interface looks like.

It should explain:

**WHO** is using it  
**WHY** they are using it  
**WHAT** they need to accomplish  
**WHERE** they encounter friction  
**HOW** the product responds  
**WHAT** happens when things go wrong  
**HOW** the experience changes across devices  
**HOW** accessibility is handled  
**HOW** the design is validated  
**HOW** engineering should implement it  
**HOW** success is measured  
**HOW** the product evolves

The objective is not simply to create beautiful screens.

> **Design the complete experience, document the reasoning, define every important state, and make the experience buildable, testable, accessible, measurable, and continuously improvable.**
