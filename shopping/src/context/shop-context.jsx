/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

  const [products, setProducts] = useState([]);
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < products.length; i++) {
      cart[products[i].id] = 0;
    }
    return cart;
  };
  const [loginuser, setLoginuser] = useState("");
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [displayItems, setDisplayItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getTotalCartAmount = async () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => Number.parseInt(product.id) === Number.parseInt(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (itemId in prev) {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      } else {
        return { ...prev, [itemId]: 1 };
      }
    });
  };

  const handlequery = (q) => {
    setSearchQuery(q);
  };

  const fixlogin = (val) => {
    setLoginuser(val);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };
  // console.log('new')
  // console.log(products,cartItems,addToCart,updateCartItemCount,removeFromCart,getTotalCartAmount,checkout)
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    setProducts,
    searchQuery,
    handlequery,
    loginuser,
    fixlogin,
  };


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
