import { SliderBanner } from "./components/SliderBanner";
import { CategoryCards } from "./components/CategoriesCards";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { BestSellingProducts } from "./components/BestSellingProducts";
import { ICategory } from "@/shared/types/categoriesQueryTypes";
import { IProducts } from "@/shared/types/productsQueryTypes";
import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IBanners } from "@/shared/types/bannersQueryTypes";

const HomeModule = ({
  banners,
  categories,
  products,
}: {
  banners: IBanners[];
  categories: ICategory[];
  products: IProducts[];
}) => {
  // creamos una variable array que se llama productRed que contenga 8 productos nada mas
  const productRed = products.slice(0, 8);

  // Filtrar los productos que tienen featured_product = true
  const featuredProducts = products.filter(
    (product) => product.featured_product
  );

  // Filtrar los productos que tienen best_selling = true
  const bestSellingProducts = products.filter(
    (product) => product.best_selling
  );

  // En caso que no haya productos featured, se muestran los primeros 8 productos
  if (featuredProducts.length === 0) {
    featuredProducts.push(...products.slice(0, 8));
  }

  // En caso que no haya productos best_selling, se muestran los primeros 8 productos
  if (bestSellingProducts.length === 0) {
    bestSellingProducts.push(...products.slice(0, 8));
  }

  // En caso que los productos featured sean menos de 8, se completar con los otros productos
  if (featuredProducts.length < 8) {
    const restProducts = products.filter(
      (product) => !product.featured_product
    );
    featuredProducts.push(
      ...restProducts.slice(0, 8 - featuredProducts.length)
    );
  }

  // En caso que los productos best_selling sean menos de 8, se completar con los otros productos
  if (bestSellingProducts.length < 8) {
    const restProducts = products.filter(
      (product) => !product.best_selling
    );
    bestSellingProducts.push(
      ...restProducts.slice(0, 8 - bestSellingProducts.length)
    );
  }

  return (
    <main className="w-full h-full">
      <SliderBanner banners={banners} />
      <div className="px-2 lg:px-36 flex flex-col gap-8 mt-8">
        <CategoryCards categories={categories} />
        <FeaturedProducts featuredProducts={featuredProducts} />
        <BestSellingProducts products={bestSellingProducts} />
        <h2 className="text-2xl text-[#81638b] font-semibold mb-4 text-center xl:text-start lg:text-4xl">
          Nuestro catalogo
        </h2>
        <GridProducts products={products} />
      </div>
    </main>
  );
};

export default HomeModule;
