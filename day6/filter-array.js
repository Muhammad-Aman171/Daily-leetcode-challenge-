// 2634. Filter Elements from Array

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

// Solution:

var filter = function (arr, fn) {
  return arr, fn(arr[i], index);
};

let para2 = function (i, index) {
  return arr[i] * index;
};

let para1 = [1, 2, 3, 4, 5];

console.log(filter(para1, para2));

var map = function (arr, fn) {
  let newArray = [];
  // Ek khaali array banate hain jisme naye values store hongi.
  for (let i = 0; i < arr.length; i++) {
    // Input array ke har element ke liye loop.
    newArray.push(fn(arr[i], i));
    // Har element ko callback function `fn` mein pass karte hain aur result array mein add karte hain.
  }
  return newArray;
  // Processed array ko return karte hain.
};

let inputArray = [1, 2, 3, 4, 5];
let squareFunction = function (num, index) {
  return num * num;
  // Har element ka square return karega.
};

let result = map(inputArray, squareFunction);
console.log(result);
