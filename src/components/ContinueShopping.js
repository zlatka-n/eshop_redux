import React from "react";
import { useHistory } from "react-router-dom";

function ContinueShopping() {
  let history = useHistory();
  const goHome = () => {
    return history.push("/");
  };
  return (
    <div className="emptyBasketBtn-container">
      <button id="emptyBasketBtn" onClick={goHome}>
        Continue shopping
      </button>
    </div>
  );
}

export default ContinueShopping;
