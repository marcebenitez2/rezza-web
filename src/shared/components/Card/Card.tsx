import { IProducts } from "@/shared/types/productsQueryTypes";
import "./style.css";
import { Link } from "next-view-transitions";

export const CardComponent = ({ data }: { data: IProducts }) => {
  return (
    <Link
      className="flex flex-col h-full"
      href={`/category/${data.attributes.category.data?.attributes.title}/${data.attributes.slug}`}
    >
      <div
        className="card"
        style={{
          backgroundImage: `url(${data.attributes.main_image.data?.attributes.url})`,
          backgroundSize: "cover",
        }}
      />
      <div className="px-2 h-16 text-[#81638b]">
        <h4 className="font-bold">{data.attributes.title}</h4>
        <span className="font-semibold">${data.attributes.price}</span>
      </div>
    </Link>
  );
};
