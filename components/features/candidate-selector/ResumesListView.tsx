// components/features/candidate-selector/ResumesListView.tsx
"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { AppCheckbox } from "@/components/controls/AppCheckbox"
import { useCandidateStore } from "@/store/useCandidateStore";
import { useCandidatesByVacancyInfinite } from "@/features/vacancies/hooks/use-vacancies";
import { Button } from "@/components/controls/Button";

interface ResumesListViewProps {
  vacancyId: string | null;
}

export default function ResumesListView({ vacancyId }: ResumesListViewProps) {
  const { selectedIds, toggleCandidate } = useCandidateStore();
  const searchParams = useSearchParams();

  // Читаем фильтры из URL для передачи в TanStack Query
  const statusesParam = searchParams.get("statuses");
  const statuses = statusesParam ? statusesParam.split(",").map(Number) : undefined;
  const onlyAnalyzed = searchParams.get("onlyAnalyzed") === "true";

  // Вызываем бесконечный хук пагинации со всеми фильтрами!
  const { 
    data, 
    isLoading, 
    isError, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage 
  } = useCandidatesByVacancyInfinite(vacancyId, statuses, onlyAnalyzed);

  if (isLoading) {
    return <div className="p-8 text-center font-manrope text-sm text-gray-400">Загрузка списка кандидатов...</div>;
  }

  if (isError) {
    return <div className="p-8 text-center font-manrope text-sm text-red-500">Ошибка при загрузке кандидатов</div>;
  }

  const candidates = data?.pages.flatMap(page => page.items) || [];

  if (candidates.length === 0) {
    return <div className="p-12 text-center font-manrope text-sm text-gray-400">В данной категории пока нет откликов</div>;
  }

  return (
    <div className="flex flex-col gap-y-1 w-full pr-2 h-full justify-between">
      <div className="flex flex-col gap-y-1 w-full overflow-y-auto custom-scrollbar flex-1 max-h-[calc(100vh-250px)]">
        {candidates.map((candidate) => {
          const isSelected = selectedIds.includes(candidate.id);
          const displayName = candidate.candidateName?.trim() ? candidate.candidateName : "Имя не указано";
          const hasJobTitle = candidate.lastJobTitle && candidate.lastJobTitle !== "Не указано";

          return (
            <div
              key={candidate.id}
              onClick={() => toggleCandidate(candidate.id)}
              className={cn(
                "flex items-center justify-between pl-5 pr-4 py-3.25 rounded-3xl cursor-pointer transition-colors shrink-0",
                isSelected ? "bg-[#F2F4F7]" : "bg-white hover:bg-[#F2F4F7]"
              )}
            >
              <div className="flex items-center">
                <AppCheckbox
                  id={`candidate-${candidate.id}`}
                  checked={isSelected}
                  onCheckedChange={() => toggleCandidate(candidate.id)}
                  label={hasJobTitle ? `${displayName} — ${candidate.lastJobTitle}` : displayName}
                  labelClassName={cn(
                    "font-manrope font-medium text-[16px] leading-[20px] underline decoration-[#BCC8CC] underline-offset-4",
                    isSelected ? "text-[#1a1a1a]" : "text-[#1a1a1a]/80"
                  )}
                  className="mx-0 gap-4 items-center"
                />
              </div>

              <div className="shrink-0 px-12 py-1.5 rounded-[11.55px] text-white text-[14px] font-manrope font-light bg-[#8B83D2]">
                статус
              </div>
            </div>
          );
        })}

        {hasNextPage && (
          <div className="pt-4 pb-2 flex justify-center shrink-0">
            <Button
              variant="secondary"
              size="sm"
              isLoading={isFetchingNextPage}
              onClick={() => fetchNextPage()}
              className="font-manrope text-[13px] border-[#2494B3]/20 text-[#2494B3] hover:bg-gray-50 h-9 px-6 rounded-xl"
            >
              Показать еще кандидатов
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}