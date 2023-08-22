import { create } from "zustand";
import axios from "axios";

const url =
  "http://localhost:" + "1337/api/categories?populate[dishes][populate]=image";

const useCategories = create((set, get) => ({
  categories: [],
  cart: [],
  getData: async () => {
    const res = await axios(url);
    set({ categories: res.data.data });
  },
  getSessionStorageData: () => {
    if (sessionStorage.getItem("cart")) {
      set({ cart: JSON.parse(sessionStorage.getItem("cart")) });
    }
  },
  addToCart: (category, dish) => {
    const categories = get().categories;
    const selectedCategory = categories.find(
      (e) => e.attributes.name === category
    );

    if (selectedCategory) {
      const dishes = selectedCategory.attributes.dishes.data;
      const selectedDish = dishes.find(
        (element) => element.attributes.title === dish
      );

      if (selectedDish) {
        if (get().cart.includes({ ...selectedDish })) {
          return;
        }
        const updatedCart = [...get().cart, { ...selectedDish, count: 1 }];
        set({ cart: updatedCart });
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    }
  },
  increaseCount: (dish) => {
    const updatedCart = get().cart.map((e) => {
      if (dish === e.attributes.title) {
        return { ...e, count: e.count + 1 };
      }
      return e;
    });

    set({ cart: updatedCart });
  },
  decreaseCount: (dish) => {
    const updatedCart = get().cart.map((e) => {
      if (dish === e.attributes.title) {
        if (e.count > 1) {
          return { ...e, count: e.count - 1 };
        }
      }
      return e;
    });

    set({ cart: updatedCart });
  },
  deleteDish: (dish) => {
    const newCart = get().cart.filter((e) => e.attributes.title != dish);
    console.log(newCart);
    set({ cart: newCart });
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));

export default useCategories;
