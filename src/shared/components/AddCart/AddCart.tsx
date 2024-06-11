import { Button } from "@/components/ui/button";
import { cartStore } from "@/shared/stores/CartStore";
import { IProducts } from "@/shared/types/productsQueryTypes";
import { useState, useEffect } from "react";

export const AddCart = ({ product }: { product: IProducts }) => {
  const [count, setCount] = useState(1);
  const { cart, addToCart } = cartStore();

  const addCart = () => {
    const item = {
      title: product.attributes.title,
      cant: count,
      precio: product.attributes.price,
    };
    addToCart(item);
  };

  useEffect(() => {
    console.log("Estado actual del carrito:", cart);
  }, [cart]);

  return (
    <div className="flex flex-col gap-2 max-w-64">
      <div className="flex justify-between">
        <Button
          disabled={count === 1}
          className="w-full"
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
        <span className="w-full flex items-center justify-center">{count}</span>
        <Button className="w-full" onClick={() => setCount(count + 1)}>
          +
        </Button>
      </div>
      <Button onClick={addCart}>Agregar al carrito</Button>
    </div>
  );
};
