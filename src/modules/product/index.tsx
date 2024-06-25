import { PreviewProduct } from "./components/PreviewProduct";
import { DescriptionProduct } from "./components/DescriptionProduct";
import { BreadcrumbComponent } from "./components/Breadcrumb";
import { SliderProductsComponent } from "@/shared/components/SliderProducts/SliderProductsComponent";
import { IProducts } from "@/shared/types/productsQueryTypes";

const ProductModule = async ({
  product,
  filteredProductsCategory,
}: {
  product: IProducts;
  filteredProductsCategory: IProducts[];
}) => {
  return (
    <main className="flex flex-col py-8 items-center gap-10 px-2 lg:px-36">
      <BreadcrumbComponent />
      <div className="flex md:flex-row flex-col gap-4  max-w-6xl w-full">
        <PreviewProduct product={product} />
        <DescriptionProduct product={product} />
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
