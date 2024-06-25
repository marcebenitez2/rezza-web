import { localProvider } from "@/providers/localProvider";
import { BASE_API_PREFIX } from "../constants/constants";

const { STRAPI_BACKEND_URL, STRAPI_API_TOKEN } = localProvider();

const BASE_BANNERS_URL = "/categories";
const BASE_CONSTRUCED_BANNERS_URL = `${STRAPI_BACKEND_URL}${BASE_API_PREFIX}${BASE_BANNERS_URL}`;

const QUERY_WITH_IMAGES = "?populate[image][fields][0]=url";

export const getAllCategories = async () => {
  try {
    const response = await fetch(
      `${BASE_CONSTRUCED_BANNERS_URL}${QUERY_WITH_IMAGES}`,
      {
        next: {
          revalidate: 3600, // 1 hora de revalidación
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching categories");
    }

    const dataReceived = await response.json();

    if (!dataReceived || !dataReceived.data) {
      throw new Error("Invalid response format");
    }

    return dataReceived.data;
  } catch (error) {
    console.error("Error fetching categories");
    return [];
  }
};
