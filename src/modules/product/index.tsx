import { getProductBySlug } from "@/services/strapi/querys/productsQuery";
import { PreviewProduct } from "./components/PreviewProduct";
import { DescriptionProduct } from "./components/DescriptionProduct";
import { BreadcrumbComponent } from "./components/Breadcrumb";

const loadModule = async (product: string) => {
  const productData = await getProductBySlug(product);

  return { productData };
};

const ProductModule = async ({ product }: { product: string }) => {
  const { productData } = await loadModule(product);

  return (
    <main className="flex flex-col px-2 py-4 items-center gap-6">
      <BreadcrumbComponent />
      <div className="flex md:flex-row flex-col gap-4 max-w-6xl">
        <PreviewProduct product={productData} />
        <DescriptionProduct product={productData} />
      </div>
    </main>
  );
};

export default ProductModule;
