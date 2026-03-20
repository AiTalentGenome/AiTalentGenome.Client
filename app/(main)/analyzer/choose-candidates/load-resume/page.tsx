"use client"

import { GlobalOnboardingOverlay } from '@/components/analyzer/features/AnalyzeCandidatesView/GlobalOnboardingOverlay'
import { OnboardingStep } from '@/components/analyzer/features/AnalyzeCandidatesView/OnboardingStep'
import { Button } from '@/components/controls/Button'
import VacancyInput from '@/components/controls/VacancyInput'
import { FileUploadStep } from '@/components/custom/FileUploadStep'
import MainHeader from '@/components/custom/Headers/MainHeader'
import { useModalStore } from '@/store/useModalStore'
import { useOnboardingStore } from '@/store/useOnboardingStore'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoadResumePage() {
  const router = useRouter()
  const { startOnboarding } = useOnboardingStore()

  useEffect(() => {
      // Как только страница загрузилась — запускаем обучение
      startOnboarding();
    }, [startOnboarding]);

    const { openModal } = useModalStore()
  
  return (
    <>
      <GlobalOnboardingOverlay maxStep={0} />
      <div className="space-y-8 animate-in fade-in duration-500">
        <OnboardingStep
          step={0}
          text="Укажите должность кандидата, чтобы продолжить"
          offset={{ x: 700, y: -190 }}
        >
          <MainHeader title="Загрузить резюме кандидата" />
        </OnboardingStep>

        <VacancyInput hintText='Под этой должностью будет отображаться кандидат в общем списке' />
        <FileUploadStep
          buttonText="Загрузить резюме"
          formats={["pdf", "word"]}
          accept=".pdf,.doc,.docx"
          statusIcon="/resumes/text.svg"
          successIcon="/resumes/textSuccess.svg"
          successText="Резюме загружен"
        />
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={(() => openModal('exit-warning'))}
            className="gap-4"
          >
            <ChevronLeft className="w-4 h-4" /> К списку кандидатов
          </Button>
        </div>
      </div>
    </>

  )
}
