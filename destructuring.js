// ========================
// DESTRUCTURING
// ========================

// Use object destructuring to save the property values from the object carDetails into new variables.

var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}

// CODE HERE
var {color,make,model,year} = carDetails;

// ========================


// In the function below named greeting, it is receiving an object as a parameter.
// Use object destructuring to save the object properties to new variables. The property names
// are firstName, lastName, and title. Return the concatenated string.

function greeting( obj ) {
  // CODE HERE
var {firstName,lastName,title} = obj;
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
}


// ========================


// Write a function called totalPopulation that will take in an object. That object will have 4 properties
// named utah, california, texas and arizona. The property values will be numbers. Use object destructuring
//to save the property values to new variables. Sum up the values and return the total number.

  // CODE HERE
let totalPopulation = (obj) => {
  let {utah,california,texas,arizona} = obj;
  return utah+california+texas+arizona;
}

// ========================


// Write a function called ingredients that will take in an object. This object will have 3 properties named
//carb, fat, and protein. The property values will be strings. Use object destructuring to save the property
//values to new variables. Push these new variables to an array and return the array.

  // CODE HERE
let ingredients = (obj) => {
  let {carb,fat,protein} = obj;
  let arr = []
  arr.push(carb);
  arr.push(fat);
  arr.push(protein);
  return arr;
}

// ========================


// Now we will use object destructuring as the function's parameter instead of destructuring the object
//inside of the function declaration. See the example below:

// function example( {one, two, three} ) {
//   return one + two + three
// }

// Write a function called largeNumbers that will take a destructured object as it's parameter. The object
//properties will be named first, second, and third and their values will be numbers. Find the smallest number
//of the three and return that number.

  // CODE HERE
let largeNumbers = ({first,second,third}) => {
  return Math.min(first,second,third);
}

// ========================


// Write a function called numberGroups that will take a destructured object as it's parameter. The object
//properties will be named a, b, and c and their values will be arrays of numbers. Find the longest array
//and return that array.

  // CODE HERE
let numberGroups = ({a,b,c}) => {
  let longestLength = Math.max(a.length,b.length,c.length);
  if (a.length === longestLength){
    return a;
  }
  else if (b.length === longestLength) {
    return b;
  }
  else if (c.length === longestLength) {
    return c;
  }
}
