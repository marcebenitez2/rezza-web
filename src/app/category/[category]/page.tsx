import { CategoryModule } from "@/modules/category";
import { getProductsByCategory } from "@/services/strapi/querys/productsQuery";

const loadModule = async (category: string) => {
  const products = await getProductsByCategory(category);
  return { products };
};

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const { products } = await loadModule(params.category);
  return <CategoryModule products={products} category={params.category} />;
}
