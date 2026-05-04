"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { usePathname } from "next/navigation"
import { useHHAuth } from "@/features/hh-auth/hooks/hh-use-auth" // Наш новый хук

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  // Используем реальные данные из TanStack Query
  const { isLoading, isLoggedIn } = useHHAuth()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Предотвращаем ошибку гидратации
  if (!mounted) return null

  // Список публичных страниц, где лоадер не нужен
  const isPublicPage = pathname === '/' || pathname.startsWith('/login') || pathname === '/callback';

  // Если мы грузим данные пользователя и это НЕ публичная страница — показываем лоадер
  if (isLoading && !isPublicPage) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-[#2494B3]" />
          <p className="font-manrope text-gray-400 animate-pulse">Загрузка системы...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}