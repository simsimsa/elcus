import React from 'react';
import './PageHeader.scss';

interface PageHeaderProps {
  title: string;
  description: string;
  bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  bgImage,
}) => {
  const backgroundStyle = bgImage
    ? {
        backgroundImage: `linear-gradient(to right, #f8fafc 40%, rgba(248, 250, 252, 0.8) 65%, rgba(248, 250, 252, 0) 100%), url(${bgImage})`,
      }
    : {};

  return (
    <div className="page-header" style={backgroundStyle}>
      <div className="page-header-content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;
