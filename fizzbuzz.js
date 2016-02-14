'use strict';

var multipleOf = function(factor, number) {
  return number % factor === 0;
};

var mappings = [
  { factor: 3, word: 'Fizz' },
  { factor: 5, word: 'Buzz' }
];

var fizzbuzz = function(number) {
  if ((typeof number) !== 'number') {
    throw new TypeError('"' + number + '" is not a valid input');
  }
  var words = mappings
    .filter(function(mapping) {
      return multipleOf(mapping.factor, number);
    })
    .map(function(mapping) {
      return mapping.word;
    });
  if (words.length > 0) {
    return words.join('');
  } else {
    return number.toString();
  }
};

export default fizzbuzz;

