import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FramerComponent } from "@/shared/components/framerMotion/FramerComponent";
import { BannersData } from "@/shared/types/bannersQueryTypes";
import Image from "next/image";

export const SliderBanner = ({ banners }: { banners: BannersData[] }) => {
  if (!banners) {
    return null;
  }

  return (
    <FramerComponent
      animationInitial={{ opacity: 0 }}
      animationAnimate={{ opacity: 1 }}
    >
      <Carousel>
        <CarouselContent className="h-full">
          {banners.map((banner) => {
            const imgUrl = banner.attributes.banner.data[0].attributes.url;

            const responsiveImgUrl =
              banner.attributes.responsive_banner.data[0].attributes.url;

            return (
              <CarouselItem key={banner.id}>
                <Image
                  src={responsiveImgUrl}
                  alt={banner.attributes.title}
                  width={1920}
                  height={1000}
                  className="lg:hidden object-cover"
                />
                <Image
                  src={imgUrl}
                  alt={banner.attributes.title}
                  width={1920}
                  height={1000}
                  className="hidden lg:block"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </FramerComponent>
  );
};
