import React from "react";
import { connect } from "react-redux";
import { deleteItem, incrementQty, decrementQty } from "../actions/index";
function Basket(props) {
  const renderBooks = () => {
    return props.buyThis.map((item) => {
      const totalPrice = item.quantity * item.price;

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
            <button onClick={decrementQty()}>-</button>
            {item.quantity}
            <button onClick={incrementQty()}>+</button>
          </div>
          <div>Price: {item.price}</div>
          <div>Total: {totalPrice} EUR</div>
          <button onClick={() => props.deleteItem(item.id)}>Delete</button>
        </div>
      );
    });
  };

  return <div className="basket-container">{renderBooks()}</div>;
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
