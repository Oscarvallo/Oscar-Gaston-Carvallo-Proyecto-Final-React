import React, { useState } from 'react';
import "./cart.css";
import { useCart } from "../../components/CartContext/CartContext";
import Layout from "../../components/Layout/Layout";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, getTotalItems, clearCart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const calculateTotalPrice = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por su compra. Le llegará un correo con todos los detalles.');
  };

  return (
    <div>
      <Layout>
        <div className="cart">
          <h2>Carrito de Compras</h2>
          <Table responsive>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Precio final</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Object.values(cartItems).map((item) => (
                <tr key={item.id}>
                  <td className="tableCart">
                    <img src={item.image} alt={item.title} />
                    {item.title}
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    {item.quantity}
                    <button onClick={() => addToCart(item)}>+</button>
                  </td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>Cantidad de productos seleccionados: {getTotalItems()}</p>
          <p>Total del carrito: ${calculateTotalPrice()}</p>
          {isCheckout ? (
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Nombre"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Correo Electrónico"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Comentario (máximo 400 caracteres)</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  maxLength="400"
                  placeholder="Escribe tu comentario aquí"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          ) : (
            <Button variant="primary" onClick={handleCheckout}>
              Comprar
            </Button>
          )}
          {!isCheckout && (
            <Button variant="danger" onClick={handleClearCart}>
              Vaciar Carrito
            </Button>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Cart;
