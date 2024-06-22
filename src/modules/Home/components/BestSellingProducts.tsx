import { FramerComponent } from "@/shared/components/framerMotion/FramerComponent";
import { SliderProductsComponent } from "@/shared/components/SliderProducts/SliderProductsComponent";
import { IProducts } from "@/shared/types/productsQueryTypes";

export const BestSellingProducts = ({
  products,
}: {
  products: IProducts[];
}) => {
  if (!products) {
    return null;
  }

  return (
    <FramerComponent
      animationInitial={{ opacity: 0 }}
      animationAnimate={{ opacity: 1 }}
    >
      <h2 className="text-2xl text-[#81638b] font-semibold mb-4  text-center xl:text-start lg:text-4xl">
        Productos mas vendidos
      </h2>
      <SliderProductsComponent items={products} />
    </FramerComponent>
  );
};
