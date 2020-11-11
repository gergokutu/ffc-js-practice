var myArray = [];
var i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log("Numbers 5 through 0(inclusive):", myArray);

// Setup
var myArray2 = [];

// Only change code below this line
for (var i = 1; i < 6; i++) {
  myArray2.push(i);
}
console.log("Numbers 1 through 6(exclusive):", myArray2);