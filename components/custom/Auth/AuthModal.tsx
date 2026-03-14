"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useAuthModalStore } from "@/store/useAuthModalStore"
import { AuthHeader } from "./AuthHeader"
import { LoginHHView } from "./Login/LoginHHView"
import { AuthEmailView } from "./AuthEmailView"
import { LoginPhoneView } from "./AuthPhoneView"
import { LoginPasswordView } from "./Login/LoginPasswordView"
import { LoginPhonePasswordView } from "./Login/LoginPhonePasswordView"
import React from "react"

export const AuthModal = ({ initialMode }: { initialMode?: 'login' | 'register' }) => {
    const { isAuthOpen, authView, closeAuth, openAuth, setAuthMode } = useAuthModalStore();

    React.useEffect(() => {
        // 1. Устанавливаем режим (Вход или Регистрация)
        if (initialMode) {
            setAuthMode(initialMode);
        }

        // 2. Устанавливаем стартовый экран, если он еще не выбран
        if (!authView) {
            if (initialMode === 'register') {
                // Для регистрации сразу открываем Email
                openAuth('auth-email');
            } else {
                // Для входа оставляем HH как первый шаг
                openAuth('auth-hh');
            }
        }
    }, [authView, openAuth, initialMode, setAuthMode]);

    if (!authView) return null;
    const handleBack = () => {
        if (authView === 'auth-login-password') {
            openAuth('auth-email');
        } else if (authView === 'auth-phone-password') {
            openAuth('auth-phone'); // Возвращаемся к вводу телефона
        } else {
            openAuth('auth-hh');
        }
    };

    const canGoBack = authView !== 'auth-hh';

    return (
        <div>
            <div className="w-122.5 rounded-[40px] py-11 px-12.25 border-none bg-white shadow-2xl [&>button]:hidden">
                <div className="flex flex-col items-center gap-5">
                    <AuthHeader
                        showBack={canGoBack}
                        onBack={handleBack}
                    />

                    {/* Рендерим нужный вид */}
                    {authView === 'auth-hh' && (
                        <LoginHHView onOtherMethod={() => openAuth('auth-email')} />
                    )}
                    {authView === 'auth-email' && <AuthEmailView />}
                    {authView === 'auth-login-password' && <LoginPasswordView />}
                    {authView === 'auth-phone' && <LoginPhoneView />}
                    {authView === 'auth-phone-password' && <LoginPhonePasswordView />}
                </div>
            </div>
        </div>
    )
}