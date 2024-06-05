import { Category } from "@/shared/types/categoriesQueryTypes";

export const CategoryCards = ({ categories }: { categories: Category[] }) => {
  if (!categories) {
    return null;
  }

  return (
    <section className="w-full flex gap-4 justify-center">
      {categories.map((element, index) => (
        <Card
          name={element.attributes.title}
          image={element.attributes.image.data[0].attributes.url}
          key={index}
        />
      ))}
    </section>
  );
};

const Card = ({ name, image }: { name: string; image: string }) => {
  return (
    <article
      className="category-circle shadow"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}
    >
    </article>
  );
};
