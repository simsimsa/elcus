import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCatalogStore } from '../../store/useCatalogStore';
import CatalogSidebar from '../../components/CatalogSidebar/CatalogSidebar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import './Products.scss';

const Products: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    categories,
    products,
    activeCategoryId,
    isExpanded,
    isLoading,
    fetchInitialData,
    setActiveCategory,
    expandCatalog,
  } = useCatalogStore();

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const handleProductClick = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <main className="products-page">
      <h1 className="page-title">{t('products.title', 'Каталог продукции')}</h1>

      <div className="catalog-layout">
        <CatalogSidebar
          categories={categories}
          activeCategoryId={activeCategoryId}
          isLoading={isLoading}
          onSelectCategory={setActiveCategory}
        />
        <ProductGrid
          products={products}
          isLoading={isLoading}
          isExpanded={isExpanded}
          onExpand={expandCatalog}
          onProductClick={handleProductClick}
        />
      </div>
    </main>
  );
};

export default Products;
