var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

// toString - This method must take the contents of the Array 
// and return a string of the contents of that array but should 
// check for functions and null and exclude them from the returned 
// value.

Array.prototype.toString = function(){
  // for (var i = 0; i<arguments.length-1; i++){
  // //   if(this[i]===null){
  //     delete array[i];
  // //http://stackoverflow.com/questions/5767325/remove-specific-element-from-an-array
  //     array.join();
    return this.join();
  // }
};

// forEach - This method must take a function as an argument and
// call that function against each element in the Array.

Array.prototype.forEach = function(argFunc){
  for (var i = 0; i<this.length; i++){
    return argFunc(this[i]);
  }
};
//Test-->console.log([1, 2, 3, 4, 5].forEach(console.log));

// EXTRA - Take your array functions that you wrote in ArrayFun 
// and add them to the Array.prototype.