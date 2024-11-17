// Fibonacci Number Check:

let checkFibonacci = +prompt("enter your number ");

fibArr = [0, 1];

for (let i = 2; i < checkFibonacci; i++) {
  fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  if (checkFibonacci === fibArr[i]) {
    console.log(fibArr);
  }
}
