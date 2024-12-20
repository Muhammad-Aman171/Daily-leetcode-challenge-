/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// let digits = [9]

console.log(plusOne(digits));

// var plusOne = function (digits) {
//     let n = digits.length;

//     // Traverse the array from the last digit to the first
//     for (let i = n - 1; i >= 0; i--) {
//       if (digits[i] < 9) {
//         // If the current digit is less than 9, just increment it
//         digits[i]++;
//         return digits;
//       } else {
//         // If the digit is 9, set it to 0 and continue to the next digit
//         digits[i] = 0;
//       }
//     }

//     // If we exit the loop, it means we had a carry from the most significant digit
//     digits.unshift(1);
//     return digits;
//   };

//   // Example
//   let digits = [9,9];
//   console.log(plusOne(digits));
