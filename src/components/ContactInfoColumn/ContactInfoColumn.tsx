import React from 'react';
import { useTranslation } from 'react-i18next';
import OfficeBlock from '../OfficeBlock/OfficeBlock';
import InfoRow from '../InfoRow/InfoRow';
import './ContactInfoColumn.scss';
import { MailIcon } from '../icons/icons';
import Button from '../ui/Button/Button';

const ContactInfoColumn: React.FC = () => {
  const { t } = useTranslation();

  const handleEmailClick = () => {
    window.location.href = `mailto:${t('contacts.email.value')}`;
  };

  return (
    <div className="contacts-info">
      <OfficeBlock
        title={t('contacts.spb.title')}
        address={t('contacts.spb.address')}
        phone={t('contacts.spb.phone')}
        phoneLink="+78126101884"
        hours={t('contacts.spb.hours')}
      />

      <hr className="divider" />

      <OfficeBlock
        title={t('contacts.moscow.title')}
        address={t('contacts.moscow.address')}
        phone={t('contacts.moscow.phone')}
        phoneLink="+74956687047"
      />

      <hr className="divider" />

      <div className="email-block">
        <InfoRow icon={MailIcon}>
          <strong>{t('contacts.email.label')}: </strong>
          <a href={`mailto:${t('contacts.email.value')}`}>
            {t('contacts.email.value')}
          </a>
        </InfoRow>

        <Button
          variant="primary"
          className="write-us-btn"
          onClick={handleEmailClick}
        >
          {t('contacts.write_us')}
        </Button>
      </div>
    </div>
  );
};

export default ContactInfoColumn;
