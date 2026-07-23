import { create } from 'zustand';
import { api } from '../api/axios';
import type { Soft } from './useSoftStore';

export interface Category {
  id_category: number;
  name_category: string;
  subcategory_id?: number | null;
}

export interface DocumentItem {
  doc_id: number;
  doc_name: string;
  doc_file_path: string;
  doc_size?: string | null;
  doc_updated?: string | null;
}

export interface Product {
  product_id: number;
  product_name: string;
  product_article?: string | null;
  product_description?: string | null;
  product_attributes?: Record<string, unknown> | null;
  id_category: number;
  image_path?: string | null;
  gallery?: string[] | null;
  category?: Category | null;
  documents?: DocumentItem[];
  softwares?: Soft[];
}

interface CatalogState {
  categories: Category[];
  products: Product[];
  currentProduct: Product | null;
  activeCategoryId: number | null;
  isLoading: boolean;
  isExpanded: boolean;

  fetchInitialData: () => Promise<void>;
  setActiveCategory: (id: number) => Promise<void>;
  fetchProductById: (id: number) => Promise<void>;
  clearCurrentProduct: () => void;
  expandCatalog: () => void;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  categories: [],
  products: [],
  currentProduct: null,
  activeCategoryId: null,
  isLoading: false,
  isExpanded: false,

  expandCatalog: () => set({ isExpanded: true }),

  fetchInitialData: async () => {
    set({ isLoading: true, isExpanded: false });
    try {
      const categoriesRes = await api.get<Category[]>('/catalog/categories');
      const categories = categoriesRes.data;

      if (categories.length > 0) {
        const firstCategoryId = categories[0].id_category;
        const productsRes = await api.get<Product[]>(
          `/catalog/categories/${firstCategoryId}/products`
        );

        set({
          categories,
          products: productsRes.data,
          activeCategoryId: firstCategoryId,
          isLoading: false,
        });
      } else {
        set({ categories: [], products: [], isLoading: false });
      }
    } catch (error) {
      console.error('Ошибка при загрузке каталога:', error);
      set({ isLoading: false });
    }
  },

  setActiveCategory: async (id: number) => {
    set({ isLoading: true, activeCategoryId: id, isExpanded: false });
    try {
      const response = await api.get<Product[]>(
        `/catalog/categories/${id}/products`
      );
      set({ products: response.data, isLoading: false });
    } catch (error) {
      console.error(`Ошибка при загрузке товаров категории ${id}:`, error);
      set({ products: [], isLoading: false });
    }
  },

  fetchProductById: async (id: number) => {
    set({ isLoading: true, currentProduct: null });
    try {
      const response = await api.get<Product>(`/catalog/products/${id}`);
      set({ currentProduct: response.data, isLoading: false });
    } catch (error) {
      console.error(`Ошибка при загрузке товара ${id}:`, error);
      set({ currentProduct: null, isLoading: false });
    }
  },

  clearCurrentProduct: () => set({ currentProduct: null }),
}));
