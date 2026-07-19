import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSoftStore } from '../../store/useSoftStore';
import SoftTabs from '../../components/SoftTabs/SoftTabs';
import SoftList from '../../components/SoftList/SoftList';
import './Soft.scss';

const Soft: React.FC = () => {
  const { t } = useTranslation();
  const {
    osList,
    softItems,
    activeOsId,
    isExpanded,
    isLoading,
    fetchInitialData,
    setActiveOs,
    expandSoft,
  } = useSoftStore();

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const activeOs = osList.find((os) => os.OS_id === activeOsId);

  return (
    <main className="soft-page">
      <h1 className="page-title">
        {t('soft.title', 'Драйверы и программное обеспечение')}
      </h1>

      <div className="soft-content">
        <SoftTabs
          osList={osList}
          activeOsId={activeOsId}
          onTabChange={setActiveOs}
          isLoading={isLoading}
        />

        <SoftList
          items={softItems}
          activeOs={activeOs}
          isLoading={isLoading}
          isExpanded={isExpanded}
          onExpand={expandSoft}
        />
      </div>
    </main>
  );
};

export default Soft;
