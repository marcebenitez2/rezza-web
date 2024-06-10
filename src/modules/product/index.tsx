import { getProductBySlug } from "@/services/strapi/querys/productsQuery";

const loadModule = async (product: string) => {
  const productData = await getProductBySlug(product);

  return { productData };
};

const ProductModule = async ({ product }: { product: string }) => {
  const { productData } = await loadModule(product);

  console.log(productData);

  return <>{product}</>;
};

export default ProductModule;
