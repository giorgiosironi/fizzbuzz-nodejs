"use strict";

var FizzBuzz = require("./fizzbuzz");

describe("FizzBuzz algorithm", function() {
  it("should return Fizz for multiples of 3", function() {
    expect(FizzBuzz(3)).to.equal("Fizz");
  });
});
