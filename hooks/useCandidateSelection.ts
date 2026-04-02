import { useState, useCallback } from 'react';

export function useCandidateSelection(results: any[], topN: number) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleCandidate = useCallback((id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }, []);

  const selectTopN = useCallback(() => {
    const ids = results.slice(0, topN).map(c => c.negotiationId);
    setSelectedIds(ids);
  }, [results, topN]);

  const clearSelection = useCallback(() => {
    setSelectedIds([]);
  }, []);

  return { selectedIds, setSelectedIds, toggleCandidate, selectTopN, clearSelection };
}