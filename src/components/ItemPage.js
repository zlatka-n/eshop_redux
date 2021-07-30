import React, { useState, useEffect } from "react";
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

  const renderItemList = () => {
    const objectValues = Object.values(props.thisItem);

    const list = objectValues.map((item) => {
      const mapAgain = item.map((el) => {
        if (el.id === historyId) {
          return (
            <div className="container-item" key={el.id}>
              <img src={el.image} className="itemImg" alt="clothes item"></img>
              <div>
                <div className="itemTitle">{el.title}</div>
                <div className="itemAuthor">{el.author}</div>
                <div className="itemPrice">{el.price} EUR</div>
                <button onClick={() => handleSubmit()}>Add to basket</button>
              </div>
            </div>
          );
        }
      });
      return mapAgain;
    });
    return list;
  };

  return (
    <div className="itemContainer">
      {renderItemList()}
      {/* {addToCart()} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsToSell: state.getBook,
    thisItem: state.showItems,
  };
};
export default connect(mapStateToProps, { buyItem })(ItemPage);
