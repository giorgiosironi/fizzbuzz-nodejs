"use strict";

var FizzBuzz = require("./fizzbuzz");

describe("FizzBuzz algorithm", function() {
  it("should return Fizz for multiples of 3", function() {
    expect(FizzBuzz(3)).to.equal("Fizz");
    expect(FizzBuzz(6)).to.equal("Fizz");
  });

  it("should return Buzz for multiples of 5", function() {
    expect(FizzBuzz(5)).to.equal("Buzz");
    expect(FizzBuzz(10)).to.equal("Buzz");
  });

  it("should return the number itself when not a multiple of these factors", function() {
    expect(FizzBuzz(2)).to.equal("2");
    expect(FizzBuzz(14)).to.equal("14");
  });
});
