import { createGlobalStyle } from "styled-components";

const RegionStyles = createGlobalStyle`
  header {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0 4px 41px rgb(14 55 54 / 14%);
    padding: 15px 10%;
    transition: 0.2s;
  }

  /*INAZUMA BG */
  .region-home {
    width: 100%;
    min-height: 100vh;
    background: url(${(props) => props.image}) no-repeat center
      center/cover;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }

  .region-home-text,
  .region-home-img {
    flex: 1 1 17rem;
  }

  .region-home-text span {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--main-color);
  }

  .region-home-text h1 {
    font-size: 3.2rem;
    color: var(--main-color);
    font-weight: bolder;
  }

  .region-home-text h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--main-color);
    text-transform: uppercase;
    margin: 0.5rem 0 1.4rem;
  }

  .btn {
    padding: 7px 16px;
    border: 2px solid var(--main-color);
    border-radius: 40px;
    color: var(--main-color);
    font-weight: 500;
  }

  .btn:hover {
    color: #fff;
    background: var(--main-color);
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .article-img,
  .article-text {
    flex: 1 1 21rem;
  }

  .second-article-img {
    order: 1;
  }

  .article-text h2, .last-article-text h2 {
    font-size: 1.2rem;
    color: var(--second-color);
  }

  .article-text p, .last-article-text p {
    margin: 0.5rem 0 1rem;
    text-align: justify;
  }

  .last-article-img,
  .last-article-text {
    flex: 1 1 17rem;
  }

  .first-article,
  .last-article {
    background: #ebdbc8;
  }

  .last-article {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .social a {
    font-size: 27px;
    margin: 0.5rem;
  }

  .social a .bx {
    padding: 5px;
    color: #fff;
    background: #8d3915;
    border-radius: 50%;
  }

  .social a .bx:hover {
    background: var(--main-color);
  }

  .links {
    margin: 1rem 0 1rem;
  }

  .links a {
    font-size: 1rem;
    font-weight: 500;
    color: var(--second-color);
    padding: 1rem;
  }

  .links a:hover {
    color: var(--main-color);
  }

  .contact p {
    text-align: center;
  }

  @media (max-width: 1150px) {
    header {
      padding: 18px 7%;
    }

    section {
      padding: 50px 7%;
    }

    .region-home-text h1 {
      font-size: 3rem;
    }

    .region-home-text h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 991px) {
    header {
      padding: 18px 4%;
    }

    section {
      padding: 50px 4%;
    }
  }

  @media (max-width: 768px) {
    header {
      padding: 11px 4%;
    }

    .region-home-text span {
      font-size: 0.9rem;
    }

    .region-home-text h1 {
      font-size: 2.4rem;
    }

    .region-home-text h2 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    .region-home-text {
      padding-top: inherit;
    }

    .shop-container .box {
      margin-top: 6rem;
    }

    .heading h1 {
      font-size: 1.5rem;
    }

    .heading span {
      font-size: 0.9rem;
    }

    .last-article {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 364px) {
    .links {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default RegionStyles;
