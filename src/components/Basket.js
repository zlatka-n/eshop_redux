import React from "react";
import { connect } from "react-redux";
import { deleteItem, incrementQty, decrementQty } from "../actions/index";
import _ from "lodash";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";

function Basket(props) {
  //calculate the total price of order
  const getTotalPriceOfAll = () => {
    //Finally found the right answers on stackoverflow :)
    // create price array and qty array with _.map
    const buy = props.buyThis;
    const qty = _.map(buy, "quantity");
    const price = _.map(buy, "price");

    //multiply and sum those two arrays, total = price*qty+price*qty...
    const totalPriceBooks = qty.reduce(function (r, a, i) {
      let total = r + a * price[i];
      total = parseFloat(total).toFixed(2);
      total = parseFloat(total);
      //console.log(typeof total);
      return total;
    }, 0);

    const textForPrice =
      totalPriceBooks > 0
        ? "Total price of your order:"
        : "Your basket is empty.";

    const showPrice = totalPriceBooks > 0 ? totalPriceBooks : null;
    return (
      <div>
        {textForPrice} {showPrice}
      </div>
    );
  };

  const renderBooks = () => {
    return props.buyThis.map((item) => {
      let totalPrice = item.quantity * item.price;
      totalPrice = totalPrice.toFixed(2);
      //console.log(typeof totalPrice);

      const decrementQty = () =>
        item.quantity < 2 ? null : () => props.decrementQty(item.id);

      const incrementQty = () =>
        item.quantity > 19 ? null : () => props.incrementQty(item.id);

      return (
        <div key={item.id}>
          <img src={item.image} alt="book in the cart"></img>
          <div>{item.title}</div>
          <div>{item.author}</div>
          <div>
            Quantity:
            <HiOutlineMinusCircle
              onClick={decrementQty()}
            ></HiOutlineMinusCircle>
            {item.quantity}
            <HiOutlinePlusCircle onClick={incrementQty()}></HiOutlinePlusCircle>
          </div>
          <div>Price: {item.price}</div>
          <div>Total: {totalPrice} EUR</div>
          <button onClick={() => props.deleteItem(item.id)}>Delete</button>
        </div>
      );
    });
  };

  return (
    <div className="basket-container">
      {renderBooks()}
      {getTotalPriceOfAll()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    buyThis: state.getBook.buy,
  };
};

export default connect(mapStateToProps, {
  deleteItem,
  incrementQty,
  decrementQty,
})(Basket);
