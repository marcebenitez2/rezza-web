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
  (e) => {
    return Promise.reject(e);
  }
);

export { strapiClient };
