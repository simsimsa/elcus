import { create } from 'zustand';
import { api } from '../api/axios';

export interface CharityItemType {
  charity_id: number;
  date?: string | null;
  description: string;
  image_path?: string | null;
  gallery?: string[] | null;
  title?: string;
}

interface CharityStore {
  items: CharityItemType[];
  isLoading: boolean;
  fetchCharity: () => Promise<void>;
}

export const useCharityStore = create<CharityStore>((set) => ({
  items: [],
  isLoading: false,

  fetchCharity: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get<CharityItemType[]>('/info/charity');
      set({ items: response.data, isLoading: false });
    } catch (error) {
      console.error('Ошибка при загрузке благотворительности:', error);
      set({ items: [], isLoading: false });
    }
  },
}));
