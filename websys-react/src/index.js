import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import RecipePage from "./routes/RecipePage";
import Dish, { loader as dishLoader } from "./routes/Dish";
import Region, { loader as regionLoader } from "./routes/Region";

import GlobalStyles from "./styles/GlobalStyles";

const router = createHashRouter([
  {
    path: "/home",
    element: <Root />,
  },
  {
    path: "/recipes",
    element: <RecipePage />,
  },
  {
    path: "/recipes/:dishId",
    element: <Dish />,
    loader: dishLoader,
  },
  {
    path: "/regions/:regionId",
    element: <Region />,
    loader: regionLoader,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);
