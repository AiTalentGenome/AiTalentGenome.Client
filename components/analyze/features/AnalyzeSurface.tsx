"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useUploadStore } from "@/store/useUploadStore";

interface AnalyzeSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AnalyzeSurface = ({
  children, className, ...props
}: AnalyzeSurfaceProps) => {

  const { isDragging, isUploading, isSuccess } = useUploadStore();
  
  const getBackground = () => {
    if (isSuccess) return "bg-[#F2F4F7]"; 
    if (isUploading) return "bg-[#2494B380]"; 
    if (isDragging) return "bg-[#2494B31A]"; 
    return "bg-[#F2F4F7]"; // Всегда обычный серый в покое
  };

  const showDashed = (isDragging || isUploading) && !isSuccess;

  return (
    <div
      className={cn(
        "w-full rounded-[40px] transition-all duration-500 flex flex-col justify-center min-h-100 relative overflow-hidden",
        getBackground(),
        className
      )}
      style={showDashed ? {
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='40' ry='40' stroke='%232494B3' stroke-width='5' stroke-dasharray='15%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
      } : {}}
      {...props}
    >
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}