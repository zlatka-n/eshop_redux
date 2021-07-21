import React from "react";
import Basket from "./Basket";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div className="navBar-container">
        <Link to="/" className="home">
          Home
        </Link>

        <Link to="/basket">Shopping-Basket</Link>
      </div>
    </header>
  );
}

export default NavBar;
