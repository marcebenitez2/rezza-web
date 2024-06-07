import { getProductsByCategory } from "@/services/strapi/querys/productsQuery";

const loadModule = async (category: string) => {
  const products = await getProductsByCategory(category);

  return { products };
};

export const CategoryModule = async ({ params }: { params: string }) => {
  const { products } = await loadModule(params);

  console.log(products);

  return <main>asd</main>;
};
