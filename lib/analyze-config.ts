// shared/config/flows.ts

export type FlowsType = {
    steps: {
        id: number;
        path: string;
        label: string;
        headerTitle?: string;
        headerDescription?: string;
    }[];
}

export const PORTRAIT_FLOW: FlowsType = { // Был ANALYZE_FLOW
  steps: [
    {
      id: 1,
      path: "/portrait",
      label: "1. Загрузить вакансию",
      headerTitle: "Загрузить вакансию",
      headerDescription: "Достаточно загрузить резюме на платформу..."
    },
    {
      id: 2,
      path: "/portrait/resumes",
      label: "2. Загрузить резюме",
      headerTitle: "Загрузить резюме",
      headerDescription: "Достаточно загрузить резюме на платформу..."
    },
    {
      id: 3,
      path: "/portrait/interview",
      label: "3. Загрузить запись собеседования",
      headerTitle: "Загрузить запись собеседования",
      headerDescription: "Загрузите запись собеседования..."
    },
    {
      id: 4,
      path: "/portrait/summary",
      label: "4. Получить портрет кандидата",
      headerTitle: undefined,
      headerDescription: undefined
    },
  ]
};

export const MATCHING_FLOW: FlowsType = { // Был ANALYZER_FLOW
  steps: [
    {
      id: 1,
      path: "/matching/choose-vacancy",
      label: "1. Выбрать вакансию", // Поправил на Выбрать, так как мы там выбираем из таблицы
      headerTitle: "Мои вакансии",
      headerDescription: "Достаточно загрузить резюме на платформу..."
    },
    {
      id: 2,
      path: "/matching/choose-candidates",
      label: "2. Выбрать кандидатов",
      headerTitle: "CTO (Backend / NLP Platform Lead)",
      headerDescription: "Достаточно загрузить резюме на платформу..."
    },
    {
      id: 3,
      path: "/matching/criterias",
      label: "3. Указать критерии",
      headerTitle: "Загрузить запись собеседования",
      headerDescription: "Загрузите запись собеседования..."
    },
    {
      id: 4,
      path: "/matching/top-candidates",
      label: "4. Получить топ целевых кандидатов",
      headerTitle: "Получить портрет кандидата",
      headerDescription: "Получите полный портрет кандидата..."
    },
  ]
};