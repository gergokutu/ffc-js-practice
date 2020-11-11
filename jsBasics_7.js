var myArray = [];
var i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log("Numbers 5 through 0(inclusive):", myArray);

var myArray2 = [];

for (var i = 1; i < 6; i++) {
  myArray2.push(i);
}
console.log("Numbers 1 through 6(exclusive):", myArray2);

var myArr = [2, 3, 4, 5, 6];

var total = 0;

for (var item of myArr) {
  total += item;
}
console.log("total should be 20 >", total);

function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]
    }
  }

  return product;
}

console.log("Should return: 5040 >", multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
var testArr = [[1, 2], [3, 4], [5, 6]];

// Setup
var theArr = [];
var i = 10;

// Only change code below this line
do {
  theArr.push(i);
  i++;
} while (i < 10);
console.log("Should be [ 10 ] > ", theArr);