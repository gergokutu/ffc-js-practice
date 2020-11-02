// comment
/* 
multiline comment
*/

var myName;

var a;
a = 7;

var b;
b = a;

// Initialization
var c = 9;

// d is not defined
var e;
console.log(e) // e is undefined

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

var sum = 10 + 10;
var difference = 45 - 33;
var product = 8 * 10;
var quotient = 66 / 33;

var myVar = 87;
// myVar = myVar + 1;
// myVar += 1;
myVar++;
// myVar = myVar++; // 87
// myVar = ++myVar; // 88
console.log(myVar);
myVar--; // 87

var myDecimal = 6.85;
{
  var product = 2.0 * 2.5;
  var quotient = 4.4 / 2.0;
}

var remainder = 11 % 3;

{
  var a = 3;
  var b = 17;
  var c = 12;

  // Compound assigment with augmented addition
  a += 12;
  b += 9;
  c += 7;

  // Augmented subtraction
  a -= 6;
  b -= 15;
  c -= 1;

  // Augmented multiplication
  a *= 5;
  b *= 3;
  c *= 10;

  // Augmented division
  a /= 12;
  b /= 4;
  c /= 11;
}

var myFirstName = 'Gergo';
var myLastName = 'Kovacs';
// Escaping characters > \
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
{
  var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
}
{
  var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';
}

// Concatenate strings
{
  var myStr = "This is the start. " + "This is the end.";
}
{
  var myStr = 'This is the first sentence. ';
  myStr += 'This is the second sentence.';
}
{
  var myName = 'Gergo Kovacs';
  var myStr = 'My name is ' + myName + ' and I am well!';
}
