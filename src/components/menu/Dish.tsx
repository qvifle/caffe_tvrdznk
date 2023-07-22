import React, { useEffect } from "react";
import { IDish } from "./Category";
import Image from "next/image";
import useCategories from "@/store/categories";

const Dish = ({ title, description, image, price, category }: any) => {
  const url = "http://localhost:1337";

  const addToCart = useCategories(state => state.addToCart)
  const cart = useCategories(state => state.cart)

  

  return (
    <div className=" max-w-[300px] border-[1px] border-gray-400 rounded-xl p-2">
      <div className="relative w-[280px] h-[250px] rounded-xl mx-auto mb-4">
        <Image
          src={url + image}
          alt="dish"
          fill={true}
          className="rounded-xl"
        />
      </div>
      <h5 className="text-[36px] mb-2">{title}</h5>
      <div className="text-[16px] leading-5 opacity-70 mb-2">{description}</div>
      <div className="flex justify-between items-center text-">
        <div className="text-2xl p-2 w-1/2">
          {price} <span className="text-[16px]">₸</span>
        </div>
        <button onClick={() => {addToCart(category, title)}} className="button_dish w-1/2">В корзину</button>
      </div>
    </div>
  );
};

export default Dish;
