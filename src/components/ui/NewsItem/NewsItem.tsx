import React from 'react';
import './NewsItem.scss';
import type { NewsItemType } from '../../../store/newsStore';

interface NewsItemProps {
  item: NewsItemType;
  locale?: string;
  onImageClick: (imgUrl: string) => void;
}

const NewsItem: React.FC<NewsItemProps> = ({
  item,
  locale = 'ru-RU',
  onImageClick,
}) => {
  const dateObj = new Date(item.news_published);
  const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(
    dateObj
  );
  const year = dateObj.getFullYear();

  const imagesToRender: string[] = [];
  if (item.image_path) {
    imagesToRender.push(item.image_path);
  }
  if (item.gallery && Array.isArray(item.gallery)) {
    imagesToRender.push(...item.gallery);
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
        <h3 className="news-title">{item.news_title}</h3>
        <p className="news-description">{item.news_content}</p>
ы
        {imagesToRender.length > 0 && (
          <div className="news-gallery">
            {imagesToRender.map((imgUrl, index) => (
              <div
                key={index}
                className="news-img-wrapper"
                onClick={() => onImageClick(imgUrl)}
              >
                <img src={imgUrl} alt={`news gallery ${index}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
