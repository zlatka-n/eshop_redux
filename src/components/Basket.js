import React from "react";
import { connect } from "react-redux";

function Basket(props) {
  const renderBasketItems = () => {
    const booksToShip = Object.values(props.buyThis);
    const bookDb = Object.values(props.bookDb);

    // console.log(bookDb);

    //check "added-to-cart" books'id with books'id from the db (availableItems.js). If those two ids match, then get "title", "author", "price" from the db (availableItems.js).
    const mapBookDb = bookDb.map((el) => {
      // console.log(el);

      const renderBasket = el.map((book) => {
        //console.log(book.id);
        return booksToShip.map((item) => {
          if (book.id === item.id) {
            // console.log(`${book.title}, ${book.author}, ${book.price}`);
            const totalPrice = book.price * item.quantity;
            console.log(totalPrice);

            return (
              <div className="bookInTheCart" key={book.id}>
                <div>Title: {book.title}</div>
                <div>Author: {book.author}</div>
                <div>Price: {book.price}</div>

                <div>Quantity: {item.quantity}</div>
                <div>Total price: {totalPrice}</div>
                <div>Book id: {book.id}</div>
                <div>Store id: {item.id}</div>
              </div>
            );
          }
          return null;
        });
      });
      return renderBasket;
    });

    return mapBookDb;
  };
  return <div className="basket-container">{renderBasketItems()}</div>;
}

const mapStateToProps = (state) => {
  return {
    buyThis: state.getBook,
    bookDb: state.showItems,
  };
};

export default connect(mapStateToProps)(Basket);
