// Values and Variables
const country = 'USA';
const continent = 'North America';
let population = '16'
console.log(country)
console.log(continent)
console.log(population)

// Data Types
const isIsland = false;
let language;

console.log(isIsland);
console.log(typeof isIsland);
console.log(language);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

language = "English"
console.log(language)

population /= 2
population ++
let finland = 6000000
let averagePopulation = 33000000
const description = "Portugal is in Europe, and its 11 million people speak protuguese."
console.log(population)
console.log(population > finland)
console.log(population < averagePopulation)
console.log(description)

const myName = 'Ricky';
const wifesName = 'Jovana';
const currentYear = 2023
const yearsMarried = currentYear - 2021;
const cat1 = 'Moonlight';
const cat2 = 'Wednesday';

console.log(`My name is ${myName} and I am married to my wife ${wifesName}. 
We have been married for ${yearsMarried} years and have two cats ${cat1} and ${cat2}.`)

population = 34
if(population > 33) {
    console.log(`Portugal's population is above average`)
} else {
    console.log(`Portugal's population is 22 million below average`)
}



const numNeighbors = Number(prompt("How many neighbour countries does your country have?"));
if (numNeighbors === 1) {
    console.log("Only 1 border")
} else if (numNeighbors > 1) {
    console.log("More than 1 border")
} else { 
    console.log("No borders")
}