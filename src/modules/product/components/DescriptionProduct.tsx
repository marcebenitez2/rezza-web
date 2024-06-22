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
      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti
        atque molestiae quas ullam ea dignissimos recusandae ad fugit vero
        quibusdam, voluptatum ipsam illo vel dolores nesciunt aliquid dolorem
        id.
      </p>

      {/* Precio */}
      <p className="text-lg font-bold">${product.attributes.price}</p>

      {/* Botones */}
      <AddCart product={product} />
    </section>
  );
};
