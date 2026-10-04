import React, { useState } from "react"
import {
  Type,
  Copy,
  Check,
  Smartphone,
  Monitor,
  Sparkles,
  Info,
  Sliders,
  RotateCcw,
  CheckCircle2,
  Layers,
  ArrowRight
} from "lucide-react"
import { typographyScale, TypoToken } from "@/data/tokenData"
import { Badge } from "@/components/ui/badge"

export function TypographySpecimen() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("desktop")
  const [customText, setCustomText] = useState<string>("")
  const [activeFilter, setActiveFilter] = useState<"all" | "Headline" | "Text">("all")

  const defaultSpecimen = "Almost before we knew it, we had left the ground."

  const handleCopy = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedToken(tokenName)
    setTimeout(() => {
      setCopiedToken(null)
    }, 2000)
  }

  const headlines = typographyScale.filter((t) => t.category === "Headline")
  const texts = typographyScale.filter((t) => t.category === "Text")

  return (
    <div className="space-y-10 animate-in fade-in-50 duration-300 pb-8">

      {/* ---------------- 1. PUBLIC SANS FONT FAMILY INTRO ---------------- */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Public Sans Branding & Alphabet Specimen */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-[#00AB55]" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00AB55] tracking-tight">
                Public Sans
              </h2>
            </div>
            <div className="space-y-1 font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed select-all">
              <p className="tracking-widest">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="tracking-widest">abcdefghijklmnopqrstuvwxyz</p>
              <p className="tracking-widest">1234567890!@#$%^&*()_+</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pt-1">
              Primary brand and UI typeface. An open-source, neutral neo-grotesque sans-serif designed for optimal legibility in dense data tables, headings, and long-form UX case study documentation.
            </p>
          </div>

          {/* Right: Weight Glyphs (Aa) - Exactly matching the image */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Regular 400 */}
              <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-muted/20 hover:border-primary/40 transition">
                <span className="text-4xl sm:text-5xl font-normal text-foreground font-sans">
                  Aa
                </span>
                <span className="text-xs font-semibold text-muted-foreground mt-2">Regular</span>
                <span className="text-[10px] font-mono text-muted-foreground">400</span>
              </div>

              {/* Medium 500 */}
              <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-muted/20 hover:border-primary/40 transition">
                <span className="text-4xl sm:text-5xl font-medium text-foreground font-sans">
                  Aa
                </span>
                <span className="text-xs font-semibold text-muted-foreground mt-2">Medium</span>
                <span className="text-[10px] font-mono text-muted-foreground">500</span>
              </div>

              {/* Semi-Bold 600 */}
              <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-muted/20 hover:border-primary/40 transition">
                <span className="text-4xl sm:text-5xl font-semibold text-foreground font-sans">
                  Aa
                </span>
                <span className="text-xs font-semibold text-muted-foreground mt-2">Semi-Bold</span>
                <span className="text-[10px] font-mono text-muted-foreground">600</span>
              </div>

              {/* Bold 700 */}
              <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-muted/20 hover:border-primary/40 transition">
                <span className="text-4xl sm:text-5xl font-bold text-foreground font-sans">
                  Aa
                </span>
                <span className="text-xs font-semibold text-muted-foreground mt-2">Bold</span>
                <span className="text-[10px] font-mono text-muted-foreground">700</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- 2. INTERACTIVE CONTROLS BAR ---------------- */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl border border-border bg-muted/30">
        {/* Custom Specimen Input */}
        <div className="flex-1 flex items-center gap-2">
          <Sliders className="size-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Type custom text to test all typography tokens in real-time..."
            className="w-full bg-background border border-border rounded-lg px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {customText && (
            <button
              onClick={() => setCustomText("")}
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 px-2 py-1 rounded bg-muted cursor-pointer"
              title="Reset specimen text"
            >
              <RotateCcw className="size-3" />
              Reset
            </button>
          )}
        </div>

        {/* Viewport Scale Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-muted-foreground">Scale Mode:</span>
          <div className="flex items-center rounded-lg border border-border bg-background p-0.5 text-xs">
            <button
              onClick={() => setViewportMode("desktop")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-bold transition cursor-pointer ${
                viewportMode === "desktop"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Monitor className="size-3.5" />
              Desktop (64px H1)
            </button>
            <button
              onClick={() => setViewportMode("mobile")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-bold transition cursor-pointer ${
                viewportMode === "mobile"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Smartphone className="size-3.5" />
              Mobile (40px H1)
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- 3. HEADLINES SECTION ---------------- */}
      <div className="space-y-4">
        {/* Section Header with Orange Vertical Bar (Matching Image) */}
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 rounded-full bg-[#FFAB00]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Headlines
          </h2>
          <span className="text-xs text-muted-foreground">
            ({headlines.length} Display Tokens · ExtraBold 800 & Bold 700)
          </span>
        </div>

        {/* Enclosed Card Container */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-xs divide-y divide-border/60">
          {headlines.map((item) => {
            const isDesktop = viewportMode === "desktop"
            const renderedSize = isDesktop ? item.size : item.mobileSize || item.size
            const renderedLineHeight = isDesktop ? item.lineHeight : item.mobileLineHeight || item.lineHeight
            const displayText = customText || item.specimen

            return (
              <div
                key={item.name}
                className="py-8 first:pt-2 last:pb-2 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 group"
              >
                {/* Left: Token Identifier Badge */}
                <div className="w-20 shrink-0">
                  <span className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground/70 block mt-0.5">
                    {renderedSize}
                  </span>
                </div>

                {/* Center: Live Rendered Specimen */}
                <div className="flex-1 min-w-0">
                  <div
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: renderedSize,
                      lineHeight: renderedLineHeight,
                      fontWeight: item.numericWeight,
                      letterSpacing: item.letterSpacing,
                    }}
                    className="text-foreground transition-all duration-200 break-words"
                  >
                    {displayText}
                  </div>

                  {/* Token Metadata & Quick Copy Row */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <Badge variant="outline" className="font-mono text-[11px] bg-muted/40">
                      <strong>Weight:</strong> {item.weight}
                    </Badge>
                    <Badge variant="outline" className="font-mono text-[11px] bg-muted/40">
                      <strong>Size / Leading:</strong> {renderedSize} / {renderedLineHeight}
                    </Badge>
                    <Badge variant="outline" className="font-mono text-[11px] bg-muted/40 text-primary">
                      {item.cssClass}
                    </Badge>

                    {/* Copy CSS Button */}
                    <button
                      onClick={() => handleCopy(item.cssClass, item.name)}
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded border border-border/80 bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer ml-auto"
                      title="Copy CSS utility class"
                    >
                      {copiedToken === item.name ? (
                        <>
                          <Check className="size-3 text-emerald-500" />
                          <span className="text-emerald-500 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3" />
                          <span>Copy Class</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ---------------- 4. TEXTS (BODY & FUNCTIONAL) SECTION ---------------- */}
      <div className="space-y-4">
        {/* Section Header with Orange Vertical Bar (Matching Image) */}
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 rounded-full bg-[#FFAB00]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Texts
          </h2>
          <span className="text-xs text-muted-foreground">
            ({texts.length} Subtitle, Body, Caption & Overline Tokens)
          </span>
        </div>

        {/* Enclosed Card Container */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-xs divide-y divide-border/60">
          {texts.map((item) => {
            const displayText = customText
              ? item.name === "OVERLINE"
                ? customText.toUpperCase()
                : customText
              : item.specimen

            return (
              <div
                key={item.name}
                className="py-6 first:pt-2 last:pb-2 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 group"
              >
                {/* Left: Token Identifier Badge */}
                <div className="w-24 shrink-0">
                  <span className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground/70 block mt-0.5">
                    {item.size}
                  </span>
                </div>

                {/* Center: Live Rendered Specimen */}
                <div className="flex-1 min-w-0">
                  <div
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: item.size,
                      lineHeight: item.lineHeight,
                      fontWeight: item.numericWeight,
                      letterSpacing: item.letterSpacing,
                      textTransform: item.case === "All caps" ? "uppercase" : "none",
                    }}
                    className="text-foreground transition-all duration-200"
                  >
                    {displayText}
                  </div>

                  {/* Token Metadata & Quick Copy Row */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs">
                    <Badge variant="outline" className="font-mono text-[11px] bg-muted/40">
                      <strong>Weight:</strong> {item.weight}
                    </Badge>
                    <Badge variant="outline" className="font-mono text-[11px] bg-muted/40">
                      <strong>Size / Leading:</strong> {item.size} / {item.lineHeight}
                    </Badge>
                    <Badge variant="outline" className="font-mono text-[11px] bg-muted/40 text-primary">
                      {item.cssClass}
                    </Badge>

                    {/* Copy CSS Button */}
                    <button
                      onClick={() => handleCopy(item.cssClass, item.name)}
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded border border-border/80 bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer ml-auto"
                      title="Copy CSS utility class"
                    >
                      {copiedToken === item.name ? (
                        <>
                          <Check className="size-3 text-emerald-500" />
                          <span className="text-emerald-500 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3" />
                          <span>Copy Class</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ---------------- 5. FULL TYPOGRAPHY MATRIX TABLE ---------------- */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Layers className="size-4 text-primary" />
            <h3 className="figma-h3 text-[20px] lg:text-[24px] font-bold text-foreground">
              Complete Typography Specifications Matrix
            </h3>
          </div>
          <Badge variant="outline" className="text-xs font-mono">
            12 Primary Tokens
          </Badge>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          The table below documents the strict typographic constants applied throughout our application components, heading hierarchy, and developer handoff schemas.
        </p>

        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-muted/40">
              <tr>
                <th className="p-3">Token</th>
                <th className="p-3">Category</th>
                <th className="p-3">Font Family</th>
                <th className="p-3">Weight</th>
                <th className="p-3">Desktop Size / Leading</th>
                <th className="p-3">Mobile Size / Leading</th>
                <th className="p-3">Letter Spacing</th>
                <th className="p-3">CSS Class</th>
                <th className="p-3">Application Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground">
              {typographyScale.map((token) => (
                <tr key={token.name} className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 font-mono font-bold text-primary whitespace-nowrap">
                    {token.name}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <Badge variant="outline" className="text-[10px]">
                      {token.category}
                    </Badge>
                  </td>
                  <td className="p-3 font-mono whitespace-nowrap text-muted-foreground">
                    {token.typeface}
                  </td>
                  <td className="p-3 whitespace-nowrap font-medium">
                    {token.weight}
                  </td>
                  <td className="p-3 font-mono whitespace-nowrap">
                    {token.size} / {token.lineHeight}
                  </td>
                  <td className="p-3 font-mono whitespace-nowrap text-muted-foreground">
                    {token.mobileSize || token.size} / {token.mobileLineHeight || token.lineHeight}
                  </td>
                  <td className="p-3 font-mono whitespace-nowrap text-muted-foreground">
                    {token.letterSpacing}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <code className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-muted px-1.5 py-0.5 rounded">
                      {token.cssClass}
                    </code>
                  </td>
                  <td className="p-3 text-muted-foreground text-[11px] max-w-xs leading-relaxed">
                    {token.usage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
