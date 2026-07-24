import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MuseumExhibits.scss';
import { useMuseumStore } from '../../store/museumStore';
import ExhibitCard from '../ui/ExhibitCard/ExhibitCard';
import Button from '../ui/Button/Button';

const BACKEND_URL = 'http://localhost:8000';

const getImageUrl = (path?: string | null): string => {
  if (!path) return '/images/museum-hero.png';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BACKEND_URL}${cleanPath}`;
};

const MuseumExhibits: React.FC = () => {
  const { t } = useTranslation();
  const { items, isExpanded, isLoading, fetchMuseumItems, expandAll } =
    useMuseumStore();

  useEffect(() => {
    fetchMuseumItems();
  }, [fetchMuseumItems]);

  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const displayItems = isExpanded ? items : items.slice(0, 12);

  if (isLoading && items.length === 0) {
    return (
      <section className="museum-exhibits">
        <h2 className="exhibits-section-title">
          {t('museum.exhibits_title', 'Экспонаты музея')}
        </h2>
        <div className="museum-loading">
          {t('common.loading', 'Загрузка...')}
        </div>
      </section>
    );
  }

  return (
    <section className="museum-exhibits">
      <h2 className="exhibits-section-title">
        {t('museum.exhibits_title', 'Экспонаты музея')}
      </h2>

      <div className="exhibits-grid">
        {displayItems.map((item) => {
          const imageUrl = getImageUrl(item.image_path);

          return (
            <ExhibitCard
              key={item.museum_id}
              name={item.name_item}
              imagePath={imageUrl}
              onClick={() =>
                setSelectedItem({ name: item.name_item, image: imageUrl })
              }
            />
          );
        })}
      </div>

      {!isExpanded && items.length > 4 && (
        <div className="museum-actions">
          <Button variant="outline" onClick={expandAll}>
            {t('museum.show_all_btn', 'Показать все')}
          </Button>
        </div>
      )}

      {selectedItem && (
        <div className="museum-lightbox" onClick={() => setSelectedItem(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>
            <img src={selectedItem.image} alt={selectedItem.name} />
            <h3 className="lightbox-title">{selectedItem.name}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default MuseumExhibits;
