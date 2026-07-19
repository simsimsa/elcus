import React from 'react';
import Button from '../Button/Button';
import './ProductCard.scss';

interface ProductCardProps {
  name: string;
  description: string;
  article: string;
  buttonText: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  article,
  buttonText,
  onClick,
}) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card-content">
        <span className="product-article">Арт: {article}</span>
        <h4 className="product-title">{name}</h4>
        <p className="product-description">{description}</p>
      </div>
      <div className="product-card-action">
        <Button
          variant="text"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
