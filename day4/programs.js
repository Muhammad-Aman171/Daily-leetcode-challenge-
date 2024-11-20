// Prime Factors:

// Prime Factors:
let primeNum = +prompt("Enter your number:");
let arr = []; // Initialize an empty array to store prime factors

for (let i = 2; i <= primeNum; i++) { // Start loop from 2 (smallest prime number)
  while (primeNum % i === 0) { // Check divisibility
    arr.push(i); // Push the factor into the array
    primeNum /= i; // Reduce the number
  }
}

console.log("Prime factors:", arr);

