import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

function NavBar() {
  return (
    <header>
      <div className="navBar-container">
        <Link to="/" className="home">
          <ImBooks></ImBooks>Book store
        </Link>

        <Link to="/basket">
          <FaShoppingBasket></FaShoppingBasket>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
