import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart">
      <FaShoppingCart />
      <span className="cart-count">{totalItems}</span>
    </div>
  );
}

export default CartWidget;