import Head from "../components/Header";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Recipe from "../components/Recipes";
import Region from "../components/Regions";
import About from "../components/About";
import Contact from "../components/Contact";

import RootStyles from "../styles/RootStyles";
import { useEffect } from "react";
import "../styles/globalStyles.css";

export default function Root() {
  useEffect(() => {
    const handleLoad = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const element = document.querySelector(hash);

      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <RootStyles />

      <Head />
      <Home />
      <Shop />
      <Recipe />
      <Region />
      <About />
      <Contact />
    </>
  );
}
