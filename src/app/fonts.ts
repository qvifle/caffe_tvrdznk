import { Roboto_Slab } from "next/font/google";
import { Playfair_Display } from "next/font/google";

export const main_font = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});
export const second_font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
