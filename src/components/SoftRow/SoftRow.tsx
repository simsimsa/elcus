import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button/Button';
import './SoftRow.scss';
import type { Soft } from '../../store/useSoftStore';
import { DownloadIcon } from '../icons/icons';

interface SoftRowProps {
  soft: Soft;
}

const SoftRow: React.FC<SoftRowProps> = ({ soft }) => {
  const { t } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = soft.soft_file_path;
    link.download = soft.soft_name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(`Скачивание началось: ${soft.soft_file_path}`);
  };

  return (
    <div className="soft-row">
      <div className="soft-info">
        <div className="os-icon">{DownloadIcon}</div>
        <div className="soft-text">
          <h4 className="soft-title">{soft.soft_name}</h4>
          <p className="soft-desc">{soft.description}</p>
        </div>
      </div>

      <div className="soft-action">
        <Button variant="text" onClick={handleDownload}>
          {t('soft.download', 'Скачать')}
        </Button>
      </div>
    </div>
  );
};

export default SoftRow;
