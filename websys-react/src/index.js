import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import RecipePage from "./routes/recipe_page";

import Dish from "./routes/dish";

import { loader as dishLoader } from "./routes/dish";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
