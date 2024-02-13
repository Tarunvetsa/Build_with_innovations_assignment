import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Shop from './pages/shop/shop.jsx';
import Login from './pages/Login/Login.jsx'
import { Navbar } from "./components/navbar";
import './App.css'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/cart" element="Cart"/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
