import React from "react";
import shop1 from "../img2/shop1.webp";
import shop2 from "../img2/shop2.webp";
import shop3 from "../img2/shop3.webp";
import "../styles/style.css";

function Shop() {
  return (
    <section className="shop" id="shop">
      <div className="heading">
        <span>View Regions</span>
        <h1>View Recipes</h1>
      </div>
      <div className="region-container">
        <div className="box">
          <div className="box-img">
            <img src={shop1} alt="" />
          </div>
          <div className="stars">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <h2>Liyue</h2>
          <a href="#" className="btn">
            View Region
          </a>
        </div>

        <div className="box">
          <div className="box-img">
            <img src={shop2} alt="" />
          </div>
          <div className="stars">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <h2>Inazuma</h2>
          <a href="#" className="btn">
            View Region
          </a>
        </div>

        <div className="box">
          <div className="box-img">
            <img src={shop3} alt="" />
          </div>
          <div className="stars">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <h2>Sumeru</h2>
          <a href="#" className="btn">
            View Region
          </a>
        </div>
      </div>
    </section>
  );
}

export default Shop;
