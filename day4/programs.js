// Prime Factors:

// let primeNum = +prompt("enter your number");

// let arr = [];

// for (let i = 2; i <= primeNum; i++) {
//   while (primeNum % i === 0) {
//     arr.push(i);
//     primeNum /= i;
//   }
// }

// console.log(arr);

// Pattern Printing:

// let userInput = +prompt("enter your number:");

// for (let i = 1; i <= userInput; i++) {
//   let a = "";
//   for (let j = 0; j < i; j++) {
//     a += "*";
//   }
//   console.log(a);
// }

// Sum of Digits Until Single Digit:

let inputDigits = +prompt("Enter your number");

const strDigits = String(inputDigits);

for (let i = 0 ; i<= strDigits.length ; i++ ){
  console.log(strDigits[i]);
  
}