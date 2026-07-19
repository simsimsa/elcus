import React from 'react';
import { useTranslation } from 'react-i18next';
import SoftRow from '../SoftRow/SoftRow';
import Button from '../ui/Button/Button';
import './SoftList.scss';
import type { OS, Soft } from '../../store/useSoftStore';

interface SoftListProps {
  items: Soft[];
  activeOs: OS | undefined;
  isLoading: boolean;
  isExpanded: boolean;
  onExpand: () => void;
}

const SoftList: React.FC<SoftListProps> = ({
  items,
  activeOs,
  isLoading,
  isExpanded,
  onExpand,
}) => {
  const { t } = useTranslation();

  if (isLoading && items.length === 0) {
    return (
      <div className="soft-message">{t('common.loading', 'Загрузка...')}</div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="soft-message">{t('soft.empty', 'Файлы не найдены')}</div>
    );
  }

  return (
    <div className="soft-list-container">
      <div className="soft-list">
        {items.map((item) => (
          <SoftRow key={item.soft_id} soft={item} />
        ))}
      </div>

      {!isExpanded && (
        <div className="soft-actions">
          <Button variant="outline" onClick={onExpand} disabled={isLoading}>
            {isLoading
              ? t('common.loading', 'Загрузка...')
              : `${t('soft.show_all', 'Все версии')} ${activeOs?.os_name || ''}`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SoftList;
