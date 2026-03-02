import * as React from "react"
import Link from "next/link"
import { Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-footer-bg">
      <div className="w-full container h-20 flex items-center justify-between font-body text-sm">
        <div className="text-footer-text">
          AI Talent Genome, {currentYear}
        </div>

        <Link href="/privacy" className="hover:text-primary transition-colors text-footer-text hidden sm:block">
          Политика конфиденциальности
        </Link>

        <div className="flex items-center gap-4">
          {[1, 2, 3].map((id) => (
            <div key={id} className="w-10 h-10 rounded-full bg-[#919999] flex items-center justify-center text-white cursor-pointer hover:bg-primary transition-all">
              <Wrench className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}