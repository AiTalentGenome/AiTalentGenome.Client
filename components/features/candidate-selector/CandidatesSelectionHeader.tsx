// components/features/candidate-selector/CandidatesSelectionHeader.tsx
"use client"

import * as React from "react"
import { LayoutGrid, Plus, X, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCandidateStore } from '@/store/useCandidateStore'
import { SelectionBadge } from '@/components/controls/SelectionBadge'
import { AppLink } from '@/components/controls/AppLink'
import MainHeader from '@/components/custom/Headers/MainHeader'
import { OnboardingStep } from "./OnboardingStep"
import { useVacancyById, useSyncApplications, useCandidatesByVacancyInfinite } from "@/features/vacancies/hooks/use-vacancies";
import { Button } from "@/components/controls/Button"

interface CandidatesSelectionHeaderProps {
    vacancyId: string | null;
}

export const CandidatesSelectionHeader = ({ vacancyId }: CandidatesSelectionHeaderProps) => {
    const { selectedIds, setSelectedIds, resetSelection } = useCandidateStore();
    const selectedCount = selectedIds.length;

    // Запросы данных
    const { data: vacancy, isLoading: isVacancyLoading } = useVacancyById(vacancyId);
    const { data: infiniteData } = useCandidatesByVacancyInfinite(vacancyId); 
    
    // Мутация для синхронизации кандидатов
    const { mutate: syncApplications, isPending: isSyncing } = useSyncApplications(vacancyId);

    // Разворачиваем страницы бесконечного кэша в один плоский массив кандидатов
    const allCandidates = infiniteData?.pages.flatMap(page => page.items) || [];
    const totalCandidatesCount = allCandidates.length;

    const handleSelectAll = () => {
        if (allCandidates.length === 0) return;
        
        if (selectedCount === totalCandidatesCount) {
            resetSelection();
        } else {
            setSelectedIds(allCandidates.map(c => c.id));
        }
    };

    const dynamicTitle = isVacancyLoading 
        ? "Загрузка вакансии..." 
        : vacancy?.title || 'Вакансия не найдена';

    // Проверяем, является ли вакансия импортированной с HeadHunter
    const isHhVacancy = !!vacancy?.hhId && vacancy.hhId.trim() !== "";

    return (
        <div className={cn(
            "flex justify-between items-center mb-9.5 transition-all duration-300",
            selectedCount > 0 && "bg-[#EBEBEB] py-3 px-6 rounded-3xl"
        )}>
            <MainHeader title={dynamicTitle} />
            
            {selectedCount > 0 ? (
                <div className="flex gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <SelectionBadge
                        onClick={resetSelection}
                        icon={<X className="w-6 h-6 transition-transform group-hover:rotate-90" />}
                    >
                        {selectedCount} откликов выбрано
                    </SelectionBadge>

                    <SelectionBadge
                        onClick={handleSelectAll}
                        icon={selectedCount === totalCandidatesCount ? <X className="w-6 h-6 transition-transform group-hover:rotate-90" /> : <LayoutGrid className="w-6 h-6 transition-transform group-hover:rotate-90" />}
                    >
                        {selectedCount === totalCandidatesCount
                            ? "выбраны все в этой категории"
                            : "выбрать все в этой категории"}
                    </SelectionBadge>
                </div>
            ) : (
                <div className="flex items-center gap-4 animate-in fade-in duration-300">
                    {/* КНОПКА СИНХРОНИЗАЦИИ ОТКЛИКОВ — Рендерим только если это вакансия с HH */}
                    {isHhVacancy && (
                        <Button
                            variant="secondary"
                            isLoading={isSyncing}
                            onClick={() => syncApplications()}
                            className="border border-[#2494B3]"
                        >
                            {!isSyncing && <RefreshCw className="w-4 h-4 mr-1" />}
                            {isSyncing ? "Обновление..." : "Синхронизировать отклики c HH"}
                        </Button>
                    )}

                    <OnboardingStep
                        step={2} 
                        text="Добавьте резюме вручную, если нужно"
                        offset={{ x: -100, y: -100 }}
                    >
                        <AppLink
                            id="step-3-add-btn"
                            href='/analyzer/choose-candidates/load-resume'
                            name='Добавить кандидата вручную'
                            icon={<Plus />}
                            className="mr-6"
                        />
                    </OnboardingStep>
                </div>
            )}
        </div>
    );
};