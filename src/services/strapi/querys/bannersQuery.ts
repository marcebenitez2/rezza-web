import { strapiClient } from "../config/StrapiClient";
import { BASE_API_PREFIX } from "../constants/constants";

const BASE_BANNERS_URL = "/banners";
const BASE_CONSTRUCED_BANNERS_URL = `${BASE_API_PREFIX}${BASE_BANNERS_URL}`;

const QUERY_WITH_IMAGES =
  "?populate[banner][fields][0]=url&populate[responsive_banner][fields][0]=url";

export const getAllBanners = async () => {
  const { data: dataReceived } = await strapiClient.get(
    `${BASE_CONSTRUCED_BANNERS_URL}${QUERY_WITH_IMAGES}`
  );

  const { data: bannersData } = dataReceived;

  return bannersData;
};
