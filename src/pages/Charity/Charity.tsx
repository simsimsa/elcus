import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCharityStore } from '../../store/charityStore';
import CharityItem from '../../components/ui/CharityItem/CharityItem';
import './Charity.scss';

const Charity: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { items, isLoading, fetchCharity } = useCharityStore();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetchCharity();
  }, [fetchCharity]);

  return (
    <main className="charity-page">
      <div className="charity-header">
        <h1 className="charity-main-title">
          {t('charity.title', 'Благотворительность')}
        </h1>
      </div>

      {isLoading ? (
        <div className="charity-loading">
          {t('common.loading', 'Загрузка...')}
        </div>
      ) : (
        <div className="charity-timeline-container">
          {items.map((item) => (
            <CharityItem
              key={item.charity_id}
              item={item}
              locale={i18n.language === 'en' ? 'en-US' : 'ru-RU'}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      )}

      {selectedImage && (
        <div
          className="charity-lightbox"
          onClick={() => setSelectedImage(null)}
        >
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

export default Charity;
