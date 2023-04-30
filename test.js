const { expect } = require('chai');
const sinon = require('sinon');
const taxCalculator = require('./src/taxCalculator');
const liCreator = require('./src/liCreator');



describe('taxCalculator module', () => {
  describe('calculateTotal function', () => {
    it('calculates the correct total', () => {
      const price = 10;
      const quantity = 2;
      // price * quantity + tax
      const expectedTotal = 22;


      // Spy on the `calculateTax` function
      const calculateTaxSpy = sinon.spy(taxCalculator, 'calculateTotal');

      // Call the `calculateTotal` function and make assertions
      const result = taxCalculator.calculateTotal(price, quantity);

      // console.log(result);
      expect(result).to.equal(expectedTotal);
      expect(calculateTaxSpy.calledWith(price)).to.be.true;

      // Restore the spy after the test
      calculateTaxSpy.restore();
    });
  });

  describe('calculateTax function', () => {
    it('calculates the correct tax', () => {
      const price = 10;
      const expectedTax = 1;

      // Check if price is a number before calling the function
      expect(typeof price).to.equal('number');

      // Call the `calculateTax` function
      const result = taxCalculator.calculateTax(price);

      expect(result).to.equal(expectedTax);
    });
  });
});
