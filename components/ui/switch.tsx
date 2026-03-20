"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
    size?: "sm" | "default"
  }
>(({ className, size = "default", ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#32D583] data-[state=unchecked]:bg-[#EAECF0]",
      size === "default" ? "h-5 w-9" : "h-4 w-7",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform",
        size === "default" 
          ? "size-4 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" 
          : "size-3 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
          "w-5 h-5"
      )}
    />
  </SwitchPrimitive.Root>
))

Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }