'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value >= 0) {
      sum += value;
    } else {
      const youSuma = sum;

      sum = 0;

      return youSuma;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
