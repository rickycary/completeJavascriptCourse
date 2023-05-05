'use strict'

///////////////////
//Functions
///////////////////

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


///////////////////
//Function Declarations vs Expressions
///////////////////

function precentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const precentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const country1 = precentageOfWorld1(10);
const country2 = precentageOfWorld2(38)
const country3 = precentageOfWorld2(100)

console.log(country1, country2, country3)