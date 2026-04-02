import {useState, useCallback} from 'react';
import api from '@/lib/api';
import {AnalysisRequest} from "@/types/scoring";

export function useCandidateAnalysis() {
    const [vacancies, setVacancies] = useState([]);
    const [collections, setCollections] = useState([]);
    const [results, setResults] = useState([]);
    const [analyzing, setAnalyzing] = useState(false);
    const [processing, setProcessing] = useState(false);

    const fetchVacancies = async () => {
        const res = await api.get('/Analysis/vacancies');
        setVacancies(res.data);
    };
    const fetchCollections = async (vacancyId: string) => {
        if (!vacancyId) {
            setCollections([]);
            return;
        }
        const res = await api.get(`/Analysis/vacancies/${vacancyId}/collections`);
        setCollections(res.data);
    };

    const runAnalysis = async (data: AnalysisRequest) => {
        setAnalyzing(true);
        try {
            const res = await api.post('/Analysis/analyze', data);
            setResults(res.data);
            return res.data;
        } finally {
            setAnalyzing(false);
        }
    };

    // --- ОБНОВЛЕННЫЙ MASS MOVE (Требование 3.4) ---
    const massMove = async (
        ids: string[],
        actionId: string,
        vacancyId: string,
        collectionId: string
    ) => {
        setProcessing(true);
        try {
            const res = await api.post('/Analysis/bulk-change-state', {
                negotiationIds: ids,
                actionId: actionId,
                vacancyId: vacancyId,      // Добавили для аудита
                collectionId: collectionId  // Добавили для аудита
            });

            return {
                success: res.data.successCount,
                failed: res.data.failedCount,
                errors: res.data.errors
            };
        } catch (err) {
            console.error("Критическая ошибка массового перевода", err);
            return {success: 0, failed: ids.length, errors: []};
        } finally {
            setProcessing(false);
        }
    };



    const stopAnalysis = async () => {
        try {
            await api.post('/Analysis/cancel');
            setAnalyzing(false); // Сбрасываем статус загрузки в UI
        } catch (err) {
            console.error("Не удалось остановить анализ", err);
        }
    };

    return {
        vacancies,
        collections,
        results,
        setResults,
        analyzing,
        processing,
        setProcessing,
        fetchVacancies,
        fetchCollections,
        runAnalysis,
        massMove,
        stopAnalysis
    };
}