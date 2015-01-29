var chai = require('chai');
var expect = chai.expect;
var should = chai.should();


// wtf - This method must return the value 'wtf' for any given
// context.
String.prototype.wtf = function(){
  return "wtf";
};
//Test-->console.log(("hello").wtf());

// scramble - This method must return the contents of the 
// string in the current context in a mixed up order.
String.prototype.scramble = function(){
  string.split("", this.length-1);
  for (var i = 0; i < this.length; i++){
    var random = parseInt(Math.random() * i);
    var temp = this[--i];
    this[i] = this[random];
    this[random] = temp;
    return temp.join('');
  }
//https://gist.github.com/oieioi/5897875
//http://stackoverflow.com/questions/3079385/str-shuffle-equivalent-in-javascript
//this works-->http://codegolf.stackexchange.com/questions/3293/how-to-randomize-letters-in-a-word
};
//Test-->expect "this"!= "shit"

// trim - This method must return the contents of the string 
// with no leading or trailing spaces.
String.prototype.trim = function(){
  return this.replace(/^\s+|\s+$/g,'');
  //http://stackoverflow.com/questions/17769753/javascript-remove-leading-and-trailing-spaces
};
// Test-->console.log(" hello ".trim());
