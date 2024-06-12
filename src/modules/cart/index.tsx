"use client";
import { cartStore } from "@/shared/stores/CartStore";
import { DataTable } from "./components/table/DataTable";
import { columns } from "./components/table/Columns";

export const CartModule = () => {
  const { cart } = cartStore();

  return (
    <main className="px-1 pt-4">
      <h2 className="text-2xl text-[#81638b] font-semibold mb-4 text-center lg:text-4xl">
        Mi carrito
      </h2>
      <div className="max-w-6xl max-h-96 m-auto">
        <DataTable columns={columns} data={cart} />
      </div>
    </main>
  );
};
