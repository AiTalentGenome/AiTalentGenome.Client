"use client"

import { Button } from '@/components/controls/Button'
import { Bell, Globe } from 'lucide-react'
import { NavLinks } from './NavLinks';
import { useModalStore } from '@/store/useModalStore';
import { useAuthModalStore } from '@/store/useAuthModalStore';
import { useRouter } from 'next/navigation';

const links = [
    { name: "Контакты", href: "/contacts" },
];

export default function GuestsActions() {
    const openAuth = useAuthModalStore((state) => state.openAuth);
    const router = useRouter()

    return (
        <div className="flex items-center gap-4 lg:gap-11">
            <div>
                <NavLinks links={links} />
            </div>

            <div className="hidden sm:flex items-center gap-4">
                <Button variant="accent" onClick={() => router.push("/login")}>Войти</Button>
                <Button variant="primary" onClick={() => router.push("/register")}>Регистрация</Button>
            </div>

            <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#1a1a1a]" strokeWidth={1.5} />
                <span className="font-semibold text-[16px] leading-6 font-manrope">RU</span>
            </div>
        </div>
    )
}
