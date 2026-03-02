"use client"

import * as React from "react"
import Image from "next/image"
import { X, Check, ChevronRight } from "lucide-react"
import { Button } from "../controls/Button";

interface FileUploadSuccessProps {
  fileName: string;
  onDelete: () => void;
  iconPicture: string;
  successText: string;
}

export const FileUploadSuccess = ({
  fileName,
  onDelete,
  iconPicture,
  successText
}: FileUploadSuccessProps) => {

  const formatFileName = (name: string) => {
    const maxLength = 12; // Максимальное количество символов для "тела" имени
    const lastDotIndex = name.lastIndexOf(".");

    // Если точки нет (нет расширения) или имя и так короткое
    if (lastDotIndex === -1 || name.length <= maxLength + 4) return name;

    const extension = name.substring(lastDotIndex); // .pdf
    const baseName = name.substring(0, lastDotIndex); // Название

    // Обрезаем название и добавляем многоточие + расширение
    return baseName.substring(0, maxLength) + ".." + extension;
  };

  return (
    <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-500">

      {/* 1. Белый прямоугольник с файлом */}
      <div className="relative bg-white rounded-3xl px-12 py-8 flex flex-col items-center gap-4 max-w-37.5 shadow-sm">
        {/* Кнопка крестик в углу */}
        <button
          onClick={onDelete}
          className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-[5.33px] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Иконка файла */}
        <div className="w-12 h-12 flex items-center justify-center">
          <Image
            src={iconPicture}
            alt="Text Icon"
            width={48}
            height={48}
          />
        </div>

        {/* Название файла */}
        <span className="font-body text-[12px] leading-4 text-[#00566E] font-medium text-center">
          {formatFileName(fileName)}
        </span>
      </div>

      {/* 2. Надпись "Резюме загружен" по данным Figma */}
      <div className="flex items-center gap-2 mt-2">
        {/* Иконка птички в круге */}
        <div className="w-6 h-6 flex items-center justify-center text-primary">
          <Check className="w-4 h-4" strokeWidth={3} />
        </div>

        <span className="font-body font-semibold text-[16px] leading-6 text-primary text-center antialiased">
          {successText}
        </span>
      </div>

      <Button
          variant="default"
          className="max-h-14"
        >
          Далее <ChevronRight className="w-6 h-11" />
        </Button>
    </div>
  )
}