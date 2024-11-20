// Prime Factors:

let primeNum = +prompt("enter your number");

let arr = [];

for (let i = 1; i <= primeNum; i++) {
  while (primeNum % i == 0) {
    arr.push(i);
    
  }
}

console.log(arr);
