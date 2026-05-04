// app/layout.tsx
import { Unbounded, Manrope, Open_Sans, Inter } from "next/font/google";
import "@/app/globals.css";
import QueryProvider from "@/components/providers/QueryProvider";

const unbounded = Unbounded({ subsets: ["cyrillic", "latin"], variable: "--font-unbounded" });
const inter = Inter({ subsets: ["cyrillic", "latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["cyrillic", "latin"], variable: "--font-manrope" });
const openSans = Open_Sans({ subsets: ["cyrillic", "latin"], variable: "--font-open-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${manrope.variable} ${openSans.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}