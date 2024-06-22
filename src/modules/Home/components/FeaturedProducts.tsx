import { FramerComponent } from "@/shared/components/framerMotion/FramerComponent";
import { SliderProductsComponent } from "@/shared/components/SliderProducts/SliderProductsComponent";
import { IProducts } from "@/shared/types/productsQueryTypes";

export const FeaturedProducts = ({
  featuredProducts,
}: {
  featuredProducts: IProducts[];
}) => {
  if (!featuredProducts) return null;

  return (
    <FramerComponent
      animationInitial={{ opacity: 0 }}
      animationAnimate={{ opacity: 1 }}
    >
      <h2 className="text-2xl text-[#81638b] font-semibold mb-4 text-center xl:text-start lg:text-4xl">
        Productos destacados
      </h2>
      <SliderProductsComponent items={featuredProducts} />
    </FramerComponent>
  );
};
