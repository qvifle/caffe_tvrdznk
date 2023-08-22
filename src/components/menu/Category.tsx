import Dish from "./Dish";
import useCategories from "@/store/categories";

export interface IDish {
  title: string;
  description: string;
  image: string;
  price: number;
}

const Category = ({ title, name }: { title: string; name: string }) => {
  const data = useCategories((state) => state.categories);

  const dishes: IDish[] = [];

  data.map((e: any) => {
    if (e.attributes.name == name) {
      e.attributes.dishes.data.map((e: any) => {
        dishes.push(e);
      });
    }
  });

  return (
    <div className="mb-[64px]">
      <div className="mb-4">
        <h3
          className="text-[48px] leading-[48px] max-[700px]:text-center font-semibold w-full scroll-item px-4"
          id={name}
        >
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap justify-start gap-[69px] ">
        {dishes.map((e: any, key: number) => {
          return (
            <Dish
              key={key}
              category={name}
              title={e.attributes.title}
              description={e.attributes.description}
              image={e.attributes.image.data.attributes.url}
              price={e.attributes.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
