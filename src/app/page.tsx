import Contact from "@/components/contact/Contact";
import HeroPage from "@/components/hero/HeroPage";
import Menu from "@/components/menu/Menu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  console.log(process.env.STRAPI);
  return (
    <>
      <HeroPage />
      <Menu />
      <Contact />
      <ToastContainer />
    </>
  );
};

export default Home;
