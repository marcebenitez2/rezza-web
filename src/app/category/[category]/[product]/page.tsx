import ProductModule from "@/modules/product";
import {
  getProductBySlug,
  getProductsByCategory,
} from "@/services/strapi/querys/productsQuery";
import { IProducts } from "@/shared/types/productsQueryTypes";

const loadModule = async (product: string) => {

  const productData = await getProductBySlug(product);

  const { title } = productData.attributes.category.data.attributes;

  const productsCategory = await getProductsByCategory(title);

  return { productData, productsCategory };
};

export default async function Product({params}: {params: { product: string }}) {
  const { productData, productsCategory } = await loadModule(params.product);

  const filteredProductsCategory = productsCategory.filter(
    (item: IProducts) => item.id !== productData.id
  );

  return <ProductModule product={productData} filteredProductsCategory={filteredProductsCategory}/>;
}
