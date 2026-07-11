import React from 'react';
import { Link } from 'react-router-dom';

const Charity: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Благотворительность</h1>
      <p>Здесь будет информация о благотворительности</p>
      <Link to="/about">← Назад к компании</Link>
    </div>
  );
};

export default Charity;
