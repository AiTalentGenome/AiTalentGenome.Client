// hooks/queries/keys.ts

export const queryKeys = {
  auth: {
    me: ['user-me'] as const,
  },
  vacancies: {
    // Весь список вакансий
    list: ['vacancies', 'list'] as const,
    // Конкретная вакансия (например, по ID)
    detail: (id: string) => ['vacancies', 'detail', id] as const,
    // Кандидаты конкретной вакансии
    candidates: (vacancyId: string) => ['vacancies', vacancyId, 'candidates'] as const,
  }
} as const;