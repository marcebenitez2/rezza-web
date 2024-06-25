import HomeModule from "@/modules/Home";
import { getAllBanners } from "@/services/strapi/querys/bannersQuery";
import { getAllCategories } from "@/services/strapi/querys/categoriesQuery";
import { getAllProducts } from "@/services/strapi/querys/productsQuery";

const loadHome = async () => {
  try {
    const [banners, categories, products] = await Promise.all([
      getAllBanners(),
      getAllCategories(),
      getAllProducts(),
    ]);

    return { banners, categories, products };
  } catch (error) {
    console.error("Error loading home data:", error);
    return { banners: null, categories: null, products: null };
  }
};

export default async function Home() {
  const { banners, categories, products } = await loadHome();

  console.log(products)

  return (
    <HomeModule banners={banners} categories={categories} products={products} />
  );
}
