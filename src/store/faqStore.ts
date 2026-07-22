import { create } from 'zustand';

export interface FaqCategory {
  id_faq_category: number;
  name_faq_category: string;
}

export interface Faq {
  faq_id: number;
  question: string;
  answer: string;
  id_faq_category: number;
}

interface FaqStore {
  categories: FaqCategory[];
  faqs: Faq[];
  activeCategoryId: number | null;
  setActiveCategory: (id: number) => void;
}

const mockCategories: FaqCategory[] = [
  { id_faq_category: 1, name_faq_category: 'support.categories.arinc' },
  { id_faq_category: 2, name_faq_category: 'support.categories.can' },
  { id_faq_category: 3, name_faq_category: 'support.categories.mil' },
  { id_faq_category: 4, name_faq_category: 'support.categories.software' },
  { id_faq_category: 5, name_faq_category: 'support.categories.other' },
  { id_faq_category: 6, name_faq_category: 'support.categories.general' },
];

const mockFaqs: Faq[] = [
  {
    faq_id: 1,
    id_faq_category: 1,
    question: 'Какие интерфейсы поддерживают адаптеры ARINC-429?',
    answer:
      'Наши адаптеры ARINC-429 поддерживают 2, 4 или 8 каналов передачи/приёма данных в соответствии со стандартом ARINC 429-1.\n\nПодробнее о моделях и их характеристиках вы можете узнать в разделе Продукция.',
  },
  {
    faq_id: 2,
    id_faq_category: 1,
    question: 'Какие операционные системы поддерживаются?',
    answer:
      'Мы поддерживаем Windows, Linux и QNX. Драйверы доступны в разделе Soft.',
  },
  {
    faq_id: 3,
    id_faq_category: 1,
    question: 'Как обновить прошивку адаптера?',
    answer: 'Инструкция по обновлению...',
  },
  {
    faq_id: 4,
    id_faq_category: 2,
    question: 'Вопрос по CAN адаптерам?',
    answer: 'Ответ по CAN...',
  },
];

export const useFaqStore = create<FaqStore>((set) => ({
  categories: mockCategories,
  faqs: mockFaqs,
  activeCategoryId: mockCategories[0]?.id_faq_category || null,
  setActiveCategory: (id) => set({ activeCategoryId: id }),
}));
