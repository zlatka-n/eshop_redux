import React from "react";
import { Field, reduxForm } from "redux-form";
import { getDeliveryInfo } from "../actions/index";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "../css/deliveryForm.css";
import { BiEuro } from "react-icons/bi";
import _ from "lodash";
import { getTotalPrice } from "../reusableFn/getTotalPrice";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email address - required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.firstName) {
    errors.firstName = "First name - required";
  }

  if (!values.lastName) {
    errors.lastName = "Last name - required";
  }

  if (!values.deliveryAddress) {
    errors.deliveryAddress = "Delivery address - required";
  }

  if (!values.postalCode) {
    errors.postalCode = " Postal code - required";
  }

  if (!values.mobilePhone) {
    errors.mobilePhone = "Mobile phone - required";
  } else if (!/[0-9+]{9,13}/i.test(values.mobilePhone)) {
    errors.mobilePhone = "Invalid mobile phone";
  }

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <React.Fragment>
    <label>{label}</label>
    <span>
      <input {...input} placeholder={label} type={type} />
      {touched && error && (
        <span className="error-form">
          <div>{error}</div>
        </span>
      )}
    </span>
  </React.Fragment>
);

let DeliveryForm = (props) => {
  let history = useHistory();

  const renderOrderedBooks = () => {
    return props.buyThis.map((item) => {
      //total price of a book title
      let totalPrice = item.quantity * item.price;
      totalPrice = totalPrice.toFixed(2);

      return (
        <div key={item.id} className="itemDelivery-container">
          <div className="totalPriceDelivery">
            <BiEuro className="eurIconDelivery"></BiEuro>
            {totalPrice}
          </div>
          <div id="titleDelivery">{item.title}</div>
          <div className="qtyDelivery">{item.quantity}x</div>
          <div className="itemPriceDelivery">{item.price}</div>
        </div>
      );
    });
  };

  //calculate the total price of order
  const getTotalPriceOfAll = () => {
    // create price array and qty array with _.map
    const buy = props.buyThis;
    const qty = _.map(buy, "quantity");
    const price = _.map(buy, "price");

    const totalPriceBooks = getTotalPrice(qty, price);

    return (
      <React.Fragment>
        <div>
          Delivery <div id="freeWord">FREE</div>
        </div>
        <div className="total-delivery">
          Total
          <div id="totalPriceBooks-delivery">
            <BiEuro></BiEuro>
            {totalPriceBooks}
          </div>
        </div>
      </React.Fragment>
    );
  };

  const checkoutSucceeded = () => {
    props.getDeliveryInfo();
    history.push("/order");
  };
  const { handleSubmit, pristine, submitting, invalid } = props;
  //TODO: Payment

  return (
    <div className="deliveryContainer">
      <form onSubmit={handleSubmit} className="formBox">
        <div className="delivery-address-title">Delivery information</div>
        <div>
          <label htmlFor="email">Email address</label>
          <div>
            <Field name="email" component={renderField} type="text" />
          </div>
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <div>
            <Field name="firstName" component={renderField} type="text" />
          </div>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <div>
            <Field name="lastName" component={renderField} type="text" />
          </div>
        </div>
        <div>
          <label htmlFor="deliveryAddress">Delivery address</label>
          <div>
            <Field name="deliveryAddress" component={renderField} type="text" />
          </div>
        </div>
        <div>
          <label htmlFor="postalCode">Postal code</label>
          <div>
            <Field name="postalCode" component={renderField} type="text" />
          </div>
        </div>
        <div>
          <label htmlFor="mobilePhone">Mobile phone</label>
          <div>
            <Field name="mobilePhone" component={renderField} type="text" />
          </div>
        </div>
        <button
          className="continue-btn"
          type="submit"
          onClick={checkoutSucceeded}
          disabled={invalid || submitting || pristine}
        >
          Continue
        </button>
      </form>
      <div className="deliverySummary">
        <div className="summary-checkout-title">Order summary</div>
        {renderOrderedBooks()}
        <div className="totalSummary">{getTotalPriceOfAll()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    buyThis: state.getBook.buy,
  };
};

DeliveryForm = reduxForm({
  form: "delivery",
  validate,
})(DeliveryForm);

export default connect(mapStateToProps, { getDeliveryInfo })(DeliveryForm);
