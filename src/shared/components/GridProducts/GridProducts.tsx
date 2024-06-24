import { IProducts } from "@/shared/types/productsQueryTypes";
import { CardComponent } from "../Card/Card";

export const GridProducts = ({ products }: { products: IProducts[] }) => {

  if (products.length === 0) {
    return <p className="text-center">No hay productos en esta categoria</p>;
  }


  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 lg:gap-6">
      {products.map((product, index) => {
        return <CardComponent key={index} data={product} />;
      })}
    </div>
  );
};
