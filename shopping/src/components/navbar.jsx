import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";

export const Navbar = () => {
  const { searchQuery, handlequery } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

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
        <Link to="/" onClick={handleLogout}>Logout</Link>
      </div>
    </div>
  );
};
