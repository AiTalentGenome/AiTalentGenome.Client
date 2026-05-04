"use client"

// src/features/auth/hooks/use-auth.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { HHAuthService } from '../api/hh.auth.service';

export const useHHAuth = () => {
  const queryClient = useQueryClient();

  // Получение данных текущего пользователя
  const userQuery = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: () => HHAuthService.getMe(),
    retry: false, // Не спамим запросами, если пользователь не залогинен
    staleTime: 1000 * 60 * 5, // Кэшируем на 5 минут
  });

  // Мутация для обмена кода
  const exchangeMutation = useMutation({
    mutationFn: (code: string) => HHAuthService.exchangeCode(code),
    onSuccess: () => {
      // Обновляем данные пользователя после успешного входа
      queryClient.invalidateQueries({ queryKey: ['auth', 'me'] });
    },
  });

  // Мутация для выхода
  const logoutMutation = useMutation({
    mutationFn: () => HHAuthService.logout(),
    onSuccess: () => {
      queryClient.setQueryData(['auth', 'me'], null);
    },
  });

  return {
    user: userQuery.data,
    isLoading: userQuery.isLoading,
    isLoggedIn: !!userQuery.data,
    exchange: exchangeMutation.mutateAsync,
    isExchanging: exchangeMutation.isPending,
    logout: logoutMutation.mutate,
  };
};