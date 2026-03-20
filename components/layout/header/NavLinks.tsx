"use client"

import * as React from "react"
import { LayoutDashboard, FileText, Settings } from "lucide-react" // Пример иконок
import { AppLink } from "@/components/controls/AppLink";

interface NavLinksProps {
  links: { 
    name: string; 
    href: string; 
    icon?: React.ReactNode; // Опциональная иконка в данных
  }[] 
}

export const NavLinks = ({ links }: NavLinksProps) => {
  return (
    <nav className="hidden md:flex items-center gap-10">
      {links.map((link) => (
        <AppLink 
          key={link.href}
          href={link.href}
          name={link.name}
          icon={link.icon} 
        />
      ))}
    </nav>
  );
};