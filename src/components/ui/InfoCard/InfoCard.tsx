import React, { type ReactNode } from 'react';
import Button from '../Button/Button';
import './InfoCard.scss';

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  onClick,
}) => {
  const isClickableCard = !buttonText && onClick;

  return (
    <div
      className={`info-card ${isClickableCard ? 'clickable-card' : ''}`}
      onClick={isClickableCard ? onClick : undefined}
    >
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {buttonText && (
        <Button variant="outline" onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default InfoCard;
