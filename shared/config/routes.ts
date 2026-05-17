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
  PORTRAIT: { // Был MAIN
    MAIN: '/portrait',
    RESUMES: '/portrait/resumes',
    INTERVIEW: '/portrait/interview',
    SUMMARY: '/portrait/summary',
  },
  MATCHING: { // Был ANALYZER
    CHOOSE_VACANCY: '/matching/choose-vacancy',
    CHOOSE_CANDIDATES: '/matching/choose-candidates',
    LOAD: '/matching/choose-candidates/load-resume',
    // Сюда добавишь критерии и топ, когда до них дойдет папка
    CRITERIAS: '/matching/criterias',
    TOP_CANDIDATES: '/matching/top-candidates',
  }
} as const;