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

// let num = +prompt("enter your number ");

// while (num >= 10) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   if (sum > 9) {
//     console.log(sum);
//   }
//   num = sum;
// }
// console.log(num);

// Find Missing Number:

// const arr = [1, 2, 4, 5, 7, 9];
// const maxNum = 10;
// const missingNum = [];

// const sequenceSet = new Set(arr);

// for (let i = 1; i <= maxNum; i++) {
//   if (!sequenceSet.has(i)) {
//     missingNum.push(i);
//   }
// }




const sequence = [1,5, 6, 8, 10]; // Example sequence
const maxNumber = 10; // The complete sequence should go up to this number
const missingNumbers = []; // To store missing numbers

// Create a set of the given sequence for quick lookup
const sequenceSet = new Set(sequence);

// Check for missing numbers
for (let i = 1; i <= maxNumber; i++) {
  if (!sequenceSet.has(i)) { // If the number is not in the sequence
    missingNumbers.push(i); // Add it to the missing numbers list
  }
}

console.log("The missing numbers are:", missingNumbers);
