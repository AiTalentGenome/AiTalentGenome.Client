"use client"

import * as React from "react"
import { useAuthStore } from "@/store/useAuthStore"
import { HeroSection } from "@/components/home/HeroSection";
import UserSection from "@/components/home/UserSection";

export default function HomePage() {
  const isAuthorized = useAuthStore((state) => state.isAuthorized);

  if (!isAuthorized) {
    return (
      /* h-full и flex-1 заставляют страницу занять всё пространство main */
      <HeroSection/>
    );
  }

  return (
    <div className="container flex-1 flex items-center justify-center">
      <UserSection />
    </div>
  );
}