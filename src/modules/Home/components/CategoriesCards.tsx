import { FramerComponent } from "@/shared/components/framerMotion/FramerComponent";
import { ICategory } from "@/shared/types/categoriesQueryTypes";
import { Link } from "next-view-transitions";

export const CategoryCards = ({ categories }: { categories: ICategory[] }) => {
  if (!categories) {
    return null;
  }

  return (
    <FramerComponent
      style="w-full grid grid-cols-5 gap-1 lg:gap-4"
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
      className="category-circle shadow-card"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <span className="card-name">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>
    </Link>
  );
};
