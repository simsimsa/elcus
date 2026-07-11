import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contacts.scss';
import ContactInfoColumn from '../../components/ContactInfoColumn/ContactInfoColumn';

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="contacts-page">
      <div className="contacts-wrapper">
        <h1 className="page-title">{t('contacts.title')}</h1>

        <div className="contacts-content">
          <ContactInfoColumn />

          <div className="contacts-map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=Санкт-Петербург,+ул.+Благодатная,+д.10+строение+1"
              width="100%"
              height="100%"
              allowFullScreen={true}
              title="ELCUS Office Map"
              className="map-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
