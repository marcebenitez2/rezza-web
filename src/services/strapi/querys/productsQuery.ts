import { localProvider } from "@/providers/localProvider";
import { BASE_API_PREFIX } from "../constants/constants";

const { STRAPI_BACKEND_URL, STRAPI_API_TOKEN } = localProvider();

const BASE_PRODUCTS_URL = "/products";
const BASE_CONSTRUCTED_PRODUCTS_URL = `${STRAPI_BACKEND_URL}${BASE_API_PREFIX}${BASE_PRODUCTS_URL}`;


const QUERY_WITH_IMAGES =
  "populate[main_image][fields][0]=url&populate[images][fields][0]=url";
const QUERY_WITH_CATEGORY = "populate=category";

const QUERY_WITH_FILTERS = (string: string) => {
  return `filters[category][title][$eq]=${string}`;
};

const QUERY_WITH_SLUG = (string: string) => {
  return `filters[slug][$eq]=${string}`;
};


export const getAllProducts = async () => {
  try {
    const response = await fetch(
      `${BASE_CONSTRUCTED_PRODUCTS_URL}?${QUERY_WITH_IMAGES}&${QUERY_WITH_CATEGORY}`,
      {
        next: {
          revalidate: 3600, // 1 hora de revalidación
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching products");
    }

    const dataReceived = await response.json();

    if (!dataReceived || !dataReceived.data) {
      throw new Error("Invalid response format");
    }

    return dataReceived.data;
  } catch (error) {
    console.error("Error fetching products");
    return [];
  }
};

export const getProductsByCategory = async (category: string) => {
  try {
    const response = await fetch(
      `${BASE_CONSTRUCTED_PRODUCTS_URL}?${QUERY_WITH_FILTERS(
        category
      )}&${QUERY_WITH_IMAGES}&${QUERY_WITH_CATEGORY}`,
      {
        method: "GET",
        next: {
          revalidate: 3600, // 1 hora de revalidación
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching products by category");
    }

    const dataReceived = await response.json();

    if (!dataReceived || !dataReceived.data) {
      throw new Error("Invalid response format");
    }

    return dataReceived.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};

export const getProductBySlug = async (slug: string) => {
  try {
    const response = await fetch(
      `${BASE_CONSTRUCTED_PRODUCTS_URL}?${QUERY_WITH_SLUG(
        slug
      )}&${QUERY_WITH_IMAGES}&${QUERY_WITH_CATEGORY}`,
      {
        method: "GET",
        next: {
          revalidate: 3600, // 1 hora de revalidación
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching product by slug");
    }

    const dataReceived = await response.json();

    if (!dataReceived || !dataReceived.data) {
      throw new Error("Invalid response format");
    }

    return dataReceived.data[0];
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return {};
  }
};
