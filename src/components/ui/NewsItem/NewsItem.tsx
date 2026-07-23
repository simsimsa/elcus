import React from 'react';
import type { NewsItemType } from '../../../store/newsStore';
import './NewsItem.scss';

interface NewsItemProps {
  item: NewsItemType;
  locale?: string;
  onImageClick?: (imgUrl: string) => void;
}

const BACKEND_URL = 'http://localhost:8000';

const getImageUrl = (path?: string | null): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BACKEND_URL}${cleanPath}`;
};

const NewsItem: React.FC<NewsItemProps> = ({
  item,
  locale = 'ru-RU',
  onImageClick,
}) => {
  const dateObj = item.news_published
    ? new Date(item.news_published)
    : new Date();
  const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(
    dateObj
  );
  const year = dateObj.getFullYear();

  const imagesToRender: string[] = [];
  if (item.image_path) {
    imagesToRender.push(getImageUrl(item.image_path));
  }
  if (item.gallery && Array.isArray(item.gallery)) {
    item.gallery.forEach((path) => {
      if (path) imagesToRender.push(getImageUrl(path));
    });
  }

  return (
    <div className="news-item">
      <div className="news-date-col">
        <div className="news-date">
          <span className="news-month">
            {month.charAt(0).toUpperCase() + month.slice(1)}
          </span>
          <span className="news-year">{year}</span>
        </div>
        <div className="news-dot"></div>
      </div>

      <div className="news-content-col">
        {item.news_title && <h3 className="news-title">{item.news_title}</h3>}
        {item.news_content && (
          <p className="news-description">{item.news_content}</p>
        )}

        {imagesToRender.length > 0 && (
          <div className="news-gallery">
            {imagesToRender.map((imgUrl, index) => (
              <div
                key={index}
                className="news-img-wrapper"
                onClick={() => onImageClick && onImageClick(imgUrl)}
              >
                <img src={imgUrl} alt={`Новость ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
