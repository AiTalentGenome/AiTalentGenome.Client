import Image from "next/image"
import { ArrowLeft, ChevronLeft } from "lucide-react"
import { DialogTitle } from "@/components/ui/dialog" // Импортируем именно этот компонент
import { Logo } from "../Logo";
import { useAuthModalStore } from "@/store/useAuthModalStore";

interface AuthHeaderProps {
    showBack?: boolean;
    onBack?: () => void;
}

export const AuthHeader = ({ showBack, onBack }: AuthHeaderProps) => {
    const { authMode } = useAuthModalStore();

    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex items-center gap-9 justify-center w-full -ml-13 mb-2">
                {showBack && (
                    <button
                        onClick={onBack}
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                )}


                <Logo fontSize={25.94} imageSize={{
                    width: 20.59,
                    height: 43.77
                }} />
            </div>


            <h2 className="font-open-sans font-semibold text-[22px] text-footer-text mb-1.5">
                {authMode === 'login' ? 'Вход в личный кабинет' : 'Регистрация'}
            </h2>
        </div>
    )
}