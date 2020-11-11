// Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName) {
      // with hasOwnProperty
      return contacts[i].hasOwnProperty(prop) ?
        contacts[i][prop] :
        "No such property";
    }
  }
  return "No such contact";
}
console.log("Test:", lookUpProfile("Kristian", "lastName"));

function lookUpProfile2(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName) {
      // With prop in Obj
      return prop in contacts[i] ?
        contacts[i][prop] :
        "No such property";
    }
  }
  return "No such contact";
}
console.log("Test2:", lookUpProfile2("Kristian", "lastName"));