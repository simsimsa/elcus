import React from 'react';
import { useTranslation } from 'react-i18next';
import './DocumentsSection.scss';
import type { SoutDocumentData } from '../../data/documents';

interface DocumentsSectionProps {
  documents: SoutDocumentData[];
}

const DocumentsSection: React.FC<DocumentsSectionProps> = ({ documents }) => {
  const { t } = useTranslation();

  return (
    <div className="documents-section">
      <h2>{t('about.docs.title')}</h2>
      <p className="docs-subtitle">
        <a href="#sanitary-info" className="sanitary-link">
          {t('about.docs.subtitle')}
        </a>
      </p>

      <div className="docs-grid">
        {documents.map((doc) => (
          <div key={doc.year} className="doc-row">
            <div className="doc-year">{doc.year}</div>
            <div className="doc-links">
              {doc.links.map((link, index) => (
                <a
                  href={link.url}
                  key={index}
                  className="doc-chip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  {t(`about.docs.${link.labelKey}`)}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsSection;
