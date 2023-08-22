"use client";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import useCategories from "@/store/categories";
import { second_font } from "../../fonts/fonts";
import Input from "../contact/Input";
import TextArea2 from "../contact/TextArea2";
import Select from "@/ui/inputs/Select";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import sendToTelegram from "@/utils/functions/sendTotelegram";
import Image from "next/image";
import useNavOpen from "@/store/navOpen";
import { toast } from "react-toastify";

const Cart = () => {
  const setOpen = useNavOpen((state) => state.toggle);
  const cart = useCategories((state) => state.cart);
  const clearCart = useCategories((state) => state.clearCart);

  const { register, handleSubmit } = useForm();

  const [fullPrice, setFullPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    cart.map((element: any, key: any) => {
      price += element.count * element.attributes.price;
      setFullPrice(price);
    });
  }, [cart]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const message = `Новый Заказ!
Позиции:${cart.map((e: any) => {
      return `\n    ${e.attributes.title}: ${e.count.toString()}шт`;
    })}
Данные Заказчика:
    Имя: ${data.name}
    Пожелания: ${data.wishes}
    Номер: ${data.tel}
Адрес Доставки:
    Улица: ${data.address}
    Подъезд: ${data.entrance}
    Квартира: ${data.apartment}
Данные о Заказе:
    Способ Оплаты: ${data.payment_type}
    Итого: ${fullPrice}
    `;

    sendToTelegram(message);
    setOpen();
    clearCart();
    toast.success("Ваш заказ успешно отправлен!", {
      draggable: true,
      pauseOnHover: true,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  };

  return (
    <div className="flex justify-center p-9 max-[700px]:p-4 w-[600px] max-[700px]:w-screen h-screen overflow-y-auto scrollbar-hide overflow-x-hidden bg-light ">
      <div className="flex flex-col items-center w-full h-full bg-light ">
        <div className="flex w-full max-[700px]:justify-between justify-center items-center mb-5">
          <button onClick={setOpen}>
            <Image
              src="/icons/arrow-left.svg"
              alt="back"
              width={16}
              height={16}
            />
          </button>
          <h3
            className={`text-[64px] leading-[72px] max-[500px]:hidden  ${second_font.className} text-center font-semibold underline decoration-[2px] underline-offset-[8px] `}
          >
            Заказ
          </h3>
        </div>

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

        <form className="w-full mr-auto py-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full justify-center max-[500px]:justify-between">
            <h3
              className={`mb-6 text-[48px] leading-[52px] max-[500px]:text-[36px]  ${second_font.className} text-center font-semibold underline decoration-[2px] underline-offset-[8px] `}
            >
              Детали Заказа
            </h3>
          </div>
          <Input type="text" register={register} name="name">
            Имя
          </Input>
          <Input type="tel" register={register} name="tel">
            Телефон
          </Input>
          <Input type="text" register={register} name="address">
            Адресс
          </Input>
          <div className="flex gap-4">
            <Input type="text" register={register} name="entrance">
              Подъезд
            </Input>
            <Input type="text" register={register} name="apartment">
              Квартира
            </Input>
          </div>
          <TextArea2 register={register} name="wishes">
            Пожелания
          </TextArea2>
          <Select register={register} name="payment_type" />
          <div className="mt-6 text-lg">
            К оплате:{" "}
            <span className="text-xl font-semibold">{fullPrice} тг</span>
          </div>
          <button
            type="submit"
            className="w-full duration-100 bg-dark text-light hover:bg-semiDark active:bg-light active:text-dark py-2 rounded-xl"
          >
            Оформить заказ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
