import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Shop } from './pages/shop/shop.jsx';
import Cart from './pages/cart/cart.jsx';
import Login from './pages/Login/Login.jsx'
import { Navbar } from "./components/navbar";
import { ShopContextProvider } from "./context/shop-context.jsx";
import './App.css'

function App() {
  return (
    <div className="App">
      <ShopContextProvider value="">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
