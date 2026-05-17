"use client"

import { AnalyzeCandidatesView } from '@/components/features/candidate-selector/AnalyzeCandidatesView'
import { CandidatesSelectionHeader } from '@/components/features/candidate-selector/CandidatesSelectionHeader'
import { GlobalOnboardingOverlay } from '@/components/features/candidate-selector/GlobalOnboardingOverlay'
import { useOnboardingStore } from '@/store/useOnboardingStore'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation';
import { AppStepper } from '@/components/controls/AppStepper';
import { PORTRAIT_FLOW } from '@/lib/analyze-config';

export default function ChooseCandidatesPage() {
  const searchParams = useSearchParams();
  // Получаем наш vacancyId из строки ?vacancyId=...
  const vacancyId = searchParams.get('vacancyId');

  const { startOnboarding } = useOnboardingStore()

  useEffect(() => {
    // Как только страница загрузилась — запускаем обучение
    startOnboarding();
  }, [startOnboarding]);

  return (
    <div className="space-y-6">
      <AppStepper flow={PORTRAIT_FLOW} currentStepId={2} />
      <GlobalOnboardingOverlay maxStep={3} />
      
      {/* vacancyId передается внутрь, и компоненты сами тянут нужные данные из кэша */}
      <CandidatesSelectionHeader vacancyId={vacancyId} />
      <AnalyzeCandidatesView vacancyId={vacancyId} />
    </div>
  )
}