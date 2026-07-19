import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      // Существующие переводы меню
      'menu.about': 'О компании',
      'menu.products': 'Продукция',
      'menu.soft': 'Soft',
      'menu.articles': 'Статьи',
      'menu.support': 'Поддержка',
      'menu.contacts': 'Контакты',
      'pageTitles.about': 'О компании',
      'home.hero.title':
        'Российский разработчик и производитель электронных устройств',
      'home.hero.subtitle':
        'Платы, приборы, индикаторы и комплектующие для промышленной автоматизации и связи',
      'home.hero.btn': 'Подробнее о компании',

      'home.cards.products.title': 'Каталог продукции',
      'home.cards.products.desc': 'Платы, приборы и комплектующие',
      'home.cards.soft.title': 'Драйверы и ПО',
      'home.cards.soft.desc': 'Скачать актуальные версии',
      'home.cards.support.title': 'Поддержка',
      'home.cards.support.desc': 'Вопросы и ответы, документация',
      'home.cards.contacts.title': 'Контакты',
      'home.cards.contacts.desc': 'Свяжитесь с нами удобным способом',

      // Новые тексты для страницы О компании
      'about.description':
        'Компания ЭЛКУС с 1991 года разрабатывает и производит электронные устройства и программное обеспечение для профессиональных систем.',
      'about.details_btn': 'Подробнее',
      'about.btn_hide': 'Свернуть',

      // Карточки
      'about.cards.museum.title': 'Музей ретро электроники',
      'about.cards.museum.desc': 'Уникальные экспонаты истории электроники',
      'about.cards.museum.btn': 'Перейти в музей',

      'about.cards.charity.title': 'Благотворительность',
      'about.cards.charity.desc':
        'Поддержка образовательных и социальных проектов',
      'about.cards.charity.btn': 'Подробнее',

      'about.cards.news.title': 'Новости компании',
      'about.cards.news.desc': 'Актуальные новости и события',
      'about.cards.news.btn': 'Читать новости',

      //история компании
      'about.history.title': 'История и развитие компании',
      'about.history.p1':
        'Акционерное общество "Электронная компания "Элкус" занимается разработкой и производством специализированной элементной базы и устройств сопряжения с интерфейсами ГОСТ 26765.52-87, ГОСТ Р 52070-2003 (MIL-STD-1553B), ГОСТ 18977-79 (ARINC 429), ARINC 708, ARINC 818, CAN-BUS (ISO11898), RS232, RS485; Ethernet-коммутаторов, плат ввода/вывода цифровой, аналоговой информации и дискретных сигналов.',
      'about.history.p2':
        'Наше предприятие сформировалось на базе отраслевой научно-исследовательской лаборатории Санкт-Петербургского государственного электротехнического университета (бывшего ЛЭТИ). Наш коллектив ранее был известен по ряду публикаций, являвшихся первыми в СССР в данной области, а также по разработке комплектов БИС для систем на основе мультиплексных каналов.',
      'about.history.p3':
        'Начиная с 1991г. коллектив приступил к разработке и производству модулей сопряжения с мультиплексным каналом MIL-STD-1553B, и к сегодняшнему дню является ведущим предприятием по этому направлению в СНГ. Выпускаемые предприятием платы полностью соответствуют международным стандартам по интерфейсам, присоединительным размерам, надежности и качеству. Производимая продукция проходит полный цикл производства в соответствии с ГОСТ Р ИСО 9001-2015.',
      'about.history.services.title':
        'Кроме поставки уже производимых изделий, наша компания осуществляет:',
      'about.history.services.1':
        'Разработку устройств сопряжения с последовательными каналами в конструктивах заказчика.',
      'about.history.services.2':
        'Разработку специализированных встраиваемых контроллеров САУ, системную проработку и проектирование САУ.',
      'about.history.services.3':
        'Разработку заказных и полузаказных БИС, а также гибридных микросборок на основе отечественных и зарубежных кристаллов.',
      'about.history.services.4':
        'Разработку и быстрое изготовление опытных образцов электронных плат.',
      'about.history.p4':
        'Продукция АО "Элкус" бесплатно снабжается программным обеспечением, включающим: драйвер, программы тестирования и отладки, информационно-справочные материалы. Изделия поддерживаются ПО в средах: DOS, QNX, Linux, Windows.',
      'about.history.p5':
        'На базе предприятия организована сертификационная лаборатория по проверке соответствия интерфейсов приборов стандартам. Для реализации стоящих перед предприятием задач построен "Научный центр" (введен в эксплуатацию в 2016г). На сегодняшний день в АО "Элкус" работают более 300 высококвалифицированных специалистов. Все рабочие места прошли специальную проверку условий труда.',

      'about.docs.title': 'Специальная оценка условий труда (СОУТ)',
      'about.docs.subtitle':
        'Информация об обеспечении АО "Элкус" базовых санитарно-гигиенических требований',
      'about.docs.btn_events': 'Перечень мероприятий',
      'about.docs.btn_summary': 'Сводная ведомость',
      'about.docs.btn_events_2': 'Перечень мероприятий (2 этап)',
      'about.docs.btn_summary_2': 'Сводная ведомость (2 этап)',
      'about.docs.btn_events_ram': 'Перечень (Раменское)',
      'about.docs.btn_summary_ram': 'Ведомость (Раменское)',

      //contacts
      'contacts.title': 'Контакты',
      'contacts.spb.title': 'Главный офис (Санкт-Петербург)',
      'contacts.spb.address':
        '196128, Россия, г. Санкт-Петербург, Московский район, ул. Благодатная, д.10 стр. 1',
      'contacts.spb.hours': 'Пн-Чт 8:00 - 17:00 мск\nПт 8:00 - 14:30 мск',
      'contacts.spb.phone': '+7 (812) 610-18-84 (многоканальный)',
      'contacts.moscow.title': 'Офис в Москве',
      'contacts.moscow.address':
        '140108, Россия, Московская область, г.Раменское, ул. Михалевича, д.51, оф.44,45',
      'contacts.moscow.phone': '+7 (495) 668-70-47',
      'contacts.email.label': 'Email',
      'contacts.email.value': 'mail@elcus.ru',
      'contacts.write_us': 'Написать нам',

      //support
      'support.title': 'Поддержка',
      'support.description':
        'Ответы на популярные вопросы по продукции и программному обеспечению',
      'support.contacts.title': 'Не нашли ответ на свой вопрос?',
      'support.contacts.desc': 'Свяжитесь с нашей службой поддержки',
      'support.contacts.ask_btn': 'Задать вопрос',
      'support.faq.categories_title': 'Категории вопросов',
      'support.faq.empty': 'Для данной категории пока нет вопросов.',

      // support categories
      'support.categories.arinc': 'Адаптеры ARINC-429',
      'support.categories.can': 'Адаптеры CAN',
      'support.categories.mil': 'Адаптеры MIL-STD-1553B',
      'support.categories.software': 'Программное обеспечение',
      'support.categories.other': 'Прочее оборудование',
      'support.categories.general': 'Общие вопросы',

      //articles
      'articles.header.title': 'Статьи и полезные ссылки',
      'articles.header.desc':
        'Полезные материалы, инструкции и обзоры нашей продукции',
      'articles.tab.news': 'Статьи',
      'articles.tab.sources': 'Полезные ссылки',
      'articles.read_btn': 'Читать',
      'articles.all_news_btn': 'Все статьи',
      'articles.all_sources_btn': 'Все ссылки',
    },
  },
  en: {
    translation: {
      // Существующие переводы меню
      'menu.about': 'About Us',
      'menu.products': 'Products',
      'menu.soft': 'Software',
      'menu.articles': 'Articles',
      'menu.support': 'Support',
      'menu.contacts': 'Contacts',
      'pageTitles.about': 'About Us',
      'home.hero.title':
        'Russian developer and manufacturer of electronic devices',
      'home.hero.subtitle':
        'Boards, devices, indicators and components for industrial automation and communication',
      'home.hero.btn': 'More about the company',

      //история компании
      'about.history.title': 'History and Development',
      'about.history.p1':
        'Joint-Stock Company "Electronic Company ELCUS" is engaged in the development and production of specialized components and interface devices conforming to GOST 26765.52-87, GOST R 52070-2003 (MIL-STD-1553B), GOST 18977-79 (ARINC 429), ARINC 708, ARINC 818, CAN-BUS (ISO11898), RS232, RS485; Ethernet switches, digital and analog I/O boards, and discrete signal boards.',
      'about.history.p2':
        'Our enterprise was formed on the basis of the branch research laboratory of the St. Petersburg Electrotechnical University (formerly LETI). Our team was previously known for a number of publications that were the first in the USSR in this field, as well as for the development of LSI sets for systems based on multiplex channels.',
      'about.history.p3':
        'Since 1991, the team has been developing and producing interface modules for the MIL-STD-1553B multiplex channel, and today it is the leading enterprise in this field in the CIS. The boards produced by the enterprise fully comply with international standards for interfaces, connecting dimensions, reliability, and quality. The manufactured products go through a full production cycle in accordance with GOST R ISO 9001-2015.',
      'about.history.services.title':
        'In addition to supplying manufactured products, our company also provides:',
      'about.history.services.1':
        'Development of interface devices with serial channels in customer enclosures.',
      'about.history.services.2':
        'Development of specialized embedded ACS (Automatic Control System) controllers, system engineering, and ACS design.',
      'about.history.services.3':
        'Development of custom and semi-custom LSIs, as well as hybrid microassemblies based on domestic and foreign crystals.',
      'about.history.services.4':
        'Development and rapid prototyping of electronic boards.',
      'about.history.p4':
        'ELCUS products are supplied free of charge with software, including: drivers, testing and debugging programs, and electronic reference materials. The products are supported by software in DOS, QNX, Linux, and Windows environments.',
      'about.history.p5':
        'A certification laboratory for checking the compliance of device interfaces with standards has been organized at the enterprise. To achieve the goals set for the enterprise, a "Science Center" was built (commissioned in 2016). Today, ELCUS employs more than 300 highly qualified specialists. All workplaces have undergone a special assessment of working conditions.',

      'about.docs.title': 'Special Assessment of Working Conditions (SAWC)',
      'about.docs.subtitle':
        'Information on ELCUS compliance with basic sanitary and hygienic requirements',
      'about.docs.btn_events': 'List of measures',
      'about.docs.btn_summary': 'Summary sheet',
      'about.docs.btn_events_2': 'List of measures (Stage 2)',
      'about.docs.btn_summary_2': 'Summary sheet (Stage 2)',
      'about.docs.btn_events_ram': 'List (Ramenskoye)',
      'about.docs.btn_summary_ram': 'Summary (Ramenskoye)',

      'home.cards.products.title': 'Product Catalog',
      'home.cards.products.desc': 'Boards, devices and components',
      'home.cards.soft.title': 'Drivers and Software',
      'home.cards.soft.desc': 'Download latest versions',
      'home.cards.support.title': 'Support',
      'home.cards.support.desc': 'FAQ and documentation',
      'home.cards.contacts.title': 'Contacts',
      'home.cards.contacts.desc': 'Contact us in a convenient way',
      // Новые тексты для страницы О компании
      'about.description':
        'Since 1991, ELCUS has been developing and manufacturing electronic devices and software for professional systems.',
      'about.details_btn': 'Learn more',
      'about.btn_hide': 'Hide',

      // Карточки
      'about.cards.museum.title': 'Retro Electronics Museum',
      'about.cards.museum.desc': 'Unique exhibits of electronics history',
      'about.cards.museum.btn': 'Go to museum',

      'about.cards.charity.title': 'Charity',
      'about.cards.charity.desc': 'Support for educational and social projects',
      'about.cards.charity.btn': 'Learn more',

      'about.cards.news.title': 'Company News',
      'about.cards.news.desc': 'Latest news and events',
      'about.cards.news.btn': 'Read news',

      //contacts
      'contacts.title': 'Contacts',
      'contacts.spb.title': 'Main Office (St. Petersburg)',
      'contacts.spb.address':
        '196128, Russia, St. Petersburg, Moskovsky district, Blagodatnaya st., 10 bld 1',
      'contacts.spb.hours': 'Mon-Thu 8:00 - 17:00 MSK\nFri 8:00 - 14:30 MSK',
      'contacts.spb.phone': '+7 (812) 610-18-84 (multichannel)',
      'contacts.moscow.title': 'Moscow Office',
      'contacts.moscow.address':
        '140108, Russia, Moscow region, Ramenskoye, Mikhalevicha st., 51, office 44,45',
      'contacts.moscow.phone': '+7 (495) 668-70-47',
      'contacts.email.label': 'Email',
      'contacts.email.value': 'mail@elcus.ru',
      'contacts.write_us': 'Write to us',

      'support.title': 'Support',
      'support.description':
        'Answers to popular questions about products and software',
      'support.contacts.title': "Didn't find an answer to your question?",
      'support.contacts.desc': 'Contact our support team',
      'support.contacts.ask_btn': 'Ask a question',
      'support.faq.categories_title': 'FAQ Categories',
      'support.faq.empty': 'There are no questions for this category yet.',

      // Translations for categories
      'support.categories.arinc': 'ARINC-429 Adapters',
      'support.categories.can': 'CAN Adapters',
      'support.categories.mil': 'MIL-STD-1553B Adapters',
      'support.categories.software': 'Software',
      'support.categories.other': 'Other Equipment',
      'support.categories.general': 'General Questions',

      //articles
      'articles.header.title': 'Articles and Useful Links',
      'articles.header.desc':
        'Useful materials, instructions, and product reviews',
      'articles.tab.news': 'Articles',
      'articles.tab.sources': 'Useful Links',
      'articles.read_btn': 'Read',
      'articles.all_news_btn': 'All articles',
      'articles.all_sources_btn': 'All links',
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
