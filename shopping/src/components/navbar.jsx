/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";
import { Shop } from "../pages/shop/shop";

export const Navbar = () => {
  const {searchQuery, handlequery} = useContext(ShopContext);
  
  return (
    <div className="navbar">
      <div className="searchBar">
        <input
          type="text"
          className="searchInput"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => handlequery(e.target.value)}
          
        />
      </div>
      <div className="links">
        <Link to="/shop"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>

    </div>
  );
};
