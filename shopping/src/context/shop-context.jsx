/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

export const ShopContextProvider = ( props ) => {
const x = PRODUCTS()
  const [products,setProducts ]= useState(x);
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < products.length; i++) {
      cart[products[i].id] = 0;
    }
    return cart;
  };
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [displayItems, setDisplayItems] = useState(x);
  const [searchQuery, setSearchQuery] = useState("");

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = x.find((product) => product.id === Number.parseInt(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
    if(Object.keys(prev).map(v => Number.parseInt(v)).includes(itemId)){
      prev[itemId] = prev[itemId]+1;
    }else{
      prev[itemId]= 1;  
    }
    return prev;
    });
  };
  
  const handlequery = (q) => {
    setSearchQuery(q);
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
    
    searchQuery,
    handlequery
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
