import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button/Button';
import './SoftRow.scss';
import type { Soft } from '../../store/useSoftStore';
import { DownloadIcon } from '../icons/icons';

interface SoftRowProps {
  soft: Soft;
}

const BACKEND_URL = 'http://localhost:8000'; // Замени на свой конфиг/env

const getFileUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BACKEND_URL}${cleanPath}`;
};

const SoftRow: React.FC<SoftRowProps> = ({ soft }) => {
  const { t } = useTranslation();

  const handleDownload = () => {
    const fileUrl = getFileUrl(soft.soft_file_path);
    const link = document.createElement('a');
    link.href = fileUrl;

    // Атрибут download часто игнорируется браузерами при скачивании с другого домена/порта (CORS),
    // поэтому дополнительно ставим target="_blank", чтобы файл хотя бы открылся/начал скачиваться
    link.download = soft.soft_name;
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="soft-row">
      <div className="soft-info">
        <div className="os-icon">{DownloadIcon}</div>
        <div className="soft-text">
          <h4 className="soft-title">{soft.soft_name}</h4>
          <p className="soft-desc">{soft.description}</p>

          {/* Добавляем отображение доп. информации (размер, версия, дата) */}
          <div
            className="soft-meta"
            style={{
              fontSize: '12px',
              color: '#888',
              marginTop: '4px',
              display: 'flex',
              gap: '12px',
            }}
          >
            {soft.version && <span>Версия: {soft.version}</span>}
            {soft.soft_size && <span>Размер: {soft.soft_size}</span>}
            {soft.soft_updated && <span>Обновлено: {soft.soft_updated}</span>}
          </div>
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
