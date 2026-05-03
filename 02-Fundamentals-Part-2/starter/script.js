// 'use strict';

// const cutFruitPieces = (fruit) => fruit * 4;
// const fruitProcessor = (apples, oranges) => {
//      apples = cutFruitPieces(apples);
//      oranges = cutFruitPieces(oranges)/2;
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(8, 4);
// console.log(appleJuice);


// // Reviewing Functions
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return null;
//   }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));



const calcAvgSpend = (month1, month2, month3) => {
    return (month1 + month2 + month3) / 3;
}

function checkStatus (avgGold, avgRegular){
    return avgGold >= avgRegular*3 ? console.log(`Gold Status achieved!`): console.log(`Keep sipping...`);
}

const winner = checkStatus(calcAvgSpend(1000, 100, 100), calcAvgSpend(50, 50, 50));
console.log(winner);

const calcAverage = (result1, result2, result3) => {
    return (result1 + result2 + result3)/3;
}

function checkDominace (speed1 , speed2, carName1, carName2){
    if (speed1 >= 1.5* speed2){
        console.log(`${carName1} is dominate ${speed1} vs ${speed2} `);
        return speed1;

    }else if (speed2 >= 1.5* speed1){
        console.log(`${carName2} is dominate ${speed2} vs ${speed1} `);
        return speed2;
    }else 
        console.log(`It's a close race...`);
}

const winner2 = checkDominace(calcAverage(50, 60, 40), calcAverage(20, 40, 30), "Ferrari", "Mustang");

function gradeMaster (studentGrade, passGrade){
    return studentGrade >= 2* passGrade ? console.log(`Mastery level!`): console.log(`Standard pass`);
}

const master = gradeMaster(calcAverage(50, 100, 100), 40);


let friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
friends = ['Bob', 'Alice']
console.log(friends);

const firstName = 'Jonas';
const jonas1 = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas1);
console.log(jonas1.length);

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDL: true
};

jonas.marrid = true;

console.log(jonas);

if (jonas.marrid){
    console.log(10)
}

console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and ${jonas.hasDL === true ? "he has a driver's license": "he does not have a driver's license "}`);


/* Write your code below. Good luck! 🙂 */

/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

// 1. We MUST call the methods first so the .bmi properties are created!
mark.calcBMI();
john.calcBMI();

// 2. We use a clean if/else statement to handle the string logging
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else{
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
const arryJohn = new Array(john);
console.log(arryJohn);
console.log(arryJohn.length);