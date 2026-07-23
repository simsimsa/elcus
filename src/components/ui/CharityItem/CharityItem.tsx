import React from 'react';
import './CharityItem.scss';
import type { CharityItemType } from '../../../store/charityStore';

interface CharityItemProps {
  item: CharityItemType;
  locale?: string;
  onImageClick: (imgUrl: string) => void;
}

const BACKEND_URL = 'http://localhost:8000';

const getImageUrl = (path?: string | null): string => {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:')
  ) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BACKEND_URL}${cleanPath}`;
};

const CharityItem: React.FC<CharityItemProps> = ({
  item,
  locale = 'ru-RU',
  onImageClick,
}) => {
  let dateObj = new Date();

  if (item.date) {
    const match = item.date.match(/T\d{2}:\d{2}:(\d{2})\.(\d{4})/);

    if (match) {
      const month = parseInt(match[1], 10) - 1;
      const year = parseInt(match[2], 10);
      dateObj = new Date(year, month);
    } else {
      const parsed = new Date(item.date);
      if (!isNaN(parsed.getTime())) dateObj = parsed;
    }
  }

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
    <div className="charity-item">
      <div className="charity-date-col">
        <div className="charity-date">
          <span className="charity-month">
            {month.charAt(0).toUpperCase() + month.slice(1)}
          </span>
          <span className="charity-year">{year}</span>
        </div>
        <div className="charity-dot"></div>
      </div>

      <div className="charity-content-col">
        {item.title && <h3 className="charity-title">{item.title}</h3>}
        <p className="charity-description">{item.description}</p>

        {imagesToRender.length > 0 && (
          <div className="charity-gallery">
            {imagesToRender.map((imgUrl, index) => (
              <div
                key={index}
                className="charity-img-wrapper"
                onClick={() => onImageClick(imgUrl)}
              >
                <img src={imgUrl} alt={`charity gallery ${index}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CharityItem;
