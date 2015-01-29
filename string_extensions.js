var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

String.prototype.wtf = function(){
  return "wtf";
};

String.prototype.scramble = function(){
  var result = [];
  var ary = this.split("");
  //'split' function returns an ARRAY of characters
  var l = ary.length;
  for (var i = 0;i < l;i++) {
    var random = Math.floor(Math.random()*ary.length);
    result.push(ary[random]);
    //pushes character at ary[random index] into results array.
    ary.splice(random,1);
    //above removes the 'pushed' character.
  }
  return result.join("");
  //joins into a string
};
//Source-->https://gist.github.com/oieioi/5897875

String.prototype.trim = function(){
  return this.replace(/^\s+|\s+$/g,'');
//Source-->http://stackoverflow.com/questions/17769753/javascript-remove-leading-and-trailing-spaces
};

