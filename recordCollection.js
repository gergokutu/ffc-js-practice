// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  {
    // if (prop !== "tracks" && value) object[id][prop] = value;
    // if (prop === "tracks" && value && object[id].hasOwnProperty(prop)) object[id][prop].push(value);
    // if (prop === "tracks" && !object[id][prop]) object[id][prop] = [value];
    // if (prop && !value) delete object[id][prop];
    // return object;

    // // Refactor > good for freeCodeCamp but brokes
    // // when id and/or prop is missing
    // if (!value) delete object[id][prop];
    // else if (prop !== "tracks") object[id][prop] = value;
    // else {
    //   object[id].hasOwnProperty(prop) ?
    //     object[id][prop].push(value) :
    //     object[id][prop] = [value];
    // }

    // // Refactor 2 > good for freeCodeCamp but brokes
    // // when id and/or prop is missing
    // if (!value) delete object[id][prop];
    // else if (prop !== "tracks") object[id][prop] = value;
    // else if (object[id].hasOwnProperty(prop)) object[id][prop].push(value)
    // else object[id][prop] = [value];
  }
  // Refactor 3 - handles missing id/props
  // Adding new props needs value (cannot create empty props)
  // And gonna be an array by default
  if (!id) throw new Error("Error: missing Id - ensure a number");
  if (!prop && !value) delete object[id];
  else if (prop && !value) {
    delete object[id][prop];
  } else {
    object[id].hasOwnProperty(prop) ?
      object[id][prop].push(value) :
      object[id][prop] = [value];
  }

  // else if (prop !== "tracks") object[id][prop] = value;
  return object;
}

console.log("Test:", updateRecords(collection, 5439, "neeew", "kids"));