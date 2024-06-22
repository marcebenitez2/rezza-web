"use client";

import { Button } from "@/components/ui/button";
import { CartItem, cartStore } from "@/shared/stores/CartStore";
import { ColumnDef } from "@tanstack/react-table";
import { FaTrash } from "react-icons/fa";

export const columns: ColumnDef<CartItem>[] = [
  {
    accessorKey: "main_image",
    header: "Imagen",
    cell: ({ row }) => {
      return <img src={row.getValue("main_image")} style={{ width: "50px" }} />;
    },
  },
  {
    accessorKey: "title",
    header: "Producto",
  },
  {
    accessorKey: "cant",
    header: "Cantidad",
  },
  {
    accessorKey: "price",
    header: "Precio",
    cell: ({ row }) => {
      return <span>$ {row.getValue("price")} c/u</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const title = row.getValue<string>("title");
      const { increaseQuantity, decreaseQuantity, removeItem } = cartStore();

      return (
        <div className=" gap-1 flex">
          <Button onClick={() => decreaseQuantity(title)}>-</Button>
          <Button onClick={() => increaseQuantity(title)}>+</Button>
          <Button onClick={() => removeItem(title)}>
            <FaTrash />
          </Button>
        </div>
      );
    },
  },
];
