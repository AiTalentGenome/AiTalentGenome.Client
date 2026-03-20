import { create } from 'zustand'

interface CandidateState {
  selectedIds: number[];
  toggleCandidate: (id: number) => void;
  setSelectedIds: (ids: number[]) => void;
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