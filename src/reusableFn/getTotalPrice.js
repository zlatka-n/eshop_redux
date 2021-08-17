import _ from "lodash";

export const getTotalPrice = (qty, price) => {
  const getSum = qty.reduce(function (r, a, i) {
    let total = r + a * price[i];
    total = parseFloat(total).toFixed(2);
    total = parseFloat(total);
    console.log(total);
    return total;
  }, 0);
  return getSum;
};
