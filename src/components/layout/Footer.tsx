import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark py-3">
      <div className="container flex items-center justify-between">
        <Link href="/" className={` text-2xl text-light`}>
          Твердый Знак
        </Link>

        <ul className={` text-xl flex gap-4 items-center font-bold`}>
          <Link href="/menu" className="footer_li">
            Меню
          </Link>
          <Link href="/about" className="footer_li">
            О нас
          </Link>
          <Link href="/privacy" className="footer_li">
            Политика Конфиденциальности
          </Link>
        </ul>

        <ul className="flex flex-col justify-start">
          <li className="text-light">Букетовъ 20</li>
          <li className="text-light">8:00 - 22:00</li>
        </ul>

        <Link href="https://www.instagram.com/tvrd.znk/">
          <Image width={30} height={30} alt="inst" src="/icons/instagram.svg" />
        </Link>

      </div>
    </footer>
  );
};

export default Footer;
