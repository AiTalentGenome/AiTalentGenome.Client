// components/layout/header/components/HeaderAvatar.tsx
"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { UserProfileContent } from "./UserProfileContent"
import { ArrowLeft, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useHHAuth } from "@/features/hh-auth/hooks/hh-use-auth"

export function HeaderAvatar() {
    const { user, isLoading } = useHHAuth()

    // Функция для получения инициалов
    const getInitials = () => {
        if (isLoading || !user) return "??"

        const first = user.firstName?.[0] || ""
        const last = user.lastName?.[0] || ""
        return (first + last).toUpperCase()
    }

    const initials = getInitials()

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="w-12 h-12 rounded-full p-0.5 bg-linear-to-tr from-[#2494B3] to-inactive-input cursor-pointer transition-transform hover:scale-105 active:scale-95 group">
                    <div className="w-full h-full rounded-full flex items-center justify-center border-2 border-white overflow-hidden bg-white">
                        <Avatar className="w-full h-full rounded-full">
                            <AvatarFallback className="bg-[#F2F4F7] text-sm font-manrope font-semibold text-[#1a1a1a]">
                                {initials}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </SheetTrigger>

            <SheetContent side="right" className="bg-[#FCFCFC] font-manrope">

                <SheetHeader className={cn(
                    "bg-[#F0F0F0] flex flex-row align-middle text-text-default-black",
                )}>
                    <SheetClose>
                        <ArrowLeft />
                    </SheetClose>
                    <SheetTitle className="w-68">Личный профиль</SheetTitle>
                </SheetHeader>

                <UserProfileContent />
            </SheetContent>
        </Sheet>
    )
}