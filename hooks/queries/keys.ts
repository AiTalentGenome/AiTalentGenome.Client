// hooks/queries/keys.ts
export const queryKeys = {
  auth: {
    me: ['user-me'] as const,
    session: ['session'] as const,
  },
  vacancies: {
    list: ['vacancies', 'list'] as const,
    details: (id: string) => ['vacancies', 'detail', id] as const,
  },
  candidates: {
    byVacancy: (vacancyId: string) => ['candidates', vacancyId] as const,
  }
}