import { useLoaderData } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import dishes from "../data/dishes";

const DishStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --main-color: #C48042;
    --second-color: #8D3915;
  }

  body {
    background-image: url(${(props) => props.image});
    background-color: antiquewhite;
    background-size: cover;
    min-height: 100vh;
    font-family: 'Outfit', sans-serif;
    line-height: 1.4;
    display: grid;
    place-content: center;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2 {
    font-family: 'Outfit', sans-serif;
    font-weight: bold;
    color: var(--second-color);
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    margin-bottom: 1rem 0;
  }

  .recipe-step {
    margin: 1rem 0;
  }

  ul {
    padding-left: 1.25rem;
  }

  ul li::marker {
    font-weight: bold;
  }

  ul li {
    margin-bottom: .5rem;
  }

  ul li span {
    margin-left: 1rem;
    font-weight: 700;
  }

  .container {
    max-width: 800px;
    background-color: antiquewhite;
    margin: 2rem;
    border-radius: 1rem;
  }

  .container .recipe-img {
    padding: 2rem;
    border-radius: 1rem;
    overflow: hidden;
  }

  .container .recipe-img img{
    border-radius: 1rem;
  }

  .recipe-info{
    padding: 0rem 2rem 2rem 2rem;
  }

  .recipe-prep-time {
    background-color: var(white);
    padding: 1.25rem;
    border-radius: 1rem;
  }

  .recipe-prep-time h3 {
    color: var(--second-color);
    margin-bottom: .75rem;
  }

  .recipe-prep-time ul li::marker {
    color: var(--second-color);
  }

  .ingredients li span {
    font-weight: initial;
  }

  .instructions .item {
    padding-left: .5rem;
    margin-bottom: .5rem;
    display: flex;
  }

  .instructions .item .num {
    margin-right: 1rem;
    font-weight: 700;
  }

  .instructions .item p span {
    font-weight: 700;
  }

  /* Back Button Styles */
  .back-button {
    text-align: center;
    margin-top: 2rem;
  }

  .back-button .btn {
    padding: 10px 20px;
    border: 2px solid var(--second-color);
    border-radius: 25px;
    color: var(--second-color);
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    transition: background 0.3s ease;
  }

  .back-button .btn:hover {
    background: var(--second-color);
    color: #fff;
  }

  @media (max-width: 540px){
    h1 {
      margin-top: 2rem;
    }

    .container {
      margin: 0;
    }

    .container .recipe-img {
      padding: 0;
      border-radius: 0;
    }

    .container .recipe-img img{
      border-radius: 0;
    }
  }
`;

export async function loader({ params }) {
  const dish = dishes.find((dish) => dish.id === Number(params.dishId));
  return { dish };
}

export default function Dish() {
  const { dish } = useLoaderData();

  return (
    <>
      <DishStyle image={dish.regionImg} />
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
            <a href={"/recipes"} className="btn">
              Back to Recipes
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
