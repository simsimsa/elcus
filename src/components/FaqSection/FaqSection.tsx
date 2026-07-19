import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFaqStore } from '../../store/faqStore';
import Accordion from '../ui/Accordion/Accordion';

const FaqSection: React.FC = () => {
  const { t } = useTranslation();
  const { categories, faqs, activeCategoryId, setActiveCategory } =
    useFaqStore();

  const activeFaqs = faqs.filter(
    (faq) => faq.faq_category_id === activeCategoryId
  );

  return (
    <div className="faq-section">
      <aside className="faq-sidebar">
        <h3>{t('support.faq.categories_title')}</h3>
        <ul className="faq-category-list">
          {categories.map((category) => (
            <li key={category.faq_category_id}>
              <button
                className={`category-btn ${activeCategoryId === category.faq_category_id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.faq_category_id)}
              >
                {t(category.name_faq_category)}
                <span className="arrow">›</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="faq-list">
        {activeFaqs.length > 0 ? (
          activeFaqs.map((faq) => (
            <Accordion key={faq.faq_id} title={faq.question}>
              {faq.answer}
            </Accordion>
          ))
        ) : (
          <p className="faq-empty">{t('support.faq.empty')}</p>
        )}
      </div>
    </div>
  );
};

export default FaqSection;
