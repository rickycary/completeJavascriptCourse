'use strict'

// ///////////////////
// //Functions
// ///////////////////

// function describeCountry(country, population, capitalCity){
//     console.log(country, population, capitalCity);
//     const returnString =  `${country} has ${population} million people and it's capital city is ${capitalCity}.`
//     return returnString;
// }
// console.log(describeCountry)

// const callFunction1 = describeCountry("Finland", 6, "Helsinki")
// const callFunction2 = describeCountry("US", 8, "Washington DC")
// const callFunction3 = describeCountry("Mexico", 2, "Juarez")


// console.log(callFunction1)
// console.log(callFunction2)
// console.log(callFunction3)


// ///////////////////
// //Function Declarations vs Expressions
// ///////////////////

// function precentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const precentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }

// const country1 = precentageOfWorld1(10);
// const country2 = precentageOfWorld2(38)
// const country3 = precentageOfWorld2(100)

// console.log(country1, country2, country3)

// /////////////////
// // Arrow Functions
// /////////////////

// const precentageOfWorld3 = (population) => {
//     return (population / 7900) * 100;
// }
// const country4 = precentageOfWorld1(1000);

// console.log(country4)


// ///////////////////
// // Functions calling other functions
// ///////////////////
// const describePopulation = (country, population) => {
//     const percentage =  precentageOfWorld1(population)
//     const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
//     console.log(description);
// };

// describePopulation('USA', 10)

// ///////////////////
// // Arrays
// ///////////////////
// const populations = [50, 51, 70, 80]
// console.log(populations)
// console.log(populations.length === 4)

// const percentages = [
//     precentageOfWorld1(populations[0]),
//     precentageOfWorld1(populations[1]),
//     precentageOfWorld1(populations[2]),
//     precentageOfWorld1(populations[3]),
// ]
// console.log(percentages)

// const myCountry = {
//     country: 'USA',
//     capital: 'Washington DC',
//     language: 'English',
//     population: 50,
//     neighbors: ['Mexico', 'Canada']
// }


// ///////////////////
// // Dot vs. Bracket Notation
// ///////////////////
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}`)

///////////////////
// Object Methods
///////////////////

// const myCountry = {
//     country: 'Finland',
//     capital: 'Helsinki',
//     language: 'finnish',
//     population: 6,
//     neighbours: ['Norway', 'Sweden', 'Russia'],
//     describe: function () { console.log(
//     `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     ); },
//     checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//         // Even simpler version (see why this works...)
//         // this.isIsland = !Boolean(this.neighbours.length);
//     } };
//     myCountry.describe();
//     myCountry.checkIsland();
//     console.log(myCountry);

///////////////////
// The For Loop
///////////////////

// for(let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`)
// }

///////////////////
// Looping Arrays, Breaking and Continuing 
///////////////////

// const populations = [10, 1441, 332, 83]; 
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages2.push(perc);
// }
// console.log(percentages2)

///////////////////
// Looping Backwards and Loops in Loops
///////////////////

const listOfNeighbors = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']    
]

for (let i = 0; i < listOfNeighbors.length; i++)
    for (let y = 0; y < listOfNeighbors[i].length; y++)
        console.log(`Neighbors: ${listOfNeighbors[i][y]}`)

///////////////////
// The While Loop
///////////////////

const percentages3 = [];
let i = 0;
while (i < populations.length) {
const perc = percentageOfWorld1(populations[i]); percentages3.push(perc);
i++;
}
console.log(percentages3);