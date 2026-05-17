// features/vacancies/model/types.ts

export interface Vacancy {
  id: string;
  hhId: string;      // на скрине hhId
  title: string;     // было name, теперь title
  employerName: string;
  areaName: string;
  isActive: boolean;
  relationsCount?: number;
  applicationsCount: number;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  coverLetter?: string;
}

export interface CreateCandidateRequest {
  name: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  coverLetter?: string;
}

export interface SyncResponse {
  success: boolean;
  count: number;
  message?: string;
}

export interface SyncVacanciesResponse {
  syncedCount: number;
  message: string;
}

export interface Salary {
  from: number;
  to: number;
  currency: string;
}

export interface VacancyDetail {
  id: string;
  title: string;
  description: string;
  keySkills: string[];
  salary: Salary | null;
  experience: string;
  areaName: string;
  hhId: string;
}

export interface CandidateApplication {
  id: string;
  candidateName: string;
  candidateEmail: string;
  lastJobTitle: string;
  totalExperienceMonths: number;
  aiScore: number;
  status: number; // Соответствует ContractStatus enum на бэке
  candidateSkills: string[];
  appliedAt: string; // ISO дата от Protobuf Timestamp
}

export interface SyncApplicationsResponse {
  syncedCount: number;
  message: string;
}

export interface PagedCandidatesResponse {
  items: CandidateApplication[];
  totalCount: number;
}