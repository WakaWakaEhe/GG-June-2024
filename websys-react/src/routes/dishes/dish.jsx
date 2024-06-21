export default function Dish({ dish }) {
  return (
    <div class="container">
      <div class="recipe-img">
        <img src={dish.image} alt="" />
      </div>

      <div class="recipe-info">
        <h1>{dish.title}</h1>

        <div class="recipe-prep-time">
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

        <div class="recipe-step">
          <h2>Ingredients</h2>
          <ul class="ingredients">
            {dish.ingredients.map((e) => (
              <li key={e}>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>

        <div class="recipe-step">
          <h2>Instructions</h2>
          <div class="instructions">
            {dish.instructions.map((e, idx) => {
              const splitInstructions = e.split(":");

              return (
                <div class="item" key={e}>
                  <div class="num">{idx + 1}.</div>
                  <p>
                    <span>{splitInstructions[0]}</span>: {splitInstructions[1]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div class="back-button">
          <a href="/pages/recipe-page.html" class="btn">
            Back to Recipes
          </a>
        </div>
      </div>
    </div>
  );
}
