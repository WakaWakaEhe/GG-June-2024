import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Importing Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

/* Reset and Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
  font-family: "Poppins", sans-serif;
}

:root {
  --main-color: #c48042;
  --second-color: #8d3915;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}

body {
  background-color: antiquewhite;
  background-size: cover;
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

.heading {
  margin-top: 7rem;
  text-align: center;
  color: var(--second-color);
  font-size: 3rem;
  padding-bottom: 2rem;
  text-transform: uppercase;
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

export default GlobalStyle;
