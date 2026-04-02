"use client"

import { AnalyzeHeader } from "@/components/analyze/features/AnalyzeHeader";
import { AppStepper } from "@/components/analyze/features/AppStepper";
import { ANALYZER_FLOW } from "@/lib/analyze-config";
import { usePathname } from "next/navigation";

export default function AnalyzerLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const config = [...ANALYZER_FLOW.steps]
        .reverse()
        .find(s => pathname.startsWith(s.path)) || ANALYZER_FLOW.steps[0];

    return (
        <div className="flex flex-col gap-9.5 container mx-auto mb-14">
            <AppStepper FLOW={ANALYZER_FLOW} />

            <div className="space-y-9.5">
                {!pathname.startsWith("/analyzer/choose-candidates") && (
                    <AnalyzeHeader
                        title={config.headerTitle}
                    />
                )}
                {children}
            </div>
        </div>
    );
}