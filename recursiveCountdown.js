// My solution
// function countdown(n) {
//   if (n < 1) return [0];
//   else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }

// Alt 1
// function countdown(n) {
//   if (n < 1) {
//     return [0];
//   } else {
//     const arr = countdown(n - 1);
//     arr.splice(0, 0, n);
//     return arr;
//   }
// }

// Alt 2
// function countdown(n) {
//   return n < 1 ? [0] : [n].concat(countdown(n - 1));
// }

// Alt 3
function countdown(n) {
  return n < 1 ? [0] : [n, ...countdown(n - 1)];
}

console.log("Test:", countdown(5));