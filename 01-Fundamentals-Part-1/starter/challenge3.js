scoreDolphins = (96 + 108 + 89) / 3
scoreKoalas = (88 + 91 + 10) / 3

console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas) {
    console.log("The Dolphins have the higher average score!")
} else if (scoreKoalas > scoreDolphins) {
    console.log("The Koalas have the higher average score!")
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy")
};

