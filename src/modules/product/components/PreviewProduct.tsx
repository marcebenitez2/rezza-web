import { IProducts } from "@/shared/types/productsQueryTypes";

export const PreviewProduct = ({ product }: { product: IProducts }) => {
  return (
    <section className="flex flex-col-reverse w-full gap-4 md:flex-row justify-end lg:pr-16">
      <img
        src={product.main_image}
        alt={product.title}
        className="h-96 object-contain md:w-3/4 md:object-cover md:h-[32rem]"
      />
    </section>
  );
};
