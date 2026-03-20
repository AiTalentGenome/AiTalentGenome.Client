import { create } from 'zustand'

interface OnboardingState {
  currentStep: number;
  isActive: boolean;
  nextStep: () => void;
  stopOnboarding: () => void;
  startOnboarding: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  currentStep: 0,
  isActive: true, // Начинаем сразу при загрузке
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  stopOnboarding: () => set({ isActive: false }),
  startOnboarding: () => set({ isActive: true, currentStep: 0 }),
}))