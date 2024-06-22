export const localProvider = () => {
  return {
    STRAPI_BACKEND_URL: process.env.STRAPI_BACKEND_URL,
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  };
};
