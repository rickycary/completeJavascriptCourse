// Use Strict mode
'use strict'
// let hasDriversLicense = false; 
// const passTest = true; 

// if (passTest) hasDriversLicense = true; 
// if (hasDriversLicense) console.log("I can drive!")

// const interface = 'Audio'
// const private = 534; 

/////////////////////////////////
// Functions
/////////////////////////////////
// function logger() {
//     console.log("My name is Ricky");
// }
// Calling / Running / Invoking the function 
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice; 
// }

// const appleJuice = fruitProcessor(3, 4);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

/////////////////////////////////
// Function Declarations vs Expressions
/////////////////////////////////

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1)

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1999);

console.log(age1, age2);