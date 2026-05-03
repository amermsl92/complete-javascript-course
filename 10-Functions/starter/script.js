'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers,
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const amer = {
//   name: 'Amer Slaiman',
//   passportNumber: 1232342,
// };

// const checkIn = (flightNum = 'LH999', passanger) => {
//   // flightNum = 'LH999';
//   passanger.name = ` Mr.${passanger.name}`;

//   console.log(flightNum);
//   if (passanger.passportNumber === 1232342) console.log('baah');
//   else console.log('mmmmm');
//   return [flightNum, passanger.name];
// };

// console.log(checkIn(flight, amer));

// const upperFirstWord = str => {
//   const [first, ...others] = str.split(' ');
//   const newStr = [first.toUpperCase(), ...others].join(' ');
//   return newStr;
// };

// upperFirstWord('sad dsadasad,  asdasd,d asda');

// const transformer = (str, fn) => {
//   console.log(str);
//   console.log(`traasda: ${fn(str)}`);
// };

// transformer('Fasdre  asdafwe. wer qw asdasd ', upperFirstWord);

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet('bog')('sada');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('sog0')('sssdeqweqweertgfgdvhjfjdjjdj');

// const flightData = [583, 'gfer asdasd  asda'];

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
//     );
//     this.bookings.push({ flight: this.iataCode + flightNum, name });
//   },
// };

// lufthansa.book(239, 'Amer Slaiman');
// lufthansa.book(635, 'Aya Alfar ');
// console.log(lufthansa);

// const book = lufthansa.book;

// const eurewings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// book.call(eurewings, 234, 'Ahamad Ahmamad');
// console.log(eurewings);

// const swiss = {
//   airline: 'Swiss AirLines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 564, 'ghgfg');

// book.apply(swiss, flightData);

// const bookEW = book.bind(eurewings);
// bookEW(9009, 'dfdfw rwqeq ');

// const bookSW = book.bind(swiss);
// bookSW(903, 'eeeerr edfddf');

// lufthansa.planes = 300;
// console.log(lufthansa);
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value, bb) => {
//   console.log(value);
//   console.log(rate);
//   return [value + value * (rate / 100), bb];
// };

// const addVAT = addTax.bind(null, 13);

// console.log(addVAT(100, 2));

//

// const secureBooking = () => {
//   let passangerCount = 0;
//   return () => {
//     passangerCount++;
//     console.log(`${passangerCount} passanger`);
//     return passangerCount;
//   };
// };

// const booker = secureBooking();
// console.log(booker());
// console.log(booker());
// console.log(booker());
// console.log(booker());
// console.log(booker());
// console.log(booker());
// console.log(booker());
// console.log(booker());
// console.log(booker());
// const booker2 = secureBooking();
// console.log(booker2());

// let passangerCount = 0; // Moved outside!

// const secureBooking = () => {
//   return () => {
//     passangerCount++;
//     console.log(`${passangerCount} passanger`);
//   };
// };

// const booker = secureBooking();
// const booker2 = secureBooking();
// console.log(booker());
// console.log(booker2());
(()=>{
  const header = document.querySelector('h1');
  header.style.color = 'red';
})();
