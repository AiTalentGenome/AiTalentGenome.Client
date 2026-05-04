// src/shared/config/api-routes.ts

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const HH_AUTH_ROUTES = {
  EXCHANGE: '/auth/exchange',
  ME: '/auth/me',
  LOGOUT: '/auth/logout',
} as const;

export const ANALYSIS_ROUTES = {
  SCORE: '/analysis/score',
  RESUME: '/analysis/resume',
} as const;