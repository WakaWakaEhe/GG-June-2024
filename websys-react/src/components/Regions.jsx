import React from "react";
import reg from "../img2/regions.webp";

function Region() {
  return (
    <section className="regions" id="regions">
      <div className="heading">
        <span>view now</span>
        <h1>learn more about the regions</h1>
      </div>
      <div className="container">
        <div className="regions-text">
          <h2>Unveil Teyvat's diverse regions</h2>
          <p>
            The Regions section of our Genshin Impact food website delves into
            the vibrant and diverse culinary landscapes of Teyvat. From the
            spicy and robust flavors of Liyue to the delicate and refined tastes
            of Inazuma, each region brings its own unique essence and
            traditional recipes.
          </p>
          <p>
            Join us as we bring the authentic tastes of Genshin Impact’s most
            beloved regions to your table, capturing the essence of each unique
            culture through its traditional cuisine.
          </p>
          <a href="#shop" className="btn">
            Regions
          </a>
        </div>
        <div className="regions-img">
          <img src={reg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Region;
