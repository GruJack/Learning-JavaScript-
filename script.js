/*
let js = 'Amazing';

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

true;
console.log(true);

let javaScriptIsFun = true;

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 'jonas');
console.log(typeof 23);

javaScriptIsFun = 'Yes!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1980;
console.log(typeof year);

// the bugg in JavaScript with the comand typeof

console.log(typeof null);
//na konsoli ce nam izaci da je null objekt sto nema nikakvog smisla, zato se to zove bug u javvascript-u

 ##################Tipovi Variables   Let, Const, Var ##############/

* let -  koristimo ako smo sigurni da cemo variable menjati u buducnosti 
idealne su ako hocemo da mutiramo ili zadamo praznu variable.

primer mutiranja:
let age = 30;
age = 31;

primer prazne vrednosti:

let year;       

 Const  - koristi se po defaultu svuda , osim ako tu vrednost ne zelimo da menjamo u    buducnosti. Tada koristimo "Let"
  -Const  je zadata vrednost koja nemoze mutirati, ako pokusamo dobicemo error.

  primer za const :

  const birth = 1980;

  var  -  Ovo je stari nacin zadavanja variabales, i NE TREBA GA NIKADA KORISTITI!
         Koristio se u pre ES6 verziji. Slican je varijabli Let , ali ispod povrsine veoma razlicit.



################ OPERATORI  ############################

    Matematicki ili Aritmeticki    

 '+'  plus    sabiranje i konkatinacija
   '-'  minus  oduzimanje
   '/' divide    deljenje
   '*'  muliply   mnozenje
   ' 2 ** 3'   dva na treci

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

      TYPEOF operator     

let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);


    ASIGNMENT operators   


let x = 10 + 5;  // 15
x += 10;  // x = x + 10 = 25
x *= 4  // x = x * 4 = 100
x++;   // x = x + 1
x--;   // x = x - 1 

console.log(x);


  Comparison opertators    

 

console.log(ageJonas > ageSarah);  // <, >, >=, <=
console.log(ageSarah >= 18);

//nemoramo zakljucati ove operacije za console.log, mozemo ih sacuvati u variable:

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

x = y = 25 - 10 - 5;  //x = y = 10, x = 10
console.log(x, y); 

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const now = 2022;

const john = 'My name is ' + firstName + ', i work as a ' + job + ' and i am ' + (now - birthYear) + ' years old.';
console.log(john);

// template literals example , and hhow to use it to create string.

const newJohn = `My name is ${firstName}, i work as a ${job} and i am ${now - birthYear} years old.`;
console.log(newJohn);


//      IF ELSE  statements

const age = 19;
if (age >= 18) {
    console.log(' Great Sara can start driving licence!');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`)
}

//drugi primer

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 19;
} else {
    century = 21;
}
console.log(century);


//Type Conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

//guess output game

let n = '1' + 1;
n = n - 1;
console.log(n);

   //  falsy Values 
   1.  0
   2.  ''
   3.  undefined
   4.  null
   5.  NaN 


console.log(Boolean(0));               //False 
console.log(Boolean('Jonas'));         //true   
console.log(Boolean({}));              //true  
console.log(Boolean(''));              //False  

const money = 0;
if (money) {
    console.log(`Dont spend it all!`);
} else {
    console.log(`You should get a job!`);   // this will be output because o is falsy
}

let height;
if (height) {
    console.log(`Yay! Height is DEFINED`);
} else {
    console.log(`Height is UNDEFINED!`)
}


   // BUGG u JAVASCRIPT, iako smo definisali Height sa Let Height = 0; 
    //   Java ga i dalje predstavlja kao nedefinisan.
let height = 0;
if (height) {
    console.log(`Yay! Height is DEFINED`);
} else {
    console.log(`Height is UNDEFINED!`)
}


// Equaliti Operators === , == .

// ===    strict equaliti operator -  it will give true value only if 
//        both values are exactly the same. No Coercion

// ==     loose equaliti operator -  it will give a true value even if
//        types are not the same so it will do coercion of types.

// !==   strict not equal operator, oposite from strict equal
// !=    loose not equal operator, oposite of loose equal

// !     NOT  operator

const age = '18';
if (age === 18) console.log(`you just became an adult!  STRICT`);// ALWAYS USE THIS  ONE!!!

if (age == 18) console.log(`you just became an adult!  LOOSE`);



const favorite = Number(prompt("What is your favorite number?"));
if (favorite === 23) {
    console.log("COOL!23 is an amazing number!");
} else if (favorite === 7) {
    console.log("Cool! 7 is also a great number");
} else if (favorite === 9) {
    console.log("Cool! 9 is also a great number");
} else {
    console.log("Number is not 23 or 7");
}
if (favorite !== 23) {
    console.log("why not 23?");
}


//    LOGICAL OPERATORS

const hasDriverLicence = true;
const hasGoodVision = true;
const isTired = false;
console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);
console.log(hasDriverLicence && hasGoodVision && isTired);

if (hasDriverLicence && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`)
} else {
    console.log(`Someone else should drive!`)
}



//   THE SWITCH STATEMENT---made for equality(===) statement

const day = 'sunday';     //here we define the constante

switch (day) {      //this takes constante that will be switched
    case 'monday': // day === 'monday' if day is equal to monday
        console.log(` jutarnji trening`);   //execute this 
        console.log('ucenje');              //and this 
        break;                     //and stop the execution here
    case 'tuesday':
        console.log(`setnja po prirodi`);
        console.log(`ucenje`);
        break;
    case 'wednesday':
        console.log(`trening`);
        console.log(`ucenje`);
        break;
    case 'thursday':
        console.log(`ucenje`);
        console.log(`setnja sa zenom`);
        break;
    case 'friday':
        console.log(`trening`);
        console.log(`ucenje`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`rostiljanje ne jezeru`);
        console.log(`ribolov`);
        console.log(`odmor uz serije `);
        break;
    default:
        console.log(`Not a valid day`);

}      


  //  ista svrha koda samo uradjena sa  if, else if  operatorima
const day = 'monday';

if (day === 'monday') {
    console.log(`Jutarnji trening.
    Ucenje`);
} else if (day === 'tuesday') {
    console.log(`setnja po prirodi.
    Ucenje`);
} else if (day === 'wednesday') {
    console.log(`trening.
    ucenje.`);
} else if (day === 'thursday') {
    console.log(`ucenje.
    setnja sa zenom.`);
} else if (day === 'friday') {
    console.log(`Trening .
    Ucenje`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Izlet na jezero, pecanje.
    odmor uz serijicu i kulaza`);
} else {
    console.log(`not a valid day`);
}


 //      Statements(declarations) and Expressions

   3-5  // expression
   if (3>1){
       console.log('hello world');         // Statement
   }



  //    Conditional Operator (Ternary(three parts))

  koristi se tamo gde nemozemo da koristimo if , else if operator,  kao naprimer u Template Literals, i tamo gde nam treba da donesemo brze odluke .

  /conditional operator:

  const drink = age >= 18 ? 'wine' : 'water';
  console.log(drink);
 
  / else if operator :

  let drink;
  if (age >= 18){
      drink = 'wine';
  } else {
      drink = 'water';
  }
  console.log(drink);

  // primer koriscenja ternary operatora u Template Literals

   console.log(`my favorite drink is ${age >= 18 ? 'wine' : 'water'});

   */