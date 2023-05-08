'use strict'

///////////////////
//Functions
///////////////////

function describeCountry(country, population, capitalCity){
    console.log(country, population, capitalCity);
    const returnString =  `${country} has ${population} million people and it's capital city is ${capitalCity}.`
    return returnString;
}
console.log(describeCountry)

const callFunction1 = describeCountry("Finland", 6, "Helsinki")
const callFunction2 = describeCountry("US", 8, "Washington DC")
const callFunction3 = describeCountry("Mexico", 2, "Juarez")


console.log(callFunction1)
console.log(callFunction2)
console.log(callFunction3)


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

/////////////////
// Arrow Functions
/////////////////

const precentageOfWorld3 = (population) => {
    return (population / 7900) * 100;
}
const country4 = precentageOfWorld1(1000);

console.log(country4)


///////////////////
// Functions calling other functions
///////////////////
const describePopulation = (country, population) => {
    const percentage =  precentageOfWorld1(population)
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
};

describePopulation('USA', 10)

///////////////////
// Arrays
///////////////////
const populations = [50, 51, 70, 80]
console.log(populations)
console.log(populations.length === 4)

const percentages = [
    precentageOfWorld1(populations[0]),
    precentageOfWorld1(populations[1]),
    precentageOfWorld1(populations[2]),
    precentageOfWorld1(populations[3]),
]
console.log(percentages)