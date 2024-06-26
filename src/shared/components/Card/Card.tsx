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

    if (currentRoute?.name === "Home") {
      return `category/${category}/${slug}`;
    }

    if (currentRoute?.name === "Product") {
      return `${slug}`;
    }

    if (currentRoute?.name === "Category") {
      return `/category/${category}/${slug}`;
    }

    return "";
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

          {/* En caso de haber algo en el campo offer hay que tachar el precio y mostrar el offer , en caso que no haya nada en offer mostrar price*/}

          {data.attributes.offer ? (
            <div className="flex items-center gap-4">
              <p className="line-through">${data.attributes.price}</p>
              <p className="text-2xl">${data.attributes.offer}</p>
            </div>
          ) : (
            <p>${data.attributes.price}</p>
          )}
        </div>
      </Link>
      <AddCart product={data} />
    </article>
  );
};
