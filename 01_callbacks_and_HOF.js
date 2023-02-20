// http://csbin.io/callbacks

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

/******************************************************************************/

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

/******************************************************************************/

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS("pizza"));
// console.log(addS("bagel"));

/******************************************************************************/

// Challenge 3
function map(array, callback) {
  let result = new Array();

  for (let item of array) {
    result.push(callback(item));
  }

  return result;
}

// console.log(map([1, 2, 3], addTwo));

/******************************************************************************/

// Challenge 4
function forEach(array, callback) {
  for (let item of array) {
    callback(item);
  }
}

// see for yourself if your forEach works!
// forEach([1, 2, 3], (i) => console.log(i));

/******************************************************************************/

// Challenge 5
function mapWith(array, callback) {
  let result = new Array();

  forEach(array, (i) => result.push(callback(i)));

  return result;
}

// console.log(mapWith([1, 2, 3], addTwo));

/******************************************************************************/

// Challenge 6
function reduce(array, callback, initialValue) {
  let result = initialValue;

  for (let item of array) {
    result = callback(result, item);
  }
  return result;
}

// const nums = [4, 1, 3];
// const add = function (a, b) {
//   return a + b;
// };
// console.log(reduce(nums, add, 0));

/******************************************************************************/

// Challenge 7
function intersection(arrays) {
  return arrays.reduce((acc, cur) => {
    return acc.filter((item) => cur.includes(item));
  });
}

// console.log(
//   intersection([
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ])
// ); // should log: [5, 15]

/******************************************************************************/

// Challenge 8
function union(arrays) {
  return arrays.reduce((acc, cur) => {
    cur.forEach((item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
    });
    return acc;
  }, []);
}

// console.log(
//   union([
//     [5, 10, 15],
//     [15, 88, 1, 5, 7],
//     [100, 15, 10, 1, 5],
//   ])
// ); // should log: [5, 10, 15, 88, 1, 7, 100]

/******************************************************************************/

// Challenge 9
function objOfMatches(array1, array2, callback) {
  const result = new Object();

  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      result[array1[i]] = array2[i];
    }
  }

  return result;
}

// console.log(
//   objOfMatches(
//     ["hi", "howdy", "bye", "later", "hello"],
//     ["HI", "Howdy", "BYE", "LATER", "hello"],
//     function (str) {
//       return str.toUpperCase();
//     }
//   )
// ); // should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

/******************************************************************************/

// Challenge 10
function multiMap(arrValues, arrCallbacks) {
  const result = new Object();

  for (let value of arrValues) {
    result[value] = arrCallbacks.map((callback) => callback(value));
  }

  return result;
}

// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       },
//     ]
//   )
// ); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

/******************************************************************************/

// Challenge 11
function objectFilter(obj, callback) {
  const result = new Object();

  for (const key in obj) {
    if (obj[key] === callback(key)) {
      result[key] = callback(key);
    }
  }

  return result;
}

// const cities = {
//   London: "LONDON",
//   LA: "Los Angeles",
//   Paris: "PARIS",
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

/******************************************************************************/

// Challenge 12
function majority(array, callback) {
  let count = array.reduce((acc, cur) => (callback(cur) ? ++acc : acc), 0);
  return count > array.length / 2;
}

// /*** Uncomment these to check your work! ***/
// const isOddForMajority = function (num) {
//   return num % 2 === 1;
// };
// console.log(majority([1, 2, 3, 4, 5], isOddForMajority)); // should log: true
// console.log(majority([2, 3, 4, 5], isOddForMajority)); // should log: false

/******************************************************************************/

// Challenge 13
function prioritize(array, callback) {
  const result = new Array();
  array.forEach((item) => {
    if (callback(item)) {
      result.push(item);
    }
  });
  return result.concat(array.filter((item) => !callback(item)));
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function (str) {
//   return str[0] === "s" || str[0] === "S";
// };
// console.log(
//   prioritize(
//     ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
//     startsWithS
//   )
// ); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

/******************************************************************************/

// Challenge 14
function countBy(array, callback) {
  const result = new Object();

  for (const item of array) {
    const key = callback(item);

    if (result.hasOwnProperty(key)) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  }

  return result;
}

// /*** Uncomment these to check your work! ***/
// console.log(
//   countBy([1, 2, 3, 4, 5], function (num) {
//     if (num % 2 === 0) return "even";
//     else return "odd";
//   })
// ); // should log: { odd: 3, even: 2 }

/******************************************************************************/

// Challenge 15
function groupBy(array, callback) {
  const result = new Object();

  for (const item of array) {
    const key = callback(item);

    if (result.hasOwnProperty(key)) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  }

  return result;
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function (num) {
//   return Math.floor(num);
// };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

/******************************************************************************/

// Challenge 16
function goodKeys(obj, callback) {
  const result = new Array();
  for (const [key, value] of Object.entries(obj)) {
    callback(value) ? result.push(key) : result;
  }
  return result;
}

// /*** Uncomment these to check your work! ***/
// const sunny = {
//   mac: "priest",
//   dennis: "calculating",
//   charlie: "birdlaw",
//   dee: "bird",
//   frank: "warthog",
// };
// const startsWithBird = function (str) {
//   return str.slice(0, 4).toLowerCase() === "bird";
// };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

/******************************************************************************/

// Challenge 17
function commutative(func1, func2, value) {
  const first = Number(func1(func2(value)));
  const second = Number(func2(func1(value)));
  return first == second;
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy3 = (n) => n * 3;
// const divideBy4 = (n) => n / 4;
// const subtract5 = (n) => n - 5;
// console.log(commutative(multiplyBy3, divideBy4, 11)); // should log: true
// console.log(commutative(multiplyBy3, subtract5, 10)); // should log: false
// console.log(commutative(divideBy4, subtract5, 48)); // should log: false

/******************************************************************************/

// Challenge 18
function objFilter(obj, callback) {
  const result = new Object();

  for (const [key, value] of Object.entries(obj)) {
    callback(key) === value ? (result[key] = value) : result;
  }

  return result;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

/******************************************************************************/

// Challenge 19
function rating(arrOfFuncs, value) {
  let counter = 0;
  for (const func of arrOfFuncs) {
    if (func(value)) counter++;
  }

  return counter * 25;
}

// /*** Uncomment these to check your work! ***/
// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes("6");
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

/******************************************************************************/

// Challenge 20
function pipe(arrOfFuncs, value) {
  /** With loop */
  // let result = value;

  // for (let func of arrOfFuncs) {
  //   result = func(result);
  // }

  // return result;

  /** With recursion */
  if (arrOfFuncs.length === 0) {
    return value;
  }
  let newValue = arrOfFuncs.shift()(value);

  return pipe(arrOfFuncs, newValue);
}

// /*** Uncomment these to check your work! ***/
// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddLowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddLowRepeat, "cat")); // should log: 'CATcatCATcat'

/******************************************************************************/

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  let highest = "";
  let result = 0;

  for (const [name, func] of Object.entries(objOfFuncs)) {
    if (func(subject) > result) {
      result = func(subject);
      highest = name;
    }
  }
  return highest;

  /** With reduce */
  // let keys = Object.keys(objOfFuncs);

  // return keys.reduce((a, b) =>
  //   objOfFuncs[a](subject) > objOfFuncs[b](subject) ? a : b
  // );
}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

/******************************************************************************/

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  return pipe(arrOfFuncs, startVal);
}

function addTen(num) {
  return num + 10;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyByFive(num) {
  return num * 5;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60
// console.log(combineOperations(0, [divByFive, multiplyByFive, addTen])); // Should output 10

/******************************************************************************/

// Challenge 23
function myFunc(array, callback) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result = i;
    }
  }
  return result;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

/******************************************************************************/

// Challenge 24
function myForEach(array, callback) {
  for (let item of array) {
    callback(item);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const myNums = [1, 2, 3];
// myForEach(myNums, addToSum);
// console.log(sum); // Should output 6
