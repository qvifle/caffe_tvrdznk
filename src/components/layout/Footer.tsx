import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark py-3 px-4">
      <div className="container flex items-center justify-between max-[550px]:flex-col">
        <Link href="/" className={` text-2xl text-light`}>
          Твердый Знак
        </Link>

        <Link
          href="tel:87055316564"
          target="_blank"
          className="text-dark p-2 flex gap-2"
        >
          <div className="text-light">+7‒705‒531‒65‒64</div>
        </Link>

        <ul className="flex flex-col justify-start items-center max-[550px]:mb-2">
          <li className="text-light leading-5">Букетовъ 20</li>
          <li className="text-light leading-5">8:00 - 22:00</li>
        </ul>

        <Link href="https://www.instagram.com/tvrd.znk/">
          <Image width={30} height={30} alt="inst" src="/icons/instagram.svg" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
