import React from 'react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Новости</h1>
      <p>Здесь будут новости компании</p>
      <Link to="/about">← Назад к компании</Link>
    </div>
  );
};

export default News;
