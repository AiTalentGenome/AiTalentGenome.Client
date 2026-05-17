// features/vacancies/components/VacancyFilters.tsx
"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { RefreshCw } from 'lucide-react' // Добавили иконку обновления

interface VacancyFiltersProps {
    filters: {
        hh: boolean;
        created: boolean;
    };
    onToggleFilter: (type: 'hh' | 'created') => void;
    isSyncing: boolean; // Проп для отслеживания загрузки
    onSync: () => void;  // Функция запуска мутации
}

export function VacancyFilters({ filters, onToggleFilter, isSyncing, onSync }: VacancyFiltersProps) {
    return (
        <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4 items-center">
                {/* Табы фильтров */}
                <div className="flex gap-2 bg-[#F2F4F7] p-1 rounded-full border border-gray-100">
                    <button
                        onClick={() => onToggleFilter('hh')}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all",
                            filters.hh
                                ? "bg-white text-[#2494B3] shadow-sm border border-[#2494B3]"
                                : "text-gray-500 border border-transparent"
                        )}
                    >
                        Вакансии с НН
                    </button>
                    <button
                        onClick={() => onToggleFilter('created')}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all",
                            filters.created
                                ? "bg-white text-[#2494B3] shadow-sm border border-[#2494B3]"
                                : "text-gray-500 border border-transparent"
                        )}
                    >
                        Созданные вакансии
                    </button>
                </div>

                {/* КНОПКА СИНХРОНИЗАЦИИ */}
                <button
                    onClick={onSync}
                    disabled={isSyncing}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium border transition-all font-manrope",
                        isSyncing 
                            ? "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed" 
                            : "bg-white text-[#2494B3] border-[#2494B3]/30 hover:bg-[#2494B3]/5 active:scale-95"
                    )}
                >
                    <RefreshCw className={cn("w-4 h-4", isSyncing && "animate-spin")} />
                    {isSyncing ? "Синхронизация..." : "Синхронизировать с HH"}
                </button>
            </div>

            <div className="relative w-full max-w-md">
                <input
                    type="text"
                    placeholder="Начните вводить название вакансии"
                    className="w-full bg-[#F2F4F7] border-none rounded-2xl py-3 px-5 text-sm outline-none focus:ring-2 ring-[#2494B3]/20"
                />
            </div>
        </div>
    )
}