"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import useCategories from "@/store/categories";

interface IDish {
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

const Dish = ({ title, description, image, price, category }: IDish) => {
  const url = "http://localhost:1337";

  const addToCart = useCategories((state) => state.addToCart);
  const deleteDish = useCategories((state) => state.deleteDish);
  const cart = useCategories((state) => state.cart);

  const [showFull, setShowFull] = useState(true);
  const [shortDescription, setShortDesription] = useState("");
  const [isAdded, setAdded] = useState(false);

  useEffect(() => {
    if (description.length > 40) {
      setShowFull(false);
      setShortDesription(description.substring(0, 30));
    }
  }, []);

  useEffect(() => {
    if (cart.some((item: any) => item.attributes.title == title)) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  }, [cart]);

  return (
    <Suspense fallback={<p>Hello</p>}>
      <div className="max-w-[300px] max-[666px]:mx-auto border-[1px] border-gray-400 rounded-xl p-2 flex flex-col justify-between ">
        <div className="relative w-[280px] h-[250px] rounded-xl mx-auto mb-4">
          <Image
            src={url + image}
            alt="dish"
            fill={true}
            className="rounded-xl"
          />
        </div>
        <h5 className="text-[36px] mb-2">{title}</h5>
        <p className="text-[16px] leading-5 opacity-70 mb-2">
          {showFull ? (
            description
          ) : (
            <>
              {shortDescription}
              <span
                className="cursor-pointer"
                onClick={() => setShowFull(true)}
              >
                ...
              </span>
            </>
          )}
        </p>
        <div className="flex justify-between items-center text-">
          <div className="text-2xl p-2 w-1/2">
            {price} <span className="text-[16px]">₸</span>
          </div>
          {isAdded ? (
            <button
              onClick={() => {
                deleteDish(title);
              }}
              className="button_dish w-1/2"
            >
              Убрать
            </button>
          ) : (
            <button
              onClick={() => {
                addToCart(category, title);
              }}
              className="button_dish w-1/2"
            >
              В корзину
            </button>
          )}
          {/* <button
          onClick={() => {
            addToCart(category, title);
            setAdded(!isAdded);
            console.log(cart)
          }}
          className="button_dish w-1/2"
        >
          В корзину
        </button> */}
        </div>
      </div>
    </Suspense>
  );
};

export default Dish;
