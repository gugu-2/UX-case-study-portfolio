import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-[8px] border border-transparent font-sans font-bold whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-48 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
  {
    variants: {
      variant: {
        // Contained Variants (Figma)
        default:
          "bg-[#00ab55] text-white hover:bg-[#007b55] shadow-[0_8px_16px_rgba(0,171,85,0.24)] border-transparent",
        primary:
          "bg-[#00ab55] text-white hover:bg-[#007b55] shadow-[0_8px_16px_rgba(0,171,85,0.24)] border-transparent",
        secondary:
          "bg-[#3366ff] text-white hover:bg-[#1939b7] shadow-[0_8px_16px_rgba(51,102,255,0.24)] border-transparent",
        inherit:
          "bg-[#212b36] text-white hover:bg-[#454f5b] shadow-[0_8px_16px_rgba(33,43,54,0.24)] border-transparent dark:bg-white dark:text-[#212b36] dark:hover:bg-[#dfe3e8]",
        dark:
          "bg-[#212b36] text-white hover:bg-[#454f5b] shadow-[0_8px_16px_rgba(33,43,54,0.24)] border-transparent",
        info:
          "bg-[#00b8d9] text-white hover:bg-[#006c9c] shadow-[0_8px_16px_rgba(0,184,217,0.24)] border-transparent",
        success:
          "bg-[#36b37e] text-white hover:bg-[#1b806a] shadow-[0_8px_16px_rgba(54,179,126,0.24)] border-transparent",
        warning:
          "bg-[#ffab00] text-[#212b36] hover:bg-[#b76e00] shadow-[0_8px_16px_rgba(255,171,0,0.24)] border-transparent",
        error:
          "bg-[#ff5630] text-white hover:bg-[#b71d18] shadow-[0_8px_16px_rgba(255,86,48,0.24)] border-transparent",
        destructive:
          "bg-[#ff5630] text-white hover:bg-[#b71d18] shadow-[0_8px_16px_rgba(255,86,48,0.24)] border-transparent",

        // Outlined Variants
        outline:
          "border border-border/80 bg-transparent text-foreground hover:bg-muted",
        "outline-primary":
          "border border-[#00ab55] bg-transparent text-[#00ab55] hover:bg-[#00ab55]/8",
        "outline-secondary":
          "border border-[#3366ff] bg-transparent text-[#3366ff] hover:bg-[#3366ff]/8",

        // Soft Variants (12% alpha bg, dark variant text)
        soft:
          "bg-[#00ab55]/12 text-[#007b55] dark:text-[#5be584] hover:bg-[#00ab55]/20 border-transparent",
        "soft-secondary":
          "bg-[#3366ff]/12 text-[#1939b7] dark:text-[#84a9ff] hover:bg-[#3366ff]/20 border-transparent",
        "soft-info":
          "bg-[#00b8d9]/12 text-[#006c9c] dark:text-[#61f3f3] hover:bg-[#00b8d9]/20 border-transparent",
        "soft-success":
          "bg-[#36b37e]/12 text-[#1b806a] dark:text-[#86e8ab] hover:bg-[#36b37e]/20 border-transparent",
        "soft-warning":
          "bg-[#ffab00]/12 text-[#b76e00] dark:text-[#ffd666] hover:bg-[#ffab00]/20 border-transparent",
        "soft-error":
          "bg-[#ff5630]/12 text-[#b71d18] dark:text-[#ffac82] hover:bg-[#ff5630]/20 border-transparent",
        "soft-inherit":
          "bg-[rgba(145,158,171,0.16)] text-foreground hover:bg-[rgba(145,158,171,0.24)] border-transparent",

        // Text & Ghost Variants
        ghost:
          "border-transparent bg-transparent hover:bg-muted hover:text-foreground text-foreground",
        text:
          "border-transparent bg-transparent text-[#00ab55] hover:bg-[#00ab55]/8",
        link:
          "border-transparent bg-transparent text-[#00ab55] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        // Large (Figma: height 48px, text 15px / lh 26px, padding 11px 22px, radius 8px)
        lg: "h-12 min-h-[48px] px-[22px] py-[11px] text-[15px] leading-[26px] gap-2 rounded-[8px]",
        // Medium (Figma: height 36px, text 14px / lh 24px, padding 6px 16px, radius 8px)
        default: "h-9 min-h-[36px] px-4 py-[6px] text-sm leading-6 gap-2 rounded-[8px]",
        md: "h-9 min-h-[36px] px-4 py-[6px] text-sm leading-6 gap-2 rounded-[8px]",
        // Small (Figma: height 30px, text 13px / lh 22px, padding 4px 10px, radius 8px)
        sm: "h-[30px] min-h-[30px] px-2.5 py-1 text-[13px] leading-[22px] gap-1.5 rounded-[8px]",
        xs: "h-7 min-h-[28px] px-2 py-0.5 text-xs gap-1 rounded-[6px]",
        // Icon buttons (Circular: cornerRadius 50)
        icon: "size-10 min-h-[40px] min-w-[40px] rounded-full p-0",
        "icon-lg": "size-12 min-h-[48px] min-w-[48px] rounded-full p-0",
        "icon-sm": "size-8 min-h-[32px] min-w-[32px] rounded-full p-0",
        "icon-xs": "size-7 min-h-[28px] min-w-[28px] rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
