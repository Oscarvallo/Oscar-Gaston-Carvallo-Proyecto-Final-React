import React from "react";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  const handleAddToCart = () => {
    // Llama a la función onAddToCart pasando el ID del producto
    onAddToCart(product.id);
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.title} />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
