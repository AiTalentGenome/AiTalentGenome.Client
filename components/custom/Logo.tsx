"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string;
  textClassName?: string;
  imageSize?: {
    width: number;
    height: number;
  };
  hideText?: boolean;
  fontSize?: number;
}

export const Logo = ({ 
  className, 
  textClassName,
  imageSize = { width: 14, height: 30 },
  hideText = false,
  fontSize = 17.58
}: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-5 select-none", className)}>
      <Image
        src="/logo.svg"
        alt="AI Talent Genome Logo"
        width={imageSize.width}
        height={imageSize.height}
        priority
        className="shrink-0"
        /* Для супер-точных дробных размеров из фигмы лучше добавить style и сюда */
        style={{ width: imageSize.width, height: imageSize.height }}
      />

      {!hideText && (
        <span
          className={cn(
            "font-heading font-normal whitespace-nowrap",
            "leading-none tracking-logo text-[#1a1a1a]", 
            textClassName
          )}
          /* ИСПОЛЬЗУЕМ STYLE ДЛЯ ДИНАМИЧЕСКОГО РАЗМЕРА */
          style={{ fontSize: `${fontSize}px` }}
        >
          AI Talent Genome
        </span>
      )}
    </div>
  )
}