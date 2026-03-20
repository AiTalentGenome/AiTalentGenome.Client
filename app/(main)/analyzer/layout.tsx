"use client"

import { AnalyzeHeader } from "@/components/analyze/features/AnalyzeHeader";
import { AppStepper } from "@/components/analyze/features/AppStepper";
import { ANALYZER_FLOW } from "@/lib/analyze-config";
import { usePathname } from "next/navigation";

export default function AnalyzeLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const config = ANALYZER_FLOW.steps.find(s => s.path === pathname)

    return (
        <div className="flex flex-col gap-9.5 container mx-auto">
            <AppStepper FLOW={ANALYZER_FLOW} />

            <div className="space-y-9.5">
                {pathname == "analyzer/choose-candidates" 
                && 
                <AnalyzeHeader
                    title={config!.headerTitle}
                />}
                {pathname == "analyzer/choose-candidates/load-resume" 
                && 
                <AnalyzeHeader
                    title={config!.headerTitle}
                />}
                {children}
            </div>
        </div>
    );
}