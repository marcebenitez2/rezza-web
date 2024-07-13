import { AddCart } from "@/shared/components/AddCart/AddCart";
import { IProducts } from "@/shared/types/productsQueryTypes";

export const DescriptionProduct = ({ product }: { product: IProducts }) => {
  return (
    <section className="w-full">
      <h3 className="text-3xl">{product.title}</h3>
      {/* Descripcion en caso que haya */}

      {product.description ? (
        <p className="text-base">{product.description}</p>
      ) : null}

      {/* Precio */}
      <p className="text-lg font-bold">${product.price}</p>

      {/* Botones */}
      <AddCart product={product} />
    </section>
  );
};
