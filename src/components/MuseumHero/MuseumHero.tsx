import React from 'react';
import { useTranslation } from 'react-i18next';
import './MuseumHero.scss';

const MuseumHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="museum-hero">
      <div className="museum-hero-content">
        <h1 className="museum-title">{t('museum.title')}</h1>
        <div className="museum-description">
          <p>{t('museum.description_p1')}</p>
          <p>{t('museum.description_p2')}</p>
          <p>{t('museum.description_p3')}</p>
        </div>
      </div>
      <div className="museum-hero-image">
        <img src="/images/museum-hero.png" alt={t('museum.title')} />
      </div>
    </section>
  );
};

export default MuseumHero;
