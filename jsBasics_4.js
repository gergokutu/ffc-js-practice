function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return 'Yes, that was true';
  }
  return 'No, that was false';
}
const thisIsTrue = trueOrFalse(true);
console.log('Test should be > Yes, that was true\nResult:', thisIsTrue);
