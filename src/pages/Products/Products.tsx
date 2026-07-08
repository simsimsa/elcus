import React from 'react';
import { useTranslation } from 'react-i18next';
import './Products.scss';

const Products: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="products-page">
      <h1 className="page-title">{t('pageTitles.products')}</h1>

      <div className="card contacts-grid">Тут про продукты</div>
    </main>
  );
};

export default Products;
