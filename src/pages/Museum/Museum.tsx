import React from 'react';
import './Museum.scss';
import MuseumHero from '../../components/MuseumHero/MuseumHero';
import MuseumExhibits from '../../components/MuseumExhibits/MuseumExhibits';

const Museum: React.FC = () => {
  return (
    <main className="museum-page">
      <MuseumHero />
      <MuseumExhibits />
    </main>
  );
};

export default Museum;
