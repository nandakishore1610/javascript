// 1. IF STATEMENT

//  Easy 1: Check Positive Number

let num1 = 10;

if (num1 > 0) {
  console.log("Positive number");
}

// Easy 2: Check Voting Age

let age1 = 20;

if (age1 >= 18) {
  console.log("You can vote");
}

// Medium 1: Check Even Number

let num2 = 24;

if (num2 % 2 === 0) {
  console.log("Even number");
}

// Medium 2: Check Excellent Marks

let marks1 = 92;

if (marks1 >= 90) {
  console.log("Excellent performance");
}

// Hard 1: Divisible by Both 3 and 5

let num3 = 60;

if (num3 % 3 === 0 && num3 % 5 === 0) {
  console.log("Divisible by both 3 and 5");
}

//  Hard 2: Scholarship Eligibility

let marks2 = 85;
let attendance = 92;

if (marks2 >= 80 && attendance >= 90) {
  console.log("Eligible for scholarship");
}

// 2. IF-ELSE STATEMENT

//  Easy 1: Even or Odd

let num4 = 15;

if (num4 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//  Easy 2: Adult or Minor

let age2 = 16;

if (age2 >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//  Medium 1: Pass or Fail

let marks3 = 45;

if (marks3 >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//  Medium 2: Login Validation

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}

//  Hard 1: Leap Year

let year = 2024;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

//  Hard 2: Divisible by 3 and 5

let num5 = 45;

if (num5 % 3 === 0 && num5 % 5 === 0) {
  console.log("Divisible by both 3 and 5");
} else {
  console.log("Not divisible by both");
}

// 3. ELSE-IF LADDER

//  Easy 1: Grade

let marks4 = 85;

if (marks4 >= 90) {
  console.log("Grade A");
} else if (marks4 >= 75) {
  console.log("Grade B");
} else if (marks4 >= 60) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

//  Easy 2: Positive, Negative or Zero

let num6 = -5;

if (num6 > 0) {
  console.log("Positive");
} else if (num6 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//  Medium 1: Electricity Consumption

let units = 250;

if (units <= 100) {
  console.log("Low consumption");
} else if (units <= 200) {
  console.log("Medium consumption");
} else if (units <= 300) {
  console.log("High consumption");
} else {
  console.log("Very high consumption");
}

//  Medium 2: Age Category

let age3 = 25;

if (age3 < 13) {
  console.log("Child");
} else if (age3 < 20) {
  console.log("Teenager");
} else if (age3 < 60) {
  console.log("Adult");
} else {
  console.log("Senior citizen");
}

//  Hard 1: Student Grade

let marks5 = 78;

if (marks5 >= 90) {
  console.log("Grade A+");
} else if (marks5 >= 80) {
  console.log("Grade A");
} else if (marks5 >= 70) {
  console.log("Grade B");
} else if (marks5 >= 60) {
  console.log("Grade C");
} else if (marks5 >= 40) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

//  Hard 2: Income Category

let income = 850000;

if (income <= 300000) {
  console.log("No tax category");
} else if (income <= 600000) {
  console.log("Lower income tax category");
} else if (income <= 1000000) {
  console.log("Middle income tax category");
} else {
  console.log("Higher income tax category");
}