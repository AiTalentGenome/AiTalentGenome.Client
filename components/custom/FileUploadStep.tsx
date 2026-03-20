"use client"

import { ChevronLeft, FileText, LucideIcon } from "lucide-react"
import { useUploadStore } from "@/store/useUploadStore"

import { AnalyzeSurface } from '@/components/analyze/features/AnalyzeSurface'
import { AppFileUpload } from '@/components/controls/FileUploader/AppFileUpload'
import { FileUploadingStatus } from '@/components/controls/FileUploader/FileUploadingStatus'
import { FileUploadSuccess } from '@/components/controls/FileUploader/FileUploadSuccess'
import React from "react"

type AllowedFormats = "media" | "pdf" | "word" | "mp3" | "mp4" | "mov" | "wav" | "default";

interface FileUploadStepProps {
    // Конфигурация для загрузки
    uploadIcon?: LucideIcon
    buttonText: string
    formats: AllowedFormats[]
    accept?: string
    separator?: string

    // Конфигурация для статусов
    statusIcon: string
    successIcon: string
    successText: string

    onNext?: () => void;

    onSaveDraft?: () => void
}

export const FileUploadStep = ({
    uploadIcon = FileText,
    buttonText,
    formats,
    accept,
    separator = "или",
    statusIcon,
    successIcon,
    successText,
    onNext
}: FileUploadStepProps) => {
    const { isUploading, isSuccess, file, startUpload, finishUpload, setDragging, removeFile, reset } = useUploadStore()

    React.useEffect(() => {
        reset(); // Сбрасываем всё в начальное состояние
        return () => reset(); // Дополнительно сбрасываем при уходе
    }, [reset]);

    const handleFiles = (files: FileList | File[]) => {
        const selectedFile = Array.from(files)[0]
        if (!selectedFile) return

        startUpload(selectedFile)
        // Имитация загрузки (потом заменишь на реальный запрос)
        setTimeout(() => {
            finishUpload()
        }, 3000)
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <AnalyzeSurface
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
            >
                {isUploading ? (
                    <FileUploadingStatus fileName={file?.name} iconPicture={statusIcon} />
                ) : isSuccess ? (
                    <FileUploadSuccess
                        fileName={file?.name || ""}
                        onDelete={removeFile}
                        iconPicture={successIcon}
                        successText={successText}
                        onNext={onNext}
                    />
                ) : (
                    <AppFileUpload
                        buttonText={buttonText}
                        icon={uploadIcon}
                        accept={accept}
                        onFileSelect={handleFiles}
                        formats={formats}
                        separator={separator}
                    />
                )}
            </AnalyzeSurface>
        </div>
    )
}