// shared/config/routes.ts

/**
 * Внутренние пути приложения (для Link и router.push)
 */
export const APP_ROUTES = {
  HOME: '/',
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    CALLBACK: '/callback',
  },
  MAIN: {
    MAIN: '/',
    RESUMES: '/analyze/resumes',
    SUMMARY: '/analyze/summary',
    INTERVIEW: '/analyze/interview',
  },
  ANALYZER: {
    CHOOSE: '/analyzer/choose-candidates',
    LOAD: '/analyzer/choose-candidates/load-resume',
  }
} as const;