import ProductModule from "@/modules/product";
import {
  getProductBySlug,
  getProductsByCategory,
} from "@/services/firebase/firestore/firestore";
import { IProducts } from "@/shared/types/productsQueryTypes";

const loadModule = async (product: string) => {
  const productData = (await getProductBySlug(product)) as IProducts;

  const category = productData?.category;

  const productsCategory = (await getProductsByCategory(
    category
  )) as IProducts[];

  return { productData, productsCategory };
};

export default async function Product({
  params,
}: {
  params: { product: string };
}) {
  const { productData, productsCategory } = await loadModule(params.product);

  const filteredProductsCategory = productsCategory.filter(
    (item: IProducts) => item.id !== productData.id
  );

  return (
    <ProductModule
      product={productData}
      filteredProductsCategory={filteredProductsCategory}
    />
  );
}
