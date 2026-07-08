import React from 'react';
import { useTranslation } from 'react-i18next';
import './Soft.scss';

const Soft: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="soft-page">
      <h1 className="page-title">{t('pageTitles.soft')}</h1>

      <div className="card contacts-grid">Тут про SOFT</div>
    </main>
  );
};

export default Soft;
