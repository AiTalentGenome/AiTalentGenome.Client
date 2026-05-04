// src/features/auth/model/types.ts

/**
 * Основная модель пользователя, приходящая из IdentityService
 */
export interface User {
  id: number;          // Наш long ID из Postgres
  email: string;
  firstName: string;
  lastName: string;
  middleName?: string; // Отчество может быть пустым
  companyName: string; // Название компании из БД/HH
  position: string;    // Должность (по дефолту "Менеджер")
  isActive: boolean;   // Статус подписки компании
}

/**
 * Тип ответа при успешном обмене кода HeadHunter
 */
export interface AuthResponse {
  message: string;
  user: User;
}

/**
 * Тип для обработки ошибок (если нужно типизировать Error от Axios)
 */
export interface AuthError {
  error: string;
  message?: string;
}