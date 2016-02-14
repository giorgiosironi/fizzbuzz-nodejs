'use strict';

var multipleOf = (factor, number) => {
  return number % factor === 0;
};

var mappings = new Map();
mappings.set(3, 'Fizz');
mappings.set(5, 'Buzz');

var fizzbuzz = (number) => {
  if ((typeof number) !== 'number') {
    throw new TypeError(`"${number}" is not a valid input`);
  }
  var words = [];
  for (let [factor, word] of mappings.entries()) {
    if (multipleOf(factor, number)) {
      words.push(word);
    }
  }
  if (words.length > 0) {
    return words.join('');
  } else {
    return number.toString();
  }
};

export default fizzbuzz;

