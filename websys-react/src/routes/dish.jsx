import { useLoaderData } from "react-router-dom";
import dishes from "../data/dishes";
import DishStyles from "../styles/DishStyles";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export async function loader({ params }) {
  const dish = dishes.find((dish) => dish.id === Number(params.dishId));
  return { dish };
}

export default function Dish() {
  const { dish } = useLoaderData();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <DishStyles image={dish.regionImg} />
      <div className="container">
        <div className="recipe-img">
          <img src={dish.image} alt="" />
        </div>

        <div className="recipe-info">
          <h1>{dish.title}</h1>

          <div className="recipe-prep-time">
            <h3>Estimated Time to Serve</h3>
            <ul>
              <li>
                <span>Prep Time</span>: {dish.prepTime}
              </li>
              <li>
                <span>Cook Time</span>: {dish.cookTime}
              </li>
              {dish.totalTime && (
                <li>
                  <span>Total Time</span>: {dish.totalTime}
                </li>
              )}
            </ul>
          </div>

          <div className="recipe-step">
            <h2>Ingredients</h2>
            <ul className="ingredients">
              {dish.ingredients.map((e) => (
                <li key={e}>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-step">
            <h2>Instructions</h2>
            <div className="instructions">
              {dish.instructions.map((e, idx) => {
                const splitInstructions = e.split(":");

                return (
                  <div className="item" key={e}>
                    <div className="num">{idx + 1}.</div>
                    <p>
                      <span>{splitInstructions[0]}</span>:{" "}
                      {splitInstructions[1]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="back-button">
            <Link to={"/recipes"} className="btn">
              Back to Recipes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
