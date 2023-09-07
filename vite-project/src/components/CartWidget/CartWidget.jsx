import {BsFillCartCheckFill} from 'react-icons/bs'
import './cartwidget.css';




const Cart = ({ itemCount }) => {
  return (
    <div className='containerCart' >
      <BsFillCartCheckFill className='Cart'/>
      <span className="item-count">{itemCount}
        1
      </span>
    </div>
  )
}
export default Cart;
