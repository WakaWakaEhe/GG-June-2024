import Head from "../components/Header";
import "../styles/recipe_style.css";

import dishes from "../data/dishes";

export default function RecipePage() {
  return (
    <>
      <Head />
      <section class="dishes" id="dishes">
        <h2 class="heading"> Our Recipes </h2>
        <div class="box-container">
          {dishes.map((dish) => (
            <div className="box">
              <img src={dish.image} alt="" />
              <h3>{dish.title}</h3>
              <span>{dish.description}</span>
              {/* <!--<a href="#" class="btn">View Recipe</a>--> */}
              <a href={dish.link} class="btn">
                View Recipe
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
