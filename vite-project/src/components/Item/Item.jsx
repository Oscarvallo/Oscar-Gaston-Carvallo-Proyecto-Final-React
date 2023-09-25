import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, description, image }) => {
  return (
    <div>
      <img style={{ width: "200px", height: "120px" }} src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>${price}</p>
      <Link to={`/product/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
