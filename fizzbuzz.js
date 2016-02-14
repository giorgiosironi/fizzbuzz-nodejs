"use strict";

var FizzBuzz = function(number) {
  if (number % 5 == 0) {
    return "Buzz";
  }
  return "Fizz";
};

module.exports = FizzBuzz;
