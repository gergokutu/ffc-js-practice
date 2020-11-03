function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return 'Yes, that was true';
  }
  return 'No, that was false';
}
const thisIsTrue = trueOrFalse(true);
console.log('Test should be > Yes, that was true\nResult:', thisIsTrue);

function testEqual(val, val2) {
  if (val === val2) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log('Should not be equal >', testEqual(10, '10'));
