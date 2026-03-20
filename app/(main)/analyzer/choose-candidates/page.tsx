"use client"

import { AnalyzeCandidatesView } from '@/components/analyzer/features/AnalyzeCandidatesView/AnalyzeCandidatesView'
import { CandidatesSelectionHeader } from '@/components/analyzer/features/AnalyzeCandidatesView/CandidatesSelectionHeader'
import { GlobalOnboardingOverlay } from '@/components/analyzer/features/AnalyzeCandidatesView/GlobalOnboardingOverlay'
import { candidatesData } from '@/components/analyzer/features/AnalyzeCandidatesView/ResumesListView'
import { AppLink } from '@/components/controls/AppLink'
import { Button } from '@/components/controls/Button'
import { SelectionBadge } from '@/components/controls/SelectionBadge'
import MainHeader from '@/components/custom/Headers/MainHeader'
import { cn } from '@/lib/utils'
import { useCandidateStore } from '@/store/useCandidateStore'
import { useOnboardingStore } from '@/store/useOnboardingStore'
import { LayoutGrid, Plus, X } from 'lucide-react'
import { useEffect } from 'react'

export default function ChooseCandidatesPage() {
  const { selectedIds, setSelectedIds, resetSelection } = useCandidateStore();
  const { startOnboarding } = useOnboardingStore()

  const selectedCount = selectedIds.length;

  const handleSelectAll = () => {
    if (selectedCount === candidatesData.length) {
      resetSelection();
    } else {
      setSelectedIds(candidatesData.map(c => c.id));
    }
  };

  useEffect(() => {
    // Как только страница загрузилась — запускаем обучение
    startOnboarding();
  }, [startOnboarding]);

  return (
    <div>
      <GlobalOnboardingOverlay maxStep={3} />
      <CandidatesSelectionHeader />
      <AnalyzeCandidatesView />
    </div>
  )
}


// <AppLink href='/analyzer' name='Добавить кандидата вручную' icon={<Plus />} className="mr-6" />