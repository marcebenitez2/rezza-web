import HomeModule from "@/modules/Home";
import { getCollection } from "@/services/firebase/firestore/firestore";
import { IBanners } from "@/shared/types/bannersQueryTypes";
import { ICategory } from "@/shared/types/categoriesQueryTypes";
import { IProducts } from "@/shared/types/productsQueryTypes";

const loadHome = async () => {
  try {
    const [banners, categories, products] = await Promise.all([
      getCollection("banners"),
      getCollection("categories"),
      getCollection("products"),
    ]);

    return { banners, categories, products };
  } catch (error) {
    console.error("Error loading home data:", error);
    return { banners: null, categories: null, products: null };
  }
};

export default async function Home() {
  const { banners, categories, products } = await loadHome();

  return (
    <HomeModule
      banners={banners as IBanners[]}
      categories={categories as ICategory[]}
      products={products as IProducts[]}
    />
  );
}
