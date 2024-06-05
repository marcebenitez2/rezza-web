import { BannersData } from "@/shared/types/bannersQueryTypes";
import { SliderBanner } from "./components/SliderBanner";
import { CategoryCards } from "./components/CategoriesCards";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { BestSellingProducts } from "./components/BestSellingProducts";
import { getAllBanners } from "@/services/strapi/querys/bannersQuery";
import { getAllCategories } from "@/services/strapi/querys/categoriesQuery";

const loadHome = async () => {
  const banners = await getAllBanners();

  const categories = await getAllCategories();

  return { banners, categories };
};

const HomeModule = async () => {
  const { banners, categories } = await loadHome();


  const featuredProducts = [
    { title: "Producto 1", image: "", price: "100" },
    { title: "Producto 2", image: "", price: "200" },
    { title: "Producto 3", image: "", price: "300" },
    { title: "Producto 4", image: "", price: "400" },
    { title: "Producto 5", image: "", price: "400" },
    { title: "Producto 6", image: "", price: "400" },
    { title: "Producto 6", image: "", price: "400" },
    { title: "Producto 6", image: "", price: "400" },
  ];

  const bestSellingProducts = [
    { title: "Producto 1", image: "", price: "100" },
    { title: "Producto 2", image: "", price: "200" },
    { title: "Producto 3", image: "", price: "300" },
    { title: "Producto 4", image: "", price: "400" },
    { title: "Producto 5", image: "", price: "400" },
    { title: "Producto 6", image: "", price: "400" },
    { title: "Producto 6", image: "", price: "400" },
    { title: "Producto 6", image: "", price: "400" },
  ];

  return (
    <main className="w-full h-full">
      <SliderBanner banners={banners} />

      <div className="px-2 lg:px-36 flex flex-col gap-8 mt-8">
        {/* Aca iria componente de categorias */}
        <CategoryCards categories={categories} />

        {/* Aca iria componente de productos destacados */}
        <FeaturedProducts featuredProducts={featuredProducts} />

        {/* Aca iria componente de productos mas vendidos */}
        <BestSellingProducts products={bestSellingProducts} />
      </div>
    </main>
  );
};

export default HomeModule;
