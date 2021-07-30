import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function MainPage(props) {
  const renderItemList = () => {
    const objectValues = Object.values(props.itemsToSell);

    const list = objectValues.map((item) => {
      const mapAgain = item.map((el) => {
        return (
          <div className="container-item" key={el.id}>
            <Link to={`/item/${el.id}`}>
              <img src={el.image} alt="clothes item"></img>
              <div className="itemTitle">{el.title}</div>
              <div className="itemAuthor">{el.author}</div>
              <div className="itemPrice">{el.price} EUR</div>
            </Link>
          </div>
        );
      });
      return mapAgain;
    });
    return list;
  };

  return <div className="mainPage-container"> {renderItemList()}</div>;
}

const mapStateToProps = (state) => {
  return {
    itemsToSell: state.showItems,
  };
};

export default connect(mapStateToProps)(MainPage);
