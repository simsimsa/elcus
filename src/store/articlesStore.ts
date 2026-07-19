import { create } from 'zustand';

export interface News {
  id_news: number;
  news_title: string;
  news_content: string;
  news_published: string;
}

export interface Source {
  id_source: number;
  sorce_title: string;
  sorce_content: string;
  url_external: string;
  sorce_published: string;
}

interface ArticlesStore {
  news: News[];
  sources: Source[];
  activeTab: 'news' | 'sources';
  isExpanded: boolean;
  setActiveTab: (tab: 'news' | 'sources') => void;
  expandAll: () => void;
}

const mockNews: News[] = [
  {
    id_news: 1,
    news_title: 'Новые возможности плат ЭЛКУС',
    news_content: 'Обзор обновлений и улучшений',
    news_published: '2023-10-01T10:00:00Z',
  },
  {
    id_news: 2,
    news_title: 'Применение устройств ЭЛКУС',
    news_content: 'Практические примеры и кейсы',
    news_published: '2023-09-15T10:00:00Z',
  },
  {
    id_news: 3,
    news_title: 'Технические статьи',
    news_content: 'Полезные материалы и инструкции',
    news_published: '2023-09-01T10:00:00Z',
  },
];

const mockSources: Source[] = [
  {
    id_source: 1,
    sorce_title: 'ГОСТ Р 52070-2003',
    sorce_content: 'Стандарт интерфейса MIL-STD-1553B',
    url_external: 'https://example.com/gost',
    sorce_published: '2023-08-01T10:00:00Z',
  },
  {
    id_source: 2,
    sorce_title: 'Спецификация ARINC 429',
    sorce_content: 'Официальная документация',
    url_external: 'https://example.com/arinc',
    sorce_published: '2023-07-15T10:00:00Z',
  },
];

export const useArticlesStore = create<ArticlesStore>((set) => ({
  news: mockNews,
  sources: mockSources,
  activeTab: 'news',
  isExpanded: false,
  setActiveTab: (tab) => set({ activeTab: tab, isExpanded: false }),
  expandAll: () => set({ isExpanded: true }),
}));
