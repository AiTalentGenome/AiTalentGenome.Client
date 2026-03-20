"use client"

import { X, ChevronRight, FileText } from "lucide-react"
import { AnalyzeSurface } from "./AnalyzeSurface"
import { Button } from "../../controls/Button"

export const JobDescriptionCard = () => {
  return (
    <div className="space-y-6">
      <AnalyzeSurface>
        {/* Область редактирования текста */}
        <textarea
          className="w-full grow bg-transparent border-none outline-none resize-none font-manrope text-base leading-6 text-[#1a1a1a] placeholder:text-gray-400"
          placeholder="Введите или вставьте текст вакансии..."
          defaultValue={`Ищем Frontend Developer'а, который будет создавать удобные и современные интерфейсы...`}
          rows={12}
        />
      </AnalyzeSurface>

      {/* Панель кнопок (вынесена за пределы серого фона согласно макету) */}
      <div className="flex justify-end items-center gap-4">
        {/* Кнопка Очистить: вариант Outline с кастомным цветом из макета */}
        <Button
          variant="outline"
          className="border-[#2494B3] text-[#2494B3] rounded-[20px] h-12 px-6 gap-2 hover:bg-[#2494B3]/5"
        >
          Очистить <X className="w-4 h-4" />
        </Button>

        {/* Кнопка Сохранить: вариант Secondary (серый) */}
        <Button
          variant="secondary"
          className="bg-[#919999] text-white rounded-[20px] h-12 px-6 hover:bg-[#919999]/90"
        >
          Сохранить черновик
        </Button>

        {/* Кнопка Далее: вариант Primary (синий) */}
        <Button
          className="bg-[#2494B3] text-white rounded-[20px] h-12 px-10 gap-2 hover:bg-[#2494B3]/90"
        >
          Далее <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}