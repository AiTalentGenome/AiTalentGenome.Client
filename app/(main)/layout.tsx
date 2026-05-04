// app/(main)/layout.tsx
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/Footer";
import { AnalysisModal } from "@/components/custom/AnalysisModal";
import { DesktopGuard } from "@/components/custom/DesktopGuard";
import AuthWrapper from "@/components/providers/AuthWrapper";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthWrapper>
      <DesktopGuard />
      <div className="hidden xl:flex flex-col min-h-screen grow">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <AnalysisModal />
      </div>
    </AuthWrapper>
  );
}