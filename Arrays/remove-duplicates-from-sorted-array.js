/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let newArr = [];
  for (const i in nums) {
    if (!newArr.includes(nums[i])) {
      newArr.push(nums[i]);
      console.log(nums[i]);
      
    }
  }
  return newArr.length;
};

let nums = [1, 1, 2];
// let nums= [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums));

