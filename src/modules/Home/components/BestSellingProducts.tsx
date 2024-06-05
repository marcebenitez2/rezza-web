import { SliderProductsComponent } from "@/shared/components/SliderProducts/SliderProductsComponent";

export const BestSellingProducts = ({
  products,
}: {
  products: IProductsQuery[];
}) => {
  if (!products) {
    return null;
  }

  return (
    <section>
      <h2 className="text-4xl text-[#81638b] font-semibold">
        Productos mas vendidos
      </h2>
      <SliderProductsComponent items={products} />
    </section>
  );
};
