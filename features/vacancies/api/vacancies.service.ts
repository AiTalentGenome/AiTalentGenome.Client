import { api } from '@/shared/api/api-instance';
import { Vacancy, Candidate, SyncResponse, SyncVacanciesResponse, VacancyDetail, CandidateApplication, SyncApplicationsResponse, PagedCandidatesResponse } from '../model/types';

export const vacanciesService = {
  // GET api/Vacancies
  getVacancies: async (onlyActive: boolean = true) => {
    const { data } = await api.get<Vacancy[]>('/Vacancies', { params: { onlyActive } });
    return data;
  },

  // POST api/Vacancies/sync
  syncWithHh: async () => {
    const { data } = await api.post<SyncResponse>('/Vacancies/sync');
    return data;
  },

  // GET api/Vacancies/{id}/candidates
  getCandidates: async (id: string) => {
    const { data } = await api.get<Candidate[]>(`/Vacancies/${id}/candidates`);
    return data;
  },

  // POST api/Vacancies/upload
  uploadVacancy: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await api.post<Vacancy>('/Vacancies/upload', formData);
    return data;
  },

  // POST api/Vacancies/{id}/candidates/upload
  uploadCandidate: async (vacancyId: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await api.post(`/Vacancies/${vacancyId}/candidates/upload`, formData);
    return data;
  },

  syncVacancies: async () => {
    const { data } = await api.post<SyncVacanciesResponse>('/Vacancies/sync');
    return data;
  },
  
  getVacancyById: async (id: string) => {
    const { data } = await api.get<VacancyDetail>(`/Vacancies/${id}`);
    return data;
  },
  
  getCandidatesByVacancy: async (vacancyId: string) => {
    const { data } = await api.get<CandidateApplication[]>(`/Vacancies/${vacancyId}/candidates`);
    return data;
  },
  
  syncApplications: async (vacancyId: string) => {
    const { data } = await api.post<SyncApplicationsResponse>(`/Vacancies/${vacancyId}/sync-applications`);
    return data;
  },

  getCandidatesByVacancyPaged: async (
    vacancyId: string, 
    page: number, 
    pageSize: number,
    statuses?: number[],
    onlyAnalyzed?: boolean
  ) => {
    let url = `/Vacancies/${vacancyId}/candidates/paged?page=${page}&pageSize=${pageSize}`;
    
    if (statuses && statuses.length > 0) {
      // Формируем параметры в виде: &statuses=1&statuses=2
      statuses.forEach(s => {
        url += `&statuses=${s}`;
      });
    }
    
    if (onlyAnalyzed !== undefined) {
      url += `&onlyAnalyzed=${onlyAnalyzed}`;
    }

    const { data } = await api.get<PagedCandidatesResponse>(url);
    return data;
  }
};