/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  let n = digits.length;
  for (const i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  return digits;
};

let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

console.log(plusOne(digits));
