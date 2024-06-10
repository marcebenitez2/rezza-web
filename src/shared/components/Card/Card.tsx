"use client";
import { IProducts } from "@/shared/types/productsQueryTypes";
import "./style.css";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";

export const CardComponent = ({ data }: { data: IProducts }) => {
  const [count, setCount] = useState(1);
  const { getCurrentRoute } = useRouterHelper();
  const currentRoute = getCurrentRoute();

  const generateLink = () => {
    const category = data.attributes.category.data?.attributes.title;
    const slug = data.attributes.slug;
    return currentRoute?.name === "Home"
      ? `category/${category}/${slug}`
      : `${category}/${slug}`;
  };

  return (
    <article className="h-full w-full flex flex-col justify-between">
      <Link href={generateLink()} className="flex flex-col">
        <div
          className="w-full h-64 lg:h-80 rounded"
          style={{
            background: `url("${data.attributes.main_image.data?.attributes.url}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div>
          <p>{data.attributes.title}</p>
          <span>${data.attributes.price}</span>
        </div>
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <Button disabled={count === 1} className="w-full" onClick={() => setCount(count - 1)}>
            -
          </Button>
          <span className="w-full flex items-center justify-center">{count}</span>
          <Button className="w-full" onClick={() => setCount(count + 1)}>
            +
          </Button>
        </div>
        <Button>Agregar</Button>
      </div>
    </article>
  );
};
