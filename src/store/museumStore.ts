import { create } from 'zustand';

export interface MuseumItem {
  museum_id: number;
  name_item: string;
  description: string;
}

interface MuseumStore {
  items: MuseumItem[];
  isExpanded: boolean;
  expandAll: () => void;
}

const mockMuseumItems: MuseumItem[] = [
  {
    museum_id: 1,
    name_item: 'Граммофон «Молот»',
    description: '/images/museum-hero.png',
  },
  {
    museum_id: 2,
    name_item: 'Проигрыватель «Юность-301»',
    description: '/images/museum-hero.png',
  },
  {
    museum_id: 3,
    name_item: 'Проигрыватель «Аккорд-201»',
    description: '/images/museum-hero.png',
  },
  {
    museum_id: 4,
    name_item: 'Катушечный магнитофон «Весна-212»',
    description: '/images/museum-hero.png',
  },
  {
    museum_id: 5,
    name_item: 'Телевизор «Рубин-714»',
    description: '/images/museum-hero.png',
  },
  {
    museum_id: 6,
    name_item: 'Громкоговоритель «Рекорд»',
    description: '/images/museum-hero.png',
  },
];

export const useMuseumStore = create<MuseumStore>((set) => ({
  items: mockMuseumItems,
  isExpanded: false,
  expandAll: () => set({ isExpanded: true }),
}));
