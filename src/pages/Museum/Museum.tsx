import React from 'react';
import { useMuseumStore } from '../../store/museumStore';
import './Museum.scss';
import MuseumHero from '../../components/MuseumHero/MuseumHero';
import MuseumExhibits from '../../components/MuseumExhibits/MuseumExhibits';

const Museum: React.FC = () => {
  const { items, isExpanded, expandAll } = useMuseumStore();

  return (
    <main className="museum-page">
      <MuseumHero />
      <MuseumExhibits
        items={items}
        isExpanded={isExpanded}
        onExpandAll={expandAll}
      />
    </main>
  );
};

export default Museum;
