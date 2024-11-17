// 1. write a program that check the number is positive, nagetive and zero

userInput = +prompt("enter your number");

if (userInput > 0) {
  console.log("your number is positive");
} else if (userInput == 0) {
  console.log("your number is equal to zero");
}else{
    console.log("your number is nagetive");
}

// 2. write a program that give the input from the user and tell
//    that the user are senior citizen, adult and minor age.

userInput = +prompt("enter your number");

if (userInput >= 50) {
  console.log("your are a senior citizen");
} else if (userInput >= 18 && userInput <= 49) {
  console.log("your are a adult man");
}else{
    console.log("your are a minor age");
}

// 3. Write a program that checks if a given year is a leap year.

userInput = +prompt("enter your number");

if ((userInput % 4 == 0 ) || (userInput % 100 == 0) || (userInput % 400 == 0)) {
  alert ("this year is a leap year")
}
else{
  alert("this year is not a leap year")
}

// 4. Take an integer and check if it’s even or odd.

userInput = +prompt("enter your number");

if (userInput % 2 == 0 ){
  console.log("this number is even");
}
else{
  console.log("this number is odd");
}

// 5. Ask the user for a grade percentage and display the corresponding letter grade (A, B, C, D, F).

grade = +prompt("enter your number");

if (grade >= 90) {
  console.log("your grade is A+");
} else if (grade >= 80 && grade < 89) {
  console.log("your grade is A");
} else if (grade >= 70 && grade < 79) {
  console.log("your grade is B");
} else if (grade >= 60 && grade < 69) {
  console.log("your grade is C");
} else if (grade >= 50 && grade < 59) {
  console.log("your grade is D");
} else if (grade >= 40 && grade < 49) {
  console.log("your grade is E");
} else {
  console.log("Congratulation! your are fail");
}

// 8. Create a program that checks if a given string is a palindrome.

let str = prompt("enter your word");
isPalindrome = true;

for (let i = 0; i < Math.floor(str.length / 2); i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("this word is palindrome");
}else{
  console.log("this word is not palindrome");
}

// 9. Take three sides of a triangle as input and check if they form a valid triangle

let sideOne = +prompt("enter your side1 length : ");
let sideTwo = +prompt("enter your side2 length : ");
let sideThree = +prompt("enter your side3 length : ");

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side1 > side1) {
  console.log("this triangle is valid form");
} else {
  console.log("this triangle is not valid form");
}

// 11. Check if a given number is a multiple of both 3 and 5.

let num = +prompt("enter your number ");

if (num % 3 == 0 && num % 5 == 0) {
  console.log("this number is multiple of both");
} else if (num % 3 == 0 || num % 5 == 1) {
  console.log("this number is multiple of 3 not 5");
} else if (num % 3 == 1 || num % 5 == 0) {
  console.log("this number is multiple of 5 not 3");
} else {
  console.log("this number is not multiple of both");
}

// 16. Take the length of three sides and classify the triangle (equilateral, isosceles, or scalene).

let side1 = +prompt("enter your side1")
let side2 = +prompt("enter your side2")
let side3 = +prompt("enter your side3")

if (side1 == side2 == side3){
  console.log("this triangle is equilateral");
}else if (side1 == side2 || side2 == side3 || side3 == side1) {
  console.log("this triangle is isosceles");
}else{
  console.log("this triangle is scalene");
}

// 19. Check if a string input is uppercase, lowercase, or a mix.

let userInput = prompt("enter your work")

if (userInput === userInput.toLowerCase()){
  console.log("this word contains lower case letters");
}else if (userInput === userInput.toUpperCase()){
  console.log("this word contains upper case letters");
}else{
  console.log("this word contains lower case and upper case letters");
}

// 20. Create a program that evaluates if an inputted number is prime.

let num1 = +prompt("enter your number");

if (num1 < 2) {
  console.log("this number is smaller then 2");
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num1); i++) {
    if (num1 % i == 0) {
      console.log("this number is prime number");
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("this number is prime number");
  } else {
    console.log("this number is not prime number");
  }
}


for (let i = 0; i <50; i++) {
  console.log(i);
  
}