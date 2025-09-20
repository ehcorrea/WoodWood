import axios, { AxiosRequestConfig } from 'axios';

import { BASE_URL } from '@env';

const defaultOptions: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const client = axios.create(defaultOptions);
