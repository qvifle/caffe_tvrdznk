"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useCategories from "@/store/categories";
import Cart from "../cart/Cart";
import useNavOpen from "@/store/navOpen";
import { toast } from "react-toastify";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarColor, setNavbarColor] = useState("#00000037");
  const cart = useCategories((state) => state.cart);
  const isOpen = useNavOpen((state) => state.isOpen);
  const setOpen = useNavOpen((state) => state.toggle);

  const notify = () => {
    toast.error("Ваша корзина пуста", {
      draggable: true,
      pauseOnHover: true,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  };

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
      <div className="container flex items-center justify-between px-4">
        <Link
          href="/"
          className={` text-2xl`}
          style={{ color: navbarColor == "#00000037" ? "#E5E5E5" : "#292929" }}
        >
          Твердый Знак
        </Link>

        <ul
          className={` text-xl flex gap-4 items-center font-bold max-[700px]:hidden`}
        >
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

        <button
          className="relative"
          onClick={cart.length > 0 ? () => setOpen(!isOpen) : () => notify()}
        >
          {cart.length > 0 && (
            <div
              className={`bg-primary rounded-full text-xs w-4 h-4 absolute top-[-6px] right-[-10px]  `}
            >
              {cart.length}
            </div>
          )}
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
        </button>
        <div
          onClick={() => setOpen(false)}
          className={`${
            isOpen ? "block" : "hidden"
          } duration-100 bg-[#0000004d]  absolute top-0 left-0 w-screen h-screen`}
        ></div>
        <div
          className={`${
            isOpen
              ? "right-0 max-[700px]:left-0"
              : "right-[-600px] max-[700px]:right-[-700px]"
          }  overflow-y-auto w-[600px] max-[700px]:w-screen max-[700px]:duration-0 absolute bg-light z-2 duration-300 top-0`}
        >
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
