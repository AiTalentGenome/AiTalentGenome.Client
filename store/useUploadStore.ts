import { create } from 'zustand'

interface UploadState {
  file: File | null;
  isDragging: boolean;
  isUploading: boolean;
  isSuccess: boolean;
  
  // Действия
  setDragging: (status: boolean) => void;
  startUpload: (file: File) => void;
  finishUpload: () => void;
  removeFile: () => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  file: null,
  isDragging: false,
  isUploading: false,
  isSuccess: false,

  setDragging: (status) => set({ isDragging: status }),

  startUpload: (file) => set({ 
    file, 
    isUploading: true, 
    isSuccess: false, 
    isDragging: false 
  }),

  finishUpload: () => set({ 
    isUploading: false, 
    isSuccess: true 
  }),

  removeFile: () => set({ 
    file: null, 
    isUploading: false, 
    isSuccess: false, 
    isDragging: false // Гарантированно сбрасываем всё
  }),
}))