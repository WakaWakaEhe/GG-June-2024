import { createGlobalStyle } from "styled-components";

const DishStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --main-color: #C48042;
    --second-color: #8D3915;
  }

  body {
    background-image: url(${(props) => props.image});
    background-color: antiquewhite;
    background-size: cover;
    min-height: 100vh;
    font-family: 'Outfit', sans-serif;
    line-height: 1.4;
    display: grid;
    place-content: center;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2 {
    font-family: 'Outfit', sans-serif;
    font-weight: bold;
    color: var(--second-color);
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    margin-bottom: 1rem 0;
  }

  .recipe-step {
    margin: 1rem 0;
  }

  ul {
    padding-left: 1.25rem;
  }

  ul li::marker {
    font-weight: bold;
  }

  ul li {
    margin-bottom: .5rem;
  }

  ul li span {
    margin-left: 1rem;
    font-weight: 700;
  }

  .container {
    max-width: 800px;
    background-color: antiquewhite;
    margin: 2rem;
    border-radius: 1rem;
  }

  .container .recipe-img {
    padding: 2rem;
    border-radius: 1rem;
    overflow: hidden;
  }

  .container .recipe-img img{
    border-radius: 1rem;
  }

  .recipe-info{
    padding: 0rem 2rem 2rem 2rem;
  }

  .recipe-prep-time {
    background-color: var(white);
    padding: 1.25rem;
    border-radius: 1rem;
  }

  .recipe-prep-time h3 {
    color: var(--second-color);
    margin-bottom: .75rem;
  }

  .recipe-prep-time ul li::marker {
    color: var(--second-color);
  }

  .ingredients li span {
    font-weight: initial;
  }

  .instructions .item {
    padding-left: .5rem;
    margin-bottom: .5rem;
    display: flex;
  }

  .instructions .item .num {
    margin-right: 1rem;
    font-weight: 700;
  }

  .instructions .item p span {
    font-weight: 700;
  }

  /* Back Button Styles */
  .back-button {
    text-align: center;
    margin-top: 2rem;
  }

  .back-button .btn {
    padding: 10px 20px;
    border: 2px solid var(--second-color);
    border-radius: 25px;
    color: var(--second-color);
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    transition: background 0.3s ease;
  }

  .back-button .btn:hover {
    background: var(--second-color);
    color: #fff;
  }

  @media (max-width: 540px){
    h1 {
      margin-top: 2rem;
    }

    .container {
      margin: 0;
    }

    .container .recipe-img {
      padding: 0;
      border-radius: 0;
    }

    .container .recipe-img img{
      border-radius: 0;
    }
  }
`;

export default DishStyles;
