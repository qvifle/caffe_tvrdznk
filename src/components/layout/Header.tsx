"use client";
import React, { useEffect, useState } from "react";
import { second_font } from "@/app/fonts";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import useCategories from "@/store/categories";
import CartItem from "../cart/CartItem";
import Cart from "../cart/Cart";
import EmptyCart from "../cart/EmptyCart";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarColor, setNavbarColor] = useState("#00000037");

  const cart = useCategories((state) => state.cart);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos == 0) {
        setNavbarColor("#00000037"); // Измените на второй цвет
      } else {
        setNavbarColor("#E5E5E5"); // Измените на первый цвет
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Очистка слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={` py-3 fixed   w-full top-0 z-10 duration-100`}
      style={{ backgroundColor: navbarColor }}
    >
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className={` text-2xl`}
          style={{ color: navbarColor == "#00000037" ? "#E5E5E5" : "#292929" }}
        >
          Твердый Знак
        </Link>
        <ul className={` text-xl flex gap-4 items-center font-bold ml-[120px]`}>
          <Link
            href="/"
            className={`${
              navbarColor == "#00000037" ? "nav_li_dark" : "nav_li_light"
            }`}
          >
            Меню
          </Link>
          <Link
            href="/about"
            className={`${
              navbarColor == "#00000037" ? "nav_li_dark" : "nav_li_light"
            }`}
          >
            О нас
          </Link>
          <Link
            href="/privacy"
            className={`${
              navbarColor == "#00000037" ? "nav_li_dark" : "nav_li_light"
            }`}
          >
            Политика Конфиденциальности
          </Link>
        </ul>

        <button></button>

        <button className="" onClick={() => setOpen(!isOpen)}>
          <label htmlFor="my-drawer-4">
            {navbarColor == "#00000037" ? (
              <Image
                src="icons/cart_light.svg"
                alt="cart"
                width={30}
                height={30}
              />
            ) : (
              <Image
                src="icons/cart_dark.svg"
                alt="cart"
                width={30}
                height={30}
              />
            )}
          </label>
        </button>
        {/*  */}
        <div
          onClick={() => setOpen(false)}
          className={`${
            isOpen ? "block" : "hidden"
          } duration-100 bg-[#0000004d]  absolute top-0 left-0 w-screen h-screen`}
        ></div>
        <div
          className={` ${
            isOpen ? "right-0" : "right-[-600px]"
          } h-screen w-[600px] absolute bg-light z-2 duration-300 top-0`}
        >
          {cart.length == 0 ? <EmptyCart /> : <Cart />}
        </div>
      </div>
    </header>
  );
};

export default Header;
