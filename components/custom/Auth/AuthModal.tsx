"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useAuthModalStore } from "@/store/useAuthModalStore"
import { AuthHeader } from "./AuthHeader"
import { AuthHHView } from "./AuthHHView"
import { AuthEmailView } from "./AuthEmailView"
import { AuthPhoneView } from "./AuthPhoneView"
import { AuthLoginPasswordView } from "./AuthLoginPasswordView"
import { AuthPhonePasswordView } from "./AuthPhonePasswordView"

export const AuthModal = () => {
    const { isAuthOpen, authView, closeAuth, openAuth } = useAuthModalStore();

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
        <Dialog open={isAuthOpen} onOpenChange={closeAuth}>
            <DialogContent className="max-w-122.5 rounded-[40px] py-11 px-12.25 border-none bg-white shadow-2xl [&>button]:hidden">
                <div className="flex flex-col items-center gap-5">
                    <AuthHeader
                        showBack={canGoBack}
                        onBack={handleBack}
                    />

                    {/* Рендерим нужный вид */}
                    {authView === 'auth-hh' && (
                        <AuthHHView onOtherMethod={() => openAuth('auth-email')} />
                    )}
                    {authView === 'auth-email' && <AuthEmailView />}
                    {authView === 'auth-login-password' && <AuthLoginPasswordView />}
                    {authView === 'auth-phone' && <AuthPhoneView />}
                    {authView === 'auth-phone-password' && <AuthPhonePasswordView />}
                </div>
            </DialogContent>
        </Dialog>
    )
}