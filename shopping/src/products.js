import { useState, useEffect } from "react";

export const PRODUCTS = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            if (data && data.products) {
                setProducts(data.products);
            } else {
                console.error('Invalid response format:', data);
            }
        })
        .catch(error => console.error('Error fetching products:', error));
    }, []);
    return products;
}
