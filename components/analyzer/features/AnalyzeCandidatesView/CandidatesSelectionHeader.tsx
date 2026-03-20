"use client"

import * as React from "react"
import { LayoutGrid, Plus, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCandidateStore } from '@/store/useCandidateStore'
import { SelectionBadge } from '@/components/controls/SelectionBadge'
import { AppLink } from '@/components/controls/AppLink'
import MainHeader from '@/components/custom/Headers/MainHeader'
import { candidatesData } from "./ResumesListView"
import { OnboardingStep } from "./OnboardingStep"

export const CandidatesSelectionHeader = () => {
    const { selectedIds, setSelectedIds, resetSelection } = useCandidateStore();
    const selectedCount = selectedIds.length;

    const handleSelectAll = () => {
        if (selectedCount === candidatesData.length) {
            resetSelection();
        } else {
            setSelectedIds(candidatesData.map(c => c.id));
        }
    };

    return (
        <div className={cn(
            "flex justify-between items-center mb-9.5",
            selectedCount > 0 && "bg-[#EBEBEB] py-3 px-6 rounded-3xl"
        )}>
            <MainHeader title='CTO (Backend / NLP Platform Lead)' />
            {selectedCount > 0 ? (
                <div className="flex gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    {/* Счетчик */}
                    <SelectionBadge
                        onClick={resetSelection}
                        icon={<X className="w-6 h-6 transition-transform group-hover:rotate-90" />}
                    >
                        {selectedCount} откликов выбрано
                    </SelectionBadge>

                    {/* Кнопка управления выделением */}
                    <SelectionBadge
                        onClick={handleSelectAll}
                        icon={selectedCount === candidatesData.length ? <X className="w-6 h-6 transition-transform group-hover:rotate-90" /> : <LayoutGrid className="w-6 h-6 transition-transform group-hover:rotate-90" />}
                    >
                        {selectedCount === candidatesData.length
                            ? "выбраны все в этой категории"
                            : "выбрать все в этой категории"}
                    </SelectionBadge>
                </div>
            ) : (
                /* Если ничего не выбрано — возвращаем твой AppLink */
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
                        className="mr-6 animate-in fade-in duration-300"
                    />
                </OnboardingStep>
            )}
        </div>
    );
};