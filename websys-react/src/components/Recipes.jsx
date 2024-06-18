import React from 'react';
import rep from '../img2/recipes.webp'
import '../styles/style.css'

function Recipes() {
  return (
    <section class="recipes" id="recipes">
        <div class="heading">
            <span>view Now</span>
            <h1>Explore many unique recipes</h1>
        </div>
        <div class="container">
            <div class="recipes-img">
                <img src={rep} alt=""/>
            </div>
            <div class="recipes-text">
                <h2>Embark on a culinary journey</h2>
                <p>Dive into the culinary wonders of Teyvat with our extensive recipe collection. From the savory dishes of Liyue to the exquisite flavors of Inazuma and the aromatic delicacies of Sumeru, our recipe section brings the diverse tastes of Genshin Impact to your kitchen.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Venim illo pa met consectetur adipiscing elit. Venim illo pa</p>
                <a href="#" class="btn">Recipes</a>
            </div>
        </div>
    </section>

    
  );
}

export default Recipes;