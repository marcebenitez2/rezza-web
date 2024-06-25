"use client";

import { AddCart } from "@/shared/components/AddCart/AddCart";
import { IProducts } from "@/shared/types/productsQueryTypes";
import { useState } from "react";

export const DescriptionProduct = ({ product }: { product: IProducts }) => {
  const [count, setCount] = useState(1);
  return (
    <section className="w-full">
      <h3 className="text-3xl">{product.attributes.title}</h3>
      {/* Descripcion en caso que haya */}

      {product.attributes.description ? (
        <p className="text-base">{product.attributes.description}</p>
      ) : null}

      {/* Precio */}
      <p className="text-lg font-bold">${product.attributes.price}</p>

      {/* Botones */}
      <AddCart product={product} />
    </section>
  );
};
