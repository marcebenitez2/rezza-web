import { SliderProductsComponent } from "@/shared/components/SliderProducts/SliderProductsComponent";

export const FeaturedProducts = ({
  featuredProducts,
}: {
  featuredProducts: IProductsQuery[];
}) => {
  if (!featuredProducts) return null;

  return (
    <section>
      <h2 className="text-4xl text-[#81638b] font-semibold">
        Productos destacados
      </h2>
      <SliderProductsComponent items={featuredProducts} />
    </section>
  );
};
