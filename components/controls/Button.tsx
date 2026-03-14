import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Базовые стили: убираем фикс. ширину, ставим flex и gap
  "inline-flex items-center justify-center gap-[8px] whitespace-nowrap text-[16px] font-normal leading-6 transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 font-primary-button active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:opacity-90 disabled:bg-[#F3F5F5] disabled:text-[#BCC8CC]",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:opacity-90 disabled:bg-[#F3F5F5] disabled:text-[#BCC8CC]",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary/5 transition-colors disabled:bg-[#F3F5F5] disabled:text-[#BCC8CC] disabled:border-none",
        ghost: "hover:bg-accent/10 hover:text-accent disabled:bg-[#F3F5F5] disabled:text-[#BCC8CC]",
        accent: "bg-accent text-white hover:opacity-90 disabled:bg-[#CC8F8F] disabled:text-white"
      },
      size: {
        figma: "h-[48px] px-7 rounded-[20px]",
        sm: "h-8 px-3 text-xs rounded-md",
        lg: "h-12 px-8 text-base rounded-xl",
        icon: "h-[48px] w-[48px] rounded-[var(--radius)]", // Квадратная для иконок
        accent: "h-[56px] rounded-[20px]"
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "figma",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }