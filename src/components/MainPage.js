import React, { useState } from "react";
import { buyItem } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/mainPage.css";
import ModalWindow from "../components/ModalWindow";

function MainPage(props) {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  const renderList = () => {
    return props.products.map((el) => {
      //show modal and update buy state
      const onBuyClick = () => {
        props.buyItem(el.id);
        setShowModal(true);
      };
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
          <button className="addBtn" onClick={onBuyClick}>
            Add to basket
          </button>
        </div>
      );
    });
  };

  return (
    <div className="mainPage-container">
      {renderList()}
      <div className="showModal">
        {showModal === true ? (
          <ModalWindow showModal={showModal} hideModal={hideModal} />
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.getBook.products,
  };
};

export default connect(mapStateToProps, { buyItem })(MainPage);
