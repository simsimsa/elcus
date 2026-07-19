import React from 'react';
import { useTranslation } from 'react-i18next';
import { MailIcon, PhoneIcon } from '../icons/icons';
import Button from '../ui/Button/Button';

const SupportContacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="support-contacts-card">
      <div className="support-contacts-info">
        <div className="support-contacts-text">
          <h3>{t('support.contacts.title')}</h3>
          <p>{t('support.contacts.desc')}</p>
        </div>
      </div>

      <div className="support-contacts-details">
        <div className="contact-item">
          {PhoneIcon}
          <div className="phones">
            <a href="tel:+74959787210">(495) 978-72-10</a>
            <a href="tel:+74952324852">(495) 232-48-52</a>
          </div>
        </div>

        <div className="contact-item">
          {MailIcon}
          <a href="mailto:info@elcus.ru">info@elcus.ru</a>
        </div>

        <Button variant="primary">{t('support.contacts.ask_btn')}</Button>
      </div>
    </div>
  );
};

export default SupportContacts;
