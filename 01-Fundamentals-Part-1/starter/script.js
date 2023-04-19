// let js = 'amazing';

// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// -------------- Values and Variables ---------------//
// let firstName = "Ricky";

// console.log(firstName);

// let myFirstJob = "Programmer";
// let myCurrentJob = "Nurse";

// console.log(myFirstJob)
// console.log(myCurrentJob)

//
// Data Types 
//
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Ricky');

// javascriptIsFun = 'Yes!';

// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year)

// -------------- let, const and var ---------------//

// let age = 30;
// age = 31;

// const birthYear = 1991;

// // Never use var 
// var job = 'programmer';
// job = 'nurse';

// lastName = 'Cary';
// console.log(lastName)

// -------------- Basic Operators ---------------//
// const now = 2023
// const ageRicky = now - 1991;
// const ageJovana = now - 1991;
// console.log(ageRicky, ageJovana);
// console.log(ageRicky * 2, ageRicky / 2, 2 ** 3);

// const firstName = 'Ricky';
// const lastName = 'Cary';
// console.log(firstName + ' ' + lastName);

// // Assignment Operators
// let x = 10 + 5;
// x += 10; // x = x + 10
// x *= 4 // x = x * 4 = 100
// x++ // x = x + 1
// console.log(x);

// // Comparison Operators
// console.log(ageJovana > ageRicky);
// console.log(ageRicky >= 18);

// const isFullAge = ageRicky >= 18;
// console.log(now - 1991 > now - 2018);

// -------------- Operator Precedence ---------------//
// console.log(25 - 10 - 5)

// let x, y;
// x = y = 25 - 10 -5
// console.log(x, y); 

// -------------- String and Template Literals ---------------//
// const firstName = 'Ricky';
// const job = 'nurse';
// const newJob = 'Software Developer'
// const birthYear = 1991;
// const year = 2023

// const ricky = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(ricky)

// const rickyNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}, but I'm transitioning to becoming a ${newJob}!`
// console.log(rickyNew)

// console.log(`String
// multiple
// lines`)

// -------------- Taking Decisions: if / else Statements ---------------//
// const age = 15;

// if(age >= 18) {
//     console.log('Sarah can start driving license 🚗')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young to drive. Wait another ${yearsLeft} years to learn how to drive. `)
// }

// const birthYear = 2012;
// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// } 

// console.log(century)

// -------------- Type Conversion and Coercion ---------------//
// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(typeof NaN);
// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old' )
// console.log('23' - '10' - 3)

// -------------- Truthy and Falsy Values ---------------//
// 5 falsy values: 0, '', undefined, null, NaN 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ricky'));
console.log(Boolean({}));
console.log(Boolean(NaN));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all")
} else {
    console.log("You should get a job!")
}

let height = 1;
if (height) {
    console.log("Yay! Height is defined!");
} else {
    console.log("Height is UNDEFINED!")
}