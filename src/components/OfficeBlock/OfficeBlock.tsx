import React from 'react';
import InfoRow from '../InfoRow/InfoRow';
import { MapPinIcon, PhoneIcon, ClockIcon } from '../icons/icons';
import './OfficeBlock.scss';

interface OfficeBlockProps {
  title: string;
  address: string;
  phone: string;
  phoneLink: string;
  hours?: string;
}

const OfficeBlock: React.FC<OfficeBlockProps> = ({
  title,
  address,
  phone,
  phoneLink,
  hours,
}) => {
  return (
    <div className="office-block">
      <h3>{title}</h3>
      <InfoRow icon={MapPinIcon}>{address}</InfoRow>
      <InfoRow icon={PhoneIcon}>
        <a href={`tel:${phoneLink}`}>{phone}</a>
      </InfoRow>
      {hours && (
        <InfoRow icon={ClockIcon} formatNewlines>
          {hours}
        </InfoRow>
      )}
    </div>
  );
};

export default OfficeBlock;
