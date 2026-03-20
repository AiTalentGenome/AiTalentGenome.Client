import React from 'react'

export default function MainHeader({ title }: {title: string}) {
  return (
    <h1 className="font-unbounded text-[26px] leading-tight text-foreground tracking-tight">
        {title}
    </h1>
  )
}
