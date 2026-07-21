import { create } from 'zustand';

export interface NewsItemType {
  id_news: number;
  news_title: string;
  news_content: string;
  news_published: string;
  images?: string[];
}

interface NewsStore {
  items: NewsItemType[];
}

const mockNewsItems: NewsItemType[] = [
  {
    id_news: 1,
    news_published: '2023-12-05T10:00:00Z',
    news_title: 'Участие в международной выставке электроники',
    news_content:
      'Наша компания успешно представила новые разработки на ежегодной выставке. Были заключены важные партнерские соглашения и намечены планы на следующий год.',
    images: ['/images/news/exhibition1.jpg', '/images/news/exhibition2.jpg'],
  },
  {
    id_news: 2,
    news_published: '2023-08-14T14:30:00Z',
    news_title: 'Обновление линейки продукции',
    news_content:
      'Мы расширили ассортимент выпускаемого оборудования. Новые модели отличаются повышенной энергоэффективностью и уменьшенными габаритами.',
    images: [],
  },
  {
    id_news: 3,
    news_published: '2023-02-21T09:15:00Z',
    news_title: 'Открытие нового производственного цеха',
    news_content:
      'Завершен монтаж оборудования в новом цехе. Это позволит увеличить производственные мощности на 30% и сократить сроки выполнения заказов.',
    images: [
      '/images/news/factory1.jpg',
      '/images/news/factory2.jpg',
      '/images/news/factory3.jpg',
    ],
  },
];

export const useNewsStore = create<NewsStore>(() => ({
  items: mockNewsItems,
}));
