import React, { useState } from "react";
import { connect } from "react-redux";
import { buyItem } from "../actions/index";

function ItemPage(props) {
  //console.log(props);
  const [quantity, setQuantity] = useState(1);

  //using history object, programmatic navigation. if history's id equals store's id, right object key values will be rendered
  const historyId = Number(props.match.params.id);

  // useEffect(() => {
  //   const values = Object.values(props.itemsToSell);
  //   values.map((book) => {
  //     //console.log("render");
  //     const bookQuant = book.map((item) => {
  //       return setQuantity(item.quantity + 1);
  //     });
  //     return bookQuant;
  //   });
  // }, [quantity]);

  const handleSubmit = () => {
    setQuantity(quantity + 1);
    //console.log("handleSubmit");
    //console.log(quantity);
    props.buyItem(historyId, quantity);
  };

  const renderItemInfo = () => {
    return props.products.map((item) => {
      if (item.id === historyId) {
        return (
          <div className="container-item" key={item.id}>
            <img src={item.image} className="itemImg" alt="books' item"></img>
            <div>
              <div className="itemTitle">{item.title}</div>
              <div className="itemAuthor">{item.author}</div>
              <div className="itemPrice">Price: {item.price} EUR</div>
              <button onClick={() => handleSubmit()}>Add to basket</button>
            </div>
          </div>
        );
      }
      return null;
    });
  };

  return <div className="itemContainer">{renderItemInfo()}</div>;
}

const mapStateToProps = (state) => {
  return {
    itemsToSell: state.getBook,
    products: state.getBook.products,
  };
};
export default connect(mapStateToProps, { buyItem })(ItemPage);
