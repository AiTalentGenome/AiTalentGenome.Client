// hooks/queries/auth/useMe.ts
import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import { queryKeys } from '../keys';

// Интерфейс, который мы хотим видеть в приложении
export interface UserMe {
  firstName: string;
  lastName: string;
  email: string;
  position?: string;
  companyName: string;
  avatarUrl?: string;
}

// Интерфейс того, что РЕАЛЬНО прилетает от API (snake_case)
interface UserMeResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  employer?: {
    name: string;
  };
  // добавь остальные поля из JSON, если нужно
}

export const useMe = () => {
  const query = useQuery<UserMe>({
    queryKey: queryKeys.auth.me,
    queryFn: async () => {
      const { data } = await api.get<UserMeResponse>('/Auth/me');
      
      // Маппим (переводим) snake_case в camelCase
      return {
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        companyName: data.employer?.name || "Компания не указана",
        position: "Менеджер", // Пока статично, если нет в API
        avatarUrl: undefined,
      };
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const isAuthorized = !!query.data && !query.isError;

  return { ...query, isAuthorized };
}