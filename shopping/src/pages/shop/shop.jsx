/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { Product } from "./Product";
import "./shop.css";

export const Shop = () => {
  const initialProducts = PRODUCTS();
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const {searchQuery}=useContext(ShopContext)

  useEffect(() => {
    setFilteredProducts(initialProducts);
  }, [initialProducts]);
  
  useEffect(() => {
    if (searchQuery) {
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredProducts(data.products);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    } else {
      setFilteredProducts([initialProducts]);
    }
  }, [searchQuery]);

  
  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSortBy = (option) => {
    setSortBy(option);
    setShowOptions(false); 
    let sortedProducts = [...filteredProducts]; 

    if (option === 'ascending') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === 'descending') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  const handleClear = () => {
    setSortBy(null); 
    setShowOptions(false);
    setFilteredProducts(initialProducts);
  };

  return (
    <div className="shop">
      <div className="filter">
        <button className="sortbyprice" onClick={handleToggleOptions}>
          Sort by Price {showOptions ? '▲' : '▼'}
        </button>
        {showOptions && (
          <div className="options">
            <button className="sortbyprice" onClick={() => handleSortBy('ascending')}>
              Low to High
            </button>
            <button className="sortbyprice" onClick={() => handleSortBy('descending')}>
              High to Low
            </button>
            <button className="sortbyprice" onClick={handleClear}>
              Clear
            </button>
          </div>
        )}
      </div>
      <div className="products">
        {filteredProducts.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
  
};