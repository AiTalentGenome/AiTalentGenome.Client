// features/vacancies/model/sorting-config.ts

export const SORTING_MAPPING = [
  { label: "Все отклики", type: "all" },
  { label: "Неразобранные", type: "status", value: 0 },    // Submitted
  { label: "Статус", type: "status", value: 1 },           // Screening (Подумать)
  { label: "Подумать", type: "status", value: 1 },         // Тоже Screening
  { label: "Первичный контакт", type: "status", value: 2 }, // PhoneInterview
  { label: "Тестовое задание", type: "status", value: 3 },  // Assessment
  { label: "Собеседование", type: "status", value: 4 },     // Interview
  { label: "Предложение о работе", type: "status", value: 5 }, // Offered
  { label: "Выход на работу", type: "status", value: 6 },   // Hired
  { label: "Не подходит", type: "status", value: 7 },       // Rejected
  { label: "Проанализированные", type: "analyzed" }
];