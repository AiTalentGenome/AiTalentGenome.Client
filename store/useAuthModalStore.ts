import { create } from 'zustand'

export type AuthView = 
  | 'auth-hh' 
  | 'auth-email' 
  | 'auth-phone' 
  | 'auth-login-password' 
  | 'auth-phone-password' 
  | 'auth-success' 
  | 'register-login-password'
  | 'register-phone-password'
  | 'auth-verify-phone'
  | 'auth-confirm-email'
  | null;

// Добавляем типы режимов
type AuthMode = 'login' | 'register';

interface AuthModalState {
  isAuthOpen: boolean;
  authView: AuthView;
  authMode: AuthMode; // Храним режим здесь
  email: string;
  phoneNumber: string;
  setEmail: (email: string) => void;
  setPhoneNumber: (phone: string) => void;
  setAuthMode: (mode: AuthMode) => void; // Экшен для смены режима
  openAuth: (view: AuthView, mode?: AuthMode) => void; // Обновляем функцию открытия
  closeAuth: () => void;
}

export const useAuthModalStore = create<AuthModalState>((set) => ({
  isAuthOpen: false,
  authView: null,
  authMode: 'login', // По умолчанию вход
  email: '',
  phoneNumber: '',
  setEmail: (email) => set({ email }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setAuthMode: (authMode) => set({ authMode }),
  
  // При открытии можно сразу указать режим
  openAuth: (view, mode) => set((state) => ({ 
    isAuthOpen: true, 
    authView: view, 
    authMode: mode || state.authMode 
  })),
  
  closeAuth: () => set({ isAuthOpen: false, authView: null }),
}))