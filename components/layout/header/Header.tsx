"use client"

import { Logo } from "../../custom/Logo"
import UserActions from "./UserActions"
import GuestsActions from "./GuestsActions"
import { useRouter } from "next/navigation"
import { useHHAuth } from "@/features/hh-auth/hooks/hh-use-auth"
import { APP_ROUTES } from "@/shared/config/routes"

export const Header = () => {
    const { isLoggedIn, isLoading } = useHHAuth()
    const router = useRouter()

    return (
        <header className="py-7.25 bg-white sticky top-0 z-50">
            {/* Внутренний блок: контролирует ширину 1920px и отступы */}
            <div className="container h-full flex items-center justify-between">
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        router.push(APP_ROUTES.MAIN.MAIN);
                    }}
                >
                    <Logo />
                </div>

                <div className="mr-3">
                    {!isLoading && (
                        isLoggedIn ? <UserActions /> : <GuestsActions />
                    )}
                </div>
            </div>
        </header>
    )
}