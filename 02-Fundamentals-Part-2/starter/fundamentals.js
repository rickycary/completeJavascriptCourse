'use strict'

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
