import { strapiClient } from "../config/StrapiClient";
import { BASE_API_PREFIX } from "../constants/constants";

const BASE_PRODUCTS_URL = "/products";
const BASE_CONSTRUCTED_PRODUCTS_URL = `${BASE_API_PREFIX}${BASE_PRODUCTS_URL}`;

const QUERY_WITH_IMAGES =
  "?populate[main_image][fields][0]=url&populate[images][fields][0]=url";

const QUERY_WITH_CATEGORY = "&populate=category";

export const getAllProducts = async () => {
  try {
    const { data: dataReceived } = await strapiClient.get(
      `${BASE_CONSTRUCTED_PRODUCTS_URL}${QUERY_WITH_IMAGES}${QUERY_WITH_CATEGORY}`
    );

    if (!dataReceived || !dataReceived.data) {
      throw new Error("Invalid response format");
    }

    const { data: productsData } = dataReceived;

    return productsData;
  } catch (error: any) {
    console.error("Error fetching products:", error.message || error);
    return [];
  }
};

export const getProductsByCategory = async (category: string) => {
  try {
    const { data: dataReceived } = await strapiClient.get(
      `${BASE_CONSTRUCTED_PRODUCTS_URL}${QUERY_WITH_IMAGES}${QUERY_WITH_CATEGORY}&category=${category}`
    );

    if (!dataReceived || !dataReceived.data) {
      throw new Error("Invalid response format");
    }

    const { data: productsData } = dataReceived;

    return productsData;
  } catch (error: any) {
    console.error(
      "Error fetching products by category:",
      error.message || error
    );
    return [];
  }
};
