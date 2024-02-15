/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../../context/shop-context";

export const Product = ({ data }) => {
  Product.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired
    }).isRequired
  };

  const { id, title, price, thumbnail } = data;
  const { cartItems, addToCart } = useContext(ShopContext);
  const [u, setU] = useState(true)

  //   const cartItemCount = cartItems[id];
  return (
    <div className="product">
      <img src={thumbnail} alt={title} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => { addToCart(id); setU(v => !v) }}>
        Add To Cart {(cartItems[id] > 0 && `(${cartItems[id]})`)}
      </button>
    </div>
  );
};
