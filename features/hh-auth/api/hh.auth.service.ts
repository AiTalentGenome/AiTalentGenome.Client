// src/features/auth/api/auth.service.ts
import { api } from '@/shared/api/api-instance';
import { HH_AUTH_ROUTES } from '@/shared/config/api-routes';
import { User } from '../model/types';

export const HHAuthService = {
  async exchangeCode(code: string) {
    const { data } = await api.post<{ user: User }>(HH_AUTH_ROUTES.EXCHANGE, { code });
    return data;
  },

  async getMe() {
    const { data } = await api.get<User>(HH_AUTH_ROUTES.ME);
    return data;
  },

  async logout() {
    await api.post(HH_AUTH_ROUTES.LOGOUT);
  }
};