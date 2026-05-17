// app/matching/choose-vacancy/page.tsx
"use client"

import React, { useState } from 'react'
import { useSyncVacancies, useVacancies } from '@/features/vacancies/hooks/use-vacancies';
import { AppStepper } from '@/components/controls/AppStepper';
import { PORTRAIT_FLOW } from '@/lib/analyze-config';
import { VacancyFilters } from '@/components/features/vacancies/VacancyFilters';
import { VacancyTable } from '@/components/features/vacancies/VacancyTable';
import MainHeader from '@/components/custom/Headers/MainHeader';
import { Button } from '@/components/controls/Button';
import { useRouter } from 'next/navigation'

export default function ChooseVacancyPage() {
    const { data: vacancies } = useVacancies()

    const router = useRouter()

    const { mutate: syncWithHh, isPending: isSyncing } = useSyncVacancies()
    
    // Перевели стейт на одиночный ID
    const [selectedId, setSelectedId] = useState<string | null>(null);
    
    const [filters, setFilters] = useState({
        hh: true,
        created: true,
    });

    // Логика одиночного выбора: если кликнули на ту же — сбрасываем, если на другую — выбираем её
    const handleSelectVacancy = (id: string) => {
        setSelectedId((prev) => (prev === id ? null : id));
    };

    const toggleFilter = (type: 'hh' | 'created') => {
        setFilters(prev => {
            const newState = { ...prev, [type]: !prev[type] };
            if (!newState.hh && !newState.created) return prev;
            return newState;
        });
    };

    const handleNextStep = () => {
        if (!selectedId) return;
        // Перенаправляем пользователя на страницу кандидатов конкретной вакансии
        router.push(`/matching/choose-candidates?vacancyId=${selectedId}`);
    };

    const filteredVacancies = vacancies?.filter(vacancy => {
        const isHhVacancy = !!vacancy.hhId && vacancy.hhId.trim() !== "";
        if (filters.hh && isHhVacancy) return true;
        if (filters.created && !isHhVacancy) return true;
        return false;
    });

    return (
        <div className="space-y-6">
            <AppStepper flow={PORTRAIT_FLOW} currentStepId={1} />
            
            <MainHeader title="Мои вакансии" /> 

            <VacancyFilters 
                filters={filters} 
                onToggleFilter={toggleFilter} 
                isSyncing={isSyncing} 
                onSync={syncWithHh}  
            />
            
            <VacancyTable 
                vacancies={filteredVacancies} 
                selectedId={selectedId} // Передаем один ID
                onSelectVacancy={handleSelectVacancy} // Передаем новую функцию
            />

            <div className="flex justify-end pt-4">
                <Button
                    variant="accent" // Использует класс bg-primary-default из твоего UI-kit
                    disabled={!selectedId} // Кнопка заблокирована, если ничего не выбрано
                    onClick={handleNextStep}
                >
                    Далее
                </Button>
            </div>
        </div>
    )
}