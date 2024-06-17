import {
  getProductBySlug,
  getProductsByCategory,
} from "@/services/strapi/querys/productsQuery";
import { PreviewProduct } from "./components/PreviewProduct";
import { DescriptionProduct } from "./components/DescriptionProduct";
import { BreadcrumbComponent } from "./components/Breadcrumb";
import { SliderProductsComponent } from "@/shared/components/SliderProducts/SliderProductsComponent";
import { IProducts } from "@/shared/types/productsQueryTypes";

const loadModule = async (product: string) => {
  const productData = await getProductBySlug(product);

  const { title } = productData.attributes.category.data.attributes;

  const productsCategory = await getProductsByCategory(title);

  return { productData, productsCategory };
};

const ProductModule = async ({ product }: { product: string }) => {
  const { productData, productsCategory } = await loadModule(product);

  const filteredProductsCategory = productsCategory.filter(
    (item: IProducts) => item.id !== productData.id
  );

  return (
    <main className="flex flex-col py-8 items-center gap-10 px-2 lg:px-36">
      <BreadcrumbComponent />
      <div className="flex md:flex-row flex-col gap-4 max-w-6xl">
        <PreviewProduct product={productData} />
        <DescriptionProduct product={productData} />
      </div>
      <div className="flex flex-col w-full">
        <h2 className="text-2xl text-[#81638b] font-semibold mb-4 text-center xl:text-start lg:text-4xl">
          Productos relacionados
        </h2>
        <SliderProductsComponent items={filteredProductsCategory} />
      </div>
    </main>
  );
};

export default ProductModule;
