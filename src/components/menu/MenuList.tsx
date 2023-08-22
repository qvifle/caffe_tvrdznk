"use client";
import React, { useEffect } from "react";
import Category from "./Category";
import useCategories from "@/store/categories";

const MenuList = () => {
  const categories = useCategories((state) => state.categories);
  const getData = useCategories((state) => state.getData);
  const getSessionStorageData = useCategories(
    (state) => state.getSessionStorageData
  );

  useEffect(() => {
    getData();
    getSessionStorageData();
  }, []);

  return (
    <div className="w-full">
      {categories &&
        categories.map((e: any, key: any) => {
          return (
            <Category
              key={key}
              name={e.attributes.name}
              title={e.attributes.title}
            />
          );
        })}
    </div>
  );
};

export default MenuList;
