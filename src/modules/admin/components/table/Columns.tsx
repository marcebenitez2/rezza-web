"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteDialog } from "../DeleteDialog";
import { IProducts } from "@/shared/types/productsQueryTypes";
import { ICategory } from "@/shared/types/categoriesQueryTypes";
import { IBanners } from "@/shared/types/bannersQueryTypes";
import { ProductDialog } from "../ProductDialog";
import { CategoryDialog } from "../CategoryDialog";
import { BannerDialog } from "../BannerDialog";

export const columnsProducts: ColumnDef<IProducts>[] = [
  {
    accessorKey: "main_image",
    header: "Imagen",
    cell: ({ row }) => {
      return <img src={row.getValue("main_image")} style={{ width: "50px" }} />;
    },
  },
  {
    header: "Titulo",
    accessorKey: "title",
  },
  {
    header: "Categoria",
    accessorKey: "category",
  },
  {
    accessorKey: "price",
    header: "Precio",
    cell: ({ row }) => {
      return <span>$ {row.getValue("price")} c/u</span>;
    },
  },
  {
    header: "Oferta",
    accessorKey: "offer",
    cell: ({ row }) => {
      return row.original.offer || "vacio";
    },
  },
  {
    header: "Descripción",
    accessorKey: "description",
    cell: ({ row }) => {
      return row.original.description || "vacio";
    },
  },
  {
    header: "Mas vendido",
    accessorKey: "best_selling",
  },
  {
    header: "Destacado",
    accessorKey: "featured_product",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className=" gap-1 flex">
          <ProductDialog collectionName="products" product={row.original} />
          <DeleteDialog collectionName="products" id={row.original.id} />
        </div>
      );
    },
  },
];

export const columnsCategories: ColumnDef<ICategory>[] = [
  {
    accessorKey: "image",
    header: "Imagen",
    cell: ({ row }) => {
      return <img src={row.getValue("image")} style={{ width: "50px" }} />;
    },
  },
  {
    header: "Titulo",
    accessorKey: "title",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className=" gap-1 flex">
          <CategoryDialog collectionName="categories" category={row.original} />
          <DeleteDialog id={row.original.id} collectionName="categories" />
        </div>
      );
    },
  },
];

export const columnsBanners: ColumnDef<IBanners>[] = [
  {
    accessorKey: "banner",
    header: "Banner",
    cell: ({ row }) => {
      return <img src={row.getValue("banner")} style={{ width: "50px" }} />;
    },
  },
  {
    header: "Alt",
    accessorKey: "alt",
  },
  {
    header: "Banner Responsivo",
    accessorKey: "responsive_banner",
    cell: ({ row }) => {
      return (
        <img
          src={row.getValue("responsive_banner")}
          style={{ width: "50px" }}
        />
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className=" gap-1 flex">
          <BannerDialog collectionName="banners" banner={row.original} />
          <DeleteDialog id={row.original.id} collectionName="banners" />
        </div>
      );
    },
  },
];
