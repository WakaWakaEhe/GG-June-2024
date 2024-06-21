import dish1 from "../img2/dish-1.webp";
import dish2 from "../img2/dish-2.webp";
import dish3 from "../img2/dish-3.webp";
import dish4 from "../img2/dish-4.webp";
import dish5 from "../img2/dish-5.webp";
import dish6 from "../img2/dish-6.webp";
import dish7 from "../img2/dish-7.webp";
import dish8 from "../img2/dish-8.webp";
import dish9 from "../img2/dish-9.webp";

import liyueRegion from "../img2/recipe-bg-liyue.webp";
import inazumaRegion from "../img2/recipe-bg-inazuma.webp";
import sumeruRegion from "../img2/recipe-bg-sumeru.webp";

const dishes = [
  {
    id: 1,
    image: dish1,
    title: "Golden Shrimp Balls",
    description:
      "An exquisite blend of tender shrimp wrapped in a golden, crispy coating.",
    regionImg: liyueRegion,
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    totalTime: "25 minutes",
    ingredients: [
      "200g shrimp (peeled and deveined)",
      "1 egg white",
      "1 tbsp cornstarch",
      "1 tbsp rice wine",
      "1 tbsp sesame oil",
      "Salt and pepper to taste",
      "1 cup breadcrumbs",
      "Oil for frying",
    ],
    instructions: [
      "Prepare Shrimp: Finely chop the shrimp or pulse in a food processor until coarsely ground.",
      "Mix: In a bowl, combine the shrimp, egg white, cornstarch, rice wine, sesame oil, salt, and pepper.",
      "Form Balls: Shape the mixture into small balls and coat them in breadcrumbs.",
      "Fry: Heat the oil in a deep pan and fry the shrimp balls until golden brown and crispy.",
      "Serve: Drain on paper towels and serve hot with dipping sauce.",
    ],
  },
  {
    id: 2,
    image: dish2,
    title: "Almond Tofu",
    description:
      "A traditional desert with a smooth, delicate texture and infused with almond flavor.",
    regionImg: liyueRegion,
    prepTime: "10 minutes",
    cookTime: "2 hours",
    totalTime: "2 hours and 10 minutes",
    ingredients: [
      "1 cup almond milk",
      "2 tbsp sugar",
      "1 tbsp agar-agar powder",
      "1 cup water",
      "1 tsp almond extract",
      "Fresh fruit or syrup for garnish",
    ],
    instructions: [
      "Heat Milk:In a saucepan, heat the almond milk with sugar until dissolved.",
      "Add Agar: Dissolve the agar-agar powder in water and add to the almond milk. Bring to a boil and then simmer for 2-3 minutes.",
      "Flavor: Remove from heat and stir in the almond extract.",
      "Set: Pour the mixture into a mold or shallow dish. Allow it to cool and set in the refrigerator for at least 2 hours.",
      "Serve: Cut into cubes and serve with fresh fruit or syrup.",
    ],
  },
  {
    id: 3,
    image: dish3,
    title: "Mora Meat",
    description:
      "A hearty dish that combines succulent meat with rich flavors.",
    regionImg: liyueRegion,
    prepTime: "10 minutes",
    cookTime: "10 minutes",
    totalTime: "50 minutes",
    ingredients: [
      "250g beef (thinly sliced)",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tbsp rice wine",
      "1 tsp sugar",
      "2 cloves garlic (minced)",
      "1 tbsp cornstarch",
      "2 tbsp oil",
      "Green onions and sesame seeds for garnish",
    ],
    instructions: [
      "Marinate Beef: Mix soy sauce, oyster sauce, rice wine, sugar, garlic, and cornstarch. Marinate the beef for at least 30 minutes.",
      "Cook Beef: Heat oil in a pan and stir-fry the beef until browned and cooked through.",
      "Garnish and Serve: Garnish with green onions and sesame seeds, then serve hot.",
    ],
  },
  {
    id: 4,
    image: dish4,
    title: "Omelette Rice",
    description:
      "A harmonious dish that combines fluffy rice with a golden omelette.",
    regionImg: inazumaRegion,
    prepTime: "10 minutes",
    cookTime: "10 minutes",
    totalTime: "20 minutes",
    ingredients: [
      "2 cups cooked rice",
      "1 small onion (finely chopped)",
      "1/2 cup mixed vegetables (peas, carrots, corn)",
      "2 eggs",
      "2 tbsp ketchup",
      "1 tbsp soy sauce",
      "Salt and pepper to taste",
      "2 tbsp oil",
    ],
    instructions: [
      "Fry Rice: In a pan, sauté the onion until translucent. Add the vegetables and cooked rice. Stir-fry with soy sauce and ketchup.",
      "Make Omelette: In another pan, beat the eggs with salt and pepper and cook a thin omelette.",
      "Assemble: Place the fried rice on the omelette and fold it over.",
      "Serve: Serve with extra ketchup on top.",
    ],
  },
  {
    id: 5,
    image: dish5,
    title: "Rice Ball",
    description:
      "Filled with delicious ingredients and sweet rice, it's a favorite snack among Inazumans.",
    regionImg: inazumaRegion,
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    totalTime: "25 minutes",
    ingredients: [
      "2 cups cooked rice",
      "Salt to taste",
      "Various fillings (e.g., pickled plum, tuna mayo, salmon)",
      "Nori (seaweed) sheets",
    ],
    instructions: [
      "Prepare Rice: Season the rice with a little salt.",
      "Shape Rice: Wet your hands, take a handful of rice, flatten it, add your filling, and shape into a ball or triangle.",
      "Wrap and Serve:: Wrap with a strip of nori and serve.",
    ],
  },
  {
    id: 6,
    image: dish6,
    title: "Tricolor Dango",
    description:
      "Sweet and chewy dango, it's a traditional treat featuring three colored dumplings.",
    regionImg: inazumaRegion,
    prepTime: "20 minutes",
    cookTime: "10 minutes",
    totalTime: "30 minutes",
    ingredients: [
      "1/2 cup glutinous rice flour",
      "2 tbsp sugar",
      "1/4 cup water",
      "Pink and green food coloring",
    ],
    instructions: [
      "Make Dough: Mix rice flour, sugar, and water to form a dough.",
      "Divide and Color: Divide into three parts. Leave one white, color one pink, and the other green.",
      "Shape and Boil: Roll into small balls and boil until they float.",
      "Serve: Skewer three balls (one of each color) onto sticks and serve.",
    ],
  },
  {
    id: 7,
    image: dish7,
    title: "Pita Pocket",
    description:
      "Savor the classic taste of a Pita Pocket, filled with savory ingredients for a satisfying meal.",
    regionImg: sumeruRegion,
    prepTime: "15 minutes",
    cookTime: "15 minutes",
    totalTime: null,
    ingredients: [
      "2 pita breads",
      "1 cup cooked chicken breast (shredded)",
      "1/2 cup lettuce (chopped)",
      "1 tomato (diced)",
      "1/4 cup cucumber (diced)",
      "1/4 cup yogurt ",
      "1 tbsp lemon juice",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Prepare Filling: Mix chicken, lettuce, tomato, and cucumber. Season with salt and pepper.",
      "Make Sauce: Combine yogurt and lemon juice.",
      "Assemble: Cut the pita bread in half, open pockets, fill with the chicken mixture, and drizzle with yogurt sauce.",
      "Serve: Serve immediately.",
    ],
  },
  {
    id: 8,
    image: dish8,
    title: "Tahchin",
    description:
      "A Persian-inspired dish of layered rice and tender meat or fish.",
    regionImg: sumeruRegion,
    prepTime: "20 minutes",
    cookTime: "1 hour and 20 minutes",
    totalTime: "1 hour and 20 minutes",
    ingredients: [
      "2 cups basmati rice",
      "1 cup yogurt",
      "2 eggs",
      "1/2 tsp saffron threads (dissolved in 2 tbsp warm water)",
      "1/2 tsp turmeric",
      "300g chicken breast (cooked and shredded)",
      "2 tbsp butter",
      "Salt to taste",
    ],
    instructions: [
      "Prepare Rice: Cook the rice until just done and drain.",
      "Mix Base: Mix yogurt, eggs, saffron water, turmeric, and salt. Combine with a portion of the rice.",
      "Layer Tahchin: In a buttered ovenproof dish, layer half the rice mixture, add chicken, and top with the rest of the rice.",
      "Bake: Dot with butter, cover, and bake at 180°C (350°F) for 1 hour.",
      "Serve: Let it cool slightly, invert onto a plate, and serve.",
    ],
  },
  {
    id: 9,
    image: dish9,
    title: "Minty Bean Soup",
    description: "A light and nutritious blend of green beans and mint.",
    regionImg: sumeruRegion,
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    totalTime: "30 minutes",
    ingredients: [
      "1 cup green beans (trimmed and cut)",
      "1 potato (diced)",
      "1 onion (chopped)",
      "2 cloves garlic (minced)",
      "4 cups vegetable broth",
      "Salt and pepper to taste",
      "2 tbsp olive oil",
    ],
    instructions: [
      "Sauté Vegetables: Heat oil in a pot, sauté onion and garlic until translucent.",
      "Add Beans and Potato: Add green beans and potato, cook for a few minutes.",
      "Simmer Soup: Add broth, bring to a boil, and simmer until vegetables are tender.",
      "Blend and Serve: Blend with mint leaves until smooth, season, and serve hot.",
    ],
  },
];

export default dishes;
