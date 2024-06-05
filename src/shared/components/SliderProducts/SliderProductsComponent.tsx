import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CardComponent } from "../Card/Card";

export const SliderProductsComponent = ({ items }: { items: any[] }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-2 md:-ml-4 xl:-ml-8 2xl:-ml-10">
        {items.map((item, index) => (
          <CarouselItem
            className="basis-1/2 md:basis-1/3 pl-2 md:pl-4 xl:basis-1/5 xl:pl-8 2xl:basis-1/6 2xl:pl-10 h-80 py-4"
            key={index}
          >
            <CardComponent data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
