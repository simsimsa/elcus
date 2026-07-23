import React from 'react';
import { api } from '../../../api/axios';
import Button from '../Button/Button';
import './ProductCard.scss';

interface ProductCardProps {
  imagePath?: string | null;
  article?: string | null;
  name: string;
  description?: string | null;
  buttonText?: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imagePath,
  article,
  name,
  description,
  buttonText = 'Подробнее',
  onClick,
}) => {
  const getImageUrl = (path?: string | null) => {
    if (!path) return undefined;
    if (path.startsWith('http') || path.startsWith('data:')) return path;
    const baseUrl = api.defaults.baseURL?.replace(/\/$/, '') || '';
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
  };

  const fullImageUrl = getImageUrl(imagePath);

  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card__image-wrapper">
        {fullImageUrl ? (
          <img src={fullImageUrl} alt={name} className="product-card__image" />
        ) : (
          <div className="product-card__placeholder">Нет фото</div>
        )}
      </div>

      <div className="product-card__body">
        {article && (
          <span className="product-card__article">Арт: {article}</span>
        )}
        <h4 className="product-card__title">{name}</h4>
        {description && (
          <p className="product-card__description">{description}</p>
        )}
      </div>

      <div className="product-card__footer">
        <Button variant="outline" onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
