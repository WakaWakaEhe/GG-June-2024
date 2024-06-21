import { Link } from "react-router-dom";

import dishes from "../data/dishes";
import Head from "../components/Header";
import RecipePageStyle from "../styles/RecipePageStyles";

export default function RecipePage() {
  return (
    <>
      <RecipePageStyle />
      <Head />
      <section className="dishes" id="dishes">
        <h2 className="heading"> Our Recipes </h2>
        <div className="box-container">
          {dishes.map((dish) => (
            <div className="box" key={dish.id}>
              <img src={dish.image} alt="" />
              <h3>{dish.title}</h3>
              <span>{dish.description}</span>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to={`/recipes/${dish.id}`} className="btn">
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
