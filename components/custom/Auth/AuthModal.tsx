"use client"

import * as React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useAuthModalStore } from "@/store/useAuthModalStore"
import { AuthHeader } from "./AuthHeader"
import { AuthHHView } from "./AuthHHView"
import { AuthEmailView } from "./AuthEmailView"

export const AuthModal = () => {
    const { isAuthOpen, authView, closeAuth, openAuth } = useAuthModalStore();

    if (authView !== 'auth-hh' && authView !== 'auth-email') return null;

    return (
        <Dialog open={isAuthOpen} onOpenChange={closeAuth}>
            <DialogContent className="max-w-122.5 rounded-[40px] py-9 px-12.25 border-none bg-white shadow-2xl">
                <div className="flex flex-col items-center gap-6">
                    {/* Общая шапка */}
                    <AuthHeader 
                        showBack={authView === 'auth-email'} 
                        onBack={() => openAuth('auth-hh')} 
                    />

                    {/* Переключение контента */}
                    {authView === 'auth-hh' ? (
                        <AuthHHView onOtherMethod={() => openAuth('auth-email')} />
                    ) : (
                        <AuthEmailView />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}