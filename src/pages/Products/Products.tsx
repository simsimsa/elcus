import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCatalogStore } from '../../store/useCatalogStore';
import ProductCard from '../../components/ui/ProductCard/ProductCard';
import Button from '../../components/ui/Button/Button';
import './Products.scss';

const Products: React.FC = () => {
  const { t } = useTranslation();
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
    // В будущем здесь будет открытие модалки с product_attributes
    console.log(`Открытие характеристик продукта с ID: ${id}`);
  };

  return (
    <main className="products-page">
      <h1 className="page-title">{t('products.title', 'Каталог продукции')}</h1>

      <div className="catalog-layout">
        <aside className="catalog-sidebar">
          {categories.map((category) => (
            <button
              key={category.id_category}
              className={`category-btn ${activeCategoryId === category.id_category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id_category)}
              disabled={isLoading}
            >
              <span className="category-icon">📁</span> {category.name_category}
            </button>
          ))}
        </aside>

        <section className="catalog-content">
          <h3 className="content-subtitle">
            {isExpanded
              ? t('products.all_products', 'Все продукты')
              : t('products.popular', 'Популярные продукты')}
          </h3>

          {isLoading && products.length === 0 ? (
            <div className="loading-state">
              {t('common.loading', 'Загрузка...')}
            </div>
          ) : (
            <>
              <div className="products-grid">
                {products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard
                      key={product.product_id}
                      article={product.product_article}
                      name={product.product_name}
                      description={product.product_description}
                      buttonText={t('products.details', 'Подробнее')}
                      onClick={() => handleProductClick(product.product_id)}
                    />
                  ))
                ) : (
                  <div className="empty-state">Товары не найдены</div>
                )}
              </div>

              {!isExpanded && products.length > 0 && (
                <div className="catalog-actions">
                  <Button
                    variant="primary"
                    onClick={expandCatalog}
                    disabled={isLoading}
                  >
                    {isLoading
                      ? t('common.loading', 'Загрузка...')
                      : t('products.show_all', 'Показать все')}
                  </Button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default Products;
