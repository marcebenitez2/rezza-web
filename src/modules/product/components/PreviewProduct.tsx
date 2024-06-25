"use client";
import { DAT, IProducts } from "@/shared/types/productsQueryTypes";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const PreviewProduct = ({ product }: { product: IProducts }) => {
  const { data: images } = product.attributes.images;

  const [imageSelected, setImageSelected] = useState(
    product.attributes.main_image.data?.attributes.url
  );

  return (
    <section className="flex flex-col-reverse w-full gap-4 md:flex-row justify-end lg:pr-16">
      <Slider images={images} setSelected={setImageSelected} />

      <div className="w-24  flex flex-col gap-2">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.attributes.url}
              className="rounded cursor-pointer max-h-24 h-full"
              onMouseEnter={() => setImageSelected(image.attributes.url)}
            />
          );
        })}
      </div>
      <img
        src={imageSelected}
        alt={product.attributes.title}
        className="h-96 object-contain md:w-3/4 md:object-cover md:h-[32rem]"
      />
    </section>
  );
};

const Slider = ({
  images,
  setSelected,
}: {
  images: DAT[];
  setSelected: (url: string) => void;
}) => {
  return (
    <Carousel className="md:hidden">
      <CarouselContent>
        {images.map((image, index) => {
          return (
            <CarouselItem
              key={index}
              className="basis-1/5"
              onClick={() => setSelected(image.attributes.url)}
            >
              <img
                src={image.attributes.url}
                className="w-16 rounded object-contain"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
