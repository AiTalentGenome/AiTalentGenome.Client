// components/custom/Headers/SubHeader.tsx
import { cn } from '@/lib/utils'
import React from 'react'

interface SubHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string;
}

export default function SubHeader({ 
    title,
    className, // Используем стандартное имя
    ...props 
}: SubHeaderProps) {
  return (
    <h3 
      className={cn(
        "font-unbounded text-[20px] font-normal leading-6 text-foreground tracking-tight",
        className
      )}
      {...props}
    >
        {title}
    </h3>
  )
}