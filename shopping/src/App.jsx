import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop  from './pages/shop/Shop.jsx';
import Cart from './pages/cart/cart.jsx';
import Login from './pages/Login/Login.jsx'
import { Navbar } from "./components/navbar";
import { ShopContextProvider } from "./context/shop-context.jsx";
import './App.css'

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/shop"
              element={
                <>
                  <Navbar />
                  <Shop />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Navbar />
                  <Cart />
                </>
              }
            />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App;
