import { getProductsByCategory } from "@/services/strapi/querys/productsQuery";
import { GridProducts } from "@/shared/components/GridProducts/GridProducts";

const loadModule = async (category: string) => {
  const products = await getProductsByCategory(category);
  return { products };
};

export const CategoryModule = async ({ params }: { params: string }) => {
  const { products } = await loadModule(params);

  console.log(products);

  return (
    <main className="px-2 lg:px-36 flex flex-col mt-2 h-full lg:mt-4">
      <h3 className="text-2xl text-[#81638b] font-semibold mb-4 text-center lg:text-4xl">
        {params.charAt(0).toUpperCase() + params.slice(1)}
      </h3>
      <GridProducts products={products} />
    </main>
  );
};
