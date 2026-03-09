"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavLinksProps {
    links: { name: string; href: string; }[] 
}

export const NavLinks = ({ links }: NavLinksProps) => {
    const pathname = usePathname();

    return (
        <nav className="hidden md:flex items-center gap-15">
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            /* ПРИМЕНЯЕМ ДАННЫЕ ИЗ ФИГМЫ: */
                            "font-body font-semibold text-[16px] leading-6 text-center transition-colors hover:text-primary",
                            isActive ? "text-primary" : "text-[#1a1a1a]"
                        )}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};