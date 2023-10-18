import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, ItemDetailPage, AboutPage, ServicesPage, ProductsPage, CartPage } from "../Pages";


const Navigation = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/product/:id',
      element: <ItemDetailPage />
    },
    {
      path: '/Services',
      element: <ServicesPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/Products',
      element: <ProductsPage />
    },
    {
      path: '/cart',
      element: <CartPage />
    },
  ]);

  return (
    <RouterProvider router={routes} />
  );
};

export default Navigation;
