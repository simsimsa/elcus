import { create } from 'zustand';
import { api } from '../api/axios';

export interface MuseumItem {
  museum_id: number;
  name_item: string;
  image_path?: string | null;
  gallery?: string[] | null;
}

interface MuseumState {
  items: MuseumItem[];
  isExpanded: boolean;
  isLoading: boolean;

  fetchMuseumItems: () => Promise<void>;
  expandAll: () => void;
}

export const useMuseumStore = create<MuseumState>((set) => ({
  items: [],
  isExpanded: false,
  isLoading: false,

  fetchMuseumItems: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get<MuseumItem[]>('/info/museum');
      set({ items: response.data, isLoading: false });
    } catch (error) {
      console.error('Ошибка при загрузке экспонатов музея:', error);
      set({ items: [], isLoading: false });
    }
  },

  expandAll: () => set({ isExpanded: true }),
}));
