import React from "react";
import rep from "../img2/recipes.webp";
import "../styles/style.css";

function Recipes() {
  return (
    <section className="recipes" id="recipes">
      <div className="heading">
        <span>view Now</span>
        <h1>Explore many unique recipes</h1>
      </div>
      <div className="container">
        <div className="recipes-img">
          <img src={rep} alt="" />
        </div>
        <div className="recipes-text">
          <h2>Embark on a culinary journey</h2>
          <p>
            Dive into the culinary wonders of Teyvat with our extensive recipe
            collection. From the savory dishes of Liyue to the exquisite flavors
            of Inazuma and the aromatic delicacies of Sumeru, our recipe section
            brings the diverse tastes of Genshin Impact to your kitchen.
          </p>
          <p>
            Explore and savor the authentic recipes that capture the essence and
            spirit of these enchanting regions, bringing the world of Genshin
            Impact to life in your own kitchen.
          </p>
          <a href={`/recipes`} className="btn">
            Recipes
          </a>
        </div>
      </div>
    </section>
  );
}

export default Recipes;
