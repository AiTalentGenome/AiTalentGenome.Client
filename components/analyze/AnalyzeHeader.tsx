import * as React from "react"

interface AnalyzeHeaderProps {
  title: string;
  description: string;
}

export const AnalyzeHeader = ({ title, description }: AnalyzeHeaderProps) => {
  return (
    <div className="space-y-4 max-w-315.75">
      <h1 className="font-heading text-[26px] leading-tight text-foreground tracking-tight">
        {title}
      </h1>
      <p className="font-body text-base text-[18px] text-black leading-relaxed">
        {description}
      </p>
    </div>
  )
}