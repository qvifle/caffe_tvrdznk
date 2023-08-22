import React from "react";
import Image from "next/image";
import useCategories from "@/store/categories";

const CartItem = ({ title, description, image, price, count }: any) => {
  const url = "http://localhost:1337";
  const decreaseCount = useCategories((state) => state.decreaseCount);
  const increaseCount = useCategories((state) => state.increaseCount);
  const deleteDish = useCategories((state) => state.deleteDish);

  return (
    <div className="border-[1px] mb-2 border-gray-400 rounded-xl p-4 w-full min-h-[200px] max-[500px]:min-h-min flex gap-2 justify-between">
      <div className="w-[370px] flex flex-col items-center justify-between max-[500px]:gap-1">
        <div className="flex flex-col w-full">
          <div className="flex items-center w-full">
            <div className="flex items-center w-full bg-dark rounded-xl border border-dark mb-1">
              <div className="text-[24px] text-light w-2/3 p-2 max-[500px]:text-[16px] max-[500px]:w-3/5">
                {title}
              </div>
              <div className="text-[20px] bg-light  text-dark p-2 rounded-tr-[10px] rounded-br-[10px] max-[500px]:w-2/5 w-1/3 text-end">
                {price}
                <span className="text-[12px] max-[500px]:hidden">₸</span>
              </div>
            </div>
          </div>

          <p className="leading-5 max-[500px]:hidden">{description}</p>
        </div>

        <div className="flex justify-between items-center gap-2 border border-dark rounded-[18px] max-[500px]:w-full">
          <button
            onClick={() => decreaseCount(title)}
            className="bg-dark text-light rounded-l-2xl px-4 max-[500px]:px-7 py-[10px] text-[24px] hover:bg-semiDark active:bg-light active:text-dark duration-100"
          >
            -
          </button>
          <div className="text-[24px]">{count} шт</div>

          <button
            onClick={() => increaseCount(title)}
            className="bg-dark max-[500px]:px-7 text-light rounded-r-2xl px-4 py-[10px] text-[24px] hover:bg-semiDark active:bg-light active:text-dark duration-100"
          >
            +
          </button>
        </div>
      </div>
      <div className="relative w-[250px] max-[500px]:hidden">
        <Image
          src={url + image}
          alt={title}
          fill={true}
          className="rounded-xl"
        />
      </div>
      <button
        onClick={() => deleteDish(title)}
        className="bg-red-500 hover:bg-red-400 duration-100 px-2 rounded-lg"
      >
        <Image src="/icons/delete.svg" width={24} height={20} alt="del" />
      </button>
    </div>
  );
};

export default CartItem;
