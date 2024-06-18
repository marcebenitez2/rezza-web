import { useEffect, useState } from 'react';
import { cartStore } from "@/shared/stores/CartStore";
import { Link } from "next-view-transitions";
import { IoCart } from "react-icons/io5";

export const CartIcon = () => {
  const { getTotalItems } = cartStore();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(getTotalItems());
  }, [getTotalItems]);

  return (
    <Link className="flex flex-1 justify-end" href={"/cart"}>
      <IoCart className="text-4xl lg:text-5xl" color="#81638b" />
      {totalItems === 0 ? null : (
        <span className="absolute px-2 bg-white rounded-full translate-x-1 -translate-y-2">
          {totalItems}
        </span>
      )}
    </Link>
  );
};
