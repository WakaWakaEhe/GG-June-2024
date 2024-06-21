/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLoaderData } from "react-router-dom";
import regions from "../data/regions";
import RegionStyles from "../styles/RegionStyles";

export async function loader({ params }) {
  const region = regions.find(
    (region) => region.id === Number(params.regionId)
  );
  return { region };
}

export default function Region() {
  const { region } = useLoaderData();

  const getArticleClass = (id) => {
    if (id === 1) return "first-article";
    if (id === 3) return "last-article";
    return undefined;
  };

  return (
    <>
      <RegionStyles image={region.background} />

      {/* HOME REGION PAGE */}
      <section className="region-home" id="region-home">
        <div className="region-home-text">
          <span>
            <h2>Gourmet Genshin</h2>
          </span>
          <h1>Welcome to {region.name}</h1>
          <span>
            <h2>Liyue · Inazuma · Sumeru</h2>
          </span>
          <a href={"/verdida-viola"} className="btn">
            Back to Home
          </a>
        </div>
        <div className="region-sumeru-home-img">
          <img src={region.symbol} alt="" />
        </div>
      </section>

      {/* ARTICLES */}
      {region.articles.map((article) => (
        <section
          className={getArticleClass(article.id)}
          id="article"
          key={article.id}
        >
          <div className="container">
            <div
              className={`${
                article.id === 3 ? "last-article-img" : "article-img"
              } ${article.id === 2 && "second-article-img"}`}
            >
              <img src={article.image} alt="" />
            </div>
            <div
              className={
                article.id === 3 ? "last-article-text" : "article-text"
              }
            >
              <h2>{article.title}</h2>
              <p>{article.content1}</p>
              <p>{article.content2}</p>
            </div>
          </div>
        </section>
      ))}

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="social">
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
        <div className="links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Our Company</a>
        </div>
        <p>&#169; All Rights Reserved.</p>
      </section>
    </>
  );
}
