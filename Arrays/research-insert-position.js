/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let k = 0;

  //   for (let i = 0; i < nums.length; i++) {

  //     console.log(i);
  //   }

  for (const i in nums) {
    if (nums[i] == target) {
      return i;
    }else{
        
    }
  }

  return k;
};

let nums = [1, 3, 5, 6];
let target = 5;

console.log(searchInsert(nums, target));
