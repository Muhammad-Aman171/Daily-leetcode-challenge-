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

// function sumUntilSingleDigit(num) {
//   while (num >= 10) {
//     let sum = 0;
//     while (num > 0) {
//       sum += num % 10;
//       num = Math.floor(num / 10);
//     }
//     num = sum;
//   }
//   return num;
// }

// // Example usage
// const number = +prompt("enter your number");
// const result = sumUntilSingleDigit(number);
// console.log(`The single-digit sum of ${number} is ${result}`);

let num = +prompt("enter your number ");

while (num >= 10) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  if (sum > 9) {
    console.log(sum);
  }
  num = sum;
}
console.log(num);
