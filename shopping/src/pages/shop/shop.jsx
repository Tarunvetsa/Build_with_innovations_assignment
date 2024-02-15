/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { Product } from "./Product";
import { Navigate } from "react-router-dom";
import "./shop.css";
import { Password } from "phosphor-react";

export const Shop = () => {
  const [initialProducts, setInitialProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const { searchQuery, loginuser, setProducts } = useContext(ShopContext);

  useEffect(() => {

    (async () => {
      await requireLogin();

      const x = await PRODUCTS();
      setProducts(x)
      setInitialProducts(x)
      setFilteredProducts(x);
      setIsLoaded(true)

    })()
  }, []);

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
      setFilteredProducts(initialProducts);
    }
  }, [searchQuery]);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const requireLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        setSuccess(true);
        // console.log("ABC", response, response.ok, success);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      return <Navigate to="/" />;
    }
  };


  const handleSortBy = (option) => {
    setSortBy(option);
    setShowOptions(false);
    let sortedProducts = [...filteredProducts];

    if (option === "ascending") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "descending") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  const handleClear = () => {
    setSortBy(null);
    setShowOptions(false);
    setFilteredProducts(initialProducts);
  };

  // return JSON.stringify(initialProducts)
  console.log("before", success)
  requireLogin();
  console.log("after", success)
  return (
    <div className="shop">
      <div className="filter">
        <button className="sortbyprice" onClick={handleToggleOptions}>
          Sort by Price {showOptions ? "▲" : "▼"}
        </button>
        {showOptions && (
          <div className="options">
            <button
              className="sortbyprice"
              onClick={() => handleSortBy("ascending")}
            >
              Low to High
            </button>
            <button
              className="sortbyprice"
              onClick={() => handleSortBy("descending")}
            >
              High to Low
            </button>
            <button className="sortbyprice" onClick={handleClear}>
              Clear
            </button>
          </div>
        )}
      </div>
      <div className="products">
        {isLoaded ?
          (success ? (
            filteredProducts.map((product) => (
              <Product key={product.id} data={product} />
            ))
          ) : (
            <Navigate to="/" />
            // <a href="/">Please login</a>
          ))
          : null}
      </div>
    </div>
  );
};
