import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import InfoCard from '../../components/ui/InfoCard/InfoCard';
import './Home.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-content">
          <h1>{t('home.hero.title')}</h1>
          <p>{t('home.hero.subtitle')}</p>
          <Button variant="primary" onClick={() => navigate('/about')}>
            {t('home.hero.btn')}
          </Button>
        </div>
      </section>

      <section className="home-cards">
        <InfoCard
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
          }
          title={t('home.cards.products.title')}
          description={t('home.cards.products.desc')}
          onClick={() => navigate('/products')}
        />
        <InfoCard
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          }
          title={t('home.cards.soft.title')}
          description={t('home.cards.soft.desc')}
          onClick={() => navigate('/soft')}
        />
        <InfoCard
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          }
          title={t('home.cards.support.title')}
          description={t('home.cards.support.desc')}
          onClick={() => navigate('/support')}
        />
        <InfoCard
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          }
          title={t('home.cards.contacts.title')}
          description={t('home.cards.contacts.desc')}
          onClick={() => navigate('/contacts')}
        />
      </section>
    </main>
  );
};

export default Home;
