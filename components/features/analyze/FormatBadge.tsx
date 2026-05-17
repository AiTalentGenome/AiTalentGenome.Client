"use client"

import { cn } from "@/lib/utils"

const formatVariants = {
  pdf: "bg-[#CC5952]", // Красный
  word: "bg-[#3D7299]", // Синий
  mp3: "bg-[#919999]",  
  mp4: "bg-[#919999]",
  mov: "bg-[#919999]",
  wav: "bg-[#66BB6A]", 
  media: "bg-[#919999]", // Серый для MP4/MOV как в image_a11f1d.png
  default: "bg-[#BCC8CC]"
}

export type FormatType = keyof typeof formatVariants;

interface FormatBadgeProps {
  type: keyof typeof formatVariants;
  className?: string;
}

export const FormatBadge = ({ type, className }: FormatBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 rounded-[11.55px] min-w-12.5 transition-opacity hover:opacity-90",
        formatVariants[type] || formatVariants.default,
        className
      )}
    >
      <span className={cn(
        "text-white text-center antialiased select-none",
        "font-manrope font-normal text-[14px] leading-4.5 uppercase"
      )}>
        {type}
      </span>
    </div>
  )
}