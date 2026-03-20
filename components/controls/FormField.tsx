import * as React from "react"
import { cn } from "@/lib/utils"

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ className, helperText, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-2">
        {/* Само поле ввода */}
        <input
          ref={ref}
          className={cn(
            // Стили из Figma
            "w-full h-12 px-4 rounded-2xl", // Высота 48, отступы 24, радиус 20
            "bg-input-bg border-none outline-none", // Фон без рамок
            "font-input-placeholder text-base leading-6 text-text-muted", // Manrope, 16px, 24px line-height
            "placeholder:text-text-muted",
            "focus:ring-2 focus:ring-primary/20 transition-all",
            className
          )}
          {...props}
        />

        {/* Вспомогательный текст */}
        {helperText && (
          <p className="font-manrope text-[14px] leading-4 text-[#919999]">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField }