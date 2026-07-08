import React from 'react';
import { useTranslation } from 'react-i18next';
import './Articles.scss';

const Articles: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="articles-page">
      <h1 className="page-title">{t('pageTitles.articles')}</h1>

      <div className="card contacts-grid">Тут про Ссылки</div>
    </main>
  );
};

export default Articles;
