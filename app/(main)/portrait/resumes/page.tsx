"use client"

import { Button } from "@/components/controls/Button"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { FileUploadStep } from "@/components/custom/FileUploadStep"
import { useModalStore } from "@/store/useModalStore"
import VacancyInput from "@/components/controls/VacancyInput"

export default function ResumesStepPage() {
  const router = useRouter()

  const { openModal } = useModalStore()

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <VacancyInput hintText='Под этой должностью будет отображаться кандидат в общем списке' />
      <FileUploadStep
        buttonText="Загрузить резюме"
        formats={["pdf", "word"]}
        accept=".pdf,.doc,.docx"
        statusIcon="/resumes/text.svg"
        successIcon="/resumes/textSuccess.svg"
        successText="Резюме загружен"
        onNext={() => router.push("/analyze/interview")}
      />
      <div className="flex justify-between items-center">
        <Button
          variant="secondary"
          onClick={() => router.back()}
          className="gap-4"
        >
          <ChevronLeft className="w-4 h-4" /> "Загрузить резюме"
        </Button>

        <Button
          variant="primary"
          onClick={(() => openModal('exit-warning'))}
          className="gap-2"
        >
          Сохранить черновик
        </Button>
      </div>
    </div>
  )
}