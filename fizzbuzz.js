"use strict";

var multipleOf = function(factor, number) {
  return number % factor == 0;
};

var FizzBuzz = function(number) {
  var mappings = [
    { factor: 3, word: "Fizz" },
    { factor: 5, word: "Buzz" }
  ];
  var words = mappings
    .filter(function(mapping) {
      return multipleOf(mapping.factor, number);
    })
    .map(function(mapping) {
      return mapping.word;
    });
  if (words.length > 0) {
    return words.join("");
  } else {
    return number.toString();
  }
};

module.exports = FizzBuzz;
