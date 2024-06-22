import { localProvider } from "@/providers/localProvider";
import axios from "axios";

const { STRAPI_BACKEND_URL, STRAPI_API_TOKEN } = localProvider();

const strapiClient = axios.create({
  baseURL: STRAPI_BACKEND_URL,
});

strapiClient.interceptors.request.use(
  (config) => {
    const token = STRAPI_API_TOKEN;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

strapiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Response error:', error.response || error.message || error);
    return Promise.reject(error);
  }
);

export { strapiClient };
