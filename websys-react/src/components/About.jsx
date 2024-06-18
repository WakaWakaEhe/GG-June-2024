import React from 'react';
import about from '../img2/about.webp'
import '../styles/style.css'

function About() {
  return (
    <section class="about" id="about">
    <div class="about-img">
        <img src={about} alt=""/>
    </div>
    <div class="about-text">
        <h2>Journey with us</h2>
        <p>Learn about our mission to celebrate the rich and diverse food culture of Genshin Impact’s Teyvat, and meet the dedicated team of enthusiasts who bring these flavors to life. We are committed to providing authentic recipes, insightful content, and a community space for fans and food lovers alike.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Venim illo pa met consectetur adipiscing elit. Venim illo pa</p>
        <a href="#" class="btn">About Us </a>
    </div>
</section>
  );
}

export default About;