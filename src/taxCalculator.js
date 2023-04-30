const calculateTax = (price) => { return price * 0.1; };

const calculateTotal = (price, quantity) => {
  const tax = calculateTax(price) * quantity;
  const total = price * quantity + tax;
  return Math.ceil(total);
};

// console.log(calculateTotal(10, 2));
/* export your function from the file */

module.exports = {
  calculateTotal,
  calculateTax,
};