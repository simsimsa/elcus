import { create } from 'zustand';
import { api } from '../api/axios';

export interface OS {
  id_os: number;
  os_name: string;
}

export interface Soft {
  soft_id: number;
  soft_name: string;
  version: string;
  soft_size: string | null;
  soft_file_path: string;
  soft_updated: string | null;
  description: string | null;
  os_id: number | null;
  product_id: number | null;
  os: OS[];
}

interface SoftState {
  osList: OS[];
  allSoft: Soft[];
  softItems: Soft[];
  activeOsId: number | null;
  isExpanded: boolean;
  isLoading: boolean;
  error: string | null;
  fetchInitialData: () => Promise<void>;
  setActiveOs: (id: number) => void;
  expandSoft: () => void;
}

export const useSoftStore = create<SoftState>((set, get) => ({
  osList: [],
  allSoft: [],
  softItems: [],
  activeOsId: null,
  isExpanded: false,
  isLoading: false,
  error: null,

  fetchInitialData: async () => {
    set({ isLoading: true, error: null });
    try {
      // Дергаем твой реальный эндпоинт из FastAPI
      const response = await api.get<Soft[]>('/catalog/softwares');
      const allSoft = response.data;

      // Т.к. на бэкенде нет отдельного списка ОС, вытаскиваем уникальные ОС из софта
      const osMap = new Map<number, OS>();
      allSoft.forEach((soft) => {
        if (soft.os && Array.isArray(soft.os)) {
          soft.os.forEach((osItem) => {
            if (!osMap.has(osItem.id_os)) {
              osMap.set(osItem.id_os, osItem);
            }
          });
        }
      });

      // Превращаем Map в массив и сортируем по id_os
      const osList = Array.from(osMap.values()).sort(
        (a, b) => a.id_os - b.id_os
      );

      if (osList.length > 0) {
        const firstOsId = osList[0].id_os;

        // Берем софт только для первой ОС
        const softForFirstOs = allSoft.filter(
          (s) => s.os && s.os.some((osItem) => osItem.id_os === firstOsId)
        );

        set({
          osList,
          allSoft,
          activeOsId: firstOsId,
          softItems: softForFirstOs.slice(0, 2),
          isExpanded: softForFirstOs.length <= 2,
          isLoading: false,
        });
      } else {
        set({ osList: [], allSoft, isLoading: false });
      }
    } catch (error: unknown) {
      console.error('Ошибка при загрузке софта:', error);

      let errorMessage = 'Ошибка загрузки данных';
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      set({
        isLoading: false,
        error: errorMessage,
        osList: [],
        softItems: [],
      });
    }
  },

  setActiveOs: (id: number) => {
    const { allSoft } = get();

    // Ищем софт, у которого в массиве os есть переданный id
    const filtered = allSoft.filter(
      (s) => s.os && s.os.some((osItem) => osItem.id_os === id)
    );

    set({
      activeOsId: id,
      softItems: filtered.slice(0, 2),
      isExpanded: filtered.length <= 2,
    });
  },

  expandSoft: () => {
    const { allSoft, activeOsId } = get();
    if (activeOsId === null) return;

    const allOsSoft = allSoft.filter(
      (s) => s.os && s.os.some((osItem) => osItem.id_os === activeOsId)
    );

    set({ softItems: allOsSoft, isExpanded: true });
  },
}));
