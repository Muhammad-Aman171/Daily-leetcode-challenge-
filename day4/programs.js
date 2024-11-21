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

function sumUntilSingleDigit(num) {
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10; // Extract the last digit and add to the sum
      num = Math.floor(num / 10); // Remove the last digit
    }
    num = sum; // Update the number with the sum of its digits
  }
  return num; // Return the single-digit result
}

// Example usage
const number = +prompt("enter your number");
const result = sumUntilSingleDigit(number);
console.log(`The single-digit sum of ${number} is ${result}`);
