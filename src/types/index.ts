export interface CompanyData {
  name: string;
  description: string;
}

export interface Product {
  id: string;
  category: 'boards' | 'devices' | 'indicators' | 'components';
  title: string;
  detailsUrl: string;
}
