var myDog = {
  name: "Whiskers", // same like "name": "Whiskers",
  legs: 4,
  tails: 1,
  friends: ["Cheese", "Me"]
};

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];

var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
console.log("Name of my dog is:", myDog.name);
myDog.name = "Happy Coder";
console.log("Name of my dog is:", myDog.name);
myDog["name"] = "Happier Coder";
console.log("Name of my dog is:", myDog.name);
var propName = "name";
myDog[propName] = "The Happiest Coder";
console.log("Name of my dog is:", myDog.name);

// Add new prop
myDog["bark"] = "woof";
console.log("myDog object with new prop:", myDog);

