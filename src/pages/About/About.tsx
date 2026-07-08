import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/Button/Button';
import './About.scss';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="about-page">
      <h1 className="page-title">{t('pageTitles.about')}</h1>

      <div className="card about-card">
        <h3>Компания ЭЛКУС</h3>
        <p>
          Российский разработчик и производитель электронных устройств с 1991
          года.
        </p>
        <Button variant="outline">Подробнее</Button>
      </div>
    </main>
  );
};

export default About;
