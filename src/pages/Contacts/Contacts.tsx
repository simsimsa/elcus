import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contacts.scss';

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="contacts-page">
      <h1 className="page-title">{t('pageTitles.contacts')}</h1>

      <div className="card contacts-grid">Тут про контакты</div>
    </main>
  );
};

export default Contacts;
