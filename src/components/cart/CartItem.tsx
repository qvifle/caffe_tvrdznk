"use client";
import React from "react";
import Image from "next/image";
import useCategories from "@/store/categories";

const CartItem = ({ title, image, price, count }: any) => {
  const url = "http://localhost:1337";

  const decreaseCount = useCategories((state) => state.decreaseCount);
  const increaseCount = useCategories((state) => state.increaseCount);
  const deleteDish = useCategories((state) => state.deleteDish);

  return (
    <div className="border-[1px] mb-2 border-gray-400 rounded-xl p-4 w-full min-h-[200px] flex gap-4 justify-between">
      <div className="w-[370px] flex flex-col items-center ">
        <div className="flex items-center w-full mb-[90px] gap-4">
            <button onClick={() => deleteDish(title)}>
                <Image src='/icons/x.svg' alt="x" width={24} height={24} />
            </button>
          <div className="flex items-center w-full bg-dark rounded-xl border border-dark ">
            <div className="text-[24px] text-light w-2/3 p-2">{title}</div>
            <div className="text-[20px] bg-light text-dark p-2 rounded-tr-[10px] rounded-br-[10px] w-1/3 text-end">
              {price} <span className="text-[12px]">₸</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <button
            onClick={() => increaseCount(title)}
            className="bg-dark text-light rounded-full px-4 py-[10px] text-[24px] hover:bg-light hover:text-dark duration-100"
          >
            +
          </button>
          <div className="text-[24px]">{count} шт</div>
          <button
            onClick={() => decreaseCount(title)}
            className="bg-dark text-light rounded-full px-4 py-[10px] text-[24px] hover:bg-light hover:text-dark duration-100"
          >
            -
          </button>
        </div>
      </div>
      <div className="relative w-[200px] ">
        <Image
          src={url + image}
          alt={title}
          fill={true}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default CartItem;
