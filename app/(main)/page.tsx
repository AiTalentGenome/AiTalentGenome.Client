"use client"

import { HeroSection } from "@/components/home/HeroSection";
import UserSection from "@/components/home/UserSection";
import { useHHAuth } from "@/features/hh-auth/hooks/hh-use-auth";

export default function HomePage() {
  const { isLoggedIn, isLoading } = useHHAuth()

  // Пока мы не знаем, кто это, AuthWrapper покажет лоадер.
  // Когда придет 401, isLoading станет false, а isAuthorized - false.
  
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
         <div className="animate-pulse text-[#24B3AC] font-manrope">Загрузка...</div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <HeroSection />;
  }

  return (
    <div className="container flex-1 flex items-center justify-center">
      <UserSection />
    </div>
  );
}