import { SliderBanner } from "./components/SliderBanner";
import { CategoryCards } from "./components/CategoriesCards";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { BestSellingProducts } from "./components/BestSellingProducts";
import { BannersData } from "@/shared/types/bannersQueryTypes";
import { ICategory } from "@/shared/types/categoriesQueryTypes";
import { IProducts } from "@/shared/types/productsQueryTypes";

const HomeModule = ({
  banners,
  categories,
  products,
}: {
  banners: BannersData[];
  categories: ICategory[];
  products: IProducts[];
}) => {
  return (
    <main className="w-full h-full">
      <SliderBanner banners={banners} />
      <div className="px-2 lg:px-36 flex flex-col gap-8 mt-8">
        <CategoryCards categories={categories} />
        <FeaturedProducts featuredProducts={products} />
        <BestSellingProducts products={products} />
      </div>
    </main>
  );
};

export default HomeModule;
