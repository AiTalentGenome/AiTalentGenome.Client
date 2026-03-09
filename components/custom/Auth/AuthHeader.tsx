import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { DialogTitle } from "@/components/ui/dialog" // Импортируем именно этот компонент
import { Logo } from "../Logo";

interface AuthHeaderProps {
    showBack?: boolean;
    onBack?: () => void;
}

export const AuthHeader = ({ showBack, onBack }: AuthHeaderProps) => (
    <div className="flex flex-col items-center gap-6 relative w-full">
        {showBack && (
            <button
                onClick={onBack}
                className="absolute left-0 top-1 text-[#919999] hover:text-primary transition-colors"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
        )}

        <div className="flex items-center gap-2">
            <Logo fontSize={25.94} imageSize={{
                width: 20.59,
                height: 43.77
            }} />
        </div>

        {/* ЗАМЕНЯЕМ h2 на DialogTitle */}
        <DialogTitle className="font-open-sans font-semibold text-[22px] text-footer-text">
            Вход в личный кабинет
        </DialogTitle>
    </div>
)