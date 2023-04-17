const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);

if(bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's!`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's!`)
}