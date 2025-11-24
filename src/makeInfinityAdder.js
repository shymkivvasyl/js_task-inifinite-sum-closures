'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (...value) => {
    if (value.length !== 0) {
      sum += value[0];
    } else {
      const youSuma = sum;

      sum = 0;

      return youSuma;
    }

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
