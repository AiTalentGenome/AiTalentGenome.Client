"use client"

import { AnalyzeSurface } from '@/components/analyze/AnalyzeSurface';
import { AppFileUpload } from '@/components/analyze/AppFileUpload';
import { FileUploadingStatus } from '@/components/analyze/FileUploadingStatus';
import { FileUploadSuccess } from '@/components/analyze/FileUploadSuccess';
import { Button } from '@/components/controls/Button';
import { useUploadStore } from '@/store/useUploadStore';
import { ChevronLeft, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function InterviewStepPage() {
    const router = useRouter()
    const { isUploading, isSuccess, file, startUpload, finishUpload, setDragging, removeFile } = useUploadStore();

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
                    <FileUploadingStatus fileName={file?.name} iconPicture="/interview/record.svg" />
                ) : isSuccess ? (
                    <FileUploadSuccess fileName={file?.name || ""} onDelete={removeFile} iconPicture="/interview/recordSuccess.svg" successText="Запись собеседования загружена" />
                ) : (
                    <AppFileUpload
                        buttonText="Загрузить запись собеседования"
                        icon={FileText}
                        formats={["mp3", "mp4", "mov"]}
                        separator="/" 
                        onFileSelect={handleFiles} />
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
                    onClick={() => router.push("/analyze/interview")}
                    className="gap-2"
                >
                    Сохранить черновик
                </Button>
            </div>
        </div>
    )
}
