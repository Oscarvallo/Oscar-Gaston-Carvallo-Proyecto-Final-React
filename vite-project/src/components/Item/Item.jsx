import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Item.css';
import CartContext from "../CartContext/CartContext"; // Sin la extensión de archivo y la ruta completa si está en el mismo directorio

 // Reemplaza 'ruta-al-contexto' con la ubicación real de tu contexto de carrito

const Item = ({ id, title, price, description, image }) => {
  const {cartItems, addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    // Crea un objeto que representa el producto que deseas agregar al carrito
    const productToAdd = {
      id,
      title,
      price,
      description,
      image,
    };

    // Llama a la función addToCart del contexto para agregar el producto
    addToCart(productToAdd);
  };

  return (
    <div className="item">
      <div className="card">
        <img className="imgCard" src={image} alt={title} />
        <h3 className="titleCard">{title}</h3> 
        <h6 className="precioCard">${price}</h6>
        <button className="agregarButton" onClick={handleAddToCart}>
          Agregar producto
        </button>
        <Link to={`/product/${id}`}>
          <h6 className="detailCard">Ver detalle</h6>
        </Link>
      </div>
    </div>
  );
};

export default Item;


//    <h6 className="descriptionCard">{description}</h6>