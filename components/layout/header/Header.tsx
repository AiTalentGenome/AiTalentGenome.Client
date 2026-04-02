"use client"

import { Logo } from "../../custom/Logo"
import { useAuthStore } from "@/store/useAuthStore"
import UserActions from "./UserActions"
import GuestsActions from "./GuestsActions"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { useMe } from "@/hooks/queries/auth/useMe"

export const Header = () => {
    const { isAuthorized, isLoading } = useMe()
    const router = useRouter()

    return (
        <header className="py-7.25 bg-white sticky top-0 z-50">
            {/* Внутренний блок: контролирует ширину 1920px и отступы */}
            <div className="container h-full flex items-center justify-between">
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    <Logo />
                </div>
                
                <div className="mr-3">

                    {
                        isAuthorized ? <UserActions /> : <GuestsActions />
                    }
                </div>
            </div>
        </header>
    )
}