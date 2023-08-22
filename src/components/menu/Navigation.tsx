"use client";
import useCategories from "@/store/categories";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Navigation = () => {
  const categories = useCategories((state) => state.categories);
  const [activeItem, setActiveItem] = useState<string>("");

  useEffect(() => {
    if (!categories) {
      return;
    }

    categories.forEach((cat: any) => {
      const id = "#" + cat.attributes.name;
      isOnTop(id);

      document.addEventListener("scroll", () => {
        isOnTop(id);
      });
    });
  }, [categories]);

  const isOnTop = (id: string): void => {
    let item = document.querySelector(id);
    if (!item) {
      return;
    }

    let top = item.getBoundingClientRect().top;
    let bottom = item.getBoundingClientRect().bottom;

    if (top - 180 < 50 && bottom > 50) {
      const links = document.querySelectorAll(".scroll-item");

      links.forEach((link, i) => {
        let parent = link.parentNode;
        const test = "#" + link.getAttribute("id");
        if (test == id) setActiveItem(test);
      });
    }
  };

  // for anchors
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.5
        ) {
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
    <ul className="flex mb-4 gap-4 sticky top-[64px] max-[700px]:top-[56px] px-4 bg-light z-[5] pb-2 w-full">
      {categories.map((e: any, key: string) => {
        return (
          <>
            <NavItem
              key={key}
              name={e.attributes.name}
              title={e.attributes.title}
              isActive={activeItem == "#" + e.attributes.name}
            ></NavItem>
          </>
        );
      })}
    </ul>
  );
};

export default Navigation;
