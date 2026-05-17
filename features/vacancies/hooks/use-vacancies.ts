// features/vacancies/hooks/use-vacancies.ts
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { vacanciesService } from '../api/vacancies.service';
import { queryKeys } from './queries/keys';

export const useVacancies = (onlyActive?: boolean) => {
  return useQuery({
    queryKey: queryKeys.vacancies.list,
    queryFn: () => vacanciesService.getVacancies(onlyActive),
  });
};

export const useSyncVacancies = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: vacanciesService.syncVacancies,
    onSuccess: () => {
      // ИНВАЛИДАЦИЯ КЭША: Автоматически обновляет таблицу на странице
      queryClient.invalidateQueries({ queryKey: ['vacancies', 'list'] });
    }
  });
};

// Хук для загрузки файла вакансии
export const useUploadVacancy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => vacanciesService.uploadVacancy(file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.vacancies.list });
    }
  });
};

export const useVacancyById = (id: string | null) => {
  return useQuery({
    queryKey: ['vacancies', 'detail', id],
    queryFn: () => vacanciesService.getVacancyById(id!),
    enabled: !!id, // Запрос не пойдет, если id равен null или undefined
    staleTime: 1000 * 60 * 5, // Кэшируем детали вакансии на 5 минут
  });
};

export const useCandidatesByVacancy = (vacancyId: string | null) => {
  return useQuery({
    queryKey: ['vacancies', 'candidates', vacancyId],
    queryFn: () => vacanciesService.getCandidatesByVacancy(vacancyId!),
    enabled: !!vacancyId, // Запрос выполнится только тогда, когда vacancyId будет передан
    staleTime: 1000 * 60 * 2, // Кэшируем список кандидатов на 2 минуты
  });
};

export const useCandidatesByVacancyInfinite = (
  vacancyId: string | null,
  statuses?: number[],
  onlyAnalyzed?: boolean
) => {
  return useInfiniteQuery({
    // Добавили фильтры в ключ кэша!
    queryKey: ['vacancies', 'candidates', 'infinite', vacancyId, statuses, onlyAnalyzed],
    queryFn: ({ pageParam = 1 }) => 
      vacanciesService.getCandidatesByVacancyPaged(vacancyId!, pageParam, 10, statuses, onlyAnalyzed),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.flatMap(page => page.items).length;
      return totalLoaded < lastPage.totalCount ? allPages.length + 1 : undefined;
    },
    enabled: !!vacancyId,
  });
};

export const useSyncApplications = (vacancyId: string | null) => {
  const queryClient = useQueryClient();

  return useMutation({
    // Передаем функцию из нашего API-сервиса
    mutationFn: () => vacanciesService.syncApplications(vacancyId!),
    onSuccess: () => {
      // ИНВАЛИДАЦИЯ: Заставляем бесконечный список кандидатов обновиться на лету
      queryClient.invalidateQueries({ 
        queryKey: ['vacancies', 'candidates', 'infinite', vacancyId] 
      });
    },
    onError: (error) => {
      console.error("Ошибка при синхронизации откликов с HH:", error);
    }
  });
};