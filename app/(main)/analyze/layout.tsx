"use client"

import { AnalyzeHeader } from "@/components/analyze/features/AnalyzeHeader";
import { AppStepper } from "@/components/analyze/features/AppStepper";
import { ANALYZE_FLOW } from "@/lib/analyze-config";
import { usePathname } from "next/navigation";

export default function AnalyzeLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const config = ANALYZE_FLOW.steps.find(s => s.path === pathname) || ANALYZE_FLOW.steps[0];

    return (
        <div className="flex flex-col gap-y-12 container mx-auto mb-14">
            <AppStepper FLOW={ANALYZE_FLOW} />

            <div className="space-y-8">
                <AnalyzeHeader
                    title={config.headerTitle}
                    description={config.headerDescription}
                />
                {children}
            </div>
        </div>
    );
}