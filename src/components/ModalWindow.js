import React, { useState } from "react";
import Modal from "../components/Modal";
import { useHistory } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";

function ModalWindow(props) {
  let history = useHistory();

  const renderActions = () => {
    const goToBasket = () => {
      history.push("/basket");
    };

    return (
      <React.Fragment>
        {/* <span className="closeModalIcon">
          <GrFormClose />
        </span> */}
        <button className="modalBasketBtn" onClick={goToBasket}>
          Basket / Checkout
        </button>
        <button className="modalContinueBtn" onClick={props.hideModal}>
          Continue shopping
        </button>
      </React.Fragment>
    );
  };

  const closeModal = () => {
    return (
      <React.Fragment>
        <GrFormClose onClick={props.hideModal} />
      </React.Fragment>
    );
  };

  return (
    <div>
      {props.showModal === true ? (
        <Modal
          title="Item added to your basket"
          actions={renderActions()}
          closeModal={closeModal()}
        />
      ) : null}
    </div>
  );
}

export default ModalWindow;
