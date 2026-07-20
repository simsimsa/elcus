import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MuseumExhibits.scss';
import type { MuseumItem } from '../../store/museumStore';
import ExhibitCard from '../ui/ExhibitCard/ExhibitCard';
import Button from '../ui/Button/Button';

interface MuseumExhibitsProps {
  items: MuseumItem[];
  isExpanded: boolean;
  onExpandAll: () => void;
}

const MuseumExhibits: React.FC<MuseumExhibitsProps> = ({
  items,
  isExpanded,
  onExpandAll,
}) => {
  const { t } = useTranslation();

  // Состояние для хранения выбранной картинки (для модалки)
  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const displayItems = isExpanded ? items : items.slice(0, 4);

  return (
    <section className="museum-exhibits">
      <h2 className="exhibits-section-title">{t('museum.exhibits_title')}</h2>

      <div className="exhibits-grid">
        {displayItems.map((item) => (
          <ExhibitCard
            key={item.museum_id}
            name={item.name_item}
            imagePath={item.description}
            // По клику записываем данные в стейт
            onClick={() =>
              setSelectedItem({ name: item.name_item, image: item.description })
            }
          />
        ))}
      </div>

      {!isExpanded && items.length > 4 && (
        <div className="museum-actions">
          <Button variant="outline" onClick={onExpandAll}>
            {t('museum.show_all_btn')}
          </Button>
        </div>
      )}

      {/* Модальное окно (Lightbox) */}
      {selectedItem && (
        <div className="museum-lightbox" onClick={() => setSelectedItem(null)}>
          {/* stopPropagation предотвращает закрытие при клике на саму картинку */}
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
