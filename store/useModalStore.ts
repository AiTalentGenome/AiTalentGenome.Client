import { create } from 'zustand'

type ModalView = 'exit-warning' | 'save-success' | null;

interface ModalState {
  isOpen: boolean;
  view: ModalView;
  openModal: (view: ModalView) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  view: null,
  openModal: (view) => set({ isOpen: true, view }),
  closeModal: () => set({ isOpen: false, view: null }),
}))