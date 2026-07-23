import { create } from 'zustand';
import { mockCategories, mockFaqs, type FaqStore } from './dataFAQ';

export const useFaqStore = create<FaqStore>((set) => ({
  categories: mockCategories,
  faqs: mockFaqs,
  activeCategory: mockCategories[0]?.id_faq_category ?? 1,
  setActiveCategory: (id) => set({ activeCategory: id }),
}));
