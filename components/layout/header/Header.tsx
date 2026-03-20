"use client"

import { Logo } from "../../custom/Logo"
import { useAuthStore } from "@/store/useAuthStore"
import UserActions from "./UserActions"
import GuestsActions from "./GuestsActions"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export const Header = () => {
    const { isAuthorized, setIsAuthorized } = useAuthStore()
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
                <button
                    onClick={() => setIsAuthorized(!isAuthorized)}
                    className={cn(
                        "px-4 py-1.5 rounded-full text-[12px] font-manrope font-bold transition-all border",
                        isAuthorized
                            ? "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100"
                            : "bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100"
                    )}
                >
                    {isAuthorized ? "🔓 Режим: Юзер" : "🔒 Режим: Гость"}
                </button>
                <div className="mr-3">

                    {
                        isAuthorized ? <UserActions /> : <GuestsActions />
                    }
                </div>
            </div>
        </header>
    )
}