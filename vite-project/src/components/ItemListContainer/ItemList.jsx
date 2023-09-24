import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ItemList({ products, onAddToCart }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
