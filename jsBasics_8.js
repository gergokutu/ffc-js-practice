// Random whole number > 0 - 9
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// Random whole number in a range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

function convertToInteger(str) {
  return parseInt(str);
}
console.log("Should be 56 (number) >", convertToInteger("56"));

function convertToInteger(str, radix) {
  return parseInt(str, radix);
}
console.log("Should return: 19 > ", convertToInteger("10011", 2));