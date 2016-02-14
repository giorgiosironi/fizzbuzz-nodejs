'use strict';

var fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz algorithm', function() {
  it('should return Fizz for multiples of 3', function() {
    expect(fizzbuzz(3)).to.equal('Fizz');
    expect(fizzbuzz(6)).to.equal('Fizz');
  });

  it('should return Buzz for multiples of 5', function() {
    expect(fizzbuzz(5)).to.equal('Buzz');
    expect(fizzbuzz(10)).to.equal('Buzz');
  });

  it('should return FizzBuzz for numbers which are multiple of both factors', function() {
    expect(fizzbuzz(15)).to.equal('FizzBuzz');
    expect(fizzbuzz(75)).to.equal('FizzBuzz');
  });

  it('should return the number itself when not a multiple of these factors', function() {
    expect(fizzbuzz(2)).to.equal('2');
    expect(fizzbuzz(14)).to.equal('14');
  });
});
