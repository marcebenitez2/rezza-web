import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FramerComponent } from "@/shared/components/framerMotion/FramerComponent";
import { IBanners } from "@/shared/types/bannersQueryTypes";
import Image from "next/image";

export const SliderBanner = ({ banners }: { banners: IBanners[] }) => {

  // En caso que no haya banners, no se muestra nada

  if (banners.length === 0) {
    return null;
  }

  // En caso que haya un solo banner, se muestra solo ese banner
  if (banners.length === 1) {
    return (
      <FramerComponent
        animationInitial={{ opacity: 0 }}
        animationAnimate={{ opacity: 1 }}
      >
        <div>
          <Image
            src={banners[0].banner}
            alt={banners[0].alt}
            width={1920}
            height={300}
            className="hidden lg:block object-cover"
          />
          <Image
            src={banners[0].responsive_banner}
            alt={banners[0].alt}
            width={1920}
            height={1000}
            className="block lg:hidden object-cover"
          />
        </div>
      </FramerComponent>
    );
  }

  // En caso que haya mas de un banner se hace un carroutsel

  return (
    <FramerComponent
      animationInitial={{ opacity: 0 }}
      animationAnimate={{ opacity: 1 }}
    >
      <Carousel className={`${banners.length > 1 ? "" : "hidden"}`}>
        <CarouselContent className="h-full">
          {banners.map((banner) => {
            const imgUrl = banner.banner;

            const responsiveImgUrl =
              banner.responsive_banner;

            return (
              <CarouselItem key={banner.id}>
                <Image
                  src={responsiveImgUrl}
                  alt={banner.alt}
                  width={1920}
                  height={1000}
                  className="lg:hidden object-cover"
                />
                <Image
                  src={imgUrl}
                  alt={banner.alt}
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
