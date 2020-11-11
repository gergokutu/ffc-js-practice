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