function sum(a, b) {
    // console.log(a + b);  
    return a + b;
}//we use return instead of console.log because we want to return the value of the function to be used in another function.
function subtract(a,b) {
    // console.log(a - b);
    return a - b;
}
function multiply(a,b) {
    // console.log(a * b);
    return a * b;
}
function divide(a,b) {
    // console.log(a / b);
    return a / b;
}
function modulus(a, b) {
    // console.log(a % b);
    return a % b;
}

// function calculator(a, b, operator) {
//     if (operator === "+") {
//         sum(a, b);
//     } else if (operator === "-") {
//         subtract(a, b);
//     } else if (operator === "*") {
//         multiply(a, b);
//     } else if (operator === "/") {
//         divide(a, b);
//     } else if (operator === "%") {
//         modulus(a, b);
//     } else {
//         console.log("Invalid operator");
//     }
// }

total = sum(20, 15);
console.log(total);
total = subtract(20, 5);
console.log(total);
total = multiply(20, 5);
console.log(total);
total = divide(20, 5);
console.log(total);


console.log('\nArrow functions');
//Arrow functions are a new way to write functions in ES6. They are a shorter way to write functions.
const sum2 = (a, b) => {
    return a + b;
}
const subtract2 = (a, b) => {
    return a - b;
}
const multiply2 = (a, b) => {
    return a * b;
}
const divide2 = (a, b) => {
    return a / b;
}
//if the function only has one line of code, you can remove the curly braces and the return keyword.
// For example: const sum = (a, b) => a + b;

total = sum2(20, 15);
console.log(total);
total = subtract2(20, 5);
console.log(total);
total = multiply2(20, 5);
console.log(total);
total = divide2(20, 5);
console.log(total);