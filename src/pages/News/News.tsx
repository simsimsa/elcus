import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNewsStore } from '../../store/newsStore';
import NewsItem from '../../components/ui/NewsItem/NewsItem';
import './News.scss';

const News: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { items, isLoading, fetchNews } = useNewsStore();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <main className="news-page">
      <div className="news-header">
        <h1 className="news-main-title">{t('news.title', 'Новости')}</h1>
      </div>

      {isLoading ? (
        <div className="news-loading">{t('common.loading', 'Загрузка...')}</div>
      ) : (
        <div className="news-timeline-container">
          {items.map((item) => (
            <NewsItem
              key={item.id_news}
              item={item}
              locale={i18n.language === 'en' ? 'en-US' : 'ru-RU'}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      )}

      {selectedImage && (
        <div className="news-lightbox" onClick={() => setSelectedImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Увеличенное изображение" />
          </div>
        </div>
      )}
    </main>
  );
};

export default News;
