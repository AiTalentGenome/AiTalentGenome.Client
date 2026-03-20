"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface AppLinkProps {
  id?: string
  href: string;
  name: string;
  icon?: React.ReactNode; // Возможность вставить иконку
  className?: string;
}

export const AppLink = ({ href, name, icon, className, id }: AppLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      id={id}
      href={href}
      className={cn(
        /* Базовые стили из твоего конфига */
        "flex items-center gap-2 font-manrope font-semibold text-[16px] leading-6 transition-colors hover:text-primary",
        className
      )}
    >
      {/* Если иконка передана, рендерим её */}
      {icon && <span className="flex-none">{icon}</span>}
      <span>{name}</span>
    </Link>
  );
};