import dish2 from "../../img2/dish-2.webp";

export default function DishTwo() {
  return (
    <div class="container">
      <div class="recipe-img">
        <img src={dish2} alt="" />
      </div>

      <div class="recipe-info">
        <h1>Almond Tofu</h1>

        <div class="recipe-prep-time">
          <h3>Estimated Time to Serve</h3>
          <ul>
            <li>
              <span>Prep Time</span>: 10 minutes
            </li>
            <li>
              <span>Cook Time</span>: 2 hours
            </li>
            <li>
              <span>Total Time</span>: 2 hours and 10 minutes
            </li>
          </ul>
        </div>

        <div class="recipe-step">
          <h2>Ingredients</h2>
          <ul class="ingredients">
            <li>
              <span>1 cup almond milk</span>
            </li>
            <li>
              <span>2 tbsp sugar</span>
            </li>
            <li>
              <span>1 tbsp agar-agar powder</span>
            </li>
            <li>
              <span>1 cup water</span>
            </li>
            <li>
              <span>1 tsp almond extract</span>
            </li>
            <li>
              <span>Fresh fruit or syrup for garnish</span>
            </li>
          </ul>
        </div>

        <div class="recipe-step">
          <h2>Instructions</h2>
          <div class="instructions">
            <div class="item">
              <div class="num">1.</div>
              <p>
                <span>Heat Milk</span>:In a saucepan, heat the almond milk with
                sugar until dissolved.
              </p>
            </div>

            <div class="item">
              <div class="num">2.</div>
              <p>
                <span>Add Agar</span>: Dissolve the agar-agar powder in water
                and add to the almond milk. Bring to a boil and then simmer for
                2-3 minutes.
              </p>
            </div>

            <div class="item">
              <div class="num">3.</div>
              <p>
                <span>Flavor</span>: Remove from heat and stir in the almond
                extract.
              </p>
            </div>

            <div class="item">
              <div class="num">4.</div>
              <p>
                <span>Set</span>: Pour the mixture into a mold or shallow dish.
                Allow it to cool and set in the refrigerator for at least 2
                hours.
              </p>
            </div>

            <div class="item">
              <div class="num">5.</div>
              <p>
                <span>Serve</span>: Cut into cubes and serve with fresh fruit or
                syrup.
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
