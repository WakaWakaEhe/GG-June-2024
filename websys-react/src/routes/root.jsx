import Head from "../components/Header";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Recipe from "../components/Recipes";
import Region from "../components/Regions";
import About from "../components/About";
import Contact from "../components/Contact";

import RootStyles from "../styles/RootStyles";
import { useEffect } from "react";

export default function Root() {
  useEffect(() => {
    if (window.location.hash && window.location.hash !== "") {
      const element = document.querySelector(window.location.hash);

      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    }
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
