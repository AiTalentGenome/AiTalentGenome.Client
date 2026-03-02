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
    const { isOpen, closeModal, openModal } = useModalStore();

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        } else {
            // Поведение по умолчанию, если onConfirm не передан
            closeModal();
        }
    };

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        } else {
            closeModal();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent className="max-w-122.5 max-h-69 rounded-4xl py-22 gap-8 border-none bg-white">
                <div className="flex flex-col items-center text-center gap-9.5 animate-in fade-in duration-300">
                    <DialogHeader className="space-y-3 text-center sm:text-center">
                        <DialogTitle className="font-open-sans font-semibold text-[22px] leading-6 text-footer-text">
                            {title}
                        </DialogTitle>
                        <DialogDescription className="font-body font-semibold text-[16px] text-footer-text leading-6">
                            {description}
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="flex flex-row justify-center w-full gap-5">
                        <Button onClick={handleConfirm} className="max-h-53 h-14">
                            {confirmText}
                        </Button>
                        <Button variant="secondary" onClick={handleCancel} className="max-h-53 h-14">
                            {cancelText}
                        </Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    )
}