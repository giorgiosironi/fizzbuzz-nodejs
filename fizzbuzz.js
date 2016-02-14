"use strict";

// TODO: should I hide these functions inside a IIFE?
var multipleOf = function(factor, number) {
  return number % factor == 0;
};

var FizzBuzz = function(number) {
  if (multipleOf(5, number)) {
    return "Buzz";
  } else if (multipleOf(3, number)) {
    return "Fizz";
  }
  return number.toString();
};

module.exports = FizzBuzz;
