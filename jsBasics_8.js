// Random whole number > 0 - 9
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// Random whole number in a range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}