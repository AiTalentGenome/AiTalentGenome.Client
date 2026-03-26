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
        ghost: "hover:bg-accent/10 hover:text-accent disabled:bg-[#F3F5F5] disabled:text-[#BCC8CC]",
        accent: "bg-accent-default text-white hover:bg-accent-hover active:bg-accent-pressed disabled:bg-accent-disabled",
        default: "bg-white hover:bg-white active:bg-white disabled:bg-white hover:text-[#656666] active:text-[#191A1A] disabled:text-[#BCC8CC]",
        primary: "bg-primary-default text-white hover:bg-primary-hover active:bg-primary-pressed disabled:bg-primary-disabled",
        secondary: "border-[1.5px] border-secondary-default text-[#2494B3] hover:border-secondary-hover hover:bg-[#F3F5F5] hover:text-[#39A2BF] active:bg-[#F3F5F5] active:border-none active:text-[#6D7373] disabled:bg-secondary-disabled disabled:border-none disabled:text-[#BCC8CC]",
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
      variant: "accent",
      size: "figma",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean; // Добавим для красоты
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent rounded-full" />
        ) : null}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }