import React from "react";
import { second_font } from "../../fonts/fonts";
import Navigation from "./Navigation";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <div className="container">
      <h2
        className={`text-[64px] underline underline-offset-8 decoration-2 text-center w-full leading-[72px] mt-[64px] mb-[72px] ${second_font.className} font-semibold`}
      >
        Меню
      </h2>
      <Navigation />
      <MenuList />
    </div>
  );
};

export default Menu;
