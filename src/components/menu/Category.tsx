import React from "react";
import Dish from "./Dish";
import useCategories from "@/store/categories";

// const data: IDish[] = [
//   {
//     title: "Каша",
//     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, ad velit! Quos laudantium quidem officiis.",
//     image: "/images/dish.png",
//     price: 500,
//   },
//   {
//     title: "Каша",
//     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, ad velit! Quos laudantium quidem officiis.",
//     image: "/images/dish.png",
//     price: 500,
//   },
//   {
//     title: "Каша",
//     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, ad velit! Quos laudantium quidem officiis.",
//     image: "/images/dish.png",
//     price: 500,
//   },
//   {
//     title: "Каша",
//     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, ad velit! Quos laudantium quidem officiis.",
//     image: "/images/dish.png",
//     price: 500,
//   },
//   {
//     title: "Каша",
//     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, ad velit! Quos laudantium quidem officiis.",
//     image: "/images/dish.png",
//     price: 500,
//   },
// ];

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
    <div className="mb-[64px]" id={name}>
      <div className="mb-4">
        <h3 className="text-[48px] leading-[48px] font-semibold w-full">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap justify-start gap-[69px]">
        {/* grid grid-cols-4 mx-auto gap-y-[24px] */}
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
