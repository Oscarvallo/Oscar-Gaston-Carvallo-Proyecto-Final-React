import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ id, title, price, description, image }) => {
  return (
  <div className="item">
    <div className="card">
      <img className="imgCard" src={image} alt={title} />
      <h3 className="titleCard">{title}</h3> 
      <h6 className="precioCard">${price}</h6>
      <button className="agregarButton">Agregar producto</button>
      <Link to={`/product/${id}`}><h6 className="detailCard">Ver detalle</h6></Link>
    </div>
    </div>
  );
};

export default Item;

//    <h6 className="descriptionCard">{description}</h6>