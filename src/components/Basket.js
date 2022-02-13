import React from "react";
import { connect } from "react-redux";
import {useBuyContext} from "../context/BuyProvider";
import { deleteItem, incrementQty, decrementQty } from "../actions/index";
import _ from "lodash";
import { TiDelete } from "react-icons/ti";
import { BiEuro, BiPlus, BiMinus } from "react-icons/bi";
import "../css/basket.css";
import { useHistory } from "react-router-dom";
import ContinueShopping from "./ContinueShopping";
import { getTotalPrice } from "../reusableFn/getTotalPrice";

function Basket(props) {
  let history = useHistory();

  const context = useBuyContext();
  const {state, dispatch} = context;
  //calculate the total price of order
  const getTotalPriceOfAll = () => {
    //Finally found the right answers on stackoverflow :)

    // create price array and qty array with _.map
    console.log(state);
    const buy = state.buy;
    const qty = _.map(buy, "quantity");
    const price = _.map(buy, "price");

    //reusable fn, calculate the sum of all books: total = price*qty+price*qty...
    const totalPriceBooks = getTotalPrice(qty, price);

    //(not)showing price
    const textForPrice =
      totalPriceBooks > 0 ? "TOTAL" : "Your basket is empty.";

    const textForPriceClass =
      totalPriceBooks > 0 ? "totalSumLine" : "emptyBasket";

    //show button if basket is empty, navigate to homepage
    const emptyBasketBtn = () => {
      if (totalPriceBooks < 1) {
        return (
          <React.Fragment>
            <ContinueShopping />
          </React.Fragment>
        );
      }
    };

    //show checkout btn
    const checkoutBtn = () => {
      const goToCheckOut = () => {
        return history.push("/delivery");
      };
      if (totalPriceBooks > 0) {
        return (
          <button id="checkoutBtn" onClick={goToCheckOut}>
            Proceed to checkout
          </button>
        );
      }
    };

    const showPrice = totalPriceBooks > 0 ? totalPriceBooks : null;
    const showEUR =
      totalPriceBooks > 0 ? <BiEuro className="eurIcon"></BiEuro> : null;

    const summary = () => {
      if (totalPriceBooks > 0) {
        return (
          <div className="summaryTable">
            <div className="summaryTitle">SUMMARY</div>
            <span className="orderValueDelivery">
              <div className="orderValueLine">
                Order value
                <div className="orderValue">
                  <BiEuro className="eurIcon"></BiEuro>
                  {totalPriceBooks}
                </div>
              </div>
              <div className="deliveryLine">
                Delivery <div className="deliveryFee">Free</div>
              </div>
            </span>
          </div>
        );
      }
      return;
    };

    return (
      <div>
        {summary()}
        <div className={textForPriceClass}>
          {textForPrice}
          <span>{emptyBasketBtn()}</span>
          <span className="totalSum">
            {showEUR}
            {showPrice}
          </span>
          <div>{checkoutBtn()}</div>
          {/* <button>buy sth</button> */}
        </div>
      </div>
    );
  };

  const renderBooks = () => {
    return state.buy.map((item) => {
      let totalPrice = item.quantity * item.price;
      totalPrice = totalPrice.toFixed(2);
      //console.log(typeof totalPrice);

      // const decrementQty = () =>
      //   item.quantity < 2 ? null : () => props.decrementQty(item.id);

      // const incrementQty = () =>
      //   item.quantity > 19 ? null : () => props.incrementQty(item.id);

      const decrementQty = () =>
        item.quantity < 2 ? null : () => dispatch({type: 'decrementQty', payload: item.id})

      const incrementQty = () =>
        item.quantity > 19 ? null : () => dispatch({type: 'incrementQty', payload: item.id});

      return (
        <div key={item.id} className="item-container">
          <div className="itemInfoBasket">
            <img
              src={item.image}
              className="imgBasket"
              alt="book in the cart"
            ></img>
            <TiDelete
              className="deleteBasket"
              onClick={() => dispatch({type: 'deleteItem', payload: item.id})}
            >
              Delete
            </TiDelete>
            <div className="itemTextBasket">
              <div id="titleBasket">{item.title}</div>
              <div>{item.author}</div>
              <div>
                Quantity:
                <span className="qtySpan">
                  <BiMinus onClick={decrementQty()}></BiMinus>
                  {item.quantity}
                  <BiPlus onClick={incrementQty()}></BiPlus>
                </span>
              </div>
              <div>
                Price: <span className="itemPriceBasket">{item.price}</span>
              </div>
              <div className="totalPriceItem">
                <BiEuro className="eurIcon"></BiEuro>
                {totalPrice}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="basket-container">
      <div>{renderBooks()}</div>
      <div className="summaryBasket">{getTotalPriceOfAll()}</div>
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
