import React from "react";
import "./cart.css";
import { useCart } from "../../components/CartContext/CartContext"; // Importa el hook useCart
import Layout from "../../components/Layout/Layout";
import Table from 'react-bootstrap/Table';

const Cart = () => {
  const { cartItems, updateCartItemQuantity, clearCart } = useCart(); // Obtén datos del carrito desde el contexto

  const calculateTotalPrice = () => {
    // Calcula el precio total de los productos en el carrito
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart">
      <Layout/>
      <h2>Carrito de Compras</h2>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody >
          {cartItems.map((item) => (
            <tr  key={item.id}>
              <td>
                <img  src={item.image} alt={item.title} />
                {item.title}
              </td>
              <td >${item.price}</td>
              <td>
                <button
                  onClick={() =>
                    updateCartItemQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
                {item.quantity}
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
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>Total: ${calculateTotalPrice()}</p>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <button>Comprar</button>
    </div>
  );
};

export default Cart;
