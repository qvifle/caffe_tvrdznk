"use client";
import useCategories from "@/store/categories";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Navigation = () => {
  const [activeElement, setActiveElement] = useState("");
  const categories = useCategories((state) => state.categories);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      console.log(sections[0]);
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.5
        ) {
        //   setActiveElement(sections);
          console.log("pex");
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <ul className="flex mb-4 gap-4 sticky top-[64px] bg-light z-[0] pb-2 w-full">
      {categories.map((e: any, key: string) => {
        return (
          <NavItem
            key={key}
            name={e.attributes.name}
            title={e.attributes.title}
          ></NavItem>
        );
      })}
    </ul>
  );
};

export default Navigation;
