"use client"

import { AnalyzeSurface } from "@/components/analyze/AnalyzeSurface"
import { Button } from "@/components/controls/Button"
import { ChevronLeft, ChevronRight, FileText } from "lucide-react"
import { FileUploadingStatus } from "@/components/analyze/FileUploadingStatus"
import { FileUploadSuccess } from "@/components/analyze/FileUploadSuccess"
import { useUploadStore } from "@/store/useUploadStore"
import { useRouter } from "next/navigation"
import { AppFileUpload } from "@/components/analyze/AppFileUpload"
import { useModalStore } from "@/store/useModalStore"

export default function ResumesStepPage() {
  const router = useRouter()
  const { isUploading, isSuccess, file, startUpload, finishUpload, setDragging, removeFile } = useUploadStore();
  const { openModal } = useModalStore();

  const handleFiles = (files: FileList | File[]) => {
    const file = Array.from(files)[0];
    if (!file) return;

    startUpload(file); // Стор сам выставит нужные флаги

    setTimeout(() => {
      finishUpload(); // Стор переключит на Success
    }, 3000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <AnalyzeSurface
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
      >
        {isUploading ? (
          <FileUploadingStatus fileName={file?.name} iconPicture="/resumes/text.svg" />
        ) : isSuccess ? (
          <FileUploadSuccess fileName={file?.name || ""} onDelete={removeFile} iconPicture="/resumes/textSuccess.svg" successText="Резюме загружен" />
        ) : (
          <AppFileUpload
            buttonText="Загрузить резюме"
            icon={FileText}
            accept=".pdf,.doc,.docx"
            onFileSelect={handleFiles}
            // ИСПРАВЛЕНИЕ: Передаем только типы, а не объекты
            formats={["pdf", "word"]}
            separator="или"
          />
        )}
      </AnalyzeSurface>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="gap-4"
        >
          <ChevronLeft className="w-4 h-4" /> Загрузить вакансию
        </Button>

        {/* Кнопка Далее появляется или активируется при успехе */}
        <Button
          variant={"secondary"}
          onClick={() => openModal('exit-warning')}
          className="gap-2"
        >
          Сохранить черновик
        </Button>
      </div>
    </div>
  )
}