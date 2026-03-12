"use client"

import * as React from "react"
import { Phone } from "lucide-react"
import { Button } from "@/components/controls/Button"
import { AppInput } from "@/components/controls/AppInput"
import { useAuthModalStore } from "@/store/useAuthModalStore"
import { PatternFormat } from "react-number-format"

export const AuthPhoneView = () => {
    // Достаем нужные функции из стора
    const { openAuth, setPhoneNumber } = useAuthModalStore();
    
    const [phoneData, setPhoneData] = React.useState({
        formattedValue: "",
        value: "" // Чистые цифры: 7071234567
    });

    // Кнопка активна, когда введено 10 цифр (после +7)
    const isComplete = phoneData.value.length === 10;

    const handleNext = () => {
        if (isComplete) {
            setPhoneNumber(phoneData.value); // Сохраняем в глобальный стор
            openAuth('auth-phone-password'); // Переходим к паролю
        }
    };

    return (
        <div className="flex flex-col gap-6 w-full animate-in slide-in-from-left-4 duration-300">
            {/* Табы */}
            <div className="flex bg-[#F2F4F7] rounded-[16px] p-1">
                <button
                    onClick={() => openAuth('auth-email')}
                    className="flex-1 py-3 rounded-[14px] font-open-sans leading-6 font-semibold text-[18px] text-[#CCCCCC] transition-all"
                >
                    E-mail
                </button>
                <button
                    className="flex-1 py-3 rounded-[14px] font-open-sans leading-6 font-semibold text-[18px] bg-white text-[#1a1a1a] shadow-sm"
                >
                    Телефон
                </button>
            </div>

            {/* Ввод номера */}
            <PatternFormat
                format="+7 (###) ###-##-##"
                mask="_"
                customInput={AppInput}
                type="tel"
                placeholder="+7 (707) 000-00-00"
                icon={Phone}
                value={phoneData.formattedValue}
                onValueChange={(values) => {
                    setPhoneData({
                        formattedValue: values.formattedValue,
                        value: values.value 
                    });
                }}
            />

            {/* ТЕПЕРЬ КНОПКА СЛУШАЕТ ПРАВИЛЬНУЮ ПЕРЕМЕННУЮ */}
            <Button 
                variant={"default"} 
                disabled={!isComplete} // Инвертируем: если не готово, то disabled
                onClick={handleNext}
            >
                Далее
            </Button>

            <div className="space-y-5 mb-1">
                <Button variant="secondary" className="w-full h-14 rounded-[20px] bg-secondary text-white gap-2">Войти с Google</Button>
                <Button variant="secondary" className="w-full h-14 rounded-[20px] bg-secondary text-white gap-2">Войти с Yandex</Button>
            </div>

            <p className="font-open-sans text-[14px] text-center font-normal text-footer-text">
                Нет учетной записи? <button className="font-bold hover:underline">Зарегистрируйтесь</button>
            </p>
        </div>
    )
}