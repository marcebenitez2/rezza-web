import { SliderBanner } from "./components/SliderBanner";
import { CategoryCards } from "./components/CategoriesCards";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { BestSellingProducts } from "./components/BestSellingProducts";
import { getAllBanners } from "@/services/strapi/querys/bannersQuery";
import { getAllCategories } from "@/services/strapi/querys/categoriesQuery";
import { getAllProducts } from "@/services/strapi/querys/productsQuery";

const loadHome = async () => {
  const banners = await getAllBanners();

  const categories = await getAllCategories();

  const products = await getAllProducts();

  return { banners, categories, products };
};

const HomeModule = async () => {
  const { banners, categories, products } = await loadHome();


  return (
    <main className="w-full h-full">
      <SliderBanner banners={banners} />

      <div className="px-2 lg:px-36 flex flex-col gap-8 mt-8">
        {/* Aca iria componente de categorias */}
        <CategoryCards categories={categories} />

        {/* Aca iria componente de productos destacados */}
        <FeaturedProducts featuredProducts={products} />

        {/* Aca iria componente de productos mas vendidos */}
        <BestSellingProducts products={products} />
      </div>
    </main>
  );
};

export default HomeModule;
