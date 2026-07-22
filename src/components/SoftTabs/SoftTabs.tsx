import React from 'react';
import './SoftTabs.scss';
import type { OS } from '../../store/useSoftStore';

interface SoftTabsProps {
  osList: OS[];
  activeOsId: number;
  onTabChange: (id: number) => void;
  isLoading: boolean;
}

const SoftTabs: React.FC<SoftTabsProps> = ({
  osList,
  activeOsId,
  onTabChange,
  isLoading,
}) => {
  return (
    <div className="soft-tabs-container">
      <ul className="soft-tabs">
        {osList.map((os) => (
          <li
            key={os.id_os}
            className={`soft-tab ${activeOsId === os.id_os ? 'active' : ''}`}
            onClick={() => !isLoading && onTabChange(os.id_os)}
          >
            {os.os_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftTabs;
