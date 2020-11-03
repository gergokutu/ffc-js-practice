function reusableFunction() {
  console.log('Hi World');
}
reusableFunction();

function functionWithArgs(num1, num2) {
  console.log(num1 + num2);
}
functionWithArgs(6, 8);

// Global vs local
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
  'use strict';

  var myVar = 'hmm';
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);