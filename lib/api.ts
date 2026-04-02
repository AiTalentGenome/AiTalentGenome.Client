import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true // КРИТИЧНО: разрешает передачу кук
});

// Перехватчик ЗАПРОСОВ нам больше не нужен для токена.
// Но его можно оставить, если ты захочешь добавлять другие заголовки (например, Content-Language).

// Перехватчик ОТВЕТОВ (Response Interceptor)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const detail = error.response?.data?.detail || error.response?.data?.error;

    if (status === 401) {
      // Если сервер сказал 401, значит кука невалидна или истекла
      console.warn("Сессия истекла или токен невалиден.");
      
      // Нам не нужно удалять ничего из localStorage, так как там ничего нет.
      // Просто перенаправляем на логин.
      if (typeof window !== 'undefined') {
        window.location.href = '/login?error=session_expired';
      }
    }

    if (status === 403) {
      // Это как раз для твоей SaaS-логики (если компания не активна)
      alert(detail || "Доступ запрещен. Проверьте статус подписки.");
    }

    return Promise.reject(error);
  }
);

export default api;