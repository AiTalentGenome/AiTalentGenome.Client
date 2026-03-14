import { AuthModal } from "@/components/custom/Auth/AuthModal";

export default function AuthPage() {
  return (
    // Добавляем фон: светлый градиент или сетку
    <main className="min-h-screen w-full flex items-center justify-center bg-[#F8F9FA]">
      <AuthModal />
    </main>
  )
}