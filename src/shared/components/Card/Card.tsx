"use client";
import { IProducts } from "@/shared/types/productsQueryTypes";
import "./style.css";
import { Link } from "next-view-transitions";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";
import { AddCart } from "../AddCart/AddCart";

export const CardComponent = ({ data }: { data: IProducts }) => {
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
    <article className="h-full w-full flex flex-col">
      <Link href={generateLink()} className="flex flex-col">
        <div
          className="w-full h-64 lg:h-80 rounded"
          style={{
            background: `url("${data.attributes.main_image.data?.attributes.url}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="h-20">
          <p>{data.attributes.title}</p>
          <span>${data.attributes.price}</span>
        </div>
      </Link>
      <AddCart product={data} />
    </article>
  );
};
