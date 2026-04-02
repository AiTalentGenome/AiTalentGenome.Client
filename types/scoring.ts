export interface ScoringRule {
    description: string;
    points: number;
}

export interface AnalysisRequest {
    vacancyId: string;
    collectionId: string;
    topN: number;
    customCriteria: string;
    plusRules: ScoringRule[];
    penaltyRules: ScoringRule[];
}