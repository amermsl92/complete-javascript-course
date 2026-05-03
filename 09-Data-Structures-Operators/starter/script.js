'use strict';

// Data needed for a later exercise

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`order recived `);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is pasta betch ${ing1}, ${ing2}, ${ing3}`);
  },
};
//const ingredians = [prompt('give me ing1'), prompt('ing2'), prompt('ing3')];
//restaurant.orderPasta(...ingredians);

const newRes = { foundedIn: 1990, ...restaurant, founder: 'betchhhh' };

// copy an array
// const arr = [1, 2, 3];
// const badNewArr = [5,4,arr[0], arr[1], arr[2]];
// const NewArr = [5,4, ...arr];

// const {first, second} = restaurant.order(2, 0);
// console.log(first, second);

// const nested = [3, 9, [10, 5, 9]];

// const [i, j, [k, , m]] = nested;

// console.log(i, j, k, m);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// let a = 10,
//   b = 20;

// const obj = { a: 1, b: 2, c: 3 };
// const { a: d = 10, b: e = 20, c: f = 30, d: g = 10 } = obj;
// ({ a, b } = obj);
// console.log(d, e, f, g);
// console.log(a, b);

// restaurant.orderDelivery({
//   address: 'via del soler 21',
//   time: '22:30',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// restaurant.newMainMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(restaurant.newMainMenu);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

// const gk1 = players1[0],
//   gk2 = players2[0],
//   feildsPlayers1 = players1.slice(1),
//   feildsPlayers2 = players2.slice(1);

const [gk1, ...feildsPlayers1] = players1;
const [gk2, ...feildsPlayers2] = players2;
console.log(gk1, ' ', gk2, ' ');
console.log(feildsPlayers1);
console.log(feildsPlayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const playerFinal = [...players1, 'Thiago', 'Coutinho', 'Persisc'];
console.log(playerFinal);

const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(team1, team2, draw);

const printGoals = (...players) => {
  let str = '';
  str = `${players.length} goals were scored`;
  for (const player of players) {
    str += ` ${player}`;
  }
  console.log(str);
};

printGoals('fdsfs', 'fwerrwer', 'ffggsqqwrtgdf');

console.log(team1 < team2 ? 'tem 1 will win' : 'tem 2 will win');

const playerScroed = game.scored.entries();

for (let [index, player] of playerScroed) {
  console.log(`Goal ${index + 1}: ${player}`);
}

const odd = Object.values(game.odds);
console.log(odd);
let avg = 0;
for (let number of odd) {
  avg += Number(number);
}
console.log(`the avarage ${avg / odd.length}`);

const teams = Object.entries(game.odds);

for (const [team, odd] of teams) {
  if (game[team]) {
    console.log(`odd of victory ${game[team]}: ${odd}`);
  } else console.log(`odd of draw: ${odd}`);
}

let obj1 = {};

for (const player of game.scored) {
  if (!obj1[player]) {
    obj1[player] = 1;
  } else {
    obj1[player] += 1;
  }
}
console.log(obj1);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(gameEvents);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`,
);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const str = flights.split('_');
console.log(str);
