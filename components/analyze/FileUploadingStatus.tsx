"use client"
import Image from "next/image"
import { FileText, Loader, Loader2 } from "lucide-react"

interface FileUploadingStatusProps {
    title?: string;
    fileName?: string;
    iconPicture: string;
}

export const FileUploadingStatus = ({
    title = "Загрузка файла",
    fileName,
    iconPicture
}: FileUploadingStatusProps) => {
    return (
      <div className="flex flex-col items-center font-heading gap-20 animate-in fade-in zoom-in-95 duration-500 mb-10">
        {/* Иконка файла в белом круге (как обсуждали ранее) */}
        <div className="flex flex-col items-center gap-4">
            <div className="w-12.5 h-12.5 bg-white rounded-full flex items-center justify-center shadow-lg shadow-[#2494B3]/20">
                <Image
                      src={iconPicture}
                      alt="Text Icon"
                      width={50}
                      height={50}
                    />
            </div>
            {/* Имя файла: теперь text-[12px] сработает */}
            {fileName && (
              <span className="font-body text-[12px] text-[#00566E] leading-4 text-center max-w-50 truncate mt-2">
                  {fileName}
              </span>
            )}
        </div>

        {/* Блок со спиннером и основным статусом */}
        <div className="flex flex-col items-center gap-2">
            <div className="font-body font-semibold text-[#00566E] flex items-center gap-3">
                <Loader className="w-6 h-6 animate-spin" /> 
                <span className="text-[16px] leading-6 text-center antialiased">
                   {title}
                </span>
            </div>
        </div>
      </div>
    )
}