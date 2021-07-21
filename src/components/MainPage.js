import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function MainPage(props) {
  const renderItemsList = props.itemsToSell.map((item) => {
    return (
      <div className="container-item" key={item.id}>
        <Link to={`/item/${item.id}`}>
          <img src={item.image}></img>
          <div className="itemTitle">{item.title}</div>
          <div className="itemDescription">{item.description}</div>
          <div className="itemPrice">{item.price} EUR</div>
        </Link>
      </div>
    );
  });

  return <div className="mainPage-container">{renderItemsList}</div>;
}

const mapStateToProps = (state) => {
  return {
    itemsToSell: state.warehouse,
  };
};

export default connect(mapStateToProps)(MainPage);
