/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== val) {
      nums[i - 1] = nums[i];
      k++;
    }
    console.log(nums[i]);
  }
  return k;
};

let nums = [3, 2, 2, 3];
let val = 3;

console.log(removeElement(nums, val));
