import React, { createContext, useContext, useState } from "react";

// Crea el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto del carrito
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  // Función para agregar un producto al carrito o actualizar su cantidad
  function addToCart(item) {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[item.id]) {
        updatedItems[item.id].quantity += 1;
      } else {
        updatedItems[item.id] = { ...item, quantity: 1 };
      }
      return updatedItems;
    });
  }

  // Función para eliminar un producto del carrito o disminuir su cantidad
  function removeFromCart(itemId) {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[itemId]) {
        if (updatedItems[itemId].quantity > 1) {
          updatedItems[itemId].quantity -= 1;
        } else {
          delete updatedItems[itemId];
        }
      }
      return updatedItems;
    });
  }

  // Función para obtener el número total de productos en el carrito
  function getTotalItems() {
    const totalQuantity = Object.values(cartItems).reduce(
      (total, item) => total + item.quantity,
      0
    );
    return totalQuantity;
  }

  // Función para obtener el carrito completo
  function getCartItems() {
    return Object.values(cartItems);
  }

  // Función para vaciar el carrito
  function clearCart() {
    setCartItems({});
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalItems,
        getCartItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para acceder al contexto del carrito
export function useCart() {
  return useContext(CartContext);
}

export default CartContext;
