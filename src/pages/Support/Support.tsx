import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/ui/PageHeader/PageHeader';
import './Support.scss';
import SupportContacts from '../../components/SupportContacts/SupportContacts';
import FaqSection from '../../components/FaqSection/FaqSection';

const Support: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="support-page">
      <PageHeader
        title={t('support.title')}
        description={t('support.description')}
        bgImage="/images/circuit-bg.png"
      />

      <div className="support-content">
        <SupportContacts />
        <FaqSection />
      </div>
    </main>
  );
};

export default Support;
