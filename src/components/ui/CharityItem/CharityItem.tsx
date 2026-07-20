import React from 'react';
import './CharityItem.scss';
import type { CharityItemType } from '../../../store/charityStore';

interface CharityItemProps {
  item: CharityItemType;
  locale?: string;
  onImageClick: (imgUrl: string) => void;
}

const CharityItem: React.FC<CharityItemProps> = ({
  item,
  locale = 'ru-RU',
  onImageClick,
}) => {
  const dateObj = new Date(item.date);
  const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(
    dateObj
  );
  const year = dateObj.getFullYear();

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
        <h3 className="charity-title">{item.title}</h3>
        <p className="charity-description">{item.description}</p>

        {item.images && item.images.length > 0 && (
          <div className="charity-gallery">
            {item.images.map((imgUrl, index) => (
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
