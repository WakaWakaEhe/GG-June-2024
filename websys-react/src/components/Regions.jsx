import React from 'react';
import reg from '../img2/regions.webp'
import '../styles/style.css'

function Region() {
  return (
    <section class="regions" id="regions">
        <div class="heading">
            <span>view now</span>
            <h1>learn more about the regions</h1>
        </div>
        <div class="container">
            <div class="regions-text">
                <h2>Unveil Teyvat's diverse regions</h2>
                <p>The Regions section of our Genshin Impact food website delves into the vibrant and diverse culinary landscapes of Teyvat. From the spicy and robust flavors of Liyue to the delicate and refined tastes of Inazuma, each region brings its own unique essence and traditional recipes. </p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Venim illo pa met consectetur adipiscing elit. Venim illo pa</p>
                <a href="#" class="btn">Regions</a>
            </div>
            <div class="regions-img">
                <img src={reg} alt=""/>
            </div>
        </div>
    </section>

    
  );
}

export default Region;