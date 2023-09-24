import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import './cartwidget.css';

const CartWidget = ({ itemCount }) => {
  return (
    <div className='containerCart' >
      <BsFillCartCheckFill className='Cart'/>
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartWidget;
