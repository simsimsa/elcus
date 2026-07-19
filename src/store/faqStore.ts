import { create } from 'zustand';

export interface FaqCategory {
  faq_category_id: number;
  name_faq_category: string;
}

export interface Faq {
  faq_id: number;
  question: string;
  answer: string;
  faq_category_id: number;
}

interface FaqStore {
  categories: FaqCategory[];
  faqs: Faq[];
  activeCategoryId: number | null;
  setActiveCategory: (id: number) => void;
}

const mockCategories: FaqCategory[] = [
  { faq_category_id: 1, name_faq_category: 'support.categories.arinc' },
  { faq_category_id: 2, name_faq_category: 'support.categories.can' },
  { faq_category_id: 3, name_faq_category: 'support.categories.mil' },
  { faq_category_id: 4, name_faq_category: 'support.categories.software' },
  { faq_category_id: 5, name_faq_category: 'support.categories.other' },
  { faq_category_id: 6, name_faq_category: 'support.categories.general' },
];

const mockFaqs: Faq[] = [
  {
    faq_id: 1,
    faq_category_id: 1,
    question: 'Какие интерфейсы поддерживают адаптеры ARINC-429?',
    answer:
      'Наши адаптеры ARINC-429 поддерживают 2, 4 или 8 каналов передачи/приёма данных в соответствии со стандартом ARINC 429-1.\n\nПодробнее о моделях и их характеристиках вы можете узнать в разделе Продукция.',
  },
  {
    faq_id: 2,
    faq_category_id: 1,
    question: 'Какие операционные системы поддерживаются?',
    answer:
      'Мы поддерживаем Windows, Linux и QNX. Драйверы доступны в разделе Soft.',
  },
  {
    faq_id: 3,
    faq_category_id: 1,
    question: 'Как обновить прошивку адаптера?',
    answer: 'Инструкция по обновлению...',
  },
  {
    faq_id: 4,
    faq_category_id: 2,
    question: 'Вопрос по CAN адаптерам?',
    answer: 'Ответ по CAN...',
  },
];

export const useFaqStore = create<FaqStore>((set) => ({
  categories: mockCategories,
  faqs: mockFaqs,
  activeCategoryId: mockCategories[0]?.faq_category_id || null,
  setActiveCategory: (id) => set({ activeCategoryId: id }),
}));
