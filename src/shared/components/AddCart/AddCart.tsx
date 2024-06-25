import { Button } from "@/components/ui/button";
import { cartStore } from "@/shared/stores/CartStore";
import { IProducts } from "@/shared/types/productsQueryTypes";
import { useState } from "react";
import { toast } from "react-toastify";

export const AddCart = ({ product }: { product: IProducts }) => {
  const [count, setCount] = useState(1);
  const { addToCart, cart } = cartStore();

  const addCart = () => {
    const item = {
      title: product.attributes.title,
      cant: count,
      price: product.attributes.price,
      main_image: product.attributes.main_image.data.attributes.url,
    };
    addToCart(item);

    toast.success("Producto agregado al carrito");
  };

  return (
    <div className="flex flex-col gap-2 max-w-64 m-auto w-full">
      <div className="flex justify-between">
        <Button
          disabled={count === 1}
          className="w-full"
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
        <span className="w-full flex items-center justify-center text-primary">
          {count}
        </span>
        <Button className="w-full" onClick={() => setCount(count + 1)}>
          +
        </Button>
      </div>
      <Button onClick={addCart}>Agregar al carrito</Button>
    </div>
  );
};
