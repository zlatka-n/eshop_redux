import React from "react";
import { useBuyContext } from "../context/BuyProvider"
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { connect } from "react-redux";
import _ from "lodash";
import "../css/navBar.css";

function NavBar(props) {
  const context = useBuyContext();
  const { state } = context;

  //fn showing number of items next to the basket icon
  const getNoItems = () => {
    // const mapCart = props.cart;
    // const showNoItems = _.map(mapCart, "quantity");

    const mapCart = state.buy;
    const showNoItems = _.map(mapCart, "quantity");
    console.log(state.buy); 

    //sum of all items
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumQty = showNoItems.reduce(reducer, 0);

    const showInNavBar = () => (sumQty > 0 ? sumQty : null);

    return <React.Fragment>{showInNavBar()}</React.Fragment>;
  };

  return (
    <header>
      <div className="navBar-container">
        <Link to="/">
          <div className="navBar-item">
            <ImBooks className="iconBooks"></ImBooks>
            <span id="bookStore">Book store</span>
          </div>
        </Link>

        <Link to="/basket">
          <div className="navBar-item">
            <span id="noItems">{getNoItems()}</span>
            <FaShoppingBasket className="icon"></FaShoppingBasket>
          </div>
        </Link>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.getBook.buy,
  };
};

export default connect(mapStateToProps)(NavBar);
