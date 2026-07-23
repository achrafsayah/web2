import React from "react";
import { Link } from "react-router-dom";

// This is the top navigation bar shown on every page.
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📚 My Bookstore</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
