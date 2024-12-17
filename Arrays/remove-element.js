/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i-1] !== val) {
      nums[i] = nums[i];
      k++;
      // console.log(` index of ${i} : ${nums[i]}`);
    }
    // console.log(`  ${i} : ${nums[i]}`);
  }
  return k;
};

// let nums = [3, 2, 2, 3];
let nums = [0,1,2,2,3,0,4,2]
let val = 2;

console.log(removeElement(nums, val));
