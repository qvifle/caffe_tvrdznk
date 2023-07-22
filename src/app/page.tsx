import Image from "next/image";
import { second_font } from "./fonts";
import Type from "@/components/menu/Type";
import Menu from "@/components/menu/Menu";
import Navigation from "@/components/menu/Navigation";
import Map from "./Map";
import start from "./Mapgl";
import Mapgl from "./Mapgl";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <section className="bg-[url('/images/bg.jpg')] bg-top bg-cover  h-[961px] w-full bg-fixed ">
        <div className="h-full w-full flex items-center justify-center flex-col bg-[#00000061] ">
          <h1
            className={`${second_font.className} font-bold text-[96px] text-light leading-[120px]`}
          >
            Твердый Знак
          </h1>
          {/* <h3 className="ml-[700px] text-[24px] bg-light leading-[24px] p-5 italic">- кофе без лишних гласных.</h3> */}
          <Type />
        </div>
      </section>

      <section>
        <div className="container ">
          <h2
            className={`text-[64px] underline underline-offset-8 decoration-2 text-center w-full leading-[72px] mt-[64px] mb-[72px] ${second_font.className} font-semibold`}
          >
            Меню
          </h2>
          <Navigation />
          <Menu />
        </div>
        <Map />
        <Contact />
      </section>
    </>
  );
}
