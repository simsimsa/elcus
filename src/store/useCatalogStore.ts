import { create } from 'zustand';
import type { Soft } from './useSoftStore';

export interface Category {
  id_category: number;
  name_category: string;
  subcategory_id: number | null;
}

export interface DocumentItem {
  doc_id: number;
  doc_name: string;
  doc_file_path: string;
  doc_size?: string;
  doc_updated?: string;
}

export interface Product {
  product_id: number;
  product_name: string;
  product_article?: string;
  product_description?: string;
  product_attributes?: Record<string, string>;
  id_category: number;
  documents?: DocumentItem[];
  softwares?: Soft[];
}

const MOCK_CATEGORIES: Category[] = [
  { id_category: 1, name_category: 'Платы', subcategory_id: null },
  { id_category: 2, name_category: 'Приборы и ПО', subcategory_id: null },
  { id_category: 3, name_category: 'Индикаторы', subcategory_id: null },
  { id_category: 4, name_category: 'Комплектующие', subcategory_id: null },
];

const MOCK_PRODUCTS: Product[] = [
  {
    product_id: 1,
    id_category: 1,
    product_name: 'PCIe-9118',
    product_article: 'PL-001',
    product_description: 'Плата цифрового ввода-вывода',
    product_attributes: { Шина: 'PCIe', Каналы: '16' },
  },
  {
    product_id: 2,
    id_category: 1,
    product_name: 'USB-3100',
    product_article: 'PL-002',
    product_description: 'Многофункциональная плата',
    product_attributes: { Интерфейс: 'USB', АЦП: '12 бит' },
  },
  {
    product_id: 3,
    id_category: 1,
    product_name: 'PCIe-1710',
    product_article: 'PL-003',
    product_description: 'Многофункциональная плата сбора данных',
    product_attributes: { Шина: 'PCIe', Частота: '100 кГц' },
  },
  {
    product_id: 4,
    id_category: 1,
    product_name: 'VME-64x',
    product_article: 'PL-004',
    product_description: 'Процессорный модуль VME',
    product_attributes: { 'Форм-фактор': '6U', ОЗУ: '4 ГБ' },
  },
  {
    product_id: 5,
    id_category: 3,
    product_name: 'Индикатор ИН-14',
    product_article: 'IND-01',
    product_description: 'Светодиодный индикатор',
    product_attributes: { Цвет: 'Зеленый', Напряжение: '5В' },
  },
];

interface CatalogState {
  categories: Category[];
  products: Product[];
  activeCategoryId: number;
  isExpanded: boolean;
  isLoading: boolean;
  getProductById: (id: number) => Product | undefined;
  fetchInitialData: () => Promise<void>;
  setActiveCategory: (id: number) => Promise<void>;
  expandCatalog: () => Promise<void>;
}

export const useCatalogStore = create<CatalogState>((set, get) => ({
  categories: [],
  products: [],
  activeCategoryId: 1,
  isExpanded: false,
  isLoading: false,

  getProductById: (id: number) => {
    return (
      get().products.find((p) => p.product_id === id) ||
      MOCK_PRODUCTS.find((p) => p.product_id === id)
    );
  },
  fetchInitialData: async () => {
    set({ isLoading: true });
    setTimeout(() => {
      const initialProducts = MOCK_PRODUCTS.filter(
        (p) => p.id_category === 1
      ).slice(0, 3);
      set({
        categories: MOCK_CATEGORIES,
        products: initialProducts,
        activeCategoryId: 1,
        isExpanded: false,
        isLoading: false,
      });
    }, 500);
  },

  setActiveCategory: async (id: number) => {
    set({ isLoading: true, activeCategoryId: id, isExpanded: false });
    setTimeout(() => {
      const filtered = MOCK_PRODUCTS.filter((p) => p.id_category === id).slice(
        0,
        3
      );
      set({ products: filtered, isLoading: false });
    }, 400);
  },

  expandCatalog: async () => {
    const { activeCategoryId } = get();
    set({ isLoading: true });
    setTimeout(() => {
      const allCategoryProducts = MOCK_PRODUCTS.filter(
        (p) => p.id_category === activeCategoryId
      );
      set({
        products: allCategoryProducts,
        isExpanded: true,
        isLoading: false,
      });
    }, 600);
  },
}));
