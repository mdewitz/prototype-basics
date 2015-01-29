var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

// toString - This method must take the contents of the Array 
// and return a string of the contents of that array but should 
// check for functions and null and exclude them from the returned 
// value.


Array.prototype.toString = function(){
  for (var i = 0; i<arguments.length; i++){
    if(this[i]===null){
      delete array[i];
  //http://stackoverflow.com/questions/5767325/remove-specific-element-from-an-array
      array.toString();
    }return this.toString();
  }
};

// forEach - This method must take a function as an argument and
// call that function against each element in the Array.

Array.prototype.forEveryItem = function(){
  function somefunction(){
    console.log(this.join(''));
  }
  return this.apply(somefunction);
  //http://stackoverflow.com/questions/1793845/convert-an-array-into-a-separate-argument-strings
};

// EXTRA - Take your array functions that you wrote in ArrayFun 
// and add them to the Array.prototype.