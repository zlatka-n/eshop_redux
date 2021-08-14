import React from "react";
import "../css/order.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

function OrderCompleted() {
  return (
    <div className="order-container">
      <div className="completedOrder-title">
        <span className="completedIcon">
          <AiOutlineCheckCircle className="completedIcon" />
        </span>
        <span>Order confirmed</span>
      </div>
      <div>
        Thank your for your purchase. Your order will be dispatched within 2
        days.
      </div>
    </div>
  );
}

export default OrderCompleted;
