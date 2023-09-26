import React, { createContext, useContext, useState } from "react";



// Crea el contexto del carrito
const CartContext = createContext();


// Proveedor del contexto del carrito
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  // Función para eliminar un producto del carrito
  function removeFromCart(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  // Función para obtener el número total de productos en el carrito
  function getTotalItems() {
    return cartItems.length;
  }

  // Función para obtener el carrito completo
  function getCartItems() {
    return cartItems;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalItems,
        getCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
// Hook personalizado para acceder al contexto del carrito
export function useCart() {
  return useContext(CartContext);
}