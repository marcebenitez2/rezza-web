import { cartStore } from "@/shared/stores/CartStore";
import Link from "next/link";
import { IoCart } from "react-icons/io5";

export const CartIcon = () => {
  const { getTotalItems } = cartStore();
  const totalItems = getTotalItems();

  return (
    <Link className="flex flex-1 justify-end" href={'/cart'}>
      <IoCart className="text-4xl lg:text-5xl" color="#81638b" />
      <span className="absolute px-2 bg-white rounded-full translate-x-4">
        {totalItems}
      </span>
    </Link>
  );
};