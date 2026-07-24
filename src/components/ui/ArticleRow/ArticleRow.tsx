import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ArticleRow.scss';

interface ArticleRowProps {
  title: string;
  description: string;
  link?: string;
}

const ArticleRow: React.FC<ArticleRowProps> = ({
  title,
  description,
  link = '#',
}) => {
  const { t } = useTranslation();

  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [showToggleButton, setShowToggleButton] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      if (textRef.current.scrollHeight > textRef.current.clientHeight) {
        setShowToggleButton(true);
      }
    }
  }, [description]);

  return (
    <div className="article-row">
      <div className="article-content">
        <h4>{title}</h4>

        <div className="article-description-wrapper">
          <p
            ref={textRef}
            className={`article-description ${isTextExpanded ? 'expanded' : 'collapsed'}`}
          >
            {description}
          </p>

          {showToggleButton && (
            <button
              className="toggle-text-btn"
              onClick={() => setIsTextExpanded(!isTextExpanded)}
            >
              {isTextExpanded
                ? t('articles.collapse_text', 'Свернуть')
                : t('articles.expand_text', 'Развернуть...')}
            </button>
          )}
        </div>
      </div>
      <a
        href={link}
        className="article-read-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('articles.read_btn')}
      </a>
    </div>
  );
};

export default ArticleRow;
