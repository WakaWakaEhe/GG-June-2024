/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLoaderData } from "react-router-dom";
import regions from "../data/regions";

export async function loader({ params }) {
  const region = regions.find((region) => region.id === params.regionId);
  return { region };
}

export default function Region() {
  const { region } = useLoaderData();

  return (
    <>
      {/* HOME REGION PAGE */}
      <section class="region-sumeru-home" id="region-sumeru-home">
        <div class="region-sumeru-home-text">
          <span>
            <h2>Gourmet Genshin</h2>
          </span>
          <h1>Welcome to {region.name}</h1>
          <span>
            <h2>Liyue · Inazuma · Sumeru</h2>
          </span>
          <a href="#" class="btn">
            Back to Home
          </a>
        </div>
        <div class="region-sumeru-home-img">
          <img src={region.symbol} alt="" />
        </div>
      </section>

      {/* ARTICLES */}
      {regions.articles.map((article) => (
        <section class="sumeru-first-article" id="sumeru-first-article">
          <div class="container">
            <div class="sumeru-first-article-img">
              <img src={article.image} alt="" />
            </div>
            <div class="sumeru-first-article-text">
              <h2>{article.title}</h2>
              <p>{article.content1}</p>
              <p>{article.content2}</p>
            </div>
          </div>
        </section>
      ))}

      {/* CONTACT */}
      <section class="contact" id="contact">
        <div class="social">
          <a href="#">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i class="bx bxl-youtube"></i>
          </a>
        </div>
        <div class="links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Our Company</a>
        </div>
        <p>&#169; All Rights Reserved.</p>
      </section>
    </>
  );
}
