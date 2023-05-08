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

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1)

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1999);

// console.log(age1, age2);

/////////////////////////////////
// Arrow Functions
/////////////////////////////////

// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age3)

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement(1991, 'Jovana'));
// console.log(yearsUntilRetirement(1980, 'Ricky'))

///////////////////
// Functions Calling Other Functions
///////////////////

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice; 
// }
// console.log(fruitProcessor(2, 3));

///////////////////
// Reviewing Functions
///////////////////

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function(birthyear, firstName) {
//     const age = calcAge(birthyear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         return `${firstName} retires in ${retirement} years.`
//     } else {
//         return `${firstName} has already retired`;
//     }

//     // return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1991, 'Ricky'))
// console.log(yearsUntilRetirement(1970, 'Mike'))

///////////////////
// Arrays
///////////////////

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends)

// const year = new Array(1991, 1984, 2008, 2020);
// console.log(years)

// console.log(friends[0])
// console.log(friends[2])
// console.log(friends.length)
// console.log(friends.length - 1)

// friends[2] = 'Ricky'
// console.log(friends)

// const firstName = 'Ricky';
// const ricky = [firstName, 'San Antonio', 2023 - 1991];
// console.log(ricky)
// console.log(ricky.length)

// Exercise
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);

// console.log(age1, age2, age3)

///////////////////
// Basic Array Operations
///////////////////
const friends = ['Ricky', 'Jovana', 'Wednesday'];

// Add Elements
const newLength = friends.push('Moonlight')
console.log(friends)
console.log(newLength)
friends.unshift('George')
console.log(friends)

// Remove Elements
const popped = friends.pop();
console.log(friends)
friends.shift();
console.log(friends)

console.log(friends.indexOf('Jovana'))

console.log(friends.includes('George'))
console.log(friends.includes('Ricky'))

if (friends.includes('Ricky')) {
    console.log('You have a friend named Ricky')
}