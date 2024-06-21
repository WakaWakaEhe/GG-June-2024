import liyueSymbol from "../img2/region-inazuma-symbol.webp";
import inazumaSymbol from "../img2/region-inazuma-symbol.webp";
import sumeruSymbol from "../img2/region-sumeru-symbol.webp";

import liyueArticle1 from "../img2/liyue-first-article-img-1.webp";
import liyueArticle2 from "../img2/liyue-second-article-img-2.webp";
import liyueArticle3 from "../img2/liyue-third-article-img-3.webp";

import inazumaArticle1 from "../img2/inazuma-first-article-img-1.webp";
import inazumaArticle2 from "../img2/inazuma-second-article-img-2.webp";
import inazumaArticle3 from "../img2/inazuma-third-article-img-3.webp";

import sumeruArticle1 from "../img2/sumeru-first-article-img-1.webp";
import sumeruArticle2 from "../img2/sumeru-second-article-img-2.webp";
import sumeruArticle3 from "../img2/sumeru-third-article-img-3.webp";

const regions = [
  {
    id: 1,
    name: "Liyue",
    symbol: liyueSymbol,
    articles: [
      {
        id: 1,
        title: "The Bounty of Liyue's Land and Sea",
        content: `Liyue, a region of abundant natural resources, is deeply influenced
            by its diverse landscapes that range from towering mountains to the
            bountiful ocean. The rich soil and favorable climate support a
            variety of crops, including rice, lotus seeds, and diverse
            vegetables, which are staples in Liyue's cuisine.`,
        content2: `The proximity to the sea provides an endless supply of fresh
            seafood, such as fish, shrimp, and crabs, which feature prominently
            in local dishes.`,
        image: liyueArticle1,
      },
      {
        id: 2,
        title: "Tradition and Festivals: The Heart of Liyue's Cuisine",
        content1: `Liyue's culinary traditions are deeply intertwined with its cultural
          practices and festivals. The Lantern Rite, a major festival, is a
          prime example where food plays a crucial role in celebrations.
          Families gather to make and enjoy special dishes like Glaze Lily
          Dumplings and Lantern-shaped Rice Cakes, which symbolize prosperity
          and unity.`,
        content2: `These traditions not only preserve ancient culinary techniques but
          also emphasize the communal aspect of food, where cooking and eating
          are shared experiences that strengthen familial bonds and community
          spirit.`,
        image: liyueArticle2,
      },
      {
        id: 3,
        title: "The Spice of Trade",
        content1: `As a major trading hub in Teyvat, Liyue's cuisine is a melting pot of
        flavors and techniques from distant lands. The influx of exotic
        spices, such as star anise and Sichuan pepper, has enriched the local
        cuisine, adding layers of complexity to traditional dishes. The port
        city's openness to new influences is reflected in its vibrant food
        markets, where a diverse array of ingredients and spices are
        available.`,
        content2: `This blend of local and foreign elements results in a unique culinary
        identity that embraces both tradition and innovation.`,
        image: liyueArticle3,
      },
    ],
  },
  {
    id: 2,
    name: "Inazuma",
    symbol: inazumaSymbol,
    articles: [
      {
        id: 1,
        title: "An Archipelago's Influence on Cuisine",
        content1: `Inazuma, a region characterized by its archipelagic geography and
            frequent thunderstorms, boasts a cuisine deeply influenced by its
            natural surroundings. The abundant waters surrounding the islands
            provide a wealth of seafood, which is central to Inazuma's culinary
            identity. Fish, seaweed, and shellfish are staples, often prepared
            in ways that highlight their natural flavors, such as grilling or
            light steaming.`,
        content2: `This close connection to the sea and land creates a cuisine that is
            fresh, vibrant, and deeply reflective of Inazuma's natural beauty.`,
        image: inazumaArticle1,
      },
      {
        id: 2,
        title: "Tradition and Resilience: Culinary Heritage of Inazuma",
        content1: `Inazuma's cuisine is steeped in tradition, shaped by a culture of
              resilience and self-sufficiency. The region's historical isolation
              has led to the development of unique preservation techniques, such
              as pickling and fermenting, to ensure food availability during times
              of scarcity. Dishes like "Miso Soup with Fermented Soybeans" and
              "Pickled Seaweed" are not just culinary staples but also cultural
              symbols of endurance and ingenuity.`,
        content2: `Festivals and rituals, such as the annual "Ritou Fishing Festival,"
              celebrate these traditions, reinforcing community bonds and passing
              down culinary knowledge through generations.`,
        image: inazumaArticle2,
      },
      {
        id: 3,
        title: "The Influence of Electro: Flavor and Innovation",
        content1: `The element of Electro, symbolizing energy and innovation, is a
            significant influence on Inazuma's culinary scene. This influence is
            evident in the bold and dynamic flavors that characterize the region's
            food. Spices that provide a tingling sensation, such as sansho pepper,
            are used to create dishes with a distinct, electrifying taste.`,
        content2: `Additionally, modern culinary techniques and fusion cuisine have found
            their way into Inazuma, blending traditional recipes with contemporary
            flair. The spirit of Electro inspires both traditionalists and
            innovators in Inazuma's culinary world to push boundaries and create
            exciting new flavors.`,
        image: inazumaArticle3,
      },
    ],
  },
  {
    id: 3,
    name: "Sumeru",
    symbol: sumeruSymbol,
    articles: [
      {
        id: 1,
        title: "Bountiful Harvest: A Blend of Desert and Jungle",
        content1: `Sumeru offers a rich and varied culinary tapestry. The fertile
            jungles of Sumeru are home to a plethora of exotic fruits, spices,
            and herbs that are integral to its cuisine. Ingredients like jungle
            peppers and fragrant herbs bring vibrant flavors and colors to
            traditional dishes.`,
        content2: `The desert areas contribute a unique array of grains and legumes,
            which are staples in many local recipes. This blend of tropical
            abundance and desert resilience creates a distinctive culinary
            identity that celebrates the natural bounty of Sumeru and its
            diverse ecosystems.`,
        image: sumeruArticle1,
      },
      {
        id: 2,
        title:
          "Wisdom and Flavor: The Culinary Traditions of Sumeru's Scholars",
        content1: `Traditional dishes often reflect Sumerus's academic heritage through
              meticulous preparation with recipes that balance flavors and
              ingredients to create harmonious meals. Festivals and rituals, such
              as the annual "Festival of Wisdom," feature special foods which are
              believed to enhance mental clarity and celebrate the region's
              intellectual spirit.`,
        content2: `The emphasis on balance and knowledge ensures that Sumeru's culinary
              traditions are not only delicious but also culturally significant.`,
        image: sumeruArticle2,
      },
      {
        id: 3,
        title:
          "The Influence of Dendro: Nature's Green Essence in Sumeru's Cuisine",
        content1: `Sumeru's association with the Dendro element, symbolizing life and
          growth, profoundly influences its culinary practices. The use of
          fresh, green ingredients like herbs, leafy vegetables, and spices that
          stimulate the senses is prevalent in Sumeru's dishes. The culinary
          tradition of using plant-based ingredients aligns with the Dendro
          philosophy of harmony with nature.`,
        content2: `All in all, the influence of Dendro encourages a focus on freshness,
          health, and sustainability, making Sumeru's cuisine both delicious and
          aligned with nature's principles.`,
        image: sumeruArticle3,
      },
    ],
  },
];

export default regions;
