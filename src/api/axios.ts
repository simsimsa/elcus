import axios from 'axios';

const PROD_URL = import.meta.env.VITE_PROD_API_URL || 'https://api.elcus.ru';

const LOCAL_URL = import.meta.env.VITE_LOCAL_API_URL || 'http://127.0.0.1:8000';

export const api = axios.create({
  baseURL: PROD_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isSwitchedToLocal = false;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!error.response && !isSwitchedToLocal) {
      isSwitchedToLocal = true;
      console.warn(
        `[API Switcher] Прод (${PROD_URL}) недоступен. Переключаемся на ${LOCAL_URL}`
      );

      api.defaults.baseURL = LOCAL_URL;

      originalRequest.baseURL = LOCAL_URL;

      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);
