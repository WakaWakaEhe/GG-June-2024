import React from "react";
import home from "../img2/home.webp";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <span>
          <h2>Gourmet Genshin</h2>
        </span>
        <h1>Explore the cuisines of TEYVAT</h1>
        <span>
          <h2>Liyue · Inazuma · Sumeru</h2>
        </span>
      </div>
      <div className="home-img">
        <img src={home} alt="" />
      </div>
    </section>
  );
}

export default Home;
