// http://csbin.io/async

/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/******************************************************************************/

/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => {
    console.log("welcome");
  }, 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/******************************************************************************/

/* CHALLENGE 3 */

function helloGoodbye() {
  setTimeout(() => {
    console.log("good bye");
  }, 2000);
  console.log("hello");
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/******************************************************************************/

/* CHALLENGE 4 */

function brokenRecord() {
  setInterval(() => {
    console.log("hi again");
  }, 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/******************************************************************************/

/* CHALLENGE 5 */

function limitedRepeat() {
  let counter = 5; // number of seconds
  let sayHi = setInterval(() => {
    if (!counter) {
      return clearInterval(sayHi);
    }
    counter--;
    console.log("hi for now");
  }, 1000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/******************************************************************************/

/* CHALLENGE 6 */

function everyXSecondsForYSeconds(callback, seconds, duration) {
  const interval = seconds * 1000;
  const time = duration * 1000;

  let counter = 0;
  let operation = setInterval(() => {
    if (counter === time) return clearInterval(operation);
    counter += interval;
    callback();
  }, interval);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
// everyXSecondsForYSeconds(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/******************************************************************************/

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  return () => {
    let counter = 0;
    let logger = setInterval(() => {
      if (target === counter) return clearInterval(logger);
      counter++;
      console.log(counter);
    }, wait);
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000);
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/******************************************************************************/

/* CHALLENGE 8 */

function promised(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, 2000);
  });
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised("wait for it...");
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/******************************************************************************/

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.seconds = 1;
    this.clock = undefined;
  }
  start() {
    this.clock = setInterval(() => {
      if (this.seconds > 60) {
        this.seconds = 1;
      }
      this.cb(this.seconds++);
    }, 1000);
  }
  reset() {
    clearInterval(this.clock);
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => {
//   console.log(val);
// });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//   clock.reset();
//   console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/******************************************************************************/

/* CHALLENGE 10 */

function debounce(callback, interval) {
  // https://www.youtube.com/watch?v=yBFHwJgqLD4
  let timer;
  let ready = true;

  const launchTimer = () =>
    setTimeout(() => {
      ready = true;
    }, interval);

  return () => {
    if (ready) {
      ready = false;
      timer = launchTimer();
      return callback();
    }

    clearTimeout(timer);
    timer = launchTimer();
    return;
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() {
//   return "hi";
// }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function () {
//   console.log(giveHiSometimes());
// }, 2000); // -> undefined
// setTimeout(function () {
//   console.log(giveHiSometimes());
// }, 4000); // -> undefined
// setTimeout(function () {
//   console.log(giveHiSometimes());
// }, 8000); // -> 'hi'
