import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav--link">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="Product">
        <span>Product</span>
      </Link>
    </div>
  );
};
export default NavBar;
