import { FramerComponent } from "@/shared/components/framerMotion/FramerComponent";
import { ICategory } from "@/shared/types/categoriesQueryTypes";
import { Link } from "next-view-transitions";

export const CategoryCards = ({ categories }: { categories: ICategory[] }) => {
  if (!categories) {
    return null;
  }

  return (
    <FramerComponent
      style="w-full flex gap-4 justify-center"
      animationInitial={{ opacity: 0 }}
      animationAnimate={{ opacity: 1 }}
    >
      {categories.map((element, index) => (
        <Card
          name={element.attributes.title}
          image={element.attributes.image.data[0].attributes.url}
          key={index}
        />
      ))}
    </FramerComponent>
  );
};

const Card = ({ name, image }: { name: string; image: string }) => {
  return (
    <Link
      href={`/category/${name}`}
      className="category-circle shadow"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Link>
  );
};