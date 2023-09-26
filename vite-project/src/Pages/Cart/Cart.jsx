import React from "react";
import "./cart.css";
import { useCart } from "../../components/CartContext/CartContext"; // Importa el hook useCart
import Layout from "../../components/Layout/Layout";
import Table from 'react-bootstrap/Table';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, getTotalItems, clearCart } = useCart(); // Obtén datos del carrito desde el contexto

  const calculateTotalPrice = () => {
    // Calcula el precio total de los productos en el carrito
    return Object.values(cartItems).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleClearCart = () => {
    // Llama a la función clearCart para vaciar el carrito
    clearCart();
  };

  return (
    <div> <Layout/>
    <div className="cart">
      
      <h2>Carrito de Compras</h2>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          
          </tr>
        </thead>
        <tbody>
          {Object.values(cartItems).map((item) => (
            <tr  key={item.id}>
              <td>
                <img  src={item.image} alt={item.title} />
                {item.title}
              </td>
              <td >${item.price}</td>
              <td>
                <button
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>Cantidad de productos seleccionados: {getTotalItems()}</p>
      <p>Total del carrito: ${calculateTotalPrice()}</p>
      <button onClick={handleClearCart}>Vaciar Carrito</button>
      <button>Comprar</button>
    </div>
    </div>
  );
};

export default Cart;
