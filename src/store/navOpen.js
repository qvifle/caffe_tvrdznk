import { create } from "zustand";

const useNavOpen = create((set, get) => ({
  isOpen: false,
  toggle: () => {
    set({isOpen: !get().isOpen})
  },
}));

export default useNavOpen 