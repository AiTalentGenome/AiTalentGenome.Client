"use client"

import SortingListView from "./SortingListView"
import SubHeader from "@/components/custom/Headers/SubHeader"
import ResumesListView from "./ResumesListView"
import AnalyzeCriteriaView from "./AnalyzeCriteriaView"
import { OnboardingStep } from "./OnboardingStep"

const sortingItems = [
  "Все отклики", "Неразобранные", "Статус", "Подумать",
  "Первичный контакт", "Тестовое задание", "Собеседование",
  "Предложение о работе", "Выход на работу", "Не подходит", "Проанализированные"
];

export const AnalyzeCandidatesView = () => {
  return (
    <div className="rounded-[40px] grid xl:grid-cols-[224px_1fr_224px] 2xl:grid-cols-[320px_1fr_350px] overflow-hidden border border-[#F0F0F0] bg-white relative">
      {/* 1. ЛЕВАЯ ПАНЕЛЬ (Сортировка) */}
      <aside className="bg-[#F0F0F0] px-2 pt-10 flex flex-col overflow-y-auto custom-scrollbar border-[#F0F0F0] border">
        <SubHeader title="Сортировка" className="pl-2 mb-4" />
        <OnboardingStep
          step={0}
          text="Выберите резюме кандидатов"
          offset={{ x: -173, y: -80 }} // Немного приподнимем над карточкой
        >
          <SortingListView sortingItems={sortingItems} />
        </OnboardingStep>

      </aside>

      {/* 2. ЦЕНТРАЛЬНАЯ ПАНЕЛЬ (Список кандидатов) */}
      <main className="flex flex-col px-3 py-2 overflow-y-auto">
        <ResumesListView />
      </main>

      {/* 3. ПРАВАЯ ПАНЕЛЬ (Критерии анализа) */}
      <aside className="pt-10 bg-[#F5F5F5] border-[#F0F0F0]">
        <OnboardingStep
          step={1}
          text="Заполните критерии"
          offset={{ x: -265, y: -90 }}
        >
          <AnalyzeCriteriaView />
        </OnboardingStep>
      </aside>

    </div>
  )
}