import dish5 from "../../img2/dish-5.webp";

export default function DishFive() {
  return (
    <div class="container">
      <div class="recipe-img">
        <img src={dish5} alt="" />
      </div>

      <div class="recipe-info">
        <h1>Rice Ball</h1>

        <div class="recipe-prep-time">
          <h3>Estimated Time to Serve</h3>
          <ul>
            <li>
              <span>Prep Time</span>: 15 minutes
            </li>
            <li>
              <span>Cook Time</span>: 10 minutes
            </li>
            <li>
              <span>Total Time</span>: 25 minutes
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
              <span>Salt to taste</span>
            </li>
            <li>
              <span>
                Various fillings (e.g., pickled plum, tuna mayo, salmon)
              </span>
            </li>
            <li>
              <span>Nori (seaweed) sheets</span>
            </li>
          </ul>
        </div>

        <div class="recipe-step">
          <h2>Instructions</h2>
          <div class="instructions">
            <div class="item">
              <div class="num">1.</div>
              <p>
                <span>Prepare Rice</span>: Season the rice with a little salt.
              </p>
            </div>

            <div class="item">
              <div class="num">2.</div>
              <p>
                <span>Shape Rice</span>: Wet your hands, take a handful of rice,
                flatten it, add your filling, and shape into a ball or triangle.
              </p>
            </div>

            <div class="item">
              <div class="num">3.</div>
              <p>
                <span>Wrap and Serve:</span>: Wrap with a strip of nori and
                serve.
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
