import React from 'react';
import './ExhibitCard.scss';

interface ExhibitCardProps {
  name: string;
  imagePath?: string | null;
  onClick: () => void;
}

const ExhibitCard: React.FC<ExhibitCardProps> = ({
  name,
  imagePath,
  onClick,
}) => {
  return (
    <div className="exhibit-card" onClick={onClick}>
      {imagePath ? (
        <img src={imagePath} alt={name} className="exhibit-bg-image" />
      ) : (
        <div className="exhibit-placeholder">Фото</div>
      )}

      <div className="exhibit-overlay">
        <h4 className="exhibit-name">{name}</h4>
      </div>
    </div>
  );
};

export default ExhibitCard;
