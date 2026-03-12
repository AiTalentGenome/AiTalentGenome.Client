import { create } from 'zustand'

type AuthView = 
  | 'auth-hh' 
  | 'auth-email' 
  | 'auth-phone' 
  | 'auth-login-password' 
  | 'auth-phone-password' // Новый экран
  | 'auth-success' 
  | null;

interface AuthModalState {
  isAuthOpen: boolean;
  authView: AuthView;
  email: string;
  phoneNumber: string; // Храним номер телефона
  setEmail: (email: string) => void;
  setPhoneNumber: (phone: string) => void; // Экшен для телефона
  openAuth: (view: AuthView) => void;
  closeAuth: () => void;
}

export const useAuthModalStore = create<AuthModalState>((set) => ({
  isAuthOpen: false,
  authView: null,
  email: '',
  phoneNumber: '',
  setEmail: (email) => set({ email }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  openAuth: (view) => set({ isAuthOpen: true, authView: view }),
  closeAuth: () => set({ isAuthOpen: false, authView: null }),
}))