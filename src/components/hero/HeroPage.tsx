import { second_font } from "../../fonts/fonts";
import React, { Suspense } from "react";
import Type from "./Type";
import Root3D from "../3d/Root3D";

const HeroPage = () => {
  return (
    <section className="relative bg-top bg-cover flex justify-center items-center  h-screen w-full bg-fixed ">
      <Root3D />
      <h1
        className={`${second_font.className} max-[700px]:text-[64px] max-[500px]:text-[40px] z-[5] absolute  select-none font-bold text-[96px] text-light leading-[120px] `}
      >
        Твердый Знак
      </h1>
      <Type />
    </section>
  );
};

export default HeroPage;
