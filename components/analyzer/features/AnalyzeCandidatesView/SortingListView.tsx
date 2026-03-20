"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { AppCheckbox } from "@/components/controls/AppCheckbox"

interface SortingListViewProps {
    sortingItems: string[]
}

export default function SortingListView({ sortingItems }: SortingListViewProps) {
    // Используем массив или объект, чтобы хранить выбранные индексы
    const [selectedIndices, setSelectedIndices] = React.useState<number[]>([])

    const toggleSelection = (index: number) => {
        setSelectedIndices((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index) // Убираем, если уже есть
                : [...prev, index]               // Добавляем, если нет
        )
    }

    return (
        <div className="flex flex-col gap-y-2 pt-1">
            {sortingItems.map((item, index) => {
                const isItemActive = selectedIndices.includes(index);

                return (
                    <div 
                        key={index} 
                        onClick={() => toggleSelection(index)} // Клик по всему блоку
                        className={cn(
                            "py-3 px-4 border-[1.6px] rounded-[16px] cursor-pointer transition-all duration-200",
                            /* Условие для границы: если выбран — #24B3AC, если нет — #EBEBEB */
                            isItemActive 
                                ? "bg-[#F0F0F5] border-none" 
                                : "border-[#EBEBEB] hover:border-[#24B3AC]"
                        )}
                    >
                        <AppCheckbox
                            // Важно: ID должен быть уникальным для каждого чекбокса!
                            id={`sorting-item-${index}`}
                            checked={isItemActive}
                            onCheckedChange={() => toggleSelection(index)}
                            label={item}
                            labelClassName={cn(
                                "font-manrope font-[500] text-[14px] leading-[20px] tracking-normal transition-colors",
                                isItemActive ? "text-[#1a1a1a]" : "text-[#606367]"
                            )}
                            className="mx-0 gap-3"
                        />
                    </div>
                )
            })}
        </div>
    )
}