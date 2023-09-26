import React from "react";
import "./cart.css";

const Cart = ({ cartItems, updateCartItemQuantity, clearCart }) => {
  const calculateTotalPrice = () => {
    // Calcula el precio total de los productos en el carrito
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <button
              onClick={() =>
                updateCartItemQuantity(item.id, item.quantity + 1)
              }
            >
              +
            </button>
            <button
              onClick={() =>
                updateCartItemQuantity(
                  item.id,
                  item.quantity > 1 ? item.quantity - 1 : 1
                )
              }
            >
              -
            </button>
          </div>
        ))}
      </div>
      <p>Total: ${calculateTotalPrice()}</p>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <button>Comprar</button>
    </div>
  );
};

export default Cart;
