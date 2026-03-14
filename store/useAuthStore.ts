import { create } from "zustand"

interface AuthState {
    isAuthorized: boolean
    setIsAuthorized: (status: boolean) => void 
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthorized: true,
    setIsAuthorized: (status) => set({isAuthorized: status})
}))