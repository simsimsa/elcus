import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFaqStore } from '../../store/faqStore';
import Accordion from '../ui/Accordion/Accordion';

const FaqSection: React.FC = () => {
  const { t } = useTranslation();
  const { categories, faqs, activeCategoryId, setActiveCategory } =
    useFaqStore();

  const activeFaqs = faqs.filter(
    (faq) => faq.id_faq_category === activeCategoryId
  );

  return (
    <div className="faq-section">
      <aside className="faq-sidebar">
        <h3>{t('support.faq.categories_title')}</h3>
        <ul className="faq-category-list">
          {categories.map((category) => (
            <li key={category.id_faq_category}>
              <button
                className={`category-btn ${activeCategoryId === category.id_faq_category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id_faq_category)}
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
