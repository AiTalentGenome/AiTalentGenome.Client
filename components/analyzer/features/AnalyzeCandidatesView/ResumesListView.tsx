"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { AppCheckbox } from "@/components/controls/AppCheckbox"
import { useCandidateStore } from "@/store/useCandidateStore";

export const candidatesData = [
  { id: 1, title: "Frontend Developer" },
  { id: 2, title: "Frontend Developer" },
  { id: 3, title: "Python-разработчик" },
  { id: 4, title: "Frontend Developer" },
  { id: 5, title: "Frontend Developer" },
  { id: 6, title: "Технический директор (CTO) \\ Директор по IT (CIO) \\ Руководитель IT подразделения Технический д..." },
  { id: 7, title: "Frontend Developer" },
  { id: 8, title: "Технический директор (CTO) \\ Директор по IT (CIO) \\ Руководитель IT подразделения" },
  { id: 9, title: "Frontend Developer" },
  { id: 10, title: "Python-разработчик" },
  { id: 11, title: "Python-разработчик" },
];

export default function ResumesListView() {
  const { selectedIds, toggleCandidate } = useCandidateStore();

  return (
    <div className="flex flex-col gap-y-1 w-full pr-2 custom-scrollbar">
      {candidatesData.map((candidate) => {
        const isSelected = selectedIds.includes(candidate.id);

        return (
          <div
            key={candidate.id}
            onClick={() => toggleCandidate(candidate.id)}
            className={cn(
              "flex items-center justify-between pl-5 pr-4 py-3.25 rounded-3xl cursor-pointer transition-colors",
              isSelected ? "bg-[#F2F4F7]" : "bg-white hover:bg-[#F2F4F7]"
            )}
          >
            <div className="flex items-center">
              <AppCheckbox
                id={`candidate-${candidate.id}`}
                checked={isSelected}
                onCheckedChange={() => toggleCandidate(candidate.id)}
                label={candidate.title}
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
    </div>
  );
}