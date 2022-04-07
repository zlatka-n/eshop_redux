import React, { useEffect, useState } from "react";
import { buyItem } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/mainPage.css";
import ModalWindow from "../components/ModalWindow";
import { useBuyContext } from "../context/BuyProvider";
function MainPage(props) {
  const [showModal, setShowModal] = useState(false);

  const context = useBuyContext();
  const { dispatch, state } = context;

  /*COUNTDOWN TIMER, FROM 10 MINS DOWN*/
  const timeInMins = 2;
  let [time, setTime] = useState(timeInMins * 60);
  let [minutes, setMinutes] = useState(timeInMins);
  let [seconds, setSeconds] = useState(0);

  const countdown = () => {
    setMinutes(Math.floor(time / 60));
    setSeconds(time % 60);
    if (time > 0) setTime(time--);
  };

  useEffect(() => {
    setInterval(countdown, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, []);

  let getSeconds = seconds > 9 ? seconds : `0${seconds}`;

  const hideModal = () => {
    setShowModal(false);
  };

  const renderList = () => {
    return props.products.map((el) => {
      //show modal and update buy state
      const onBuyClick = () => {
        dispatch({ type: "buyItem", payload: el.id });
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
  // let getSeconds = seconds > 9 ? seconds : `0${seconds}`;
  return (
    <div className="mainPage-container">
      <div>
        countdown: {minutes} : {getSeconds}
      </div>
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
