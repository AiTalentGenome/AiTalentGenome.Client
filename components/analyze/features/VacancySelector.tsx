"use client"

import * as React from "react"
import { Plus, X, Pencil } from "lucide-react"
import { Button } from "@/components/controls/Button"
import { AppCombobox } from "@/components/controls/AppCombobox"
import { FormField } from "@/components/controls/FormField"
import { cn } from "@/lib/utils"

interface VacancySelectorProps {
  vacancies: { value: string; label: string }[];
  selectedVacancy: string | null;
  onSelect: (label: string) => void;
  onReset: () => void;
}

export const VacancySelector = ({
  vacancies,
  selectedVacancy,
  onSelect,
  onReset
}: VacancySelectorProps) => {
  // isEditing контролирует, видим ли мы сейчас поле ввода
  const [isEditing, setIsEditing] = React.useState(false);

  // Когда выбор подтвержден (есть текст и мы не в режиме правки)
  const isConfirmed = !!selectedVacancy && !isEditing;

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-wrap items-center gap-4 min-h-12">
        
        {/* СОСТОЯНИЕ: ПОДТВЕРЖДЕННЫЙ ВЫБОР (Та самая кнопка) */}
        {isConfirmed ? (
          <div className="flex items-center gap-3 animate-in zoom-in-95 duration-200">
            <Button
              variant="secondary"
              onClick={() => setIsEditing(true)}
            >
              <span className="font-manrope font-medium">{selectedVacancy}</span>
              <Pencil className="w-4 h-4 opacity-70" /> {/* Иконка карандаша намекает на изменение */}
            </Button>

            {/* Кнопка полного сброса */}
            <button 
              onClick={onReset}
              className="p-2 text-inactive-input hover:text-primary transition-colors"
              title="Удалить выбор"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          /* СОСТОЯНИЕ: ИЗНАЧАЛЬНЫЙ ВЫБОР */
          <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-2">
            <Button
              variant={isEditing ? "accent" : "secondary"}
              onClick={() => {
                setIsEditing(true);
                onReset();
              }}
              className="gap-2 h-12 px-6 rounded-[20px]"
            >
              Добавить новую вакансию <Plus className="w-5 h-5" />
            </Button>

            {!isEditing && (
              <div className="flex items-center gap-3">
                <AppCombobox
                  options={vacancies}
                  onSelect={(label) => {
                    onSelect(label);
                    setIsEditing(true); // Сразу открываем поле для проверки
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* ПОЛЕ ВВОДА (FormField) — показываем только в режиме редактирования */}
      {isEditing && (
        <div className="w-full max-w-150 flex flex-col gap-4 animate-in slide-in-from-top-4 fade-in duration-300">
          <FormField
            label="Название вакансии"
            autoFocus
            value={selectedVacancy || ""}
            onChange={(e) => onSelect(e.target.value)}
            placeholder="Например: Frontend Developer"
          />
          <div className="flex justify-start">
            <Button 
              size="sm" 
              className="h-9 px-6 rounded-xl text-xs"
              onClick={() => setIsEditing(false)} // Сворачиваем обратно в кнопку-тег
              disabled={!selectedVacancy?.trim()}
            >
              Готово
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}