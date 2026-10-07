//without input and without return value

// Logic 1
function countDigits() {
    let n = 58392;
    let count = 0;

    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }

    console.log("Number of digits = " + count);
}
countDigits();


// Logic 2
function sumEvenDigits() {
    let n = 246813;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;

        if (digit % 2 === 0) {
            sum = sum + digit;
        }

        n = Math.floor(n / 10);
    }

    console.log("Sum of even digits = " + sum);
}
sumEvenDigits();


// Logic 3
function armstrongNumber() {
    let n = 153;
    let original = n;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit * digit * digit;
        n = Math.floor(n / 10);
    }
    if (original === sum) {
        console.log(original + " is an Armstrong Number");
    } else {
        console.log(original + " is Not an Armstrong Number");
    }
}
armstrongNumber();

//with input and without return value

// Logic 1
function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    console.log("Factorial = " + fact);
}
factorial(5);


// Logic 2
function countEvenDigits(n) {
    let count = 0;

    while (n > 0) {
        let digit = n % 10;

        if (digit % 2 === 0) {
            count++;
        }

        n = Math.floor(n / 10);
    }

    console.log("Even digits = " + count);
}
countEvenDigits(246813);


// Logic 3
function strongNumber(n) {
    let original = n;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        let fact = 1;

        for (let i = 1; i <= digit; i++) {
            fact = fact * i;
        }

        sum = sum + fact;
        n = Math.floor(n / 10);
    }

    if (original === sum) {
        console.log(original + " is a Strong Number");
    } else {
        console.log(original + " is Not a Strong Number");
    }
}
strongNumber(145);

//without input and with return value


// Logic 1
function cube() {
    let n = 6;
    return n * n * n;
}
console.log("Cube =", cube());


// Logic 2
function countDigits() {
    let n = 98765;
    let count = 0;

    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }

    return count;
}
console.log("Number of digits =", countDigits());


// Logic 3
function fibonacciSum() {
    let n = 7;
    let a = 0;
    let b = 1;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + a;

        let c = a + b;
        a = b;
        b = c;
    }

    return sum;
}
console.log("Fibonacci sum =", fibonacciSum());


//with input and with return value

// Logic 1
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 6));


// Logic 2
function reverseNumber(n) {
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    }

    return reverse;
}
console.log("Reverse =", reverseNumber(12345));


// Logic 3
function isArmstrong(n) {
    let original = n;
    let digits = n.toString().length;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + Math.pow(digit, digits);
        n = Math.floor(n / 10);
    }

    return original === sum;
}
console.log(isArmstrong(153));
console.log(isArmstrong(123));