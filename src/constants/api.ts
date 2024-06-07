import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_URL_REDDIT,
});

api.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => Promise.reject(error)
);

export { api, AxiosError };
