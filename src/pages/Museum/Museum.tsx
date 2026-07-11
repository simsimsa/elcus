import React from 'react';
import { Link } from 'react-router-dom';

const Museum: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Музей</h1>
      <p>Здесь будет музей ретро электроники</p>
      <Link to="/about">← Назад к компании</Link>
    </div>
  );
};

export default Museum;
