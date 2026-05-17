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
  
  // 1. Важно: ставим по умолчанию false, чтобы у авторизованных пользователей,
  // которые уже видели онбординг, ничего не моргало при загрузке (Next.js SSR защита)
  isActive: false, 

  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),

  stopOnboarding: () => {
    // 2. Когда обучение закончено или закрыто — фиксируем это в браузере
    if (typeof window !== 'undefined') {
      localStorage.setItem('matching_onboarding_seen', 'true')
    }
    set({ isActive: false })
  },

  startOnboarding: () => {
    if (typeof window !== 'undefined') {
      const isSeen = localStorage.getItem('matching_onboarding_seen')
      
      // 3. Если пользователь уже видел подсказки — просто выходим, не включая их
      if (isSeen === 'true') {
        return;
      }
    }
    
    // Если зашел первый раз — запускаем с нулевого шага
    set({ isActive: true, currentStep: 0 })
  },
}))