"use client"

import { useOnboardingStore } from '@/store/useOnboardingStore'

export const GlobalOnboardingOverlay = ({ maxStep }: {maxStep: number}) => {
  const { isActive, currentStep, nextStep, stopOnboarding } = useOnboardingStore()

  // Укажи здесь индекс ПОСЛЕДНЕГО шага (если шагов 4, то индекс 3)
  const LAST_STEP_INDEX = maxStep;

  if (!isActive) return null;

  const handleOverlayClick = () => {
    if (currentStep < LAST_STEP_INDEX) {
      nextStep();
    } else {
      // Если это был последний шаг — закрываем обучение полностью
      stopOnboarding();
    }
  };

  return (
    <div 
      onClick={handleOverlayClick}
      className="fixed inset-0 z-90 bg-black/50 cursor-pointer animate-in fade-in duration-500"
    />
  )
}