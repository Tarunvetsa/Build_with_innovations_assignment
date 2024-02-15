import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { Navigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const [products, setproducts] = useState([])
  const [success, setSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalAmount, setTotalAmmount] = useState(0);

  useEffect(() => {

    (async () => {
      await requireLogin();
      setTotalAmmount(await getTotalCartAmount())
      const x = await PRODUCTS();
      setproducts(x);
      setIsLoaded(true)
    })()
  }, []);
  useEffect(() => {

    (async () => {
      setTotalAmmount(await getTotalCartAmount())
    })()
  }, [cartItems]);

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
      }
    } catch (error) {
      console.error("Error logging in:", error);
      return <Navigate to="/" />;
    }
  };


  return (
    <div>
      <div className="cart">
        {products.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem key={product.id} data={product} />;
          } else {
            return null;
          }
        })}
      </div>

      {isLoaded ?
        (success ? (
          totalAmount > 0 ? (
            <div className="checkout">
              <p> Subtotal: ${totalAmount} </p>
              <button onClick={() => <Navigate to="/shop" />}> Continue Shopping </button>
              <button
                onClick={() => {
                  checkout();
                  return <Navigate to="/checkout" />;
                }}
              >
                {" "}
                Checkout{" "}
              </button>
            </div>
          ) : (
            <h1> Your Shopping Cart is Empty</h1>
          )
        ) : (
          <Navigate to="/" />
        )) : null}
    </div>
  );
};

export default Cart;
