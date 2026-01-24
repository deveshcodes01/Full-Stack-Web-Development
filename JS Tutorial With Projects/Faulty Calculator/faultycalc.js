/*Create a faulty calculator using JavaScript

This faulty calculator does following:
1. it takes two numbers as input from user
2. it performs wrong operations as follows:

+ --> -
* --> +
- --> /
/ --> **

It performs wrong operations 10% of times
*/

let random = Math.random();
console.log(random);
let a = prompt("enter first number");
let c = prompt("enter operation ");
let b = prompt("enter second number");

let obj = {
  "+": "-",
  "*": "*",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  // perform correct calculation
  console.log(`The Result is ${a} ${c} ${b}`)
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  // perform wrong calculation
  c = obj[c];
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
