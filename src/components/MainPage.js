import React from "react";
import { buyItem } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/mainPage.css";

function MainPage(props) {
  const renderList = () => {
    return props.products.map((el) => {
      return (
        <div className="container-item" key={el.id}>
          <Link className="link" to={`/item/${el.id}`}>
            <img src={el.image} alt="book item" className="imgMainPage"></img>
            <div className="item-info">
              <div className="itemTitle">{el.title}</div>
              <div className="itemAuthor">{el.author}</div>
              <div className="itemPrice">{el.price} EUR</div>
            </div>
          </Link>
          <button className="addBtn" onClick={() => props.buyItem(el.id)}>
            Add to basket
          </button>
        </div>
      );
    });
  };

  return <div className="mainPage-container">{renderList()}</div>;
}

const mapStateToProps = (state) => {
  return {
    products: state.getBook.products,
  };
};

export default connect(mapStateToProps, { buyItem })(MainPage);
