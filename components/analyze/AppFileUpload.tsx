"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"
import { Button } from "@/components/controls/Button"
import { FormatBadge, type FormatType } from "./FormatBadge" // Импортируем наш компонент бейджей

interface AppFileUploadProps {
    onFileSelect: (files: FileList) => void;
    buttonText: string;
    icon: LucideIcon;
    accept?: string;
    // Гибкие настройки текста
    prefixText?: string;   // Например, "в формате"
    separator?: string;    // Например, "или" или "/"
    formats: FormatType[]; // Список форматов: ["pdf", "word"] или ["mp3", "mp4", "mov"]
}

export const AppFileUpload = ({ 
    onFileSelect, 
    buttonText, 
    icon: Icon, 
    accept, 
    prefixText = "в формате",
    separator = "или",
    formats 
}: AppFileUploadProps) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 animate-in fade-in duration-300">
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept={accept}
                multiple
                onChange={(e) => e.target.files?.length && onFileSelect(e.target.files)}
            />

            <Button
                onClick={() => fileInputRef.current?.click()}
                className="rounded-[20px] gap-2 text-base h-14 px-8"
            >
                <Icon className="w-5 h-5" /> {buttonText}
            </Button>

            {/* Гибкая строка форматов */}
            <div className="flex items-center gap-2 mt-1">
                <span className="font-body text-[14px] text-[#798080] leading-4.5">
                    {prefixText}
                </span>
                
                <div className="flex items-center gap-1">
                    {formats.map((fmt, index) => (
                        <React.Fragment key={index}>
                            <FormatBadge type={fmt} />
                            {index < formats.length - 1 && (
                                <span className="font-body text-[14px] text-[#798080] leading-none px-1">
                                    {separator}
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}