import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {/* Иконка ДНК из макета image_9756c2.png */}
      <Image
        src="/logo.svg"
        alt="AI Talent Genome Logo"
        width={14}
        height={30}
        priority
      />

      {/* Текстовая часть логотипа */}
      <span
        className={cn(
          "font-heading font-normal", // Unbounded Regular [cite: 2026-02-25]
          "text-[17.58px] leading-none", // Точный размер и line-height 100% [cite: 2026-02-25]
          "tracking-logo text-[#000000]", // Letter-spacing 2% и черный цвет [cite: 2026-02-25]
          "whitespace-nowrap"
        )}
      >
        AI Talent Genome
      </span>
    </div>
  )
}