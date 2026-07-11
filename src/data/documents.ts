export interface DocumentLink {
  labelKey: string;
  url: string;
}

export interface SoutDocumentData {
  year: string;
  links: DocumentLink[];
}

export const soutDocuments: SoutDocumentData[] = [
  {
    year: '2024',
    links: [{ labelKey: 'btn_summary', url: '/docs/sout/summary-2024.pdf' }],
  },
  {
    year: '2023',
    links: [{ labelKey: 'btn_summary', url: '/docs/sout/summary-2023.pdf' }],
  },
  {
    year: '2022',
    links: [{ labelKey: 'btn_summary', url: '/docs/sout/summary-2022.pdf' }],
  },
  {
    year: '2021',
    links: [{ labelKey: 'btn_summary', url: '/docs/sout/summary-2021.pdf' }],
  },
  {
    year: '2020',
    links: [{ labelKey: 'btn_summary', url: '/docs/sout/summary-2020.pdf' }],
  },
  {
    year: '2019',
    links: [
      { labelKey: 'btn_summary', url: '/docs/sout/summary1-2019.pdf' },
      { labelKey: 'btn_summary_2', url: '/docs/sout/summary2-2019.pdf' },
    ],
  },
  {
    year: '2018',
    links: [{ labelKey: 'btn_summary', url: '/docs/sout/summary-2018.pdf' }],
  },
  {
    year: '2017',
    links: [
      { labelKey: 'btn_summary', url: '/docs/sout/summary-2017.pdf' },
      { labelKey: 'btn_summary_ram', url: '/docs/sout/summaryR-2017.pdf' },
    ],
  },
  {
    year: '2016',
    links: [{ labelKey: 'btn_summary', url: '/docs/sout/summary-2016.pdf' }],
  },
  {
    year: '2015',
    links: [
      { labelKey: 'btn_summary', url: '/docs/sout/summary1-2015.pdf' },
      { labelKey: 'btn_summary_2', url: '/docs/sout/summary2-2015.pdf' },
    ],
  },
  {
    year: '2014',
    links: [{ labelKey: 'btn_summary', url: '/docs/sout/summary-2014.pdf' }],
  },
];
