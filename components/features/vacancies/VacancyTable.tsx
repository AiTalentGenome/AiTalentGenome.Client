// features/vacancies/components/VacancyTable.tsx
"use client"

import React from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { AppCheckbox } from '@/components/controls/AppCheckbox'

interface Vacancy {
    id: string;
    title: string;
    areaName: string;
    applicationsCount: number;
    hhId?: string;
}

interface VacancyTableProps {
    vacancies: Vacancy[] | undefined;
    selectedId: string | null;
    onSelectVacancy: (id: string) => void;
}

export function VacancyTable({ vacancies, selectedId, onSelectVacancy }: VacancyTableProps) {
    return (
        <div className="bg-[#F9FAFB] rounded-4xl overflow-hidden border border-gray-100">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-[#798080] text-[13px] tracking-wider">
                        {/* Изменено: px-6 -> px-10 для отступа от границ */}
                        <th className="py-5 px-10 text-left font-medium">название <SortIcons /></th>
                        <th className="py-5 px-10 text-left font-medium">регион <SortIcons /></th>
                        <th className="py-5 px-10 text-left font-medium">отклики <SortIcons /></th>
                        <th className="py-5 px-10 text-right font-medium">статус <SortIcons /></th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {vacancies?.map((vacancy) => (
                        <tr key={vacancy.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors group">
                            {/* Изменено: px-6 -> px-10 для отступа от границ */}
                            <td className="py-4 px-10 flex items-center gap-4">
                                <AppCheckbox
                                    id={vacancy.id}
                                    checked={selectedId === vacancy.id}
                                    onCheckedChange={() => onSelectVacancy(vacancy.id)}
                                    label={vacancy.title} // Передаем название вакансии сюда
                                    labelClassName="text-[#1a1a1a] font-medium underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-[#2494B3]"
                                    className="mx-0 gap-4 w-fit" // Увеличили gap-0 до gap-4, чтобы текст не прилипал к квадратику
                                />
                            </td>
                            <td className="py-4 px-10 text-[#475467]">{vacancy.areaName}</td>
                            <td className="py-4 px-10 text-[#475467] font-semibold">{vacancy.applicationsCount}</td>
                            <td className="py-4 px-10 text-right">
                                {/* Изменено: px-8 -> px-12 для того, чтобы сделать кнопку шире */}
                                <button className="bg-[#8E87D6] text-white px-12 py-2 rounded-xl text-sm font-medium hover:bg-[#7a72c5] transition-colors">
                                    статус
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// Компонент иконок сортировки без изменений
function SortIcons() {
    return (
        <span className="inline-flex flex-col ml-1 align-middle opacity-50">
            <ChevronUp size={10} className="-mb-0.5" />
            <ChevronDown size={10} />
        </span>
    )
}