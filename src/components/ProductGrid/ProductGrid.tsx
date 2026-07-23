import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from '../ui/ProductCard/ProductCard';
import Button from '../ui/Button/Button';
import './ProductGrid.scss';
import type { Product } from '../../store/useCatalogStore';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  isExpanded: boolean;
  onExpand: () => void;
  onProductClick: (id: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  isLoading,
  isExpanded,
  onExpand,
  onProductClick,
}) => {
  const { t } = useTranslation();

  const LIMIT = 6;
  const displayProducts = isExpanded ? products : products.slice(0, LIMIT);

  return (
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
            {displayProducts.length > 0 ? (
              displayProducts.map((product) => (
                <ProductCard
                  key={product.product_id}
                  imagePath={product.image_path}
                  article={product.product_article}
                  name={product.product_name}
                  description={product.product_description}
                  buttonText={t('products.details', 'Подробнее')}
                  onClick={() => onProductClick(product.product_id)}
                />
              ))
            ) : (
              <div className="empty-state">
                {t('products.empty', 'Товары не найдены')}
              </div>
            )}
          </div>

          {!isExpanded && products.length > LIMIT && (
            <div className="catalog-actions">
              <Button variant="primary" onClick={onExpand} disabled={isLoading}>
                {t('products.show_all', 'Показать все')}
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ProductGrid;
