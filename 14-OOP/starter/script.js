'use strict';
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const newCar = new Car('BMW', 120);

// console.log(newCar);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
//   return this.speed;
// };

// newCar.accelerate();
// console.log(newCar);

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };
// newCar.brake();
// console.log(newCar);

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//     return this.speed;
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }
//   get speedUS() {
//     this.speed /= 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const newCar = new Car('Ford', 120);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// Person.prototype.changeName = function (name) {
//   this.firstName = name;
//   console.log(this.firstName);
// };

// const Student = function (firstName, birthYear, course) {
//   //   this.firstName = firstName;
//   //   this.birthYear = birthYear;
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course} `);
// };

// const mike = new Student('Mike', 1992, 'CS');
// console.log(mike);
// mike.introduce();
// mike.calcAge();
// mike.changeName('soka');
// console.log(mike);

// const UniversityStd = function (firstName, birthYear, course, studyYear) {
//   Student.call(this, firstName, birthYear, course);
//   this.studyYear = studyYear;
// };
// UniversityStd.prototype = Object.create(Student.prototype);

// const mark = new UniversityStd('Mark', 1992, 'CS', 2);
// console.log(mark);
// mark.calcAge();

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const newCar = new Car('BMW', 120);

// console.log(newCar);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
//   return this.speed;
// };

// newCar.accelerate();
// console.log(newCar);

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };
// newCar.brake();
// console.log(newCar);

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(this.charge);
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(this.speed, this.charge);
// };

// const tesla = new EV('tesla', 150, 20);
// console.log(tesla);

// tesla.accelerate();
// newCar.accelerate();
// tesla.brake();
// tesla.chargeBattery(50);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     const year = new Date().getFullYear();
//     console.log(year - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     const year = new Date().getFullYear();
//     return year - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
// }

// const Amer = new StudentCl('Amer Slaiman', 1992, 'CS');
// Amer.calcAge();

// class Account {
//   locale = navigator.language;
//   bank = 'NOM';
//   #movement = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this.movement = [];
//     // this.local = navigator.language;
//   }
//   deposit(val) {
//     this.#movement.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//   #approvedLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.#approvedLoan(val)) {
//       this.deposit(val);
//     }
//     console.log('nfokho');
//     return this;
//   }
//   getMovement() {
//     console.log(this.#movement);
//     return this.#movement;
//   }
// }

// const acc1 = new Account('Amer', 'Eur', 111);

// acc1.deposit(100);
// acc1.withdraw(50);

// console.log(acc1);

// acc1.requestLoan(1500);
// console.log();
// acc1
//   .deposit(500)
//   .deposit(200)
//   .withdraw(300)
//   .requestLoan(25000)
//   .withdraw(300)
//   .deposit(500)
//   .getMovement();

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EV extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(val) {
    this.#charge = val;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    return this;
  }
}

const car = new EV('bnb', 150, 60);
console.log(car);
car.accelerate().accelerate().brake();
