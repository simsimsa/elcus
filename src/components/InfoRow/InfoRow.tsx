import React from 'react';
import './InfoRow.scss';

interface InfoRowProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  formatNewlines?: boolean;
}

const InfoRow: React.FC<InfoRowProps> = ({
  icon,
  children,
  formatNewlines,
}) => {
  return (
    <div className="info-row">
      <div className="icon">{icon}</div>
      <div className={`text ${formatNewlines ? 'format-newlines' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default InfoRow;
