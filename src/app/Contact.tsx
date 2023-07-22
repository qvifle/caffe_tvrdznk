"use client";
import React from "react";
import { second_font } from "./fonts";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/layout/Input";
import { useForm, SubmitHandler } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full h-[60vh] flex items-center justify-center bg-primary">
      <div className="container  flex justify-between items-center w-full h-[700px]]">
        <div className="flex flex-col items-start w-1/2 ">
          <div
            className={` mb-4 text-[84px] w-full text-left font-semibold text-dark leading-[90px]  ${second_font.className}`}
          >
            Как с нами связаться?
          </div>
          <ul className="flex w-full gap-4 justify-start mr-5">
            <li className="bg-dark rounded-2xl ">
              <Link
                href="tel:87055316564"
                target="_blank"
                className="text-dark p-2 flex gap-2"
              >
                <Image
                  src="/icons/telephone.svg"
                  width={22}
                  height={22}
                  alt="geo"
                />
                <div className="text-light">+7‒705‒531‒65‒64</div>
              </Link>
            </li>
            <li className="bg-light rounded-2xl ">
              <Link
                href="https://www.instagram.com/tvrd.znk/"
                target="_blank"
                className="text-dark p-2 flex gap-2"
              >
                <Image
                  src="/icons/instagram_dark.svg"
                  width={24}
                  height={24}
                  alt="time"
                />
                <div>tvrd.znk</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col  w-1/2 h-full items-center justify-center">
          <div
            className={`text-light text-[48px] leading-[54px] ${second_font.className} mb-4`}
          >
            Напиши нам!
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <input
              type="text"
              {...register("name", {
                required: true,
              })}
            />
            <input
              type="text"
              {...register("message", {
                required: true,
              })}
            />
            <button>Send!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
