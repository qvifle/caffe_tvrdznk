"use client";
import React from "react";
import { second_font } from "@/app/fonts";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="bg-primary py-3 sticky top-0 z-10">
      <div className="container flex items-center justify-between">
        <Link href='/' className={` text-2xl`}>Твердый Знак</Link>
        <ul
          className={` text-xl flex gap-4 items-center font-bold`}
        >
          <Link href="/" className="nav_li">Меню</Link>
          <Link href="/about" className="nav_li">О нас</Link>
          <Link href="/privacy" className="nav_li">Политика Конфиденциальности</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
