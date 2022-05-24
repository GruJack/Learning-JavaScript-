/*
//CHALENGE 1
let marksWeight = 78;
let marksHeight = 1.69;
let johnsWeight = 92;
let johnsHeight = 1.95;

let bmiMark = marksWeight / (marksHeight ** 2);
let bmiJohn = johnsWeight / (johnsHeight ** 2);
let markHigherBMI = bmiMark > bmiJohn;

console.log("Mark's BMI is: " + bmiMark);
console.log("John's BMI is: " + bmiJohn);
console.log(markHigherBMI);
/*
marksWeight = 95;
marksHeight = 1.88;
johnsWeight = 85;
johnsHeight = 1.76;

bmiMark = marksWeight / (marksHeight * marksHeight);
bmiJohn = johnsWeight / (johnsHeight * johnsHeight);
markHigherBMI = bmiMark > bmiJohn;

console.log("Mark's BMI is: " + bmiMark);
console.log("John's BMI is: " + bmiJohn);
console.log(markHigherBMI);

    // CHALENGE 2
const marksWeight = 78;
const marksHeight = 1.69;
const johnsWeight = 92;
const johnsHeight = 1.95;

const bmiMark = marksWeight / (marksHeight ** 2);
const bmiJohn = johnsWeight / (johnsHeight ** 2);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI(${bmiMark}) is higher then John's BMI(${bmiJohn})!`);
} else {
    console.log(`John's BMI(${bmiJohn}) is higher then Mark's BMI(${bmiMark})!`);
}



//  Chalenge 3

// part 1

const dolphinsAS1 = (96 + 108 + 89) / 3;
console.log(`Dolphins averege score is: ${dolphinsAS1}`);
const koalasAS1 = (88 + 91 + 110) / 3;
console.log(`Koalas average score is: ${koalasAS1}`);
if (dolphinsAS1 > koalasAS1) {
    console.log(`Dolphins are the winner!!!`);
} else if (koalasAS1 > dolphinsAS1) {
    console.log(`Koalas are the winner!!!`);
} else if (dolphinsAS1 === koalasAS1) {
    console.log(`ITS A DRAW!!!`);
}

//   Chalenge 3 Bonus


//  bonus part 1

const dolphinsAS2 = (97 + 112 + 101) / 3;
console.log(`Dolphins averege score is: ${dolphinsAS2}`);
const koalasAS2 = (109 + 95 + 123) / 3;
console.log(`Koalas average score is: ${koalasAS2}`);

if (dolphinsAS2 > koalasAS2 && dolphinsAS2 >= 100) {
    console.log(`Dolphins are the winner!!!`);
} else if (koalasAS2 > dolphinsAS2 && koalasAS2 >= 100) {
    console.log(`Koalas are the winner!!!`);
} else if (koalasAS2 < 100 && dolphinsAS2 < 100) {
    console.log(`NO WINNER! both teams under minimum score of 100pts!`);
}



// bonus part 2

const dolphinsAS3 = (97 + 23 + 23) / 3;
console.log(`Dolphins averege score is: ${dolphinsAS3}`);
const koalasAS3 = (23 + 95 + 23) / 3;
console.log(`Koalas average score is: ${koalasAS3}`);

if (dolphinsAS3 > koalasAS3 && dolphinsAS3 >= 100) {
    console.log(`Dolphins are the winner!!!`);
} else if (koalasAS3 > dolphinsAS3 && koalasAS3 >= 100) {
    console.log(`Koalas are the winner!!!`);
} else if (dolphinsAS3 === koalasAS3 && koalasAS3 >= 100) {
    console.log(`No Winner! Its a Draw`);
} else if (koalasAS3 < 100 && dolphinsAS3 < 100) {
    console.log(`NO WINNER! both teams under minimum score of 100pts!`);
}

//       MOJA VERZIJA SA PROMPT
const enterData = {

    scoreD1: Number(prompt(`Enter Dolphins score 1/3`)),
    scoreD2: Number(prompt(`Enter Dolphins score 2/3`)),
    scoreD3: Number(prompt(`Enter Dolphins score 3/3`)),
    scoreK1: Number(prompt(`Enter Koalas score 1/3`)),
    scoreK2: Number(prompt(`Enter Koalas score 2/3`)),
    scoreK3: Number(prompt(`Enter Koalas score 3/3`))
}

const dolphinsAS3 = (enterData.scoreD1 + enterData.scoreD2 + enterData.scoreD3) / 3;
const koalasAS3 = (enterData.scoreK1 + enterData.scoreK2 + enterData.scoreK3) / 3;
alert(`Koalas average score is: ${koalasAS3}
Dolphins average score is: ${dolphinsAS3}`);

if (dolphinsAS3 > koalasAS3 && dolphinsAS3 >= 100) {
    alert(`Dolphins are the winner!!!`);
} else if (koalasAS3 > dolphinsAS3 && koalasAS3 >= 100) {
    alert(`Koalas are the winner!!!`);
} else if (dolphinsAS3 === koalasAS3 && koalasAS3 >= 100) {
    alert(`No Winner! Its a Draw`);
} else if (koalasAS3 < 100 && dolphinsAS3 < 100) {
    alert(`NO WINNER! both teams under minimum score of 100pts!`);
}
*/

// chalenge 4

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

console.log(`Your bill is: ${bill}$, 
the tip is: ${tip}$,
totalni amount to pay ${bill + tip}$`);