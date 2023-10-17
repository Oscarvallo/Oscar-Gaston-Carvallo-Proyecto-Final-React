import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, ItemDetailPage, AboutPage, CheckoutPage, ProductsPage, CartPage } from "../Pages";
import Layout from '../components/Layout/Layout';

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
      path: '/checkout',
      element: <CheckoutPage />
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
