"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: LucideIcon;
    containerClassName?: string;
    isError?: boolean;
    header?: string;
}

export const AppInput = React.forwardRef<HTMLInputElement, AppInputProps>(
    ({ className, icon: Icon, containerClassName, value, header, isError, ...props }, ref) => {
        const hasText = String(value || "").length > 0;

        return (
            <div>
                <p className="text-text-default-black font-open-sans text-[14px] leading-5 font-semibold mb-2">{header}</p>
                <div className={cn("relative group w-full", containerClassName)}>
                    {Icon && (
                        <Icon
                            className={cn(
                                "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200 z-10",
                                isError ? "text-login-error" : (hasText ? "text-text-default-black" : "text-inactive-input"),
                                !isError && "group-focus-within:text-text-default-black"
                            )}
                            strokeWidth={1.5}
                        />
                    )}
                    <input
                        ref={ref}
                        value={value}
                        className={cn(
                            "font-open-sans text-[20px] placeholder:text-inactive-input w-full h-14 bg-white",
                            "border-2 rounded-[20px] pr-4 outline-none transition-all duration-200",
                            "text-text-default-black",
                            Icon ? "pl-12" : "pl-4",

                            isError
                                ? "border-login-error focus:border-login-error"
                                : "border-inactive-input focus:border-text-default-black",

                            className
                        )}
                        {...props}
                    />
                </div>
            </div>
        )
    }
)

AppInput.displayName = "AppInput"