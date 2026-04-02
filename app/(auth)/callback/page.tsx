"use client"

import { useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import api from '@/lib/api' // твой настроенный axios с withCredentials: true

export default function HHCallbackPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const isProcessed = useRef(false) // Защита от двойного запроса в StrictMode

    useEffect(() => {
        const code = searchParams.get('code')

        if (code && !isProcessed.current) {
            isProcessed.current = true

            // 1. Отправляем код на бэкенд
            api.post('/Auth/exchange', { code })
                .then(() => {
                    // 2. Если бэкенд ответил OK (кука установилась), идем в анализатор
                    router.push('/')
                })
                .catch((err) => {
                    console.error("Ошибка при обмене кода:", err)
                    router.push('/login?error=failed')
                })
        }
    }, [searchParams, router])

    return (
        <div className="flex flex-col h-screen w-full items-center justify-center bg-white font-manrope">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2494B3] mb-4"></div>
            <p className="text-[#919999] text-[18px]">Синхронизируем данные с HeadHunter...</p>
        </div>
    )
}