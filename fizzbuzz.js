"use strict";

// TODO: should I hide these functions inside a IIFE?
var multipleOf = function(factor, number) {
  return number % factor == 0;
};

var FizzBuzz = function(number) {
  // TODO: objects may not maintain order of keys, right?
  var mappings = [
    { factor: 3, word: "Fizz" },
    { factor: 5, word: "Buzz" }
  ];
  var words = [];
  // TODO: .map?
  for (var i in mappings) {
    if (multipleOf(mappings[i].factor, number)) {
      words.push(mappings[i].word);
    }
  }
  if (words.length > 0) {
    return words.join("");
  } else {
    return number.toString();
  }
};

module.exports = FizzBuzz;
