import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-padding-top: 2rem;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

:root {
  --main-color: #c48042;
  --second-color: #8d3915;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}

section {
  padding: 50px 10%;
}

*::selection {
  color: #fff;
  background: var(--main-color);
}

img {
  width: 100%;
}

/* Side Menu */
.side-menu {
  position: fixed;
  top: 0;
  right: -250px; /* Initially hidden on the right */
  width: 250px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transition: right 0.3s ease; /* Smooth transition */
}

.side-menu.open {
  right: 0; /* Slide in from the right */
}

.side-navbar {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}

.side-navbar a {
  padding: 15px 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--second-color);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
}
.navbar a {
  font-size: 1rem;
  padding: 11px 20px;
  color: var(--second-color);
  font-weight: 600;
  text-transform: uppercase;
}

#menu-icon {
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;
  display: none;
}

`;

export default GlobalStyle;
