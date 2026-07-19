import { create } from 'zustand';

export interface OS {
  OS_id: number;
  os_name: string;
}

export interface Soft {
  soft_id: number;
  soft_name: string;
  version: string;
  soft_size: string;
  soft_file_path: string;
  soft_updated: string;
  description: string;
  os_id: number;
  product_id: number | null;
}

const MOCK_OS: OS[] = [
  { OS_id: 1, os_name: 'Windows' },
  { OS_id: 2, os_name: 'DOS' },
  { OS_id: 3, os_name: 'Linux' },
  { OS_id: 4, os_name: 'QNX' },
  { OS_id: 5, os_name: 'LabVIEW' },
  { OS_id: 6, os_name: 'Документация' },
];

const MOCK_SOFT: Soft[] = [
  {
    soft_id: 1,
    os_id: 1,
    soft_name: 'Windows 10 / 11',
    description: 'Драйверы для Windows 10 и 11 (x86 / x64)',
    version: '2.1.0',
    soft_size: '15 MB',
    soft_file_path: '/downloads/win10_11_driver.zip',
    soft_updated: '2023-10-01T12:00:00Z',
    product_id: null,
  },
  {
    soft_id: 2,
    os_id: 1,
    soft_name: 'Windows 7 / 8 / 8.1',
    description: 'Драйверы для Windows 7 / 8 / 8.1',
    version: '1.8.5',
    soft_size: '12 MB',
    soft_file_path: '/downloads/win7_8_driver.zip',
    soft_updated: '2022-05-15T10:00:00Z',
    product_id: null,
  },
  {
    soft_id: 3,
    os_id: 1,
    soft_name: 'Windows XP / 2000',
    description: 'Устаревшие версии драйверов',
    version: '1.0.2',
    soft_size: '5 MB',
    soft_file_path: '/downloads/winxp_driver.zip',
    soft_updated: '2015-08-20T09:00:00Z',
    product_id: null,
  },
  {
    soft_id: 4,
    os_id: 1,
    soft_name: 'Утилита конфигурации',
    description: 'ПО для настройки плат под Windows',
    version: '3.0.1',
    soft_size: '25 MB',
    soft_file_path: '/downloads/config_tool.exe',
    soft_updated: '2024-01-10T14:30:00Z',
    product_id: null,
  },
  {
    soft_id: 5,
    os_id: 3,
    soft_name: 'Linux Kernel 5.x',
    description: 'Исходные коды драйвера для Linux',
    version: '2.0.0',
    soft_size: '2 MB',
    soft_file_path: '/downloads/linux_driver.tar.gz',
    soft_updated: '2023-11-05T11:00:00Z',
    product_id: null,
  },
];

interface SoftState {
  osList: OS[];
  softItems: Soft[];
  activeOsId: number;
  isExpanded: boolean;
  isLoading: boolean;
  fetchInitialData: () => Promise<void>;
  setActiveOs: (id: number) => Promise<void>;
  expandSoft: () => Promise<void>;
}

export const useSoftStore = create<SoftState>((set, get) => ({
  osList: [],
  softItems: [],
  activeOsId: 1,
  isExpanded: false,
  isLoading: false,

  fetchInitialData: async () => {
    set({ isLoading: true });
    setTimeout(() => {
      const initialSoft = MOCK_SOFT.filter((s) => s.os_id === 1).slice(0, 2);
      set({
        osList: MOCK_OS,
        softItems: initialSoft,
        activeOsId: 1,
        isExpanded: false,
        isLoading: false,
      });
    }, 400);
  },

  setActiveOs: async (id: number) => {
    set({ isLoading: true, activeOsId: id, isExpanded: false });
    setTimeout(() => {
      const filtered = MOCK_SOFT.filter((s) => s.os_id === id).slice(0, 2);
      set({ softItems: filtered, isLoading: false });
    }, 300);
  },

  expandSoft: async () => {
    const { activeOsId } = get();
    set({ isLoading: true });
    setTimeout(() => {
      const allOsSoft = MOCK_SOFT.filter((s) => s.os_id === activeOsId);
      set({ softItems: allOsSoft, isExpanded: true, isLoading: false });
    }, 500);
  },
}));
