// Fibonacci Number Check:

let checkFibonacci = +prompt("enter your number ");

fibArr = [0, 1];
let isFibonacci = true;

for (let i = 2; i < checkFibonacci; i++) {
  fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  if (checkFibonacci == fibArr[i]) {
    // console.log("this number is fibonacci number");
    isFibonacci = true;
    break;
  } else {
    isFibonacci = false;
    break;
  }
}
if (isFibonacci) {
  console.log("this number is fibonacci number");
} else {
  console.log("this number is not fibonacci number");
}
