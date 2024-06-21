import React from "react";
import about from "../img2/about.webp";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={about} alt="" />
      </div>
      <div className="about-text">
        <h2>Journey with us</h2>
        <p>
          Learn about our mission to celebrate the rich and diverse food culture
          of Genshin Impact’s Teyvat, and meet the dedicated team of enthusiasts
          who bring these flavors to life. We are committed to providing
          authentic recipes, insightful content, and a community space for fans
          and food lovers alike.
        </p>
        <p>
          Whether it's the savory delicacies of Liyue, the comforting dishes of
          Inazuma, or the exotic flavors of Sumeru, we invite you to embark on a
          culinary adventure and experience the magic of Teyvat with every bite.
        </p>
      </div>
    </section>
  );
}

export default About;
