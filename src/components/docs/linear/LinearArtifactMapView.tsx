import React from "react"
import {
  Layers,
  CheckCircle2,
  ExternalLink,
  Workflow,
  Sparkles,
  FileCheck,
  ShieldCheck,
  Tag,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MermaidDiagram } from "@/components/ui/mermaid-diagram"

export const LinearArtifactMapView: React.FC = () => {
  const artifactTopologyChart = `flowchart TD
    Research["UX Telemetry & Latency Benchmarks<br/>(2.4s Creation vs 18.2s Jira Baseline)"] --> DesignTokens["Linear Obsidian Design Tokens<br/>(#5E6AD2 Accent, #0F1015 Canvas, WCAG AAA)"]
    
    subgraph FigmaSpecs["Master Figma Design File (Linear UI 2202-2)"]
      FigmaComponents["Component Library & Primitives<br/>(IssueRow, StatusPicker, CommandMenu)"]
      FigmaFlows["14 Screen Prototypes & States<br/>(L01–L14 Onboarding to Git Ergonomics)"]
    end
    
    subgraph Codebase["Production Implementation (Web & Native)"]
      LocalSync["SQLite Wasm + WebSocket Delta Engine"]
      Keybindings["Universal Keydown Event Dispatcher ('C', 'S', '⌘K')"]
      A11yEngine["Aria-Live Status Regions & Focus Traps"]
    end
    
    subgraph Verification["Traceability & Continuous QA"]
      Lighthouse["100% Performance & A11y Audit"]
      VCSIntegration["GitHub / GitLab Webhook Gateway"]
      SUSMetric["91.4 SUS Usability Score Benchmark"]
    end
    
    Research --> FigmaSpecs
    DesignTokens --> FigmaComponents
    FigmaComponents --> Codebase
    FigmaFlows --> Codebase
    Codebase --> Verification`

  const traceabilityMatrix = [
    {
      artifactId: "ART-L01",
      name: "Workspace Domain & Setup",
      figmaNode: "Node 2202-2 / Onboarding",
      screenCode: "L01",
      status: "Verified",
      owner: "Design Systems",
    },
    {
      artifactId: "ART-L04",
      name: "Obsidian Theme Engine",
      figmaNode: "Node 2202-2 / Styles & Colors",
      screenCode: "L04",
      status: "Verified",
      owner: "Design Systems",
    },
    {
      artifactId: "ART-L05",
      name: "GitHub PR Automation Flow",
      figmaNode: "Node 2202-2 / Integrations",
      screenCode: "L05",
      status: "Verified",
      owner: "Sync Engine Team",
    },
    {
      artifactId: "ART-L07",
      name: "Active Issue Table Architecture",
      figmaNode: "Node 2202-2 / Issues List",
      screenCode: "L07",
      status: "Verified",
      owner: "Core Web App",
    },
    {
      artifactId: "ART-L08",
      name: "Quick Status Switcher ('S')",
      figmaNode: "Node 2202-2 / Quick Commands",
      screenCode: "L08",
      status: "Verified",
      owner: "Interaction Ergonomics",
    },
    {
      artifactId: "ART-L10",
      name: "Rapid Issue Creation Cockpit ('C')",
      figmaNode: "Node 2202-2 / Issue Modal",
      screenCode: "L10",
      status: "Verified",
      owner: "Core Web App",
    },
    {
      artifactId: "ART-L12",
      name: "Global Command Menu (⌘K)",
      figmaNode: "Node 2202-2 / Command Palette",
      screenCode: "L12",
      status: "Verified",
      owner: "Interaction Ergonomics",
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 px-4 py-2 min-h-[32px] text-xs font-bold text-[#5E6AD2] dark:text-[#7C88E8]">
            <Layers className="size-3.5" />
            <span>28 — The Ideal UX Artifact Map</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            End-to-End Artifact Topology & Figma Traceability
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Linear maintains unbroken traceability between UX research benchmarks, master Figma design files, local sync engine architecture, and production delivery.
          </p>
        </div>
      </div>

      {/* 28.1 Artifact Topology Flowchart */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <Workflow className="size-4 text-[#5E6AD2]" />
          <div>
            <h2 className="text-lg font-bold text-foreground">
              28.1 Linear Ecosystem Artifact Topology
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Visual map illustrating how UX research informs tokens, Figma components, client code, and continuous verification.
            </p>
          </div>
        </div>

        <MermaidDiagram
          chart={artifactTopologyChart}
          title="Linear Master Artifact Topology Flowchart"
          caption="Unbroken bi-directional traceability linking research telemetry, Figma design tokens, and production client code."
        />
      </div>

      {/* 28.2 Traceability Matrix */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-3 flex-wrap">
          <div className="flex items-center gap-2">
            <FileCheck className="size-4 text-[#5E6AD2]" />
            <div>
              <h2 className="text-lg font-bold text-foreground">
                28.2 Figma-to-Code Traceability Matrix
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Connecting official Figma nodes to production screen archetypes.
              </p>
            </div>
          </div>

          <a
            href="https://www.figma.com/design/KbEEvOwGnxSPis5uzH5Fq0/Linear-UI?node-id=2202-2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 min-h-[44px] px-5 py-2.5 rounded-xl border border-border bg-muted/40 hover:bg-muted text-xs font-bold text-foreground transition group"
          >
            <span>Open Linear Master Figma</span>
            <ExternalLink className="size-3 text-muted-foreground group-hover:text-foreground" />
          </a>
        </div>

        <div className="border border-border rounded-xl overflow-hidden bg-card">
          <table className="w-full text-xs text-left">
            <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border">
              <tr>
                <th className="p-3">Artifact ID</th>
                <th className="p-3">Deliverable Name</th>
                <th className="p-3">Figma Target Frame</th>
                <th className="p-3">Screen ID</th>
                <th className="p-3">QA Verification</th>
                <th className="p-3">Component Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {traceabilityMatrix.map((item) => (
                <tr key={item.artifactId} className="hover:bg-muted/40 transition-colors">
                  <td className="p-3 font-mono font-bold text-[#5E6AD2]">{item.artifactId}</td>
                  <td className="p-3 font-bold text-foreground">{item.name}</td>
                  <td className="p-3 font-mono text-muted-foreground">{item.figmaNode}</td>
                  <td className="p-3 font-mono font-bold text-foreground">{item.screenCode}</td>
                  <td className="p-3">
                    <Badge
                      variant="outline"
                      className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 text-[10px] font-bold"
                    >
                      <CheckCircle2 className="size-3 mr-1" /> {item.status}
                    </Badge>
                  </td>
                  <td className="p-3 text-muted-foreground">{item.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
