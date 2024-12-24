/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  let number = 0;
  for (const i in nums) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        console.log(nums[i]);
      }
    }
  }
  return number;
};

let nums = [2, 2, 1];
console.log(singleNumber(nums));
