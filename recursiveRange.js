// My first solution
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
};

// 2nd
// function rangeOfNumbers(startNum, endNum) {
//   return startNum === endNum
//     ? [startNum]
//     : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
// };

// 3rd
// function rangeOfNumbers(startNum, endNum) {
//   if (startNum === endNum) return [startNum];
//   else {
//     const countArray = rangeOfNumbers(startNum, endNum - 1);
//     countArray.push(endNum);
//     return countArray;
//   }
// };

console.log("Test", rangeOfNumbers(1, 10));