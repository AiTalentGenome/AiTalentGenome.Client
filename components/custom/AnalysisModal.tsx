"use client"

import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog" // Путь к shadcn компоненту
import { Button } from "@/components/controls/Button"
import { useModalStore } from "@/store/useModalStore"

interface AnalysisModalProps {
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

export const AnalysisModal = ({
    title = "Вы покидаете страницу анализа",
    description = "Сохраните черновик, чтобы продолжить позднее",
    confirmText = "Сохранить",
    cancelText = "Выйти",
    onConfirm,
    onCancel
}: AnalysisModalProps) => {
    const { isOpen, closeModal, openModal, view } = useModalStore();

    const handleSave = () => {
        // Здесь можно добавить реальный запрос к API
        console.log("Черновик сохраняется...");

        // Переключаем модалку на экран успеха
        openModal('save-success');
    };

    const isSuccess = view === 'save-success';

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        } else {
            closeModal();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent className="max-w-122.5 rounded-4xl gap-8 border-none bg-white pt-21 pb-8 px-4">
                <div className="flex flex-col items-center text-center gap-9.5 animate-in fade-in duration-300">
                    <DialogHeader className="space-y-3 text-center sm:text-center">
                        <DialogTitle className="font-open-sans font-semibold text-[22px] leading-6 text-footer-text">
                            {isSuccess ? "Черновик сохранен" : "Вы покидаете страницу анализа"}
                        </DialogTitle>
                        <DialogDescription className="font-manrope font-semibold text-[16px] text-footer-text leading-6">
                            {isSuccess
                                ? "Вы сможете найти сохраненный черновик в личном кабинете и продолжить анализ позднее"
                                : "Сохраните черновик, чтобы продолжить позднее"}
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="flex flex-row justify-center w-full gap-5">
                        {isSuccess ? (
                            <>
                                <Button onClick={closeModal} className="max-h-53 h-14">
                                    Продолжить
                                </Button>
                                <Button variant="secondary" onClick={closeModal} className="max-h-53 h-14">
                                    Выйти
                                </Button>
                            </>
                        ) : (
                            // Кнопки для экрана ПРЕДУПРЕЖДЕНИЯ
                            <>
                                <Button onClick={handleSave} className="max-h-53 h-14">
                                    Сохранить черновик
                                </Button>
                                <Button variant="secondary" onClick={closeModal} className="max-h-53 h-14">
                                    Выйти
                                </Button>
                            </>
                        )}
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    )
}