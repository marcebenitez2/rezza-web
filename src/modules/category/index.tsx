import { GridProducts } from "@/shared/components/GridProducts/GridProducts";
import { IProducts } from "@/shared/types/productsQueryTypes";

export const CategoryModule = ({
  products,
  category,
}: {
  products: IProducts[];
  category: string;
}) => {
  return (
    <main className="px-2 lg:px-36 flex flex-col mt-2 h-full lg:mt-4">
      <h3 className="text-2xl text-[#81638b] font-semibold mb-4 text-center lg:text-4xl">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h3>
      <GridProducts products={products} />
    </main>
  );
};
