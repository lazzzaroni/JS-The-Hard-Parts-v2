//http://csbin.io/closures

// CHALLENGE 1
function createFunction() {
  function printHello() {
    console.log("hello");
  }
  return printHello;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

/******************************************************************************/

// CHALLENGE 2
function createFunctionPrinter(input) {
  function functionPrinter() {
    console.log(input);
  }
  return functionPrinter;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter("sample");
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter("hello");
// printHello(); // => should console.log('hello');

/******************************************************************************/

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  let result = 0;
  function add(number) {
    return x + number;
  }
  return add;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

/******************************************************************************/

// CHALLENGE 4
function once(func) {
  let result;
  function inner(number) {
    if (!result) {
      result = func(number);
    }
    return result;
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6

/******************************************************************************/

// CHALLENGE 5
function after(count, func) {
  let counter = 1;
  function inner() {
    if (counter == count) {
      return func();
    }
    counter++;
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const called = () => console.log("hello");
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

/******************************************************************************/

// CHALLENGE 6
function delay(func, wait) {
  setTimeout(() => {
    func();
  }, wait);
}

// delay(() => console.log("Delay 3 sec"), 3000);

/******************************************************************************/

// CHALLENGE 7
function rollCall(names) {
  let i = 0;
  function inner() {
    if (!names[i]) return "Everyone accounted for";
    return names[i++];
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
// rollCaller(); // => should log 'Victoria'
// rollCaller(); // => should log 'Juan'
// rollCaller(); // => should log 'Ruth'
// rollCaller(); // => should log 'Everyone accounted for'

/******************************************************************************/

// CHALLENGE 8
function saveOutput(func, magicWord) {
  const data = new Object();
  function inner(arg) {
    if (typeof arg === "number") {
      data[arg] = func(arg);
      return func(arg);
    }
    if (arg === magicWord) {
      return data;
    }
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = (num) => num * 2;
// const multiplyBy2AndLog = saveOutput(multiplyBy2, "boo");
// console.log(multiplyBy2AndLog(2)); // => should log 4
// console.log(multiplyBy2AndLog(9)); // => should log 18
// console.log(multiplyBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

/******************************************************************************/

// CHALLENGE 9
function cycleIterator(array) {
  let i = 0;
  function inner() {
    if (!array[i]) i = 0;
    return array[i++];
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ["Fri", "Sat", "Sun"];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

/******************************************************************************/

// CHALLENGE 10
function defineFirstArg(func, first) {
  function inner(second) {
    return func(first, second);
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const subtract = (big, small) => big - small;
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

/******************************************************************************/

// CHALLENGE 11
function dateStamp(func) {
  const data = new Object();
  function inner(number) {
    data["date"] = new Date();
    data["output"] = func(number);
    return data;
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const stampedMultiplyBy2 = dateStamp((n) => n * 2);
// console.log(stampedMultiplyBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultiplyBy2(6)); // => should log { date: (today's date), output: 12 }

/******************************************************************************/

// CHALLENGE 12
function censor() {
  const data = new Object();
  function inner(arg1, arg2) {
    if (arg2 === undefined) {
      return arg1
        .match(/[\w]+|[\W]/g)
        .map((word) => data[word] || word)
        .join("");
    }
    data[arg1] = arg2;
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene("dogs", "cats");
// changeScene("quick", "slow");
// console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // => should log 'The slow, brown fox jumps over the lazy cats.'

/******************************************************************************/

// CHALLENGE 13
function createSecretHolder(secret) {
  function getSecret() {
    return secret;
  }
  function setSecret(newSecret) {
    secret = newSecret;
  }

  return {
    setSecret,
    getSecret,
  };
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5);
// obj.getSecret(); // => returns 5
// obj.setSecret(2);
// obj.getSecret(); // => returns 2

/******************************************************************************/

// CHALLENGE 14
function callTimes() {
  let counter = 0;
  function inner() {
    return ++counter;
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2

/******************************************************************************/

// CHALLENGE 15
function roulette(num) {
  let counter = 0;
  function inner() {
    counter++;
    if (num == counter) return "win";
    if (num >= counter) return "spin";
    return "pick a number to play again";
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

/******************************************************************************/

// CHALLENGE 16
function average() {
  const nums = new Array();
  function inner(number) {
    if (number) nums.push(number);
    if (nums.length) {
      const result = nums.reduce((acc, cur) => acc + cur);
      return result / nums.length;
    }
    return 0;
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

/******************************************************************************/

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  function inner(callback) {
    for (const subArr of arrOfTests) {
      return callback(subArr[0]) === subArr[1] ? true : false;
    }
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(["hello", "hellO"]);
// capLastTestCases.push(["goodbye", "goodbyE"]);
// capLastTestCases.push(["howdy", "howdY"]);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = (str) => str.toUpperCase();
// const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

/******************************************************************************/

// CHALLENGE 18
function makeHistory(limit) {
  const history = new Array();
  function inner(task) {
    if (history.length > limit) {
      history.shift();
    }
    if (task === "undo") {
      if (!history.length) return "nothing to undo";
      const deleted = history.pop();
      return `${deleted} undone`;
    }
    history.push(task);
    return `${task} done`;
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions("jump")); // => should log 'jump done'
// console.log(myActions("undo")); // => should log 'jump undone'
// console.log(myActions("walk")); // => should log 'walk done'
// console.log(myActions("code")); // => should log 'code done'
// console.log(myActions("pose")); // => should log 'pose done'
// console.log(myActions("undo")); // => should log 'pose undone'
// console.log(myActions("undo")); // => should log 'code undone'
// console.log(myActions("undo")); // => should log 'nothing to undo'

/******************************************************************************/

// CHALLENGE 19
function blackjack(array) {
  function dealer(num1, num2) {
    let take = new Array();
    let deal = 0;
    let bust = "";
    function player() {
      if (deal) {
        if (bust !== "") return "you are done!";
        take.push(array[0]);
        array.shift();
        deal = take.reduce((acc, cur) => acc + cur, num1 + num2);
        if (deal > 21) {
          return (bust = "bust");
        }
        return deal;
      }
      deal = num1 + num2;
      return deal;
    }
    return player;
  }
  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([
//   2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
// ]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// // /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
