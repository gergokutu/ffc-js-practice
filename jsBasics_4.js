function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
const thisIsTrue = trueOrFalse(true);
console.log("Test should be > Yes, that was true\nResult:", thisIsTrue);

function compareEqual(val, val2) {
  if (val === val2) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
console.log("Should not be equal >", compareEqual(10, "10"));

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
console.log("Should not be equal  >", testStrictNotEqual(10));

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}
console.log(testGreaterThan(10));

function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }

  return "No";
}
console.log("Should be No:", testLogicalAnd(10));

function testLogicalOr(val) {
  if (val > 20 || val < 10) {
    return "Outside";
  }

  return "Inside";
}
console.log("Should be Inside:", testLogicalOr(15));

