"use client"

import { Logo } from "../../custom/Logo"
import { useAuthStore } from "@/store/useAuthStore"
import UserActions from "./UserActions"
import GuestsActions from "./GuestsActions"

export const Header = () => {
    const { isAuthorized } = useAuthStore()
    return (
        <header className="h-20 bg-white sticky top-0 z-50">
            {/* Внутренний блок: контролирует ширину 1920px и отступы */}
            <div className="container h-full flex items-center justify-between">
                <Logo />

                <div className="mr-3">
                    {
                        isAuthorized ? <UserActions /> : <GuestsActions />
                    }
                </div>
            </div>
        </header>
    )
}