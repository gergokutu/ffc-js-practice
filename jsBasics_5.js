function caseInSwitch(val) {
  var answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}
console.log("Should return: alpha >", caseInSwitch(1));

function switchOfStuff(val) {
  var answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  return answer;
}
console.log("Should return: stuff >", switchOfStuff(1));

function sequentialSizes(val) {
  var answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;
}
console.log("Should return: Mid >", sequentialSizes(5));

// Return true/false
// Do not use if/else statements!!!
function isLess(a, b) {
  return a < b;
}
console.log("Should return: true >", isLess(10, 15));

function abTest(a, b) {
  return (a < 0 || b < 0) ?
    undefined :
    Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

  // if (a < 0 || b < 0) return undefined;
  // return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log("Should return: undefined >", abTest(2, -1));