// Fibonacci Number Check:

let checkFibonacci = +prompt("enter your number ");

fibArr = [0, 1];

for (let i = 2; ; i++) {
  nextFib = fibArr[i - 1] + fibArr[i - 2];
  if (nextFib > checkFibonacci) break;
  fibArr.push(nextFib);
}
if (fibArr.includes(checkFibonacci)) {
  console.log("this number is fibonacci number");
} else {
  console.log("this number is not fibonacci number");
}
