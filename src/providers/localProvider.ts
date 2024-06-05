export const localProvider = () => {
  return {
    STRAPI_BACKEND_URL: process.env.STRAPI_BACKEND_URL,
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
  };
};
