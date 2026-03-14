"use client"

import { AuthModal } from "@/components/custom/Auth/AuthModal";
import { useParams } from "next/navigation";

export default function AuthPage() {
  const params = useParams();
  const mode = params.mode as 'login' | 'register';
  
  return (
    // Добавляем фон: светлый градиент или сетку
    <main className="min-h-screen min-w-screen flex items-center justify-center bg-[#F8F9FA]">
      <AuthModal initialMode={mode} />
    </main>
  )
}