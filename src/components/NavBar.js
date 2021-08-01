import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { connect } from "react-redux";
import _ from "lodash";
function NavBar(props) {
  //fn showing number of items next to the basket icon
  const getNoItems = () => {
    const mapCart = props.cart;
    const showNoItems = _.map(mapCart, "quantity");

    //sum of all items
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumQty = showNoItems.reduce(reducer, 0);

    const showInNavBar = () => (sumQty > 0 ? sumQty : null);

    return <React.Fragment>{showInNavBar()}</React.Fragment>;
  };

  return (
    <header>
      <div className="navBar-container">
        <Link to="/" className="home">
          <ImBooks></ImBooks>Book store
        </Link>

        <Link to="/basket">
          <div>
            {getNoItems()}
            <FaShoppingBasket></FaShoppingBasket>
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
