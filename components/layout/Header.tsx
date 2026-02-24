import * as React from "react"
import { Bell } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "../custom/Logo"
import { Button } from "../controls/Button"

export const Header = () => {
    return (
        <header className="w-full h-20 bg-white px-8 flex items-center justify-between">
            <div className="w-full container mx-auto px-8 flex items-center justify-between">
                {/* Левая часть: Логотип */}
                <Logo />
                {/* Правая часть: Кнопки и профиль */}
                <div className="flex items-center gap-7">
                    {/* Группа кнопок навигации */}
                    <div className="flex items-center gap-3">
                        <Button variant="secondary">
                            Кандидаты
                        </Button>
                        <Button variant="default">
                            Начать анализ
                        </Button>
                    </div>

                    {/* Иконка уведомлений с точкой */}
                    <div className="relative cursor-pointer">
                        <Bell className="w-6 h-6 text-[#1a1a1a]" strokeWidth={1.5} />
                        {/* Маленькая синяя точка (индикатор уведомлений) */}
                        <span className="absolute top-0 right-0 w-2 h-2 bg-[#2494B3] rounded-full border border-white" />
                    </div>

                    {/* Аватар пользователя с градиентной рамкой как в макете */}
                    <div className="flex items-center gap-3">
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