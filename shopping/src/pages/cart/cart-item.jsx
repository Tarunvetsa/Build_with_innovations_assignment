import PropTypes from 'prop-types';
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import './cart.css'

export const CartItem = (props) => {
  const { id, title, price, thumbnail } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={thumbnail} alt=''/>
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button className="cartbutton" onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="cartbutton" onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
