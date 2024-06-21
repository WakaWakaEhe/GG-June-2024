import { createGlobalStyle } from "styled-components";

const RecipePageStyles = createGlobalStyle`
  body {
    background-color: antiquewhite;
    background-size: cover;
  }

  /* Header */
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

  /* Logo */
  .logo {
    display: flex;
    align-items: center;
  }
  .logo img {
    width: 40px;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .navbar {
      display: none; /* Hide default navbar on small screens */
    }
    #menu-icon {
      display: block; /* Show menu icon on small screens */
    }
  }

  /* Heading Styles */
  .heading {
    margin-top: 7rem;
    text-align: center;
    color: var(--second-color);
    font-size: 3rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
  }

  /* Dishes Container */
  .dishes .box-container {
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 2.5rem;
  }

  /* Box Styles */
  .dishes .box-container .box {
    background: #fff;
    border-radius: 0.5rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: 1rem;
    padding-bottom: 3rem;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .dishes .box-container .box img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .dishes .box-container .box h3 {
    color: var(--second-color);
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .dishes .box-container .box span {
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  .dishes .box-container .box .btn {
    padding: 7px 16px;
    border: 2px solid var(--second-color);
    border-radius: 40px;
    color: var(--second-color);
    font-weight: 500;
  }

  .dishes .box-container .box .btn:hover {
    color: #fff;
    background: var(--second-color);
  }

  /* Responsive Adjustments */
  @media (max-width: 900px) {
    .dishes .box-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .dishes .box-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default RecipePageStyles;
