import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CardComponent } from "../Card/Card";
import { IProducts } from "@/shared/types/productsQueryTypes";

export const SliderProductsComponent = ({ items }: { items: IProducts[] }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-2 md:-ml-4 xl:-ml-8">
        {items.map((item, index) => (
          <CarouselItem
            className="basis-1/2 md:basis-1/3 pl-2 md:pl-4 xl:basis-1/5 xl:pl-8 2xl:basis-1/6 h-96 pb-4"
            key={index}
          >
            <CardComponent data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
