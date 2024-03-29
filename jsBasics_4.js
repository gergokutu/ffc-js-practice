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

function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}
console.log("Should be '5 or Smaller'", testElse(4));

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log("Should be 'Between 5 and 10' >", testElseIf(7));

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log("Should be 'Less than 10':", orderMyLogic(7));

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log("Should return 'Small':", testSize(7));
