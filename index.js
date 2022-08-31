const _ = require('lodash');

class MathFuncs {
  // eslint-disable-next-line class-methods-use-this
  addition(...nums) {
    return _.reduce(nums, (prev, current) => prev + current, 0);
  }

  // eslint-disable-next-line class-methods-use-this
  subtraction(num1, num2) {
    return num1 - num2;
  }

  // eslint-disable-next-line class-methods-use-this
  multiplication(...nums) {
    return _.reduce(nums, (prev, current) => prev * current, 1);
  }
}

const calc = (boolean) => {
  if (boolean !== true) return;

  const mathFuncInit = new MathFuncs();
  const results = {
    addition: `${mathFuncInit.addition(3, 4, 5)}`,
    subtraction: `${mathFuncInit.subtraction(4, -30)}`,
    multiple: `${mathFuncInit.multiplication(5, -5, 4)}`,
  };

  // eslint-disable-next-line consistent-return
  return results;
};

console.log(calc(true));
