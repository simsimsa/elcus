import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCatalogStore } from '../../store/useCatalogStore';
import Button from '../../components/ui/Button/Button';
import './ProductDetails.scss';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const getProductById = useCatalogStore((state) => state.getProductById);

  const product = id ? getProductById(Number(id)) : null;

  if (!product)
    return (
      <div className="product-details-page">
        {t('common.loading', 'Загрузка...')}
      </div>
    );

  return (
    <main className="product-details-page">
      <Button variant="text" className="back-btn" onClick={() => navigate(-1)}>
        &larr; {t('common.back', 'Назад в каталог')}
      </Button>

      <div className="product-info-wrapper">
        <div className="product-header">
          <span className="product-article">
            Арт: {product.product_article}
          </span>
          <h1 className="product-title">{product.product_name}</h1>
          <p className="product-description">{product.product_description}</p>
        </div>

        <div className="product-attributes">
          <h3>{t('products.attributes', 'Характеристики')}</h3>
          <table className="attributes-table">
            <tbody>
              {Object.entries(product.product_attributes).map(
                ([key, value]) => (
                  <tr key={key}>
                    <td className="attr-key">{key}</td>
                    <td className="attr-value">{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
