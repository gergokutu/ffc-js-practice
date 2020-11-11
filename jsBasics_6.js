var myDog = {
  name: "Whiskers", // Same like "name": "Whiskers",
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

// Delete tails
delete myDog.tails;
console.log("myDog object after deleting tails prop:", myDog);

function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = lookup[val];
  return result;
}
console.log("charlie should return: Chicago > ", phoneticLookup("charlie"));

function checkObj(obj, checkProp) {
  return obj.hasOwnProperty(checkProp) ?
    obj[checkProp] :
    "Not Found";
}
var testObject = { testProp: "testValue" };
var propToCheck = "name";
console.log("Should return: Not found > ", checkObj(testObj, propToCheck));

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list[1];