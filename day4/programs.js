// Prime Factors:

let primeNum = +prompt("enter your number");

let arr = [];

for (let i = 2; i <= primeNum; i++) {
  while (primeNum % i === 0) {
    arr.push(i);
    primeNum /= i;
  }
}

console.log(arr);
