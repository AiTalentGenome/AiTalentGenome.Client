"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Plus, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/controls/Button" // Твой основной компонент кнопки
import { AppCombobox } from "@/components/controls/AppCombobox"
import { cn } from "@/lib/utils"
import { AnalyzeSurface } from "@/components/analyze/AnalyzeSurface"
import { VacancySelector } from "@/components/analyze/VacancySelector"

const vacancies = [
  { value: "1", label: "Frontend Developer" },
  { value: "2", label: "Backend Developer" },
  { value: "3", label: "QA Engineer" },
  { value: "4", label: "Product Manager" },
  { value: "5", label: "DevOps Engineer" },
];

export default function UploadVacancyPage() {
  const router = useRouter()
  const [vacancyText, setVacancyText] = React.useState("")
  const [selectedVacancy, setSelectedVacancy] = React.useState<string | null>(null);

  // Хендлеры для событий
  const handleClear = () => setVacancyText("")
  
  const handleNext = () => {
    if (vacancyText.trim()) {
      // Логика сохранения и переход на шаг 2 [cite: 2026-02-25]
      router.push("/analyze/resumes")
    }
  }

  return (
    <div className="space-y-10">
      {/* 1. Панель управления (Кнопка + Селект) */}
      <VacancySelector 
        vacancies={vacancies}
        selectedVacancy={selectedVacancy}
        onSelect={(label) => setSelectedVacancy(label)}
        onReset={() => setSelectedVacancy(null)}
      />

      {/* 2. Основная область ввода */}
      <AnalyzeSurface className="grow">
        <textarea
          value={vacancyText}
          onChange={(e) => setVacancyText(e.target.value)}
          className={cn(
            "w-full h-full min-h-75 bg-transparent border-none outline-none resize-none",
            "font-body text-base leading-relaxed text-[#1a1a1a] placeholder:text-[#919999]"
          )}
        />
      </AnalyzeSurface>

      {/* 3. Нижняя панель действий */}
      <div className="flex justify-end items-center gap-4">
        <Button 
          variant="outline" 
          disabled
          onClick={handleClear}
          className="text-[#2494B3] border-[#2494B3] hover:bg-[#2494B3]/5 gap-2"
        >
          Очистить <X className="w-4 h-4" />
        </Button>
        
        <Button 
          disabled
          variant="secondary"
          className="bg-[#919999] hover:bg-[#919999]/90"
        >
          Сохранить черновик
        </Button>
        
        <Button 
          disabled={!vacancyText.trim()}
          onClick={handleNext}
          className="gap-2 px-10 bg-[#2494B3] hover:bg-[#2494B3]/90"
        >
          Далее <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}