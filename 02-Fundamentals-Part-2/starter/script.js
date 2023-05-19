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
// const friends = ['Ricky', 'Jovana', 'Wednesday'];

// // Add Elements
// const newLength = friends.push('Moonlight')
// console.log(friends)
// console.log(newLength)
// friends.unshift('George')
// console.log(friends)

// // Remove Elements
// const popped = friends.pop();
// console.log(friends)
// friends.shift();
// console.log(friends)

// console.log(friends.indexOf('Jovana'))

// console.log(friends.includes('George'))
// console.log(friends.includes('Ricky'))

// if (friends.includes('Ricky')) {
//     console.log('You have a friend named Ricky')
// }

///////////////////
// Introduction to Objects
///////////////////

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const introObjects = {
//     firstName: 'Ricky',
//     lastName: 'Cary',
//     age: 32,
//     job: 'Nurse',
//     friends: ['Moonlight', 'Wednesday']
// };

// ///////////////////
// // Dot vs Bracket Notation
// ///////////////////

// console.log(introObjects);
// console.log(introObjects.lastName);
// console.log(introObjects['lastName']);

// const nameKey = 'Name';
// console.log(introObjects['first' + nameKey]);
// console.log(introObjects['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Ricky? Choose between firstName, lastName, age, job and friends?');
// console.log(introObjects[interestedIn]);

// if(introObjects[interestedIn]) {
//     console.log(introObjects[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends?')
// }

// introObjects.location = 'San Antonio';
// introObjects['linkedIn'] = '@rickycary';
// console.log(introObjects)

// // Challenge
// console.log(`${introObjects.firstName} has ${introObjects.friends.length} friends and his best friend is called ${introObjects.friends[0]}`);

///////////////////
// Object Methods
///////////////////

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     // Function
//     // calcAge: function(birthYear) {
//     //     return 2023 - birthYear;
//     // }

//     calcAge: function (){
//         // console.log(this)
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }
// };

// console.log(jonas.calcAge())

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // Challenge
// console.log(jonas.getSummary());

///////////////////
// Iteration: For Loop
///////////////////

// console.log('Lifting weights repetition 1')
// console.log('Lifting weights repetition 2')
// console.log('Lifting weights repetition 3')
// console.log('Lifting weights repetition 4')
// console.log('Lifting weights repetition 5')
// console.log('Lifting weights repetition 6')
// console.log('Lifting weights repetition 7')
// console.log('Lifting weights repetition 8')
// console.log('Lifting weights repetition 9')
// console.log('Lifting weights repetition 10')

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights Repitition ${rep}`)
}

///////////////////
// Looping Arrays, Breaking and Continuing
///////////////////