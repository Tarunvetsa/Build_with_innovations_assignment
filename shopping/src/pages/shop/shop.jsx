/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css";

export const Shop = () => {
  const initialProducts = PRODUCTS();
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    // Set filteredProducts to initialProducts when component mounts
    setFilteredProducts(initialProducts);
  }, [initialProducts]);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSortBy = (option) => {
    setSortBy(option);
    setShowOptions(false); // Close the dropdown after selecting an option

    let sortedProducts = [...filteredProducts]; // Create a copy of the filtered products array

    if (option === 'ascending') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === 'descending') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts); // Update the filtered products state
  };

  const handleClear = () => {
    setSortBy(null); // Reset sorting option
    setFilteredProducts(initialProducts); // Reset filtered products to initial state
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
