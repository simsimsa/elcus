import React from 'react';
import { useTranslation } from 'react-i18next';
import { useArticlesStore } from '../../store/articlesStore';
import ArticleRow from '../../components/ui/ArticleRow/ArticleRow';
import Button from '../../components/ui/Button/Button';
import './Articles.scss';

const Articles: React.FC = () => {
  const { t } = useTranslation();
  const { news, sources, activeTab, setActiveTab, isExpanded, expandAll } =
    useArticlesStore();

  const displayNews = isExpanded ? news : news.slice(0, 3);
  const displaySources = isExpanded ? sources : sources.slice(0, 3);

  return (
    <main className="articles-page">
      <h1 className="articles-title">{t('articles.header.title')}</h1>

      <div className="articles-content">
        <div className="articles-tabs">
          <button
            className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            {t('articles.tab.news')}
          </button>
          <button
            className={`tab-btn ${activeTab === 'sources' ? 'active' : ''}`}
            onClick={() => setActiveTab('sources')}
          >
            {t('articles.tab.sources')}
          </button>
        </div>

        <div className="articles-list">
          {activeTab === 'news'
            ? displayNews.map((item) => (
                <ArticleRow
                  key={item.id_news}
                  title={item.news_title}
                  description={item.news_content}
                />
              ))
            : displaySources.map((item) => (
                <ArticleRow
                  key={item.id_source}
                  title={item.sorce_title}
                  description={item.sorce_content}
                  link={item.url_external}
                />
              ))}
        </div>

        {!isExpanded && (
          <div className="articles-actions">
            <Button variant="outline" onClick={expandAll}>
              {activeTab === 'news'
                ? t('articles.all_news_btn')
                : t('articles.all_sources_btn')}
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Articles;
