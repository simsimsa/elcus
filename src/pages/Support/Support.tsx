import React from 'react';
import { useTranslation } from 'react-i18next';
import './Support.scss';

const Support: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="support-page">
      <h1 className="page-title">{t('pageTitles.support')}</h1>

      <div className="card contacts-grid">Тут поддержка</div>
    </main>
  );
};

export default Support;
