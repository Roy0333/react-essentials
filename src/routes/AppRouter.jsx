import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";
import ViewProduct from "../pages/ViewProduct";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "add-products",
        element: <AddProduct />,
      },
      {
        path: "product/view/:productid",
        element:<ViewProduct/>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
