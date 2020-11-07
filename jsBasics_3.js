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
console.log('outside myLocalScope >', typeof myVar);

var outerWear = 'T-Shirt';

function myOutfit() {
  var outerWear = 'sweater';
  return outerWear;
}
myOutfit();

function timesFive(num) {
  return num * 5;
}
var check = console.log('5 * 2 should be 10 >', timesFive(2));


var sum = 0;

// Without return statement > returned value is undefined by default
function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
console.log('Global sum modified:', sum);


var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);