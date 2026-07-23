import { create } from 'zustand';
import { api } from '../api/axios';

export interface NewsItemType {
  id_news: number;
  news_title: string;
  news_content: string;
  news_published?: string | null;
  image_path?: string | null;
  gallery?: string[] | null;
}

interface NewsStore {
  items: NewsItemType[];
  isLoading: boolean;
  fetchNews: () => Promise<void>;
}

export const useNewsStore = create<NewsStore>((set) => ({
  items: [],
  isLoading: false,

  fetchNews: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get<NewsItemType[]>('/info/news');
      set({ items: response.data, isLoading: false });
    } catch (error) {
      console.error('Ошибка при загрузке новостей:', error);
      set({ items: [], isLoading: false });
    }
  },
}));
