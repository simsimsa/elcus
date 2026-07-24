import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticlesStore } from '../../store/articlesStore';
import ArticleRow from '../../components/ui/ArticleRow/ArticleRow';
import Button from '../../components/ui/Button/Button';
import './Articles.scss';

const getFileUrl = (
  path: string | null,
  baseUrl: string
): string | undefined => {
  if (!path) return undefined;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

const Articles: React.FC = () => {
  const { t } = useTranslation();
  const {
    articles,
    sources,
    activeTab,
    setActiveTab,
    isExpanded,
    expandAll,
    fetchArticles,
    isLoading,
  } = useArticlesStore();

  const baseUrl = import.meta.env.VITE_LOCAL_API_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const displayArticles = isExpanded ? articles : articles.slice(0, 3);
  const displaySources = isExpanded ? sources : sources.slice(0, 3);

  return (
    <main className="articles-page">
      <h1 className="articles-title">{t('articles.header.title')}</h1>

      <div className="articles-content">
        <div className="articles-tabs">
          <button
            className={`tab-btn ${activeTab === 'articles' ? 'active' : ''}`}
            onClick={() => setActiveTab('articles')}
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
          {activeTab === 'articles' && (
            <>
              {isLoading && <p className="loading-text">Загрузка статей...</p>}
              {!isLoading &&
                displayArticles.map((item) => (
                  <ArticleRow
                    key={item.id_source}
                    title={item.source_title}
                    description={item.source_content || ''}
                    link={getFileUrl(item.url_external, baseUrl)}
                  />
                ))}
            </>
          )}

          {activeTab === 'sources' &&
            displaySources.map((item) => (
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
              {activeTab === 'articles'
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
