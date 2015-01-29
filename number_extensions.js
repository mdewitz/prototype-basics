var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

 
Number.prototype.double = function(){
  return this*2;
};
 
Number.prototype.tripledouble = function(){
  return this*3*2;
};

Number.prototype.isDivisibleBy = function(n){
  if(this % n===0){
    return true;
  }else {
    return false;
  }
};

Number.prototype.submultitractivide = function(n){
  var operator = ['+','-','*','/'];
  var i = Math.floor(Math.random()*operator.length);
  var j = Math.floor(Math.random()*operator.length);
  var x = operator[i];
  var y = operator[j];
  return (this)+x+n+y+n;
};
