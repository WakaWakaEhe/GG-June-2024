import dish4 from "../../img2/dish-4.webp";

export default function DishFour() {
  return (
    <div class="container">
      <div class="recipe-img">
        <img src={dish4} alt="" />
      </div>

      <div class="recipe-info">
        <h1>Omelette Rice</h1>

        <div class="recipe-prep-time">
          <h3>Estimated Time to Serve</h3>
          <ul>
            <li>
              <span>Prep Time</span>: 10 minutes
            </li>
            <li>
              <span>Cook Time</span>: 10 minutes
            </li>
            <li>
              <span>Total Time</span>: 20 minutes
            </li>
          </ul>
        </div>

        <div class="recipe-step">
          <h2>Ingredients</h2>
          <ul class="ingredients">
            <li>
              <span>2 cups cooked rice</span>
            </li>
            <li>
              <span>1 small onion (finely chopped)</span>
            </li>
            <li>
              <span>1/2 cup mixed vegetables (peas, carrots, corn)</span>
            </li>
            <li>
              <span>2 eggs</span>
            </li>
            <li>
              <span>2 tbsp ketchup</span>
            </li>
            <li>
              <span>1 tbsp soy sauce</span>
            </li>
            <li>
              <span>Salt and pepper to taste</span>
            </li>
            <li>
              <span>2 tbsp oil</span>
            </li>
          </ul>
        </div>

        <div class="recipe-step">
          <h2>Instructions</h2>
          <div class="instructions">
            <div class="item">
              <div class="num">1.</div>
              <p>
                <span>Fry Rice</span>: In a pan, sauté the onion until
                translucent. Add the vegetables and cooked rice. Stir-fry with
                soy sauce and ketchup.
              </p>
            </div>

            <div class="item">
              <div class="num">2.</div>
              <p>
                <span>Make Omelette</span>: In another pan, beat the eggs with
                salt and pepper and cook a thin omelette.
              </p>
            </div>

            <div class="item">
              <div class="num">3.</div>
              <p>
                <span>Assemble</span>: Place the fried rice on the omelette and
                fold it over.
              </p>
            </div>

            <div class="item">
              <div class="num">4.</div>
              <p>
                <span>Serve</span>: Serve with extra ketchup on top.
              </p>
            </div>
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
