export const buyItem = (id) => {
  return {
    type: "BUY_ITEM",
    payload: {
      id: id,
      // quantity: quantity,
      // totalPrice: price * quantity,
    },
  };
};

export const getDeliveryInfo = (values) => {
  return {
    type: "DELIVERY_INFO",
    payload: {
      address: values,
    },
  };
};

export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: {
      id: id,
    },
  };
};

export const incrementQty = (id) => {
  return {
    type: "INCREMENT_QTY",
    payload: {
      id: id,
    },
  };
};

export const decrementQty = (id) => {
  return {
    type: "DECREMENT_QTY",
    payload: {
      id: id,
    },
  };
};
