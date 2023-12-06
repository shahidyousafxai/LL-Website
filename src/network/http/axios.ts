import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
}) as any;

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (config: AxiosError) => {
    return Promise.reject(config);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default api;
