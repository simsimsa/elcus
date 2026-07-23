import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCatalogStore } from '../../store/useCatalogStore';
import { api } from '../../api/axios';
import Button from '../../components/ui/Button/Button';
import './ProductDetails.scss';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { currentProduct, fetchProductById, clearCurrentProduct, isLoading } =
    useCatalogStore();

  const [isDescExpanded, setIsDescExpanded] = useState(false);

  useEffect(() => {
    if (id) {
      fetchProductById(Number(id));
    }
    return () => {
      clearCurrentProduct();
    };
  }, [id, fetchProductById, clearCurrentProduct]);

  if (isLoading || !currentProduct) {
    return (
      <div className="product-details-page loading">
        {t('common.loading', 'Загрузка товара...')}
      </div>
    );
  }

  const {
    product_name,
    product_article,
    product_description,
    product_attributes,
    image_path,
    gallery,
    documents,
    softwares,
  } = currentProduct;

  const getImageUrl = (path?: string | null) => {
    if (!path) return undefined;
    if (path.startsWith('http') || path.startsWith('data:')) return path;
    const baseUrl = api.defaults.baseURL?.replace(/\/$/, '') || '';
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
  };

  return (
    <main className="product-details-page">
      <Button variant="text" className="back-btn" onClick={() => navigate(-1)}>
        &larr; {t('common.back', 'Назад в каталог')}
      </Button>

      <div className="product-info-wrapper">
        <div className="product-hero-section">
          {image_path ? (
            <div className="product-main-image">
              <img src={getImageUrl(image_path)} alt={product_name} />
            </div>
          ) : (
            <div className="product-main-image placeholder">
              <span>Нет фото</span>
            </div>
          )}

          <div className="product-header">
            {product_article && (
              <span className="product-article">Арт: {product_article}</span>
            )}
            <h1 className="product-title">{product_name}</h1>

            {product_description && (
              <div className="description-container">
                <div
                  className={`product-description ${!isDescExpanded ? 'collapsed' : ''}`}
                >
                  {product_description}
                </div>
                {product_description.length > 250 && (
                  <button
                    className="toggle-desc-btn"
                    onClick={() => setIsDescExpanded(!isDescExpanded)}
                  >
                    {isDescExpanded
                      ? t('products.desc_collapse', 'Свернуть описание')
                      : t(
                          'products.desc_expand',
                          'Развернуть и посмотреть полностью'
                        )}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {gallery && gallery.length > 0 && (
          <div className="product-section product-gallery">
            <h3>{t('products.gallery', 'Галерея')}</h3>
            <div className="gallery-grid">
              {gallery.map((imgUrl, index) => (
                <div key={index} className="gallery-item">
                  <img
                    src={getImageUrl(imgUrl)}
                    alt={`${product_name} ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {product_attributes && Object.keys(product_attributes).length > 0 && (
          <div className="product-section product-attributes">
            <h3>{t('products.attributes', 'Характеристики')}</h3>
            <table className="attributes-table">
              <tbody>
                {Object.entries(product_attributes).map(([key, value]) => (
                  <tr key={key}>
                    <td className="attr-key">{key}</td>
                    <td className="attr-value">{String(value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="product-section">
          <h3>{t('products.documents', 'Документация')}</h3>
          {documents && documents.length > 0 ? (
            <ul className="files-list">
              {documents.map((doc) => (
                <li key={doc.doc_id} className="file-item">
                  <a
                    href={getImageUrl(doc.doc_file_path)}
                    target="_blank"
                    rel="noreferrer"
                    className="file-link"
                  >
                    <span className="file-name">{doc.doc_name}</span>
                    {doc.doc_size && (
                      <span className="file-size">{doc.doc_size}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-section-msg">
              Для данного товара нет прикрепленной документации.
            </p>
          )}
        </div>

        <div className="product-section">
          <h3>{t('products.software', 'Программное обеспечение')}</h3>
          {softwares && softwares.length > 0 ? (
            <ul className="files-list">
              {softwares.map((soft) => (
                <li key={soft.soft_id} className="file-item">
                  <a
                    href={getImageUrl(soft.soft_file_path)}
                    target="_blank"
                    rel="noreferrer"
                    className="file-link"
                  >
                    <div className="file-info">
                      <span className="file-name">
                        {soft.soft_name}
                        {soft.version && (
                          <span className="file-version">v{soft.version}</span>
                        )}
                      </span>
                      {soft.description && (
                        <p className="file-desc">{soft.description}</p>
                      )}
                    </div>
                    {soft.soft_size && (
                      <span className="file-size">{soft.soft_size}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-section-msg">
              Для данного товара нет прикрепленного ПО.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
