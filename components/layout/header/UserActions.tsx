"use client"

import { Button } from '@/components/controls/Button'
import { Bell } from 'lucide-react'
import { NavLinks } from './NavLinks'

const links = [
        { name: "Мои вакансии", href: "/vacancies" },
        { name: "Мои кандидаты", href: "/candidates" },
        { name: "Анализ", href: "/analyze" },
    ];

export default function UserActions() {
    return (
        <div className="flex items-center gap-4 lg:gap-12">
            <div className="hidden sm:flex items-center gap-3">
                <NavLinks links={links} />
            </div>

            <div className="flex items-center gap-6">
                <div className="relative cursor-pointer">
                    <Bell className="w-5 h-5 text-[#1a1a1a]" strokeWidth={1.5} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-[#2494B3] rounded-full border border-white" />
                </div>

                {/* Аватар */}
                <div className="w-12 h-12 rounded-full p-0.5 bg-linear-to-tr from-[#2494B3] to-inactive-input">
                    <div className="w-full h-full rounded-full bg-[#F2F4F7] flex items-center justify-center border-2 border-white overflow-hidden">
                        <span className="font-manrope font-semibold text-sm text-[#1a1a1a]">АГ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
