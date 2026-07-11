import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import InfoCard from '../../components/ui/InfoCard/InfoCard';
import DocumentsSection from '../../components/DocumentsSection/DocumentsSection';
import { soutDocuments } from '../../data/documents';
import './About.scss';

const About: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="page-title">{t('pageTitles.about')}</h1>
          <p className="hero-description">{t('about.description')}</p>
          <Button
            variant="primary"
            onClick={() => setIsHistoryOpen(!isHistoryOpen)}
          >
            {isHistoryOpen ? t('about.btn_hide') : t('about.details_btn')}
          </Button>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="/images/elcus.png"
            alt="Здание компании"
            className="hero-image"
          />
        </div>
      </section>

      {isHistoryOpen && (
        <section className="about-history-container slide-down">
          <div className="history-content">
            <h2>{t('about.history.title')}</h2>

            <div className="text-blocks">
              <p>{t('about.history.p1')}</p>
              <p>{t('about.history.p2')}</p>
              <p>{t('about.history.p3')}</p>

              <div className="services-list">
                <h3>{t('about.history.services.title')}</h3>
                <ul>
                  <li>{t('about.history.services.1')}</li>
                  <li>{t('about.history.services.2')}</li>
                  <li>{t('about.history.services.3')}</li>
                  <li>{t('about.history.services.4')}</li>
                </ul>
              </div>

              <p>{t('about.history.p4')}</p>
              <p>{t('about.history.p5')}</p>
            </div>
          </div>

          <hr className="section-divider" />

          <DocumentsSection documents={soutDocuments} />
        </section>
      )}

      <section className="about-cards-grid">
        <InfoCard
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
              <polyline points="17 2 12 7 7 2"></polyline>
            </svg>
          }
          title={t('about.cards.museum.title')}
          description={t('about.cards.museum.desc')}
          buttonText={t('about.cards.museum.btn')}
          onClick={() => navigate('/museum')}
        />
        <InfoCard
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          }
          title={t('about.cards.charity.title')}
          description={t('about.cards.charity.desc')}
          buttonText={t('about.cards.charity.btn')}
          onClick={() => navigate('/charity')}
        />
        <InfoCard
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          }
          title={t('about.cards.news.title')}
          description={t('about.cards.news.desc')}
          buttonText={t('about.cards.news.btn')}
          onClick={() => navigate('/news')}
        />
      </section>
    </main>
  );
};

export default About;
