import { getProductBySlug } from "@/services/strapi/querys/productsQuery";
import { PreviewProduct } from "./components/PreviewProduct";
import { DescriptionProduct } from "./components/DescriptionProduct";

const loadModule = async (product: string) => {
  const productData = await getProductBySlug(product);

  return { productData };
};

const ProductModule = async ({ product }: { product: string }) => {
  const { productData } = await loadModule(product);


  return (
    <main className="px-2 lg:px-36 flex flex-col mt-2 h-full lg:mt-4">
      <div className="flex flex-col py-6 gap-4 md:flex-row">
        <PreviewProduct product={productData} /> 
        <DescriptionProduct product={productData} />
      </div>
    </main>
  );
};

export default ProductModule;
