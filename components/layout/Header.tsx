import * as React from "react"
import { Bell } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "../custom/Logo"
import { Button } from "../controls/Button"

export const Header = () => {
    return (
        <header className="w-full h-20 bg-white sticky top-0 z-50">
            {/* Внутренний блок: контролирует ширину 1920px и отступы */}
            <div className="container h-full flex items-center justify-between">
                <Logo />

                <div className="flex items-center gap-4 lg:gap-7">
                    <div className="hidden sm:flex items-center gap-3">
                        <Button variant="secondary">Кандидаты</Button>
                        <Button variant="default">Начать анализ</Button>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="relative cursor-pointer">
                            <Bell className="w-6 h-6 text-[#1a1a1a]" strokeWidth={1.5} />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-[#2494B3] rounded-full border border-white" />
                        </div>

                        {/* Аватар */}
                        <div className="w-12 h-12 rounded-full p-0.5 bg-linear-to-tr from-[#2494B3] to-[#919999]">
                            <div className="w-full h-full rounded-full bg-[#F2F4F7] flex items-center justify-center border-2 border-white overflow-hidden">
                                <span className="font-body font-semibold text-sm text-[#1a1a1a]">АГ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}