import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
  return (
      <div className="cart">
         <FaShoppingCart />
        <span className="cart-count">0</span>
      </div>
      
  )
}

export default CartWidget;