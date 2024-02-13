import { useState, useEffect } from 'react';
import './shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="shop-container">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <div className="product-thumbnail">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="product-details">
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
