// components/features/candidate-selector/SortingListView.tsx
"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { AppCheckbox } from "@/components/controls/AppCheckbox"
import { SORTING_MAPPING } from "@/features/vacancies/model/sorting-config"

interface SortingListViewProps {
    sortingItems: string[]
}

export default function SortingListView({ sortingItems }: SortingListViewProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Получаем текущие значения фильтров из URL
    const currentStatuses = searchParams.get("statuses") 
        ? searchParams.get("statuses")!.split(",").map(Number) 
        : [];
    const isOnlyAnalyzed = searchParams.get("onlyAnalyzed") === "true";

    const toggleSelection = (index: number) => {
        const target = SORTING_MAPPING[index];
        const newParams = new URLSearchParams(searchParams.toString());

        let updatedStatuses = [...currentStatuses];
        let updatedOnlyAnalyzed = isOnlyAnalyzed;

        if (target.type === "all") {
            updatedStatuses = [];
        } 
        else if (target.type === "analyzed") {
            updatedOnlyAnalyzed = !isOnlyAnalyzed;
        } 
        else if (target.type === "status" && target.value !== undefined) {
            if (updatedStatuses.includes(target.value)) {
                updatedStatuses = updatedStatuses.filter(v => v !== target.value);
            } else {
                updatedStatuses.push(target.value);
            }
        }

        // Записываем изменения обратно в URL параметры
        if (updatedStatuses.length > 0) {
            newParams.set("statuses", updatedStatuses.join(","));
        } else {
            newParams.delete("statuses");
        }

        if (updatedOnlyAnalyzed) {
            newParams.set("onlyAnalyzed", "true");
        } else {
            newParams.delete("onlyAnalyzed");
        }

        // ИСПРАВЛЕНИЕ: Добавили { scroll: false }, чтобы Next.js не бросал страницу наверх
        router.push(`?${newParams.toString()}`, { scroll: false });
    };

    return (
        <div className="flex flex-col gap-y-2 pt-1">
            {sortingItems.map((item, index) => {
                const target = SORTING_MAPPING[index];
                
                let isItemActive = false;
                if (target.type === "all") {
                    isItemActive = currentStatuses.length === 0;
                } else if (target.type === "analyzed") {
                    isItemActive = isOnlyAnalyzed;
                } else if (target.type === "status" && target.value !== undefined) {
                    isItemActive = currentStatuses.includes(target.value);
                }

                return (
                    <div 
                        key={index} 
                        // ИСПРАВЛЕНИЕ: Предотвращаем дефолтное поведение ссылки/кнопки, если компонент внутри формы
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSelection(index);
                        }}
                        className={cn(
                            "py-3 px-4 border-[1.6px] rounded-[16px] cursor-pointer transition-all duration-200",
                            isItemActive 
                                ? "bg-[#F0F0F5] border-none" 
                                : "border-[#EBEBEB] hover:border-[#24B3AC]"
                        )}
                    >
                        <AppCheckbox
                            id={`sorting-item-${index}`}
                            checked={isItemActive}
                            // Чтобы клик по самому чекбоксу не дублировал клик по родителю (div'у)
                            onCheckedChange={(e) => {
                                toggleSelection(index);
                            }}
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