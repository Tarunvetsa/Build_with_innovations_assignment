import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="navbar">
      <div className="searchBar">
        <input
          type="text"
          className="searchInput"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
