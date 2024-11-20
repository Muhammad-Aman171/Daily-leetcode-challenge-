// Prime Factors:

let primeNum = +prompt("enter your number");

arr = [];

for( let i = 1 ; i <= primeNum ; i++){
  while (primeNum % i == 0){
    arr.push(primeNum / i)
    
  }
}

console.log(arr);
