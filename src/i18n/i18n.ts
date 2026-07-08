import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      'menu.about': 'О компании',
      'menu.products': 'Продукция',
      'menu.soft': 'Soft',
      'menu.articles': 'Статьи',
      'menu.support': 'Поддержка',
      'menu.contacts': 'Контакты',
      'pageTitles.about': 'О компании и новости',
      'pageTitles.products': 'Каталог продукции',
      'pageTitles.soft': 'Драйверы и программное обеспечение',
      'pageTitles.articles': 'Статьи и полезные ссылки',
      'pageTitles.support': 'Поддержка (Вопросы и ответы)',
      'pageTitles.contacts': 'Контакты',
    },
  },
  en: {
    translation: {
      'menu.about': 'About Us',
      'menu.products': 'Products',
      'menu.soft': 'Software',
      'menu.articles': 'Articles',
      'menu.support': 'Support',
      'menu.contacts': 'Contacts',
      'pageTitles.about': 'About Us & News',
      'pageTitles.products': 'Product Catalog',
      'pageTitles.soft': 'Drivers and Software',
      'pageTitles.articles': 'Articles and Useful Links',
      'pageTitles.support': 'Support (FAQ)',
      'pageTitles.contacts': 'Contacts',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
