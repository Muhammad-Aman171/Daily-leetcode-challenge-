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

let arr = [1,2,4,5,7,9]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  
}