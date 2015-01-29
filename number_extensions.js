var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

// double - This method must return the current Number in context
// but doubled. 
Number.prototype.double = function(){
  return this*2;
};

// tripledouble - This method must return the current Number in 
// context but tripled and then doubled. 
Number.prototype.tripledouble = function(){
  return this*3*2;
};
//Test--> console.log((100).tripledouble());

// isDivisibleBy - This method must take a number as input and 
// return true/false if the current Number in context is evenly
// divisible by our parameter number.
Number.prototype.isDivisibleBy = function(n){
  if(this % n===0){
    return true;
  }else {
    return false;
  }
};
//Test-->console.log((20).isDivisibleBy(5));

// submultitractivide - This method must take a number as input
// and perform 2 random Math operations to that number between:
// add, subtract, multiply, and divide.
Number.prototype.submultitractivide = function(n){
  var operator = ['+','-','*','/'];
  var i = Math.floor(Math.random()*operator.length);
  var j = Math.floor(Math.random()*operator.length);
  var x = operator[i];
  var y = operator[j];
  return (this)+x+n+y+n;
};
//Test-->console.log((100).submultitractivide(2));