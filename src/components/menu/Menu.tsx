'use client'
import React, { useEffect } from "react";
import Category from './Category'
import useCategories from '@/store/categories'


const Menu = () => {
  const getData = useCategories(state => state.getData)
  const categories = useCategories(state => state.categories)


  useEffect(() => {
    getData()

  },[] )

  
  return (
    <div className="w-full">
      {categories && categories.map((e: any, key: any) => {
        return <Category key={key} name={e.attributes.name} title={e.attributes.title} />;
      })}
    </div>
  );
};

export default Menu;
