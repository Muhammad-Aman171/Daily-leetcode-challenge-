/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      console.log(nums[i]);

      k++;
    }
  }
  return k;
};

let nums = [1, 1, 2];
// let nums= [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums));
