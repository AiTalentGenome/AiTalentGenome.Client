// src/shared/api/api-instance.ts
import axios from 'axios';
import { API_BASE_URL } from '../config/api-routes';

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Обязательно для работы с HttpOnly Cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Можно добавить интерцептор для обработки 401 (Unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Например, редирект на логин, если сессия протухла
      console.warn('Сессия завершена');
    }
    return Promise.reject(error);
  }
);