const greet = function(name) {
  return `Hello, ${name}!`;
};


const add = (a, b) => a + b;


const double = x => x * 2;


const sumAndLog = (a, b) => {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
};

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(n => n * n);

console.log(greet("Alice"));         // => Hello, Alice!
console.log(add(3, 4));              // => 7
console.log(double(5));              // => 10
console.log(sumAndLog(6, 7));        // => Logs + returns 13
console.log(squared);               // => [1, 4, 9, 16, 25]


const divide = function() {
  return 2000 / 100;
};

const square = x => x * x;

