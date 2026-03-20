"use client"

import { AnalyzeSurface } from '@/components/analyze/features/AnalyzeSurface';
import { AppFileUpload } from '@/components/controls/FileUploader/AppFileUpload';
import { FileUploadingStatus } from '@/components/controls/FileUploader/FileUploadingStatus';
import { FileUploadSuccess } from '@/components/controls/FileUploader/FileUploadSuccess';
import { Button } from '@/components/controls/Button';
import { useUploadStore } from '@/store/useUploadStore';
import { ChevronLeft, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FileUploadStep } from '@/components/custom/FileUploadStep';

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
            <FileUploadStep
                buttonText="Загрузить запись собеседования"
                formats={["mp3", "mp4", "mov"]}
                statusIcon="/interview/record.svg"
                successIcon="/interview/recordSuccess.svg"
                successText="Запись собеседования загружена"
                onSaveDraft={() => console.log("Специфичный сейв для интервью")}
                onNext={() => router.push("/analyze/summary")}
            />

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
