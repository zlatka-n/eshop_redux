import React from "react";
import { Field, reduxForm } from "redux-form";
import { getDeliveryInfo } from "../actions/index";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.deliveryAddress) {
    errors.deliveryAddress = "Required";
  }

  if (!values.postalCode) {
    errors.postalCode = "Required";
  }

  if (!values.mobilePhone) {
    errors.mobilePhone = "Required";
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
      {touched && error && <span>{error}</span>}
    </span>
  </React.Fragment>
);

let DeliveryForm = (props) => {
  let history = useHistory();

  const checkoutSucceeded = () => {
    props.getDeliveryInfo();
    history.push("/order");
  };
  const { handleSubmit, pristine, submitting, invalid } = props;
  //TODO: Payment

  return (
    <form onSubmit={handleSubmit} className="deliveryBox">
      <div>
        <label htmlFor="email">Email address</label>
        <Field name="email" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="deliveryAddress">Delivery address</label>
        <Field name="deliveryAddress" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="postalCode">Postal code</label>
        <Field name="postalCode" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="mobilePhone">Mobile phone</label>
        <Field name="mobilePhone" component={renderField} type="text" />
      </div>
      <button
        type="submit"
        onClick={checkoutSucceeded}
        disabled={invalid || submitting || pristine}
      >
        Submit
      </button>
    </form>
  );
};

DeliveryForm = reduxForm({
  form: "delivery",
  validate,
})(DeliveryForm);

export default connect(null, { getDeliveryInfo })(DeliveryForm);
