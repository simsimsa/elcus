import { create } from 'zustand';

export interface CharityItemType {
  charity_id: number;
  date: string;
  title: string;
  description: string;
  images: string[];
}

interface CharityStore {
  items: CharityItemType[];
}

const mockCharityItems: CharityItemType[] = [
  {
    charity_id: 1,
    date: '2019-11-15T00:00:00Z',
    title: 'Поддержка турнира по дзюдо «Золотой лист»',
    description:
      'Добровольное пожертвование Северо-Западному межрегиональному Фонду развития дзюдо, самбо и боевых единоборств на организацию XXX открытого межрегионального турнира по дзюдо «Золотой лист».',
    images: [
      '/images/elcus.png',
      '/images/elcus.png',
      '/images/elcus.png',
      '/images/elcus.png',
      '/images/elcus.png',
    ],
  },
  {
    charity_id: 2,
    date: '2019-10-10T00:00:00Z',
    title: 'Форум «Власть, общество и бизнес против коррупции»',
    description:
      'Взнос в Межрегиональную общественную организацию «Национальный Комитет Общественного Контроля» для проведения ежегодного форума.',
    images: [],
  },
  {
    charity_id: 3,
    date: '2019-09-05T00:00:00Z',
    title: 'Чемпионат мира по дзюдо среди мастеров',
    description:
      'Поддержка организации участия команды мастеров дзюдо в чемпионате мира по дзюдо среди мастеров в Марракеше (Марокко) 10–13 октября 2019 г.',
    images: ['/images/elcus.png'],
  },
  {
    charity_id: 4,
    date: '2019-04-20T00:00:00Z',
    title: 'Турнир по самбо «Спецназ – Память и Слава»',
    description:
      'Оказана благотворительная помощь РОО «Слава-Мужество-Отвага-Честь» на организацию и проведение VII турнира по самбо.',
    images: [],
  },
];

export const useCharityStore = create<CharityStore>(() => ({
  items: mockCharityItems,
}));
