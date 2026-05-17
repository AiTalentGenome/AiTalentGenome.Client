import { create } from 'zustand'

interface CandidateState {
  selectedIds: string[]; // Поменяли number[] на string[]
  toggleCandidate: (id: string) => void; // Поменяли number на string
  setSelectedIds: (ids: string[]) => void; // Поменяли number[] на string[]
  resetSelection: () => void;
}

export const useCandidateStore = create<CandidateState>((set) => ({
  selectedIds: [],
  toggleCandidate: (id) => set((state) => ({
    selectedIds: state.selectedIds.includes(id)
      ? state.selectedIds.filter((prevId) => prevId !== id)
      : [...state.selectedIds, id]
  })),
  setSelectedIds: (ids) => set({ selectedIds: ids }),
  resetSelection: () => set({ selectedIds: [] }),
}))