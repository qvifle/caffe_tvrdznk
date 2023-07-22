import React from "react";
import CartItem from "./CartItem";
import useCategories from "@/store/categories";
import { second_font } from "@/app/fonts";

const Cart = () => {
  const cart = useCategories((state) => state.cart);
  return (
    <div className="flex justify-center p-9 w-[600px] min-h-screen  h-auto bg-light ">
      <div className="flex flex-col items-center  p-9 w-[600px] h-full bg-light ">
        <h3
          className={`mb-5 text-[64px] leading-[72px] ${second_font.className} text-center font-semibold underline decoration-[2px] underline-offset-[8px] `}
        >
          Заказ
        </h3>

        {cart.map((e: any, key: string) => {
          return (
            <CartItem
              key={key}
              count={e.count}
              title={e.attributes.title}
              description={e.attributes.description}
              price={e.attributes.price}
              image={e.attributes.image.data.attributes.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
