var myArray = ['string', 0];
var myArray = [['string', 0], ['string2', 1]];

{
  var myArray = [50, 60, 70];
  var myData = myArray[0];
  myArray[0] = 45;
}

{
  var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
  var myData = myArray[2][1]; // 8
}

{
  var myArray = [["John", 23], ["cat", 2]];
  myArray.push(["dog", 3]);
  console.log('After push:', myArray);
  var removedFromMyArray = myArray.pop();
  console.log('Pop:', removedFromMyArray);
  console.log('Shift:', myArray.shift());
  myArray.unshift(["Paul",35]);
  console.log('After unshift:', myArray);
}