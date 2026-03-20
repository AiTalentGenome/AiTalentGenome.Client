import MainHeader from "@/components/custom/Headers/MainHeader";
import * as React from "react"

interface AnalyzeHeaderProps {
  title?: string;
  description?: string;
}

export const AnalyzeHeader = ({ title, description }: AnalyzeHeaderProps) => {
  return (
    <>
      {title && <div className="space-y-4 max-w-315.75">
        <MainHeader title={title} />
        {
          description && (
            <p className="font-manrope text-base text-[18px] font-normal text-black leading-5.5">
              {description}
            </p>
          )}
      </div>}
    </>

  )
}