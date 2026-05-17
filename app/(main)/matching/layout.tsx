"use client"

import { AnalyzeHeader } from "@/components/features/analyze/AnalyzeHeader";
import { AppStepper } from "@/components/controls/AppStepper";
import { usePathname } from "next/navigation";

export default function AnalyzerLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex flex-col gap-9.5 container mx-auto mb-14">
            <div className="space-y-9.5">
                {children}
            </div>
        </div>
    );
}