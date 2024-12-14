/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let newArr = [];
  for (let i in nums) {
    for (let h = 1; h < nums.length; h++) {
      if (nums[i] + nums[h] == target) {
        newArr.push(i, h);
        break;
      }
    }

    console.log(nums[i]);
  }
  return newArr;
};

let number = [2, 7, 11, 15];
// let number = [3, 2, 4];
// let number = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(number, target));
