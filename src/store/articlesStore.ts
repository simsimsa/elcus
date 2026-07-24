import { create } from 'zustand';
import { api } from '../api/axios';

export interface Article {
  id_source: number;
  source_title: string;
  source_content: string | null;
  url_external: string | null;
  id_category: number;
  category: {
    name: string;
    id_category: number;
  };
  gallery: string[] | null;
}

export interface MockSource {
  id_source: number;
  sorce_title: string;
  sorce_content: string;
  url_external: string;
  sorce_published: string;
}

interface ArticlesStore {
  articles: Article[];
  sources: MockSource[];
  activeTab: 'articles' | 'sources';
  isExpanded: boolean;
  isLoading: boolean;
  setActiveTab: (tab: 'articles' | 'sources') => void;
  expandAll: () => void;
  fetchArticles: () => Promise<void>;
}

const mockSources: MockSource[] = [
  {
    id_source: 1,
    sorce_title: 'CAN in Automation (CiA)',
    sorce_content:
      'Международная ассоциация производителей и потребителей продуктов на основе протокола CAN. На этом сайте есть всё о CAN.',
    url_external: 'http://www.can-cia.de',
    sorce_published: '2023-01-01T10:00:00Z',
  },
  {
    id_source: 2,
    sorce_title: 'Kvaser',
    sorce_content:
      'Сайт шведской фирмы Kvaser - разработчика протокола CAN Kingdom (протокола верхнего уровня, основанного на протоколе CAN). На сайте представлено много различной документации, описаний.',
    url_external: 'http://www.kvaser.se',
    sorce_published: '2023-01-02T10:00:00Z',
  },
  {
    id_source: 3,
    sorce_title: 'ODVA',
    sorce_content:
      'Международная ассоциация, поддерживающая развитие протокола DeviceNet (протокола верхнего уровня, основанного на протоколе CAN).',
    url_external: 'http://www.odva.org',
    sorce_published: '2023-01-03T10:00:00Z',
  },
  {
    id_source: 4,
    sorce_title: 'GAW.ru',
    sorce_content:
      'Один из самых известных русскоязычных ресурсов по микроэлектронике. Содержит множество самой различной информации по интерфейсам, эл. компонентам и многое другое.',
    url_external: 'http://www.gaw.ru',
    sorce_published: '2023-01-04T10:00:00Z',
  },
  {
    id_source: 5,
    sorce_title: 'Datamicro',
    sorce_content:
      'Российская фирма Datamicro, активно продвигающая протокол CANBus на российский рынок. На сайте этой фирмы очень много полезной информации, статей по протоколу CAN. Имеется большая подборка ссылок.',
    url_external: 'http://www.datamicro.ru',
    sorce_published: '2023-01-05T10:00:00Z',
  },
  {
    id_source: 6,
    sorce_title: 'Electronix.ru',
    sorce_content:
      'Один из крупнейших русскоязычных форумов по электронике и всему что с ней связано (разработка, применение и т.д.)',
    url_external: 'https://electronix.ru/forum/',
    sorce_published: '2023-01-06T10:00:00Z',
  },
  {
    id_source: 7,
    sorce_title: 'Книга «Архитектура мультиплексных каналов» (Хвощ С.Т.)',
    sorce_content: 'Книга - "Архитектура мультиплексных каналов", Хвощ С.Т.',
    url_external: 'http://1553b.ru/?p=3',
    sorce_published: '2023-01-07T10:00:00Z',
  },
  {
    id_source: 8,
    sorce_title: 'Спецификация PC/104',
    sorce_content: 'Спецификация PC/104 (pdf-файл).',
    url_external: 'http://www.eurotech.it/pdf/pc104-23.pdf',
    sorce_published: '2023-01-08T10:00:00Z',
  },
  {
    id_source: 9,
    sorce_title: 'Спецификация PC/104-Plus',
    sorce_content: 'Спецификация PC/104-Plus',
    url_external: 'https://www.controlled.com/lander',
    sorce_published: '2023-01-09T10:00:00Z',
  },
  {
    id_source: 10,
    sorce_title: 'Конструктивы Евромеханика 3U, 6U',
    sorce_content: 'Стандартные типоразмеры конструктивов Евромеханика 3U, 6U.',
    url_external: 'http://www.cta.ru/pdf/1997-1/note1_1997_1.pdf',
    sorce_published: '2023-01-10T10:00:00Z',
  },
  {
    id_source: 11,
    sorce_title: 'Конструктивы MicroPC, PC/104',
    sorce_content: 'Стандартные типоразмеры конструктивов MicroPC, PC/104.',
    url_external: 'http://www.cta.ru/pdf/1996-1/hardware2_1996_1.pdf',
    sorce_published: '2023-01-11T10:00:00Z',
  },
];

export const useArticlesStore = create<ArticlesStore>((set) => ({
  articles: [],
  sources: mockSources,
  activeTab: 'articles',
  isExpanded: false,
  isLoading: false,

  setActiveTab: (tab) => set({ activeTab: tab, isExpanded: false }),
  expandAll: () => set({ isExpanded: true }),

  fetchArticles: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get<Article[]>('/info/sources');
      set({ articles: response.data, isLoading: false });
    } catch (error) {
      console.log(error);
      set({ isLoading: false, articles: [] });
    }
  },
}));
