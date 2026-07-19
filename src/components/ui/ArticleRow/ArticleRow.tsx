import React from 'react';
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

  return (
    <div className="article-row">
      <div className="article-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <a href={link} className="article-read-link">
        {t('articles.read_btn')}
      </a>
    </div>
  );
};

export default ArticleRow;
