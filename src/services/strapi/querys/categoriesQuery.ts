import { strapiClient } from "../config/StrapiClient";
import { BASE_API_PREFIX } from "../constants/constants";

const BASE_BANNERS_URL = "/categories";
const BASE_CONSTRUCED_BANNERS_URL = `${BASE_API_PREFIX}${BASE_BANNERS_URL}`;

const QUERY_WITH_IMAGES = "?populate[image][fields][0]=url";

export const getAllCategories = async () => {
  try {
    const { data: dataReceived } = await strapiClient.get(
      `${BASE_CONSTRUCED_BANNERS_URL}${QUERY_WITH_IMAGES}`
    );

    if (!dataReceived || !dataReceived.data) {
      throw new Error("Invalid response format");
    }

    const { data: categoriesData } = dataReceived;

    return categoriesData;
  } catch (error: any) {
    console.error("Error fetching categories:", error.message || error);
    return [];
  }
};
