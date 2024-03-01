// EXAMPLE 1 - Extract a Number from a String in JavaScript

const str = 'hello 123 world';

const replaced = str.replace(/\D/g, ''); // 👉️ '123'
console.log(replaced);

let num;

if (replaced !== '') {
  num = Number(replaced); // 👉️ 123
}

console.log(num);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Extract a number from a String using String.match()

// const str = 'hello 123 world';

// const replaced = str.match(/\d+/); // 👉️ ['123']

// let num;

// if (replaced !== null) {
//   num = Number(replaced[0]); // 👉️ 123
// }
// console.log(num);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the First Number in a String in JavaScript

// // ✅ get the first digit in a string

// function getFirstDigit(str) {
//   const index = str.search(/[0-9]/);

//   return Number(str[index]);
// }

// console.log(getFirstDigit('one 2 three 4')); // 👉️ 2
// console.log(getFirstDigit('a 100 b 200')); // 👉️ 1

// // --------------------------------------------------

// // ✅ get the first number in a string

// function getFirstNumber(str) {
//   const match = str.match(/[0-9]+/);

//   return parseInt(match[0]);
// }

// console.log(getFirstNumber('one 2 three 4')); // 👉️ 2
// console.log(getFirstNumber('a 100 b 200')); // 👉️ 100

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the first number in a string using `String.match()`

// function getFirstNumber(str) {
//   const match = str.match(/[0-9]+/);

//   return parseInt(match[0]);
// }

// console.log(getFirstNumber('one 2 three 4')); // 👉️ 2
// console.log(getFirstNumber('a 100 b 200')); // 👉️ 100

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the Number from the End of a String

// function getNumberFromEnd(str) {
//   const matches = str.match(/[0-9]+$/);

//   if (matches) {
//     return parseInt(matches[0], 10);
//   }

//   return null;
// }

// // 👇️ 456
// console.log(getNumberFromEnd('one 2 three 456'));

// // 👇️ 987
// console.log(getNumberFromEnd('bobbyhadz 987'));
