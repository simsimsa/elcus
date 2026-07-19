import React from 'react';
import './CatalogSidebar.scss';
import type { Category } from '../../store/useCatalogStore';

interface CatalogSidebarProps {
  categories: Category[];
  activeCategoryId: number;
  isLoading: boolean;
  onSelectCategory: (id: number) => void;
}

const CatalogSidebar: React.FC<CatalogSidebarProps> = ({
  categories,
  activeCategoryId,
  isLoading,
  onSelectCategory,
}) => {
  return (
    <aside className="catalog-sidebar">
      {categories.map((category) => (
        <button
          key={category.id_category}
          className={`category-btn ${activeCategoryId === category.id_category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category.id_category)}
          disabled={isLoading}
        >
          {category.name_category}
        </button>
      ))}
    </aside>
  );
};

export default CatalogSidebar;
