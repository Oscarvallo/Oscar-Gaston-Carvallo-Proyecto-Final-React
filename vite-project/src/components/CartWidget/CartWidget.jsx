import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import './cartwidget.css';
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext"; // Importa el hook useCart

const CartWidget = () => {
  const { getTotalItems } = useCart(); // Obtén el número total de productos desde el contexto

  return (
    <div className='containerCart'>
      <Link to={`/cart`}>
        <BsFillCartCheckFill className='Cart'/>
      </Link>
      <span className="item-count">{getTotalItems()}</span> {/* Muestra el número total de productos */}
    </div>
  );
}

export default CartWidget;
