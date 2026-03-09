import { create } from 'zustand'

type AuthView = 'auth-hh' | 'auth-email' | 'auth-success' | null;

interface AuthModalState {
  isAuthOpen: boolean;
  authView: AuthView;
  openAuth: (view: AuthView) => void;
  closeAuth: () => void;
}

export const useAuthModalStore = create<AuthModalState>((set) => ({
  isAuthOpen: false,
  authView: null,
  openAuth: (view) => set({ isAuthOpen: true, authView: view }),
  closeAuth: () => set({ isAuthOpen: false, authView: null }),
}))